import {
  ExpressIcon,
  GitIcon,
  GMLIcon,
  GSAPIcon,
  JavascriptIcon,
  MySQLIcon,
  NodeIcon,
  ReactIcon,
  SocketIOIcon,
  SupabaseIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/svgs/technologies"
import type { Technology } from "@/types"

export enum MyTechnologies {
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  TAILWINDCSS = "tailwindcss",
  GSAP = "gsap",
  REACT = "react",
  NODEJS = "node",
  EXPRESS = "express",
  SOCKETIO = "socket.io",
  MYSQL = "mysql",
  SUPABASE = "supabase",
  GML = "gml",
  GIT = "git",
}

export const techStack: Technology[] = [
  {
    icon: JavascriptIcon,
    name: MyTechnologies.JAVASCRIPT,
  },
  {
    icon: TypescriptIcon,
    name: MyTechnologies.TYPESCRIPT,
  },

  {
    icon: TailwindIcon,
    name: MyTechnologies.TAILWINDCSS,
  },
  {
    icon: GSAPIcon,
    name: MyTechnologies.GSAP,
  },
  {
    icon: ReactIcon,
    name: MyTechnologies.REACT,
  },
  {
    icon: NodeIcon,
    name: MyTechnologies.NODEJS,
  },
  {
    icon: ExpressIcon,
    name: MyTechnologies.EXPRESS,
  },
  {
    icon: SocketIOIcon,
    name: MyTechnologies.SOCKETIO,
  },
  {
    icon: MySQLIcon,
    name: MyTechnologies.MYSQL,
  },
  {
    icon: SupabaseIcon,
    name: MyTechnologies.SUPABASE,
  },
  {
    icon: GMLIcon,
    name: MyTechnologies.GML,
  },
  {
    icon: GitIcon,
    name: MyTechnologies.GIT,
  },
]
