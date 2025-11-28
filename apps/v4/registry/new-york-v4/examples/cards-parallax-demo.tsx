"use client"

import { IconArrowRight } from "@tabler/icons-react"

import {
  CardsParallaxContainer,
  ParallaxCard,
  ParallaxCardImage,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"

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

export default function CardsParallaxDemo() {
  return (
    <main>
      <div className="relative grid h-[40vh] content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          Scroll to see cards stack
        </span>
      </div>

      <CardsParallaxContainer cardCount={projects.length}>
        {projects.map((project, i) => (
          <ParallaxCard key={i} index={i} backgroundColor={project.color}>
            <h2 className="m-0 text-center text-2xl font-semibold text-black">
              {project.title}
            </h2>
            <div className="mt-8 flex h-full flex-col gap-8 md:mt-12 md:flex-row md:gap-12">
              <div className="relative top-[10%] flex w-full flex-col md:w-2/5">
                <p className="text-sm text-black first-letter:text-2xl first-letter:font-semibold md:text-base">
                  {project.description}
                </p>
                <span className="mt-4 flex items-center gap-2">
                  <a
                    href={project.link}
                    className="cursor-pointer text-xs text-black underline"
                  >
                    See more
                  </a>
                  <IconArrowRight className="h-4 w-4 text-black" />
                </span>
              </div>
              <div className="h-full w-full md:w-3/5">
                <ParallaxCardImage src={project.src} alt={project.title} />
              </div>
            </div>
          </ParallaxCard>
        ))}
      </CardsParallaxContainer>
    </main>
  )
}
