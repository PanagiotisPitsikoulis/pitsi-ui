"use client"

import Image from "next/image"
import { Leaf } from "lucide-react"

import { cn } from "@/lib/utils"

import { useBlockContext } from "../../_components"

export function FeaturesServicePlants3() {
  const { cardBg } = useBlockContext()

  const benefits = [
    {
      title: "Local Sourcing",
      description:
        "Sustainably sourced from local nurseries to reduce carbon footprint.",
    },
    {
      title: "Eco Packaging",
      description:
        "Biodegradable packaging materials that break down naturally.",
    },
    {
      title: "Carbon Neutral",
      description:
        "Carbon-neutral shipping options for environmentally conscious delivery.",
    },
    {
      title: "Plant Recycling",
      description:
        "Plant recycling program available for plants that don't survive.",
    },
  ]

  const leftBenefits = benefits.slice(0, 2)
  const rightBenefits = benefits.slice(2, 4)

  return (
    <section>
      <div className="container px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Our Promise
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Sustainability at Every Step
          </h2>
        </div>

        {/* 6-column grid */}
        <div className="grid w-full grid-cols-6 gap-6">
          {/* Left column - 2 benefits */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {leftBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={cn(
                  cardBg,
                  "flex flex-col gap-3 rounded-3xl border border-border p-6"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Leaf className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center - Image */}
          <div className="col-span-6 lg:col-span-2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-border lg:min-h-0">
              <Image
                src="/placeholders/blocks/service-plants/5.webp"
                alt="Sustainable plant care"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column - 2 benefits */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {rightBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={cn(
                  cardBg,
                  "flex flex-col gap-3 rounded-3xl border border-border p-6"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Leaf className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
