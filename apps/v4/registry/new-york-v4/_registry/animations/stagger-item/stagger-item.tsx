"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"

export type StaggerItemProps = {
  children: ReactNode
  className?: string
  scrollProgress?: any
  index?: number
  staggerDelay?: number
  scrollBased?: boolean
  noMobile?: boolean
}

export const StaggerItem = memo<StaggerItemProps>(
  ({
    children,
    className,
    scrollProgress,
    index = 0,
    staggerDelay = 0.1,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, mounted } = useAnimationState(
      scrollBased,
      noMobile
    )

    const variants = useMemo(
      () => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * staggerDelay,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }),
      [index, staggerDelay]
    )

    const shouldUseStandaloneScroll =
      scrollBased && mounted && !shouldDisableAnimation && !scrollProgress

    const { scrollYProgress: standaloneProgress } = useScroll({
      target: shouldUseStandaloneScroll ? ref : undefined,
      offset: ["start end", "start center"],
    })

    const opacityFromProp = scrollProgress
      ? useTransform(scrollProgress, [0, 1], [0, 1])
      : null
    const yFromProp = scrollProgress
      ? useTransform(scrollProgress, [0, 1], [20, 0])
      : null

    const opacityStandalone = useTransform(standaloneProgress, [0, 1], [0, 1])
    const yStandalone = useTransform(standaloneProgress, [0, 1], [20, 0])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased && scrollProgress) {
      return (
        <motion.div
          style={{ opacity: opacityFromProp!, y: yFromProp! }}
          className={className}
        >
          {children}
        </motion.div>
      )
    }

    if (scrollBased && !scrollProgress) {
      return (
        <motion.div
          ref={ref}
          style={{ opacity: opacityStandalone, y: yStandalone }}
          className={className}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants as any}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

StaggerItem.displayName = "StaggerItem"

export default StaggerItem
