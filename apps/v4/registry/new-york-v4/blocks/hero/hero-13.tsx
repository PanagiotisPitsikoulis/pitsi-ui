"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 13 - Text Parallax (Sliding text with image split)
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
  slidingWords: ["Plants", "Nature", "Life", "Growth"],
}

export function Hero13({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero13Defaults.badge,
    title = hero13Defaults.title,
    description = hero13Defaults.description,
    primaryCta = hero13Defaults.primaryCta,
    secondaryCta = hero13Defaults.secondaryCta,
    image = hero13Defaults.image,
    slidingWords = hero13Defaults.slidingWords,
  } = content as typeof hero13Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Two-column layout */}
      <div className="container relative z-10 grid flex-1 lg:grid-cols-2">
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center px-4 py-12 lg:pr-12">
          <HeroText
            badge={badge}
            title={title}
            description={description}
            size="large"
            classNames={classNames.header}
          />

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

        {/* Right - Image */}
        <div className="relative hidden min-h-[30rem] lg:block">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Sliding Text Banner */}
      <HorizontalScrollContainer className="border-brand/10 bg-brand/5 relative z-20 border-y py-6">
        <HorizontalSlide direction="left" distance={200}>
          <div className="flex items-center gap-8">
            {[...slidingWords, ...slidingWords, ...slidingWords].map(
              (word, i) => (
                <span
                  key={i}
                  className="font-display text-brand/80 text-4xl font-bold tracking-tight md:text-6xl"
                >
                  {word}
                  <span className="text-brand mx-4">•</span>
                </span>
              )
            )}
          </div>
        </HorizontalSlide>
      </HorizontalScrollContainer>

      {/* Mobile Image */}
      <div className="relative h-64 lg:hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
