"use client"

import { useCallback, useEffect, useRef, useState } from "react"

// Default theme color tokens from shadcn/ui
const DEFAULT_TOKENS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
]

// Create regex to match theme classes
const createThemeClassRegex = (tokens: string[]) => {
  const sortedTokens = [...tokens].sort((a, b) => b.length - a.length)
  const escapedTokens = sortedTokens.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )
  const pattern = `\\b(?:bg|text|border|ring|fill|stroke)-(?:${escapedTokens.join(
    "|"
  )})(?:\\/\\d{1,3})?\\b`
  return new RegExp(pattern)
}

export interface InspectorState {
  rect: DOMRect | null
  className: string
}

const getEmptyInspectorState = (): InspectorState => ({
  rect: null,
  className: "",
})

const getClassString = (el: Element): string => {
  const cnProp = (el as HTMLElement | SVGElement).className
  if (typeof cnProp === "string") return cnProp
  if (cnProp && typeof cnProp === "object" && "baseVal" in cnProp) {
    return (cnProp as SVGAnimatedString).baseVal
  }
  return ""
}

const findThemeClasses = (
  target: HTMLElement,
  rootElement: HTMLElement,
  regex: RegExp
): { element: HTMLElement; matches: string[] } | null => {
  let current: HTMLElement | null = target

  while (current && current !== rootElement) {
    const cls = getClassString(current)
    const classNames = cls.split(/\s+/).filter(Boolean)
    const matches = Array.from(
      new Set(classNames.filter((className) => regex.test(className)))
    )

    if (matches.length > 0) {
      return { element: current, matches }
    }

    current = current.parentElement as HTMLElement | null
  }

  return null
}

// Simple debounce
function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): T & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debouncedFn = ((...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }) as T & { cancel: () => void }

  debouncedFn.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId)
  }

  return debouncedFn
}

export interface UseInspectorOptions {
  tokens?: string[]
}

export const useInspector = (
  enabled: boolean,
  options: UseInspectorOptions = {}
) => {
  const { tokens = DEFAULT_TOKENS } = options
  const rootRef = useRef<HTMLDivElement>(null)
  const [inspector, setInspector] = useState<InspectorState>(
    getEmptyInspectorState()
  )
  const lastElementRef = useRef<HTMLElement | null>(null)
  const regexRef = useRef<RegExp>(createThemeClassRegex(tokens))

  // Update regex when tokens change
  useEffect(() => {
    regexRef.current = createThemeClassRegex(tokens)
  }, [tokens])

  const updateInspectorState = useCallback(
    (rect: DOMRect, matches: string[]) => {
      setInspector({
        rect,
        className: matches.join(" "),
      })
    },
    []
  )

  const clearInspectorState = useCallback(() => {
    lastElementRef.current = null
    setInspector(getEmptyInspectorState())
  }, [])

  const debouncedInspectorUpdate = useCallback(
    debounce((target: HTMLElement) => {
      const rootElement = rootRef.current
      if (!rootElement) return

      if (!rootElement.contains(target) || target === rootElement) return

      const result = findThemeClasses(target, rootElement, regexRef.current)

      if (result) {
        if (lastElementRef.current === result.element) {
          return
        }

        lastElementRef.current = result.element
        const rect = result.element.getBoundingClientRect()
        updateInspectorState(rect, result.matches)
        return
      }

      clearInspectorState()
    }, 20),
    [updateInspectorState, clearInspectorState]
  )

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement | null
      if (!target || !enabled) return

      debouncedInspectorUpdate(target)
    },
    [enabled, debouncedInspectorUpdate]
  )

  const handleMouseLeave = useCallback(() => {
    lastElementRef.current = null
    debouncedInspectorUpdate.cancel()
    clearInspectorState()
  }, [debouncedInspectorUpdate, clearInspectorState])

  // Clear state when disabled
  useEffect(() => {
    if (!enabled) {
      clearInspectorState()
      debouncedInspectorUpdate.cancel()
    }
  }, [enabled, clearInspectorState, debouncedInspectorUpdate])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      debouncedInspectorUpdate.cancel()
    }
  }, [debouncedInspectorUpdate])

  return {
    rootRef,
    inspector,
    handleMouseMove,
    handleMouseLeave,
  }
}
