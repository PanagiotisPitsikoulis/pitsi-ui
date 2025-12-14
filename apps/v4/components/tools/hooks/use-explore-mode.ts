"use client"

import { useCallback, useState } from "react"

interface UseExploreModeOptions<T> {
  /**
   * Callback when an item is selected (via navigation)
   */
  onSelect?: (item: T, index: number) => void
}

/**
 * Hook for managing explore/carousel mode navigation
 */
function useExploreMode<T>(
  items: T[],
  options: UseExploreModeOptions<T> = {}
) {
  const { onSelect } = options

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToIndex = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1))
      setCurrentIndex(clampedIndex)
      if (items[clampedIndex]) {
        onSelect?.(items[clampedIndex], clampedIndex)
      }
    },
    [items, onSelect]
  )

  const next = useCallback(() => {
    if (currentIndex < items.length - 1) {
      goToIndex(currentIndex + 1)
    }
  }, [currentIndex, items.length, goToIndex])

  const previous = useCallback(() => {
    if (currentIndex > 0) {
      goToIndex(currentIndex - 1)
    }
  }, [currentIndex, goToIndex])

  const reset = useCallback(() => {
    goToIndex(0)
  }, [goToIndex])

  return {
    currentIndex,
    currentItem: items[currentIndex],
    setIndex: goToIndex,
    next,
    previous,
    reset,
    isAtStart: currentIndex === 0,
    isAtEnd: currentIndex >= items.length - 1,
    hasExploredAll: currentIndex >= items.length,
    totalItems: items.length,
  }
}

export { useExploreMode }
export type { UseExploreModeOptions }
