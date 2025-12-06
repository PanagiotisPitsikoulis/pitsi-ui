"use client"

import Image from "next/image"
import Link from "next/link"

import { LIBRARIES, type PoweredByLibrary } from "@/lib/config/powered-by"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface PoweredByBadgeProps {
  poweredBy?: PoweredByLibrary[]
  className?: string
  variant?: "default" | "inline" | "logos-only"
}

function resolveLibrary(item: PoweredByLibrary | { name: string; url?: string }): PoweredByLibrary | null {
  if ("logo" in item && item.logo) {
    return item as PoweredByLibrary
  }
  const found = Object.values(LIBRARIES).find(
    (lib) => lib.name.toLowerCase() === item.name.toLowerCase() || lib.id === item.name.toLowerCase()
  )
  return found || null
}

function LogoWithTooltip({ library, size = 20 }: { library: PoweredByLibrary; size?: number }) {
  const logoPath = `/powered-by/${library.logo}`

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={library.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:ring-ring rounded-md focus:outline-none focus:ring-2"
        >
          <Image
            src={logoPath}
            alt={library.name}
            width={size}
            height={size}
            className="size-5 object-contain"
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        {library.name}
      </TooltipContent>
    </Tooltip>
  )
}

export function PoweredByBadge({ poweredBy, className, variant = "default" }: PoweredByBadgeProps) {
  if (!poweredBy || poweredBy.length === 0) return null

  const libraries = poweredBy
    .map(resolveLibrary)
    .filter((lib): lib is PoweredByLibrary => lib !== null)

  if (libraries.length === 0) return null

  if (variant === "logos-only") {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {libraries.map((lib) => (
          <LogoWithTooltip key={lib.id} library={lib} />
        ))}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="text-muted-foreground text-xs">Powered by</span>
        <div className="flex items-center gap-1">
          {libraries.map((lib) => (
            <LogoWithTooltip key={lib.id} library={lib} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-background/80 absolute top-4 left-4 z-[98] flex items-center gap-2 rounded-lg border px-2 py-1.5 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <span className="text-muted-foreground text-xs">Powered by</span>
      <div className="flex items-center gap-0.5">
        {libraries.map((lib) => (
          <LogoWithTooltip key={lib.id} library={lib} size={16} />
        ))}
      </div>
    </div>
  )
}
