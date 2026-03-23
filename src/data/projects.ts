import type { Project } from "@/types"
import { MyTechnologies } from "./tech-stack"

export const projects: Project[] = [
  {
    name: "SDO-ACTS",
    imagePath: "/projects/sdo-acts.webp",
    githubLink: "https://github.com/ycydro/sdo-acts",
    description:
      "centralized web-based service ticketing, queue management and client feedback analytics  platform",
    technologiesUsed: [
      MyTechnologies.JAVASCRIPT,
      MyTechnologies.REACT,
      MyTechnologies.NODEJS,
      MyTechnologies.EXPRESS,
      MyTechnologies.SOCKETIO,
      MyTechnologies.MYSQL,
    ],
  },
  {
    name: "Ojtrack",
    link: "https://ojtrack.vercel.app",
    imagePath: "/projects/ojt.webp",
    githubLink: "https://github.com/ycydro/ojtrack",
    description:
      "react web app for tracking daily time-in and time-out logs of OJT interns",
    technologiesUsed: [
      MyTechnologies.JAVASCRIPT,
      MyTechnologies.REACT,
      MyTechnologies.SUPABASE,
    ],
  },
  {
    name: "Mental Archives",
    imagePath: "/projects/ma.webp",
    gifPath: "/projects/ma-gif.gif",
    link: "https://ycydro.itch.io/mental-archives",
    description: "a 2D horror-puzzle game",
    technologiesUsed: [MyTechnologies.GML],
  },
]
