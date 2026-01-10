"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 4 - Full-Bleed Background + Floating Glassmorphism Card
const hero4Defaults = {
  badge: "Transform Your Body",
  title: "Unlock Your\nFull Potential",
  description:
    "Personalized training programs. Expert guidance. Results that last a lifetime.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/portrait/gym/1.webp",
    alt: "Gym atmosphere",
  },
}

export function Hero4({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero4Defaults.badge,
    title = hero4Defaults.title,
    description = hero4Defaults.description,
    primaryCta = hero4Defaults.primaryCta,
    secondaryCta = hero4Defaults.secondaryCta,
    backgroundImage = hero4Defaults.backgroundImage,
  } = content as typeof hero4Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="from-background/95 via-background/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        {/* Floating glassmorphism card */}
        <div className="bg-background/80 max-w-xl rounded-3xl p-8 shadow-2xl backdrop-blur-xl md:p-12">
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
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero4 as HeroFitnessSplit }
