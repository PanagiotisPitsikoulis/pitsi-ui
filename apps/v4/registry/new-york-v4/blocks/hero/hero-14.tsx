"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 14 - Overlapping Cards (Layered with depth - Plants theme)
const hero14Defaults = {
  badge: "Trusted Growers",
  title: "Ethically\nSourced Plants",
  description:
    "Every plant comes with a care guarantee. We're committed to sustainability and quality.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Our Promise",
    href: "#",
    variant: "outline" as const,
  },
  mainImage: {
    src: "/elements/landscape/plants/4.webp",
    alt: "Sustainable plants",
  },
  overlayImage: {
    src: "/elements/portrait/animals/3.webp",
    alt: "Pet-friendly plants",
  },
}

export function Hero14({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero14Defaults.badge,
    title = hero14Defaults.title,
    description = hero14Defaults.description,
    primaryCta = hero14Defaults.primaryCta,
    secondaryCta = hero14Defaults.secondaryCta,
    mainImage = hero14Defaults.mainImage,
    overlayImage = hero14Defaults.overlayImage,
  } = content as typeof hero14Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] items-center gap-8 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center py-8 lg:py-12">
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

            {description && (
              <p
                className={cn(
                  "text-muted-foreground mt-6 max-w-md text-lg md:text-xl",
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

          {/* Right - Overlapping Cards */}
          <div className="relative flex min-h-[30rem] items-center justify-center lg:min-h-[35rem]">
            {/* Main Background Card */}
            <div className="bg-muted absolute top-0 right-0 h-[85%] w-[90%] overflow-hidden rounded-3xl shadow-xl lg:w-[85%]">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay Floating Card */}
            <div className="border-background absolute bottom-0 left-0 h-[60%] w-[65%] overflow-hidden rounded-3xl border-4 shadow-2xl lg:w-[55%]">
              <Image
                src={overlayImage.src}
                alt={overlayImage.alt}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Accent Card - Brand color */}
            <div className="bg-brand/10 border-brand/20 absolute -right-4 bottom-20 z-10 rounded-2xl border p-4 shadow-lg backdrop-blur-sm lg:bottom-28 lg:p-6">
              <div className="display text-brand text-2xl font-bold lg:text-3xl">
                100%
              </div>
              <div className="text-muted-foreground text-sm">Organic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
