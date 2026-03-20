import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import IconWithText from "../common/IconWithText"
import { aboutLinks } from "@/data/about-links"

const About = () => {
  return (
    <Container className="space-y-1">
      <SectionHeading text="who am i?" />
      <p className="text-md text-muted-foreground md:text-xl">
        yooo! i’m cyd. i like building stuff. i usually build using typescript,
        react, node, and express.
      </p>
      <div className="flex gap-3 py-1.5 md:py-3">
        {aboutLinks.map((link, i) => {
          const Icon = link.icon
          return (
            <a key={i} href={link.link} target="_blank">
              <IconWithText icon={Icon} text={link.name} />
            </a>
          )
        })}
      </div>
    </Container>
  )
}

export default About
