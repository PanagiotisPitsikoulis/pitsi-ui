"use client"

import Image from "next/image"

import { ctaDefaults, type CtaBlockProps } from "@/lib/blocks/cta.types"
import { cn } from "@/lib/utils"
import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ImageOverlay } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  title: "Start Your Plant Journey",
  description: "Get 15% off your first order when you join our community.",
  image: {
    src: "/elements/landscape/plants/1.webp",
    alt: "Plants background",
  },
  primaryCta: {
    label: "Subscribe",
    href: "#",
  },
  // Sage palette aurora colors
  auroraColors: ["#84a98c", "#52796f", "#cad2c5"],
}

export function Cta1({ content = {}, classNames = {} }: CtaBlockProps) {
  // Merge content with block-specific defaults, falling back to generic defaults
  const {
    title = blockDefaults.title ?? ctaDefaults.title,
    description = blockDefaults.description ?? ctaDefaults.description,
    image = blockDefaults.image ?? ctaDefaults.image,
    primaryCta = blockDefaults.primaryCta ?? ctaDefaults.primaryCta,
    auroraColors = blockDefaults.auroraColors,
  } = content as typeof blockDefaults

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockThemeWrapper
          palette="sage"
          tint="deep"
          forceDark
          className={cn(
            "relative overflow-hidden rounded-3xl",
            classNames.content
          )}
        >
          {/* Aurora background animation with sage palette */}
          <div className="pointer-events-none absolute inset-0">
            <Aurora
              colorStops={auroraColors}
              amplitude={1.0}
              blend={0.5}
              speed={0.6}
            />
          </div>

          {image && (
            <>
              <Image
                draggable={false}
                src={image.src}
                alt={image.alt}
                fill
                className={cn(
                  "pointer-events-none object-cover opacity-40 select-none",
                  classNames.image?.img
                )}
              />
              <ImageOverlay opacity={30} />
            </>
          )}
          <div className="relative z-20 flex flex-col items-center px-8 py-16 md:py-24">
            <h2
              className={cn(
                "font-display text-foreground mb-6 text-center text-3xl font-bold md:text-5xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "text-foreground/70 mb-10 max-w-xl text-center text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
            <div
              className={cn(
                "mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row",
                classNames.cta?.root
              )}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "border-foreground/20 bg-foreground/10 text-foreground h-12 flex-1 rounded-full border px-6",
                  "placeholder:text-foreground/50 focus:ring-foreground/30 focus:ring-1 focus:outline-none"
                )}
              />
              {primaryCta && (
                <Button
                  className={cn(
                    "bg-foreground text-background hover:bg-foreground/90 h-12 rounded-full px-8",
                    classNames.cta?.primary
                  )}
                >
                  {primaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </BlockThemeWrapper>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Cta1 as CTAServicePlants }
