"use client"

import type { ReactNode } from "react"
import { memo, useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export type StickyFooterProps = {
  /** Footer content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Height from bottom (in px) to trigger sticky behavior. Default: 100 */
  triggerHeight?: number
  /** Disable sticky behavior on mobile. Default: false */
  disableOnMobile?: boolean
}

/**
 * Footer that becomes fixed when scrolling up near the bottom of the page.
 * Creates a smooth reveal effect for call-to-action footers.
 *
 * Best used for promotional footers or CTA sections at the bottom of long pages.
 */
export const StickyFooter = memo<StickyFooterProps>(
  ({ children, className, triggerHeight = 100, disableOnMobile = false }) => {
    const isMobile = useIsMobile()
    const [isSticky, setIsSticky] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    const shouldDisable = disableOnMobile && isMobile

    const handleScroll = useCallback(() => {
      if (shouldDisable) return

      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const distanceFromBottom = scrollHeight - (currentScrollY + clientHeight)

      // Check if scrolling up and near bottom
      if (currentScrollY < lastScrollY && distanceFromBottom < triggerHeight) {
        setIsSticky(true)
      } else if (currentScrollY > lastScrollY) {
        setIsSticky(false)
      }

      setLastScrollY(currentScrollY)
    }, [lastScrollY, triggerHeight, shouldDisable])

    useEffect(() => {
      if (shouldDisable) {
        setIsSticky(false)
        return
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll, shouldDisable])

    return (
      <footer
        className={cn(
          "w-full transition-all duration-300",
          isSticky && !shouldDisable
            ? "fixed right-0 bottom-0 left-0 z-50"
            : "relative",
          className
        )}
      >
        {children}
      </footer>
    )
  }
)

StickyFooter.displayName = "StickyFooter"

export default StickyFooter
