"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { ButtonNeobrutalist } from "@/registry/new-york-v4/ui/button-neobrutalist"
import { HeroButtonNeobrutalist } from "@/registry/new-york-v4/ui/hero-button-neobrutalist"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { HeroButton } from "../../ui/hero-button"

// Hero 5 defaults - Fitness/Elite Training theme
const hero5Defaults = {
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

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  // Merge content with defaults
  const {
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    image = hero5Defaults.image,
    nav = hero5Defaults.nav,
  } = content as typeof hero5Defaults

  return (
    <section
      className={cn(
        "relative min-h-[100svh] overflow-hidden lg:max-h-[100svh]",
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

      <Spacer size={"lg"} />

      <div className="container px-4">
        <div className="bg-muted flex items-end justify-center gap-10 rounded-3xl p-10">
          {/* Main headline */}
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

          {/* Subheading */}
          {description && (
            <p
              className={cn(
                "mt-8 text-lg md:text-2xl",
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

          {/* Buttons */}
          <div
            className={cn(
              "relative z-10 mt-10 flex flex-row gap-3",
              classNames.cta?.root
            )}
          >
            {primaryCta && (
              <Link href={primaryCta.href} className={classNames.cta?.primary}>
                <HeroButtonNeobrutalist>
                  {primaryCta.label}
                </HeroButtonNeobrutalist>
              </Link>
            )}
            {secondaryCta && (
              <ButtonNeobrutalist
                variant="outline"
                size="lg"
                className={cn("dark", classNames.cta?.secondary)}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </ButtonNeobrutalist>
            )}
          </div>
        </div>
      </div>

      <Spacer size={"lg"} />

      {/* Hero Image - Below text */}
      <div className="container px-4">
        <div className="bg-muted relative aspect-[16/9] w-full overflow-visible rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top lg:-mt-32"
            priority
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
