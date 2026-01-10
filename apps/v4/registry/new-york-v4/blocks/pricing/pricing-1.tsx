"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import {
  pricingDefaults,
  type PricingBlockProps,
} from "@/lib/blocks/pricing.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  useBlockContext,
  useScrollContainer,
} from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults that extend the shared defaults
const pricing1Defaults = {
  ...pricingDefaults,
  decorationImage: {
    src: "/elements/decoration-small/plants/2.svg",
    alt: "",
  },
}

export function Pricing1({ content = {}, classNames = {} }: PricingBlockProps) {
  const { cardBg } = useBlockContext()
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Merge content with defaults
  const {
    badge = pricing1Defaults.badge,
    title = pricing1Defaults.title,
    description = pricing1Defaults.description,
    plans = pricing1Defaults.plans,
    backgroundImage = pricing1Defaults.backgroundImage,
  } = content

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Side cards rotate toward center as user scrolls (start rotated, end flat)
  const leftRotation = useTransform(scrollYProgress, [0, 0.5, 1], [-6, -3, 0])
  const rightRotation = useTransform(scrollYProgress, [0, 0.5, 1], [6, 3, 0])

  // Side cards slide inward on X axis as user scrolls
  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-30, -15, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 15, 0])

  return (
    <>
      {/* Background decoration */}
      {backgroundImage && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0",
            classNames.background
          )}
          style={{
            backgroundImage: `url('${backgroundImage.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
      )}
      <section ref={sectionRef} className={cn("py-[10rem]", classNames.root)}>
        <div
          className={cn("relative z-10 container px-6", classNames.container)}
        >
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            classNames={classNames.header}
          />
          <div
            className={cn(
              "mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0",
              classNames.grid
            )}
          >
            {plans.map((plan, i) => {
              const isLeft = i === 0
              const isRight = i === plans.length - 1
              const isMiddle = plan.highlighted

              // Determine which classNames to use based on highlighted status
              const planClassNames = plan.highlighted
                ? classNames.planHighlighted
                : classNames.plan

              return (
                <motion.div
                  key={i}
                  className={cn(
                    "relative w-full max-w-sm rounded-3xl p-10",
                    // Positioning for desktop
                    isLeft && "lg:z-0 lg:-mr-6 lg:origin-right",
                    isRight && "lg:z-0 lg:-ml-6 lg:origin-left",
                    isMiddle && "lg:z-10 lg:scale-105",
                    // Styling
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-xl"
                      : cn(cardBg, "shadow-lg"),
                    planClassNames?.root
                  )}
                  style={{
                    rotate: isLeft ? leftRotation : isRight ? rightRotation : 0,
                    x: isLeft ? leftX : isRight ? rightX : 0,
                  }}
                >
                  {plan.highlighted && (
                    <Image
                      draggable={false}
                      src={pricing1Defaults.decorationImage.src}
                      alt={pricing1Defaults.decorationImage.alt}
                      width={150}
                      height={150}
                      className="pointer-events-none absolute -top-10 left-1/2 z-30 -translate-x-1/2 select-none"
                    />
                  )}
                  <div className={cn("text-center", planClassNames?.header)}>
                    <h3
                      className={cn(
                        "mb-2 text-xl font-semibold",
                        !plan.highlighted && "text-foreground",
                        planClassNames?.name
                      )}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          "text-5xl font-bold",
                          !plan.highlighted && "text-foreground",
                          planClassNames?.price
                        )}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span
                          className={cn(
                            plan.highlighted
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground",
                            planClassNames?.period
                          )}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm",
                        plan.highlighted
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground",
                        planClassNames?.description
                      )}
                    >
                      {plan.description}
                    </p>
                  </div>
                  <ul
                    className={cn(
                      "mt-8 mb-8 space-y-4",
                      planClassNames?.features
                    )}
                  >
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className={cn(
                          "flex items-center gap-3",
                          planClassNames?.featureItem
                        )}
                      >
                        <svg
                          className={cn(
                            "h-5 w-5 flex-shrink-0",
                            plan.highlighted
                              ? "text-primary-foreground"
                              : "text-primary"
                          )}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span
                          className={cn(!plan.highlighted && "text-foreground")}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {plan.cta && (
                    <Button
                      className={cn(
                        "w-full rounded-full",
                        plan.highlighted &&
                          "bg-background text-foreground hover:bg-background/90",
                        planClassNames?.cta
                      )}
                      variant={plan.highlighted ? "secondary" : "default"}
                      asChild
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

// Re-export for backwards compatibility
export { Pricing1 as PricingServicePlants }
