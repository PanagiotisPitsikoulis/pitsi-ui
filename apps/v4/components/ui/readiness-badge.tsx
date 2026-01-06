import { OctagonX, TriangleAlert } from "@/lib/icons"
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
  if (!readiness || readiness === "production") return null

  const config = {
    alpha: {
      icon: OctagonX,
      title: "Alpha",
    },
    beta: {
      icon: TriangleAlert,
      title: "Beta",
    },
  }

  const selectedConfig = config[readiness as keyof typeof config]
  if (!selectedConfig) return null

  const { icon: Icon, title } = selectedConfig

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-2 right-8 z-[98] cursor-help rounded-full bg-black/90 p-1 dark:bg-white/90",
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
