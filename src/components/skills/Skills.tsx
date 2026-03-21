import { techStack } from "@/data/tech-stack"
import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import TechStack from "./TechStack"

const Skills = () => {
  return (
    <Container className="flex flex-col justify-between gap-2 md:py-5">
      <SectionHeading text="tech stack" />
      {/* Tech stack */}
      <TechStack technologies={techStack} />
    </Container>
  )
}

export default Skills
