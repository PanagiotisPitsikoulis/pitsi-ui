import { Metadata } from "next"

import { formatName } from "@/lib/format"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"

export async function generateBlockStaticParams() {
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
    const subcategories = (await queryRegistry({
      returnType: "subcategories",
      mainCategory: category,
    })) as string[]

    for (const subcategory of subcategories) {
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
    }
  }

  return params
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
}

export async function generateBlocksRedirectStaticParams() {
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
}

export async function generateSubcategoryStaticParams() {
  const categories = (await queryRegistry({
    returnType: "categories",
    types: ["registry:block", "registry:internal"],
  })) as string[]

  const params: Array<{ category: string; subcategory: string }> = []

  await Promise.all(
    categories.map(async (category) => {
      const subcategories = (await queryRegistry({
        returnType: "subcategories",
        mainCategory: category,
      })) as string[]

      for (const subcategory of subcategories) {
        params.push({ category, subcategory })
      }
    })
  )

  return params
}
