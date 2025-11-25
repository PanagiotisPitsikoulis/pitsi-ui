import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface ReadinessBadgeProps {
  readiness?: "alpha" | "beta" | "production"
  className?: string
}

export function ReadinessBadge({ readiness, className }: ReadinessBadgeProps) {
  if (!readiness) return null

  const config = {
    alpha: {
      title: "Alpha",
    },
    beta: {
      title: "Beta",
    },
    production: {
      title: "Stable",
    },
  }

  const { title } = config[readiness]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "bg-muted absolute top-4 right-6.5 z-[97] flex size-3.5 cursor-help items-center justify-center rounded-full text-[8px]",
            className
          )}
        >
          {config[readiness].title.slice(0, 1)}
        </div>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
