// Runtime template helpers for blocks-first architecture
// Re-exports computed templates from __blocks-metadata__.ts and provides utilities

import {
  COMPUTED_TEMPLATES,
  getAllComputedTemplates,
  getBlocksByTemplateAndType,
  getComputedTemplate,
  type ComputedTemplate,
  type ComputedTemplateBlock,
} from "@/registry/__blocks-metadata__"

// Re-export types and data
export type { ComputedTemplate, ComputedTemplateBlock }
export {
  COMPUTED_TEMPLATES,
  getComputedTemplate,
  getAllComputedTemplates,
  getBlocksByTemplateAndType,
}

/**
 * Get the list of block types that have alternatives (more than one block)
 * Used to determine which block types need toggle UI
 */
export function getBlockTypesWithAlternatives(templateSlug: string): string[] {
  const template = COMPUTED_TEMPLATES[templateSlug]
  if (!template) return []

  return Object.entries(template.blockGroups)
    .filter(([_, blocks]) => blocks.length > 1)
    .map(([blockType]) => blockType)
}

/**
 * Get the default selected blocks for a template
 * Returns the first block of each type as the default selection
 */
export function getDefaultBlockSelections(
  templateSlug: string
): Record<string, string> {
  const template = COMPUTED_TEMPLATES[templateSlug]
  if (!template) return {}

  const selections: Record<string, string> = {}

  for (const [blockType, blocks] of Object.entries(template.blockGroups)) {
    if (blocks.length > 0) {
      selections[blockType] = blocks[0]
    }
  }

  return selections
}

/**
 * Get the blocks to render for a template given the current selections
 * Returns blocks in order, using the selected block for each type
 */
export function getSelectedTemplateBlocks(
  templateSlug: string,
  selections: Record<string, string>
): ComputedTemplateBlock[] {
  const template = COMPUTED_TEMPLATES[templateSlug]
  if (!template) return []

  // Build a map of which blocks are selected for each type
  const selectedBlockNames = new Set(Object.values(selections))

  // For types with only one block, that block is automatically selected
  for (const [blockType, blocks] of Object.entries(template.blockGroups)) {
    if (blocks.length === 1) {
      selectedBlockNames.add(blocks[0])
    }
  }

  // If a type has multiple blocks but no selection, use the first one
  for (const [blockType, blocks] of Object.entries(template.blockGroups)) {
    if (blocks.length > 1 && !selections[blockType]) {
      selectedBlockNames.add(blocks[0])
    }
  }

  // Filter and dedupe blocks, keeping only selected ones
  // We need to handle the case where multiple blocks of same type exist
  const seenTypes = new Set<string>()
  const result: ComputedTemplateBlock[] = []

  for (const block of template.blocks) {
    // Skip if we already have a block of this type
    if (seenTypes.has(block.blockType)) continue

    // If this is the selected block for its type
    if (selectedBlockNames.has(block.name)) {
      result.push(block)
      seenTypes.add(block.blockType)
    }
  }

  return result
}

/**
 * Get the config for a specific block by name
 */
export function getBlockConfig(
  templateSlug: string,
  blockName: string
): ComputedTemplateBlock | null {
  const template = COMPUTED_TEMPLATES[templateSlug]
  if (!template) return null

  return template.blocks.find((b) => b.name === blockName) || null
}

/**
 * Get all template slugs
 */
export function getAllTemplateSlugs(): string[] {
  return Object.keys(COMPUTED_TEMPLATES)
}

/**
 * Get templates by type
 */
export function getTemplatesByType(
  type: "service" | "application"
): ComputedTemplate[] {
  return getAllComputedTemplates().filter((t) => t.type === type)
}

/**
 * Check if a template uses a specific palette
 */
export function templateUsesPalette(
  templateSlug: string,
  palette: string
): boolean {
  const template = COMPUTED_TEMPLATES[templateSlug]
  return template?.palette === palette
}

/**
 * Check if a template uses a specific typography preset
 */
export function templateUsesTypography(
  templateSlug: string,
  typography: string
): boolean {
  const template = COMPUTED_TEMPLATES[templateSlug]
  return template?.typography === typography
}
