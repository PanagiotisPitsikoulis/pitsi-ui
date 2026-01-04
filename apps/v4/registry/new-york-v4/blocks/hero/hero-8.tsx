"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 8 defaults - Fitness/Elite Training theme (no header - applied at template level)
const hero8Defaults = {
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
  stats: [
    { value: "500+", label: "Members" },
    { value: "50+", label: "Classes" },
    { value: "15", label: "Trainers" },
  ],
}

export function Hero8({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    title = hero8Defaults.title,
    description = hero8Defaults.description,
    primaryCta = hero8Defaults.primaryCta,
    secondaryCta = hero8Defaults.secondaryCta,
    image = hero8Defaults.image,
    stats = hero8Defaults.stats,
  } = content as typeof hero8Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Bento Grid Layout - Reversed */}
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full gap-4 lg:grid-cols-5">
          {/* Left Card - Image (wider) */}
          <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl lg:col-span-3 lg:min-h-[35rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="mt-10 object-cover object-top"
              priority
            />
          </div>

          {/* Right Column - Text + Stats + Buttons */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Text Card */}
            <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-8">
              {/* Main headline */}
              <h1
                className={cn(
                  "display text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl",
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
                    "text-muted-foreground mt-4 text-base md:text-lg",
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
            </div>

            {/* Stats Card */}
            <div className="bg-muted flex items-center justify-between rounded-3xl p-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="display text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                  className={cn(
                    "dark text-foreground",
                    classNames.cta?.secondary
                  )}
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
