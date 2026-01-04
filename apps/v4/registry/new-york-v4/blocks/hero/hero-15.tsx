"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 15 defaults - Travel theme (Split layout)
const hero15Defaults = {
  badge: "Travel Experts",
  title: "Explore The\nWorld",
  description:
    "Curated travel experiences. Expert guides. Unforgettable adventures await.",
  primaryCta: { label: "Plan Trip", href: "#" },
  secondaryCta: {
    label: "Destinations",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/travel/1.webp",
    alt: "Beautiful travel destination",
  },
  nav: {
    logo: "VOYAGE",
    links: [
      { label: "Destinations", href: "#" },
      { label: "Tours", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
}

export function Hero15({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero15Defaults.badge,
    title = hero15Defaults.title,
    description = hero15Defaults.description,
    primaryCta = hero15Defaults.primaryCta,
    secondaryCta = hero15Defaults.secondaryCta,
    image = hero15Defaults.image,
    nav = hero15Defaults.nav,
  } = content as typeof hero15Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Pill Navbar */}
      <div className="container px-4 pt-6">
        <nav className="bg-muted flex items-center justify-between rounded-full px-4 py-2">
          <Link href="/" className="pl-2 text-lg font-bold tracking-tight">
            {nav.logo}
          </Link>
          <div className="flex items-center gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <HeroButton>Book Now</HeroButton>
        </nav>
      </div>

      {/* Full-width Bento Layout */}
      <div className="container flex-1 px-4 py-6">
        <div className="bg-muted relative flex h-full min-h-[35rem] flex-col overflow-hidden rounded-3xl lg:flex-row">
          {/* Content Side */}
          <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:w-1/2 lg:p-12">
            {badge && (
              <p
                className={cn(
                  "text-muted-foreground mb-4 text-sm font-medium tracking-widest uppercase",
                  classNames.header?.badge
                )}
              >
                {badge}
              </p>
            )}

            <h1
              className={cn(
                "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
                classNames.header?.title
              )}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {description && (
              <p
                className={cn(
                  "text-muted-foreground mt-6 text-lg md:text-xl",
                  classNames.header?.description
                )}
              >
                {description}
              </p>
            )}

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

          {/* Image Side */}
          <div className="relative min-h-[20rem] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
