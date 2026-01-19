"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    trips?: Array<{
      src: string
      alt: string
      title: string
      location: string
      duration: string
      highlights: string[]
      price: string
      color: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
  }
}

const gallery10Defaults = {
  trips: [
    {
      src: "/elements/landscape/sea/2.webp",
      alt: "Greek Islands",
      title: "Greek Island Odyssey",
      location: "Greece",
      duration: "10 Days",
      highlights: [
        "Santorini sunsets",
        "Ancient Athens",
        "Mykonos nightlife",
        "Local cuisine",
      ],
      price: "$2,899",
      color: "hsl(210 80% 30%)",
    },
    {
      src: "/elements/landscape/animals/4.webp",
      alt: "African Safari",
      title: "Safari Adventure",
      location: "Tanzania & Kenya",
      duration: "14 Days",
      highlights: [
        "Big Five wildlife",
        "Serengeti migration",
        "Maasai culture",
        "Luxury lodges",
      ],
      price: "$4,599",
      color: "hsl(30 60% 25%)",
    },
    {
      src: "/elements/landscape/sea/6.webp",
      alt: "Southeast Asia",
      title: "Southeast Asia Explorer",
      location: "Thailand, Vietnam, Cambodia",
      duration: "21 Days",
      highlights: [
        "Temple of Angkor",
        "Thai beaches",
        "Ha Long Bay",
        "Street food tours",
      ],
      price: "$3,199",
      color: "hsl(160 50% 25%)",
    },
    {
      src: "/elements/landscape/plane/6.webp",
      alt: "Nordic Wonders",
      title: "Nordic Lights Journey",
      location: "Norway, Iceland, Finland",
      duration: "12 Days",
      highlights: [
        "Northern Lights",
        "Fjord cruises",
        "Ice hotels",
        "Midnight sun",
      ],
      price: "$5,299",
      color: "hsl(200 40% 20%)",
    },
  ],
}

export function Gallery10({
  content = {},
  classNames = {},
}: GalleryBlockProps) {
  const { trips = gallery10Defaults.trips } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <CardsParallaxContainer
        cardCount={trips.length}
        className={cn(classNames.container)}
        style={{ height: `${trips.length * 100}vh` }}
      >
        {trips.map((trip, i) => (
          <ParallaxCard
            key={i}
            index={i}
            backgroundColor={trip.color}
            className="overflow-hidden"
          >
            <div className="flex h-full flex-col md:flex-row md:gap-8">
              {/* Image Section */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden rounded-2xl md:h-full md:w-1/2">
                <Image
                  src={trip.src}
                  alt={trip.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-sm">
                  <span className="text-sm font-medium text-white">
                    {trip.duration}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col justify-center py-4 md:py-0">
                <p className="mb-2 flex items-center gap-1 text-sm font-medium text-white/70">
                  <DynamicIcon name="MapPin" className="h-4 w-4" />
                  {trip.location}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  {trip.title}
                </h3>

                {/* Highlights */}
                <ul className="mb-6 grid grid-cols-2 gap-2">
                  {trip.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <DynamicIcon
                        name="Check"
                        className="h-4 w-4 text-white"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white/60">Starting from</span>
                    <p className="text-3xl font-bold text-white">
                      {trip.price}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-white/90"
                  >
                    Book Now
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ParallaxCard>
        ))}
      </CardsParallaxContainer>
    </section>
  )
}
