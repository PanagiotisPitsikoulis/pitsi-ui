"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import {
  SmoothParallaxContainer,
  SmoothParallaxLayer,
} from "@/registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll"
import { TextGradientOpacity } from "@/registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 17 - Smooth Parallax with Text Gradient Opacity (Travel narrative theme)
const hero17Defaults = {
  badge: "Adventure Awaits",
  title: "Take Flight\nTo Paradise",
  description:
    "Exclusive destinations and curated experiences. Your dream vacation is just a flight away.",
  narrativeText:
    "Discover breathtaking landscapes, immerse yourself in new cultures, and create memories that last a lifetime. Every journey begins with a single step.",
  primaryCta: { label: "Book Now", href: "#" },
  secondaryCta: {
    label: "Explore Destinations",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/elements/landscape/sea/4.webp",
    alt: "Beautiful ocean destination",
  },
  flyingPlanes: [
    {
      src: "/elements/subject/plane/1.webp",
      alt: "Airplane",
      position: { top: "10%", right: "15%" },
      size: 180,
      rotation: -5,
    },
    {
      src: "/elements/subject/plane/2.webp",
      alt: "Plane",
      position: { top: "25%", left: "10%" },
      size: 120,
      rotation: 8,
    },
    {
      src: "/elements/subject/plane/3.webp",
      alt: "Aircraft",
      position: { bottom: "30%", right: "8%" },
      size: 100,
      rotation: -12,
    },
  ],
  destinations: [
    { name: "Maldives", image: "/elements/landscape/sea/1.webp" },
    { name: "Bali", image: "/elements/landscape/sea/5.webp" },
    { name: "Santorini", image: "/elements/landscape/sea/3.webp" },
  ],
}

export function Hero17({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero17Defaults.badge,
    title = hero17Defaults.title,
    description = hero17Defaults.description,
    narrativeText = hero17Defaults.narrativeText,
    primaryCta = hero17Defaults.primaryCta,
    secondaryCta = hero17Defaults.secondaryCta,
    backgroundImage = hero17Defaults.backgroundImage,
    flyingPlanes = hero17Defaults.flyingPlanes,
    destinations = hero17Defaults.destinations,
  } = content as typeof hero17Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Background Landscape Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="from-background via-background/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Flying Plane Subjects with Parallax */}
      <SmoothParallaxContainer
        height="100%"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {flyingPlanes.map((plane, i) => (
          <SmoothParallaxLayer
            key={i}
            yRange={[-(i + 1) * 50, (i + 1) * 30]}
            zIndex={10 + i}
            className="absolute"
          >
            <div
              className="transition-transform duration-700"
              style={{
                ...plane.position,
                position: "absolute",
                width: plane.size,
                height: plane.size,
                transform: `rotate(${plane.rotation}deg)`,
              }}
            >
              <Image
                src={plane.src}
                alt={plane.alt}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </SmoothParallaxLayer>
        ))}
      </SmoothParallaxContainer>

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

          {/* Narrative Text with Gradient Opacity */}
          <div className="mt-8">
            <TextGradientOpacity
              text={narrativeText}
              className="text-muted-foreground max-w-md text-lg"
              offset={["start 0.95", "start 0.6"]}
            />
          </div>

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

          {/* Destination Preview Cards */}
          <div className="mt-12">
            <p className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
              Popular Destinations
            </p>
            <div className="flex gap-3">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="group relative h-20 w-20 cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-105"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2">
                    <span className="text-xs font-medium text-white">
                      {dest.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Show planes in a floating row */}
      <div className="relative z-10 flex justify-center gap-4 px-4 pb-8 lg:hidden">
        {flyingPlanes.slice(0, 2).map((plane, i) => (
          <div
            key={i}
            className="relative h-16 w-24"
            style={{ transform: `rotate(${plane.rotation / 2}deg)` }}
          >
            <Image
              src={plane.src}
              alt={plane.alt}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// Backward compatibility export
export { Hero17 as HeroTravelNarrative }
