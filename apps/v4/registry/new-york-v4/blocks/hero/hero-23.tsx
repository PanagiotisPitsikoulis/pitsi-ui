"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import DomeGallery from "@/registry/new-york-v4/animations/dome-gallery/dome-gallery"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 23 - Premium 3D Gallery with DomeGallery (Boat theme)
// Luxury yacht gallery with immersive 3D dome experience
const hero23Defaults = {
  badge: "Exclusive Voyages",
  title: "Escape To\nThe Horizon",
  description:
    "Transform any occasion into an unforgettable maritime experience.",
  primaryCta: { label: "Book Now", href: "#" },
  secondaryCta: {
    label: "View Gallery",
    href: "#",
    variant: "outline" as const,
  },
  galleryImages: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Luxury yacht sunset",
    },
    {
      src: "/elements/landscape/sea/2.webp",
      alt: "Crystal clear waters",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Yacht deck view",
    },
    {
      src: "/elements/landscape/sea/4.webp",
      alt: "Mediterranean coast",
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Open ocean voyage",
    },
    {
      src: "/elements/landscape/sea/6.webp",
      alt: "Luxury cabin interior",
    },
    {
      src: "/elements/landscape/sea/7.webp",
      alt: "Harbor view",
    },
  ],
  domeConfig: {
    fit: 0.6,
    minRadius: 500,
    maxVerticalRotationDeg: 8,
    dragSensitivity: 15,
    overlayBlurColor: "var(--background)",
    grayscale: false,
    imageBorderRadius: "16px",
    openedImageBorderRadius: "24px",
    openedImageWidth: "500px",
    openedImageHeight: "400px",
  },
}

export function Hero23({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero23Defaults.badge,
    title = hero23Defaults.title,
    description = hero23Defaults.description,
    primaryCta = hero23Defaults.primaryCta,
    secondaryCta = hero23Defaults.secondaryCta,
    galleryImages = hero23Defaults.galleryImages,
    domeConfig = hero23Defaults.domeConfig,
  } = content as typeof hero23Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* DomeGallery as background */}
      <div className="absolute inset-0">
        <DomeGallery
          images={galleryImages}
          fit={domeConfig.fit}
          minRadius={domeConfig.minRadius}
          maxVerticalRotationDeg={domeConfig.maxVerticalRotationDeg}
          dragSensitivity={domeConfig.dragSensitivity}
          overlayBlurColor={domeConfig.overlayBlurColor}
          grayscale={domeConfig.grayscale}
          imageBorderRadius={domeConfig.imageBorderRadius}
          openedImageBorderRadius={domeConfig.openedImageBorderRadius}
          openedImageWidth={domeConfig.openedImageWidth}
          openedImageHeight={domeConfig.openedImageHeight}
        />
      </div>

      {/* Content overlay - positioned at bottom */}
      <div className="relative z-10 mt-auto">
        <div className="container px-4 pb-12">
          <div className="mx-auto max-w-2xl text-center">
            {/* Semi-transparent card for readability */}
            <div className="bg-background/95 border-border/30 rounded-3xl border p-8 shadow-2xl md:p-10">
              <HeroText
                badge={badge}
                title={title}
                description={description}
                size="large"
                align="center"
                classNames={classNames.header}
              />

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className={classNames.cta?.primary}
                  >
                    <HeroButton>{primaryCta.label}</HeroButton>
                  </Link>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={cn("text-foreground", classNames.cta?.secondary)}
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>

              {/* Interaction hint */}
              <p className="text-muted-foreground mt-6 text-sm">
                Drag to explore the gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero23 as HeroBoatGallery }
