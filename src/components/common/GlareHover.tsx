// REACT BITS COMPONENT
// https://reactbits.dev/animations/glare-hover
import React, { useRef } from "react"

interface GlareHoverProps {
  width?: string
  height?: string
  background?: string
  borderRadius?: string
  borderColor?: string
  children?: React.ReactNode
  glareColor?: string
  glareOpacity?: number
  glareAngle?: number
  glareSize?: number
  transitionDuration?: number
  playOnce?: boolean
  className?: string
  style?: React.CSSProperties
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  glareColor = "--foreground",
  glareOpacity = 0.33,
  glareAngle = -45,
  glareSize = 350,
  transitionDuration = 850,
  playOnce = true,
  className = "",
  style = {},
}) => {
  const formatColorWithOpacity = (color: string, opacity: number): string => {
    // Check if it's a CSS variable (starts with --)
    if (color.startsWith("--")) {
      return `color-mix(in oklch, var(${color}), transparent ${(1 - opacity) * 100}%)`
    }

    // Check if it's an OKLCH color
    if (color.startsWith("oklch")) {
      // Parse OKLCH color: oklch(l c h) or oklch(l c h / alpha)
      const match = color.match(/oklch\(([^)]+)\)/)
      if (match) {
        const values = match[1].split(/\s+/)
        if (values.length >= 3) {
          const l = values[0]
          const c = values[1]
          const h = values[2]
          // Remove any existing alpha
          const baseColor = `oklch(${l} ${c} ${h})`
          return `color-mix(in oklch, ${baseColor}, transparent ${(1 - opacity) * 100}%)`
        }
      }
      return color // Return as-is if parsing fails
    }

    // Handle hex colors (original logic)
    const hex = color.replace("#", "")
    if (/^[\dA-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
      const r = parseInt(hex[0] + hex[0], 16)
      const g = parseInt(hex[1] + hex[1], 16)
      const b = parseInt(hex[2] + hex[2], 16)
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    // Return as-is for other formats (rgb, rgba, hsl, etc.)
    return color
  }

  const formattedGlareColor = formatColorWithOpacity(glareColor, glareOpacity)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  const animateIn = () => {
    const el = overlayRef.current
    if (!el) return

    el.style.transition = "none"
    el.style.backgroundPosition = "-100% -100%, 0 0"
    el.style.transition = `${transitionDuration}ms ease`
    el.style.backgroundPosition = "100% 100%, 0 0"
  }

  const animateOut = () => {
    const el = overlayRef.current
    if (!el) return

    if (playOnce) {
      el.style.transition = "none"
      el.style.backgroundPosition = "-100% -100%, 0 0"
    } else {
      el.style.transition = `${transitionDuration}ms ease`
      el.style.backgroundPosition = "-100% -100%, 0 0"
    }
  }

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${formattedGlareColor} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none",
  }

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
      style={{
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  )
}

export default GlareHover
