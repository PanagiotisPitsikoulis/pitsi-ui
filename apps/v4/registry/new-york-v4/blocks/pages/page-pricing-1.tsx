"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Default pricing data
const pagePricing1Defaults = {
  hero: {
    title: "Simple Pricing\nFor Everyone",
    description:
      "Choose a plan that fits your needs.\nScale with your ambition.",
  },
  features: {
    free: [
      "Access to free components",
      "Basic documentation",
      "Community support",
      "CLI tool access",
    ],
    pro: [
      "Everything in Free",
      "Access to all Pro components",
      "Access to all Pro blocks",
      "API keys for private registry",
      "Lifetime updates",
    ],
    premium: [
      "Everything in Pro",
      "Priority support",
      "Commercial license",
      "Early access to new features",
      "Direct support channel",
    ],
  },
  plans: {
    single: [
      {
        name: "Free",
        price: "€0",
        priceLabel: "forever",
        description: "Get started with free components",
        features: "free",
        variant: "muted" as const,
      },
      {
        name: "Pro",
        price: "€149",
        priceLabel: "one-time",
        description: "Full access for individuals",
        features: "pro",
        variant: "featured" as const,
        cta: { label: "Buy Now", action: "checkout" },
      },
      {
        name: "Premium",
        price: "€499",
        priceLabel: "one-time",
        description: "Premium access with priority support",
        features: "premium",
        variant: "muted" as const,
        cta: { label: "Buy Now", action: "checkout" },
      },
    ],
    team: [
      {
        name: "Team Info",
        description:
          "Equip your entire team with premium components. Share API keys, collaborate on projects, and ship faster together.",
        variant: "info" as const,
        highlights: [
          "Centralized billing",
          "Shared team dashboard",
          "Volume discounts",
        ],
      },
      {
        name: "Startup",
        price: "€999",
        originalPrice: "€4,990",
        priceLabel: "one-time",
        description: "For teams up to 10 members",
        features: "pro",
        variant: "featured" as const,
        cta: { label: "Buy Now", action: "checkout" },
      },
      {
        name: "Unlimited",
        price: "€1,999",
        originalPrice: "€14,970",
        priceLabel: "one-time",
        description: "Unlimited team members",
        features: "premium",
        variant: "muted" as const,
        cta: { label: "Buy Now", action: "checkout" },
      },
    ],
  },
  footer:
    "Secure payment powered by Stripe. No recurring charges, no hidden fees.",
}

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="relative container mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Pricing Card Component
function PricingCard({
  name,
  price,
  originalPrice,
  priceLabel,
  description,
  featureList,
  variant = "default",
  highlights,
  children,
}: {
  name: string
  price?: string
  originalPrice?: string
  priceLabel?: string
  description: string
  featureList?: string[]
  variant?: "default" | "featured" | "muted" | "info"
  highlights?: string[]
  children?: React.ReactNode
}) {
  const isFeatured = variant === "featured"
  const isMuted = variant === "muted"
  const isInfo = variant === "info"

  return (
    <div
      className={cn(
        "border-border relative flex flex-col rounded-3xl border p-6 text-left md:p-8",
        "col-span-6 md:col-span-2",
        isFeatured && "bg-background shadow-sm",
        isMuted && "bg-muted/30 border-dashed shadow-none",
        isInfo && "bg-muted/30 justify-center border-dashed shadow-none"
      )}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>

      {price && (
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground/60 text-lg line-through">
                {originalPrice}
              </span>
            )}
            {priceLabel && (
              <span className="text-muted-foreground text-sm">
                /{priceLabel}
              </span>
            )}
          </div>
        </div>
      )}

      {highlights && (
        <div className="mt-6 space-y-2">
          {highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="text-primary size-4" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      )}

      {children && <div className="mb-6">{children}</div>}

      {featureList && (
        <ul className="flex-1 space-y-3">
          {featureList.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  isFeatured && "text-primary"
                )}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

interface PagePricing1Props {
  hero?: Partial<typeof pagePricing1Defaults.hero>
  features?: typeof pagePricing1Defaults.features
  plans?: typeof pagePricing1Defaults.plans
  footer?: string
  onCheckout?: (plan: string) => void
  className?: string
}

export function PagePricing1({
  hero = {},
  features = pagePricing1Defaults.features,
  plans = pagePricing1Defaults.plans,
  footer = pagePricing1Defaults.footer,
  onCheckout,
  className,
}: PagePricing1Props) {
  const [licenseType, setLicenseType] = React.useState<"single" | "team">(
    "single"
  )
  const heroContent = { ...pagePricing1Defaults.hero, ...hero }

  const getFeatures = (key: string) => {
    return features[key as keyof typeof features] || []
  }

  return (
    <div className={cn("relative min-h-screen", className)}>
      <StripedBackground />

      {/* Hero */}
      <div className="relative -mt-14 overflow-hidden">
        <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />
        <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
          <Spacer size="8xl" sizeMobile="6xl" />
          <h1 className="text-center text-[2.5rem] leading-[0.9] font-bold tracking-tight whitespace-pre-line sm:text-5xl md:text-8xl">
            {heroContent.title}
          </h1>
          <Spacer size="2xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-lg whitespace-pre-line md:text-3xl">
            {heroContent.description}
          </p>
          <Spacer size="3xl" sizeMobile="lg" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
        <p className="text-primary text-sm font-medium tracking-widest uppercase">
          Simple Pricing
        </p>
        <Spacer size="md" sizeMobile="sm" />
        <h2 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-7xl">
          One Fair Price.
          <br />
          <span className="text-foreground">Lifetime Access.</span>
        </h2>
        <Spacer size="3xl" sizeMobile="2xl" />

        {/* License Type Toggle */}
        <div className="bg-muted/50 inline-flex rounded-full p-1">
          <button
            onClick={() => setLicenseType("single")}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              licenseType === "single"
                ? "border-border bg-background text-foreground border shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Single User
          </button>
          <button
            onClick={() => setLicenseType("team")}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all",
              licenseType === "team"
                ? "border-border bg-background text-foreground border shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Team License
          </button>
        </div>

        <Spacer size="2xl" sizeMobile="xl" />

        {/* Pricing Cards */}
        <div className="grid w-full grid-cols-6 gap-6">
          {(licenseType === "single" ? plans.single : plans.team).map(
            (plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={"price" in plan ? plan.price : undefined}
                originalPrice={
                  "originalPrice" in plan ? plan.originalPrice : undefined
                }
                priceLabel={"priceLabel" in plan ? plan.priceLabel : undefined}
                description={plan.description}
                featureList={
                  "features" in plan ? getFeatures(plan.features) : undefined
                }
                variant={plan.variant}
                highlights={"highlights" in plan ? plan.highlights : undefined}
              >
                {"cta" in plan && plan.cta ? (
                  <Button
                    size="lg"
                    variant={
                      plan.variant === "featured" ? "default" : "secondary"
                    }
                    className="w-full rounded-xl"
                    onClick={() => onCheckout?.(plan.name)}
                  >
                    {plan.cta.label}
                  </Button>
                ) : plan.variant !== "info" ? (
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="w-full rounded-xl"
                  >
                    <Link href="/docs">Get Started</Link>
                  </Button>
                ) : null}
              </PricingCard>
            )
          )}
        </div>

        <Spacer size="2xl" sizeMobile="lg" />
        <p className="text-muted-foreground text-sm">{footer}</p>
      </div>
    </div>
  )
}
