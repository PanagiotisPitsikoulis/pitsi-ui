"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"
import { StaggerItem } from "@/registry/animations/stagger-item/stagger-item"

export type StaggerChildrenProps = {
  children: ReactNode
  staggerDelay?: number
  className?: string
  scrollBased?: boolean
  noMobile?: boolean
}

export const StaggerChildren = memo<StaggerChildrenProps>(
  ({
    children,
    staggerDelay = 0.15,
    className,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const variants = useMemo(
      () => ({
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }),
      [staggerDelay]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "start center"],
    })

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div ref={ref} className={className}>
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <StaggerItem
                key={index}
                scrollProgress={scrollYProgress}
                index={index}
                staggerDelay={staggerDelay}
                scrollBased={scrollBased}
                noMobile={noMobile}
              >
                {child}
              </StaggerItem>
            ))
          ) : (
            <StaggerItem
              scrollProgress={scrollYProgress}
              index={0}
              staggerDelay={staggerDelay}
              scrollBased={scrollBased}
              noMobile={noMobile}
            >
              {children}
            </StaggerItem>
          )}
        </motion.div>
      )
    }

    const childVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
      },
    }

    const childTransition = {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        className={className}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              transition={childTransition}
            >
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={childVariants} transition={childTransition}>
            {children}
          </motion.div>
        )}
      </motion.div>
    )
  }
)

StaggerChildren.displayName = "StaggerChildren"

export default StaggerChildren
