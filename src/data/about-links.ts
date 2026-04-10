import type { AboutLink } from "@/types"
import { GithubIcon, LinkedInIcon } from "@/components/svgs/socials"
import { File } from "lucide-react"

export const aboutLinks: AboutLink[] = [
  {
    name: "resume",
    icon: File,
    link: "/about/CASTILLO_CYD_RESUME_2026.pdf",
  },
  {
    name: "linkedin",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/castillocyd/",
  },
  {
    name: "github",
    icon: GithubIcon,
    link: "https://www.github.com/ycydro",
  },
]
