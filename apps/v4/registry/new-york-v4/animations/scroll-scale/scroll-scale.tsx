"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

// Context for scroll progress
const ScrollScaleContext = createContext<{
  scrollYProgress: MotionValue<number>
  totalCards: number
} | null>(null)

export type ScrollScaleContainerProps = {
  /** Card components */
  children: ReactNode
  /** Number of cards (for scroll height calculation) */
  cardCount: number
  /** Additional CSS classes */
  className?: string
  /** Container classes for the card wrapper */
  containerClassName?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for scroll-triggered stacking cards.
 * Cards scale down and rotate as the next card slides up.
 */
export const ScrollScaleContainer = memo<ScrollScaleContainerProps>(
  ({
    children,
    cardCount,
    className,
    containerClassName,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldUseScroll, shouldDisableAnimation } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start start", "end end"],
    })

    const scrollHeight = `${100 * cardCount}vh`

    if (shouldDisableAnimation) {
      return (
        <div
          className={cn("relative", className)}
          style={{ height: scrollHeight }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden p-3 lg:p-8">
            <div
              className={cn(
                "relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
                containerClassName
              )}
            >
              {children}
            </div>
          </div>
        </div>
      )
    }

    return (
      <ScrollScaleContext.Provider
        value={{ scrollYProgress, totalCards: cardCount }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          style={{ height: scrollHeight }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden p-3 lg:p-8">
            <div
              className={cn(
                "relative h-[90%] w-full max-w-sm overflow-hidden rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
                containerClassName
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </ScrollScaleContext.Provider>
    )
  }
)

ScrollScaleContainer.displayName = "ScrollScaleContainer"

export type ScrollScaleCardProps = {
  /** Card index (0-based) */
  index: number
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Additional CSS classes */
  className?: string
  /** Scale when card is pushed back. Default: 0.7 */
  targetScale?: number
  /** Rotation when card is pushed back. Default: 5 */
  targetRotation?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Individual card in a scroll-scale stack.
 * Use inside ScrollScaleContainer.
 */
export const ScrollScaleCard = memo<ScrollScaleCardProps>(
  ({
    index,
    src,
    alt = "Card image",
    className,
    targetScale = 0.7,
    targetRotation = 5,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(ScrollScaleContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    // Calculate ranges for this card
    const totalCards = context?.totalCards || 1
    const segmentSize = 1 / totalCards

    // Current card's animation range
    const startProgress = index * segmentSize
    const endProgress = (index + 1) * segmentSize

    // Scale animation (card scales down when its segment is active)
    const scale = useTransform(
      context?.scrollYProgress || new MotionValue(0),
      [startProgress, endProgress],
      [1, targetScale]
    )

    // Rotation animation (card rotates when its segment is active)
    const rotate = useTransform(
      context?.scrollYProgress || new MotionValue(0),
      [startProgress, endProgress],
      [0, targetRotation]
    )

    // Y position (next cards slide up)
    const y = useTransform(
      context?.scrollYProgress || new MotionValue(0),
      index === 0 ? [0, 1] : [(index - 1) * segmentSize, index * segmentSize],
      index === 0 ? ["0%", "0%"] : ["100%", "0%"]
    )

    // Z-index based on index (later cards on top)
    const zIndex = index

    if (shouldDisableAnimation || !context) {
      return (
        <img
          src={src}
          alt={alt}
          className={cn(
            "absolute h-full w-full rounded-4xl object-cover",
            className
          )}
          style={{ zIndex }}
        />
      )
    }

    return (
      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "absolute h-full w-full rounded-4xl object-cover",
          className
        )}
        style={{
          scale,
          rotate,
          y,
          zIndex,
        }}
      />
    )
  }
)

ScrollScaleCard.displayName = "ScrollScaleCard"

// Original simple scroll scale component
export type ScrollScaleProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  startScale?: number
  endScale?: number
  scrollBased?: boolean
  noMobile?: boolean
}

/**
 * Simple element that scales and fades in on scroll.
 */
export const ScrollScale = memo<ScrollScaleProps>(
  ({
    children,
    className,
    delay = 0,
    duration = 0.6,
    startScale = 0.8,
    endScale = 1,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "start center"],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: startScale }}
        whileInView={{ opacity: 1, scale: endScale }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollScale.displayName = "ScrollScale"

export default ScrollScaleContainer
