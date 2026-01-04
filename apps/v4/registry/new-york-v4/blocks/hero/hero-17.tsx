"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 17 defaults - Travel theme (Reversed with stats)
const hero17Defaults = {
  badge: "Trusted Travelers",
  title: "Journey\nBeyond",
  description:
    "Exclusive destinations and curated experiences from around the globe.",
  primaryCta: { label: "Explore", href: "#" },
  secondaryCta: {
    label: "Our Story",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/travel/3.webp",
    alt: "Exotic travel location",
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
  stats: [
    { value: "150+", label: "Destinations" },
    { value: "50k+", label: "Happy Travelers" },
    { value: "99%", label: "Satisfaction" },
  ],
}

export function Hero17({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    title = hero17Defaults.title,
    description = hero17Defaults.description,
    primaryCta = hero17Defaults.primaryCta,
    secondaryCta = hero17Defaults.secondaryCta,
    image = hero17Defaults.image,
    nav = hero17Defaults.nav,
    stats = hero17Defaults.stats,
  } = content as typeof hero17Defaults

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

      {/* Bento Grid Layout - Reversed */}
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full gap-4 lg:grid-cols-5">
          {/* Left Card - Image (wider) */}
          <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl lg:col-span-3 lg:min-h-[35rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="mt-10 object-cover object-top"
              priority
            />
          </div>

          {/* Right Column - Text + Stats + Buttons */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Text Card */}
            <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-8">
              <h1
                className={cn(
                  "display text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl",
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
                    "text-muted-foreground mt-4 text-base md:text-lg",
                    classNames.header?.description
                  )}
                >
                  {description}
                </p>
              )}
            </div>

            {/* Stats Card */}
            <div className="bg-muted flex items-center justify-between rounded-3xl p-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="display text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons Card */}
            <div className="bg-muted flex items-center gap-3 rounded-3xl p-6">
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
        </div>
      </div>
    </section>
  )
}
