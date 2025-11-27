"use client"

import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type TextGradientOpacityProps = {
  /** Text to animate */
  text: string
  /** Additional CSS classes */
  className?: string
  /** Scroll offset when to start/end animation. Default: ["start 0.9", "start 0.25"] */
  offset?: [string, string]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Text that reveals word by word with opacity on scroll.
 * Creates a progressive disclosure effect perfect for long-form content.
 */
export const TextGradientOpacity = memo<TextGradientOpacityProps>(
  ({
    text,
    className,
    offset = ["start 0.9", "start 0.25"],
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
      offset: offset as any,
    })

    const words = useMemo(() => text.split(" "), [text])

    const textSize = useMemo(
      () => (isMobile ? "text-3xl" : "text-4xl md:text-6xl lg:text-7xl"),
      [isMobile]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative", className)}>
          <p
            className={cn(
              "text-foreground flex flex-wrap gap-x-2 gap-y-1 font-bold",
              textSize
            )}
          >
            {text}
          </p>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative", className)}>
        <p className={cn("flex flex-wrap gap-x-2 gap-y-1 font-bold", textSize)}>
          {words.map((word, i) => (
            <OpacityWord
              key={i}
              word={word}
              index={i}
              totalWords={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    )
  }
)

TextGradientOpacity.displayName = "TextGradientOpacity"

export type AnimatedTextRevealProps = {
  /** Text to animate character by character */
  children: string
  /** Additional CSS classes */
  className?: string
  /** Scroll offset when to start/end animation. Default: ["start 0.9", "start 0.3"] */
  offset?: [string, string]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: true (recommended for performance) */
  noMobile?: boolean
}

/**
 * Character-by-character text reveal with opacity.
 * Creates a more dramatic reveal effect than word-by-word.
 * Note: Can be performance-intensive for very long text.
 */
export const AnimatedTextReveal = memo<AnimatedTextRevealProps>(
  ({
    children,
    className,
    offset = ["start 0.9", "start 0.3"],
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
      offset: offset as any,
    })

    const chars = useMemo(() => children.split(""), [children])

    const textSize = useMemo(
      () => (isMobile ? "text-2xl" : "text-3xl md:text-5xl"),
      [isMobile]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative", className)}>
          <p className={cn("font-medium", textSize)}>{children}</p>
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative", className)}>
        <p className={cn("font-medium", textSize)}>
          {chars.map((char, i) => (
            <RevealChar
              key={i}
              char={char}
              index={i}
              totalChars={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    )
  }
)

AnimatedTextReveal.displayName = "AnimatedTextReveal"

// Helper component for word opacity animation
type OpacityWordProps = {
  word: string
  index: number
  totalWords: number
  scrollYProgress: any
}

const OpacityWord = memo<OpacityWordProps>(
  ({ word, index, totalWords, scrollYProgress }) => {
    const start = index / totalWords
    const end = start + 1 / totalWords
    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

    return (
      <motion.span style={{ opacity }} className="text-foreground">
        {word}
      </motion.span>
    )
  }
)

OpacityWord.displayName = "OpacityWord"

// Helper component for character reveal
type RevealCharProps = {
  char: string
  index: number
  totalChars: number
  scrollYProgress: any
}

const RevealChar = memo<RevealCharProps>(
  ({ char, index, totalChars, scrollYProgress }) => {
    const start = index / totalChars
    const end = start + 1 / totalChars
    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])

    return <motion.span style={{ opacity }}>{char}</motion.span>
  }
)

RevealChar.displayName = "RevealChar"

export default TextGradientOpacity
