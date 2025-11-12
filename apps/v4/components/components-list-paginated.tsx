"use client"

import * as React from "react"
import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

import { PAGES_NEW } from "@/lib/docs"
import { useContentPagination } from "@/hooks/use-content-pagination"
import { LazyIframe } from "@/components/lazy-iframe"
import { Index } from "@/registry/__index__"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
}

interface ComponentsListPaginatedProps {
  items: ComponentItem[]
  styleName?: string
}

function ComponentPreview({
  registryName,
  styleName,
  itemName,
  isAnimation,
}: {
  registryName: string
  styleName: string
  itemName: string
  isAnimation: boolean
}) {
  // Special cases for components that need specific demos
  const specialCases: Record<string, string> = {
    chart: "chart-bar-demo", // chart requires ChartConfig, use bar demo
    "data-table": "data-table-demo",
  }

  // Use special case if it exists
  let previewName: string | null = specialCases[registryName] || null

  // If no special case, try to find a demo version (e.g., "accordion-demo" for "accordion")
  if (!previewName) {
    const demoName = `${registryName}-demo`
    const demoExists = Index[styleName]?.[demoName]?.component

    // Check if base component exists
    const Component = Index[styleName]?.[registryName]?.component
    const registryItem = Index[styleName]?.[registryName]

    // Prefer demo, fallback to component
    previewName = demoExists ? demoName : Component && registryItem ? registryName : null
  } else {
    // Verify special case exists
    if (!Index[styleName]?.[previewName]?.component) {
      previewName = null
    }
  }

  if (!previewName) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-muted-foreground text-center text-sm">
          <div className="mb-2 text-4xl">📦</div>
          <div className="text-xs">
            {registryName || "No preview"}
          </div>
        </div>
      </div>
    )
  }

  // Render iframe preview - animations are scrollable, components are not
  return (
    <LazyIframe
      src={`/view/${styleName}/${previewName}`}
      className={`h-full w-full border-0 ${isAnimation ? "" : "overflow-hidden"}`}
      title={itemName}
      scrolling={isAnimation ? "yes" : "no"}
    />
  )
}

export function ComponentsListPaginated({
  items,
  styleName = "new-york-v4",
}: ComponentsListPaginatedProps) {
  const { displayCount, hasMore, loadMoreRef, totalCount } =
    useContentPagination(items, {
      initialLoad: 6,
      loadMore: 6,
    })

  // Only show the first displayCount items
  const visibleItems = items.slice(0, displayCount)

  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {visibleItems.map((item) => {
          const registryName = item.registryName || item.$id
          const isAnimation = item.url.includes("/animations")

          return (
            <div
              key={item.$id}
              className={`group relative flex flex-col gap-2 rounded-lg border ${isAnimation ? "overflow-clip" : "overflow-hidden"}`}
            >
              <div data-slot="preview" className={isAnimation ? "overflow-clip" : "overflow-hidden"}>
                <div
                  data-align="center"
                  className={`preview flex h-[450px] w-full justify-center items-center ${isAnimation ? "overflow-clip" : "overflow-hidden"}`}
                >
                  <ComponentPreview
                    registryName={registryName}
                    styleName={styleName}
                    itemName={String(item.name)}
                    isAnimation={isAnimation}
                  />
                </div>
              </div>
              <Link
                href={item.url}
                className="flex items-center justify-between gap-2 border-t px-4 py-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{item.name}</span>
                  {PAGES_NEW.includes(item.url) && (
                    <span
                      className="flex size-2 rounded-full bg-blue-500"
                      title="New"
                    />
                  )}
                </div>
                <IconArrowRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          )
        })}
      </div>

      {/* Load more trigger */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex min-h-[200px] items-center justify-center py-8"
        >
          <div className="text-muted-foreground text-sm">
            Loading more... ({displayCount} / {totalCount})
          </div>
        </div>
      )}

      {!hasMore && items.length > 0 && (
        <div className="flex items-center justify-center py-8">
          <div className="text-muted-foreground text-sm">
            All {totalCount} loaded
          </div>
        </div>
      )}
    </>
  )
}
