"use client"

import Image from "next/image"

import { ImageOverlayGradient } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

export function FeaturesServicePlants2() {
  const features = [
    {
      title: "Curated Collections",
      description:
        "Thoughtfully assembled plant bundles for every room and skill level.",
      image: "/placeholders/blocks/service-plants/3.webp",
    },
    {
      title: "Plant Care Library",
      description:
        "Access our comprehensive guides, videos, and expert tips for each species.",
      image: "/placeholders/blocks/service-plants/4.webp",
    },
  ]

  return (
    <section className="overflow-x-clip">
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase">
            Beyond the Pot
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Resources to Help You Grow
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div key={idx} className="relative">
              <BlockThemeWrapper
                slug="service-plants"
                tint="deep"
                forceDark
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <Image
                  draggable={false}
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="pointer-events-none object-cover transition-transform duration-500 select-none group-hover:scale-105"
                />
                <ImageOverlayGradient from="bottom" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 z-20 p-8">
                  <h3 className="text-foreground mb-1 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              </BlockThemeWrapper>
              {idx === 1 && (
                <Image
                  draggable={false}
                  src="/placeholders/blocks/service-plants/assets/decoration-small-1.svg"
                  alt=""
                  width={300}
                  height={300}
                  className="absolute -right-24 -bottom-30 z-30 -rotate-90"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
