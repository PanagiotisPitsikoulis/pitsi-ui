"use client"

import Image from "next/image"

import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { ImageOverlayGradient } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults
const features2Defaults = {
  badge: "Beyond the Pot",
  title: "Resources to Help You Grow",
  features: [
    {
      icon: "Sparkles",
      title: "Curated Collections",
      description:
        "Thoughtfully assembled plant bundles for every room and skill level.",
      image: "/placeholders/blocks/service-plants/3.webp",
    },
    {
      icon: "BookOpen",
      title: "Plant Care Library",
      description:
        "Access our comprehensive guides, videos, and expert tips for each species.",
      image: "/placeholders/blocks/service-plants/4.webp",
    },
  ],
}

export function Features2({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  // Merge content with defaults
  const {
    badge = features2Defaults.badge,
    title = features2Defaults.title,
    features = features2Defaults.features,
  } = content

  return (
    <section className={cn("overflow-x-clip", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div className={cn("mb-20 text-center", classNames.header?.root)}>
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
              "font-display text-foreground text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>

        <div className={cn("grid gap-6 md:grid-cols-2", classNames.grid)}>
          {features.map((feature, idx) => (
            <div key={idx} className={cn("relative", classNames.feature?.root)}>
              <BlockThemeWrapper
                slug="service-plants"
                tint="deep"
                forceDark
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden rounded-3xl",
                  classNames.image?.wrapper
                )}
              >
                {feature.image && (
                  <Image
                    draggable={false}
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={cn(
                      "pointer-events-none object-cover transition-transform duration-500 select-none group-hover:scale-105",
                      classNames.image?.img
                    )}
                  />
                )}
                <ImageOverlayGradient from="bottom" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 z-20 p-8">
                  <h3
                    className={cn(
                      "text-foreground mb-1 text-2xl font-semibold",
                      classNames.feature?.title
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-foreground/80",
                      classNames.feature?.description
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </BlockThemeWrapper>
              {idx === 1 && (
                <Image
                  draggable={false}
                  src="/placeholders/blocks/service-plants/assets/decoration-small-1.svg"
                  alt=""
                  width={300}
                  height={300}
                  className="absolute -right-24 -bottom-30 z-30 -rotate-90"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features2 as FeaturesServicePlants2 }
