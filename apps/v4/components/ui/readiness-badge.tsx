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
  readiness = "alpha",
  className,
}: ReadinessBadgeProps) {
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
            "absolute top-4 right-[1.375rem] z-[98] flex size-5 cursor-help items-center justify-center rounded-full bg-muted text-[10px] font-medium uppercase text-muted-foreground",
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
