"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollExpand } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    adventures?: Array<{
      name: string
      tagline: string
      description: string
      price: number
      image: string
      icon: string
      stats: { label: string; value: string }[]
      topDestinations: string[]
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { badge?: string; title?: string; description?: string }
  }
}

const products12Defaults = {
  badge: "Adventure Awaits",
  title: "Choose Your Experience",
  description:
    "From thrilling adventures to serene retreats, find the perfect travel experience for you",
  adventures: [
    {
      name: "Beach & Island",
      tagline: "Sun, Sand & Serenity",
      description:
        "Escape to pristine beaches and tropical islands. Enjoy crystal-clear waters, stunning sunsets, and ultimate relaxation at world-class beach resorts.",
      price: 999,
      image: "/elements/landscape/sea/2.webp",
      icon: "Umbrella",
      stats: [
        { label: "Destinations", value: "50+" },
        { label: "Avg. Stay", value: "7 Days" },
        { label: "Rating", value: "4.9" },
      ],
      topDestinations: ["Maldives", "Bali", "Seychelles", "Bahamas"],
      href: "#",
    },
    {
      name: "Mountain & Trek",
      tagline: "Reach New Heights",
      description:
        "Challenge yourself with breathtaking mountain adventures. From gentle hikes to challenging treks, experience nature at its most majestic.",
      price: 1299,
      image: "/elements/landscape/plane/2.webp",
      icon: "Mountain",
      stats: [
        { label: "Trails", value: "100+" },
        { label: "Difficulty", value: "All Levels" },
        { label: "Rating", value: "4.8" },
      ],
      topDestinations: ["Nepal", "Switzerland", "Patagonia", "New Zealand"],
      href: "#",
    },
    {
      name: "Safari & Wildlife",
      tagline: "Wild Encounters",
      description:
        "Get up close with incredible wildlife in their natural habitats. Experience the thrill of safari drives and witness nature's most spectacular moments.",
      price: 2499,
      image: "/elements/landscape/animals/5.webp",
      icon: "Compass",
      stats: [
        { label: "Parks", value: "30+" },
        { label: "Animals", value: "500+ Species" },
        { label: "Rating", value: "5.0" },
      ],
      topDestinations: ["Kenya", "Tanzania", "South Africa", "Botswana"],
      href: "#",
    },
    {
      name: "Cultural & Heritage",
      tagline: "Stories of the Past",
      description:
        "Immerse yourself in rich cultures and ancient civilizations. Explore UNESCO sites, local traditions, and the stories that shaped our world.",
      price: 1499,
      image: "/elements/landscape/plane/6.webp",
      icon: "Landmark",
      stats: [
        { label: "UNESCO Sites", value: "200+" },
        { label: "Countries", value: "45+" },
        { label: "Rating", value: "4.9" },
      ],
      topDestinations: ["Egypt", "Peru", "Japan", "Greece"],
      href: "#",
    },
  ],
}

export function Products12({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    badge = products12Defaults.badge,
    title = products12Defaults.title,
    description = products12Defaults.description,
    adventures = products12Defaults.adventures,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Adventure Cards */}
        <div className="space-y-6">
          {adventures.map((adventure, i) => (
            <ScrollExpand
              key={i}
              marginX="1.5rem"
              borderRadius="1.5rem"
              scrollBased={true}
            >
              <div className="border-border bg-card group grid overflow-hidden rounded-3xl border md:grid-cols-[400px_1fr]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
                  <Image
                    src={adventure.image}
                    alt={adventure.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent md:bg-gradient-to-r" />

                  {/* Icon & Title Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="rounded-xl bg-white/20 p-2 backdrop-blur-sm">
                        <DynamicIcon
                          name={adventure.icon}
                          className="h-6 w-6"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold md:text-2xl">
                          {adventure.name}
                        </h3>
                        <p className="text-sm text-white/80">
                          {adventure.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 md:p-8">
                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {adventure.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-muted/50 mb-6 grid grid-cols-3 gap-4 rounded-xl p-4">
                    {adventure.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <p className="text-primary text-lg font-bold md:text-xl">
                          {stat.value}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Top Destinations */}
                  <div className="mb-6">
                    <p className="text-foreground mb-2 text-sm font-medium">
                      Top Destinations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {adventure.topDestinations.map((dest, j) => (
                        <span
                          key={j}
                          className="border-border bg-background flex items-center gap-1 rounded-full border px-3 py-1 text-sm"
                        >
                          <DynamicIcon
                            name="MapPin"
                            className="text-primary h-3 w-3"
                          />
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-muted-foreground text-sm">
                        Starting from
                      </span>
                      <p className="text-primary text-2xl font-bold">
                        ${adventure.price.toLocaleString()}
                      </p>
                    </div>
                    <Button size="lg" asChild>
                      <Link href={adventure.href}>
                        Explore {adventure.name}
                        <DynamicIcon
                          name="ArrowRight"
                          className="ml-2 h-4 w-4"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollExpand>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which adventure is right for you?
          </p>
          <Button variant="outline" size="lg">
            <DynamicIcon name="MessageCircle" className="mr-2 h-4 w-4" />
            Talk to a Travel Expert
          </Button>
        </div>
      </div>
    </section>
  )
}
