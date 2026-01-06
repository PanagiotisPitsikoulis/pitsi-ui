"use client"

import { ReactNode } from "react"

import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface ShowcaseSectionBlockProps {
  parallax: {
    tagline: string
    headline: ReactNode
    scrollTexts: [string, string]
  }
  textGradient: {
    tagline: string
    text: string
  }
  grid?: {
    title: string
    description: string
    blocks: string[]
  }
  className?: string
}

export function ShowcaseSectionBlock({
  parallax,
  textGradient,
  grid,
  className,
}: ShowcaseSectionBlockProps) {
  return (
    <div
      id="showcase"
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      {/* Parallax Text Section */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {parallax.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <h2 className="display text-muted-foreground max-w-4xl text-3xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            {parallax.headline}
          </h2>
        </div>
        <Spacer size="3xl" sizeMobile="2xl" />
        <HorizontalScrollContainer className="py-4">
          <HorizontalSlide direction="left" left="-40%">
            <ScrollPhrase text={parallax.scrollTexts[0]} />
            <ScrollPhrase text={parallax.scrollTexts[0]} />
            <ScrollPhrase text={parallax.scrollTexts[0]} />
          </HorizontalSlide>
          <HorizontalSlide direction="right" left="-25%">
            <ScrollPhrase text={parallax.scrollTexts[1]} />
            <ScrollPhrase text={parallax.scrollTexts[1]} />
            <ScrollPhrase text={parallax.scrollTexts[1]} />
          </HorizontalSlide>
        </HorizontalScrollContainer>
      </div>

      {/* Text Gradient Section */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {textGradient.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <p className="text-foreground max-w-3xl text-lg md:text-xl">
            {textGradient.text}
          </p>
        </div>
      </div>

      {/* Optional Grid Section */}
      {grid && (
        <div className="relative py-24 md:py-32">
          <div className="container px-6">
            <div className="mb-8 text-center">
              <h3 className="text-foreground text-2xl font-medium md:text-3xl">
                {grid.title}
              </h3>
              <p className="text-muted-foreground mt-2">{grid.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grid.blocks.map((block, index) => (
                <div
                  key={index}
                  className="border-border bg-card aspect-video rounded-xl border"
                >
                  {/* Block preview placeholder */}
                  <div className="flex h-full items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      {block}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ScrollPhrase({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-muted-foreground/30 text-[7vw] md:text-[5vw]">
        {text}
      </p>
    </div>
  )
}
