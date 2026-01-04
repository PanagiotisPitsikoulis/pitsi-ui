"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { HeroButton } from "../../ui/hero-button"

// Hero 5 defaults - Fitness/Elite Training theme (no header - applied at template level)
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
  const {
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    image = hero5Defaults.image,
  } = content as typeof hero5Defaults

  return (
    <section
      className={cn(
        "relative min-h-[calc(100svh-5rem)] overflow-hidden lg:max-h-[calc(100svh-5rem)]",
        classNames.root
      )}
    >
      <Spacer size={"lg"} />

      <div className="container px-4">
        <div className="bg-muted flex items-end justify-center gap-10 rounded-3xl p-10">
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
              <Button size="lg" asChild className={classNames.cta?.primary}>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className={classNames.cta?.secondary}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <Spacer size={"lg"} />

      {/* Hero Image - Below text */}
      <div className="container px-4">
        <div className="bg-muted relative aspect-[16/9] w-full overflow-visible rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top lg:-mt-32"
            priority
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
