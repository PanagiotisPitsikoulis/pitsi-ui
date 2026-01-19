"use client"

import { useState } from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    seasons?: Array<{
      id: string
      label: string
      icon: string
    }>
    destinations?: Array<{
      name: string
      region: string
      icon: string
      duration: string
      highlights: string[]
      prices: Record<string, number>
      bestSeason: string
      cta: { label: string; href: string }
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
    grid?: string
  }
}

const pricing14Defaults = {
  badge: "Seasonal Escapes",
  title: "Destinations That Inspire",
  description:
    "Explore our handpicked destinations with seasonal pricing. The best time to visit is always now.",
  seasons: [
    { id: "spring", label: "Spring", icon: "Flower2" },
    { id: "summer", label: "Summer", icon: "Sun" },
    { id: "fall", label: "Fall", icon: "Leaf" },
    { id: "winter", label: "Winter", icon: "Snowflake" },
  ],
  destinations: [
    {
      name: "Santorini",
      region: "Greece",
      icon: "Building2",
      duration: "7 Days",
      highlights: [
        "Sunset views",
        "Wine tours",
        "Beach clubs",
        "Ancient ruins",
      ],
      prices: { spring: 2199, summer: 2899, fall: 2399, winter: 1799 },
      bestSeason: "summer",
      cta: { label: "Explore", href: "#" },
    },
    {
      name: "Kyoto",
      region: "Japan",
      icon: "Flower2",
      duration: "8 Days",
      highlights: [
        "Cherry blossoms",
        "Temples",
        "Geisha district",
        "Tea ceremony",
      ],
      prices: { spring: 3499, summer: 2899, fall: 3199, winter: 2599 },
      bestSeason: "spring",
      cta: { label: "Explore", href: "#" },
    },
    {
      name: "Patagonia",
      region: "Argentina",
      icon: "Mountain",
      duration: "10 Days",
      highlights: [
        "Glacier hikes",
        "Wildlife",
        "Mountain lodges",
        "Stargazing",
      ],
      prices: { spring: 4299, summer: 4899, fall: 4499, winter: 3799 },
      bestSeason: "fall",
      cta: { label: "Explore", href: "#" },
    },
    {
      name: "Swiss Alps",
      region: "Switzerland",
      icon: "Mountain",
      duration: "6 Days",
      highlights: ["Ski resorts", "Chalets", "Fondue dining", "Scenic trains"],
      prices: { spring: 2899, summer: 3299, fall: 2999, winter: 3899 },
      bestSeason: "winter",
      cta: { label: "Explore", href: "#" },
    },
  ],
}

export function Pricing14({
  content = {},
  classNames = {},
}: PricingBlockProps) {
  const [selectedSeason, setSelectedSeason] = useState("summer")

  const {
    badge = pricing14Defaults.badge,
    title = pricing14Defaults.title,
    description = pricing14Defaults.description,
    seasons = pricing14Defaults.seasons,
    destinations = pricing14Defaults.destinations,
  } = content

  return (
    <section className={cn("bg-background py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        {/* Season Selector */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                selectedSeason === season.id
                  ? "bg-brand text-brand-foreground shadow-brand/25 shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <DynamicIcon name={season.icon} className="h-4 w-4" />
              {season.label}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div
          className={cn(
            "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4",
            classNames.grid
          )}
        >
          {destinations.map((destination, i) => {
            const isBestSeason = destination.bestSeason === selectedSeason
            const price = destination.prices[selectedSeason]
            const lowestPrice = Math.min(...Object.values(destination.prices))
            const isLowestPrice = price === lowestPrice

            return (
              <ScrollFade key={i} delay={i * 0.1} scrollBased={false}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col rounded-3xl p-6 transition-all",
                    isBestSeason
                      ? "bg-brand text-brand-foreground shadow-brand/20 shadow-2xl"
                      : "border-border bg-card border hover:shadow-lg"
                  )}
                >
                  {/* Best Season Badge */}
                  {isBestSeason && (
                    <div className="bg-background text-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-lg">
                      Best Season
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                      isBestSeason ? "bg-brand-foreground/20" : "bg-brand/10"
                    )}
                  >
                    <DynamicIcon
                      name={destination.icon}
                      className={cn(
                        "h-6 w-6",
                        isBestSeason ? "text-brand-foreground" : "text-brand"
                      )}
                    />
                  </div>

                  {/* Header */}
                  <h3
                    className={cn(
                      "text-xl font-bold",
                      !isBestSeason && "text-foreground"
                    )}
                  >
                    {destination.name}
                  </h3>
                  <div
                    className={cn(
                      "mb-4 flex items-center gap-1 text-sm",
                      isBestSeason
                        ? "text-brand-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    <DynamicIcon name="MapPin" className="h-3.5 w-3.5" />
                    {destination.region} - {destination.duration}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {destination.highlights.slice(0, 3).map((highlight, j) => (
                      <span
                        key={j}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs",
                          isBestSeason
                            ? "bg-brand-foreground/20 text-brand-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mt-auto mb-4">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn(
                          "text-3xl font-bold",
                          !isBestSeason && "text-foreground"
                        )}
                      >
                        ${price.toLocaleString()}
                      </span>
                      <span
                        className={cn(
                          "text-xs",
                          isBestSeason
                            ? "text-brand-foreground/60"
                            : "text-muted-foreground"
                        )}
                      >
                        /person
                      </span>
                    </div>
                    {isLowestPrice && !isBestSeason && (
                      <span className="text-xs font-medium text-green-600">
                        Lowest price
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Button
                    size="sm"
                    className={cn(
                      "w-full rounded-full",
                      isBestSeason &&
                        "bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                    )}
                    variant={isBestSeason ? "secondary" : "default"}
                    asChild
                  >
                    <Link href={destination.cta.href}>
                      {destination.cta.label}
                    </Link>
                  </Button>
                </div>
              </ScrollFade>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Prices shown are starting rates and may vary based on availability.{" "}
            <Link href="#" className="text-brand hover:underline">
              View all destinations
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
