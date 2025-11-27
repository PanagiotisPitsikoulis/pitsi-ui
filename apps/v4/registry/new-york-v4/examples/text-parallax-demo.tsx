"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const Slide = ({
  src,
  direction,
  left,
  progress,
}: {
  src: string
  direction: "left" | "right"
  left: string
  progress: any
}) => {
  const dir = direction === "left" ? -1 : 1
  const translateX = useTransform(progress, [0, 1], [150 * dir, -150 * dir])

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  )
}

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-foreground text-[7.5vw]">Front End Developer</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <img
          src={src}
          alt="decorative"
          className="h-full w-full object-cover"
        />
      </span>
    </div>
  )
}

export default function TextParallaxDemo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=200&fit=crop",
  ]

  return (
    <main className="overflow-hidden">
      <div className="relative grid h-[50vh] content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          Scroll to see effect
        </span>
      </div>
      <div ref={container}>
        <Slide
          src={images[0]}
          direction="left"
          left="-40%"
          progress={scrollYProgress}
        />
        <Slide
          src={images[1]}
          direction="right"
          left="-25%"
          progress={scrollYProgress}
        />
        <Slide
          src={images[2]}
          direction="left"
          left="-75%"
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[50vh]" />
    </main>
  )
}
