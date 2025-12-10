"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"

export function ComponentPreviewTabs({
  className,
  align = "start",
  justify = "start",
  hideCode = false,
  chromeLessOnMobile = false,
  isScrollable = false,
  isFullBleed = false,
  component,
  source,
  readiness,
  tier,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  justify?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  isScrollable?: boolean
  isFullBleed?: boolean
  component: React.ReactNode
  source: React.ReactNode
  readiness?: "alpha" | "beta" | "production"
  tier?: "free" | "pro"
}) {
  return (
    <div
      className={cn(
        "bg-background group relative mt-6 mb-12 flex flex-col overflow-hidden rounded-xl border shadow-xs md:-mx-1",
        className
      )}
      {...props}
    >
      <div data-slot="preview" className="relative">
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
          <ReadinessBadge readiness={readiness} />
          <TierBadge tier={tier} />
        </div>
        <div
          data-align={align}
          data-justify={justify}
          className={cn(
            "preview bg-background relative flex w-full border-b data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=start]:justify-start",
            isFullBleed
              ? "aspect-video overflow-hidden"
              : chromeLessOnMobile
                ? "overflow-hidden sm:p-10"
                : "h-[450px] overflow-hidden p-10"
          )}
        >
          {component}
        </div>
        {!hideCode && (
          <div
            data-slot="code"
            className="[&_[data-rehype-pretty-code-figure]]:!m-0 [&_[data-rehype-pretty-code-figure]]:rounded-none [&_[data-rehype-pretty-code-figure]]:border-0 [&_[data-rehype-pretty-code-figure]]:shadow-none [&_pre]:max-h-[400px]"
          >
            {source}
          </div>
        )}
      </div>
    </div>
  )
}
