import type { Experience } from "@/types"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "../ui/button"
import ExperienceDesciption from "./ExperienceDescription"

type ExpendableExperienceItemProps = {
  experience: Experience
  latest: boolean
}

const ExpendableExperienceItem = ({
  experience,
  latest,
}: ExpendableExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(latest)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [latest])

  const handleToggle = () => {
    const expanding = !isExpanded
    setIsExpanded(expanding)
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Experience Info */}
      <div className="flex w-full justify-between gap-2">
        {/* Company and Job Title */}
        <div className="flex h-full justify-center gap-2">
          {/* Company Image */}
          {experience.imagePath && (
            <img
              src={experience.imagePath}
              className="aspect-square max-w-10 min-w-10 rounded-2xl md:max-w-15 md:min-w-15"
            />
          )}
          <div className="flex flex-col justify-center gap-px md:gap-0.5">
            {/* Company name */}
            <div className="flex items-center gap-1">
              <p className="h-fit text-sm font-bold md:text-xl">
                {experience.company}
              </p>
              <Button
                onClick={handleToggle}
                variant="ghost"
                size="icon"
                className="h-6 w-6 transition-transform duration-150 hover:bg-neutral-300 dark:hover:bg-neutral-800"
              >
                {!isExpanded ? (
                  <ChevronDown className="size-4" />
                ) : (
                  <ChevronUp className="size-4" />
                )}
              </Button>
            </div>
            <p className="h-fit text-xs font-light md:text-base">
              {experience.position}
            </p>
          </div>
        </div>
        {/* Duration */}
        <div className="flex justify-center">
          <div className="flex flex-col items-end justify-center gap-px md:gap-0.5">
            <p className="h-fit text-sm font-bold md:text-xl">
              {experience.startDate} -{" "}
              {experience.isCurrentWork ? "Present" : experience.endDate}
            </p>
            <p className="h-fit text-xs font-light md:text-base">
              {experience.location}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable section */}
      <div
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="w-full overflow-hidden transition-all duration-400 ease-in-out"
      >
        <div ref={contentRef} className="w-full">
          <ExperienceDesciption description={experience.description} />
        </div>
      </div>
    </div>
  )
}

export default ExpendableExperienceItem
