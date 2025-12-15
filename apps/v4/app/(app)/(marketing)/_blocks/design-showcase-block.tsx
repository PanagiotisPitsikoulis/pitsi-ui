"use client"

import { ReactNode } from "react"

import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { StripeBgGuides } from "@/components/layout/striped-bg-guides"

export interface DesignShowcaseBlockProps {
  intro: {
    tagline: string
    headline: [string, string]
    subtext: [string, string]
    backgroundImage: string
    foregroundImage: string
  }
  problem: {
    tagline: string
    headline: ReactNode
    scrollTexts: [string, string]
  }
  solution: {
    tagline: string
    text: string
  }
  finalCta: {
    tagline: string
    headline: ReactNode
    scrollTexts: [string, string]
  }
  features: Array<{
    title: string
    description: string
  }>
  previewBlocks?: string[]
  showStripeBg?: boolean
  className?: string
}

export function DesignShowcaseBlock({
  intro,
  problem,
  solution,
  finalCta,
  features,
  showStripeBg = false,
  className,
}: DesignShowcaseBlockProps) {
  return (
    <div id="design" className={`relative overflow-hidden ${className ?? ""}`}>
      {showStripeBg && (
        <StripeBgGuides
          className="absolute inset-0 z-0"
          contained
        />
      )}

      {/* Intro Section with Parallax */}
      <div className="relative">
        <ParallaxImage
          src={intro.backgroundImage}
          alt="Design showcase background"
          className="relative flex min-h-[70vh] items-end justify-center pb-20 md:min-h-screen md:pb-32"
          imageClassName="absolute inset-0 h-[120%] w-full"
          range={["-10%", "10%"]}
          offset={["start end", "end start"]}
        >
          <div className="relative z-10 container flex flex-col items-center px-6 text-center">
            <p className="text-sm font-medium tracking-widest uppercase text-white/80">
              {intro.tagline}
            </p>
            <Spacer size="md" sizeMobile="sm" />
            <h2 className="display max-w-4xl text-4xl leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              {intro.headline[0]}
              <br />
              <span className="text-white/60">{intro.headline[1]}</span>
            </h2>
            <Spacer size="xl" sizeMobile="md" />
            <p className="text-lg text-white/70 md:text-xl">
              {intro.subtext[0]}
              <br className="hidden md:block" /> {intro.subtext[1]}
            </p>
          </div>
        </ParallaxImage>
      </div>

      {/* Problem Statement with Scroll Text */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {problem.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <h3 className="display text-muted-foreground max-w-4xl text-3xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            {problem.headline}
          </h3>
        </div>
        <Spacer size="3xl" sizeMobile="2xl" />
        <HorizontalScrollContainer className="py-4">
          <HorizontalSlide direction="left" left="-40%">
            <ScrollPhrase text={problem.scrollTexts[0]} />
            <ScrollPhrase text={problem.scrollTexts[0]} />
            <ScrollPhrase text={problem.scrollTexts[0]} />
          </HorizontalSlide>
          <HorizontalSlide direction="right" left="-25%">
            <ScrollPhrase text={problem.scrollTexts[1]} />
            <ScrollPhrase text={problem.scrollTexts[1]} />
            <ScrollPhrase text={problem.scrollTexts[1]} />
          </HorizontalSlide>
        </HorizontalScrollContainer>
      </div>

      {/* Solution / Features Grid */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {solution.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <p className="text-foreground max-w-3xl text-lg md:text-xl">
            {solution.text}
          </p>
        </div>
        <Spacer size="4xl" sizeMobile="3xl" />
        <div className="container px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-2xl border p-6"
              >
                <h4 className="text-foreground text-lg font-medium">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA with Scroll Text */}
      <div className="relative py-24 md:py-32">
        <div className="container flex flex-col items-center px-6 text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {finalCta.tagline}
          </p>
          <Spacer size="md" sizeMobile="sm" />
          <h3 className="display text-muted-foreground max-w-4xl text-3xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h3>
        </div>
        <Spacer size="3xl" sizeMobile="2xl" />
        <HorizontalScrollContainer className="py-4">
          <HorizontalSlide direction="left" left="-40%">
            <ScrollPhrase text={finalCta.scrollTexts[0]} variant="success" />
            <ScrollPhrase text={finalCta.scrollTexts[0]} variant="success" />
            <ScrollPhrase text={finalCta.scrollTexts[0]} variant="success" />
          </HorizontalSlide>
          <HorizontalSlide direction="right" left="-25%">
            <ScrollPhrase text={finalCta.scrollTexts[1]} variant="success" />
            <ScrollPhrase text={finalCta.scrollTexts[1]} variant="success" />
            <ScrollPhrase text={finalCta.scrollTexts[1]} variant="success" />
          </HorizontalSlide>
        </HorizontalScrollContainer>
      </div>
    </div>
  )
}

function ScrollPhrase({
  text,
  variant = "default",
}: {
  text: string
  variant?: "default" | "success"
}) {
  return (
    <div className="flex items-center gap-5 px-5">
      <p
        className={`text-[7vw] md:text-[5vw] ${
          variant === "success" ? "text-brand" : "text-muted-foreground/30"
        }`}
      >
        {text}
      </p>
    </div>
  )
}
