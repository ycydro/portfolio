import type { Experience } from "@/types"

type ExperienceDescriptionProps = {
  description: Experience["description"]
}

const ExperienceDescription = ({
  description = undefined,
}: ExperienceDescriptionProps) => {
  return (
    <>
      {description && description.length > 0 && (
        <ul>
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
