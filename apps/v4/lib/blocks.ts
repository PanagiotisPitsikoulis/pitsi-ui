// Block utility functions
// Re-export lightweight metadata functions (no heavy registry import)
// These are used by navigation components (site-header, site-footer)
export {
  getAllMainCategories,
  getSubcategories,
  getCategoryBlockCounts,
  getSubcategoryBlockCounts,
  getBlocksByCategory as getBlockIdsByCategory,
} from "@/registry/__blocks-metadata__"

// Heavy functions that need the full registry are imported lazily
import type { RegistryItem } from "./registry"

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
  mainCategory: string,
  subcategory?: string
): Promise<RegistryItem[]> {
  const { queryRegistry } = await import("./registry")
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    mainCategory,
    subcategory,
    returnType: "items",
  })
  return result as RegistryItem[]
}
