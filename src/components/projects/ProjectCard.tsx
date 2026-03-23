import { techStack } from "@/data/tech-stack"
import type { Project } from "@/types"
import IconWithText from "../common/IconWithText"
import { GithubIcon } from "../svgs/socials"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import GlareHover from "../common/GlareHover"

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const isMobile = useIsMobile()

  const projectImagePath =
    // default image path for mobile is gif (if exists)
    (isMobile || isHovering) && project.gifPath
      ? project.gifPath
      : project.imagePath

  return (
    <GlareHover className="transition-transform duration-500 hover:md:-translate-y-1">
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="group hover:-translate flex max-w-full flex-col overflow-hidden rounded-2xl border-2 border-foreground md:min-h-50 md:flex-row"
      >
        {/* Project Image  */}
        <img
          src={projectImagePath}
          className="max-h-50 object-cover md:max-w-85 md:min-w-85"
        />
        {/* Project Info */}
        <div className="flex w-full flex-col items-start justify-evenly space-y-1.5 p-3 md:space-y-0">
          {/* Name and Techs */}
          <div className="flex w-full justify-between">
            <p className="text-2xl font-bold uppercase md:text-4xl">
              {project.name}
            </p>
            <div className="flex items-center justify-evenly gap-2">
              {project.technologiesUsed?.map((technologyUsed) => {
                const techWithIcon = techStack.find(
                  (tech) => technologyUsed === tech.name
                )
                const Icon = techWithIcon?.icon || null
                return (
                  <div key={`${project.name}-${technologyUsed}`}>
                    {Icon && <Icon className="size-4.5 md:size-6" />}
                  </div>
                )
              })}
            </div>
          </div>
          {/* Description */}
          <p className="text-xs font-light text-(--semi-muted) md:text-[18px]">
            {project.description}
          </p>
          <div className="flex w-full items-center justify-start gap-2">
            {project.githubLink && (
              <a
                target="_blank"
                href={project.githubLink}
                className="hover:underline"
              >
                <IconWithText
                  icon={GithubIcon}
                  className="md:gap-1"
                  iconClassName="size-4.5 md:size-6"
                  text="source code"
                />
              </a>
            )}
            {project.link && (
              <a
                target="_blank"
                href={project.link}
                className="hover:underline"
              >
                <IconWithText
                  className="md:gap-1"
                  icon={ExternalLink}
                  iconClassName="size-4.5 md:size-6"
                  text="view"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlareHover>
  )
}

export default ProjectCard
