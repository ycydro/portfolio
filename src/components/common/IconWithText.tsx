import { cn } from "@/lib/utils"
import type { IconType } from "@/types"

type IconWithTextProps = {
  icon: IconType
  text: string
  iconClassName?: string
  className?: string
}

const IconWithText = ({
  icon,
  iconClassName,
  text,
  className,
}: IconWithTextProps) => {
  const Icon = icon
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 md:gap-2",
        className
      )}
    >
      <Icon className={(cn("h-3 w-3 md:h-6 md:w-6"), iconClassName)} />
      <div className="text-sm font-light lowercase md:text-base">{text}</div>
    </div>
  )
}

export default IconWithText
