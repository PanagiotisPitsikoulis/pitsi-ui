"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import LetterGlitch from "@/registry/new-york-v4/animations/letter-glitch/letter-glitch"
import LiquidChrome from "@/registry/new-york-v4/animations/liquid-chrome/liquid-chrome"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 4 - Liquid Chrome Background + LetterGlitch Title
const hero4Defaults = {
  badge: "Transform Your Body",
  title: "PUSH LIMITS",
  description:
    "Personalized training programs. Expert guidance. Results that last a lifetime.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  liquidChromeConfig: {
    baseColor: [0.1, 0.8, 0.3] as [number, number, number],
    speed: 0.3,
    amplitude: 0.6,
    frequencyX: 3,
    frequencyY: 2,
  },
  glitchConfig: {
    glitchColors: ["#39ff14", "#00ff41", "#0dff00"],
    glitchSpeed: 50,
    characters: "FITNESSGYMPOWER01",
  },
  stats: [
    { value: "10K+", label: "Members" },
    { value: "500+", label: "Workouts" },
    { value: "24/7", label: "Access" },
  ],
}

export function Hero4({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero4Defaults.badge,
    title = hero4Defaults.title,
    description = hero4Defaults.description,
    primaryCta = hero4Defaults.primaryCta,
    secondaryCta = hero4Defaults.secondaryCta,
    liquidChromeConfig = hero4Defaults.liquidChromeConfig,
    glitchConfig = hero4Defaults.glitchConfig,
    stats = hero4Defaults.stats,
  } = content as typeof hero4Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Liquid Chrome Background */}
      <div className="pointer-events-none absolute inset-0">
        <LiquidChrome
          baseColor={liquidChromeConfig.baseColor}
          speed={liquidChromeConfig.speed}
          amplitude={liquidChromeConfig.amplitude}
          frequencyX={liquidChromeConfig.frequencyX}
          frequencyY={liquidChromeConfig.frequencyY}
          interactive={true}
        />
        {/* Overlay to darken and improve text readability */}
        <div className="from-background/90 via-background/60 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <HeroText
              badge={badge}
              title=""
              description={description}
              size="large"
              classNames={classNames.header}
            />

            {/* Glitch Title */}
            <div className="relative my-8 h-32 w-full overflow-hidden rounded-xl lg:h-40">
              <LetterGlitch
                glitchColors={glitchConfig.glitchColors}
                glitchSpeed={glitchConfig.glitchSpeed}
                characters={glitchConfig.characters}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="display text-foreground text-4xl font-black tracking-wider drop-shadow-lg md:text-5xl lg:text-6xl">
                  {title}
                </span>
              </div>
            </div>

            {/* Buttons */}
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

          {/* Right: Stats with neon accent */}
          <div className="mt-12 grid grid-cols-3 gap-6 lg:mt-0 lg:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border-brand/30 bg-background/50 rounded-xl border p-4 text-center"
              >
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
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero4 as HeroFitnessSplit }
