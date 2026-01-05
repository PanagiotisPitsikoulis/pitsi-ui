"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 13 - Split Diagonal (Angled Division - Plants theme)
const hero13Defaults = {
  badge: "Premium Plants",
  title: "Living Art\nFor Your Home",
  description:
    "Transform any space with our curated selection of statement plants.",
  primaryCta: { label: "Shop Now", href: "#" },
  secondaryCta: {
    label: "View Gallery",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/landscape/plants/3.webp",
    alt: "Statement plants",
  },
}

export function Hero13({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero13Defaults.badge,
    title = hero13Defaults.title,
    description = hero13Defaults.description,
    primaryCta = hero13Defaults.primaryCta,
    secondaryCta = hero13Defaults.secondaryCta,
    image = hero13Defaults.image,
  } = content as typeof hero13Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Background Image with Diagonal Clip */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 25% 100%)",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="from-background/40 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Diagonal Accent Line */}
      <div
        className="bg-brand/20 absolute inset-0"
        style={{
          clipPath: "polygon(38% 0, 42% 0, 27% 100%, 23% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        <div className="max-w-lg">
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
              "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
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

          {/* Description */}
          {description && (
            <p
              className={cn(
                "text-muted-foreground mt-6 text-lg md:text-xl",
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
