"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"

export function ComponentPreviewTabs({
  className,
  align = "center",
  justify = "center",
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
        "group relative mt-4 mb-12 flex flex-col gap-2 rounded-lg border",
        className
      )}
      {...props}
    >
      <div data-slot="preview" className="relative">
        <div className="flex items-center gap-2">
          <ReadinessBadge readiness={readiness} />
          <TierBadge tier={tier} />
        </div>
        <div
          data-align={align}
          data-justify={justify}
          className={cn(
            "preview flex w-full data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=start]:justify-start",
            isFullBleed
              ? "relative aspect-video overflow-hidden"
              : chromeLessOnMobile
                ? "sm:p-10"
                : "h-[450px] p-10"
          )}
        >
          {component}
        </div>
        {!hideCode && (
          <div
            data-slot="code"
            className="[&_[data-rehype-pretty-code-figure]]:!m-0 [&_[data-rehype-pretty-code-figure]]:rounded-t-none [&_[data-rehype-pretty-code-figure]]:border-t [&_pre]:max-h-[400px]"
          >
            {source}
          </div>
        )}
      </div>
    </div>
  )
}
