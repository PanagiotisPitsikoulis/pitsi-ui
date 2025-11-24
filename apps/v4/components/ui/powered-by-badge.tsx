import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface PoweredByItem {
  name: string
  url?: string
}

interface PoweredByBadgeProps {
  poweredBy?: PoweredByItem[]
  className?: string
  variant?: "default" | "inline"
}

export function PoweredByBadge({
  poweredBy,
  className,
  variant = "default",
}: PoweredByBadgeProps) {
  if (!poweredBy || poweredBy.length === 0) return null

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
        <span className="text-muted-foreground text-xs">Powered by</span>
        {poweredBy.map((item, index) => (
          <Badge
            key={item.name}
            variant="secondary"
            className="text-xs font-normal"
          >
            {item.url ? (
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </Badge>
        ))}
      </div>
    )
  }

  // Default: tooltip on hover
  const label = poweredBy.map((p) => p.name).join(", ")

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "bg-muted text-muted-foreground absolute bottom-4 left-4 z-[98] cursor-help rounded-md px-2 py-1 text-xs",
            className
          )}
        >
          <span className="opacity-60">Powered by</span>{" "}
          <span className="font-medium">{poweredBy[0].name}</span>
          {poweredBy.length > 1 && (
            <span className="opacity-60"> +{poweredBy.length - 1}</span>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <div className="space-y-1">
          <p className="font-medium">Powered by</p>
          <div className="flex flex-wrap gap-1">
            {poweredBy.map((item) => (
              <span key={item.name}>
                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {item.name}
                  </Link>
                ) : (
                  item.name
                )}
              </span>
            ))}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
