"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingBlockProps {
  content?: {
    title?: string
    description?: string
    plans?: Array<{
      icon: string
      name: string
      price: string
      period: string
      description: string
      bestFor: string
      features: string[]
      highlighted?: boolean
      cta: { label: string; href: string }
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const pricing7Defaults = {
  title: "Pricing That Scales With You",
  description: "From startups to enterprises, we have a plan for everyone.",
  plans: [
    {
      icon: "Zap",
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "For individuals and small projects",
      bestFor: "Best for freelancers",
      features: [
        "5 projects",
        "10 GB storage",
        "Basic analytics",
        "Email support",
      ],
      cta: { label: "Get Started", href: "#" },
    },
    {
      icon: "Users",
      name: "Team",
      price: "$49",
      period: "/month",
      description: "For growing teams and businesses",
      bestFor: "Best for small teams",
      features: [
        "Unlimited projects",
        "100 GB storage",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "API access",
      ],
      highlighted: true,
      cta: { label: "Get Started", href: "#" },
    },
    {
      icon: "Building",
      name: "Business",
      price: "$149",
      period: "/month",
      description: "For larger organizations",
      bestFor: "Best for growing companies",
      features: [
        "Everything in Team",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Advanced security",
      ],
      cta: { label: "Get Started", href: "#" },
    },
  ],
}

export function Pricing7({ content = {}, classNames = {} }: PricingBlockProps) {
  const {
    title = pricing7Defaults.title,
    description = pricing7Defaults.description,
    plans = pricing7Defaults.plans,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
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
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:p-8",
                plan.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "border-border border"
              )}
            >
              {/* Icon & Info */}
              <div className="flex items-start gap-4 md:w-1/4">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    plan.highlighted ? "bg-primary-foreground/20" : "bg-muted"
                  )}
                >
                  <DynamicIcon
                    name={plan.icon}
                    className={cn(
                      "h-6 w-6",
                      plan.highlighted
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      !plan.highlighted && "text-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      plan.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="md:w-1/6">
                <span
                  className={cn(
                    "text-3xl font-bold",
                    !plan.highlighted && "text-foreground"
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    plan.highlighted
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    plan.highlighted
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.bestFor}
                </p>
              </div>

              {/* Features */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <DynamicIcon
                        name="Check"
                        className={cn(
                          "h-4 w-4",
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
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="md:w-40">
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "secondary" : "default"}
                  asChild
                >
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
