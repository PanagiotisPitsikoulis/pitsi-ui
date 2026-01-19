"use client"

import { Building2, MapPin, Plane, Ship } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface LogosBlockProps {
  content?: {
    title?: string
    description?: string
    categories?: Array<{
      name: string
      icon: "plane" | "building" | "ship" | "map"
      logos: Array<{ name: string }>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos12Defaults = {
  title: "Our Network of Partners",
  description:
    "Partnering with the best across every aspect of travel to ensure your journey is exceptional.",
  categories: [
    {
      name: "Airlines",
      icon: "plane" as const,
      logos: [
        { name: "SkyWings Airlines" },
        { name: "Pacific Airways" },
        { name: "Global Air" },
        { name: "Azure Flights" },
      ],
    },
    {
      name: "Hotels & Resorts",
      icon: "building" as const,
      logos: [
        { name: "Grand Hotels" },
        { name: "Alpine Resorts" },
        { name: "Coastal Retreats" },
        { name: "Urban Stays" },
      ],
    },
    {
      name: "Cruise Lines",
      icon: "ship" as const,
      logos: [
        { name: "Ocean Cruise Lines" },
        { name: "River Voyages" },
        { name: "Yacht Charters" },
        { name: "Island Hopper" },
      ],
    },
    {
      name: "Tour Operators",
      icon: "map" as const,
      logos: [
        { name: "Wanderlust Tours" },
        { name: "Safari Expeditions" },
        { name: "Cultural Journeys" },
        { name: "Adventure Co" },
      ],
    },
  ],
}

const iconMap = {
  plane: Plane,
  building: Building2,
  ship: Ship,
  map: MapPin,
}

export function Logos12({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos12Defaults.title,
    description = logos12Defaults.description,
    categories = logos12Defaults.categories,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, i) => {
            const IconComponent = iconMap[category.icon]
            return (
              <div
                key={i}
                className="bg-background border-border rounded-xl border p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <IconComponent className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-foreground font-semibold">
                    {category.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.logos.map((logo, j) => (
                    <div
                      key={j}
                      className="bg-muted hover:bg-muted/80 flex items-center justify-center rounded-lg px-4 py-3 transition-colors"
                    >
                      <span className="text-muted-foreground hover:text-foreground text-center text-sm font-medium tracking-wide transition-colors">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="border-border mt-12 grid grid-cols-2 gap-6 border-t pt-12 md:grid-cols-4">
          {[
            { value: "200+", label: "Partner Airlines" },
            { value: "5,000+", label: "Hotel Partners" },
            { value: "150+", label: "Countries Covered" },
            { value: "1M+", label: "Travelers Served" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-primary text-2xl font-bold md:text-3xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
