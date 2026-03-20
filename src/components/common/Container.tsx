import { cn } from "@/lib/utils"
import React from "react"

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return <section className={cn("p-2 md:p-7", className)}>{children}</section>
}

export default Container
