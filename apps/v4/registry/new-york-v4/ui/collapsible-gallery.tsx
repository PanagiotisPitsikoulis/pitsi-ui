"use client"

import * as React from "react"

import { ChevronDown } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

/* -----------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface CollapsibleGalleryProps<T> {
  /** Title displayed in the header */
  title: string
  /** Array of items to display */
  items: T[]
  /** Render function for each item */
  renderItem: (item: T, index: number) => React.ReactNode
  /** Unique key extractor for each item */
  keyExtractor: (item: T, index: number) => string
  /** Width of each item in collapsed horizontal scroll mode */
  itemWidth?: number
  /** Number of grid columns in expanded mode (responsive) */
  gridCols?: {
    default?: number
    md?: number
    lg?: number
  }
  /** Text for expand button */
  expandText?: string
  /** Text for collapse button */
  collapseText?: string
  /** Additional class name for the root element */
  className?: string
  /** Default open state */
  defaultOpen?: boolean
  /** Custom render function for expanded content (overrides default grid) */
  renderExpandedContent?: () => React.ReactNode
}

/* -----------------------------------------------------------------------------
 * CollapsibleGallery
 * -------------------------------------------------------------------------- */

function CollapsibleGallery<T>({
  title,
  items,
  renderItem,
  keyExtractor,
  itemWidth = 280,
  gridCols = { default: 1, md: 2, lg: 3 },
  expandText = "View all",
  collapseText = "Collapse",
  className,
  defaultOpen = false,
  renderExpandedContent,
}: CollapsibleGalleryProps<T>) {
  // Build grid classes
  const gridClassName = cn(
    "grid gap-6",
    gridCols.default && `grid-cols-${gridCols.default}`,
    gridCols.md && `md:grid-cols-${gridCols.md}`,
    gridCols.lg && `lg:grid-cols-${gridCols.lg}`
  )

  return (
    <div
      data-slot="collapsible-gallery"
      className={cn("bg-muted rounded-xl p-4", className)}
    >
      <Collapsible className="group/collapsible" defaultOpen={defaultOpen}>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-muted-foreground text-sm font-medium">{title}</h2>
          <CollapsibleTrigger className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 flex items-center gap-1 rounded text-sm transition-colors focus-visible:ring-[3px] focus-visible:outline-none">
            <span className="group-data-[state=open]/collapsible:hidden">
              {expandText}
            </span>
            <span className="group-data-[state=closed]/collapsible:hidden">
              {collapseText}
            </span>
            <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </div>

        {/* Collapsed: Horizontal scroll */}
        <div className="relative -mx-2 px-2 group-data-[state=open]/collapsible:hidden">
          <div className="no-scrollbar flex gap-6 overflow-x-auto pb-2">
            {items.map((item, index) => (
              <div
                key={keyExtractor(item, index)}
                className="shrink-0"
                style={{ width: itemWidth }}
              >
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Expanded: Grid or custom content */}
        <CollapsibleContent>
          {renderExpandedContent ? (
            renderExpandedContent()
          ) : (
            <div className={gridClassName}>
              {items.map((item, index) => (
                <div key={keyExtractor(item, index)}>
                  {renderItem(item, index)}
                </div>
              ))}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export { CollapsibleGallery }
