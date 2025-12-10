import { redirect } from "next/navigation"
import { cacheLife } from "next/cache"

import { generateBlocksRedirectStaticParams } from "@/lib/pages/blocks"
import { queryRegistry } from "@/lib/registry-utils"
import { BlocksEmptyState } from "@/components/documentation/blocks/blocks-empty-state"

export async function generateStaticParams() {
  return generateBlocksRedirectStaticParams()
}

export default async function BlocksRedirectPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  "use cache"
  cacheLife("max")

  const { slug = [] } = await params

  // Case 1: /blocks → redirect to first available category/subcategory
  if (slug.length === 0) {
    const categories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    if (categories.length === 0) {
      return <BlocksEmptyState />
    }

    // Find first category with subcategories
    for (const category of categories) {
      const subcategories = (await queryRegistry({
        returnType: "subcategories",
        mainCategory: category,
      })) as string[]

      if (subcategories.length > 0) {
        redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
      }
    }

    redirect(`/blocks/category/${categories[0]}`)
  }

  // Case 2: /blocks/category/[category] → redirect to first subcategory
  if (slug.length === 2 && slug[0] === "category") {
    const category = slug[1]

    const [allCategories, subcategories] = await Promise.all([
      queryRegistry({
        returnType: "categories",
        types: ["registry:block", "registry:internal"],
      }) as Promise<string[]>,
      queryRegistry({
        returnType: "subcategories",
        mainCategory: category,
      }) as Promise<string[]>,
    ])

    if (allCategories.length === 0) {
      return <BlocksEmptyState />
    }

    if (!allCategories.includes(category)) {
      redirect("/blocks")
    }

    if (subcategories.length > 0) {
      redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
    }

    return <BlocksEmptyState message="No blocks in this category." />
  }

  // Invalid route → redirect to /blocks
  redirect("/blocks")
}
