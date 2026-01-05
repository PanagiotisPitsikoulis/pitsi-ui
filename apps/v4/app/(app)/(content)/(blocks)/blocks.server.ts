/**
 * Server-safe block and template utilities.
 * These functions only read from COMPUTED_TEMPLATES and can be used in server components.
 */

import {
  COMPUTED_TEMPLATES,
  type ComputedTemplate,
  type ComputedTemplateBlock,
} from "@/registry/__blocks-metadata__"

import type { TintLevel } from "./_components"

// Re-export types for consumers
export type { ComputedTemplate, ComputedTemplateBlock }

// Block config type (simplified from ComputedTemplateBlock)
export interface BlockConfig {
  name: string
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}

// Template slugs from computed templates
export const TEMPLATE_SLUGS = Object.keys(COMPUTED_TEMPLATES)
export const ALL_TEMPLATE_SLUGS = TEMPLATE_SLUGS
export type TemplateSlug = keyof typeof COMPUTED_TEMPLATES

// Block types in render order
export const BLOCK_TYPES = [
  "header",
  "hero",
  "logos",
  "features",
  "showcase",
  "bento",
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
  // Application block types
  "shell",
  "view",
  "auth",
  "maps",
] as const

export type BlockType = (typeof BLOCK_TYPES)[number]

// Get block type from block name (e.g., "header-1" -> "header")
export function getBlockType(blockName: string): BlockType | null {
  // Handle app- prefix blocks (e.g., "app-gym-shell-1" -> "shell" based on blockConfig)
  const computed = getBlockConfigFromComputed(blockName)
  if (computed) {
    return computed.blockType as BlockType
  }

  // Fallback: extract from name
  const match = blockName.match(/^([a-z]+)-\d+$/)
  if (!match) return null
  const type = match[1] as BlockType
  return BLOCK_TYPES.includes(type) ? type : null
}

// Get block config from computed templates
function getBlockConfigFromComputed(
  blockName: string
): ComputedTemplateBlock | null {
  for (const template of Object.values(COMPUTED_TEMPLATES)) {
    const block = template.blocks.find((b) => b.name === blockName)
    if (block) return block
  }
  return null
}

// Get block render settings from computed templates
export function getBlockSettings(blockName: string): {
  templateSlug: string | null
  tint: TintLevel | undefined
  forceDark: boolean | undefined
  forceLight: boolean | undefined
  blockType: string | null
  index: number
  palette: string | undefined
  typography: string | undefined
} {
  for (const [slug, template] of Object.entries(COMPUTED_TEMPLATES)) {
    const blockIndex = template.blocks.findIndex((b) => b.name === blockName)
    if (blockIndex !== -1) {
      const block = template.blocks[blockIndex]
      return {
        templateSlug: slug,
        tint: block.tint as TintLevel | undefined,
        forceDark: block.forceDark,
        forceLight: block.forceLight,
        blockType: block.blockType,
        index: blockIndex,
        palette: block.palette,
        typography: block.typography,
      }
    }
  }

  return {
    templateSlug: null,
    tint: undefined,
    forceDark: undefined,
    forceLight: undefined,
    blockType: null,
    index: 0,
    palette: undefined,
    typography: undefined,
  }
}


// Get block groups (block types with multiple options) for a template
export function getTemplateBlockGroups(
  slug: string
): Record<string, string[]> {
  return COMPUTED_TEMPLATES[slug]?.blockGroups || {}
}

// Get hero options for a template (from block groups)
export function getComputedHeroOptions(slug: string): string[] {
  const groups = getTemplateBlockGroups(slug)
  return groups["hero"] || []
}

// Get default hero for a template
export function getComputedDefaultHero(slug: string): string | null {
  const options = getComputedHeroOptions(slug)
  return options[0] || COMPUTED_TEMPLATES[slug]?.heroBlock || null
}

// Get block groups that have multiple variants (2+ options)
export function getTemplateBlockGroupsWithVariants(
  slug: string
): Record<string, string[]> {
  const groups = getTemplateBlockGroups(slug)
  return Object.fromEntries(
    Object.entries(groups).filter(([_, options]) => options.length > 1)
  )
}

// Get which template a block belongs to
export function getTemplateForBlock(blockName: string): string | null {
  return getBlockSettings(blockName).templateSlug
}

// Get block index within its template
export function getBlockIndex(templateSlug: string, blockName: string): number {
  const template = COMPUTED_TEMPLATES[templateSlug]
  if (!template) return 0
  const index = template.blocks.findIndex((b) => b.name === blockName)
  return index === -1 ? 0 : index
}

// Get template metadata (name, description)
export function getTemplateMetadata(slug: string): {
  slug: string
  name: string
  description: string
  heroBlock: string
} | null {
  const template = COMPUTED_TEMPLATES[slug]
  if (!template) return null
  return {
    slug: template.slug,
    name: template.name,
    description: template.description,
    heroBlock: template.heroBlock,
  }
}

// Check if template is an application template
export function isApplicationTemplate(slug: string): boolean {
  return COMPUTED_TEMPLATES[slug]?.type === "application"
}

// Navigation item type for application templates
export interface NavigationItem {
  name: string
  label: string
  icon: string
  shortcut?: string
}

// Application template info returned by getShellForBlock
export interface ApplicationTemplateInfo {
  slug: string
  name: string
  navigation: NavigationItem[]
}

// Helper to get icon for view based on label
function getIconForView(label: string): string {
  const iconMap: Record<string, string> = {
    today: "LayoutDashboard",
    dashboard: "LayoutDashboard",
    log: "Dumbbell",
    history: "Calendar",
    gains: "TrendingUp",
    library: "Library",
    profile: "User",
    browse: "Search",
    active: "Play",
    results: "Trophy",
    settings: "Settings",
  }
  return iconMap[label.toLowerCase()] || "Circle"
}

// Get application shell for a view block (returns full template info)
export function getShellForBlock(blockName: string): {
  shell: string
  template: ApplicationTemplateInfo
} | null {
  for (const [slug, template] of Object.entries(COMPUTED_TEMPLATES)) {
    if (template.type !== "application") continue

    // Check if this block is a view in this application
    const viewBlocks = template.blockGroups["view"] || []
    if (viewBlocks.includes(blockName)) {
      // Find the shell block
      const shellBlocks = template.blockGroups["shell"] || []
      const shell = shellBlocks[0]
      if (shell) {
        // Build navigation from view blocks
        const navigation: NavigationItem[] = viewBlocks.map((viewName, index) => {
          const parts = viewName.replace(/-\d+$/, "").split("-")
          const label = parts[parts.length - 1] || "View"
          return {
            name: viewName,
            label: label.charAt(0).toUpperCase() + label.slice(1),
            icon: getIconForView(label),
            shortcut: String(index + 1),
          }
        })

        return {
          shell,
          template: {
            slug,
            name: template.name,
            navigation,
          },
        }
      }
    }
  }
  return null
}

// Alias for backwards compatibility
export const getApplicationShellForBlock = getShellForBlock

// Get application template config (for backwards compatibility)
export function getApplicationTemplateConfig(slug: string): {
  metadata: { name: string; description: string; heroBlock: string }
  shell: string
  views: BlockConfig[]
} | null {
  const template = COMPUTED_TEMPLATES[slug]
  if (!template || template.type !== "application") return null

  const shellBlocks = template.blockGroups["shell"] || []
  const viewBlocks = template.blockGroups["view"] || []

  return {
    metadata: {
      name: template.name,
      description: template.description,
      heroBlock: template.heroBlock,
    },
    shell: shellBlocks[0] || "",
    views: viewBlocks.map((name) => ({ name })),
  }
}

// Get block render settings (alias for getBlockSettings with different return shape)
export function getBlockRenderSettings(blockName: string): {
  templateSlug: string | null
  tint: TintLevel | undefined
  forceDark: boolean | undefined
  forceLight: boolean | undefined
  blockType: string | null
  index: number
  palette: string | undefined
  typography: string | undefined
} {
  return getBlockSettings(blockName)
}
