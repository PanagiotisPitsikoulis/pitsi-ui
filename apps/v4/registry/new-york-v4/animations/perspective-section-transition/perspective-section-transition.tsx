"use client"

import type { CSSProperties, ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type PerspectiveSectionProps = {
  /** Section content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Perspective value in pixels. Default: 1000 */
  perspective?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Section with 3D perspective transform on scroll.
 * Creates a card-flip/rotate effect as you scroll through the section.
 * Perfect for creating immersive, depth-based transitions.
 */
export const PerspectiveSection = memo<PerspectiveSectionProps>(
  ({
    children,
    className,
    perspective = 1000,
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    const adjustedPerspective = useMemo(
      () => (isMobile ? perspective * 1.5 : perspective),
      [isMobile, perspective]
    )

    // Rotate on X axis for flip effect
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45])

    // Fade in and out
    const opacity = useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 1],
      [0, 1, 1, 0]
    )

    // Scale up as it comes into view
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

    const containerStyle: CSSProperties = useMemo(
      () => ({
        perspective: `${adjustedPerspective}px`,
      }),
      [adjustedPerspective]
    )

    if (shouldDisableAnimation) {
      return (
        <div
          className={cn(
            "relative flex min-h-screen items-center justify-center",
            className
          )}
        >
          {children}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex min-h-screen items-center justify-center",
          className
        )}
        style={containerStyle}
      >
        <motion.div
          style={{
            rotateX,
            opacity,
            scale,
          }}
          className="w-full will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    )
  }
)

PerspectiveSection.displayName = "PerspectiveSection"

export type RotatingCardSectionProps = {
  /** Content for the front of the card */
  frontContent: ReactNode
  /** Content for the back of the card */
  backContent: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Perspective value in pixels. Default: 1500 */
  perspective?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: true (recommended for performance) */
  noMobile?: boolean
}

/**
 * Section that rotates like a card flip on scroll.
 * Shows front content, then flips to reveal back content.
 * Creates a dramatic reveal effect for contrasting content.
 */
export const RotatingCardSection = memo<RotatingCardSectionProps>(
  ({
    frontContent,
    backContent,
    className,
    perspective = 1500,
    scrollBased = true,
    noMobile = true, // Disabled by default on mobile for performance
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    const adjustedPerspective = useMemo(
      () => (isMobile ? perspective * 1.2 : perspective),
      [isMobile, perspective]
    )

    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180])
    const frontOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0])
    const backOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])

    const containerStyle: CSSProperties = useMemo(
      () => ({
        perspective: `${adjustedPerspective}px`,
      }),
      [adjustedPerspective]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative min-h-screen", className)}>
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-4xl space-y-8">
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 shadow-2xl">
                {frontContent}
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-pink-600 to-orange-600 p-12 shadow-2xl">
                {backContent}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("relative min-h-screen", className)}
        style={containerStyle}
      >
        <div className="sticky top-0 flex min-h-screen items-center justify-center p-4">
          <motion.div
            style={{ rotateY }}
            className="relative h-[600px] w-full max-w-4xl will-change-transform"
          >
            {/* Front face */}
            <motion.div
              style={{ opacity: frontOpacity }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 shadow-2xl"
            >
              {frontContent}
            </motion.div>

            {/* Back face */}
            <motion.div
              style={{ opacity: backOpacity, rotateY: 180 }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-600 to-orange-600 p-12 shadow-2xl"
            >
              {backContent}
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }
)

RotatingCardSection.displayName = "RotatingCardSection"

export default PerspectiveSection
