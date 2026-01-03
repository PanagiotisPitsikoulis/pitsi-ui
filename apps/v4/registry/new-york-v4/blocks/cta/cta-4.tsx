"use client"

import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta4Defaults = {
  icon: "Sparkles",
  title: "Ready to Get Started?",
  description:
    "Join over 10,000 satisfied customers who trust us with their business. No credit card required to start.",
  primaryCta: { label: "Start Free Trial", href: "#" },
  secondaryCta: { label: "Contact Sales", href: "#" },
}

export function Cta4({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta4Defaults.title,
    description = cta4Defaults.description,
    primaryCta = cta4Defaults.primaryCta,
    secondaryCta = cta4Defaults.secondaryCta,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto max-w-2xl">
          <div
            className={cn(
              "border-border bg-card rounded-3xl border p-8 text-center shadow-lg md:p-12",
              classNames.content
            )}
          >
            {/* Icon */}
            <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
              <DynamicIcon name="Sparkles" className="text-primary h-8 w-8" />
            </div>

            {/* Title */}
            <h2
              className={cn(
                "text-foreground mb-4 text-2xl font-bold md:text-3xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className={cn(
                "text-muted-foreground mx-auto mb-8 max-w-md",
                classNames.header?.description
              )}
            >
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Button size="lg" className="group w-full sm:w-auto" asChild>
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <DynamicIcon
                      name="ArrowRight"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>

            {/* Trust badges */}
            <div className="text-muted-foreground mt-8 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                SSL Secured
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No spam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
