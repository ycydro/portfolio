import type { AboutLink } from "@/types"
import { GithubIcon, LinkedInIcon } from "@/components/svgs/socials"
import { File } from "lucide-react"

export const aboutLinks: AboutLink[] = [
  {
    name: "resume",
    icon: File,
    link: "https://www.google.com/",
  },
  {
    name: "linkedin",
    icon: LinkedInIcon,
    link: "google.com",
  },
  {
    name: "github",
    icon: GithubIcon,
    link: "https://www.github.com/ycydro",
  },
]
