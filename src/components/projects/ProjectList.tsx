import type { Project } from "@/types"
import ProjectCard from "./ProjectCard"

type ProjectListProps = {
  projects: Project[]
}
const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="w-full space-y-7.5 overflow-x-hidden px-3 md:px-0">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  )
}

export default ProjectList
