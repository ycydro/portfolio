import type { Experience } from "@/types"
import type { MouseEventHandler } from "react"

type ExperienceDescriptionProps = {
  description: Experience["description"]
  onClick?: MouseEventHandler<HTMLUListElement>
}

const ExperienceDescription = ({
  description = undefined,
  onClick,
}: ExperienceDescriptionProps) => {
  return (
    <>
      {description && description.length > 0 && (
        <ul onClick={onClick}>
          {description.map((item, index) => (
            <li
              key={index}
              className="ml-5.25 list-disc text-sm leading-6 wrap-break-word whitespace-normal text-muted-foreground md:text-lg md:leading-8 md:tracking-[0.035em]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ExperienceDescription
