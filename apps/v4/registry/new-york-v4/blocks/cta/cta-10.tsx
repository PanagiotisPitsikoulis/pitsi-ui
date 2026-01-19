"use client"

import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta10Defaults = {
  icon: "Compass",
  title: "Ready to Explore?",
  description:
    "Join thousands of travelers who have discovered amazing destinations with us. Start planning your next adventure today.",
  primaryCta: { label: "Browse Trips", href: "#" },
  secondaryCta: { label: "Get Travel Tips", href: "#" },
}

export function Cta10({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta10Defaults.title,
    description = cta10Defaults.description,
    primaryCta = cta10Defaults.primaryCta,
    secondaryCta = cta10Defaults.secondaryCta,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto max-w-2xl">
          <ScrollScale startScale={0.85} endScale={1}>
            <div
              className={cn(
                "border-border bg-card rounded-3xl border p-8 text-center shadow-lg md:p-12",
                classNames.content
              )}
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0ea5e9]/10">
                <DynamicIcon
                  name="Compass"
                  className="h-8 w-8 text-[#0284c7]"
                />
              </div>

              <BlockHeader
                title={title}
                description={description}
                spacing="none"
                className="mb-8"
                classNames={{
                  ...classNames.header,
                  title: cn("text-2xl md:text-3xl", classNames.header?.title),
                  description: cn("max-w-md", classNames.header?.description),
                }}
              />

              {/* CTAs */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {primaryCta && (
                  <Button
                    size="lg"
                    className="group w-full bg-[#0284c7] text-white hover:bg-[#0369a1] sm:w-auto"
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
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>

              {/* Trust badges */}
              <div className="text-muted-foreground mt-8 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0ea5e9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Secure Booking
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#0ea5e9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Free Cancellation
                </div>
              </div>
            </div>
          </ScrollScale>
        </div>
      </div>
    </section>
  )
}
