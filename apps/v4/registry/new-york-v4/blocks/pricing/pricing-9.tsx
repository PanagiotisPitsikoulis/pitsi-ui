"use client"

import { useState } from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Switch } from "@/registry/new-york-v4/ui/switch"

interface PricingBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    plans?: Array<{
      name: string
      icon: string
      monthlyPrice: number
      yearlyPrice: number
      description: string
      features: string[]
      highlighted?: boolean
      cta: { label: string; href: string }
    }>
    yearlySavings?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
    grid?: string
  }
}

const pricing9Defaults = {
  badge: "Travel Packages",
  title: "Choose Your Adventure",
  description:
    "From budget-friendly getaways to all-inclusive luxury, find the perfect travel package for your next journey.",
  yearlySavings: "Save 20%",
  plans: [
    {
      name: "Explorer",
      icon: "Compass",
      monthlyPrice: 199,
      yearlyPrice: 1910,
      description: "Perfect for solo adventurers",
      features: [
        "3-star accommodation",
        "Airport transfers",
        "Basic travel insurance",
        "City walking tours",
        "24/7 travel support",
      ],
      cta: { label: "Book Explorer", href: "#" },
    },
    {
      name: "Voyager",
      icon: "Plane",
      monthlyPrice: 399,
      yearlyPrice: 3830,
      description: "Ideal for couples & friends",
      features: [
        "4-star boutique hotels",
        "Private airport transfers",
        "Comprehensive travel insurance",
        "Guided excursions included",
        "Local dining experiences",
        "Priority 24/7 support",
      ],
      highlighted: true,
      cta: { label: "Book Voyager", href: "#" },
    },
    {
      name: "Luxe",
      icon: "Crown",
      monthlyPrice: 799,
      yearlyPrice: 7670,
      description: "Ultimate travel experience",
      features: [
        "5-star luxury resorts",
        "Chauffeur service",
        "Premium travel insurance",
        "Private guided tours",
        "Fine dining reservations",
        "Spa & wellness access",
        "Dedicated travel concierge",
      ],
      cta: { label: "Book Luxe", href: "#" },
    },
  ],
}

export function Pricing9({ content = {}, classNames = {} }: PricingBlockProps) {
  const [isYearly, setIsYearly] = useState(false)

  const {
    badge = pricing9Defaults.badge,
    title = pricing9Defaults.title,
    description = pricing9Defaults.description,
    plans = pricing9Defaults.plans,
    yearlySavings = pricing9Defaults.yearlySavings,
  } = content

  return (
    <section className={cn("bg-background py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        {/* Toggle */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !isYearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Per Trip
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              isYearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Annual Pass
          </span>
          {isYearly && (
            <span className="bg-brand text-brand-foreground rounded-full px-3 py-1 text-xs font-semibold">
              {yearlySavings}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div
          className={cn(
            "mx-auto grid max-w-6xl gap-8 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {plans.map((plan, i) => (
            <SlideUp key={i} delay={i * 0.1} scrollBased={false}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  plan.highlighted
                    ? "bg-brand text-brand-foreground shadow-brand/25 shadow-2xl"
                    : "border-border bg-card border"
                )}
              >
                {plan.highlighted && (
                  <span className="bg-background text-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold shadow-lg">
                    Most Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={cn(
                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl",
                    plan.highlighted ? "bg-brand-foreground/20" : "bg-brand/10"
                  )}
                >
                  <DynamicIcon
                    name={plan.icon}
                    className={cn(
                      "h-7 w-7",
                      plan.highlighted ? "text-brand-foreground" : "text-brand"
                    )}
                  />
                </div>

                {/* Header */}
                <h3
                  className={cn(
                    "text-2xl font-bold",
                    !plan.highlighted && "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.highlighted
                      ? "text-brand-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="my-6">
                  <span
                    className={cn(
                      "text-5xl font-bold tracking-tight",
                      !plan.highlighted && "text-foreground"
                    )}
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span
                    className={cn(
                      "ml-2",
                      plan.highlighted
                        ? "text-brand-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {isYearly ? "/year" : "/trip"}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <DynamicIcon
                        name="Check"
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          plan.highlighted
                            ? "text-brand-foreground"
                            : "text-brand"
                        )}
                      />
                      <span
                        className={cn(
                          plan.highlighted
                            ? "text-brand-foreground/90"
                            : "text-foreground"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  className={cn(
                    "w-full rounded-full",
                    plan.highlighted &&
                      "bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                  )}
                  variant={plan.highlighted ? "secondary" : "default"}
                  asChild
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-muted-foreground mt-12 text-center text-sm">
          All packages include flexible booking. Cancel up to 48 hours before
          departure for a full refund.
        </p>
      </div>
    </section>
  )
}
