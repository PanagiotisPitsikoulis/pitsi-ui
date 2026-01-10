"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

const hero25Defaults = {
  badge: "Open Source",
  title: "Beautiful components\nbuilt with Radix UI\nand Tailwind CSS",
  description:
    "Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. Use them to build your own component library.",
  primaryCta: { label: "Get Started", href: "/docs" },
  secondaryCta: {
    label: "Components",
    href: "/docs/components",
    variant: "outline" as const,
  },
}

export function Hero25({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero25Defaults.badge,
    title = hero25Defaults.title,
    description = hero25Defaults.description,
    primaryCta = hero25Defaults.primaryCta,
    secondaryCta = hero25Defaults.secondaryCta,
  } = content as typeof hero25Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(80svh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-24",
        classNames.root
      )}
    >
      {/* Subtle gradient background */}
      <div className="from-brand/5 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-b" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-4xl text-center",
          classNames.container
        )}
      >
        <HeroText
          badge={badge}
          title={title}
          description={description}
          size="large"
          align="center"
          classNames={classNames.header}
        />

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {primaryCta && (
            <Link href={primaryCta.href}>
              <HeroButton>{primaryCta.label}</HeroButton>
            </Link>
          )}
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>

        {/* Code preview hint */}
        <div className="bg-muted/50 border-border mt-16 inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm">
          <span className="text-muted-foreground">$</span>
          <span>npx pitsi add button</span>
        </div>
      </div>
    </section>
  )
}
