"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Get a value from localStorage
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue
  try {
    const item = localStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : defaultValue
  } catch {
    return defaultValue
  }
}

/**
 * Set a value in localStorage
 */
export function setStorageItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage full or other error
  }
}

/**
 * Remove a value from localStorage
 */
export function removeStorageItem(key: string): void {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(key)
  } catch {
    // Error removing item
  }
}

/**
 * Hook for persisting state to localStorage
 * Returns [value, setValue, isHydrated]
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void, boolean] {
  // Always start with defaultValue to avoid hydration mismatch
  const [state, setState] = useState<T>(defaultValue)
  const [isHydrated, setIsHydrated] = useState(false)

  // Store defaultValue in ref to avoid dependency issues
  const defaultValueRef = useRef(defaultValue)

  // Hydrate from localStorage after mount (client-side only)
  useEffect(() => {
    const stored = getStorageItem(key, defaultValueRef.current)
    setState(stored)
    setIsHydrated(true)
  }, [key])

  // Persist state to localStorage on change (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      setStorageItem(key, state)
    }
  }, [key, state, isHydrated])

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setState((prev) => {
      const nextValue =
        typeof value === "function" ? (value as (prev: T) => T)(prev) : value
      return nextValue
    })
  }, [])

  return [state, setValue, isHydrated]
}

/**
 * Storage keys for tools
 */
export const STORAGE_KEYS = {
  THEME_GENERATOR: "pitsi-tool-theme-generator-saved",
  SHADOW_COMPOSER: "pitsi-tool-shadow-composer-saved",
  EASING_COMPOSER: "pitsi-tool-easing-composer-saved",
  SPACING_GENERATOR: "pitsi-tool-spacing-generator-saved",
  TYPOGRAPHY_COMPOSER: "pitsi-tool-typography-composer-saved",
  TEMPLATE_BUILDER: "pitsi-tool-template-builder-saved",
  BLOCKS_SAVED: "pitsi-blocks-saved",
  BLOCKS_RECENT: "pitsi-blocks-recent",
  TEMPLATES_SAVED: "pitsi-templates-saved",
  TEMPLATES_RECENT: "pitsi-templates-recent",
  COMPONENTS_SAVED: "pitsi-components-saved",
  COMPONENTS_RECENT: "pitsi-components-recent",
  ANIMATIONS_SAVED: "pitsi-animations-saved",
  ANIMATIONS_RECENT: "pitsi-animations-recent",
} as const
