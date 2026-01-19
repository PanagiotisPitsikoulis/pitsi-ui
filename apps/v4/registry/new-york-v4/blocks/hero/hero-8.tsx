"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import Balatro from "@/registry/new-york-v4/animations/balatro/balatro"
import CircularText from "@/registry/new-york-v4/animations/circular-text/circular-text"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 8 - Balatro Background + CircularText Accent
const hero8Defaults = {
  badge: "Transform Your Body",
  title: "Strength\nRedefined",
  description:
    "Professional-grade equipment meets expert guidance. Your transformation starts with the right tools.",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: {
    label: "View Equipment",
    href: "#",
    variant: "outline" as const,
  },
  balatroConfig: {
    color1: "#39ff14",
    color2: "#006BB4",
    color3: "#0a0a0a",
    spinSpeed: 4.0,
    spinRotation: -1.5,
    contrast: 3.0,
    lighting: 0.5,
    spinAmount: 0.3,
  },
  circularTextConfig: {
    text: " TRAIN HARD * GET FIT * STAY STRONG *",
    spinDuration: 15,
    onHover: "speedUp" as const,
  },
  features: [
    { label: "Pro Equipment" },
    { label: "Expert Coaching" },
    { label: "Fast Results" },
  ],
}

export function Hero8({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero8Defaults.badge,
    title = hero8Defaults.title,
    description = hero8Defaults.description,
    primaryCta = hero8Defaults.primaryCta,
    secondaryCta = hero8Defaults.secondaryCta,
    balatroConfig = hero8Defaults.balatroConfig,
    circularTextConfig = hero8Defaults.circularTextConfig,
    features = hero8Defaults.features,
  } = content as typeof hero8Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Balatro Background */}
      <div className="pointer-events-none absolute inset-0">
        <Balatro
          color1={balatroConfig.color1}
          color2={balatroConfig.color2}
          color3={balatroConfig.color3}
          spinSpeed={balatroConfig.spinSpeed}
          spinRotation={balatroConfig.spinRotation}
          contrast={balatroConfig.contrast}
          lighting={balatroConfig.lighting}
          spinAmount={balatroConfig.spinAmount}
          isRotate={true}
          mouseInteraction={true}
        />
        {/* Dark overlay for text readability */}
        <div className="from-background/80 via-background/50 absolute inset-0 bg-gradient-to-b to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container flex flex-1 items-center justify-center px-4 py-12">
        <div className="grid w-full gap-8 lg:grid-cols-5 lg:items-center lg:gap-12">
          {/* Left: Circular Text (hidden on mobile) */}
          <div className="hidden lg:col-span-1 lg:flex lg:items-center lg:justify-center">
            <div className="text-brand">
              <CircularText
                text={circularTextConfig.text}
                spinDuration={circularTextConfig.spinDuration}
                onHover={circularTextConfig.onHover}
                className="text-brand"
              />
            </div>
          </div>

          {/* Center: Main Content */}
          <div className="text-center lg:col-span-3">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              align="center"
              classNames={classNames.header}
            />

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-muted/80 border-brand/30 flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
                >
                  <span className="bg-brand h-2 w-2 rounded-full" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

          {/* Right: Circular Text (hidden on mobile) */}
          <div className="hidden lg:col-span-1 lg:flex lg:items-center lg:justify-center">
            <div className="text-brand">
              <CircularText
                text={circularTextConfig.text}
                spinDuration={circularTextConfig.spinDuration + 5}
                onHover="slowDown"
                className="text-brand"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Circular Text at Bottom */}
      <div className="relative z-10 flex justify-center pb-8 lg:hidden">
        <div className="text-brand scale-75">
          <CircularText
            text={circularTextConfig.text}
            spinDuration={circularTextConfig.spinDuration}
            onHover={circularTextConfig.onHover}
            className="text-brand"
          />
        </div>
      </div>
    </section>
  )
}
