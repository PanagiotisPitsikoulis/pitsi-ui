"use client"

import { useRef } from "react"
import { IconArrowRight } from "@tabler/icons-react"
import { motion, useScroll, useTransform } from "motion/react"

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    link: "#",
    color: "#BBACAF",
  },
  {
    title: "Clement Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    link: "#",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity.",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
    link: "#",
    color: "#C2491D",
  },
  {
    title: "Mathias Svold",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers investigating how humans interact with nature.",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    link: "#",
    color: "#B62429",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared the first chapter of his latest photographic project—a visual and meditative journey into the origins of regrets.",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    link: "#",
    color: "#88A28D",
  },
]

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  description: string
  src: string
  link: string
  color: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex h-[500px] w-[1000px] max-w-[90vw] origin-top flex-col rounded-3xl p-8 md:p-12"
      >
        <h2 className="m-0 text-center text-2xl font-semibold text-black">
          {title}
        </h2>
        <div className="mt-8 flex h-full flex-col gap-8 md:mt-12 md:flex-row md:gap-12">
          <div className="relative top-[10%] flex w-full flex-col md:w-2/5">
            <p className="text-sm text-black first-letter:text-2xl first-letter:font-semibold md:text-base">
              {description}
            </p>
            <span className="mt-4 flex items-center gap-2">
              <a
                href={link}
                className="cursor-pointer text-xs text-black underline"
              >
                See more
              </a>
              <IconArrowRight className="h-4 w-4 text-black" />
            </span>
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-3xl md:w-3/5">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function CardsParallaxDemo() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <main ref={container} className="relative">
      <div className="relative grid h-[40vh] content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          Scroll to see cards stack
        </span>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </main>
  )
}
