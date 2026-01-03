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
            "outline-foreground/5 absolute inset-0 size-82 rounded-2xl object-cover object-center shadow-2xl outline transition duration-300 transform-3d",
            classNames.image
          )}
        />
        <div
          className={cn(
            "bg-foreground/5 inset-ring-foreground/5 col-start-1 row-start-1 size-82 rounded-2xl p-2 shadow-inner inset-ring",
            classNames.placeholder
          )}
        >
          <div
            className={cn(
              "outline-foreground/10 size-full rounded-lg outline outline-dashed",
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
    <div className="bg-background flex min-h-screen w-full items-center justify-center p-8">
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
