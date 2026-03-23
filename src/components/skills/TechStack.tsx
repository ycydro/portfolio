import IconWithText from "../common/IconWithText"
import type { Technology } from "@/types"

type TechStackProps = {
  technologies: Technology[]
}

const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <div className="flex max-w-200 flex-wrap gap-4 py-1.5 md:justify-center md:gap-x-6 md:gap-y-7 md:py-3">
      {technologies.map((tech, i) => (
        <IconWithText
          key={i}
          className="cursor-default"
          icon={tech.icon!}
          iconClassName="md:size-7.5"
          text={tech.name}
          enableHoverEffects={true}
        />
      ))}
    </div>
  )
}

export default TechStack
