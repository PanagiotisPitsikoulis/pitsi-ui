"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type PricingBlockProps } from "@/lib/blocks/pricing.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const pricing8Defaults = {
  badge: "Pricing",
  title: "Simple, transparent pricing",
  description: "Choose the plan that works for you",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal projects and learning",
      features: [
        "All open source components",
        "Copy & paste code",
        "Community support",
        "MIT License",
      ],
      cta: { label: "Get Started", href: "/docs" },
    },
    {
      name: "Pro",
      price: "$49",
      period: "one-time",
      description: "For professional developers and teams",
      features: [
        "Everything in Free",
        "Premium components",
        "Blocks & templates",
        "Priority support",
        "Figma files",
        "Lifetime updates",
      ],
      cta: { label: "Buy Now", href: "/pro" },
      highlighted: true,
    },
  ],
}

export function Pricing8({ content = {}, classNames = {} }: PricingBlockProps) {
  const {
    badge = pricing8Defaults.badge,
    title = pricing8Defaults.title,
    description = pricing8Defaults.description,
    plans = pricing8Defaults.plans,
  } = content as typeof pricing8Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div
          className={cn(
            "mx-auto mb-16 max-w-2xl text-center",
            classNames.header?.root
          )}
        >
          {badge && (
            <p
              className={cn(
                "text-brand mb-4 text-sm font-medium tracking-wider uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mt-4 text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Pricing cards */}
        <div
          className={cn(
            "mx-auto grid max-w-4xl gap-8 md:grid-cols-2",
            classNames.grid
          )}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "border-border relative rounded-2xl border p-8",
                plan.highlighted && "border-brand bg-brand/5",
                classNames.plan?.root
              )}
            >
              {plan.highlighted && (
                <div className="bg-brand text-brand-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className={cn("mb-6", classNames.plan?.header)}>
                <h3
                  className={cn(
                    "text-foreground text-xl font-semibold",
                    classNames.plan?.name
                  )}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-foreground text-4xl font-bold",
                      classNames.plan?.price
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-muted-foreground text-sm",
                      classNames.plan?.period
                    )}
                  >
                    /{plan.period}
                  </span>
                </div>
                {plan.description && (
                  <p
                    className={cn(
                      "text-muted-foreground mt-2 text-sm",
                      classNames.plan?.description
                    )}
                  >
                    {plan.description}
                  </p>
                )}
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2">
                    <DynamicIcon
                      name="Tick02Icon"
                      className="text-brand mt-0.5 h-5 w-5 shrink-0"
                    />
                    <span
                      className={cn(
                        "text-foreground text-sm",
                        classNames.plan?.feature
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
