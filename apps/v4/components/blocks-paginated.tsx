"use client"

import { useContentPagination } from "@/hooks/use-content-pagination"

export function BlocksPaginated({
  blocks,
  children,
}: {
  blocks: string[]
  children: React.ReactNode[]
}) {
  const { displayCount, hasMore, loadMoreRef, totalCount } =
    useContentPagination(blocks, {
      initialLoad: 6,
      loadMore: 6,
    })

  // Only show the first displayCount children
  const visibleChildren = children.slice(0, displayCount)

  return (
    <>
      <div className="flex flex-col gap-12 md:gap-24">{visibleChildren}</div>

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
    </>
  )
}
