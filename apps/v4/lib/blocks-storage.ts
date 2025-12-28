"use client"

import { useCallback } from "react"

import { STORAGE_KEYS, useLocalStorage } from "./local-storage"

export interface SavedBlock {
  name: string
  category: string
  savedAt: number
}

export interface RecentBlock {
  name: string
  category: string
  viewedAt: number
}

export interface SavedTemplate {
  slug: string
  name: string
  savedAt: number
}

export interface RecentTemplate {
  slug: string
  name: string
  viewedAt: number
}

export interface SavedComponent {
  name: string
  savedAt: number
}

export interface RecentComponent {
  name: string
  viewedAt: number
}

export interface SavedAnimation {
  name: string
  savedAt: number
}

export interface RecentAnimation {
  name: string
  viewedAt: number
}

const MAX_RECENT_ITEMS = 10

/**
 * Hook for managing saved blocks
 */
export function useSavedBlocks() {
  const [savedBlocks, setSavedBlocks, isHydrated] = useLocalStorage<SavedBlock[]>(
    STORAGE_KEYS.BLOCKS_SAVED,
    []
  )

  const saveBlock = useCallback(
    (name: string, category: string) => {
      setSavedBlocks((prev) => {
        // Check if already saved
        if (prev.some((b) => b.name === name)) {
          return prev
        }
        return [...prev, { name, category, savedAt: Date.now() }]
      })
    },
    [setSavedBlocks]
  )

  const unsaveBlock = useCallback(
    (name: string) => {
      setSavedBlocks((prev) => prev.filter((b) => b.name !== name))
    },
    [setSavedBlocks]
  )

  const isBlockSaved = useCallback(
    (name: string) => savedBlocks.some((b) => b.name === name),
    [savedBlocks]
  )

  const toggleSaveBlock = useCallback(
    (name: string, category: string) => {
      if (isBlockSaved(name)) {
        unsaveBlock(name)
      } else {
        saveBlock(name, category)
      }
    },
    [isBlockSaved, saveBlock, unsaveBlock]
  )

  return {
    savedBlocks,
    saveBlock,
    unsaveBlock,
    isBlockSaved,
    toggleSaveBlock,
    isHydrated,
  }
}

/**
 * Hook for managing recently viewed blocks
 */
export function useRecentBlocks() {
  const [recentBlocks, setRecentBlocks, isHydrated] = useLocalStorage<RecentBlock[]>(
    STORAGE_KEYS.BLOCKS_RECENT,
    []
  )

  const addRecentBlock = useCallback(
    (name: string, category: string) => {
      setRecentBlocks((prev) => {
        // Remove if already exists
        const filtered = prev.filter((b) => b.name !== name)
        // Add to front
        const updated = [{ name, category, viewedAt: Date.now() }, ...filtered]
        // Limit to max items
        return updated.slice(0, MAX_RECENT_ITEMS)
      })
    },
    [setRecentBlocks]
  )

  const clearRecentBlocks = useCallback(() => {
    setRecentBlocks([])
  }, [setRecentBlocks])

  return {
    recentBlocks,
    addRecentBlock,
    clearRecentBlocks,
    isHydrated,
  }
}

/**
 * Hook for managing saved templates
 */
export function useSavedTemplates() {
  const [savedTemplates, setSavedTemplates, isHydrated] = useLocalStorage<SavedTemplate[]>(
    STORAGE_KEYS.TEMPLATES_SAVED,
    []
  )

  const saveTemplate = useCallback(
    (slug: string, name: string) => {
      setSavedTemplates((prev) => {
        if (prev.some((t) => t.slug === slug)) {
          return prev
        }
        return [...prev, { slug, name, savedAt: Date.now() }]
      })
    },
    [setSavedTemplates]
  )

  const unsaveTemplate = useCallback(
    (slug: string) => {
      setSavedTemplates((prev) => prev.filter((t) => t.slug !== slug))
    },
    [setSavedTemplates]
  )

  const isTemplateSaved = useCallback(
    (slug: string) => savedTemplates.some((t) => t.slug === slug),
    [savedTemplates]
  )

  const toggleSaveTemplate = useCallback(
    (slug: string, name: string) => {
      if (isTemplateSaved(slug)) {
        unsaveTemplate(slug)
      } else {
        saveTemplate(slug, name)
      }
    },
    [isTemplateSaved, saveTemplate, unsaveTemplate]
  )

  return {
    savedTemplates,
    saveTemplate,
    unsaveTemplate,
    isTemplateSaved,
    toggleSaveTemplate,
    isHydrated,
  }
}

/**
 * Hook for managing recently viewed templates
 */
export function useRecentTemplates() {
  const [recentTemplates, setRecentTemplates, isHydrated] = useLocalStorage<RecentTemplate[]>(
    STORAGE_KEYS.TEMPLATES_RECENT,
    []
  )

  const addRecentTemplate = useCallback(
    (slug: string, name: string) => {
      setRecentTemplates((prev) => {
        const filtered = prev.filter((t) => t.slug !== slug)
        const updated = [{ slug, name, viewedAt: Date.now() }, ...filtered]
        return updated.slice(0, MAX_RECENT_ITEMS)
      })
    },
    [setRecentTemplates]
  )

  const clearRecentTemplates = useCallback(() => {
    setRecentTemplates([])
  }, [setRecentTemplates])

  return {
    recentTemplates,
    addRecentTemplate,
    clearRecentTemplates,
    isHydrated,
  }
}

/**
 * Hook for managing saved components
 */
export function useSavedComponents() {
  const [savedComponents, setSavedComponents, isHydrated] = useLocalStorage<SavedComponent[]>(
    STORAGE_KEYS.COMPONENTS_SAVED,
    []
  )

  const saveComponent = useCallback(
    (name: string) => {
      setSavedComponents((prev) => {
        if (prev.some((c) => c.name === name)) {
          return prev
        }
        return [...prev, { name, savedAt: Date.now() }]
      })
    },
    [setSavedComponents]
  )

  const unsaveComponent = useCallback(
    (name: string) => {
      setSavedComponents((prev) => prev.filter((c) => c.name !== name))
    },
    [setSavedComponents]
  )

  const isComponentSaved = useCallback(
    (name: string) => savedComponents.some((c) => c.name === name),
    [savedComponents]
  )

  const toggleSaveComponent = useCallback(
    (name: string) => {
      if (isComponentSaved(name)) {
        unsaveComponent(name)
      } else {
        saveComponent(name)
      }
    },
    [isComponentSaved, saveComponent, unsaveComponent]
  )

  return {
    savedComponents,
    saveComponent,
    unsaveComponent,
    isComponentSaved,
    toggleSaveComponent,
    isHydrated,
  }
}

/**
 * Hook for managing recently viewed components
 */
export function useRecentComponents() {
  const [recentComponents, setRecentComponents, isHydrated] = useLocalStorage<RecentComponent[]>(
    STORAGE_KEYS.COMPONENTS_RECENT,
    []
  )

  const addRecentComponent = useCallback(
    (name: string) => {
      setRecentComponents((prev) => {
        const filtered = prev.filter((c) => c.name !== name)
        const updated = [{ name, viewedAt: Date.now() }, ...filtered]
        return updated.slice(0, MAX_RECENT_ITEMS)
      })
    },
    [setRecentComponents]
  )

  const clearRecentComponents = useCallback(() => {
    setRecentComponents([])
  }, [setRecentComponents])

  return {
    recentComponents,
    addRecentComponent,
    clearRecentComponents,
    isHydrated,
  }
}

/**
 * Hook for managing saved animations
 */
export function useSavedAnimations() {
  const [savedAnimations, setSavedAnimations, isHydrated] = useLocalStorage<SavedAnimation[]>(
    STORAGE_KEYS.ANIMATIONS_SAVED,
    []
  )

  const saveAnimation = useCallback(
    (name: string) => {
      setSavedAnimations((prev) => {
        if (prev.some((a) => a.name === name)) {
          return prev
        }
        return [...prev, { name, savedAt: Date.now() }]
      })
    },
    [setSavedAnimations]
  )

  const unsaveAnimation = useCallback(
    (name: string) => {
      setSavedAnimations((prev) => prev.filter((a) => a.name !== name))
    },
    [setSavedAnimations]
  )

  const isAnimationSaved = useCallback(
    (name: string) => savedAnimations.some((a) => a.name === name),
    [savedAnimations]
  )

  const toggleSaveAnimation = useCallback(
    (name: string) => {
      if (isAnimationSaved(name)) {
        unsaveAnimation(name)
      } else {
        saveAnimation(name)
      }
    },
    [isAnimationSaved, saveAnimation, unsaveAnimation]
  )

  return {
    savedAnimations,
    saveAnimation,
    unsaveAnimation,
    isAnimationSaved,
    toggleSaveAnimation,
    isHydrated,
  }
}

/**
 * Hook for managing recently viewed animations
 */
export function useRecentAnimations() {
  const [recentAnimations, setRecentAnimations, isHydrated] = useLocalStorage<RecentAnimation[]>(
    STORAGE_KEYS.ANIMATIONS_RECENT,
    []
  )

  const addRecentAnimation = useCallback(
    (name: string) => {
      setRecentAnimations((prev) => {
        const filtered = prev.filter((a) => a.name !== name)
        const updated = [{ name, viewedAt: Date.now() }, ...filtered]
        return updated.slice(0, MAX_RECENT_ITEMS)
      })
    },
    [setRecentAnimations]
  )

  const clearRecentAnimations = useCallback(() => {
    setRecentAnimations([])
  }, [setRecentAnimations])

  return {
    recentAnimations,
    addRecentAnimation,
    clearRecentAnimations,
    isHydrated,
  }
}
