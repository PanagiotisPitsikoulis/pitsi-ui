"use client"

import * as React from "react"

import { useContentPagination } from "@/hooks/use-content-pagination"
import { BlockDisplay } from "@/components/block-display-client"

interface BlocksListPaginatedProps {
  blocks: string[]
  styleName: string
}

export function BlocksListPaginated({
  blocks,
  styleName,
}: BlocksListPaginatedProps) {
  const { displayCount, hasMore, loadMoreRef, totalCount } =
    useContentPagination(blocks, {
      initialLoad: 6,
      loadMore: 6,
    })

  // Only show the first displayCount blocks
  const visibleBlocks = blocks.slice(0, displayCount)

  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">
        {visibleBlocks.map((name) => (
          <BlockDisplay key={name} name={name} styleName={styleName} />
        ))}
      </div>

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

      {!hasMore && blocks.length > 0 && (
        <div className="flex items-center justify-center py-8">
          <div className="text-muted-foreground text-sm">
            All {totalCount} blocks loaded
          </div>
        </div>
      )}
    </>
  )
}
