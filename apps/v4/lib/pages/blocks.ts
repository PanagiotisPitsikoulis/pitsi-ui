import { Metadata } from "next"

import { getAllCategories, getBlockIdsByCategory } from "@/lib/blocks"
import { formatName } from "@/lib/format"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"

export async function generateBlockStaticParams() {
  try {
    const categories = getAllCategories()
    const params: Array<{
      category: string
      blockName: string
    }> = []

    for (const category of categories) {
      const blockIds = getBlockIdsByCategory(category)
      for (const blockName of blockIds) {
        params.push({ category, blockName })
      }
    }

    // Return at least one fallback param if empty (required for cache components)
    if (params.length === 0) {
      return [{ category: "header", blockName: "header-1" }]
    }

    return params
  } catch (error) {
    console.warn("Failed to generate block static params:", error)
    return [{ category: "header", blockName: "header-1" }]
  }
}

export async function generateBlockMetadata({
  category,
  blockName,
}: {
  category: string
  blockName: string
}): Promise<Metadata> {
  try {
    const item = (await queryRegistry({
      name: blockName,
    })) as RegistryItem | null

    const title = item?.name || formatName(blockName)
    const description =
      item?.description ||
      `${formatName(blockName)} block for ${formatName(category)}`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        images: [
          {
            url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
    }
  } catch (error) {
    console.warn(`Failed to generate metadata for block ${blockName}:`, error)
    const title = formatName(blockName)
    const description = `${formatName(blockName)} block for ${formatName(category)}`
    return { title, description }
  }
}

export async function generateCategoryStaticParams() {
  try {
    const categories = getAllCategories()

    // Return at least one fallback param if empty (required for cache components)
    if (categories.length === 0) {
      return [{ category: "all" }, { category: "header" }]
    }

    // Include "all" category first
    return [
      { category: "all" },
      ...categories.map((category) => ({ category })),
    ]
  } catch (error) {
    console.warn("Failed to generate category static params:", error)
    return [{ category: "all" }, { category: "header" }]
  }
}
