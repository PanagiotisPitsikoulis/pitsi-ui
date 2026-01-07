// Heavy functions that need the full registry are imported lazily
import type { RegistryItem } from "./registry"

// Block utility functions
// Re-export lightweight metadata functions (no heavy registry import)
// These are used by navigation components (site-header, site-footer)
export {
  getAllCategories,
  getCategoryBlockCounts,
  getBlocksByCategory as getBlockIdsByCategory,
  // Template metadata exports
  TEMPLATE_METADATA,
  getAllTemplatesFromRegistry,
  getServiceTemplatesFromRegistry,
  getApplicationTemplatesFromRegistry,
  type RegistryTemplateMetadata,
} from "@/registry/__blocks-metadata__"

import { COMPUTED_TEMPLATES } from "@/registry/__blocks-metadata__"

export interface BlockFilterOptions {
  palettes: string[]
  typographies: string[]
  templates: string[]
  tiers: string[]
  readinessOptions: string[]
}

export interface BlockMetadata {
  palette?: string
  typography?: string
  template?: string
}

// Extract unique filter options from all block configs
export function getBlockFilterOptions(): BlockFilterOptions {
  const palettes = new Set<string>()
  const typographies = new Set<string>()
  const templates = new Set<string>()

  for (const [slug, template] of Object.entries(COMPUTED_TEMPLATES)) {
    templates.add(slug)
    for (const block of template.blocks) {
      if (block.palette) palettes.add(block.palette)
      if (block.typography) typographies.add(block.typography)
    }
  }

  return {
    palettes: Array.from(palettes).sort(),
    typographies: Array.from(typographies).sort(),
    templates: Array.from(templates).sort(),
    tiers: ["free", "pro"],
    readinessOptions: ["production", "beta", "experimental"],
  }
}

// Get metadata for a specific block by name
export function getBlockMetadata(blockName: string): BlockMetadata | null {
  for (const [slug, template] of Object.entries(COMPUTED_TEMPLATES)) {
    const block = template.blocks.find((b) => b.name === blockName)
    if (block) {
      return {
        palette: block.palette,
        typography: block.typography,
        template: slug,
      }
    }
  }
  return null
}

export async function getAllBlocks(): Promise<RegistryItem[]> {
  const { queryRegistry } = await import("./registry")
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "items",
  })
  return result as RegistryItem[]
}

export async function getAllBlockIds(): Promise<string[]> {
  const { queryRegistry } = await import("./registry")
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "ids",
  })
  return result as string[]
}

export async function getBlocksByCategory(
  category: string
): Promise<RegistryItem[]> {
  const { queryRegistry } = await import("./registry")
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    filter: (item) => item.categories?.includes(category) ?? false,
    returnType: "items",
  })
  return result as RegistryItem[]
}
