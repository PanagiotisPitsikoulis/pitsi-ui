import { registryItemSchema } from "pitsi/schema"
import { z } from "zod"

// Utility function to extract main category from block's file path
function getBlockMainCategory(
  block: z.infer<typeof registryItemSchema>
): string | null {
  const firstFile = block.files?.[0]
  if (!firstFile?.path) return null

  // Path format: registry/[style]/blocks/[category]/[subcategory]/... or blocks/[category]/[subcategory]/...
  const match = firstFile.path.match(/blocks\/([^/]+)\//)
  return match ? match[1] : null
}

// Utility function to extract subcategory from block's file path
function getBlockSubcategory(
  block: z.infer<typeof registryItemSchema>
): string | null {
  const firstFile = block.files?.[0]
  if (!firstFile?.path) return null

  // Path format: registry/[style]/blocks/[category]/[subcategory]/[block-name]/...
  const match = firstFile.path.match(/blocks\/[^/]+\/([^/]+)\//)
  return match ? match[1] : null
}

export async function getAllBlocks(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
) {
  const { Index } = await import("@/registry/__index__")

  // Collect all blocks from all styles.
  const allBlocks: z.infer<typeof registryItemSchema>[] = []

  for (const style in Index) {
    const styleIndex = Index[style]
    if (typeof styleIndex === "object" && styleIndex !== null) {
      for (const itemName in styleIndex) {
        const item = styleIndex[itemName]
        allBlocks.push(item)
      }
    }
  }

  // Validate each block.
  const validatedBlocks = allBlocks
    .map((block) => {
      const result = registryItemSchema.safeParse(block)
      return result.success ? result.data : null
    })
    .filter(
      (block): block is z.infer<typeof registryItemSchema> => block !== null
    )

  return validatedBlocks.filter(
    (block) =>
      types.includes(block.type) &&
      (categories.length === 0 ||
        block.categories?.some((category) => categories.includes(category))) &&
      !block.name.startsWith("chart-")
  )
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

// Get all unique main categories from blocks
export async function getAllMainCategories(): Promise<string[]> {
  const blocks = await getAllBlocks()
  const categories = new Set<string>()

  blocks.forEach((block) => {
    const category = getBlockMainCategory(block)
    if (category) categories.add(category)
  })

  return Array.from(categories).sort()
}

// Get all subcategories for a specific main category
export async function getSubcategories(mainCategory: string): Promise<string[]> {
  const blocks = await getAllBlocks()
  const subcategories = new Set<string>()

  blocks.forEach((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    const blockSubcategory = getBlockSubcategory(block)

    if (blockMainCategory === mainCategory && blockSubcategory) {
      subcategories.add(blockSubcategory)
    }
  })

  return Array.from(subcategories).sort()
}

// Get blocks by main category and optional subcategory
export async function getBlocksByCategory(
  mainCategory: string,
  subcategory?: string
): Promise<string[]> {
  const blocks = await getAllBlocks()

  const filteredBlocks = blocks.filter((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    if (blockMainCategory !== mainCategory) return false

    if (subcategory) {
      const blockSubcategory = getBlockSubcategory(block)
      return blockSubcategory === subcategory
    }

    return true
  })

  return filteredBlocks.map((block) => block.name)
}

// Get block counts for all main categories
export async function getCategoryBlockCounts(): Promise<Record<string, number>> {
  const blocks = await getAllBlocks()
  const counts: Record<string, number> = {}

  blocks.forEach((block) => {
    const category = getBlockMainCategory(block)
    if (category) {
      counts[category] = (counts[category] || 0) + 1
    }
  })

  return counts
}

// Get block counts for all subcategories within a main category
export async function getSubcategoryBlockCounts(
  mainCategory: string
): Promise<Record<string, number>> {
  const blocks = await getAllBlocks()
  const counts: Record<string, number> = {}

  blocks.forEach((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    const blockSubcategory = getBlockSubcategory(block)

    if (blockMainCategory === mainCategory && blockSubcategory) {
      counts[blockSubcategory] = (counts[blockSubcategory] || 0) + 1
    }
  })

  return counts
}
