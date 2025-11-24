import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface TierBadgeProps {
  tier?: "free" | "pro"
  className?: string
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  if (!tier) return null

  const config = {
    free: {
      className: "bg-green-500",
      title: "Free",
    },
    pro: {
      className: "bg-yellow-400",
      title: "Pro",
    },
  }

  const { className: badgeClassName, title } = config[tier]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-4 right-4 z-[98] size-3.5 cursor-help rounded-full",
            badgeClassName,
            className
          )}
        />
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
