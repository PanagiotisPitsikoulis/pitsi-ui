"use client"

import Image from "next/image"
import { Heart, Leaf, Package, RefreshCcw, Sparkles, Truck } from "lucide-react"

export function FeaturesServicePlants() {
  const features = [
    {
      title: "Expert Selection of Plants",
      description:
        "Each plant is hand-picked by our horticulturists for health and beauty.",
      icon: Sparkles,
    },
    {
      title: "Safe Delivery to Your House",
      description:
        "Specially packaged to arrive healthy and ready to thrive in your home.",
      icon: Package,
    },
    {
      title: "30-Day Plant Health Guarantee",
      description:
        "Not thriving? We'll replace it free within 30 days of delivery.",
      icon: Heart,
    },
    {
      title: "Free Shipping on All Orders",
      description:
        "Complimentary shipping on all orders over $50, delivered with care.",
      icon: Truck,
    },
    {
      title: "Rare and Unique Varieties",
      description:
        "Hard-to-find cultivars and rare specimens sourced from specialty growers.",
      icon: Leaf,
    },
    {
      title: "Hassle-Free Easy Returns",
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
          <p className="text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase">
            The Difference
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Why Plant Lovers Choose Us
          </h2>
        </div>

        <div className="grid w-full grid-cols-6 gap-6">
          {/* Left column - spans 2 cols - right aligned */}
          <div className="col-span-6 flex flex-col gap-10 lg:col-span-2">
            {leftFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start text-left lg:items-end lg:text-right"
                >
                  <div className="bg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="text-brand h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-foreground mb-1 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Center element - Image - spans 2 cols */}
          <div className="col-span-6 lg:col-span-2">
            <div className="border-border relative h-full min-h-[400px] overflow-hidden rounded-3xl border lg:min-h-0">
              <Image
                draggable={false}
                src="/placeholders/blocks/service-plants/assets/item-6.webp"
                alt="Beautiful indoor plants"
                fill
                className="pointer-events-none object-cover select-none"
              />
            </div>
          </div>

          {/* Right column - spans 2 cols */}
          <div className="col-span-6 flex flex-col gap-10 lg:col-span-2">
            {rightFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="flex flex-col items-start">
                  <div className="bg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="text-brand h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-foreground mb-1 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
