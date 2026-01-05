"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 24 - Centered Hero (Apple-style - Boat theme)
const hero24Defaults = {
  badge: "Trusted Charters",
  title: "Luxury On The Water",
  description:
    "Every charter includes captain and crew. We're committed to excellence.",
  primaryCta: { label: "Start Planning", href: "#" },
  secondaryCta: {
    label: "Our Promise",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/landscape/sea/10.webp",
    alt: "Luxury yacht experience",
  },
}

export function Hero24({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero24Defaults.badge,
    title = hero24Defaults.title,
    description = hero24Defaults.description,
    primaryCta = hero24Defaults.primaryCta,
    secondaryCta = hero24Defaults.secondaryCta,
    image = hero24Defaults.image,
  } = content as typeof hero24Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex flex-1 flex-col px-4 py-6">
        {/* Centered Text Content */}
        <div className="flex flex-col items-center py-12 text-center">
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
          <h1
            className={cn(
              "display max-w-4xl text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
              classNames.header?.title
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}

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
        </div>

        {/* Floating Image Below */}
        <div className="bg-muted relative flex-1 overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
