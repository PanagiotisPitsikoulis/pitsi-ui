import { BadgeDollarSign, CircleDashed } from "lucide-react"

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
      icon: CircleDashed,
      title: "Free",
    },
    pro: {
      icon: BadgeDollarSign,
      title: "Pro",
    },
  }

  const { icon: Icon, title } = config[tier]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-2 right-2 z-[98] cursor-help rounded-full bg-black/90 p-1 dark:bg-white/90",
            className
          )}
        >
          <Icon className="size-3 text-white dark:text-black" strokeWidth={2} />
        </div>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
