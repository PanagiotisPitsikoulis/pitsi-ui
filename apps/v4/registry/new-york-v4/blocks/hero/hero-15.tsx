"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { BackgroundImageParallax } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 15 - Full-Bleed Parallax Background (Travel theme)
const hero15Defaults = {
  badge: "Travel Experts",
  title: "Explore The\nWorld",
  description:
    "Curated travel experiences. Expert guides. Unforgettable adventures await.",
  primaryCta: { label: "Plan Trip", href: "#" },
  secondaryCta: {
    label: "Destinations",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/landscape/plane/2.webp",
    alt: "Beautiful travel destination",
  },
  features: [
    { label: "Destinations", value: "120+" },
    { label: "Happy Travelers", value: "50k+" },
    { label: "Expert Guides", value: "200+" },
  ],
}

export function Hero15({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero15Defaults.badge,
    title = hero15Defaults.title,
    description = hero15Defaults.description,
    primaryCta = hero15Defaults.primaryCta,
    secondaryCta = hero15Defaults.secondaryCta,
    backgroundImage = hero15Defaults.backgroundImage,
    features = hero15Defaults.features,
  } = content as typeof hero15Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Full-bleed parallax background image */}
      <BackgroundImageParallax
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        className="absolute inset-0 -top-[10%] h-[120%]"
        range={["-10%", "10%"]}
        offset={["start end", "end start"]}
      >
        {/* Gradient overlay for text readability - no glassmorphism */}
        <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      </BackgroundImageParallax>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        {/* Content card - solid background, no glassmorphism */}
        <div className="bg-background max-w-xl rounded-3xl border p-8 shadow-2xl md:p-12">
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

          {/* Features bar */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t pt-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-brand text-xl font-bold md:text-2xl">
                  {feature.value}
                </div>
                <div className="text-muted-foreground text-xs">
                  {feature.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Hero15 as HeroTravelParallax }
