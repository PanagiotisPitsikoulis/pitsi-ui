"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const scrollLockRef = useRef(false)

  useEffect(() => {
    // Disable scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    // Lock scrolling temporarily
    scrollLockRef.current = true

    // Remove any hash from URL to prevent auto-scrolling to anchors
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      )
    }

    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Create a scroll listener to force top position during initial load
    const forceScrollTop = () => {
      if (scrollLockRef.current && window.scrollY !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      }
    }

    // Listen for any scroll attempts
    window.addEventListener("scroll", forceScrollTop, { passive: true })

    // Force scroll multiple times to override layout shifts
    const timeouts = [
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
      }, 0),
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
      }, 10),
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
      }, 50),
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
      }, 100),
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
      }, 200),
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
        document.documentElement.scrollTop = 0
        // Release the scroll lock after content has loaded
        scrollLockRef.current = false
      }, 500),
    ]

    // Use requestAnimationFrame for additional attempts
    const rafIds: number[] = []
    const scheduleScrollCheck = () => {
      rafIds.push(
        requestAnimationFrame(() => {
          if (scrollLockRef.current) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" })
            if (rafIds.length < 10) {
              scheduleScrollCheck()
            }
          }
        })
      )
    }
    scheduleScrollCheck()

    return () => {
      scrollLockRef.current = false
      window.removeEventListener("scroll", forceScrollTop)
      timeouts.forEach(clearTimeout)
      rafIds.forEach(cancelAnimationFrame)
    }
  }, [pathname, searchParams])

  return null
}
