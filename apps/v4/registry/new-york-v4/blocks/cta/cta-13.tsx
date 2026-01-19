"use client"

import Image from "next/image"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { cn } from "@/lib/utils"
import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ImageOverlay } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults for travel theme
const cta13Defaults = {
  title: "Start Your Travel Journey",
  description:
    "Subscribe to our newsletter and get exclusive deals on flights, hotels, and vacation packages.",
  image: {
    src: "/elements/landscape/sea/3.webp",
    alt: "Beautiful travel destination",
  },
  primaryCta: {
    label: "Subscribe",
    href: "#",
  },
  // Azure palette aurora colors
  auroraColors: ["#0ea5e9", "#0284c7", "#7dd3fc"],
}

export function Cta13({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta13Defaults.title,
    description = cta13Defaults.description,
    image = cta13Defaults.image,
    primaryCta = cta13Defaults.primaryCta,
  } = content as typeof cta13Defaults

  const auroraColors = cta13Defaults.auroraColors

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockThemeWrapper
          palette="azure"
          tint="deep"
          forceDark
          className={cn(
            "relative overflow-hidden rounded-3xl",
            classNames.content
          )}
        >
          {/* Aurora background animation with azure palette */}
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
