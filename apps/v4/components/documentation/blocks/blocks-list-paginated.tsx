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
    <div className="pb-8">
      <div className="grid grid-cols-1 gap-8">{visibleBlocks}</div>

      {/* Load more trigger */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex min-h-[200px] items-center justify-center py-8"
        ></div>
      )}
    </div>
  )
}
