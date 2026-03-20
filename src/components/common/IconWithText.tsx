import { cn } from "@/lib/utils"
import type { IconType } from "@/types"

type IconWithTextProps = {
  icon: IconType
  text: string
  iconSize?: string
  className?: string
}

const IconWithText = ({
  icon,
  iconSize,
  text,
  className,
}: IconWithTextProps) => {
  const Icon = icon
  return (
    <div
      className={cn(
        "flex items-center gap-1 hover:underline md:gap-2",
        className
      )}
    >
      <Icon className={(cn("h-3 w-3 md:h-6 md:w-6"), iconSize)} />
      <div className="text-sm font-light md:text-base">{text}</div>
    </div>
  )
}

export default IconWithText
