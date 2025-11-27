import { Suspense } from "react"
import Link from "next/link"
import { Check, Sparkles, Zap } from "lucide-react"

import { getCurrentUser } from "@/lib/server/user"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"

import { CheckoutButton } from "./_components/checkout-button"
import { PricingToast } from "./_components/pricing-toast"

const features = {
  free: [
    "Access to free components",
    "Basic documentation",
    "Community support",
    "CLI tool access",
  ],
  pro: [
    "Access to all Pro components",
    "Access to all Pro blocks",
    "Access to all Pro animations",
    "API keys for private registry",
    "Lifetime updates",
    "Priority support",
  ],
}

export default async function PricingPage() {
  const user = await getCurrentUser()
  const isPro = user?.isPro ?? false

  return (
    <div className="container flex flex-1 flex-col items-center justify-center px-6 py-16">
      <Suspense fallback={null}>
        <PricingToast />
      </Suspense>

      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="mr-1.5 size-3" />
          Simple Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          One price, lifetime access
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Get access to all Pro components, blocks, and animations with a single
          one-time payment.
        </p>
      </div>

      <div className="mt-12 grid w-full max-w-4xl gap-6 md:grid-cols-2">
        {/* Free Plan */}
        <Card className="relative">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>
              Get started with free components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">€0</span>
              <span className="text-muted-foreground">forever</span>
            </div>
            <Separator />
            <ul className="space-y-3 text-sm">
              {features.free.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="text-muted-foreground size-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="/docs"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="border-primary relative">
          <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Pro
              <Zap className="size-4" />
            </CardTitle>
            <CardDescription>
              One-time purchase for lifetime access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">€99</span>
              <span className="text-muted-foreground">one-time</span>
            </div>
            <Separator />
            <ul className="space-y-3 text-sm">
              {features.pro.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="text-primary size-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            {isPro ? (
              <div className="bg-primary/10 text-primary flex h-10 w-full items-center justify-center rounded-md text-sm font-medium">
                <Check className="mr-2 size-4" />
                You have Pro access
              </div>
            ) : (
              <CheckoutButton isLoggedIn={!!user} />
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="text-muted-foreground mt-8 text-center text-sm">
        <p>
          Secure payment powered by Stripe. No recurring charges, no hidden
          fees.
        </p>
      </div>
    </div>
  )
}
