"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import Stack from "@/registry/new-york-v4/animations/stack/stack"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 11 - Stack Cards Gallery (Draggable plant cards)
const hero11Defaults = {
  badge: "Premium Plants",
  title: "Discover Your\nPerfect Plant",
  description:
    "Hand-picked houseplants delivered to your door. Drag through our collection or let it autoplay.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Care Guide",
    href: "#",
    variant: "outline" as const,
  },
  stackImages: [
    { src: "/elements/landscape/plants/1.webp", alt: "Indoor plant 1" },
    { src: "/elements/landscape/plants/2.webp", alt: "Indoor plant 2" },
    { src: "/elements/landscape/plants/3.webp", alt: "Indoor plant 3" },
    { src: "/elements/landscape/plants/4.webp", alt: "Indoor plant 4" },
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
    stackImages = hero11Defaults.stackImages,
    features = hero11Defaults.features,
  } = content as typeof hero11Defaults

  const stackCards = stackImages.map((img, i) => (
    <Image
      key={i}
      src={img.src}
      alt={img.alt}
      fill
      className="pointer-events-none object-cover"
      priority={i === 0}
    />
  ))

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Subtle gradient background */}
      <div className="from-brand/5 via-brand/2 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent" />

      <div className="relative z-10 container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] items-center gap-8 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center py-8 lg:py-12">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              classNames={classNames.header}
            />

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

          {/* Right - Stack Cards */}
          <div className="relative flex min-h-[24rem] items-center justify-center lg:min-h-[30rem]">
            <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-lg">
              <Stack
                cards={stackCards}
                autoplay
                autoplayDelay={4000}
                pauseOnHover
                sendToBackOnClick
                mobileClickOnly
                randomRotation
                sensitivity={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
