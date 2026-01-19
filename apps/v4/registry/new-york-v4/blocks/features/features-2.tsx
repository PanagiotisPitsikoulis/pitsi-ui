"use client"

import Image from "next/image"

import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
  ParallaxCardImage,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

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
      image: "/elements/landscape/plants/3.webp",
    },
    {
      icon: "BookOpen",
      title: "Plant Care Library",
      description:
        "Access our comprehensive guides, videos, and expert tips for each species.",
      image: "/elements/landscape/plants/4.webp",
    },
    {
      icon: "Leaf",
      title: "Expert Consultations",
      description:
        "One-on-one sessions with certified horticulturists for personalized advice.",
      image: "/elements/landscape/plants/5.webp",
    },
  ],
}

// Card background colors matching botanical theme
const cardColors = [
  "hsl(var(--brand))",
  "hsl(var(--brand) / 0.8)",
  "hsl(var(--brand) / 0.6)",
]

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
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        <CardsParallaxContainer
          cardCount={features.length}
          className="h-[200vh]"
        >
          {features.map((feature, idx) => (
            <ParallaxCard
              key={idx}
              index={idx}
              backgroundColor={cardColors[idx % cardColors.length]}
              className="text-white"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3
                      className={cn(
                        "text-2xl font-semibold md:text-3xl",
                        classNames.feature?.title
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 max-w-md text-white/80",
                        classNames.feature?.description
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <span className="text-4xl font-light text-white/30">
                    0{idx + 1}
                  </span>
                </div>
                <div className="relative mt-auto flex-1 overflow-hidden rounded-2xl">
                  {feature.image && (
                    <ParallaxCardImage
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full"
                    />
                  )}
                </div>
              </div>
            </ParallaxCard>
          ))}
        </CardsParallaxContainer>

        {/* Decoration */}
        <div className="relative mt-8">
          <Image
            draggable={false}
            src="/elements/decoration-small/plants/decoration-small-1.svg"
            alt=""
            width={300}
            height={300}
            className="absolute -right-24 -bottom-30 z-30 -rotate-90"
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features2 as FeaturesServicePlants2 }
