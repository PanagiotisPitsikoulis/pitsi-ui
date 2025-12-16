// Block utility functions using queryRegistry
import { queryRegistry, type RegistryItem } from "./registry"

export async function getAllBlocks(): Promise<RegistryItem[]> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "items",
  })
  return result as RegistryItem[]
}

export async function getAllBlockIds(): Promise<string[]> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "ids",
  })
  return result as string[]
}

export async function getAllMainCategories(): Promise<string[]> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "categories",
  })
  return result as string[]
}

export async function getSubcategories(
  mainCategory: string
): Promise<string[]> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    mainCategory,
    returnType: "subcategories",
  })
  return result as string[]
}

export async function getBlocksByCategory(
  mainCategory: string,
  subcategory?: string
): Promise<RegistryItem[]> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    mainCategory,
    subcategory,
    returnType: "items",
  })
  return result as RegistryItem[]
}

export async function getCategoryBlockCounts(): Promise<
  Record<string, number>
> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "counts",
  })
  return result as Record<string, number>
}

export async function getSubcategoryBlockCounts(
  mainCategory: string
): Promise<Record<string, number>> {
  const result = await queryRegistry({
    types: ["registry:block", "registry:internal"],
    mainCategory,
    returnType: "subcategoryCounts",
  })
  return result as Record<string, number>
}
