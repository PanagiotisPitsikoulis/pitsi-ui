"use client"

import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import CircularText from "@/registry/new-york-v4/animations/circular-text/circular-text"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta3Defaults = {
  badge: "Limited Time Offer",
  title: "Spring Plant Sale",
  description:
    "Don't miss our biggest sale of the year. Up to 40% off on select plants and accessories.",
  primaryCta: { label: "Shop Sale", href: "#" },
  secondaryCta: { label: "View All Plants", href: "#" },
  circularText: "SPRING SALE * LIMITED TIME * SHOP NOW * ",
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#84a98c] px-4 py-1.5 text-sm font-semibold text-white">
            <DynamicIcon name="Leaf" className="h-4 w-4" />
            {cta3Defaults.badge}
          </div>

          <BlockHeader
            title={title}
            description={description}
            spacing="none"
            className="mb-8"
            classNames={{
              ...classNames.header,
              title: cn(
                "text-4xl md:text-5xl lg:text-6xl",
                classNames.header?.title
              ),
              description: cn(
                "text-background/70",
                classNames.header?.description
              ),
            }}
          />

          {/* Circular Text Countdown Display */}
          <div className="mb-10 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <CircularText
                text={cta3Defaults.circularText}
                spinDuration={20}
                onHover="speedUp"
                className="text-[#84a98c]"
              />
              {/* Center countdown display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-baseline gap-1 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-background text-3xl font-bold">
                      {timer.days.toString().padStart(2, "0")}
                    </span>
                    <span className="text-background/50 text-[10px] uppercase">
                      Days
                    </span>
                  </div>
                  <span className="text-background/50 mb-3 text-xl">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-background text-3xl font-bold">
                      {timer.hours.toString().padStart(2, "0")}
                    </span>
                    <span className="text-background/50 text-[10px] uppercase">
                      Hrs
                    </span>
                  </div>
                  <span className="text-background/50 mb-3 text-xl">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-background text-3xl font-bold">
                      {timer.minutes.toString().padStart(2, "0")}
                    </span>
                    <span className="text-background/50 text-[10px] uppercase">
                      Min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Button
                size="lg"
                className="group bg-[#84a98c] text-white hover:bg-[#52796f]"
                asChild
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <DynamicIcon
                    name="ArrowRight"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
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
