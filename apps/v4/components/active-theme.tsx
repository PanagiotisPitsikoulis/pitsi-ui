"use client"

import {
  createContext,
  ReactNode,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react"

import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

const DEFAULT_THEME = "default"

type ThemeContextType = {
  activeTheme: string
  setActiveTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: string
}) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col space-y-3 p-4">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      }
    >
      <ActiveThemeProviderInternal initialTheme={initialTheme}>
        {children}
      </ActiveThemeProviderInternal>
    </Suspense>
  )
}

function ActiveThemeProviderInternal({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: string
}) {
  // Initialize with initial theme or default
  const [activeTheme, setActiveTheme] = useState<string>(
    initialTheme || DEFAULT_THEME
  )

  // Apply theme classes to body whenever theme changes
  useEffect(() => {
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })
    document.body.classList.add(`theme-${activeTheme}`)
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled")
    }
  }, [activeTheme])

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}
