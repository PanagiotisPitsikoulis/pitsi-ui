"use client"

import type { StaticImageData } from "next/image"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export type Transforms3dProps = {
  src: StaticImageData | string
  alt?: string
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  perspective?: number
  className?: string
  classNames?: {
    container?: string
    perspectiveWrapper?: string
    image?: string
    placeholder?: string
    placeholderInner?: string
  }
}

export function Transforms3d({
  src,
  alt = "",
  rotateX = 30,
  rotateY = -5,
  rotateZ = 15,
  perspective = 1200,
  className,
  classNames = {},
}: Transforms3dProps) {
  const INITIAL = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }

  return (
    <div
      className={cn(
        "grid size-full place-content-center",
        classNames.container,
        className
      )}
    >
      <div
        className={cn(
          "-translate-y-4 transition duration-300 perspective-origin-top",
          classNames.perspectiveWrapper
        )}
        style={{ perspective: `${perspective}px` }}
      >
        <motion.img
          initial={INITIAL}
          whileHover={INITIAL}
          whileTap={INITIAL}
          whileInView={{
            rotateX,
            rotateY,
            rotateZ,
          }}
          viewport={{
            margin: "-200px 0px -200px 0px",
          }}
          alt={alt}
          src={typeof src === "string" ? src : src.src}
          className={cn(
            "absolute inset-0 size-82 rounded-2xl object-cover object-center shadow-2xl outline outline-gray-950/5 transition duration-300 transform-3d",
            classNames.image
          )}
        />
        <div
          className={cn(
            "col-start-1 row-start-1 size-82 rounded-2xl bg-gray-950/5 p-2 shadow-inner inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10",
            classNames.placeholder
          )}
        >
          <div
            className={cn(
              "size-full rounded-lg outline outline-gray-950/10 outline-dashed",
              classNames.placeholderInner
            )}
          />
        </div>
      </div>
    </div>
  )
}

// Default wrapper for standalone viewing with sample image
const Transforms3dDemo = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-8">
      <Transforms3d
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
        alt="Mountain landscape"
        rotateX={30}
        rotateY={-5}
        rotateZ={15}
      />
    </div>
  )
}

export default Transforms3dDemo
