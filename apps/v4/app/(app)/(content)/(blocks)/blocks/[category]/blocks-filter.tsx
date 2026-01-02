"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {
  Bookmark,
  Box,
  Clock,
  Download,
  Layers,
  MoreVertical,
  Palette,
  SlidersHorizontal,
  Type,
  Waves,
} from "@/lib/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const FILTER_ITEMS = [
  { id: "all", label: "All Blocks", icon: Layers, filter: null },
  { id: "saved", label: "Saved", icon: Bookmark, filter: "saved" },
  { id: "recent", label: "Recently Viewed", icon: Clock, filter: "recent" },
]

const NAV_LINKS = [
  { id: "components", label: "Components", icon: Box, href: "/docs/components" },
  { id: "animations", label: "Animations", icon: Waves, href: "/docs/animations" },
  { id: "installation", label: "Installation", icon: Download, href: "/docs/installation" },
]

const TOOLS = [
  { id: "theme-generator", label: "Theme Generator", icon: Palette, href: "/tools/theme-generator" },
  { id: "shadow-composer", label: "Shadow Composer", icon: Layers, href: "/tools/shadow-composer" },
  { id: "easing-composer", label: "Easing Composer", icon: Waves, href: "/tools/easing-composer" },
  { id: "spacing-generator", label: "Spacing Generator", icon: SlidersHorizontal, href: "/tools/spacing-generator" },
  { id: "typography-composer", label: "Typography Composer", icon: Type, href: "/tools/typography-composer" },
]

export function BlocksFilter() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentFilter = searchParams.get("filter")

  const isNavActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  const getFilterHref = (filter: string | null) => {
    if (filter) {
      return `${pathname}?filter=${filter}`
    }
    return pathname
  }

  return (
    <div className="container">
      <div className="flex items-center gap-1 rounded-full bg-muted p-1.5">
        <TooltipProvider delayDuration={0}>
          {/* Filter toggles */}
          {FILTER_ITEMS.map((item) => {
            const Icon = item.icon
            const active = item.filter === currentFilter || (item.filter === null && !currentFilter)

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

          {/* Separator */}
          <div className="mx-1 h-5 w-px bg-border" />

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

          {/* Tools Dropdown */}
          <div className="ml-auto">
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full transition-colors",
                      TOOLS.some((t) => isNavActive(t.href))
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                  >
                    <MoreVertical className="size-4" />
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Tools
                </TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-52">
                {TOOLS.map((tool) => {
                  const Icon = tool.icon
                  const active = isNavActive(tool.href)

                  return (
                    <DropdownMenuItem key={tool.id} asChild>
                      <Link
                        href={tool.href}
                        className={cn(
                          "flex items-center gap-2",
                          active && "bg-accent"
                        )}
                      >
                        <Icon className="size-4" />
                        {tool.label}
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TooltipProvider>
      </div>
    </div>
  )
}
