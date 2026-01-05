"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 12 - Image Collage (1 Large + 2 Accent Images - Plants theme)
const hero12Defaults = {
  badge: "Premium Plants",
  title: "Nature's\nFinest",
  description: "Rare and exotic plants sourced from trusted growers worldwide.",
  primaryCta: { label: "Explore", href: "#" },
  secondaryCta: {
    label: "Our Story",
    href: "#",
    variant: "outline" as const,
  },
  mainImage: {
    src: "/elements/landscape/plants/2.webp",
    alt: "Lush plant collection",
  },
  accentImage1: {
    src: "/elements/subject/plants/item-1.webp",
    alt: "Featured plant",
  },
  accentImage2: {
    src: "/elements/portrait/animals/2.webp",
    alt: "Pet-safe plants",
  },
}

export function Hero12({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero12Defaults.badge,
    title = hero12Defaults.title,
    description = hero12Defaults.description,
    primaryCta = hero12Defaults.primaryCta,
    secondaryCta = hero12Defaults.secondaryCta,
    mainImage = hero12Defaults.mainImage,
    accentImage1 = hero12Defaults.accentImage1,
    accentImage2 = hero12Defaults.accentImage2,
  } = content as typeof hero12Defaults

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
                "display text-4xl leading-[1.1] tracking-tight sm:text-5xl",
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

            {description && (
              <p
                className={cn(
                  "text-muted-foreground mt-6 text-base md:text-lg",
                  classNames.header?.description
                )}
              >
                {description}
              </p>
            )}

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
              className="object-cover"
            />
          </div>

          {/* Accent Image 2 - Bottom Right */}
          <div className="bg-muted relative min-h-[15rem] overflow-hidden rounded-3xl">
            <Image
              src={accentImage2.src}
              alt={accentImage2.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
