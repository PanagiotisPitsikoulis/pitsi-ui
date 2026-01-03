"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

// Hero 5 defaults - Fitness/Elite Training theme
const hero5Defaults = {
  badge: "Elite Training",
  title: "Push Beyond\nYour Limits",
  description:
    "World-class coaching. Cutting-edge facilities.\nTransform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/gym/3.webp",
    alt: "Intense fitness training session",
  },
}

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  // Merge content with defaults
  const {
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    image = hero5Defaults.image,
  } = content

  return (
    <section
      className={cn(
        "relative min-h-[100svh] overflow-hidden py-20 lg:max-h-[100svh]",
        classNames.root
      )}
    >
      <div className="flex items-end justify-center gap-10">
        {/* Main headline */}
        <h1
          className={cn(
            "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-7xl",
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
              "mt-8 text-lg md:text-2xl",
              classNames.header?.description
            )}
          >
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        )}

        {/* Buttons */}
        <div
          className={cn(
            "relative z-10 mt-10 flex flex-row gap-3",
            classNames.cta?.root
          )}
        >
          {primaryCta && (
            <Link href={primaryCta.href} className={classNames.cta?.primary}>
              <HeroButton>{primaryCta.label}</HeroButton>
            </Link>
          )}
          {secondaryCta && (
            <Button
              variant={secondaryCta.variant ?? "outline"}
              size="lg"
              className={cn(
                "bg-background text-foreground rounded-full px-8",
                classNames.cta?.secondary
              )}
              asChild
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Hero Image - Below text */}
      <div className="container -mt-16 px-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
