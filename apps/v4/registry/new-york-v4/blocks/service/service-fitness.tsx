"use client"

import { Suspense } from "react"

import {
  BlockContainer,
  BlockThemeWrapper,
} from "@/app/(app)/(content)/(blocks)/_components"
import type { TintLevel } from "@/app/(app)/(content)/(blocks)/_components"

import { Features6 } from "../features/features-6"
import { Features7 } from "../features/features-7"
import { Features8 } from "../features/features-8"
import { Footer2 } from "../footer/footer-2"
import { Header9 } from "../header/header-9"
import { Hero5 } from "../hero/hero-5"
import { Pricing2 } from "../pricing/pricing-2"
import { Stats2 } from "../stats/stats-2"
import { Team2 } from "../team/team-2"
import { Testimonials2 } from "../testimonials/testimonials-2"

// Template palette for theming - fitness uses neutral/slate for the black & white theme
const TEMPLATE_PALETTE = "slate" as const

// Block configuration for fitness studio landing page
const blocks: Array<{
  Component: React.ComponentType
  tint: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  type: string
}> = [
  { Component: Header9, tint: "tinted", forceDark: true, type: "header" },
  { Component: Hero5, tint: "deep", forceDark: true, type: "hero" },
  { Component: Features6, tint: "deep", forceDark: true, type: "features" },
  { Component: Features7, tint: "deep", forceDark: true, type: "features" },
  { Component: Team2, tint: "deep", forceDark: true, type: "team" },
  { Component: Stats2, tint: "base", forceLight: true, type: "stats" },
  { Component: Pricing2, tint: "deep", forceDark: true, type: "pricing" },
  {
    Component: Testimonials2,
    tint: "deep",
    forceDark: true,
    type: "testimonials",
  },
  { Component: Features8, tint: "deep", forceDark: true, type: "features" },
  { Component: Footer2, tint: "deep", forceDark: true, type: "footer" },
]

export function ServiceFitness() {
  return (
    <BlockThemeWrapper palette={TEMPLATE_PALETTE} tint="tinted">
      <div className="min-h-screen">
        {blocks.map(
          ({ Component, tint, forceDark, forceLight, type }, index) => {
            const skipAlternatingBg =
              type === "hero" || type === "header" || forceDark || forceLight
            const skipPadding =
              type === "hero" || type === "header" || type === "footer"

            return (
              <BlockThemeWrapper
                key={index}
                palette={TEMPLATE_PALETTE}
                tint={tint}
                forceDark={forceDark}
                forceLight={forceLight}
              >
                <BlockContainer
                  index={index}
                  tint={tint}
                  forceBg={skipAlternatingBg ? "none" : undefined}
                  noPadding={skipPadding}
                >
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                </BlockContainer>
              </BlockThemeWrapper>
            )
          }
        )}
      </div>
    </BlockThemeWrapper>
  )
}
