import { registryItemSchema } from "pitsi/schema"
import { z } from "zod"

import {
  getAllComponentCategories as getAllComponentCategoriesUtil,
  getAllComponentIds as getAllComponentIdsUtil,
  getAllComponents as getAllComponentsUtil,
  getCategoryComponentCounts as getCategoryComponentCountsUtil,
  getComponentsByCategory as getComponentsByCategoryUtil,
} from "./index"



export async function getAllComponents(
  types: z.infer<typeof registryItemSchema>["type"][] = ["registry:ui"],
  categories: string[] = []
) {
  return await getAllComponentsUtil({ types, categories })
}

export async function getAllComponentIds(
  types: z.infer<typeof registryItemSchema>["type"][] = ["registry:ui"],
  categories: string[] = []
): Promise<string[]> {
  return await getAllComponentIdsUtil({ types, categories })
}

export async function getAllComponentCategories(): Promise<string[]> {
  return await getAllComponentCategoriesUtil()
}

export async function getComponentsByCategory(
  category: string
): Promise<string[]> {
  return await getComponentsByCategoryUtil(category)
}

export async function getCategoryComponentCounts(): Promise<
  Record<string, number>
> {
  return await getCategoryComponentCountsUtil()
}
