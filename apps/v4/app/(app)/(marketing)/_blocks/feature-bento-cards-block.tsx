"use client"

import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

export interface FeatureBentoCard {
  tag: string
  title: string
  description?: string
  image: string
  layout: "full" | "half" | "third"
}

export interface FeatureBentoCardsBlockProps {
  tagline?: string
  headline?: string
  headlineAccent?: string
  description?: string
  cards?: FeatureBentoCard[]
  className?: string
}

const defaultTagline = "What Sets Us Apart"
const defaultHeadline = "Professional Grade"
const defaultHeadlineAccent = "Design Tools"
const defaultDescription =
  "Industry-inspired presets. Mathematical foundations. Real component previews."
const defaultCards: FeatureBentoCard[] = [
  {
    tag: "APPLE • STRIPE • SHOPIFY",
    title: "Industry-Inspired Presets",
    description:
      "Not random values. Every preset is derived from real design systems — macOS shadows, Stripe's blue-tinted depth, Material Design spacing.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    layout: "full",
  },
  {
    tag: "REAL COMPONENTS",
    title: "See It In Context",
    description:
      "Preview on actual UI — modals, cards, navbars. Not abstract boxes.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    layout: "third",
  },
  {
    tag: "MULTI-FORMAT EXPORT",
    title: "One Design, All Platforms",
    description:
      "CSS, Tailwind v4, Figma, Framer Motion, JSON. Export once, use everywhere.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    layout: "half",
  },
]

export function FeatureBentoCardsBlock({
  tagline = defaultTagline,
  headline = defaultHeadline,
  headlineAccent = defaultHeadlineAccent,
  description = defaultDescription,
  cards = defaultCards,
  className,
}: FeatureBentoCardsBlockProps) {
  return (
    <section className={cn(className)}>
      <div className="container px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {tagline}
          </p>
          <h2 className="display mt-6 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {headline}
            <br />
            <span className="text-foreground">{headlineAccent}</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-16 flex grid-cols-1 flex-col gap-6 lg:grid lg:grid-cols-7">
          {cards.map((card, index) => {
            if (card.layout === "full") {
              return (
                <div
                  key={index}
                  className="bg-background col-span-7 grid overflow-hidden rounded-3xl border shadow-xs sm:grid-cols-2"
                >
                  <div className="flex flex-col justify-between p-8 lg:p-12">
                    <div>
                      <div className="text-brand mb-4 text-xs font-medium tracking-wider">
                        {card.tag}
                      </div>
                      <h3 className="mb-3 text-xl font-medium lg:text-2xl">
                        {card.title}
                      </h3>
                      {card.description && (
                        <p className="text-muted-foreground text-sm lg:text-base">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="relative order-first aspect-video h-full max-h-96 w-full border-b sm:order-last sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-l">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            }

            if (card.layout === "third") {
              return (
                <div
                  key={index}
                  className="bg-background overflow-hidden rounded-3xl border shadow-xs lg:col-span-3"
                >
                  <div className="relative aspect-video max-h-72 w-full border-b">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="text-brand mb-4 text-xs font-medium tracking-wider">
                      {card.tag}
                    </div>
                    <h3 className="mb-3 text-xl font-medium lg:text-2xl">
                      {card.title}
                    </h3>
                    {card.description && (
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className="bg-background grid overflow-hidden rounded-3xl border shadow-xs sm:grid-cols-2 lg:col-span-4"
              >
                <div className="relative aspect-video h-full max-h-96 w-full border-b sm:aspect-auto lg:max-h-none lg:border-r lg:border-b-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="text-brand mb-4 text-xs font-medium tracking-wider">
                      {card.tag}
                    </div>
                    <h3 className="mb-3 text-xl font-medium lg:text-2xl">
                      {card.title}
                    </h3>
                    {card.description && (
                      <p className="text-muted-foreground text-sm lg:text-base">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
