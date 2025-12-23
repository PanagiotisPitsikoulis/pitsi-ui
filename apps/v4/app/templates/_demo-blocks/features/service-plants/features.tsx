"use client"

import Image from "next/image"
import {
  Heart,
  Leaf,
  Package,
  RefreshCcw,
  Sparkles,
  Truck,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { useBlockContext } from "../../_components"

export function FeaturesServicePlants() {
  const { cardBg } = useBlockContext()

  const features = [
    {
      title: "Expert Selection",
      description:
        "Each plant is hand-picked by our horticulturists for health and beauty.",
      icon: Sparkles,
    },
    {
      title: "Safe Delivery",
      description:
        "Specially packaged to arrive healthy and ready to thrive in your home.",
      icon: Package,
    },
    {
      title: "30-Day Guarantee",
      description:
        "Not thriving? We'll replace it free within 30 days of delivery.",
      icon: Heart,
    },
    {
      title: "Free Shipping",
      description:
        "Complimentary shipping on all orders over $50, delivered with care.",
      icon: Truck,
    },
    {
      title: "Rare Varieties",
      description:
        "Hard-to-find cultivars and rare specimens sourced from specialty growers.",
      icon: Leaf,
    },
    {
      title: "Easy Returns",
      description:
        "Hassle-free returns and exchanges if your plant doesn't meet expectations.",
      icon: RefreshCcw,
    },
  ]

  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3, 6)

  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            The Difference
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Why Plant Lovers Choose Us
          </h2>
        </div>

        <div className="grid w-full grid-cols-6 gap-6">
          {/* Left column - spans 2 cols */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {leftFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className={cn(
                    cardBg,
                    "flex flex-col gap-3 rounded-3xl border border-border p-6"
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 stroke-[1.5] text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Center element - Image - spans 2 cols */}
          <div className="col-span-6 lg:col-span-2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-border lg:min-h-0">
              <Image
                src="/placeholders/blocks/service-plants/2.webp"
                alt="Beautiful indoor plants"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column - spans 2 cols */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {rightFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className={cn(
                    cardBg,
                    "flex flex-col gap-3 rounded-3xl border border-border p-6"
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 stroke-[1.5] text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
