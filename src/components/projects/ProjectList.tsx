import type { Project } from "@/types"
import ProjectCard from "./ProjectCard"

type ProjectListProps = {
  projects: Project[]
}
const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="w-full space-y-7.5 px-3 md:px-0">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
