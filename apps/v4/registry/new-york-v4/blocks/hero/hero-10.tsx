"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 10 - Full-Bleed Background + Floating Glassmorphism Card (Plants theme)
const hero10Defaults = {
  badge: "Premium Plants",
  title: "Bring Nature\nIndoors",
  description:
    "Curated collection of rare houseplants. Expert care guides. Transform your space.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Care Guide",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/landscape/plants/1.webp",
    alt: "Lush indoor plant collection",
  },
}

export function Hero10({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero10Defaults.badge,
    title = hero10Defaults.title,
    description = hero10Defaults.description,
    primaryCta = hero10Defaults.primaryCta,
    secondaryCta = hero10Defaults.secondaryCta,
    backgroundImage = hero10Defaults.backgroundImage,
  } = content as typeof hero10Defaults

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
