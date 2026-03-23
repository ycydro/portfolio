import Container from "../common/Container"
import SectionHeading from "../common/SectionHeading"
import IconWithText from "../common/IconWithText"
import { aboutLinks } from "@/data/about-links"

const About = () => {
  return (
    <Container className="flex flex-col gap-2">
      <SectionHeading text="who am i?" />
      <p className="text-muted-foreground md:text-xl">
        yooo! i’m cyd. i like building stuff. i usually build using typescript,
        react, node, and express.
      </p>
      <div className="flex gap-3 py-1.5 md:py-3">
        {aboutLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              className="underline-offset-3 hover:underline"
            >
              <IconWithText
                icon={Icon}
                text={link.name}
                enableHoverEffects={true}
              />
            </a>
          )
        })}
      </div>
    </Container>
  )
}

export default About
