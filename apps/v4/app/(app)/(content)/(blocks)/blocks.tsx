"use client"

import type { ComponentType } from "react"

import { Index } from "@/registry/__index__"
import {
  COMPUTED_TEMPLATES,
  type ComputedTemplateBlock,
} from "@/registry/__blocks-metadata__"

import type { TintLevel } from "./_components"
import type { ColorPalette } from "@/registry/new-york-v4/lib/block-theme"

// Template slugs from computed templates
export const TEMPLATE_SLUGS = Object.keys(COMPUTED_TEMPLATES)
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

// Registry style name
const STYLE_NAME = "new-york-v4"

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

// Get a lazy block component from the registry Index
export function getBlockComponent(blockName: string): ComponentType | null {
  const styleIndex = Index[STYLE_NAME]
  if (!styleIndex) return null

  const item = styleIndex[blockName]
  if (!item?.component) return null

  return item.component
}

// Get all blocks for a template in render order
// Now uses COMPUTED_TEMPLATES as the source of truth
export function getTemplateBlocks(
  slug: string,
  selectedBlocks?: Record<string, string> // blockType -> selected block name
): Array<{
  name: string
  type: BlockType
  Component: ComponentType
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  palette?: string
  typography?: string
}> {
  const template = COMPUTED_TEMPLATES[slug]
  if (!template) return []

  const blocks: Array<{
    name: string
    type: BlockType
    Component: ComponentType
    tint?: TintLevel
    forceDark?: boolean
    forceLight?: boolean
    palette?: string
    typography?: string
  }> = []

  // Track which block types we've already added (for selection)
  const addedTypes = new Set<string>()

  for (const blockConfig of template.blocks) {
    const blockType = blockConfig.blockType

    // If we've already added a block of this type, skip
    // (unless it's the selected one)
    if (addedTypes.has(blockType)) {
      // Check if this is the selected block for this type
      const selectedForType = selectedBlocks?.[blockType]
      if (selectedForType !== blockConfig.name) {
        continue
      }
    }

    // If there are multiple blocks of this type, check if one is selected
    const blocksOfType = template.blockGroups[blockType] || []
    if (blocksOfType.length > 1) {
      const selectedForType = selectedBlocks?.[blockType] || blocksOfType[0]
      if (blockConfig.name !== selectedForType) {
        continue
      }
    }

    const Component = getBlockComponent(blockConfig.name)
    if (!Component) continue

    blocks.push({
      name: blockConfig.name,
      type: blockType as BlockType,
      Component,
      tint: blockConfig.tint as TintLevel | undefined,
      forceDark: blockConfig.forceDark,
      forceLight: blockConfig.forceLight,
      palette: blockConfig.palette,
      typography: blockConfig.typography,
    })

    addedTypes.add(blockType)
  }

  return blocks
}

// Get template palette from computed templates
export function getComputedTemplatePalette(slug: string): ColorPalette {
  return (COMPUTED_TEMPLATES[slug]?.palette || "slate") as ColorPalette
}

// Get template typography from computed templates
export function getComputedTemplateTypography(slug: string): string {
  return COMPUTED_TEMPLATES[slug]?.typography || "modern"
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
