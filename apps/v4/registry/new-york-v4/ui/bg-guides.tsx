"use client"

import React, { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useTheme } from "next-themes"

type AnimationDirection = "top-to-bottom" | "bottom-to-top" | "both" | "random"
type AnimationEasing = "linear" | "easeIn" | "easeOut" | "easeInOut" | "spring"

interface AnimatedBackgroundGuidesProps {
  columnCount?: number
  className?: string
  solidLines?: number[]
  hiddenLines?: number[]
  animated?: boolean
  animationDuration?: number
  animationDelay?: number
  glowColor?: string
  glowSize?: string
  glowOpacity?: number
  randomize?: boolean
  randomInterval?: number
  direction?: AnimationDirection
  easing?: AnimationEasing
  responsive?: boolean
  minColumnWidth?: string
  maxActiveColumns?: number
  darkMode?: boolean
  contained?: boolean
  zIndex?: number
}

const easingFunctions = {
  linear: [0, 0, 1, 1] as const,
  easeIn: [0.42, 0, 1, 1] as const,
  easeOut: [0, 0, 0.58, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
  spring: [0.175, 0.885, 0.32, 1.275] as const,
}

export function StripeBgGuides({
  columnCount = 4,
  className = "",
  solidLines = [],
  hiddenLines = [], // Add hiddenLines here
  animated = true,
  animationDuration = 62,
  animationDelay = 0.8,
  glowColor = "hsl(var(--accent))",
  //   glowColor = "#D2F583",
  glowSize = "10vh",
  glowOpacity = 0.4,
  randomize = true,
  randomInterval = 9000,
  direction = "both",
  easing = "spring",
  responsive = false,
  minColumnWidth = "4rem",
  maxActiveColumns = 3,
  darkMode: darkModeProp,
  contained = false,
  zIndex,
}: AnimatedBackgroundGuidesProps) {
  const { resolvedTheme } = useTheme()
  const darkMode = darkModeProp ?? resolvedTheme === "dark"

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  const columnCount_ = useMemo(() => {
    return responsive
      ? Math.max(Math.floor(windowWidth / parseInt(minColumnWidth)), 1)
      : columnCount
  }, [columnCount, responsive, windowWidth, minColumnWidth])

  const getRandomColumns = useCallback(() => {
    const newActiveColumns = Array.from(
      { length: columnCount_ },
      () => Math.random() < 0.5
    )
    const activeCount = newActiveColumns.filter(Boolean).length
    if (activeCount > maxActiveColumns) {
      const indicesToDeactivate = newActiveColumns
        .map((isActive, index) => (isActive ? index : -1))
        .filter((index) => index !== -1)
        .sort(() => Math.random() - 0.5)
        .slice(0, activeCount - maxActiveColumns)
      indicesToDeactivate.forEach((index) => {
        newActiveColumns[index] = false
      })
    }
    return newActiveColumns
  }, [columnCount_, maxActiveColumns])

  // Derive active columns - all true by default, or randomized if animated
  const activeColumns = useMemo(() => {
    if (randomize && animated) {
      return getRandomColumns()
    }
    return Array.from({ length: columnCount_ }, () => true)
  }, [columnCount_, randomize, animated, getRandomColumns])

  // State for randomized columns (only used when randomize && animated)
  const [randomizedColumns, setRandomizedColumns] = useState<boolean[] | null>(
    null
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!randomize || !animated) {
      return
    }

    setRandomizedColumns(getRandomColumns())
    const intervalId = setInterval(() => {
      setRandomizedColumns(getRandomColumns())
    }, randomInterval)

    return () => {
      clearInterval(intervalId)
      setRandomizedColumns(null)
    }
  }, [randomize, animated, randomInterval, getRandomColumns])

  // Use randomized columns if available, otherwise use derived active columns
  const finalActiveColumns = randomizedColumns ?? activeColumns

  const getAnimationVariants = useCallback(() => {
    const variants = {
      "top-to-bottom": {
        initial: { top: "-100%" },
        animate: { top: "100%" },
      },
      "bottom-to-top": {
        initial: { top: "100%" },
        animate: { top: "-100%" },
      },
      both: {
        initial: { top: "100%" },
        animate: { top: ["-100%", "100%"] },
      },
      random: {
        initial: () => ({ top: Math.random() < 0.5 ? "-100%" : "100%" }),
        animate: () => ({ top: Math.random() < 0.5 ? "-100%" : "100%" }),
      },
    }
    return variants[direction] || variants["top-to-bottom"]
  }, [direction])

  const animationVariants = useMemo(
    () => getAnimationVariants(),
    [getAnimationVariants]
  )

  const isMobile = windowWidth > 0 && windowWidth < 768

  const lineColors = useMemo(() => {
    // Reduce opacity on mobile
    const mobileMultiplier = isMobile ? 0.6 : 1

    return {
      // Dark mode: white lines for contrast, Light mode: darker lines
      solid: darkMode
        ? `hsla(0 0% 100% / ${(0.18 * mobileMultiplier).toFixed(2)})`
        : `hsla(220 10% 40% / ${(0.3 * mobileMultiplier).toFixed(2)})`,
      dashed: darkMode
        ? `hsla(0 0% 100% / ${(0.18 * mobileMultiplier).toFixed(2)})`
        : `hsla(220 10% 40% / ${(0.3 * mobileMultiplier).toFixed(2)})`,
    }
  }, [darkMode, isMobile])

  // Calculate line positions for CSS Grid with gap-6 (1.5rem = 24px)
  // Line at position i (1-5): calc(i * (100% + 1.5rem) / 6) - at column left edges
  const getLinePosition = (index: number): string => {
    if (index === 0) return "0"
    if (index === columnCount_) return "100%"
    return `calc(${index} * (100% + 1.5rem) / 6)`
  }

  return (
    <div
      className={`pointer-events-none ${
        contained ? "absolute inset-0" : "fixed inset-0"
      } ${className}`}
      aria-hidden="true"
      style={{ zIndex: zIndex ?? (contained ? 25 : -1) }}
    >
      <div className="relative z-0 container h-full w-full px-6">
        <div className="relative grid h-full grid-cols-6 gap-6">
          {[...Array(columnCount_ + 1)].map((_, index) => {
            if (hiddenLines.includes(index + 1)) {
              return null // Skip rendering this line
            }
            return (
              <div
                key={index}
                className="absolute inset-y-0 w-px overflow-hidden"
                style={{
                  left: getLinePosition(index),
                  ...(solidLines.includes(index + 1)
                    ? { background: lineColors.solid }
                    : {
                        backgroundImage: `linear-gradient(to bottom, ${lineColors.dashed} 50%, transparent 50%)`,
                        backgroundSize: "1px 8px",
                      }),
                }}
              >
                <AnimatePresence>
                  {animated && finalActiveColumns[index] && (
                    <motion.div
                      key={`glow-${index}`}
                      className="absolute w-full"
                      style={{
                        height: glowSize,
                        background: `linear-gradient(to bottom, transparent, ${glowColor}, ${
                          darkMode ? "white" : "black"
                        })`,
                        opacity: glowOpacity,
                      }}
                      initial={
                        typeof animationVariants.initial === "function"
                          ? animationVariants.initial()
                          : animationVariants.initial
                      }
                      animate={
                        typeof animationVariants.animate === "function"
                          ? animationVariants.animate()
                          : animationVariants.animate
                      }
                      exit={
                        typeof animationVariants.initial === "function"
                          ? animationVariants.initial()
                          : animationVariants.initial
                      }
                      transition={{
                        duration: animationDuration,
                        repeat: Infinity,
                        ease: easingFunctions[easing],
                        delay: index * animationDelay,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
