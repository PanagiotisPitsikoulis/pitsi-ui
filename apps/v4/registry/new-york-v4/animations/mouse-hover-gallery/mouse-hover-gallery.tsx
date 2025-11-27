// @ts-nocheck
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

export type Project = {
  title: string
  src: string
  color: string
  subtitle?: string
}

export type MouseHoverGalleryProps = {
  /** Array of projects to display */
  projects: Project[]
  /** Additional CSS classes */
  className?: string
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
}

/**
 * A project gallery where hovering over items reveals an image that follows the cursor.
 * Creates an interactive showcase effect for portfolio items.
 */
export function MouseHoverGallery({
  projects,
  className,
}: MouseHoverGalleryProps) {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  return (
    <div className={cn("relative", className)}>
      <div className="flex w-full flex-col items-center justify-center">
        {projects.map((project, i) => (
          <div
            key={i}
            onMouseEnter={() => setModal({ active: true, index: i })}
            onMouseLeave={() => setModal({ active: false, index: i })}
            className="border-muted flex w-full cursor-pointer items-center justify-between border-t px-8 py-12 transition-all duration-200 last:border-b hover:opacity-50 md:px-24"
          >
            <h2 className="text-foreground m-0 text-4xl font-normal transition-transform duration-400 group-hover:-translate-x-2.5 md:text-6xl">
              {project.title}
            </h2>
            <p className="text-muted-foreground font-light transition-transform duration-400 group-hover:translate-x-2.5">
              {project.subtitle ?? "Design & Development"}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      <motion.div
        style={{ left: x, top: y }}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute z-10 flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white"
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500"
          style={{
            top: `${index * -100}%`,
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <img
                src={project.src}
                alt={project.title}
                className="h-auto w-[300px] object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cursor */}
      <motion.div
        style={{ left: x, top: y }}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#455CE9]"
      />

      {/* Cursor Label */}
      <motion.div
        style={{ left: x, top: y }}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute z-20 flex h-20 w-20 items-center justify-center rounded-full text-sm font-light text-white"
      >
        View
      </motion.div>
    </div>
  )
}

export default MouseHoverGallery
