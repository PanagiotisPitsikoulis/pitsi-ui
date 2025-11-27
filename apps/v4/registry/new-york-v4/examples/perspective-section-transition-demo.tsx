"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#C72626] pb-[10vh] text-[3.5vw] text-white"
    >
      <p>Scroll Perspective</p>
      <div className="flex items-center gap-4">
        <p>Section</p>
        <div className="relative h-[10vw] w-[12.5vw] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
            alt="Mountain landscape"
            className="h-full w-full object-cover"
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
        alt="Nature landscape"
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}

export default function PerspectiveSectionTransitionDemo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  )
}
