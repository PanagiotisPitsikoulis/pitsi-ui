"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type TextParallaxProps = {
  /** Content to apply parallax effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Multiplier for parallax speed. Positive moves down, negative moves up. Default: 0.5 */
  speed?: number
  /** When to start/end animation relative to viewport. Default: ["start end", "end start"] */
  offset?: [string, string]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Text that moves at a different speed than scroll for parallax effect.
 * Creates depth by moving content slower or faster than the scroll speed.
 */
export const TextParallax = memo<TextParallaxProps>(
  ({
    children,
    className,
    speed = 0.5,
    offset = ["start end", "end start"],
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedSpeed = useMemo(
      () => (isMobile ? speed * 0.5 : speed),
      [isMobile, speed]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: offset as any,
    })

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", `${adjustedSpeed * 100}%`]
    )

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    )
  }
)

TextParallax.displayName = "TextParallax"

export type SplitTextParallaxProps = {
  /** Text to split and animate */
  text: string
  /** Additional CSS classes */
  className?: string
  /** Speed range for first and last word. Default: [-0.2, 0.2] */
  speedRange?: [number, number]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: true (recommended for split text) */
  noMobile?: boolean
}

/**
 * Text split into words with each word having different parallax speed.
 * Creates a wave-like staggered effect as you scroll.
 */
export const SplitTextParallax = memo<SplitTextParallaxProps>(
  ({
    text,
    className,
    speedRange = [-0.2, 0.2],
    scrollBased = true,
    noMobile = true, // Disabled by default on mobile for performance
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedSpeedRange = useMemo(
      () =>
        isMobile ? [speedRange[0] * 0.5, speedRange[1] * 0.5] : speedRange,
      [isMobile, speedRange]
    ) as [number, number]

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    const words = useMemo(() => text.split(" "), [text])

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative", className)}>
          <p className="flex flex-wrap gap-x-2">{text}</p>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative", className)}>
        <p className="flex flex-wrap gap-x-2">
          {words.map((word, i) => (
            <WordParallax
              key={i}
              word={word}
              index={i}
              totalWords={words.length}
              scrollYProgress={scrollYProgress}
              speedRange={adjustedSpeedRange}
            />
          ))}
        </p>
      </div>
    )
  }
)

SplitTextParallax.displayName = "SplitTextParallax"

// Helper component to handle individual word parallax
type WordParallaxProps = {
  word: string
  index: number
  totalWords: number
  scrollYProgress: any
  speedRange: [number, number]
}

const WordParallax = memo<WordParallaxProps>(
  ({ word, index, totalWords, scrollYProgress, speedRange }) => {
    const speed =
      speedRange[0] + (speedRange[1] - speedRange[0]) * (index / totalWords)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

    return (
      <motion.span style={{ y }} className="inline-block will-change-transform">
        {word}
      </motion.span>
    )
  }
)

WordParallax.displayName = "WordParallax"

export default TextParallax
