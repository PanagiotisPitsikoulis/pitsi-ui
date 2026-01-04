"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 19 defaults - Travel theme (4-column with stat cards)
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
  image: {
    src: "/elements/subject/travel/6.webp",
    alt: "Adventure destination",
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
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Secure" },
    { value: "Free", label: "Cancellation" },
  ],
}

export function Hero19({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero19Defaults.badge,
    title = hero19Defaults.title,
    description = hero19Defaults.description,
    primaryCta = hero19Defaults.primaryCta,
    secondaryCta = hero19Defaults.secondaryCta,
    image = hero19Defaults.image,
    nav = hero19Defaults.nav,
    stats = hero19Defaults.stats,
  } = content as typeof hero19Defaults

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

      {/* Bento Grid with Stats Feature */}
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full gap-4 lg:grid-cols-4 lg:grid-rows-[auto_1fr]">
          {/* Title Card - Spans 2 columns */}
          <div className="bg-muted flex flex-col justify-center rounded-3xl p-8 lg:col-span-2 lg:p-10">
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
                "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl",
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
          </div>

          {/* Stats Cards - Individual cards for each stat */}
          {stats.slice(0, 2).map((stat, i) => (
            <div
              key={i}
              className="bg-muted flex flex-col items-center justify-center rounded-3xl p-6 text-center"
            >
              <div className="display text-4xl font-bold md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}

          {/* Description + Buttons Card */}
          <div className="bg-muted flex flex-col justify-between rounded-3xl p-8">
            {description && (
              <p
                className={cn(
                  "text-muted-foreground text-base md:text-lg",
                  classNames.header?.description
                )}
              >
                {description}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-3">
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

          {/* Third Stat Card */}
          {stats[2] && (
            <div className="bg-muted flex flex-col items-center justify-center rounded-3xl p-6 text-center">
              <div className="display text-4xl font-bold md:text-5xl">
                {stats[2].value}
              </div>
              <div className="text-muted-foreground mt-2 text-sm font-medium">
                {stats[2].label}
              </div>
            </div>
          )}

          {/* Image Card - Spans 2 columns */}
          <div className="bg-muted relative min-h-[20rem] overflow-hidden rounded-3xl lg:col-span-2">
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
