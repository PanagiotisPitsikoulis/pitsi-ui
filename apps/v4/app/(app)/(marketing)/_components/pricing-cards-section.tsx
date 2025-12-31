"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Loader2 } from "@/lib/icons"

import type { PlanType } from "@/lib/server/db/schema"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

const features = {
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
    "Access to all Pro animations",
    "API keys for private registry",
    "Lifetime updates",
  ],
  exclusive: [
    "Everything in Pro",
    "Priority support",
    "Commercial license",
    "Early access to new components",
    "Direct support channel",
  ],
  team: [
    "Everything in Exclusive",
    "Up to 10 team members",
    "Team API key management",
    "Shared team dashboard",
  ],
  enterprise: [
    "Everything in Team",
    "Unlimited team members",
    "Custom block requests",
    "Dedicated support",
    "Custom integrations",
  ],
}

function CheckoutButton({
  isLoggedIn,
  planType,
  variant = "default",
}: {
  isLoggedIn: boolean
  planType: "pro" | "exclusive" | "team" | "enterprise"
  variant?: "default" | "highlighted"
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    if (!isLoggedIn) {
      router.push("/signin")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planType }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session")
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
      setIsLoading(false)
    }
  }

  const buttonLabels = {
    pro: "Buy Now",
    exclusive: "Buy Now",
    team: "Buy Now",
    enterprise: "Buy Now",
  }
  const buttonText = buttonLabels[planType]

  const buttonVariant = variant === "highlighted" ? "default" : "secondary"

  if (!isLoggedIn) {
    return (
      <Button
        asChild
        size="lg"
        variant={buttonVariant}
        className="w-full rounded-xl"
      >
        <Link href="/signin">Sign in to Purchase</Link>
      </Button>
    )
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      size="lg"
      variant={buttonVariant}
      className="w-full rounded-xl"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        buttonText
      )}
    </Button>
  )
}

function PricingCard({
  name,
  price,
  originalPrice,
  priceLabel,
  description,
  featureList,
  badge,
  children,
  className,
  featured = false,
}: {
  name: string
  price: string
  originalPrice?: string
  priceLabel: string
  description: string
  featureList: string[]
  badge?: string
  children: React.ReactNode
  className?: string
  featured?: boolean
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border border-border p-6 text-left md:p-8 ${className ?? ""}`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background">
          {badge}
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {originalPrice && (
            <span className="text-muted-foreground/60 text-lg line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-muted-foreground text-sm">/{priceLabel}</span>
        </div>
      </div>
      <div className="mb-6">{children}</div>
      <ul className="flex-1 space-y-3">
        {featureList.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`mt-0.5 size-4 shrink-0 ${featured ? "text-brand" : ""}`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PricingCardsSection({
  user,
}: {
  user: { isPro: boolean; planType: PlanType } | null
}) {
  const [licenseType, setLicenseType] = useState<"single" | "team">("single")
  const currentPlan = user?.planType ?? "free"
  const hasPro =
    currentPlan === "pro" ||
    currentPlan === "exclusive" ||
    currentPlan === "team" ||
    currentPlan === "enterprise"
  const hasExclusive =
    currentPlan === "exclusive" ||
    currentPlan === "team" ||
    currentPlan === "enterprise"
  const hasTeam = currentPlan === "team" || currentPlan === "enterprise"
  const hasEnterprise = currentPlan === "enterprise"

  return (
    <div
      id="pricing"
      className="container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24"
    >
      <p className="text-brand text-sm font-medium tracking-widest uppercase">
        Simple Pricing
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        One Fair Price.
        <br />
        <span className="text-foreground">Lifetime Access.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="2xl" />

      {/* License Type Toggle */}
      <div className="bg-muted/50 inline-flex rounded-full p-1">
        <button
          onClick={() => setLicenseType("single")}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
            licenseType === "single"
              ? "border-border bg-background text-foreground border shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Single User
        </button>
        <button
          onClick={() => setLicenseType("team")}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
            licenseType === "team"
              ? "border-border bg-background text-foreground border shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Team License
        </button>
      </div>

      <Spacer size="2xl" sizeMobile="xl" />

      {licenseType === "single" ? (
        <>
          <div className="grid w-full grid-cols-6 gap-6">
            {/* Free Plan */}
            <PricingCard
              className="col-span-6 border-dashed bg-page shadow-none md:col-span-2"
              name="Free"
              price="€0"
              priceLabel="forever"
              description="Get started with free components"
              featureList={features.free}
            >
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full rounded-xl"
              >
                <Link href="/docs">Get Started</Link>
              </Button>
            </PricingCard>

            {/* Pro Plan */}
            <PricingCard
              className="col-span-6 bg-background shadow-sm md:col-span-2"
              name="Pro"
              price="€149"
              priceLabel="one-time"
              description="Full access for individuals"
              featureList={features.pro}
              featured
            >
              {hasPro ? (
                <div className="bg-muted flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium">
                  {currentPlan === "pro" ? "Current Plan" : "Included"}
                </div>
              ) : (
                <CheckoutButton
                  isLoggedIn={!!user}
                  planType="pro"
                  variant="highlighted"
                />
              )}
            </PricingCard>

            {/* Exclusive Plan */}
            <PricingCard
              className="col-span-6 border-dashed bg-page shadow-none md:col-span-2"
              name="Exclusive"
              price="€499"
              priceLabel="one-time"
              description="Premium access with priority support"
              featureList={features.exclusive}
            >
              {hasExclusive ? (
                <div className="bg-muted flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium">
                  {currentPlan === "exclusive" ? "Current Plan" : "Included"}
                </div>
              ) : (
                <CheckoutButton isLoggedIn={!!user} planType="exclusive" />
              )}
            </PricingCard>
          </div>
        </>
      ) : (
        <div className="grid w-full grid-cols-6 gap-6">
          {/* Team Info Card */}
          <div className="border-border bg-page col-span-6 flex flex-col justify-center rounded-3xl border border-dashed p-6 text-left md:col-span-2 md:p-8">
            <h3 className="text-lg font-semibold">Team Licenses</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Equip your entire team with premium components. Share API keys,
              collaborate on projects, and ship faster together.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="text-brand size-4" />
                <span className="text-sm">Centralized billing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-brand size-4" />
                <span className="text-sm">Shared team dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-brand size-4" />
                <span className="text-sm">Volume discounts</span>
              </div>
            </div>
          </div>

          {/* Startup Plan */}
          <PricingCard
            className="col-span-6 bg-background shadow-sm md:col-span-2"
            name="Startup"
            price="€999"
            originalPrice="€4,990"
            priceLabel="one-time"
            description="For teams up to 10 members"
            featureList={features.team}
            featured
          >
            {hasTeam ? (
              <div className="bg-muted flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium">
                {currentPlan === "team" ? "Current Plan" : "Included"}
              </div>
            ) : (
              <CheckoutButton
                isLoggedIn={!!user}
                planType="team"
                variant="highlighted"
              />
            )}
          </PricingCard>

          {/* Unlimited Plan */}
          <PricingCard
            className="col-span-6 border-dashed bg-page shadow-none md:col-span-2"
            name="Unlimited"
            price="€1,999"
            originalPrice="€14,970"
            priceLabel="one-time"
            description="Unlimited team members"
            featureList={features.enterprise}
          >
            {hasEnterprise ? (
              <div className="bg-muted flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium">
                {currentPlan === "enterprise" ? "Current Plan" : "Included"}
              </div>
            ) : (
              <CheckoutButton isLoggedIn={!!user} planType="enterprise" />
            )}
          </PricingCard>
        </div>
      )}

      <Spacer size="2xl" sizeMobile="lg" />
      <p className="text-muted-foreground text-sm">
        Secure payment powered by Stripe. No recurring charges, no hidden fees.
      </p>
    </div>
  )
}
