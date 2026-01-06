"use client"

import type { ComponentType } from "react"

import { COMPUTED_TEMPLATES } from "@/registry/__blocks-metadata__"
import { Index } from "@/registry/__index__"

import type { TintLevel } from "./_components"
// Import types we need from server
import type { BlockType } from "./blocks.server"

// Re-export everything from server-safe utilities
export * from "./blocks.server"

// Registry style name
const STYLE_NAME = "new-york-v4"

// Get a lazy block component from the registry Index (client-only)
export function getBlockComponent(blockName: string): ComponentType | null {
  const styleIndex = Index[STYLE_NAME]
  if (!styleIndex) return null

  const item = styleIndex[blockName]
  if (!item?.component) return null

  return item.component
}

// Get all blocks for a template in render order (client-only - uses lazy components)
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
