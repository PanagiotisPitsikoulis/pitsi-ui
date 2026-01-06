"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { Bookmark, Box, Clock, Layers, Waves } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

const FILTER_ITEMS = [
  { id: "all", label: "All", icon: Layers, filter: null },
  { id: "saved", label: "Saved", icon: Bookmark, filter: "saved" },
  { id: "recent", label: "Recently Viewed", icon: Clock, filter: "recent" },
]

const NAV_LINKS = [
  {
    id: "components",
    label: "Components",
    icon: Box,
    href: "/docs/components",
  },
  {
    id: "animations",
    label: "Animations",
    icon: Waves,
    href: "/docs/animations",
  },
]

export function ComponentsFilter() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentFilter = searchParams.get("filter")

  const isNavActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const getFilterHref = (filter: string | null) => {
    if (filter) {
      return `${pathname}?filter=${filter}`
    }
    return pathname
  }

  return (
    <div className="bg-muted flex items-center gap-1 rounded-full p-1.5">
      <TooltipProvider delayDuration={0}>
        {/* Nav Links */}
        {NAV_LINKS.map((item) => {
          const Icon = item.icon
          const active = isNavActive(item.href)

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full transition-colors",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {item.label}
              </TooltipContent>
            </Tooltip>
          )
        })}

        {/* Separator */}
        <div className="bg-border mx-1 h-5 w-px" />

        {/* Filter toggles */}
        {FILTER_ITEMS.map((item) => {
          const Icon = item.icon
          const active =
            item.filter === currentFilter ||
            (item.filter === null && !currentFilter)

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link
                  href={getFilterHref(item.filter)}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full transition-colors",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  )}
                >
                  <Icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {item.label}
              </TooltipContent>
            </Tooltip>
          )
        })}
      </TooltipProvider>
    </div>
  )
}
