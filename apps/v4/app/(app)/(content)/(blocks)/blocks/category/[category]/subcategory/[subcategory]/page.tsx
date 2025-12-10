import { redirect } from "next/navigation"
import { cacheLife } from "next/cache"

import { generateSubcategoryStaticParams } from "@/lib/pages/blocks"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { BlocksList } from "@/components/documentation/blocks/blocks-list"
import { getActiveStyle } from "@/registry/styles"

export async function generateStaticParams() {
  return generateSubcategoryStaticParams()
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>
}) {
  "use cache"
  cacheLife("max")

  const { category, subcategory } = await params

  // Fetch all needed data in parallel
  const [activeStyle, allCategories, subcategories, blocks] = await Promise.all([
    getActiveStyle(),
    queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    }) as Promise<string[]>,
    queryRegistry({
      returnType: "subcategories",
      mainCategory: category,
    }) as Promise<string[]>,
    queryRegistry({
      returnType: "items",
      mainCategory: category,
      subcategory,
    }) as Promise<RegistryItem[]>,
  ])

  // Validate category exists
  if (!allCategories.includes(category)) {
    redirect("/blocks")
  }

  // Validate subcategory exists for this category
  if (!subcategories.includes(subcategory)) {
    if (subcategories.length > 0) {
      redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
    }
    redirect("/blocks")
  }

  if (blocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground">No blocks in this subcategory.</p>
      </div>
    )
  }

  // Transform blocks into the format expected by BlocksList
  const blockItems = blocks.map((block) => ({
    name: block.name,
    description: block.description,
    href: `/block/${category}/${subcategory}/${block.name}`,
    readiness: block.readiness,
    tier: block.tier,
    iframeHeight: block.meta?.iframeHeight,
    styleName: activeStyle.name,
  }))

  return <BlocksList blocks={blockItems} />
}
