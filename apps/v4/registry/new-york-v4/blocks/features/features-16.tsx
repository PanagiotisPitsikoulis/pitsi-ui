"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Block-specific defaults for travel theme
const features16Defaults = {
  badge: "What We Offer",
  title: "Everything You Need",
  description:
    "From flights to experiences, we handle every aspect of your journey.",
  features: [
    {
      icon: "Navigation",
      title: "Flight Booking",
      description:
        "Access to 500+ airlines with competitive prices and flexible options.",
      size: "large",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Flight booking services",
      },
    },
    {
      icon: "Building2",
      title: "Hotel Reservations",
      description: "Curated stays from boutique hotels to luxury resorts.",
      size: "small",
    },
    {
      icon: "Compass",
      title: "Guided Tours",
      description: "Expert-led adventures with local insights.",
      size: "small",
    },
    {
      icon: "Camera",
      title: "Experiences",
      description:
        "Unique activities from cooking classes to wildlife safaris.",
      size: "medium",
      image: {
        src: "/elements/landscape/plane/2.webp",
        alt: "Travel experiences",
      },
    },
    {
      icon: "Shield",
      title: "Travel Insurance",
      description:
        "Comprehensive coverage for peace of mind on every adventure.",
      size: "medium",
      image: {
        src: "/elements/landscape/plane/3.webp",
        alt: "Travel insurance",
      },
    },
    {
      icon: "Car",
      title: "Car Rentals",
      description: "Reliable vehicles waiting at your destination.",
      size: "small",
    },
  ],
}

export function Features16({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features16Defaults.badge,
    title = features16Defaults.title,
    description = features16Defaults.description,
    features = features16Defaults.features,
  } = content as typeof features16Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <SlideUp delay={0} duration={0.6} distance={30}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            classNames={classNames.header}
          />
        </SlideUp>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const isLarge = feature.size === "large"
            const isMedium = feature.size === "medium"
            const hasImage = feature.image

            return (
              <SlideUp
                key={idx}
                delay={0.1 + idx * 0.05}
                duration={0.6}
                distance={30}
              >
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-3xl transition-all",
                    isLarge && "md:col-span-2 md:row-span-2",
                    isMedium && "lg:col-span-2",
                    !isLarge && !isMedium && "md:col-span-1",
                    hasImage
                      ? "min-h-[280px]"
                      : "bg-card border-border border shadow-sm",
                    classNames.feature?.root
                  )}
                >
                  {/* Background Image */}
                  {hasImage && (
                    <>
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </>
                  )}

                  {/* Content */}
                  <div
                    className={cn(
                      "relative flex h-full flex-col p-6",
                      hasImage && "justify-end text-white",
                      isLarge && "p-8"
                    )}
                  >
                    <div
                      className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl",
                        hasImage ? "bg-white/20" : "bg-brand/10"
                      )}
                    >
                      <DynamicIcon
                        name={feature.icon}
                        className={cn(
                          "h-6 w-6",
                          hasImage ? "text-white" : "text-brand"
                        )}
                      />
                    </div>

                    <h3
                      className={cn(
                        "mb-2 font-semibold",
                        isLarge ? "text-2xl" : "text-lg",
                        !hasImage && "text-foreground"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        hasImage ? "text-white/80" : "text-muted-foreground"
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features16 as FeaturesTravelBento }
