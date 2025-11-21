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
      className: "bg-destructive",
      title: "Alpha",
    },
    beta: {
      className: "bg-warning",
      title: "Beta",
    },
    production: {
      className: "bg-success",
      title: "Production",
    },
  }

  const { className: badgeClassName, title } = config[readiness]

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "absolute top-4 right-[1.375rem] z-[98] size-3.5 cursor-help rounded-full",
            badgeClassName,
            className
          )}
        />
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
