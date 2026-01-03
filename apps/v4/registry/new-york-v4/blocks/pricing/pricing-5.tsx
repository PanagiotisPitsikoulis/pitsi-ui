"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingBlockProps {
  content?: {
    title?: string
    description?: string
    standard?: {
      name: string
      price: string
      period: string
      description: string
      features: string[]
      cta: { label: string; href: string }
    }
    enterprise?: {
      name: string
      description: string
      features: string[]
      cta: { label: string; href: string }
    }
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const pricing5Defaults = {
  title: "Choose Your Plan",
  description:
    "Start with our standard plan or contact us for enterprise needs.",
  standard: {
    name: "Standard",
    price: "$49",
    period: "/month",
    description: "Everything you need to get started",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority email support",
      "100 GB storage",
      "Custom domains",
      "API access",
      "Team collaboration",
      "Basic integrations",
    ],
    cta: { label: "Get Started", href: "#" },
  },
  enterprise: {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited storage",
      "Custom integrations",
      "On-premise deployment",
      "SLA guarantee",
      "Security audit",
      "Training sessions",
      "Custom contracts",
    ],
    cta: { label: "Contact Sales", href: "#" },
  },
}

export function Pricing5({ content = {}, classNames = {} }: PricingBlockProps) {
  const {
    title = pricing5Defaults.title,
    description = pricing5Defaults.description,
    standard = pricing5Defaults.standard,
    enterprise = pricing5Defaults.enterprise,
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

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Standard Plan */}
          <div className="border-border flex flex-col rounded-2xl border p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                <DynamicIcon name="Sparkles" className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-foreground text-xl font-semibold">
                  {standard.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {standard.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-foreground text-5xl font-bold">
                {standard.price}
              </span>
              <span className="text-muted-foreground">{standard.period}</span>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {standard.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-foreground flex items-center gap-3 text-sm"
                >
                  <DynamicIcon
                    name="Check"
                    className="text-primary h-5 w-5 shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button className="w-full" asChild>
              <Link href={standard.cta.href}>{standard.cta.label}</Link>
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-foreground text-background flex flex-col rounded-2xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-background/10 flex h-12 w-12 items-center justify-center rounded-full">
                <DynamicIcon
                  name="Building2"
                  className="text-background h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{enterprise.name}</h3>
                <p className="text-background/70 text-sm">
                  {enterprise.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold">Custom Pricing</span>
              <p className="text-background/70 mt-1 text-sm">
                Tailored to your organization&apos;s needs
              </p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {enterprise.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <DynamicIcon
                    name="Check"
                    className="text-background h-5 w-5 shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="secondary" className="w-full" asChild>
              <Link href={enterprise.cta.href}>{enterprise.cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
