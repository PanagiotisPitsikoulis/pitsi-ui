"use client"

import Image from "next/image"
import { Leaf, Package, Recycle, Truck } from "lucide-react"

import { useBlockContext } from "../../_components"

export function FeaturesServicePlants3() {
  const { containerBg } = useBlockContext()
  const circleBg = containerBg === "page" ? "bg-muted" : "bg-background"
  const features = [
    {
      title: "Local Sourcing",
      description:
        "Sustainably sourced from local nurseries to support communities.",
      icon: Leaf,
    },
    {
      title: "Eco Packaging",
      description:
        "Biodegradable materials that break down naturally over time.",
      icon: Package,
    },
    {
      title: "Carbon Neutral",
      description:
        "Carbon-neutral shipping options for eco-conscious delivery.",
      icon: Truck,
    },
    {
      title: "Plant Recycling",
      description: "Free recycling program for plants that don't survive.",
      icon: Recycle,
    },
    {
      title: "Zero Waste",
      description:
        "Minimal waste practices throughout our entire supply chain.",
      icon: Leaf,
    },
    {
      title: "Green Energy",
      description:
        "All our facilities run entirely on renewable energy sources.",
      icon: Recycle,
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase">
              Our Promise
            </p>
            <h2 className="font-display text-foreground text-3xl font-bold text-balance md:text-5xl lg:text-6xl">
              Sustainability
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg text-lg">
              From sustainably sourced plants to eco-friendly packaging, every
              decision considers our planet.
            </p>
            <div className="mt-14 grid w-full grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="border-border bg-card flex items-start gap-3 rounded-3xl p-4 shadow-sm dark:border"
                  >
                    <div className="bg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="text-brand h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground text-base font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full">
              {/* Background circle */}
              <div className={`absolute inset-x-[15%] top-[30%] bottom-[5%] rounded-full border border-border ${circleBg}`} />
              {/* Image */}
              <Image draggable={false}
                src="/placeholders/blocks/service-plants/assets/item-1.webp"
                alt="Featured plant"
                fill
                className="z-10 -translate-y-[10%] scale-110 select-none pointer-events-none object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
