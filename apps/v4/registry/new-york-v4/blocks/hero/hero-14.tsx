"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

import { HeroButton } from "../../ui/hero-button"

// Hero 14 - Marquee Gallery (Continuous plant imagery flow)
const hero14Defaults = {
  badge: "Trusted Growers",
  title: "Ethically\nSourced Plants",
  description:
    "Every plant comes with a care guarantee. We're committed to sustainability and quality.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Our Promise",
    href: "#",
    variant: "outline" as const,
  },
  marqueeImages: [
    { src: "/elements/landscape/plants/1.webp", alt: "Plant 1" },
    { src: "/elements/landscape/plants/2.webp", alt: "Plant 2" },
    { src: "/elements/landscape/plants/3.webp", alt: "Plant 3" },
    { src: "/elements/landscape/plants/4.webp", alt: "Plant 4" },
  ],
  stats: [
    { value: "100%", label: "Organic" },
    { value: "50K+", label: "Happy Customers" },
    { value: "200+", label: "Plant Varieties" },
  ],
}

export function Hero14({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero14Defaults.badge,
    title = hero14Defaults.title,
    description = hero14Defaults.description,
    primaryCta = hero14Defaults.primaryCta,
    secondaryCta = hero14Defaults.secondaryCta,
    marqueeImages = hero14Defaults.marqueeImages,
    stats = hero14Defaults.stats,
  } = content as typeof hero14Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Text Content */}
      <div className="container flex-1 px-4 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
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
              <Link href={primaryCta.href} className={classNames.cta?.primary}>
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

          {/* Stats Row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-brand text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Image Gallery */}
      <div className="relative mt-auto">
        <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]">
          {marqueeImages.map((img, i) => (
            <div
              key={i}
              className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-2xl md:h-64 md:w-96"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>

        {/* Gradient fade edges */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
      </div>
    </section>
  )
}
