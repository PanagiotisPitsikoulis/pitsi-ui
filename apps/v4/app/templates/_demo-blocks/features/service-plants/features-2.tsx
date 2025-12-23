"use client"

import Image from "next/image"

import { ImageOverlayGradient } from "../../_block_components"

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
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Beyond the Pot
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Resources to Help You Grow
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <ImageOverlayGradient from="bottom" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
