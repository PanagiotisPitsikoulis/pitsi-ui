"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Carousel_001 } from "@/registry/new-york-v4/animations/perspective-carousel/perspective-carousel"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 16 - 3D Perspective Carousel (Travel destinations theme)
const hero16Defaults = {
  badge: "Adventure Awaits",
  title: "Discover Your\nNext Journey",
  description:
    "Hand-picked destinations with expert local guides. Every trip is unforgettable.",
  primaryCta: { label: "Explore Trips", href: "#" },
  secondaryCta: {
    label: "Learn More",
    href: "#",
    variant: "outline" as const,
  },
  destinations: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Maldives beach paradise",
      name: "Maldives",
    },
    {
      src: "/elements/landscape/plane/2.webp",
      alt: "Flying above clouds",
      name: "Sky High",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Sunset at the beach",
      name: "Santorini",
    },
    {
      src: "/elements/landscape/sea/4.webp",
      alt: "Ocean adventure",
      name: "Bali",
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Tropical paradise",
      name: "Seychelles",
    },
    {
      src: "/elements/landscape/plane/5.webp",
      alt: "Scenic flight",
      name: "Alps",
    },
  ],
}

export function Hero16({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero16Defaults.badge,
    title = hero16Defaults.title,
    description = hero16Defaults.description,
    primaryCta = hero16Defaults.primaryCta,
    secondaryCta = hero16Defaults.secondaryCta,
    destinations = hero16Defaults.destinations,
  } = content as typeof hero16Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-8 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center py-8 lg:py-12">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              classNames={classNames.header}
            />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className={classNames.cta?.primary}
                >
                  <HeroButton>{primaryCta.label}</HeroButton>
                </Link>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={cn("text-foreground", classNames.cta?.secondary)}
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right - 3D Perspective Carousel */}
          <div className="flex items-center justify-center py-8 lg:py-0">
            <div className="w-full max-w-2xl">
              <Carousel_001
                images={destinations.map((dest) => ({
                  src: dest.src,
                  alt: dest.alt,
                }))}
                showPagination
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Hero16 as HeroTravelCarousel }
