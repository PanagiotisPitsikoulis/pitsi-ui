"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext, useScrollContainer } from "../../_components"

export function PricingServicePlants() {
  const { cardBg } = useBlockContext()
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

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

  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for new plant parents",
      features: [
        "1 medium plant",
        "Care guide included",
        "Standard pot",
        "Email support",
      ],
    },
    {
      name: "Grower",
      price: "$59",
      description: "For the growing collection",
      features: [
        "2 medium plants",
        "Care guides included",
        "Premium ceramic pots",
        "Priority support",
        "Free repotting guide",
      ],
      popular: true,
    },
    {
      name: "Jungle",
      price: "$99",
      description: "Transform your space",
      features: [
        "4 plants (mixed sizes)",
        "Care guides included",
        "Designer pot collection",
        "24/7 plant hotline",
        "Monthly care tips",
        "Free replacements",
      ],
    },
  ]

  return (
    <>
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/placeholders/blocks/service-plants/assets/decoration-3.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <section ref={sectionRef} className="py-[10rem]">
        <div className="relative z-10 container px-6">
          <div className="mb-20 text-center">
            <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              Monthly Boxes
            </p>
            <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Subscribe & Save
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Fresh plants delivered to your door every month.
            </p>
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
            {plans.map((plan, i) => {
              const isLeft = i === 0
              const isRight = i === 2
              const isMiddle = plan.popular

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
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-xl"
                      : cn(cardBg, "shadow-lg")
                  )}
                  style={{
                    rotate: isLeft ? leftRotation : isRight ? rightRotation : 0,
                    x: isLeft ? leftX : isRight ? rightX : 0,
                  }}
                >
                  {plan.popular && (
                    <Image
                      draggable={false}
                      src="/placeholders/blocks/service-plants/assets/decoration-small-2.svg"
                      alt=""
                      width={150}
                      height={150}
                      className="pointer-events-none absolute -top-10 left-1/2 z-30 -translate-x-1/2 select-none"
                    />
                  )}
                  <div className="text-center">
                    <h3
                      className={cn(
                        "mb-2 text-xl font-semibold",
                        !plan.popular && "text-foreground"
                      )}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span
                        className={cn(
                          "text-5xl font-bold",
                          !plan.popular && "text-foreground"
                        )}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={cn(
                          plan.popular
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        )}
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm",
                        plan.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {plan.description}
                    </p>
                  </div>
                  <ul className="mt-8 mb-8 space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <svg
                          className={cn(
                            "h-5 w-5 flex-shrink-0",
                            plan.popular
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
                          className={cn(!plan.popular && "text-foreground")}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full rounded-full",
                      plan.popular &&
                        "bg-background text-foreground hover:bg-background/90"
                    )}
                    variant={plan.popular ? "secondary" : "default"}
                  >
                    Get Started
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
