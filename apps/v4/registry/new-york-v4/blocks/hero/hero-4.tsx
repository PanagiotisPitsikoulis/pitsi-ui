"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 4 defaults - Fitness/Personal Training theme
const hero4Defaults = {
  badge: "Transform Your Body",
  title: "Unlock Your\nFull Potential",
  description:
    "Personalized training programs. Expert guidance. Results that last a lifetime.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/gym/3.webp",
    alt: "Personal trainer in action",
  },
  nav: {
    logo: "ELITE",
    links: [
      { label: "Programs", href: "#" },
      { label: "Trainers", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "About", href: "#" },
    ],
  },
}

export function Hero4({ content = {}, classNames = {} }: HeroBlockProps) {
  // Merge content with defaults
  const {
    badge = hero4Defaults.badge,
    title = hero4Defaults.title,
    description = hero4Defaults.description,
    primaryCta = hero4Defaults.primaryCta,
    secondaryCta = hero4Defaults.secondaryCta,
    image = hero4Defaults.image,
    nav = hero4Defaults.nav,
  } = content as typeof hero4Defaults

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
          <HeroButton>Get Started</HeroButton>
        </nav>
      </div>

      {/* Full-width Bento Layout */}
      <div className="container flex-1 px-4 py-6">
        <div className="bg-muted relative flex h-full min-h-[35rem] flex-col overflow-hidden rounded-3xl lg:flex-row">
          {/* Content Side */}
          <div className="relative z-10 flex flex-1 flex-col justify-center p-8 lg:w-1/2 lg:p-12">
            {/* Badge */}
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

            {/* Main headline */}
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

            {/* Subheading */}
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
                  className={cn(
                    "dark text-foreground",
                    classNames.cta?.secondary
                  )}
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

// Re-export for backwards compatibility
export { Hero4 as HeroFitnessSplit }
