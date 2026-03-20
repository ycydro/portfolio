import type { LucideIcon } from "lucide-react"

export type IconType = React.ComponentType<{ className?: string }> | LucideIcon
export interface AboutLink {
  name: string
  icon: IconType
  link: string
}
export interface Technology {
  icon?: IconType
  name: string
}
