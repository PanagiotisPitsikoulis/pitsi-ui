"use client"

import type { ReactNode } from "react"
import { memo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"

export type ScrollFadeProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  scrollBased?: boolean
  noMobile?: boolean
}

export const ScrollFade = memo<ScrollFadeProps>(
  ({
    children,
    className,
    delay = 0,
    duration = 0.6,
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

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div ref={ref} style={{ opacity }} className={className}>
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollFade.displayName = "ScrollFade"

export default ScrollFade
