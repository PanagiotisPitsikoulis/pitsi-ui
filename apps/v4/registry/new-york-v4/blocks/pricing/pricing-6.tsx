"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Slider } from "@/registry/new-york-v4/ui/slider"

interface PricingBlockProps {
  content?: {
    title?: string
    description?: string
    usageTiers?: Array<{
      limit: number
      price: number
      perUnit: number
    }>
    features?: string[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const pricing6Defaults = {
  title: "Pay As You Grow",
  description: "Only pay for what you use. No minimum commitment.",
  usageTiers: [
    { limit: 1000, price: 0, perUnit: 0 },
    { limit: 5000, price: 29, perUnit: 0.007 },
    { limit: 10000, price: 49, perUnit: 0.006 },
    { limit: 25000, price: 99, perUnit: 0.005 },
    { limit: 50000, price: 179, perUnit: 0.004 },
    { limit: 100000, price: 299, perUnit: 0.003 },
  ],
  features: [
    "All core features included",
    "Real-time analytics",
    "API access",
    "Email support",
    "99.9% uptime SLA",
    "No setup fees",
  ],
}

export function Pricing6({ content = {}, classNames = {} }: PricingBlockProps) {
  const [usage, setUsage] = useState(5000)

  const {
    title = pricing6Defaults.title,
    description = pricing6Defaults.description,
    usageTiers = pricing6Defaults.usageTiers,
    features = pricing6Defaults.features,
  } = content

  // Find the current tier
  const currentTier =
    usageTiers.find((tier) => usage <= tier.limit) ||
    usageTiers[usageTiers.length - 1]

  // Calculate price
  const calculatePrice = () => {
    if (usage <= 1000) return 0
    return currentTier.price
  }

  const price = calculatePrice()

  // Format usage number
  const formatUsage = (num: number) => {
    if (num >= 1000) return `${num / 1000}k`
    return num.toString()
  }

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
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        <div className="bg-background mx-auto max-w-2xl rounded-2xl p-8 md:p-12">
          {/* Calculator */}
          <div className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-foreground font-medium">
                Monthly API calls
              </span>
              <span className="bg-muted text-foreground rounded-full px-4 py-2 font-semibold">
                {formatUsage(usage)} calls
              </span>
            </div>

            <Slider
              value={[usage]}
              onValueChange={(value) => setUsage(value[0])}
              min={0}
              max={100000}
              step={1000}
              className="mb-4"
            />

            <div className="text-muted-foreground flex justify-between text-xs">
              <span>0</span>
              <span>25k</span>
              <span>50k</span>
              <span>75k</span>
              <span>100k</span>
            </div>
          </div>

          {/* Price Display */}
          <div className="border-border mb-8 border-t pt-8 text-center">
            <p className="text-muted-foreground mb-2 text-sm">
              Estimated monthly cost
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={price}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="text-foreground text-6xl font-bold"
                >
                  ${price}
                </motion.span>
              </AnimatePresence>
              <span className="text-muted-foreground">/month</span>
            </div>
            <AnimatePresence mode="wait">
              {usage <= 1000 ? (
                <motion.p
                  key="free"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary mt-2 text-sm font-medium"
                >
                  First 1,000 calls are free!
                </motion.p>
              ) : (
                <motion.p
                  key="paid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted-foreground mt-2 text-sm"
                >
                  ${currentTier.perUnit.toFixed(3)} per additional call
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Features */}
          <div className="border-border mb-8 border-t pt-8">
            <h4 className="text-foreground mb-4 font-semibold">
              Included in all plans:
            </h4>
            <ul className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-foreground flex items-center gap-2 text-sm"
                >
                  <DynamicIcon
                    name="Check"
                    className="text-primary h-4 w-4 shrink-0"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Button className="w-full" size="lg" asChild>
            <Link href="#">Start Free Trial</Link>
          </Button>
          <p className="text-muted-foreground mt-4 text-center text-xs">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  )
}
