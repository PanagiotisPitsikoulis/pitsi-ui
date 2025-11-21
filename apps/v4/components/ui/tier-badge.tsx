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

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-4 right-4 z-[98] size-3.5 cursor-help rounded-full",
            tier === "free" ? "bg-primary" : "bg-warning",
            className
          )}
        />
      </TooltipTrigger>
      <TooltipContent>{tier === "free" ? "Free" : "Pro"}</TooltipContent>
    </Tooltip>
  )
}
