import Image from "next/image"

import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=200&fit=crop",
]

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-foreground text-[7.5vw]">Front End Developer</p>
      <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
        <Image
          src={src}
          alt="decorative"
          fill
          className="object-cover"
        />
      </span>
    </div>
  )
}

export function TextParallaxSection() {
  return (
    <div className="overflow-hidden">
      {/* Scroll indicator */}
      <div className="relative grid h-[50vh] content-center justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          Scroll to see effect
        </span>
      </div>

      {/* Sliding text rows */}
      <HorizontalScrollContainer>
        <HorizontalSlide direction="left" left="-40%">
          <Phrase src={images[0]} />
          <Phrase src={images[0]} />
          <Phrase src={images[0]} />
        </HorizontalSlide>

        <HorizontalSlide direction="right" left="-25%">
          <Phrase src={images[1]} />
          <Phrase src={images[1]} />
          <Phrase src={images[1]} />
        </HorizontalSlide>

        <HorizontalSlide direction="left" left="-75%">
          <Phrase src={images[2]} />
          <Phrase src={images[2]} />
          <Phrase src={images[2]} />
        </HorizontalSlide>
      </HorizontalScrollContainer>

      <div className="h-[50vh]" />
    </div>
  )
}
