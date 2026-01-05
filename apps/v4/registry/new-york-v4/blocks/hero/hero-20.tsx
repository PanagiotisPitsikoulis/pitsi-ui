"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 20 - Full-Bleed Background + Floating Glassmorphism Card (Boat theme)
const hero20Defaults = {
  badge: "Luxury Charters",
  title: "Sail Into\nLuxury",
  description:
    "Premium yacht experiences. Professional crew. Crystal waters await.",
  primaryCta: { label: "View Fleet", href: "#" },
  secondaryCta: {
    label: "Charter Info",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/landscape/sea/6.webp",
    alt: "Luxury yacht on ocean",
  },
}

export function Hero20({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero20Defaults.badge,
    title = hero20Defaults.title,
    description = hero20Defaults.description,
    primaryCta = hero20Defaults.primaryCta,
    secondaryCta = hero20Defaults.secondaryCta,
    backgroundImage = hero20Defaults.backgroundImage,
  } = content as typeof hero20Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="from-background/95 via-background/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        {/* Floating glassmorphism card */}
        <div className="bg-background/80 max-w-xl rounded-3xl p-8 shadow-2xl backdrop-blur-xl md:p-12">
          {/* Badge */}
          {badge && (
            <p
              className={cn(
                "text-brand mb-4 text-sm font-semibold tracking-widest uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}

          {/* Main headline */}
          <h1
            className={cn(
              "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl",
              classNames.header?.title
            )}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          {description && (
            <p
              className={cn(
                "text-muted-foreground mt-6 text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
        </div>
      </div>
    </section>
  )
}
