"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 11 - Floating Plants Gallery (Plants with transparent backgrounds)
const hero11Defaults = {
  badge: "Premium Plants",
  title: "Bring Nature\nIndoors",
  description:
    "Hand-picked houseplants delivered to your door. Expert care tips included with every order.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Care Guide",
    href: "#",
    variant: "outline" as const,
  },
  // Large hero plant subject (transparent background)
  heroPlant: {
    src: "/elements/subject/plants/1.webp",
    alt: "Beautiful indoor plant",
  },
  // Floating plant accents
  floatingPlants: [
    {
      src: "/elements/subject/plants/2.webp",
      alt: "Potted plant",
      position: { top: "8%", left: "5%" },
      size: 140,
      rotation: -8,
    },
    {
      src: "/elements/subject/plants/3.webp",
      alt: "Succulent",
      position: { top: "5%", right: "8%" },
      size: 100,
      rotation: 12,
    },
    {
      src: "/elements/subject/plants/4.webp",
      alt: "Fern",
      position: { bottom: "25%", left: "3%" },
      size: 120,
      rotation: 5,
    },
    {
      src: "/elements/subject/plants/item-1.webp",
      alt: "Plant pot",
      position: { bottom: "10%", right: "5%" },
      size: 110,
      rotation: -10,
    },
  ],
  features: [
    { label: "Free Shipping", value: "On orders $50+" },
    { label: "Care Included", value: "Expert tips" },
    { label: "30-Day Guarantee", value: "Happy plants" },
  ],
}

export function Hero11({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero11Defaults.badge,
    title = hero11Defaults.title,
    description = hero11Defaults.description,
    primaryCta = hero11Defaults.primaryCta,
    secondaryCta = hero11Defaults.secondaryCta,
    heroPlant = hero11Defaults.heroPlant,
    floatingPlants = hero11Defaults.floatingPlants,
    features = hero11Defaults.features,
  } = content as typeof hero11Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Soft Green Gradient Background */}
      <div className="from-brand/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />

      {/* Floating Plant Accents */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingPlants.map((plant, i) => (
          <div
            key={i}
            className="absolute transition-transform duration-500"
            style={{
              ...plant.position,
              width: plant.size,
              height: plant.size,
              transform: `rotate(${plant.rotation}deg)`,
            }}
          >
            <Image
              src={plant.src}
              alt={plant.alt}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] items-center gap-8 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center py-8 lg:py-12">
            {badge && (
              <div className="mb-6 inline-block">
                <span
                  className={cn(
                    "bg-brand/10 text-brand rounded-full px-4 py-1.5 text-sm font-semibold tracking-widest uppercase",
                    classNames.header?.badge
                  )}
                >
                  {badge}
                </span>
              </div>
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

            {/* Feature Grid */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="border-brand/20 border-l-2 pl-4">
                  <div className="text-foreground text-sm font-semibold">
                    {feature.label}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {feature.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Large Hero Plant */}
          <div className="relative flex min-h-[30rem] items-center justify-center lg:min-h-[35rem]">
            <div className="relative h-full w-full max-w-md lg:max-w-lg">
              <Image
                src={heroPlant.src}
                alt={heroPlant.alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Show floating plants at bottom */}
      <div className="relative z-10 flex justify-center gap-6 overflow-x-auto px-4 pb-8 lg:hidden">
        {floatingPlants.slice(0, 3).map((plant, i) => (
          <div
            key={i}
            className="relative h-20 w-20 flex-shrink-0"
            style={{ transform: `rotate(${plant.rotation / 2}deg)` }}
          >
            <Image
              src={plant.src}
              alt={plant.alt}
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
