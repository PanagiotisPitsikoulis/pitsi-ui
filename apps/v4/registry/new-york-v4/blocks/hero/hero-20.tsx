"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 20 - Full-Bleed Background + Elegant Content Card (Boat theme)
// Uses ScrollFade for elegant luxury reveal animation
const hero20Defaults = {
  badge: "Luxury Charters",
  title: "Sail Into\nLuxury",
  description:
    "Premium yacht experiences. Professional crew. Crystal waters await.",
  primaryCta: { label: "View Fleet", href: "#" },
  secondaryCta: {
    label: "Charter Info",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/landscape/sea/6.webp",
    alt: "Luxury yacht on ocean",
  },
  features: [
    { icon: "anchor", label: "Premium Fleet" },
    { icon: "compass", label: "Expert Navigation" },
    { icon: "star", label: "5-Star Service" },
  ],
}

export function Hero20({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero20Defaults.badge,
    title = hero20Defaults.title,
    description = hero20Defaults.description,
    primaryCta = hero20Defaults.primaryCta,
    secondaryCta = hero20Defaults.secondaryCta,
    backgroundImage = hero20Defaults.backgroundImage,
    features = hero20Defaults.features,
  } = content as typeof hero20Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Full-bleed background image with parallax scroll effect */}
      <ParallaxImage
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        className="absolute inset-0"
        range={["-10%", "10%"]}
        offset={["start start", "end start"]}
        scrollBased={true}
      >
        {/* Gradient overlay for text readability - no blur, solid gradient */}
        <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      </ParallaxImage>

      {/* Content container */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        {/* Solid content card - no glassmorphism */}
        <ScrollFade scrollBased={true} duration={0.8}>
          <div className="bg-background border-border/50 max-w-xl rounded-3xl border p-8 shadow-2xl md:p-12">
            <HeroText
              badge={badge}
              title={title}
              description={description}
              size="large"
              classNames={classNames.header}
            />

            {/* Feature highlights */}
            {features && features.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {features.map((feature, i) => (
                  <ScrollFade
                    key={i}
                    scrollBased={false}
                    delay={0.2 + i * 0.1}
                    duration={0.6}
                  >
                    <div className="bg-muted text-muted-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                      <span className="text-brand">
                        {feature.icon === "anchor" && (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8V4m0 4a2 2 0 100-4 2 2 0 000 4zm0 0v12m-6-6a6 6 0 0112 0"
                            />
                          </svg>
                        )}
                        {feature.icon === "compass" && (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0l3 8-8-3 5-5z"
                            />
                          </svg>
                        )}
                        {feature.icon === "star" && (
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        )}
                      </span>
                      {feature.label}
                    </div>
                  </ScrollFade>
                ))}
              </div>
            )}

            {/* Buttons */}
            <ScrollFade scrollBased={false} delay={0.5} duration={0.6}>
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
            </ScrollFade>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero20 as HeroBoatLuxury }
