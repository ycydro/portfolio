import type { LucideIcon } from "lucide-react"

export type IconType = React.ComponentType<{ className?: string }> | LucideIcon
export type AboutLink = {
  name: string
  icon: IconType
  link: string
}
export interface Technology {
  icon?: IconType
  name: string
}
export type Experience = {
  company: string
  image?: string
  position: string
  startDate: string
  endDate?: string
  location: string
  isCurrentWork: boolean
  description?: string[]
}
