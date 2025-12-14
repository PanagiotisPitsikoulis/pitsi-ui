"use client"

import { useCallback, useState } from "react"

interface SavedItemBase {
  id: string
  name: string
  createdAt: number
}

interface UseSavedItemsOptions {
  /**
   * Optional localStorage key for persistence
   */
  storageKey?: string
  /**
   * Maximum number of items to keep
   */
  maxItems?: number
}

/**
 * Hook for managing a list of saved items with optional persistence
 */
function useSavedItems<T extends SavedItemBase>(
  options: UseSavedItemsOptions = {}
) {
  const { maxItems = 50 } = options

  const [items, setItems] = useState<T[]>([])

  const save = useCallback(
    (itemData: Omit<T, "id" | "createdAt">) => {
      const newItem = {
        ...itemData,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      } as T

      setItems((prev) => {
        const updated = [newItem, ...prev]
        // Limit to maxItems
        return updated.slice(0, maxItems)
      })

      return newItem
    },
    [maxItems]
  )

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const rename = useCallback((id: string, name: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name } : item))
    )
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const update = useCallback((id: string, data: Partial<T>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }, [])

  return {
    items,
    save,
    remove,
    rename,
    clear,
    update,
    isEmpty: items.length === 0,
    count: items.length,
  }
}

export { useSavedItems }
export type { UseSavedItemsOptions, SavedItemBase }
