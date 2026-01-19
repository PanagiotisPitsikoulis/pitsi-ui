"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"
import { useBlockContext } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults
const features5Defaults = {
  badge: "Our Commitment",
  title: "Quality",
  description:
    "Every plant comes with our quality promise, from careful selection to secure packaging.",
  features: [
    {
      icon: "Zap",
      title: "Fast Delivery",
      description:
        "Plants delivered within 2-3 business days to your doorstep.",
    },
    {
      icon: "Star",
      title: "Quality Promise",
      description: "Only the healthiest, hand-inspected plants make it to you.",
    },
    {
      icon: "Shield",
      title: "Plant Insurance",
      description: "Free replacement guaranteed if anything goes wrong.",
    },
    {
      icon: "Clock",
      title: "Ongoing Support",
      description: "Lifetime care advice included with every plant purchase.",
    },
    {
      icon: "Zap",
      title: "Easy Tracking",
      description: "Real-time updates on your order status every step.",
    },
    {
      icon: "Shield",
      title: "Secure Checkout",
      description: "Safe and fully encrypted payment processing always.",
    },
  ],
  image: {
    src: "/elements/subject/plants/item-5.webp",
    alt: "Featured plant",
  },
}

export function Features5({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const { containerBg } = useBlockContext()
  const circleBg = containerBg === "page" ? "bg-muted" : "bg-background"

  // Merge content with defaults
  const {
    badge = features5Defaults.badge,
    title = features5Defaults.title,
    description = features5Defaults.description,
    features = features5Defaults.features,
    image = features5Defaults.image,
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
            <ScrollScale startScale={0.9} endScale={1}>
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
            </ScrollScale>
            <ScrollScale startScale={0.85} endScale={1} delay={0.1}>
              <h2
                className={cn(
                  "font-display text-foreground text-3xl font-bold text-balance md:text-5xl lg:text-6xl",
                  classNames.header?.title
                )}
              >
                {title}
              </h2>
            </ScrollScale>
            {description && (
              <ScrollScale startScale={0.9} endScale={1} delay={0.15}>
                <p
                  className={cn(
                    "text-muted-foreground mt-4 max-w-lg text-lg",
                    classNames.header?.description
                  )}
                >
                  {description}
                </p>
              </ScrollScale>
            )}
            <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <ScrollScale
                  key={idx}
                  startScale={0.85}
                  endScale={1}
                  delay={0.05 * idx}
                >
                  <div
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
                </ScrollScale>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-center",
              classNames.image?.root
            )}
          >
            <ScrollScale startScale={0.8} endScale={1}>
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
            </ScrollScale>
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features5 as FeaturesServicePlants5 }
