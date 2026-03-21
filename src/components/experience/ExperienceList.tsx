import ExpendableExperienceItem from "./ExpendableExperienceItem"
import type { Experience } from "@/types"

type ExperienceListProps = {
  experiences: Experience[]
}
const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <div className="mt-1 w-full space-y-3 overflow-x-hidden">
      {experiences.map((experience, i) => {
        const latest = i === 0
        return (
          <ExpendableExperienceItem experience={experience} latest={latest} />
        )
      })}
    </div>
  )
}

export default ExperienceList
