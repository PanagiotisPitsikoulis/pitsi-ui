"use client"

import * as React from "react"

import { useContentPagination } from "@/hooks/use-content-pagination"

interface BlocksListPaginatedProps {
  children: React.ReactNode
}

export function BlocksListPaginated({ children }: BlocksListPaginatedProps) {
  const childrenArray = React.Children.toArray(children)

  const { displayCount, hasMore, loadMoreRef, totalCount } =
    useContentPagination(childrenArray, {
      initialLoad: 6,
      loadMore: 6,
    })

  // Only show the first displayCount blocks
  const visibleBlocks = childrenArray.slice(0, displayCount)

  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">{visibleBlocks}</div>

      {/* Load more trigger */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex min-h-[200px] items-center justify-center py-8"
        >
          <div className="text-muted-foreground text-sm">
            Loading more blocks... ({displayCount} / {totalCount})
          </div>
        </div>
      )}

      {!hasMore && childrenArray.length > 0 && (
        <div className="flex items-center justify-center py-8">
          <div className="text-muted-foreground text-sm">
            All {totalCount} blocks loaded
          </div>
        </div>
      )}
    </>
  )
}
