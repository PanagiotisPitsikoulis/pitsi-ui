"use client"

import { Suspense } from "react"

import {
  BlockContainer,
  BlockThemeWrapper,
} from "@/app/(app)/(content)/(blocks)/_components"
import type { TintLevel } from "@/app/(app)/(content)/(blocks)/_components"

import { Blog1 } from "../blog/blog-1"
import { Contact1 } from "../contact/contact-1"
import { Cta1 } from "../cta/cta-1"
import { Faq1 } from "../faq/faq-1"
import { Features1 } from "../features/features-1"
import { Features2 } from "../features/features-2"
import { Features3 } from "../features/features-3"
import { Features4 } from "../features/features-4"
import { Features5 } from "../features/features-5"
import { Footer1 } from "../footer/footer-1"
import { Gallery1 } from "../gallery/gallery-1"
import { Header1 } from "../header/header-1"
import { Hero1 } from "../hero/hero-1"
import { Logos1 } from "../logos/logos-1"
import { Newsletter1 } from "../newsletter/newsletter-1"
import { Pricing1 } from "../pricing/pricing-1"
import { Products1 } from "../products/products-1"
import { Stats1 } from "../stats/stats-1"
import { Team1 } from "../team/team-1"
import { Testimonials1 } from "../testimonials/testimonials-1"

// Template palette for theming
const TEMPLATE_PALETTE = "sage" as const

// Block configuration matching template-config.ts
const blocks: Array<{
  Component: React.ComponentType
  tint: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  type: string
}> = [
  { Component: Header1, tint: "tinted", forceLight: true, type: "header" },
  { Component: Hero1, tint: "tinted", forceLight: true, type: "hero" },
  { Component: Logos1, tint: "deep", type: "logos" },
  { Component: Features1, tint: "tinted", type: "features" },
  { Component: Features2, tint: "tinted", type: "features" },
  { Component: Features3, tint: "tinted", type: "features" },
  { Component: Features4, tint: "tinted", type: "features" },
  { Component: Features5, tint: "tinted", type: "features" },
  { Component: Products1, tint: "tinted", type: "products" },
  { Component: Pricing1, tint: "tinted", type: "pricing" },
  { Component: Testimonials1, tint: "deep", type: "testimonials" },
  { Component: Gallery1, tint: "tinted", type: "gallery" },
  { Component: Team1, tint: "tinted", type: "team" },
  { Component: Stats1, tint: "deep", type: "stats" },
  { Component: Faq1, tint: "tinted", type: "faq" },
  { Component: Blog1, tint: "tinted", type: "blog" },
  { Component: Contact1, tint: "tinted", type: "contact" },
  { Component: Newsletter1, tint: "deep", type: "newsletter" },
  { Component: Cta1, tint: "tinted", type: "cta" },
  { Component: Footer1, tint: "tinted", type: "footer" },
]

export function ServicePlants() {
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
