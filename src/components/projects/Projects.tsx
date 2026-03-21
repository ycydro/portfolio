import { projects } from "@/data/projects"
import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import ProjectList from "./ProjectList"

const Projects = () => {
  return (
    <Container className="flex flex-col gap-2 md:py-5">
      <SectionHeading text="projects" />
      <ProjectList projects={projects} />
    </Container>
  )
}

export default Projects
