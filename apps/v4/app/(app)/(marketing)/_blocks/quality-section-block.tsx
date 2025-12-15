"use client"

import { ReactNode } from "react"

import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface QualityFeature {
  title: string
  description: string
}

export interface QualitySectionBlockProps {
  parallax: {
    tagline: string
    headline: ReactNode
    scrollTexts: [string, string]
  }
  manifesto: {
    tagline: string
    text: string
  }
  features: QualityFeature[]
  className?: string
}

export function QualitySectionBlock({
  parallax,
  manifesto,
  features,
  className,
}: QualitySectionBlockProps) {
  return (
    <div id="quality" className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Parallax Section */}
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

      {/* Manifesto Section */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {manifesto.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <p className="text-foreground max-w-3xl text-lg md:text-xl">
            {manifesto.text}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-24 md:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-2xl border p-6"
              >
                <h3 className="text-foreground text-lg font-medium">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ScrollPhrase({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-brand/30 text-[7vw] md:text-[5vw]">{text}</p>
    </div>
  )
}
