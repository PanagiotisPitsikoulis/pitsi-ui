"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Loader2 } from "lucide-react"

import type { PlanType } from "@/lib/server/db/schema"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

function RightClickIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 97 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M48.23 46.9402L43.98 60.7502L35.02 89.8401L29.8101 68.7602L29.52 67.5901L10.7 78.3202L2 63.3202L20.8201 52.5901L4.19995 36.6802L37.55 44.4502L48.23 46.9402Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M45.2205 25.2802L36.6306 29.5802H36.6206L31.0605 32.3603C31.4005 30.9303 31.8805 29.6803 32.5105 28.6203C33.6305 26.7303 35.2005 25.4303 37.2205 24.7403C39.6005 23.9303 42.2705 24.1002 45.2205 25.2802Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M94.6401 52.1902C94.6401 60.3602 92.2201 65.9502 87.3801 68.9602C86.6601 69.4102 85.9101 69.7902 85.1301 70.0902L67.3801 78.9602C70.5201 77.0102 72.64 73.9702 73.74 69.8402C74.34 67.6102 74.6401 65.0602 74.6401 62.1902C74.6401 61.3002 74.61 60.4102 74.55 59.5102C74.1 52.4902 71.8801 45.3202 67.9001 38.0002C67.7801 37.7602 67.65 37.5302 67.51 37.3002C67.41 37.1002 67.2899 36.8902 67.1699 36.6902C67.0999 36.5502 67.0199 36.4202 66.9399 36.2802C62.7499 29.0602 57.8299 23.3702 52.1799 19.2202C50.8999 18.2702 49.59 17.4102 48.23 16.6302C46.31 15.5302 44.47 14.6702 42.71 14.0502C37.91 12.3702 33.66 12.5002 29.96 14.4202L49.96 4.42019C55.02 1.79019 61.11 2.52021 68.23 6.63021C75.57 10.8702 81.7999 17.4202 86.9399 26.2802C92.0699 35.1302 94.6401 43.7702 94.6401 52.1902Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M61.0503 40.5303L48.2302 46.9403L37.5503 44.4503L4.2002 36.6803L22.0103 27.7803C21.9103 28.5503 21.8503 29.3503 21.8103 30.1803L29.8303 32.0703L31.0603 32.3603L36.6204 29.5803H36.6304L56.8704 34.2903C58.2304 35.9603 59.4902 37.8103 60.6702 39.8503C60.8002 40.0803 60.9303 40.3003 61.0503 40.5303Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M74.6406 62.1904C74.6406 65.0604 74.3405 67.6104 73.7405 69.8404C72.6405 73.9704 70.5206 77.0104 67.3806 78.9604C63.7206 81.2404 59.4305 81.6204 54.5205 80.0904C52.9305 79.6004 51.2705 78.9104 49.5505 78.0204L52.3005 69.0004C52.3005 69.0004 52.3306 69.0104 52.3406 69.0104C54.5206 69.6604 56.4805 69.8004 58.2205 69.4404C59.6405 69.1504 60.9105 68.5104 62.0405 67.5504C63.4805 66.3204 64.5106 64.6704 65.1306 62.5904C65.6006 61.0004 65.8406 59.1804 65.8406 57.1104C65.8406 54.3804 65.4206 51.5904 64.5906 48.7704C63.7906 46.0704 62.6105 43.3204 61.0505 40.5304C60.9305 40.3004 60.8004 40.0804 60.6704 39.8504C59.4904 37.8104 58.2306 35.9604 56.8706 34.2904C54.2906 31.0904 51.4105 28.5704 48.2305 26.7404C47.2005 26.1404 46.1905 25.6504 45.2205 25.2804C42.2705 24.1004 39.6005 23.9304 37.2205 24.7404C35.2005 25.4304 33.6305 26.7304 32.5105 28.6204C31.8805 29.6804 31.4005 30.9304 31.0605 32.3604L29.8306 32.0704L21.8105 30.1804C21.8505 29.3504 21.9105 28.5504 22.0105 27.7804C22.7805 21.2304 25.4304 16.7704 29.9604 14.4204C33.6604 12.5004 37.9104 12.3704 42.7104 14.0504C44.4704 14.6704 46.3105 15.5304 48.2305 16.6304C49.5905 17.4104 50.9004 18.2704 52.1804 19.2204C57.8304 23.3704 62.7504 29.0604 66.9404 36.2804C67.0204 36.4204 67.1004 36.5504 67.1704 36.6904C67.2904 36.8904 67.4105 37.1004 67.5105 37.3004C67.6505 37.5304 67.7806 37.7604 67.9006 38.0004C71.8806 45.3204 74.1005 52.4904 74.5505 59.5104C74.6105 60.4104 74.6406 61.3004 74.6406 62.1904Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M52.2996 69.0003L49.5496 78.0203C51.2696 78.9103 52.9295 79.6003 54.5195 80.0903L35.0195 89.8403L43.9795 60.7503L48.2295 46.9403L61.0496 40.5303C62.6096 43.3203 63.7896 46.0703 64.5896 48.7703L59.4595 65.4203L52.3396 68.9803L52.2996 69.0003Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M29.8103 68.7604L10.7002 78.3204L29.5203 67.5903L29.8103 68.7604Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M65.1299 62.5903C64.5099 64.6703 63.4798 66.3204 62.0398 67.5504C60.9098 68.5104 59.6397 69.1504 58.2197 69.4404C56.4797 69.8004 54.5198 69.6604 52.3398 69.0104V68.9803L59.4597 65.4203L65.1299 62.5903Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

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

  // Highlighted variant - white button
  if (variant === "highlighted") {
    if (!isLoggedIn) {
      return (
        <Button
          asChild
          size="lg"
          className="w-full rounded-xl bg-white text-black hover:bg-white/90"
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
        className="w-full rounded-xl bg-white text-black hover:bg-white/90"
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

  // Default variant - standard button
  if (!isLoggedIn) {
    return (
      <Button asChild size="lg" className="w-full rounded-xl">
        <Link href="/signin">Sign in to Purchase</Link>
      </Button>
    )
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      size="lg"
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
  highlighted = false,
  badge,
  children,
  className,
}: {
  name: string
  price: string
  originalPrice?: string
  priceLabel: string
  description: string
  featureList: string[]
  highlighted?: boolean
  badge?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 text-left md:p-8 ${
        highlighted
          ? "border-white/20 text-white shadow-lg"
          : "border-border bg-background shadow-sm"
      } ${className ?? ""}`}
    >
      {/* Background for highlighted cards */}
      {highlighted && (
        <div className="absolute inset-0 z-0 bg-primary" />
      )}
      {badge && (
        <div
          className={`absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-medium ${
            highlighted
              ? "bg-white text-black"
              : "bg-foreground text-background"
          }`}
        >
          {badge}
        </div>
      )}
      <div className="relative z-10 mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p
          className={`mt-1 text-sm ${highlighted ? "text-white/70" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      </div>
      <div className="relative z-10 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {originalPrice && (
            <span
              className={`text-lg line-through ${highlighted ? "text-white/40" : "text-muted-foreground/60"}`}
            >
              {originalPrice}
            </span>
          )}
          <span
            className={`text-sm ${highlighted ? "text-white/70" : "text-muted-foreground"}`}
          >
            /{priceLabel}
          </span>
        </div>
      </div>
      <div className="relative z-10 mb-6">{children}</div>
      <ul className="relative z-10 flex-1 space-y-3">
        {featureList.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 size-4 shrink-0 ${highlighted ? "text-white/70" : "text-brand"}`}
            />
            <span className={`text-sm ${highlighted ? "text-white/90" : ""}`}>
              {feature}
            </span>
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
        <span className="text-muted-foreground">Lifetime Access.</span>
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
            <div className="relative col-span-6 overflow-visible md:col-span-2">
              <PricingCard
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
              {/* Decorative overlay icon */}
              <RightClickIcon className="text-brand pointer-events-none absolute -right-6 -bottom-6 z-20 hidden size-32 md:block" />
            </div>

            {/* Pro Plan */}
            <PricingCard
              className="col-span-6 md:col-span-2"
              name="Pro"
              price="€149"
              priceLabel="one-time"
              description="Full access for individuals"
              featureList={features.pro}
              highlighted
            >
              {hasPro ? (
                <div className="flex h-12 w-full items-center justify-center rounded-xl bg-white/20 text-sm font-medium text-white">
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
              className="col-span-6 md:col-span-2"
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
          <div className="border-border bg-background col-span-6 flex flex-col justify-center rounded-3xl border p-6 text-left shadow-sm md:col-span-2 md:p-8">
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
            className="col-span-6 md:col-span-2"
            name="Startup"
            price="€999"
            originalPrice="€4,990"
            priceLabel="one-time"
            description="For teams up to 10 members"
            featureList={features.team}
            highlighted
          >
            {hasTeam ? (
              <div className="flex h-12 w-full items-center justify-center rounded-xl bg-white/20 text-sm font-medium text-white">
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
            className="col-span-6 md:col-span-2"
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
