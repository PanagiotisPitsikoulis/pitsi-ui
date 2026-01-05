"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 2 - Photo Stack Gallery (Travel theme)
const hero2Defaults = {
  badge: "Adventure Awaits",
  title: "Explore The\nWorld With Us",
  description:
    "From tropical beaches to mountain peaks. Your next adventure starts here.",
  primaryCta: { label: "Start Planning", href: "#" },
  secondaryCta: {
    label: "View Destinations",
    href: "#",
    variant: "outline" as const,
  },
  photos: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Crystal clear ocean waters",
      rotation: -6,
    },
    {
      src: "/elements/landscape/plane/2.webp",
      alt: "Airplane flying over clouds",
      rotation: 4,
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Sunset over the sea",
      rotation: -3,
    },
    {
      src: "/elements/landscape/plane/5.webp",
      alt: "Scenic aerial view",
      rotation: 5,
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Tropical beach paradise",
      rotation: -4,
    },
  ],
  stats: [
    { value: "120+", label: "Destinations" },
    { value: "50k+", label: "Happy Travelers" },
    { value: "15+", label: "Years Experience" },
  ],
}

export function Hero2({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero2Defaults.badge,
    title = hero2Defaults.title,
    description = hero2Defaults.description,
    primaryCta = hero2Defaults.primaryCta,
    secondaryCta = hero2Defaults.secondaryCta,
    photos = hero2Defaults.photos,
    stats = hero2Defaults.stats,
  } = content as typeof hero2Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex flex-1 flex-col px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-6 lg:grid-cols-2">
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

            {/* Stats Row */}
            <div className="mt-12 flex gap-8 border-t pt-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-brand text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo Stack Gallery */}
          <div className="relative flex items-center justify-center py-8 lg:py-0">
            {/* Photo stack container */}
            <div className="relative h-[400px] w-full max-w-lg lg:h-[500px]">
              {/* Large main photo - center */}
              <div
                className="bg-background absolute top-1/2 left-1/2 z-30 h-[280px] w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl p-2 shadow-2xl lg:h-[320px] lg:w-[420px]"
                style={{ transform: "translate(-50%, -50%) rotate(-2deg)" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={photos[0].src}
                    alt={photos[0].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Top left photo */}
              <div
                className="bg-background absolute top-0 left-0 z-20 h-[160px] w-[200px] overflow-hidden rounded-xl p-1.5 shadow-xl lg:h-[180px] lg:w-[220px]"
                style={{ transform: `rotate(${photos[1].rotation}deg)` }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={photos[1].src}
                    alt={photos[1].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Top right photo */}
              <div
                className="bg-background absolute top-4 right-0 z-10 h-[140px] w-[180px] overflow-hidden rounded-xl p-1.5 shadow-xl lg:h-[160px] lg:w-[200px]"
                style={{ transform: `rotate(${photos[2].rotation}deg)` }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={photos[2].src}
                    alt={photos[2].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom left photo */}
              <div
                className="bg-background absolute bottom-8 left-4 z-20 h-[130px] w-[170px] overflow-hidden rounded-xl p-1.5 shadow-xl lg:h-[150px] lg:w-[190px]"
                style={{ transform: `rotate(${photos[3].rotation}deg)` }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={photos[3].src}
                    alt={photos[3].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom right photo */}
              <div
                className="bg-background absolute right-2 bottom-0 z-10 h-[150px] w-[190px] overflow-hidden rounded-xl p-1.5 shadow-xl lg:h-[170px] lg:w-[210px]"
                style={{ transform: `rotate(${photos[4].rotation}deg)` }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={photos[4].src}
                    alt={photos[4].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
