"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"

export function BlocksSubcategoryNav({
  category,
  subcategories,
  subcategoryCounts,
  currentSubcategory,
}: {
  category: string
  subcategories: string[]
  subcategoryCounts: Record<string, number>
  currentSubcategory?: string
}) {
  if (subcategories.length === 0) {
    return null
  }

  return (
    <div className="border-border bg-background/95 sticky top-[--header-height] z-30 mb-8 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative overflow-hidden py-4">
        <ScrollArea className="max-w-none">
          <div className="flex items-center gap-2">
            {subcategories.map((subcategory) => {
              // Format subcategory name: replace dashes with spaces and capitalize
              const formattedName = subcategory
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")

              const count = subcategoryCounts[subcategory] || 0

              return (
                <Link
                  key={subcategory}
                  href={`/blocks/category/${category}/subcategory/${subcategory}`}
                  className={cn(
                    "text-muted-foreground hover:text-primary flex h-7 min-w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-4 text-center text-sm font-medium transition-colors",
                    currentSubcategory === subcategory && "bg-muted text-primary"
                  )}
                >
                  <span>{formattedName}</span>
                  <span className="text-muted-foreground text-xs">({count})</span>
                </Link>
              )
            })}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </div>
  )
}
