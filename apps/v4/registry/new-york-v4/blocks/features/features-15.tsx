"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { ZoomParallax } from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"

// Block-specific defaults for travel theme
const features15Defaults = {
  badge: "Our Services",
  title: "Crafted Travel Experiences",
  features: [
    {
      icon: "Globe",
      title: "Custom Itineraries",
      description:
        "Every journey is unique. Our travel designers create personalized itineraries tailored to your interests, pace, and travel style. From hidden gems to iconic landmarks.",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Custom travel itinerary planning",
      },
    },
    {
      icon: "Building2",
      title: "Premium Accommodations",
      description:
        "Stay in hand-selected hotels, boutique lodges, and unique properties. Each accommodation is vetted for comfort, location, and authentic local character.",
      image: {
        src: "/elements/landscape/plane/2.webp",
        alt: "Luxury travel accommodations",
      },
    },
    {
      icon: "Users",
      title: "Small Group Tours",
      description:
        "Travel with like-minded adventurers in intimate groups of 12 or fewer. Enjoy exclusive access, meaningful connections, and authentic cultural immersion.",
      image: {
        src: "/elements/landscape/plane/3.webp",
        alt: "Small group travel tours",
      },
    },
  ],
}

export function Features15({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features15Defaults.badge,
    title = features15Defaults.title,
    features = features15Defaults.features,
  } = content as typeof features15Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className="mb-16 text-center">
          {badge && (
            <p className="text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase">
              {badge}
            </p>
          )}
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            {title}
          </h2>
        </div>

        {/* Alternating sections */}
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "grid items-center gap-8 md:gap-16 lg:grid-cols-2",
                idx % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              {/* Image */}
              <ZoomParallax
                scaleRange={[0.9, 1]}
                offset={["start end", "end start"]}
                animateOpacity={false}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  {feature.image && (
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </ZoomParallax>

              {/* Content */}
              <div
                className={cn(
                  "flex flex-col",
                  idx % 2 === 0 ? "lg:pl-8" : "lg:pr-8"
                )}
              >
                <div
                  className={cn(
                    "bg-brand/10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name={feature.icon}
                    className={cn(
                      "text-brand h-7 w-7",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "text-foreground mb-4 text-2xl font-bold md:text-3xl",
                    classNames.feature?.title
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "text-muted-foreground text-lg leading-relaxed",
                    classNames.feature?.description
                  )}
                >
                  {feature.description}
                </p>

                {/* Decorative number */}
                <div className="text-muted-foreground/10 mt-8 text-8xl font-bold">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features15 as FeaturesTravelAlternating }
