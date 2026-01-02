"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Switch } from "@/registry/new-york-v4/ui/switch"

interface PricingBlockProps {
  content?: {
    title?: string
    description?: string
    plans?: Array<{
      name: string
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
    header?: { title?: string; description?: string }
  }
}

const pricing4Defaults = {
  title: "Simple, Transparent Pricing",
  description: "No hidden fees. Cancel anytime.",
  yearlySavings: "Save 20%",
  plans: [
    {
      name: "Starter",
      monthlyPrice: 9,
      yearlyPrice: 86,
      description: "Perfect for side projects",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Email support",
        "1 GB storage",
      ],
      cta: { label: "Start Free Trial", href: "#" },
    },
    {
      name: "Professional",
      monthlyPrice: 29,
      yearlyPrice: 278,
      description: "For growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50 GB storage",
        "Custom domain",
        "API access",
      ],
      highlighted: true,
      cta: { label: "Start Free Trial", href: "#" },
    },
    {
      name: "Team",
      monthlyPrice: 79,
      yearlyPrice: 758,
      description: "For collaborative teams",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Audit logs",
        "500 GB storage",
        "SSO integration",
        "Dedicated account manager",
      ],
      cta: { label: "Start Free Trial", href: "#" },
    },
  ],
}

export function Pricing4({ content = {}, classNames = {} }: PricingBlockProps) {
  const [isYearly, setIsYearly] = useState(false)

  const {
    title = pricing4Defaults.title,
    description = pricing4Defaults.description,
    plans = pricing4Defaults.plans,
    yearlySavings = pricing4Defaults.yearlySavings,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mb-8",
              classNames.header?.description
            )}
          >
            {description}
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm font-medium",
                !isYearly ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={cn(
                "text-sm font-medium",
                isYearly ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Yearly
            </span>
            {isYearly && (
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                {yearlySavings}
              </span>
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col rounded-2xl p-8",
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl"
                  : "bg-background border-border border"
              )}
            >
              {plan.highlighted && (
                <span className="bg-background text-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <h3
                className={cn(
                  "text-xl font-semibold",
                  !plan.highlighted && "text-foreground"
                )}
              >
                {plan.name}
              </h3>

              <div className="my-4">
                <span
                  className={cn(
                    "text-4xl font-bold",
                    !plan.highlighted && "text-foreground"
                  )}
                >
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span
                  className={cn(
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              <p
                className={cn(
                  "mb-6 text-sm",
                  plan.highlighted
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                )}
              >
                {plan.description}
              </p>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check
                      className={cn(
                        "h-5 w-5 shrink-0",
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-primary"
                      )}
                    />
                    <span
                      className={!plan.highlighted ? "text-foreground" : ""}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.highlighted ? "secondary" : "default"}
                asChild
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
