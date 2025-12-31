"use client"

import { Suspense } from "react"

import {
  BlockContainer,
  BlockThemeWrapper,
} from "@/app/(app)/(content)/(blocks)/_components"
import type { TintLevel } from "@/app/(app)/(content)/(blocks)/_components"

import { Hero3 } from "../hero/hero-3"

// Template palette for theming
const TEMPLATE_PALETTE = "azure" as const

// Block configuration matching template-config.ts
const blocks: Array<{
  Component: React.ComponentType
  tint: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  type: string
}> = [{ Component: Hero3, tint: "tinted", forceLight: true, type: "hero" }]

export function ServiceBoat() {
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
