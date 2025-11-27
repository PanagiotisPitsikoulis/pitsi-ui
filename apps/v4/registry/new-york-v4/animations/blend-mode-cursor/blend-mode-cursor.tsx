"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

export type BlendModeCursorProps = {
  /** Size of the cursor when not active. Default: 30 */
  size?: number
  /** Size of the cursor when active/hovering. Default: 400 */
  activeSize?: number
  /** Cursor color. Default: "#BCE4F2" */
  color?: string
  /** Blur amount when active. Default: 30 */
  activeBlur?: number
  /** Spring stiffness for cursor movement. Default: 150 */
  stiffness?: number
  /** Spring damping for cursor movement. Default: 15 */
  damping?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * A cursor that follows the mouse with mix-blend-difference effect.
 * Expands and blurs when hovering over elements with data-cursor-active attribute.
 */
export function BlendModeCursor({
  size = 30,
  activeSize = 400,
  color = "#BCE4F2",
  activeBlur = 30,
  stiffness = 150,
  damping = 15,
  className,
}: BlendModeCursorProps) {
  const [isActive, setIsActive] = useState(false)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { stiffness, damping }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const currentSize = isActive ? activeSize : size
  const currentBlur = isActive ? activeBlur : 0

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-cursor-active]")) {
        setIsActive(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-cursor-active]")) {
        setIsActive(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference",
        className
      )}
      style={{
        x,
        y,
        width: currentSize,
        height: currentSize,
        backgroundColor: color,
        filter: `blur(${currentBlur}px)`,
        translateX: "-50%",
        translateY: "-50%",
        transition:
          "width 0.3s ease-out, height 0.3s ease-out, filter 0.3s ease-out",
      }}
    />
  )
}

export type GradientCursorProps = {
  /** Size of each circle when not active. Default: 30 */
  size?: number
  /** Size of each circle when active/hovering. Default: 400 */
  activeSize?: number
  /** Array of colors for the gradient circles. Default: ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"] */
  colors?: string[]
  /** Blur amount when active. Default: 20 */
  activeBlur?: number
  /** Blur amount when not active. Default: 2 */
  blur?: number
  /** Base delay for staggered animation. Default: 0.005 */
  delay?: number
  /** Active delay for staggered animation. Default: 0.015 */
  activeDelay?: number
  /** Spring stiffness for cursor movement. Default: 150 */
  stiffness?: number
  /** Spring damping for cursor movement. Default: 15 */
  damping?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * A gradient cursor with multiple colored circles that follow the mouse.
 * Creates a colorful blur effect with mix-blend-difference.
 */
export function GradientCursor({
  size = 30,
  activeSize = 400,
  colors = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"],
  activeBlur = 20,
  blur = 2,
  delay = 0.005,
  activeDelay = 0.015,
  stiffness = 150,
  damping = 15,
  className,
}: GradientCursorProps) {
  const [isActive, setIsActive] = useState(false)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { stiffness, damping }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const currentSize = isActive ? activeSize : size
  const currentBlur = isActive ? activeBlur : blur
  const currentDelay = isActive ? activeDelay : delay

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-cursor-active]")) {
        setIsActive(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-cursor-active]")) {
        setIsActive(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className={cn(
            "pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference",
            className
          )}
          style={{
            x,
            y,
            width: currentSize,
            height: currentSize,
            backgroundColor: color,
            filter: `blur(${currentBlur}px)`,
            translateX: "-50%",
            translateY: "-50%",
            transition: `transform ${(colors.length - i) * currentDelay}s linear, width 0.3s ease-out, height 0.3s ease-out, filter 0.3s ease-out`,
          }}
        />
      ))}
    </>
  )
}

export default BlendModeCursor
