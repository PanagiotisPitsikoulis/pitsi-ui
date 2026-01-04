"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 7 defaults - Fitness/Elite Training theme
const hero7Defaults = {
  badge: "Elite Training",
  title: "Push Beyond\nYour Limits",
  description:
    "World-class coaching. Cutting-edge facilities.\nTransform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/gym/3.webp",
    alt: "Intense fitness training session",
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

export function Hero7({ content = {}, classNames = {} }: HeroBlockProps) {
  // Merge content with defaults
  const {
    title = hero7Defaults.title,
    description = hero7Defaults.description,
    primaryCta = hero7Defaults.primaryCta,
    secondaryCta = hero7Defaults.secondaryCta,
    image = hero7Defaults.image,
    nav = hero7Defaults.nav,
  } = content as typeof hero7Defaults

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

      {/* Bento Grid Layout */}
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full gap-4 lg:grid-cols-2">
          {/* Left Column - Text + Buttons Cards */}
          <div className="flex flex-col gap-4">
            {/* Text Card */}
            <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-10">
              {/* Main headline */}
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

              {/* Subheading */}
              {description && (
                <p
                  className={cn(
                    "text-muted-foreground mt-6 text-lg md:text-xl",
                    classNames.header?.description
                  )}
                >
                  {description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < description.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
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

          {/* Right Card - Image */}
          <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl lg:min-h-[35rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="mt-10 object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
