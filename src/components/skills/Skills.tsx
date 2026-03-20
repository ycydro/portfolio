import { techStack } from "@/data/tech-stack"
import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import IconWithText from "../common/IconWithText"

const Skills = () => {
  return (
    <Container className="flex flex-col justify-between gap-2 md:py-5">
      <SectionHeading text="tech stack" />
      {/* Tech stack */}
      <div className="flex max-w-200 flex-wrap gap-4 py-1.5 md:justify-center md:gap-x-6 md:gap-y-7 md:py-3">
        {techStack.map((tech) => (
          <IconWithText
            icon={tech.icon!}
            iconClassName="md:h-7.5 md:w-7.5"
            text={tech.name}
          />
        ))}
      </div>
    </Container>
  )
}

export default Skills
