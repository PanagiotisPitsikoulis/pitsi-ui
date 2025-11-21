"use client"

import type { ReactNode } from "react"
import { memo, useEffect, useRef } from "react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export type SmoothScrollProps = {
  /** Content to wrap with smooth scrolling */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Interpolation speed (0-1). Lower = smoother but slower. Default: 0.1 */
  speed?: number
  /** Disable smooth scroll on mobile for better native performance. Default: true */
  disableOnMobile?: boolean
}

/**
 * Smooth scroll container using requestAnimationFrame.
 * Creates a buttery smooth scrolling experience by interpolating scroll position.
 *
 * Note: This wraps your entire scrollable content and overrides native scroll behavior.
 * Consider performance implications for very long pages.
 */
export const SmoothScroll = memo<SmoothScrollProps>(
  ({ children, className, speed = 0.1, disableOnMobile = true }) => {
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const currentScrollY = useRef(0)
    const targetScrollY = useRef(0)

    const shouldDisable = disableOnMobile && isMobile

    useEffect(() => {
      if (shouldDisable) return

      const container = containerRef.current
      const scrollContent = scrollRef.current
      if (!container || !scrollContent) return

      let animationFrame: number

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        targetScrollY.current += e.deltaY
        targetScrollY.current = Math.max(
          0,
          Math.min(
            targetScrollY.current,
            scrollContent.offsetHeight - window.innerHeight
          )
        )
      }

      const smoothScroll = () => {
        currentScrollY.current +=
          (targetScrollY.current - currentScrollY.current) * speed

        if (Math.abs(targetScrollY.current - currentScrollY.current) < 0.5) {
          currentScrollY.current = targetScrollY.current
        }

        scrollContent.style.transform = `translateY(-${currentScrollY.current}px)`
        animationFrame = requestAnimationFrame(smoothScroll)
      }

      container.addEventListener("wheel", handleWheel, { passive: false })
      smoothScroll()

      return () => {
        container.removeEventListener("wheel", handleWheel)
        cancelAnimationFrame(animationFrame)
      }
    }, [speed, shouldDisable])

    if (shouldDisable) {
      return <div className={className}>{children}</div>
    }

    return (
      <div
        ref={containerRef}
        className={cn("fixed inset-0 overflow-hidden", className)}
      >
        <div ref={scrollRef} className="will-change-transform">
          {children}
        </div>
      </div>
    )
  }
)

SmoothScroll.displayName = "SmoothScroll"

export default SmoothScroll
