"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import Iridescence from "@/registry/new-york-v4/animations/iridescence/iridescence"
import TextPressure from "@/registry/new-york-v4/animations/text-pressure/text-pressure"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 5 - Iridescence Background + TextPressure Title
const hero5Defaults = {
  badge: "Elite Training",
  title: "POWER",
  description:
    "World-class coaching and cutting-edge facilities to transform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  iridescenceConfig: {
    color: [0.3, 1, 0.4] as [number, number, number],
    speed: 1.2,
    amplitude: 0.15,
  },
  textPressureConfig: {
    text: "POWER",
    width: true,
    weight: true,
    italic: false,
    textColor: "hsl(var(--foreground))",
    minFontSize: 48,
  },
}

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero5Defaults.badge,
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    iridescenceConfig = hero5Defaults.iridescenceConfig,
    textPressureConfig = hero5Defaults.textPressureConfig,
  } = content as typeof hero5Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Iridescence Background */}
      <div className="pointer-events-none absolute inset-0">
        <Iridescence
          color={iridescenceConfig.color}
          speed={iridescenceConfig.speed}
          amplitude={iridescenceConfig.amplitude}
          mouseReact={true}
        />
        {/* Overlay gradient */}
        <div className="from-background via-background/40 absolute inset-0 bg-gradient-to-b to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-1 flex-col items-center justify-center px-4 py-12">
        {/* Badge */}
        <div className="mb-6">
          <HeroText
            badge={badge}
            title=""
            size="large"
            align="center"
            classNames={classNames.header}
          />
        </div>

        {/* TextPressure Title */}
        <div className="relative mb-8 h-32 w-full max-w-3xl md:h-40 lg:h-48">
          <TextPressure
            text={textPressureConfig.text || title}
            width={textPressureConfig.width}
            weight={textPressureConfig.weight}
            italic={textPressureConfig.italic}
            alpha={false}
            flex={true}
            stroke={false}
            scale={true}
            textColor={textPressureConfig.textColor}
            minFontSize={textPressureConfig.minFontSize}
            className="display"
          />
        </div>

        {/* Description */}
        <div className="max-w-xl text-center">
          <HeroText
            title=""
            description={description}
            size="large"
            align="center"
            classNames={classNames.header}
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: "💪", label: "Strength Training" },
            { icon: "🔥", label: "HIIT Workouts" },
            { icon: "⚡", label: "Personal Coaching" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-muted/60 border-border flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
            >
              <span>{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
