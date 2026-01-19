"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Carousel_002 } from "@/registry/new-york-v4/animations/card-swipe-carousel/card-swipe-carousel"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 7 - CardSwipeCarousel + BorderBeam
const hero7Defaults = {
  badge: "Elite Training",
  title: "Elevate Your\nFitness Game",
  description:
    "World-class equipment and expert coaching to push your limits and achieve your goals.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  carouselImages: [
    { src: "/elements/portrait/gym/1.webp", alt: "Training session 1" },
    { src: "/elements/portrait/gym/2.webp", alt: "Training session 2" },
    { src: "/elements/portrait/gym/3.webp", alt: "Training session 3" },
    { src: "/elements/portrait/gym/5.webp", alt: "Training session 4" },
    { src: "/elements/portrait/gym/6.webp", alt: "Training session 5" },
  ],
  stats: [
    { value: "50+", label: "Classes Weekly" },
    { value: "24/7", label: "Gym Access" },
    { value: "100%", label: "Results" },
  ],
  borderBeamConfig: {
    colorFrom: "#39ff14",
    colorTo: "#00ff41",
    duration: 8,
    size: 100,
  },
}

export function Hero7({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero7Defaults.badge,
    title = hero7Defaults.title,
    description = hero7Defaults.description,
    primaryCta = hero7Defaults.primaryCta,
    secondaryCta = hero7Defaults.secondaryCta,
    carouselImages = hero7Defaults.carouselImages,
    stats = hero7Defaults.stats,
    borderBeamConfig = hero7Defaults.borderBeamConfig,
  } = content as typeof hero7Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Gradient Background */}
      <div className="from-brand/5 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-br" />

      {/* Content */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
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

            {/* Stats Row with BorderBeam */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-muted relative overflow-hidden rounded-xl p-4 text-center"
                >
                  <BorderBeam
                    colorFrom={borderBeamConfig.colorFrom}
                    colorTo={borderBeamConfig.colorTo}
                    duration={borderBeamConfig.duration}
                    size={borderBeamConfig.size}
                    delay={i * 2}
                  />
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

          {/* Right: Card Swipe Carousel */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative">
              <Carousel_002
                images={carouselImages}
                loop={true}
                showPagination={false}
                showNavigation={false}
                autoplay={false}
                spaceBetween={40}
                className="max-w-[300px]"
              />
              {/* Neon glow effect behind carousel */}
              <div className="bg-brand/20 pointer-events-none absolute inset-0 -z-10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero7 as HeroFitnessCarousel }
