"use client"

import { ChevronRight } from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/registry/new-york-v4/ui/button"

export interface FeatureBentoCard {
  tag: string
  title: string
  description?: string
  image: string
  href?: string
  layout: "full" | "half" | "third"
}

export interface FeatureBentoCardsBlockProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  cards?: FeatureBentoCard[]
  className?: string
}

const defaultHeadline = "Built your dream project with our blocks"
const defaultDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat odit sunt eaque ex, natus vel maxime tenetur odio? Nemo."
const defaultCtaLabel = "Get started for free"
const defaultCards: FeatureBentoCard[] = [
  {
    tag: "COPY AND PASTE",
    title: "Ready to use blocks for your project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae similique atque laboriosam a illum ad sit. Natus, iste voluptatem!",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    layout: "full",
  },
  {
    tag: "EASY TO USE",
    title: "Customize and build your project",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    layout: "third",
  },
  {
    tag: "A BLOCK FOR EVERYTHING",
    title: "Blocks for every project",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    layout: "half",
  },
]

export function FeatureBentoCardsBlock({
  headline = defaultHeadline,
  description = defaultDescription,
  ctaLabel = defaultCtaLabel,
  ctaHref,
  cards = defaultCards,
  className,
}: FeatureBentoCardsBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="mb-2 text-balance text-center text-3xl font-semibold lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground text-center lg:text-lg">
            {description}
          </p>
          <Button variant="outline" className="mt-6" asChild={!!ctaHref}>
            {ctaHref ? (
              <a href={ctaHref}>
                {ctaLabel}
                <ChevronRight className="ml-1 h-4" />
              </a>
            ) : (
              <>
                {ctaLabel}
                <ChevronRight className="ml-1 h-4" />
              </>
            )}
          </Button>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl grid-cols-1 flex-col gap-6 lg:grid lg:grid-cols-7">
          {cards.map((card, index) => {
            if (card.layout === "full") {
              return (
                <a
                  key={index}
                  href={card.href || "#"}
                  className="bg-muted col-span-7 grid overflow-hidden rounded-lg sm:grid-cols-2"
                >
                  <div className="flex flex-col justify-between p-8 lg:p-12">
                    <div>
                      <div className="text-muted-foreground mb-4 text-xs">
                        {card.tag}
                      </div>
                      <h3 className="mb-2 text-xl font-medium lg:text-2xl">
                        {card.title}
                      </h3>
                      {card.description && (
                        <p className="text-muted-foreground text-sm lg:text-base">
                          {card.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 sm:mt-8">
                      <Button variant="outline">
                        Learn more
                        <ChevronRight className="ml-1 h-4" />
                      </Button>
                    </div>
                  </div>
                  <img
                    src={card.image}
                    alt="placeholder"
                    className="order-first aspect-video h-full max-h-96 w-full border-b object-cover sm:order-last sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-l"
                  />
                </a>
              )
            }

            if (card.layout === "third") {
              return (
                <a
                  key={index}
                  href={card.href || "#"}
                  className="bg-muted group relative overflow-hidden rounded-lg lg:col-span-3"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-10 top-7 transition-all duration-200 group-hover:opacity-100 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0"
                  >
                    <ChevronRight className="h-4" />
                  </Button>
                  <img
                    src={card.image}
                    alt="placeholder"
                    className="max-h-72 w-full border-b object-cover"
                  />
                  <div className="p-8 lg:p-12">
                    <div className="text-muted-foreground mb-4 text-xs">
                      {card.tag}
                    </div>
                    <h3 className="mb-2 text-xl font-medium lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                </a>
              )
            }

            return (
              <a
                key={index}
                href={card.href || "#"}
                className="bg-muted grid overflow-hidden rounded-lg sm:grid-cols-2 lg:col-span-4"
              >
                <img
                  src={card.image}
                  alt="placeholder"
                  className="aspect-video h-full max-h-96 w-full border-b object-cover sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-r"
                />
                <div className="flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="text-muted-foreground mb-4 text-xs">
                      {card.tag}
                    </div>
                    <h3 className="mb-2 text-xl font-medium lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <Button variant="outline">
                      Learn more
                      <ChevronRight className="ml-1 h-4" />
                    </Button>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
