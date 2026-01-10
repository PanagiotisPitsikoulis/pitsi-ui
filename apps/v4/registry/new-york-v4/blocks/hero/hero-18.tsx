"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 18 - Banner + Stats Bar (Travel theme)
const hero18Defaults = {
  badge: "Premium Travel",
  title: "Escape To\nParadise",
  description:
    "Transform any trip into an extraordinary adventure with our curated experiences.",
  primaryCta: { label: "Book Now", href: "#" },
  secondaryCta: {
    label: "View Gallery",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/landscape/sea/4.webp",
    alt: "Paradise destination",
  },
  stats: [
    { value: "150+", label: "Destinations" },
    { value: "50k+", label: "Travelers" },
    { value: "99%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ],
}

export function Hero18({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero18Defaults.badge,
    title = hero18Defaults.title,
    description = hero18Defaults.description,
    primaryCta = hero18Defaults.primaryCta,
    secondaryCta = hero18Defaults.secondaryCta,
    image = hero18Defaults.image,
    stats = hero18Defaults.stats,
  } = content as typeof hero18Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex flex-1 flex-col px-4 py-6">
        {/* Main Banner Area */}
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl lg:flex-row">
          {/* Image Side */}
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="from-background/90 via-background/60 absolute inset-0 bg-gradient-to-r to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:max-w-2xl lg:p-12">
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
        </div>

        {/* Stats Bar - Pinned at bottom */}
        <div className="bg-muted mt-4 grid grid-cols-2 gap-4 rounded-3xl p-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="display text-2xl font-bold md:text-3xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
