"use client"

import Link from "next/link"

import { type CTABlockProps } from "@/lib/blocks/cta.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

const cta7Defaults = {
  title: "Ready to build something beautiful?",
  description: "Start using our components today. Free and open source.",
  primaryCta: { label: "Get Started", href: "/docs" },
  secondaryCta: { label: "View on GitHub", href: "https://github.com" },
}

export function Cta7({ content = {}, classNames = {} }: CTABlockProps) {
  const {
    title = cta7Defaults.title,
    description = cta7Defaults.description,
    primaryCta = cta7Defaults.primaryCta,
    secondaryCta = cta7Defaults.secondaryCta,
  } = content as typeof cta7Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div
          className={cn(
            "bg-brand/5 border-brand/20 relative overflow-hidden rounded-3xl border px-6 py-16 text-center md:px-12 md:py-24",
            classNames.card
          )}
        >
          {/* Gradient decoration */}
          <div className="from-brand/20 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />

          <div className="relative z-10">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tight md:text-4xl",
                classNames.title
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "text-muted-foreground mx-auto mt-4 max-w-lg text-lg",
                  classNames.description
                )}
              >
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  )
}
