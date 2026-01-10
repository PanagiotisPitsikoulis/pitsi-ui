"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

import { HeroButton } from "../../ui/hero-button"

// Hero 19 - Cards Parallax with Marquee (Travel discovery theme)
const hero19Defaults = {
  badge: "Trusted Agency",
  title: "Adventure\nAwaits You",
  description:
    "Every journey comes with expert guidance. We're committed to your experience.",
  primaryCta: { label: "Start Planning", href: "#" },
  secondaryCta: {
    label: "Our Promise",
    href: "#",
    variant: "outline" as const,
  },
  marqueeDestinations: [
    "Maldives",
    "Bali",
    "Santorini",
    "Paris",
    "Tokyo",
    "New York",
    "Dubai",
    "Sydney",
  ],
  cards: [
    {
      title: "Beaches",
      description: "Crystal clear waters and pristine sands",
      image: "/elements/landscape/sea/1.webp",
      backgroundColor: "hsl(200 80% 60%)", // Azure tone
    },
    {
      title: "Mountains",
      description: "Breathtaking peaks and alpine adventures",
      image: "/elements/landscape/sea/3.webp",
      backgroundColor: "hsl(210 70% 50%)",
    },
    {
      title: "Cities",
      description: "Vibrant culture and urban exploration",
      image: "/elements/landscape/plane/2.webp",
      backgroundColor: "hsl(220 60% 45%)",
    },
  ],
}

export function Hero19({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero19Defaults.badge,
    title = hero19Defaults.title,
    description = hero19Defaults.description,
    primaryCta = hero19Defaults.primaryCta,
    secondaryCta = hero19Defaults.secondaryCta,
    marqueeDestinations = hero19Defaults.marqueeDestinations,
    cards = hero19Defaults.cards,
  } = content as typeof hero19Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Marquee Banner at top */}
      <div className="bg-brand text-brand-foreground py-3">
        <Marquee pauseOnHover className="[--duration:30s]">
          {marqueeDestinations.map((dest, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-medium tracking-wider uppercase"
            >
              {dest}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-12rem)] gap-8 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center py-8 lg:py-12">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              classNames={classNames.header}
            />

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

          {/* Right - Stacked Cards with Parallax */}
          <div className="flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full max-w-md">
              <CardsParallaxContainer
                cardCount={cards.length}
                className="h-[500px]"
                scrollBased={false}
              >
                {cards.map((card, i) => (
                  <ParallaxCard
                    key={i}
                    index={i}
                    backgroundColor={card.backgroundColor}
                    className="!h-[280px] !w-full lg:!h-[320px]"
                    scrollBased={false}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-3xl">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      {/* Card content overlay - solid gradient, no glassmorphism */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                        <h3 className="text-xl font-bold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/80">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </ParallaxCard>
                ))}
              </CardsParallaxContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee - reverse direction */}
      <div className="bg-muted py-3">
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {marqueeDestinations.map((dest, i) => (
            <span
              key={i}
              className="text-muted-foreground mx-8 text-sm font-medium tracking-wider uppercase"
            >
              {dest}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Hero19 as HeroTravelDiscovery }
