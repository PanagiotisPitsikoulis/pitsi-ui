"use client"

import type { ReactNode } from "react"
import React, { memo, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export type SmoothParallaxScrollProps = {
  /** Content to wrap with smooth scrolling */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Interpolation speed (0-1). Lower = smoother but slower. Default: 0.08 */
  speed?: number
  /** Disable smooth scroll on mobile for better native performance. Default: true */
  disableOnMobile?: boolean
}

/**
 * Smooth scroll container with parallax elements support.
 * Creates a buttery smooth scrolling experience with customizable speed.
 * Combine with ParallaxElement for individual element parallax effects.
 *
 * Note: This wraps your entire scrollable content and overrides native scroll behavior.
 * Consider performance implications for very long pages.
 */
export const SmoothParallaxScroll = memo<SmoothParallaxScrollProps>(
  ({ children, className, speed = 0.08, disableOnMobile = true }) => {
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const currentScrollY = useRef(0)
    const targetScrollY = useRef(0)
    const [scrollProgress, setScrollProgress] = useState(0)

    const shouldDisable = disableOnMobile && isMobile

    useEffect(() => {
      if (shouldDisable) return

      const container = containerRef.current
      const scrollContent = scrollRef.current
      if (!container || !scrollContent) return

      let animationFrame: number
      const maxScroll = scrollContent.offsetHeight - window.innerHeight

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        targetScrollY.current += e.deltaY
        targetScrollY.current = Math.max(
          0,
          Math.min(targetScrollY.current, maxScroll)
        )
      }

      const smoothScroll = () => {
        currentScrollY.current +=
          (targetScrollY.current - currentScrollY.current) * speed

        if (Math.abs(targetScrollY.current - currentScrollY.current) < 0.5) {
          currentScrollY.current = targetScrollY.current
        }

        scrollContent.style.transform = `translateY(-${currentScrollY.current}px)`

        // Update scroll progress for child parallax elements
        const progress = maxScroll > 0 ? currentScrollY.current / maxScroll : 0
        setScrollProgress(progress)

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
      return (
        <ScrollProgressContext.Provider value={scrollProgress}>
          <div className={className}>{children}</div>
        </ScrollProgressContext.Provider>
      )
    }

    return (
      <ScrollProgressContext.Provider value={scrollProgress}>
        <div
          ref={containerRef}
          className={cn("fixed inset-0 overflow-hidden", className)}
        >
          <div ref={scrollRef} className="will-change-transform">
            {children}
          </div>
        </div>
      </ScrollProgressContext.Provider>
    )
  }
)

SmoothParallaxScroll.displayName = "SmoothParallaxScroll"

// Context for sharing scroll progress with child elements
const ScrollProgressContext = React.createContext(0)

export type ParallaxElementProps = {
  /** Content to apply parallax effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Parallax speed multiplier. Default: 0.5 */
  speed?: number
  /** Starting offset percentage (0-1). Default: 0.5 */
  startPosition?: number
}

/**
 * Element that moves at different speed than scroll within SmoothParallaxScroll.
 * Must be used inside SmoothParallaxScroll component.
 * Creates depth by moving elements at varying speeds.
 */
export const ParallaxElement = memo<ParallaxElementProps>(
  ({ children, className, speed = 0.5, startPosition = 0.5 }) => {
    const scrollProgress = React.useContext(ScrollProgressContext)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const element = elementRef.current
      if (!element) return

      const viewportHeight = window.innerHeight
      const offset = (scrollProgress - startPosition) * viewportHeight * speed
      element.style.transform = `translateY(${offset}px)`
    }, [scrollProgress, speed, startPosition])

    return (
      <div ref={elementRef} className={cn("will-change-transform", className)}>
        {children}
      </div>
    )
  }
)

ParallaxElement.displayName = "ParallaxElement"

export type LayeredParallaxProps = {
  /** Array of layers with content and speed */
  layers: Array<{
    content: ReactNode
    speed: number
    className?: string
  }>
  /** Additional CSS classes */
  className?: string
}

/**
 * Multiple parallax layers with different speeds.
 * Creates depth through motion by layering elements with varying parallax speeds.
 * Must be used inside SmoothParallaxScroll component.
 */
export const LayeredParallax = memo<LayeredParallaxProps>(
  ({ layers, className }) => {
    return (
      <div className={cn("relative", className)}>
        {layers.map((layer, i) => (
          <ParallaxElement
            key={i}
            speed={layer.speed}
            className={cn("absolute inset-0", layer.className)}
          >
            {layer.content}
          </ParallaxElement>
        ))}
      </div>
    )
  }
)

LayeredParallax.displayName = "LayeredParallax"

export default SmoothParallaxScroll
