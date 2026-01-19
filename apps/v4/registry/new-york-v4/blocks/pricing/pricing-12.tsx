"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Slider } from "@/registry/new-york-v4/ui/slider"

interface PricingBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    basePrice?: number
    groupTiers?: Array<{
      minSize: number
      maxSize: number
      discount: number
      label: string
    }>
    included?: string[]
    tourHighlights?: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
  }
}

const pricing12Defaults = {
  badge: "Group Adventures",
  title: "Travel Better Together",
  description:
    "The more, the merrier. Book as a group and enjoy exclusive discounts on unforgettable adventures.",
  basePrice: 1299,
  groupTiers: [
    { minSize: 1, maxSize: 2, discount: 0, label: "Solo/Duo" },
    { minSize: 3, maxSize: 5, discount: 10, label: "Small Group" },
    { minSize: 6, maxSize: 10, discount: 15, label: "Medium Group" },
    { minSize: 11, maxSize: 20, discount: 20, label: "Large Group" },
    { minSize: 21, maxSize: 50, discount: 25, label: "Charter Group" },
  ],
  included: [
    "Professional tour guide",
    "All entrance fees",
    "Accommodation",
    "Daily breakfast",
    "Airport transfers",
    "Travel insurance",
  ],
  tourHighlights: [
    {
      icon: "Users",
      title: "Group Bonding",
      description: "Shared experiences create lasting memories",
    },
    {
      icon: "Shield",
      title: "Safe Travel",
      description: "Experienced guides and 24/7 support",
    },
    {
      icon: "Sparkles",
      title: "Curated Experiences",
      description: "Hand-picked attractions and hidden gems",
    },
  ],
}

export function Pricing12({
  content = {},
  classNames = {},
}: PricingBlockProps) {
  const [groupSize, setGroupSize] = useState(4)

  const {
    badge = pricing12Defaults.badge,
    title = pricing12Defaults.title,
    description = pricing12Defaults.description,
    basePrice = pricing12Defaults.basePrice,
    groupTiers = pricing12Defaults.groupTiers,
    included = pricing12Defaults.included,
    tourHighlights = pricing12Defaults.tourHighlights,
  } = content

  // Find current tier
  const currentTier =
    groupTiers.find(
      (tier) => groupSize >= tier.minSize && groupSize <= tier.maxSize
    ) || groupTiers[0]

  // Calculate price
  const discountedPrice = Math.round(
    basePrice * (1 - currentTier.discount / 100)
  )
  const totalPrice = discountedPrice * groupSize
  const totalSavings = (basePrice - discountedPrice) * groupSize

  return (
    <section className={cn("bg-muted py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        <div className="mx-auto max-w-4xl">
          {/* Calculator Card */}
          <div className="bg-background rounded-3xl p-8 shadow-xl md:p-12">
            {/* Group Size Slider */}
            <div className="mb-10">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-foreground text-lg font-semibold">
                  Group Size
                </span>
                <div className="bg-brand/10 text-brand flex items-center gap-2 rounded-full px-4 py-2 font-semibold">
                  <DynamicIcon name="Users" className="h-5 w-5" />
                  <span>{groupSize} travelers</span>
                </div>
              </div>

              <Slider
                value={[groupSize]}
                onValueChange={(value) => setGroupSize(value[0])}
                min={1}
                max={50}
                step={1}
                className="mb-4"
              />

              <div className="text-muted-foreground flex justify-between text-xs">
                <span>1</span>
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40</span>
                <span>50</span>
              </div>
            </div>

            {/* Tier Badge */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-brand text-brand-foreground rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {currentTier.label}
                  {currentTier.discount > 0 && (
                    <span className="ml-2">- {currentTier.discount}% off</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pricing Display */}
            <div className="border-border mb-8 border-t pt-8">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Per Person */}
                <div className="text-center">
                  <p className="text-muted-foreground mb-2 text-sm">
                    Per Person
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    {currentTier.discount > 0 && (
                      <span className="text-muted-foreground text-lg line-through">
                        ${basePrice}
                      </span>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={discountedPrice}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-foreground text-4xl font-bold"
                      >
                        ${discountedPrice}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Total */}
                <div className="bg-brand/5 rounded-2xl p-4 text-center">
                  <p className="text-brand mb-2 text-sm font-medium">
                    Group Total
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalPrice}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="text-brand text-5xl font-bold"
                    >
                      ${totalPrice.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Savings */}
                <div className="text-center">
                  <p className="text-muted-foreground mb-2 text-sm">
                    Total Savings
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={totalSavings}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "text-4xl font-bold",
                        totalSavings > 0 ? "text-green-600" : "text-foreground"
                      )}
                    >
                      ${totalSavings.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="border-border mb-8 border-t pt-8">
              <h4 className="text-foreground mb-4 text-center font-semibold">
                What&apos;s Included
              </h4>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {included.map((item, i) => (
                  <div
                    key={i}
                    className="text-foreground flex items-center gap-2 text-sm"
                  >
                    <DynamicIcon
                      name="Check"
                      className="text-brand h-5 w-5 shrink-0"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button className="w-full rounded-full" size="lg" asChild>
              <Link href="#">
                Book for {groupSize} Traveler{groupSize > 1 ? "s" : ""}
              </Link>
            </Button>
          </div>

          {/* Tour Highlights */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tourHighlights.map((highlight, i) => (
              <div key={i} className="text-center">
                <div className="bg-brand/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <DynamicIcon
                    name={highlight.icon}
                    className="text-brand h-7 w-7"
                  />
                </div>
                <h4 className="text-foreground mb-2 font-semibold">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
