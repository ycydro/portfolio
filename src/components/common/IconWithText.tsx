import { cn } from "@/lib/utils"
import type { IconType } from "@/types"

type IconWithTextProps = {
  icon: IconType
  text: string
  iconClassName?: string
  className?: string
  enableHoverEffects?: boolean
}

const IconWithText = ({
  icon,
  iconClassName,
  text,
  className,
  enableHoverEffects = false,
}: IconWithTextProps) => {
  const Icon = icon
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 md:gap-2",
        {
          "transition-transform duration-300 ease-out hover:-translate-y-1":
            enableHoverEffects,
        },
        className
      )}
    >
      <Icon className={cn("size-5.5 md:size-6", iconClassName)} />
      <div className="text-sm font-light lowercase md:text-base">{text}</div>
    </div>
  )
}

export default IconWithText
