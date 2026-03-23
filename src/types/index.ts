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
  imagePath?: string
  position: string
  startDate: string
  endDate?: string
  location: string
  isCurrentWork: boolean
  description?: string[]
}

export type Project = {
  name: string
  link?: string
  imagePath?: string
  gifPath?: string
  githubLink?: string
  description: string
  technologiesUsed: Technology["name"][]
}

export type Track = {
  id: string
  name: string
  artist: string
  album: string
  albumImageUrl: string
  spotifyUrl: string
}
