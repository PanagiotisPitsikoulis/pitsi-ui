import { cacheLife } from "next/cache"
import { redirect } from "next/navigation"

import {
  getAllMainCategories,
  getBlocksByCategory,
  getSubcategories,
  getSubcategoryBlockCounts,
} from "@/lib/blocks"
import { BlockDisplay } from "@/components/documentation/blocks/block-display"
import { BlocksListPaginated } from "@/components/documentation/blocks/blocks-list-paginated"
import { BlocksSubcategoryNav } from "@/components/navigation/blocks-subcategory-nav"
import { getActiveStyle } from "@/registry/styles"

export async function generateStaticParams() {
  const categories = await getAllMainCategories()
  const params: Array<{ slug: string[] }> = []

  // Add root /blocks
  params.push({ slug: [] })

  for (const category of categories) {
    const subcategories = await getSubcategories(category)

    // Add /blocks/category/[category]
    params.push({ slug: ["category", category] })

    // Add /blocks/category/[category]/subcategory/[subcategory]
    for (const subcategory of subcategories) {
      params.push({ slug: ["category", category, "subcategory", subcategory] })
    }
  }

  return params
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  "use cache"

  const { slug = [] } = await params

  // Case 1: /blocks → redirect to first marketing subcategory
  if (slug.length === 0) {
    const subcategories = await getSubcategories("marketing")
    if (subcategories.length > 0) {
      redirect(`/blocks/category/marketing/subcategory/${subcategories[0]}`)
    }
    redirect("/blocks/category/marketing")
  }

  // Case 2: /blocks/category/[category] → redirect to first subcategory
  if (slug.length === 2 && slug[0] === "category") {
    const category = slug[1]
    const allCategories = await getAllMainCategories()

    // Validate category exists
    if (!allCategories.includes(category)) {
      redirect("/blocks")
    }

    const subcategories = await getSubcategories(category)
    if (subcategories.length > 0) {
      redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
    }

    // Fallback if no subcategories
    redirect("/blocks")
  }

  // Case 3: /blocks/category/[category]/subcategory/[subcategory] → show blocks
  if (
    slug.length === 4 &&
    slug[0] === "category" &&
    slug[2] === "subcategory"
  ) {
    const category = slug[1]
    const subcategory = slug[3]

    const [activeStyle, allCategories] = await Promise.all([
      getActiveStyle(),
      getAllMainCategories(),
    ])

    // Validate category exists
    if (!allCategories.includes(category)) {
      redirect("/blocks")
    }

    // Validate subcategory exists for this category
    const subcategories = await getSubcategories(category)
    const subcategoryCounts = await getSubcategoryBlockCounts(category)

    if (!subcategories.includes(subcategory)) {
      // Redirect to first subcategory if invalid
      if (subcategories.length > 0) {
        redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
      }
      redirect("/blocks")
    }

    const blocks = await getBlocksByCategory(category, subcategory)

    if (blocks.length === 0) {
      // Redirect to first subcategory if no blocks
      if (subcategories.length > 0) {
        redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
      }
      redirect("/blocks")
    }

    return (
      <>
        <BlocksSubcategoryNav
          category={category}
          subcategories={subcategories}
          subcategoryCounts={subcategoryCounts}
          currentSubcategory={subcategory}
        />
        <BlocksListPaginated>
          {blocks.map((name) => (
            <BlockDisplay key={name} name={name} styleName={activeStyle.name} />
          ))}
        </BlocksListPaginated>
      </>
    )
  }

  // Case 4: Invalid route → redirect to /blocks
  redirect("/blocks")
}
