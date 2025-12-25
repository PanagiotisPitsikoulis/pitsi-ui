"use client"

import type { ComponentType } from "react"

import type { TintLevel } from "./_components"

// Template slugs
export const TEMPLATE_SLUGS = ["service-plants"] as const

export type TemplateSlug = (typeof TEMPLATE_SLUGS)[number]

// Block types in render order
export const BLOCK_TYPES = [
  "header",
  "hero",
  "features",
  "products",
  "pricing",
  "testimonials",
  "gallery",
  "team",
  "stats",
  "logos",
  "faq",
  "blog",
  "contact",
  "newsletter",
  "cta",
  "footer",
] as const

export type BlockType = (typeof BLOCK_TYPES)[number]

// Dynamic imports for all blocks
// Using require() for synchronous imports in the client bundle

const blockImports: Record<BlockType, Record<string, ComponentType>> = {
  header: {
    "service-plants": require("./header/service-plants/header").HeaderServicePlants,
  },
  hero: {
    "service-plants": require("./hero/service-plants/hero").HeroServicePlants,
  },
  features: {
    "service-plants": require("./features/service-plants/features").FeaturesServicePlants,
    "service-plants-2": require("./features/service-plants/features-2").FeaturesServicePlants2,
    "service-plants-3": require("./features/service-plants/features-3").FeaturesServicePlants3,
    "service-plants-4": require("./features/service-plants/features-4").FeaturesServicePlants4,
    "service-plants-5": require("./features/service-plants/features-5").FeaturesServicePlants5,
  },
  products: {
    "service-plants": require("./products/service-plants/products").ProductsServicePlants,
  },
  pricing: {
    "service-plants": require("./pricing/service-plants/pricing").PricingServicePlants,
  },
  testimonials: {
    "service-plants": require("./testimonials/service-plants/testimonials").TestimonialsServicePlants,
  },
  gallery: {
    "service-plants": require("./gallery/service-plants/gallery").GalleryServicePlants,
  },
  team: {
    "service-plants": require("./team/service-plants/team").TeamServicePlants,
  },
  stats: {
    "service-plants": require("./stats/service-plants/stats").StatsServicePlants,
  },
  logos: {
    "service-plants": require("./logos/service-plants/logos").LogosServicePlants,
  },
  faq: {
    "service-plants": require("./faq/service-plants/faq").FaqServicePlants,
  },
  blog: {
    "service-plants": require("./blog/service-plants/blog").BlogServicePlants,
  },
  contact: {
    "service-plants": require("./contact/service-plants/contact").ContactServicePlants,
  },
  newsletter: {
    "service-plants": require("./newsletter/service-plants/newsletter").NewsletterServicePlants,
  },
  cta: {
    "service-plants": require("./cta/service-plants/cta").CTAServicePlants,
  },
  footer: {
    "service-plants": require("./footer/service-plants/footer").FooterServicePlants,
  },
}

// Block tint overrides - only specify if different from default "tinted"
// Format: "blockType:slug" -> TintLevel
const blockTints: Record<string, TintLevel> = {
  // service-plants deep tint sections
  "logos:service-plants": "deep",
  "stats:service-plants": "deep",
  "testimonials:service-plants": "deep",
  "newsletter:service-plants": "deep",
}

// Block forceDark overrides - forces dark mode for specific blocks
const blockForceDark: Record<string, boolean> = {}

// Block forceLight overrides - forces light mode for specific blocks
const blockForceLight: Record<string, boolean> = {
  "header:service-plants": true,
  "hero:service-plants": true,
}

// Custom block order for templates with multiple blocks of same type
const customBlockOrder: Record<string, string[]> = {
  "service-plants": [
    "header",
    "hero",
    "logos",
    "features",
    "features-2",
    "features-3",
    "features-4",
    "features-5",
    "products",
    "pricing",
    "testimonials",
    "gallery",
    "team",
    "stats",
    "faq",
    "blog",
    "contact",
    "newsletter",
    "cta",
    "footer",
  ],
}

// Get tint level for a specific block
export function getBlockTint(blockType: BlockType, slug: string): TintLevel | undefined {
  const key = `${blockType}:${slug}`
  return blockTints[key]
}

// Get forceDark for a specific block
export function getBlockForceDark(blockType: BlockType, slug: string): boolean | undefined {
  const key = `${blockType}:${slug}`
  return blockForceDark[key]
}

// Get forceLight for a specific block
export function getBlockForceLight(blockType: BlockType, slug: string): boolean | undefined {
  const key = `${blockType}:${slug}`
  return blockForceLight[key]
}

// Get a block component for a template
export function getBlock(
  blockType: BlockType,
  slug: string
): ComponentType | null {
  return blockImports[blockType]?.[slug] || null
}

// Get all blocks for a template in render order
export function getTemplateBlocks(slug: string): Array<{
  type: BlockType
  Component: ComponentType
  tint?: TintLevel // Only set if different from default
  forceDark?: boolean // Force dark mode for this block
  forceLight?: boolean // Force light mode for this block
  blockKey: string // Unique key for the block (e.g., "features" or "features-2")
}> {
  const blocks: Array<{
    type: BlockType
    Component: ComponentType
    tint?: TintLevel
    forceDark?: boolean
    forceLight?: boolean
    blockKey: string
  }> = []

  // Check if template has custom block order
  const blockOrder = customBlockOrder[slug]

  if (blockOrder) {
    // Use custom block order for templates with multiple blocks of same type
    for (const blockKey of blockOrder) {
      // Parse blockKey: "features" or "features-2"
      const [baseType, variant] = blockKey.split("-")
      const blockType = baseType as BlockType

      // Build the import key: "service-plants" or "service-plants-2"
      const importKey = variant ? `${slug}-${variant}` : slug

      const Component = blockImports[blockType]?.[importKey] || blockImports[blockType]?.[slug]
      if (Component) {
        const tint = getBlockTint(blockType, slug)
        const forceDark = getBlockForceDark(blockType, slug)
        const forceLight = getBlockForceLight(blockType, slug)
        blocks.push({ type: blockType, Component, tint, forceDark, forceLight, blockKey })
      }
    }
  } else {
    // Default: use BLOCK_TYPES order with single block per type
    for (const blockType of BLOCK_TYPES) {
      const Component = getBlock(blockType, slug)
      if (Component) {
        const tint = getBlockTint(blockType, slug)
        const forceDark = getBlockForceDark(blockType, slug)
        const forceLight = getBlockForceLight(blockType, slug)
        blocks.push({ type: blockType, Component, tint, forceDark, forceLight, blockKey: blockType })
      }
    }
  }

  return blocks
}

// Get hero component for templates listing page
export function getHeroComponent(slug: string): ComponentType | null {
  return blockImports.hero[slug] || null
}

// Export all hero components for the listing page
export const heroComponents = blockImports.hero
