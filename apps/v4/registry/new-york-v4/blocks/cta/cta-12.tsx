"use client"

import { useState } from "react"
import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { StickyRevealFooter } from "@/registry/new-york-v4/animations/sticky-footer/sticky-footer"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta12Defaults = {
  title: "Limited offer: 20% off all summer destinations",
  primaryCta: { label: "Book Now", href: "#" },
}

export function Cta12({ content = {}, classNames = {} }: CtaBlockProps) {
  const { title = cta12Defaults.title, primaryCta = cta12Defaults.primaryCta } =
    content

  const [isDismissed, setIsDismissed] = useState(false)

  const handleDismiss = () => {
    setIsDismissed(true)
  }

  if (isDismissed) return null

  return (
    <StickyRevealFooter height={80}>
      <div
        className={cn(
          "h-full bg-gradient-to-r from-[#0369a1] to-[#0284c7] text-white shadow-lg",
          classNames.root
        )}
      >
        <div
          className={cn(
            "container flex h-full items-center justify-between gap-4 px-6",
            classNames.container
          )}
        >
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-white/20 sm:flex">
              <DynamicIcon name="Plane" className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium md:text-base">{title}</p>
          </div>

          <div className="flex items-center gap-3">
            {primaryCta && (
              <Button
                size="sm"
                className="group bg-white whitespace-nowrap text-[#0369a1] hover:bg-white/90"
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
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 hover:bg-white/10"
              onClick={handleDismiss}
            >
              <DynamicIcon name="X" className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </Button>
          </div>
        </div>
      </div>
    </StickyRevealFooter>
  )
}
