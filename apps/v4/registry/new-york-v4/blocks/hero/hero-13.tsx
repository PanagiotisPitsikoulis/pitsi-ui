"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 13 defaults - Plants/Garden theme (3-column asymmetric)
const hero13Defaults = {
  badge: "Premium Plants",
  title: "Living Art\nFor Your Home",
  description:
    "Transform any space with our curated selection of statement plants.",
  primaryCta: { label: "Shop Now", href: "#" },
  secondaryCta: {
    label: "View Gallery",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/elements/subject/plants/4.webp",
    alt: "Statement plants",
  },
  secondaryImage: {
    src: "/elements/subject/plants/5.webp",
    alt: "Plant styling",
  },
  nav: {
    logo: "BLOOM",
    links: [
      { label: "Plants", href: "#" },
      { label: "Care", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
}

export function Hero13({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    title = hero13Defaults.title,
    description = hero13Defaults.description,
    primaryCta = hero13Defaults.primaryCta,
    secondaryCta = hero13Defaults.secondaryCta,
    image = hero13Defaults.image,
    secondaryImage = hero13Defaults.secondaryImage,
    nav = hero13Defaults.nav,
  } = content as typeof hero13Defaults

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
          <HeroButton>Shop Now</HeroButton>
        </nav>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full gap-4 lg:grid-cols-3 lg:grid-rows-[1fr_auto]">
          {/* Title Card - Spans 2 columns */}
          <div className="bg-muted flex flex-col justify-center rounded-3xl p-10 lg:col-span-2">
            <h1
              className={cn(
                "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-7xl",
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

          {/* Small Image Card */}
          <div className="bg-muted relative min-h-[15rem] overflow-hidden rounded-3xl">
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

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

          {/* Main Image Card - Spans 2 columns */}
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
