"use client"

import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ZoomParallax } from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta11Defaults = {
  title: "Your Journey Starts Here",
  description:
    "Whether you are seeking relaxation or adventure, we have the perfect trip waiting for you.",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: { label: "Contact Us", href: "#" },
}

export function Cta11({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta11Defaults.title,
    description = cta11Defaults.description,
    primaryCta = cta11Defaults.primaryCta,
    secondaryCta = cta11Defaults.secondaryCta,
  } = content as typeof cta11Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <ZoomParallax scaleRange={[0.95, 1]} animateOpacity={false}>
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0ea5e9] px-6 py-16 text-center md:px-12 md:py-24",
              classNames.card
            )}
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative z-10">
              <BlockHeader
                title={title}
                description={description}
                spacing="none"
                classNames={{
                  title: cn("text-white", classNames.title),
                  description: cn(
                    "max-w-lg text-white/80",
                    classNames.description
                  ),
                }}
              />

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {primaryCta && (
                  <Button
                    size="lg"
                    className="group bg-white text-[#0369a1] hover:bg-white/90"
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
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ZoomParallax>
      </div>
    </section>
  )
}
