"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import FlyingPosters from "@/registry/new-york-v4/animations/flying-posters/flying-posters"
import Noise from "@/registry/new-york-v4/animations/noise/noise"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 9 - FlyingPosters + Noise Overlay
const hero9Defaults = {
  badge: "Elevate Your Game",
  title: "Strength\nRedefined",
  description:
    "World-class coaching and cutting-edge facilities to transform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  posterImages: [
    "/elements/portrait/gym/1.webp",
    "/elements/portrait/gym/2.webp",
    "/elements/portrait/gym/3.webp",
    "/elements/portrait/gym/5.webp",
    "/elements/portrait/gym/6.webp",
  ],
  flyingPostersConfig: {
    planeWidth: 280,
    planeHeight: 380,
    distortion: 4,
    scrollEase: 0.015,
    cameraFov: 45,
    cameraZ: 18,
  },
  noiseConfig: {
    patternSize: 200,
    patternAlpha: 12,
    patternRefreshInterval: 3,
  },
  stats: [
    { value: "15+", label: "Programs" },
    { value: "5K+", label: "Members" },
    { value: "98%", label: "Satisfaction" },
  ],
}

export function Hero9({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero9Defaults.badge,
    title = hero9Defaults.title,
    description = hero9Defaults.description,
    primaryCta = hero9Defaults.primaryCta,
    secondaryCta = hero9Defaults.secondaryCta,
    posterImages = hero9Defaults.posterImages,
    flyingPostersConfig = hero9Defaults.flyingPostersConfig,
    noiseConfig = hero9Defaults.noiseConfig,
    stats = hero9Defaults.stats,
  } = content as typeof hero9Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* FlyingPosters Background */}
      <div className="absolute inset-0">
        <FlyingPosters
          items={posterImages}
          planeWidth={flyingPostersConfig.planeWidth}
          planeHeight={flyingPostersConfig.planeHeight}
          distortion={flyingPostersConfig.distortion}
          scrollEase={flyingPostersConfig.scrollEase}
          cameraFov={flyingPostersConfig.cameraFov}
          cameraZ={flyingPostersConfig.cameraZ}
          className="h-full w-full"
        />
        {/* Gradient overlays for text readability */}
        <div className="from-background via-background/60 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-background/80 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      {/* Noise Overlay */}
      <Noise
        patternSize={noiseConfig.patternSize}
        patternAlpha={noiseConfig.patternAlpha}
        patternRefreshInterval={noiseConfig.patternRefreshInterval}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        <div className="max-w-xl">
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

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3">
            <div className="bg-brand h-12 w-0.5 animate-pulse" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">
              Scroll to explore
            </span>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="display text-brand text-2xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive hint */}
      <div className="absolute right-8 bottom-8 z-10 hidden lg:block">
        <div className="bg-muted/80 border-brand/30 rounded-full border px-4 py-2 text-sm">
          <span className="text-muted-foreground">
            Drag or scroll on posters
          </span>
        </div>
      </div>
    </section>
  )
}
