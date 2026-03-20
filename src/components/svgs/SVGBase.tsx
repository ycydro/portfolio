import React from "react"
import { cn } from "@/lib/utils"

type SVGBaseProps = {
  className?: string
  fill?: boolean
  children: React.ReactNode
}

const SVGBase = ({ className, fill = true, children }: SVGBaseProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6 text-primary", className)}
    >
      {children}
    </svg>
  )
}

export default SVGBase
