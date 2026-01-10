"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { Bookmark, Box, Clock, Layers, LayoutGrid, Waves } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

const FILTER_ITEMS = [
  { id: "all", label: "All", icon: Layers, filter: null, category: null },
  { id: "application", label: "Application", icon: LayoutGrid, filter: null, category: "application" },
  { id: "saved", label: "Saved", icon: Bookmark, filter: "saved", category: null },
  { id: "recent", label: "Recently Viewed", icon: Clock, filter: "recent", category: null },
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
  const currentCategory = searchParams.get("category")

  const isNavActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  const getFilterHref = (filter: string | null, category: string | null) => {
    const params = new URLSearchParams()
    if (filter) {
      params.set("filter", filter)
    }
    if (category) {
      params.set("category", category)
    }
    const queryString = params.toString()
    return queryString ? `${pathname}?${queryString}` : pathname
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
          const isActive = () => {
            // For "all" - active when no filter and no category
            if (item.filter === null && item.category === null) {
              return !currentFilter && !currentCategory
            }
            // For category filter (application) - active when category matches
            if (item.category) {
              return currentCategory === item.category && !currentFilter
            }
            // For saved/recent filters
            return item.filter === currentFilter
          }
          const active = isActive()

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link
                  href={getFilterHref(item.filter, item.category)}
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
