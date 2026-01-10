"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 21 - Portrait Stack with PerspectiveSectionTransition (Boat theme)
// Refined 3D transitions for luxury effect
const hero21Defaults = {
  badge: "Premium Fleet",
  title: "Your Ocean\nAwaits",
  description:
    "Hand-selected yachts with experienced crew. Every voyage is exceptional.",
  primaryCta: { label: "Explore Fleet", href: "#" },
  secondaryCta: {
    label: "Learn More",
    href: "#",
    variant: "outline" as const,
  },
  portraitImage: {
    src: "/elements/landscape/sea/7.webp",
    alt: "Premium yacht",
  },
  accentText: "Est. 2010",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Voyages" },
  ],
}

export function Hero21({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero21Defaults.badge,
    title = hero21Defaults.title,
    description = hero21Defaults.description,
    primaryCta = hero21Defaults.primaryCta,
    secondaryCta = hero21Defaults.secondaryCta,
    portraitImage = hero21Defaults.portraitImage,
    accentText = hero21Defaults.accentText,
    stats = hero21Defaults.stats,
  } = content as typeof hero21Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <PerspectiveContainer
        height="150vh"
        className="w-full"
        scrollBased={true}
        noMobile={false}
      >
        <PerspectiveSection
          sticky={true}
          scaleRange={[1, 0.95]}
          rotateRange={[0, -3]}
          className="h-auto min-h-screen w-full py-6"
        >
          <div className="container h-full px-4">
            <div className="grid h-full min-h-[calc(100svh-8rem)] gap-4 lg:grid-cols-2">
              {/* Left - Full Height Portrait Image */}
              <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl lg:min-h-full">
                <Image
                  src={portraitImage.src}
                  alt={portraitImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Accent overlay text */}
                {accentText && (
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-background/90 text-foreground rounded-full px-4 py-2 text-sm font-medium tracking-wide">
                      {accentText}
                    </span>
                  </div>
                )}
              </div>

              {/* Right - Stacked Text Content */}
              <div className="flex flex-col gap-4">
                {/* Badge + Title Card */}
                <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-8 lg:p-12">
                  <HeroText
                    badge={badge}
                    title={title}
                    size="large"
                    classNames={classNames.header}
                  />
                </div>

                {/* Description Card */}
                <div className="bg-muted flex flex-col justify-center rounded-3xl p-8">
                  <HeroText
                    description={description}
                    title=""
                    size="large"
                    classNames={classNames.header}
                  />

                  {/* Stats row */}
                  {stats && stats.length > 0 && (
                    <div className="border-border/50 mt-6 flex gap-8 border-t pt-6">
                      {stats.map((stat, i) => (
                        <div key={i}>
                          <div className="display text-brand text-2xl font-bold">
                            {stat.value}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
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
                      className={cn(
                        "text-foreground",
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
        </PerspectiveSection>
      </PerspectiveContainer>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero21 as HeroBoatPortrait }
