"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { useBlockContext } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults
const features3Defaults = {
  badge: "Our Promise",
  title: "Sustainability",
  description:
    "From sustainably sourced plants to eco-friendly packaging, every decision considers our planet.",
  features: [
    {
      icon: "Leaf",
      title: "Local Sourcing",
      description:
        "Sustainably sourced from local nurseries to support communities.",
    },
    {
      icon: "Package",
      title: "Eco Packaging",
      description:
        "Biodegradable materials that break down naturally over time.",
    },
    {
      icon: "Truck",
      title: "Carbon Neutral",
      description:
        "Carbon-neutral shipping options for eco-conscious delivery.",
    },
    {
      icon: "Recycle",
      title: "Plant Recycling",
      description: "Free recycling program for plants that don't survive.",
    },
    {
      icon: "Leaf",
      title: "Zero Waste",
      description:
        "Minimal waste practices throughout our entire supply chain.",
    },
    {
      icon: "Recycle",
      title: "Green Energy",
      description:
        "All our facilities run entirely on renewable energy sources.",
    },
  ],
  image: {
    src: "/placeholders/blocks/service-plants/assets/item-1.webp",
    alt: "Featured plant",
  },
}

export function Features3({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const { containerBg } = useBlockContext()
  const circleBg = containerBg === "page" ? "bg-muted" : "bg-background"

  // Merge content with defaults
  const {
    badge = features3Defaults.badge,
    title = features3Defaults.title,
    description = features3Defaults.description,
    features = features3Defaults.features,
    image = features3Defaults.image,
  } = content

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div
          className={cn(
            "grid items-center gap-8 md:gap-16 lg:grid-cols-2",
            classNames.grid
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center text-center lg:items-start lg:text-left",
              classNames.header?.root
            )}
          >
            {badge && (
              <p
                className={cn(
                  "text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase",
                  classNames.header?.badge
                )}
              >
                {badge}
              </p>
            )}
            <h2
              className={cn(
                "font-display text-foreground text-3xl font-bold text-balance md:text-5xl lg:text-6xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "text-muted-foreground mt-4 max-w-lg text-lg",
                  classNames.header?.description
                )}
              >
                {description}
              </p>
            )}
            <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "border-border bg-card flex items-start gap-3 rounded-3xl p-4 shadow-sm dark:border",
                    classNames.feature?.root
                  )}
                >
                  <div
                    className={cn(
                      "bg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      classNames.feature?.iconWrapper
                    )}
                  >
                    <DynamicIcon
                      name={feature.icon}
                      className={cn(
                        "text-brand h-5 w-5",
                        classNames.feature?.icon
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={cn(
                        "text-foreground text-base font-semibold",
                        classNames.feature?.title
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "text-muted-foreground text-sm",
                        classNames.feature?.description
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-center",
              classNames.image?.root
            )}
          >
            <div className="relative aspect-square w-full">
              {/* Background circle */}
              <div
                className={cn(
                  `border-border absolute inset-x-[15%] top-[30%] bottom-[5%] rounded-full border ${circleBg}`,
                  classNames.image?.wrapper
                )}
              />
              {/* Image */}
              {image && (
                <Image
                  draggable={false}
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    "pointer-events-none z-10 -translate-y-[10%] scale-110 object-contain select-none",
                    classNames.image?.img
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features3 as FeaturesServicePlants3 }
