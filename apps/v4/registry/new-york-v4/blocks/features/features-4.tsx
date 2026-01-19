"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import Stack from "@/registry/new-york-v4/animations/stack/stack"

// Block-specific defaults
const features4Defaults = {
  badge: "Expert Care",
  title: "Guidance",
  description:
    "Our horticulturists help your plants thrive with personalized tips and troubleshooting.",
  features: [
    {
      icon: "Sparkles",
      title: "Care Tips",
      description:
        "Personalized advice tailored to your specific plant collection.",
    },
    {
      icon: "MessageCircle",
      title: "Expert Support",
      description:
        "Direct access to certified horticulturists when you need help.",
    },
    {
      icon: "BookOpen",
      title: "Plant Guides",
      description: "Comprehensive documentation for every species we carry.",
    },
    {
      icon: "HeartHandshake",
      title: "Community",
      description: "Connect with fellow plant lovers and share your journey.",
    },
    {
      icon: "BookOpen",
      title: "Video Tutorials",
      description:
        "Step-by-step visual guides for proper plant care techniques.",
    },
    {
      icon: "MessageCircle",
      title: "Live Q&A",
      description: "Weekly interactive sessions with our plant care experts.",
    },
  ],
  image: {
    src: "/elements/subject/plants/item-3.webp",
    alt: "Featured plant",
  },
  // Additional images for the stack
  stackImages: [
    "/elements/landscape/plants/1.webp",
    "/elements/landscape/plants/2.webp",
    "/elements/landscape/plants/3.webp",
    "/elements/landscape/plants/4.webp",
  ],
}

export function Features4({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  // Merge content with defaults
  const {
    badge = features4Defaults.badge,
    title = features4Defaults.title,
    description = features4Defaults.description,
    features = features4Defaults.features,
  } = content

  // Create stack cards from images (using local defaults)
  const stackCards = features4Defaults.stackImages.map(
    (src: string, idx: number) => (
      <Image
        key={idx}
        draggable={false}
        src={src}
        alt={`Plant ${idx + 1}`}
        fill
        className="pointer-events-none object-cover select-none"
      />
    )
  )

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
              "flex items-center justify-center",
              classNames.image?.root
            )}
          >
            <div className="relative aspect-square w-full max-w-md">
              <Stack
                cards={stackCards}
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                mobileClickOnly={true}
                animationConfig={{ stiffness: 200, damping: 18 }}
              />
            </div>
          </div>
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
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features4 as FeaturesServicePlants4 }
