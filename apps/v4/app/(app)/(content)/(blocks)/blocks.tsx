"use client"

import type { ComponentType } from "react"

import { Index } from "@/registry/__index__"

import type { TintLevel } from "./_components"
import {
  getBlockRenderSettings,
  getTemplateConfig,
  TEMPLATE_SLUGS,
  type TemplateSlug,
} from "./template-config"

// Re-export from template-config for convenience
export { TEMPLATE_SLUGS, type TemplateSlug }
export { getBlockRenderSettings as getBlockSettings } from "./template-config"

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
] as const

export type BlockType = (typeof BLOCK_TYPES)[number]

// Registry style name
const STYLE_NAME = "new-york-v4"

// Get block type from block name (e.g., "header-1" -> "header")
function getBlockType(blockName: string): BlockType | null {
  const match = blockName.match(/^([a-z]+)-\d+$/)
  if (!match) return null
  const type = match[1] as BlockType
  return BLOCK_TYPES.includes(type) ? type : null
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
export function getTemplateBlocks(slug: string): Array<{
  name: string
  type: BlockType
  Component: ComponentType
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}> {
  const config = getTemplateConfig(slug)
  if (!config) return []

  const blocks: Array<{
    name: string
    type: BlockType
    Component: ComponentType
    tint?: TintLevel
    forceDark?: boolean
    forceLight?: boolean
  }> = []

  for (const blockConfig of config.blocks) {
    const Component = getBlockComponent(blockConfig.name)
    const blockType = getBlockType(blockConfig.name)

    if (Component && blockType) {
      blocks.push({
        name: blockConfig.name,
        type: blockType,
        Component,
        tint: blockConfig.tint,
        forceDark: blockConfig.forceDark,
        forceLight: blockConfig.forceLight,
      })
    }
  }

  return blocks
}
