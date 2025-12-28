"use client"

import { useLayoutEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useTheme } from "next-themes"

export function ThemeFromUrl() {
  const searchParams = useSearchParams()
  const { setTheme, resolvedTheme } = useTheme()
  const themeParam = searchParams.get("theme")

  // Use useLayoutEffect to apply theme before paint
  useLayoutEffect(() => {
    if (themeParam === "dark" || themeParam === "light") {
      // Apply theme immediately
      setTheme(themeParam)

      // Also directly manipulate the DOM for immediate effect
      // This ensures the class is set before any render
      const html = document.documentElement
      if (themeParam === "dark") {
        html.classList.add("dark")
        html.classList.remove("light")
        html.style.colorScheme = "dark"
      } else {
        html.classList.add("light")
        html.classList.remove("dark")
        html.style.colorScheme = "light"
      }
    }
  }, [themeParam, setTheme])

  return null
}
