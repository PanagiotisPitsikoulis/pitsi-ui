"use client"

import { useEffect, useMemo, useRef, useState, useTransition } from "react"
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
  const [isPending, startTransition] = useTransition()
  const loadingRef = useRef(false)

  const isInView = useInView(loadMoreRef, {
    margin: "800px", // Load even earlier to prevent flash
    once: false,
  })

  // Reset display count when items change (filter change)
  const [prevItemsLength, setPrevItemsLength] = useState(items.length)
  if (items.length !== prevItemsLength) {
    setDisplayCount(options.initialLoad)
    setPrevItemsLength(items.length)
  }

  // Handle loading more items when in view
  useEffect(() => {
    if (isInView && displayCount < items.length && !loadingRef.current) {
      loadingRef.current = true

      // Use startTransition to make this a non-blocking, low-priority update
      startTransition(() => {
        setDisplayCount((prev) => {
          if (prev < items.length) {
            return Math.min(prev + options.loadMore, items.length)
          }
          return prev
        })
      })

      // Reset loading flag after a short delay
      setTimeout(() => {
        loadingRef.current = false
      }, 150)
    }
  }, [isInView, displayCount, items.length, options.loadMore])

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
