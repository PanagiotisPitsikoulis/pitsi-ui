import type { TintLevel } from "./_components"

// Template metadata
export interface TemplateMetadata {
  slug: string
  name: string
  description: string
  heroBlock: string // The hero block to use for preview
}

// Block configuration within a template
export interface BlockConfig {
  name: string
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}

// Complete template configuration
export interface TemplateConfig {
  metadata: TemplateMetadata
  blocks: BlockConfig[]
}

// All template configurations
export const templateConfigs: Record<string, TemplateConfig> = {
  "service-travel": {
    metadata: {
      slug: "service-travel",
      name: "Travel Agency",
      description: "A stunning template for travel agencies and tour operators",
      heroBlock: "hero-2",
    },
    blocks: [
      { name: "hero-2", forceLight: true },
    ],
  },
  "service-boat": {
    metadata: {
      slug: "service-boat",
      name: "Yacht Charter",
      description: "A luxury template for yacht rentals and marine services",
      heroBlock: "hero-3",
    },
    blocks: [
      { name: "hero-3", forceLight: true },
    ],
  },
  "service-plants": {
    metadata: {
      slug: "service-plants",
      name: "Service Plants",
      description: "A modern template for plant care services and nurseries",
      heroBlock: "hero-1",
    },
    blocks: [
      { name: "header-1", forceLight: true },
      { name: "hero-1", forceLight: true },
      { name: "logos-1", tint: "deep" },
      { name: "features-1" },
      { name: "features-2" },
      { name: "features-3" },
      { name: "features-4" },
      { name: "features-5" },
      { name: "products-1" },
      { name: "pricing-1" },
      { name: "testimonials-1", tint: "deep" },
      { name: "gallery-1" },
      { name: "team-1" },
      { name: "stats-1", tint: "deep" },
      { name: "faq-1" },
      { name: "blog-1" },
      { name: "contact-1" },
      { name: "newsletter-1", tint: "deep" },
      { name: "cta-1" },
      { name: "footer-1" },
    ],
  },
}

// Get all template slugs
export const TEMPLATE_SLUGS = Object.keys(templateConfigs) as TemplateSlug[]
export type TemplateSlug = keyof typeof templateConfigs

// Get all templates metadata for listing
export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return Object.values(templateConfigs).map((config) => config.metadata)
}

// Get template config by slug
export function getTemplateConfig(slug: string): TemplateConfig | null {
  return templateConfigs[slug] || null
}

// Get template metadata by slug
export function getTemplateMetadata(slug: string): TemplateMetadata | null {
  return templateConfigs[slug]?.metadata || null
}

// Get block configuration from a template
export function getBlockConfig(
  templateSlug: string,
  blockName: string
): BlockConfig | null {
  const config = templateConfigs[templateSlug]
  if (!config) return null
  return config.blocks.find((b) => b.name === blockName) || null
}

// Reverse lookup: find which template a block belongs to
export function getTemplateForBlock(blockName: string): TemplateSlug | null {
  for (const [slug, config] of Object.entries(templateConfigs)) {
    if (config.blocks.some((b) => b.name === blockName)) {
      return slug as TemplateSlug
    }
  }
  return null
}

// Get block index within its template (for alternating backgrounds)
export function getBlockIndex(
  templateSlug: string,
  blockName: string
): number {
  const config = templateConfigs[templateSlug]
  if (!config) return 0
  const index = config.blocks.findIndex((b) => b.name === blockName)
  return index === -1 ? 0 : index
}

// Get complete block settings for standalone rendering
export function getBlockRenderSettings(blockName: string): {
  templateSlug: TemplateSlug | null
  tint: TintLevel | undefined
  forceDark: boolean | undefined
  forceLight: boolean | undefined
  blockType: string | null
  index: number
} {
  const templateSlug = getTemplateForBlock(blockName)

  if (!templateSlug) {
    return {
      templateSlug: null,
      tint: undefined,
      forceDark: undefined,
      forceLight: undefined,
      blockType: null,
      index: 0,
    }
  }

  const blockConfig = getBlockConfig(templateSlug, blockName)
  const index = getBlockIndex(templateSlug, blockName)

  // Extract block type from name (e.g., "hero-1" -> "hero")
  const match = blockName.match(/^([a-z]+)-\d+$/)
  const blockType = match ? match[1] : null

  return {
    templateSlug,
    tint: blockConfig?.tint,
    forceDark: blockConfig?.forceDark,
    forceLight: blockConfig?.forceLight,
    blockType,
    index,
  }
}
