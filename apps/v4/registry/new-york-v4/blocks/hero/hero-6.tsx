"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 6 - Image Collage (1 Large + 2 Accent Images)
const hero6Defaults = {
  badge: "Proven Results",
  title: "Train Smarter\nGet Stronger",
  description:
    "Evidence-based coaching. Measurable progress. Your transformation starts here.",
  primaryCta: { label: "Start Now", href: "#" },
  secondaryCta: {
    label: "See Results",
    href: "#",
    variant: "outline" as const,
  },
  mainImage: {
    src: "/elements/subject/gym/4.webp",
    alt: "Main fitness training",
  },
  accentImage1: {
    src: "/elements/portrait/gym/3.webp",
    alt: "Training session",
  },
  accentImage2: {
    src: "/elements/subject/gym/5.webp",
    alt: "Gym equipment",
  },
}

export function Hero6({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero6Defaults.badge,
    title = hero6Defaults.title,
    description = hero6Defaults.description,
    primaryCta = hero6Defaults.primaryCta,
    secondaryCta = hero6Defaults.secondaryCta,
    mainImage = hero6Defaults.mainImage,
    accentImage1 = hero6Defaults.accentImage1,
    accentImage2 = hero6Defaults.accentImage2,
  } = content as typeof hero6Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Text Content Card - Top Left */}
          <div className="bg-muted flex flex-col justify-center rounded-3xl p-8 lg:row-span-2 lg:p-10">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              classNames={classNames.header}
            />

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </div>

          {/* Main Large Image - Top Right, spans 2 columns */}
          <div className="bg-muted relative min-h-[20rem] overflow-hidden rounded-3xl lg:col-span-2">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Accent Image 1 - Bottom Middle */}
          <div className="bg-muted relative min-h-[15rem] overflow-hidden rounded-3xl">
            <Image
              src={accentImage1.src}
              alt={accentImage1.alt}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Accent Image 2 - Bottom Right */}
          <div className="bg-muted relative min-h-[15rem] overflow-hidden rounded-3xl">
            <Image
              src={accentImage2.src}
              alt={accentImage2.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero6 as HeroFitnessStats }
