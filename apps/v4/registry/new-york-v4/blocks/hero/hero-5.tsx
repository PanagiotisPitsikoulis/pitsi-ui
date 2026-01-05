"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 5 - Portrait Stack (Vertical Image on Left, Text Stacked on Right)
const hero5Defaults = {
  badge: "Elite Training",
  title: "Push Beyond\nYour Limits",
  description:
    "World-class coaching and cutting-edge facilities to transform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  portraitImage: {
    src: "/elements/portrait/gym/2.webp",
    alt: "Intense fitness training session",
  },
}

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero5Defaults.badge,
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    portraitImage = hero5Defaults.portraitImage,
  } = content as typeof hero5Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-4 lg:grid-cols-2">
          {/* Left - Full Height Portrait Image */}
          <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl lg:min-h-full">
            <Image
              src={portraitImage.src}
              alt={portraitImage.alt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right - Stacked Text Content */}
          <div className="flex flex-col gap-4">
            {/* Badge + Title Card */}
            <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-8 lg:p-12">
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
            </div>

            {/* Description Card */}
            <div className="bg-muted flex flex-col justify-center rounded-3xl p-8">
              {description && (
                <p
                  className={cn(
                    "text-muted-foreground text-lg md:text-xl",
                    classNames.header?.description
                  )}
                >
                  {description}
                </p>
              )}
            </div>

            {/* Buttons Card */}
            <div className="bg-muted flex items-center gap-3 rounded-3xl p-6">
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
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
