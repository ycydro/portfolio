import {
  ExpressIcon,
  GitIcon,
  GMLIcon,
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

export const techStack: Technology[] = [
  {
    icon: JavascriptIcon,
    name: "javascript",
  },
  {
    icon: TypescriptIcon,
    name: "typescript",
  },

  {
    icon: TailwindIcon,
    name: "tailwindcss",
  },
  {
    icon: ReactIcon,
    name: "react",
  },
  {
    icon: NodeIcon,
    name: "node",
  },
  {
    icon: ExpressIcon,
    name: "express",
  },
  {
    icon: SocketIOIcon,
    name: "socket.io",
  },
  {
    icon: MySQLIcon,
    name: "mysql",
  },
  {
    icon: SupabaseIcon,
    name: "supabase",
  },
  {
    icon: GMLIcon,
    name: "gamemaker language",
  },
  {
    icon: GitIcon,
    name: "git",
  },
]
