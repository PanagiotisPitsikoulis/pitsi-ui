"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const phrases = [
  "Los Flamencos National Reserve",
  "is a nature reserve located",
  "in the commune of San Pedro de Atacama",
  "The reserve covers a total area",
  "of 740 square kilometres",
]

const projects = [
  {
    title: "Salar de Atacama",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    title: "Valle de la Luna",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
  },
  {
    title: "Miscanti Lake",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
  },
  {
    title: "Miniques Lagoon",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
  },
]

function AnimatedText({ children }: { children: string }) {
  const text = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!text.current) return

    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.out",
    })
  }, [])

  return (
    <p
      ref={text}
      className="relative m-0 text-xl font-medium text-zinc-300 md:text-2xl"
    >
      {children}
    </p>
  )
}

function Intro() {
  const background = useRef<HTMLDivElement>(null)
  const introImage = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    })

    if (background.current && introImage.current) {
      timeline
        .from(background.current, { clipPath: "inset(15%)" })
        .to(introImage.current, { height: "200px" }, 0)
    }
  }, [])

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div
        ref={background}
        className="absolute inset-0"
        style={{ clipPath: "inset(0%)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Background"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div
          ref={introImage}
          className="relative h-[350px] w-[350px] overflow-hidden rounded-full"
        >
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop"
            alt="Intro"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  )
}

function Description() {
  return (
    <div className="ml-auto flex flex-col gap-8 bg-zinc-900 px-8 py-40 md:w-[70%] md:px-20">
      {phrases.map((phrase, index) => (
        <AnimatedText key={index}>{phrase}</AnimatedText>
      ))}
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)
  const imageContainer = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!imageContainer.current) return

    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: "+=1000px",
    })
  }, [])

  return (
    <div className="relative mt-20 flex min-h-screen gap-8 bg-zinc-900 px-8 pb-40 md:px-20">
      <div className="flex flex-1 flex-col gap-4">
        <div
          ref={imageContainer}
          className="relative aspect-video w-full overflow-hidden rounded-xl"
        >
          <img
            src={projects[selectedProject].src}
            alt={projects[selectedProject].title}
            className="h-full w-full object-cover transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-4 text-sm text-zinc-400">
          <p>
            The flora is characterized by high elevation wetland, yellow straw,
            and tola amaia.
          </p>
          <p>Wildlife includes endangered species like viscacha and vicuña.</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setSelectedProject(index)}
            className="cursor-pointer border-t border-zinc-700 py-8 transition-colors hover:bg-zinc-800/50"
          >
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SmoothScrollDemo() {
  return (
    <main className="bg-zinc-900">
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
