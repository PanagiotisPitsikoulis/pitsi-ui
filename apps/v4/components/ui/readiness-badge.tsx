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
      className: "bg-red-500",
      title: "Alpha",
    },
    beta: {
      className: "bg-orange-400",
      title: "Beta",
    },
    production: {
      className: "bg-green-500",
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
