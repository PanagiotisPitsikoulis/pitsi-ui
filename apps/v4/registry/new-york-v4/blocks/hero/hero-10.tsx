"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 10 - Aurora Background with Scroll Fade (Plants theme)
const hero10Defaults = {
  badge: "Premium Plants",
  title: "Bring Nature\nIndoors",
  description:
    "Curated collection of rare houseplants. Expert care guides. Transform your space.",
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: {
    label: "Care Guide",
    href: "#",
    variant: "outline" as const,
  },
  auroraColors: ["#5cb87e", "#2d5a3f", "#a85cb8"],
}

export function Hero10({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero10Defaults.badge,
    title = hero10Defaults.title,
    description = hero10Defaults.description,
    primaryCta = hero10Defaults.primaryCta,
    secondaryCta = hero10Defaults.secondaryCta,
    auroraColors = hero10Defaults.auroraColors,
  } = content as typeof hero10Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <Aurora
          colorStops={auroraColors}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center justify-center px-4 py-12">
        <ScrollFade scrollBased={false} delay={0.2}>
          <div className="max-w-2xl text-center">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              align="center"
              classNames={classNames.header}
            />

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </ScrollFade>
      </div>
    </section>
  )
}
