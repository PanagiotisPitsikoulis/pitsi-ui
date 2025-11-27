"use client"

import { useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

const pictures = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    targetScale: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    targetScale: 5,
    style: { top: "-30vh", left: "5vw", width: "35vw", height: "30vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
    targetScale: 6,
    style: { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    targetScale: 5,
    style: { left: "27.5vw", width: "25vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    targetScale: 6,
    style: { top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    targetScale: 8,
    style: { top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" },
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
    targetScale: 9,
    style: { top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" },
  },
]

function ZoomImage({
  src,
  targetScale,
  style,
  scrollYProgress,
  index,
}: {
  src: string
  targetScale: number
  style?: React.CSSProperties
  scrollYProgress: MotionValue<number>
  index: number
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <motion.div
      style={{ scale }}
      className="absolute top-0 flex h-full w-full items-center justify-center"
    >
      <div
        className="relative"
        style={style || { width: "25vw", height: "25vh" }}
      >
        <img
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  )
}

export default function ZoomParallaxDemo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map((picture, index) => (
          <ZoomImage
            key={index}
            src={picture.src}
            targetScale={picture.targetScale}
            style={picture.style}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
