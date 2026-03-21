import { experiences } from "@/data/experience"
import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import ExperienceList from "./ExperienceList"

const Experience = () => {
  return (
    <Container className="flex flex-col gap-2 md:py-5">
      <SectionHeading text="experience" />
      <ExperienceList experiences={experiences} />
    </Container>
  )
}

export default Experience
