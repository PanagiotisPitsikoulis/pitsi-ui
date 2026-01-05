"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 19 - Sidebar Navigation Style (Travel theme)
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
    src: "/elements/landscape/sea/5.webp",
    alt: "Adventure destination",
  },
  navItems: [
    { label: "Beaches", active: true },
    { label: "Mountains", active: false },
    { label: "Cities", active: false },
    { label: "Islands", active: false },
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
    navItems = hero19Defaults.navItems,
  } = content as typeof hero19Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-4 lg:grid-cols-[auto_1fr]">
          {/* Left - Vertical Navigation Sidebar */}
          <div className="bg-muted flex flex-row gap-2 rounded-3xl p-4 lg:w-20 lg:flex-col lg:items-center lg:py-8">
            {navItems.map((item, i) => (
              <button
                key={i}
                className={cn(
                  "flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-colors lg:w-full lg:flex-none lg:py-4",
                  item.active
                    ? "bg-brand text-brand-foreground"
                    : "hover:bg-muted-foreground/10 text-muted-foreground"
                )}
              >
                <span className="lg:hidden">{item.label}</span>
                <span className="hidden lg:block lg:[text-orientation:mixed] lg:[writing-mode:vertical-lr]">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right - Main Content Area */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Text Content */}
            <div className="bg-muted flex flex-col justify-center rounded-3xl p-8 lg:p-10">
              {badge && (
                <p
                  className={cn(
                    "text-brand mb-4 text-sm font-semibold tracking-widest uppercase",
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

              {description && (
                <p
                  className={cn(
                    "text-muted-foreground mt-6 text-lg",
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

            {/* Image */}
            <div className="bg-muted relative min-h-[25rem] overflow-hidden rounded-3xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
