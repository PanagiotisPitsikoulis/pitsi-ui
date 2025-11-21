"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useInView } from "motion/react"

export interface ContentPaginationOptions {
  initialLoad: number
  loadMore: number
}

/**
 * Hook for infinite scroll pagination of content items
 */
export function useContentPagination<T>(
  items: T[],
  options: ContentPaginationOptions = {
    initialLoad: 40,
    loadMore: 40,
  }
) {
  const [displayCount, setDisplayCount] = useState(options.initialLoad)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const [shouldLoadMore, setShouldLoadMore] = useState(false)

  const isInView = useInView(loadMoreRef, {
    margin: "200px",
    once: false,
  })

  // Reset display count when items change (filter change)
  const [prevItemsLength, setPrevItemsLength] = useState(items.length)
  if (items.length !== prevItemsLength) {
    setDisplayCount(options.initialLoad)
    setPrevItemsLength(items.length)
  }

  // Trigger load more when coming into view
  // This avoids setState in the isInView effect
  if (isInView && displayCount < items.length && !shouldLoadMore) {
    setShouldLoadMore(true)
  }

  // Reset load more trigger when going out of view
  if (!isInView && shouldLoadMore) {
    setShouldLoadMore(false)
  }

  // Separate effect to handle the actual pagination
  useEffect(() => {
    if (shouldLoadMore) {
      //@ts-ignore
      setDisplayCount((prev) => {
        if (prev < items.length) {
          return Math.min(prev + options.loadMore, items.length)
        }
        return prev
      })
      setShouldLoadMore(false)
    }
  }, [shouldLoadMore, items.length, options.loadMore])

  const displayedItems = useMemo(() => {
    return items.slice(0, displayCount)
  }, [items, displayCount])

  const hasMore = displayCount < items.length

  return {
    displayedItems,
    displayCount,
    hasMore,
    loadMoreRef,
    totalCount: items.length,
  }
}
