"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const Intro = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"])

  return (
    <div ref={container} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Mountain landscape"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  )
}

const Description = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-20">
      <p className="text-foreground max-w-[80%] text-center text-[6vw] leading-none uppercase md:max-w-[50vw] md:text-[5vw]">
        Background Image Parallax
      </p>
    </div>
  )
}

const Section = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20">
        <p className="w-full self-end text-sm text-white uppercase mix-blend-difference md:w-[50vw] md:text-[2vw]">
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p className="text-2xl text-white uppercase mix-blend-difference md:text-[5vw]">
          Background Parallax
        </p>
      </div>
      <div className="absolute inset-0 -top-[10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
            alt="Nature landscape"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function BackgroundImageParallaxDemo() {
  return (
    <main className="bg-background">
      <Intro />
      <Description />
      <Section />
      <div className="h-[50vh]" />
    </main>
  )
}
