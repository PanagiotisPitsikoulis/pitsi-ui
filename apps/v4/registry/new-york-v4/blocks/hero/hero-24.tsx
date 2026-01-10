"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { StickyRevealFooter } from "@/registry/new-york-v4/animations/sticky-footer/sticky-footer"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 24 - Centered Hero with SlideUp + StickyFooter (Apple-style - Boat theme)
// Classic reveal pattern with elegant slide-up animations
const hero24Defaults = {
  badge: "Trusted Charters",
  title: "Luxury On The Water",
  description:
    "Every charter includes captain and crew. We're committed to excellence.",
  primaryCta: { label: "Start Planning", href: "#" },
  secondaryCta: {
    label: "Our Promise",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/landscape/sea/10.webp",
    alt: "Luxury yacht experience",
  },
  features: [
    {
      title: "Premium Fleet",
      description: "Hand-selected yachts from the world's finest builders",
    },
    {
      title: "Expert Crew",
      description: "Professional captains and crew for every voyage",
    },
    {
      title: "Bespoke Service",
      description: "Tailored experiences crafted to your preferences",
    },
  ],
}

export function Hero24({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero24Defaults.badge,
    title = hero24Defaults.title,
    description = hero24Defaults.description,
    primaryCta = hero24Defaults.primaryCta,
    secondaryCta = hero24Defaults.secondaryCta,
    image = hero24Defaults.image,
    features = hero24Defaults.features,
  } = content as typeof hero24Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex flex-1 flex-col px-4 py-6">
        {/* Centered Text Content with SlideUp animations */}
        <div className="flex flex-col items-center py-12 text-center">
          <SlideUp scrollBased={false} delay={0} duration={0.8} distance={30}>
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              align="center"
              classNames={classNames.header}
            />
          </SlideUp>

          <SlideUp scrollBased={false} delay={0.2} duration={0.8} distance={20}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </SlideUp>
        </div>

        {/* Image with SlideUp effect */}
        <SlideUp
          scrollBased={false}
          delay={0.4}
          duration={1}
          distance={40}
          className="relative flex-1 overflow-hidden rounded-3xl"
        >
          <div className="bg-muted relative h-full min-h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </SlideUp>
      </div>

      {/* Features section with StickyRevealFooter effect */}
      <StickyRevealFooter height={400} className="bg-muted">
        <div className="container flex h-full items-center px-4">
          <div className="grid w-full gap-8 py-12 md:grid-cols-3">
            {features.map((feature, i) => (
              <SlideUp
                key={i}
                scrollBased={true}
                delay={0}
                distance={30}
                className="text-center"
              >
                <div className="mx-auto max-w-xs">
                  <h3 className="display text-foreground text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </StickyRevealFooter>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero24 as HeroBoatCentered }
