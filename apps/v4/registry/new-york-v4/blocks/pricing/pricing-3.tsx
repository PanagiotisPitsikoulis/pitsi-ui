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
      name: string
      price: string
      period: string
      description: string
      highlighted?: boolean
      cta: { label: string; href: string }
    }>
    features?: Array<{
      name: string
      tiers: Array<boolean | string>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const pricing3Defaults = {
  title: "Compare Plans",
  description: "Choose the perfect plan for your needs.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "For individuals getting started",
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      highlighted: true,
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      cta: { label: "Contact Sales", href: "#" },
    },
  ],
  features: [
    { name: "Users", tiers: ["1", "Up to 10", "Unlimited"] },
    { name: "Storage", tiers: ["5 GB", "100 GB", "Unlimited"] },
    { name: "API Access", tiers: [false, true, true] },
    { name: "Advanced Analytics", tiers: [false, true, true] },
    { name: "Custom Integrations", tiers: [false, false, true] },
    { name: "Dedicated Support", tiers: [false, false, true] },
    { name: "SLA", tiers: [false, false, true] },
    { name: "Custom Branding", tiers: [false, true, true] },
  ],
}

export function Pricing3({ content = {}, classNames = {} }: PricingBlockProps) {
  const {
    title = pricing3Defaults.title,
    description = pricing3Defaults.description,
    plans = pricing3Defaults.plans,
    features = pricing3Defaults.features,
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

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            {/* Header */}
            <thead>
              <tr>
                <th className="w-1/4 p-4 text-left"></th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className={cn(
                      "w-1/4 p-4 text-center",
                      plan.highlighted && "bg-primary/5 rounded-t-xl"
                    )}
                  >
                    {plan.highlighted && (
                      <span className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-foreground text-xl font-bold">
                      {plan.name}
                    </h3>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      <span className="text-foreground text-3xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {plan.description}
                    </p>
                    <Button
                      className="mt-4 w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features */}
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-border border-t">
                  <td className="text-foreground p-4 font-medium">
                    {feature.name}
                  </td>
                  {feature.tiers.map((value, j) => (
                    <td
                      key={j}
                      className={cn(
                        "p-4 text-center",
                        plans[j]?.highlighted && "bg-primary/5"
                      )}
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <DynamicIcon
                            name="Check"
                            className="text-primary mx-auto h-5 w-5"
                          />
                        ) : (
                          <DynamicIcon
                            name="X"
                            className="text-muted-foreground/50 mx-auto h-5 w-5"
                          />
                        )
                      ) : (
                        <span className="text-foreground">{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
