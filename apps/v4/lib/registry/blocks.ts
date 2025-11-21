import { registryItemSchema } from "pitsi/schema"
import { z } from "zod"

import {
  getAllBlocks as getAllBlocksUtil,
  getBlockCategoryBlockCounts as getBlockCategoryBlockCountsUtil,
  getBlockMainCategories as getBlockMainCategoriesUtil,
  getBlocksByCategoryNames as getBlocksByCategoryUtil,
  getBlockSubcategories as getBlockSubcategoriesUtil,
  getBlockSubcategoryBlockCounts as getBlockSubcategoryBlockCountsUtil,
} from "./index"



export async function getAllBlocks(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
) {
  return await getAllBlocksUtil({
    categories,
    excludeCharts: true,
  })
}

export async function getAllBlockIds(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)
  return blocks.map((block) => block.name)
}

export async function getAllMainCategories(): Promise<string[]> {
  return await getBlockMainCategoriesUtil()
}

export async function getSubcategories(
  mainCategory: string
): Promise<string[]> {
  return await getBlockSubcategoriesUtil(mainCategory)
}

export async function getBlocksByCategory(
  mainCategory: string,
  subcategory?: string
): Promise<string[]> {
  return await getBlocksByCategoryUtil(mainCategory, subcategory)
}

export async function getCategoryBlockCounts(): Promise<
  Record<string, number>
> {
  return await getBlockCategoryBlockCountsUtil()
}

export async function getSubcategoryBlockCounts(
  mainCategory: string
): Promise<Record<string, number>> {
  return await getBlockSubcategoryBlockCountsUtil(mainCategory)
}
