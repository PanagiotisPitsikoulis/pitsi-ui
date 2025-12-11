import { Metadata } from "next"

import { formatName } from "@/lib/format"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"

export async function generateBlockStaticParams() {
  try {
    const categories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    const params: Array<{
      category: string
      subcategory: string
      blockName: string
    }> = []

    for (const category of categories) {
      try {
        const subcategories = (await queryRegistry({
          returnType: "subcategories",
          mainCategory: category,
        })) as string[]

        for (const subcategory of subcategories) {
          try {
            const blocks = (await queryRegistry({
              returnType: "items",
              mainCategory: category,
              subcategory,
            })) as RegistryItem[]

            for (const block of blocks) {
              params.push({
                category,
                subcategory,
                blockName: block.name,
              })
            }
          } catch (error) {
            console.warn(`Failed to get blocks for ${category}/${subcategory}:`, error)
          }
        }
      } catch (error) {
        console.warn(`Failed to get subcategories for ${category}:`, error)
      }
    }

    // Return at least one fallback param if empty (required for cache components)
    if (params.length === 0) {
      return [{ category: "application", subcategory: "dashboard", blockName: "sidebar-01" }]
    }

    return params
  } catch (error) {
    console.warn("Failed to generate block static params:", error)
    return [{ category: "application", subcategory: "dashboard", blockName: "sidebar-01" }]
  }
}

export async function generateBlockMetadata({
  category,
  subcategory,
  blockName,
}: {
  category: string
  subcategory: string
  blockName: string
}): Promise<Metadata> {
  try {
    const item = (await queryRegistry({ name: blockName })) as RegistryItem | null

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

export async function generateBlocksRedirectStaticParams() {
  try {
    const categories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    const params: Array<{ slug: string[] }> = []

    // Add root /blocks
    params.push({ slug: [] })

    // Add /blocks/category/[category] for redirects
    for (const category of categories) {
      params.push({ slug: ["category", category] })
    }

    return params
  } catch (error) {
    console.warn("Failed to generate blocks redirect params:", error)
    return [{ slug: [] }]
  }
}

export async function generateSubcategoryStaticParams() {
  try {
    const categories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    const params: Array<{ category: string; subcategory: string }> = []

    await Promise.all(
      categories.map(async (category) => {
        try {
          const subcategories = (await queryRegistry({
            returnType: "subcategories",
            mainCategory: category,
          })) as string[]

          for (const subcategory of subcategories) {
            params.push({ category, subcategory })
          }
        } catch (error) {
          console.warn(`Failed to get subcategories for ${category}:`, error)
        }
      })
    )

    // Return at least one fallback param if empty (required for cache components)
    if (params.length === 0) {
      return [{ category: "application", subcategory: "dashboard" }]
    }

    return params
  } catch (error) {
    console.warn("Failed to generate subcategory static params:", error)
    return [{ category: "application", subcategory: "dashboard" }]
  }
}
