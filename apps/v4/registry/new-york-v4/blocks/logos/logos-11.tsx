"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface LogosBlockProps {
  content?: {
    title?: string
    description?: string
    partners?: Array<{
      name: string
      description: string
      specialty: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos11Defaults = {
  title: "Trusted Partners",
  description:
    "We work with the best in the travel industry to curate your perfect journey.",
  partners: [
    {
      name: "SkyWings Airlines",
      description:
        "Premium airline partner offering exclusive routes and priority boarding for our travelers.",
      specialty: "International Flights",
      href: "#",
    },
    {
      name: "Grand Hotels Group",
      description:
        "Luxury accommodations in over 50 countries with exclusive member rates.",
      specialty: "Luxury Stays",
      href: "#",
    },
    {
      name: "Wanderlust Tours",
      description:
        "Expert-guided tours and authentic local experiences in every destination.",
      specialty: "Guided Tours",
      href: "#",
    },
    {
      name: "Ocean Cruise Lines",
      description:
        "World-class cruise experiences from intimate yachts to grand ocean liners.",
      specialty: "Cruises",
      href: "#",
    },
    {
      name: "Alpine Resorts",
      description:
        "Mountain retreats and ski resorts in the world's most stunning alpine locations.",
      specialty: "Mountain Escapes",
      href: "#",
    },
    {
      name: "Safari Expeditions",
      description:
        "Sustainable wildlife safaris and conservation-focused adventures.",
      specialty: "Wildlife Tours",
      href: "#",
    },
  ],
}

export function Logos11({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos11Defaults.title,
    description = logos11Defaults.description,
    partners = logos11Defaults.partners,
  } = content

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const itemsPerView = 3

  const canGoNext = currentIndex < partners.length - itemsPerView
  const canGoPrev = currentIndex > 0

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <BlockHeader
            title={title}
            description={description}
            spacing="none"
            align="left"
            classNames={classNames.header}
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={!canGoPrev}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous partners</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={!canGoNext}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next partners</span>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {partners.map((partner, i) => (
              <div
                key={i}
                className="w-full shrink-0 md:w-[calc(33.333%-1rem)]"
              >
                <Link
                  href={partner.href}
                  className="border-border bg-card group block h-full rounded-xl border p-6 transition-all hover:shadow-lg"
                >
                  <div className="bg-muted mb-4 flex h-20 items-center justify-center rounded-lg">
                    <span className="text-muted-foreground group-hover:text-foreground text-lg font-semibold tracking-wider transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <span className="text-primary mb-2 inline-block text-xs font-medium tracking-wider uppercase">
                    {partner.specialty}
                  </span>
                  <h3 className="text-foreground mb-2 font-semibold">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                  <span className="text-primary inline-flex items-center text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Simple dot indicators */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              )}
            >
              <span className="sr-only">Go to partner {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
