import React from "react"
import { cn } from "@/lib/utils"

type SVGBaseProps = {
  className?: string
  fill?: boolean
  children: React.ReactNode
  viewBox?: string
}

const SVGBase = ({
  className,
  fill = true,
  children,
  viewBox = "0 0 30 30",
}: SVGBaseProps) => {
  return (
    <svg
      viewBox={viewBox}
      fill={fill ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 text-primary", className)}
    >
      {children}
    </svg>
  )
}

export default SVGBase
