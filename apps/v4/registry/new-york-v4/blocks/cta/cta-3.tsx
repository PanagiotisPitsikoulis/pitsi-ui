"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta3Defaults = {
  badge: "Limited Time Offer",
  title: "Get 50% Off Your First Year",
  description:
    "Don't miss this exclusive opportunity to supercharge your business at half the price.",
  primaryCta: { label: "Claim Your Discount", href: "#" },
  secondaryCta: { label: "Learn More", href: "#" },
  timer: {
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 15,
  },
}

export function Cta3({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta3Defaults.title,
    description = cta3Defaults.description,
    primaryCta = cta3Defaults.primaryCta,
    secondaryCta = cta3Defaults.secondaryCta,
  } = content

  const timer = cta3Defaults.timer

  return (
    <section className={cn("bg-foreground text-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-20", classNames.container)}
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-1.5 text-sm font-semibold text-black">
            <Zap className="h-4 w-4" />
            {cta3Defaults.badge}
          </div>

          {/* Title */}
          <h2
            className={cn(
              "mb-4 text-4xl font-bold md:text-5xl lg:text-6xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={cn(
              "text-background/70 mx-auto mb-8 max-w-2xl text-lg",
              classNames.header?.description
            )}
          >
            {description}
          </p>

          {/* Countdown Timer */}
          <div className="mb-10 flex items-center justify-center gap-4">
            {[
              { value: timer.days, label: "Days" },
              { value: timer.hours, label: "Hours" },
              { value: timer.minutes, label: "Min" },
              { value: timer.seconds, label: "Sec" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-background text-foreground flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-bold md:h-20 md:w-20 md:text-3xl">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-background/50 mt-2 text-xs uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Button
                size="lg"
                className="group bg-yellow-500 text-black hover:bg-yellow-400"
                asChild
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="border-background/20 text-background hover:bg-background/10"
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
