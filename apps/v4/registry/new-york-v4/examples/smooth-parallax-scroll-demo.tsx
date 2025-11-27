"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export default function SmoothParallaxScrollDemo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const y6 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 1, 0.5, 0]
  )

  return (
    <div ref={container} className="relative h-[300vh] bg-black">
      {/* Hero section */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Background layers with parallax */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Mountains background"
            className="h-full w-full object-cover opacity-40"
          />
        </motion.div>

        {/* Mid layer */}
        <motion.div
          style={{ y: y1, scale }}
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
            alt="Mountain peaks"
            className="h-[60vh] w-full object-cover object-bottom"
          />
        </motion.div>

        {/* Foreground elements */}
        <motion.div
          style={{ y: y2, opacity }}
          className="relative z-20 text-center"
        >
          <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
            PARALLAX
          </h1>
          <p className="mt-4 text-xl text-white/60">Smooth scrolling layers</p>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          style={{ y: y4 }}
          className="absolute top-[20%] left-[10%] z-30"
        >
          <div className="h-32 w-24 rounded-xl bg-white/10 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          style={{ y: y5 }}
          className="absolute top-[30%] right-[15%] z-30"
        >
          <div className="h-40 w-32 rounded-xl bg-white/10 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          style={{ y: y6 }}
          className="absolute bottom-[20%] left-[20%] z-30"
        >
          <div className="h-24 w-36 rounded-xl bg-white/10 backdrop-blur-sm" />
        </motion.div>
      </div>

      {/* Content section */}
      <div className="relative z-40 flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Depth Through Motion
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Multiple layers moving at different speeds create a sense of depth
            and immersion as you scroll through the page.
          </p>
        </div>
      </div>
    </div>
  )
}
