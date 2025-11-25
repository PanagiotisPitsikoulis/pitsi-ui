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

export function ReadinessBadge({
  readiness,
  className,
}: ReadinessBadgeProps) {
  if (!readiness) return null

  const config = {
    alpha: {
      label: "A",
      title: "Alpha",
    },
    beta: {
      label: "B",
      title: "Beta",
    },
    production: {
      label: "S",
      title: "Stable",
    },
  }

  const { label, title } = config[readiness]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-4 right-9 z-[98] flex size-4 cursor-help items-center justify-center rounded-full border-2 border-border bg-card text-[9px] font-bold uppercase text-card-foreground shadow-sm",
            className
          )}
        >
          {label}
        </div>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
