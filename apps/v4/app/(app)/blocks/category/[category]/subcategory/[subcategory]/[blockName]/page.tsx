import { notFound, redirect } from "next/navigation"

import { queryRegistry } from "@/lib/registry-utils"
import { BlockDisplay } from "@/components/documentation/blocks/block-display"
import { getActiveStyle } from "@/registry/styles"

export async function generateStaticParams() {
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
        returnType: "ids",
        mainCategory: category,
        subcategory,
      })) as string[]

      for (const blockName of blocks) {
        params.push({ category, subcategory, blockName })
      }
    }
  }

  return params
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    category: string
    subcategory: string
    blockName: string
  }>
}) {
  "use cache"

  const { category, subcategory, blockName } = await params

  // Validate category exists
  const allCategories = (await queryRegistry({
    returnType: "categories",
    types: ["registry:block", "registry:internal"],
  })) as string[]

  if (!allCategories.includes(category)) {
    redirect("/blocks")
  }

  // Validate subcategory exists
  const subcategories = (await queryRegistry({
    returnType: "subcategories",
    mainCategory: category,
  })) as string[]

  if (!subcategories.includes(subcategory)) {
    redirect(`/blocks/category/${category}`)
  }

  // Validate block exists in this subcategory
  const blocks = (await queryRegistry({
    returnType: "ids",
    mainCategory: category,
    subcategory,
  })) as string[]

  if (!blocks.includes(blockName)) {
    notFound()
  }

  const activeStyle = await getActiveStyle()

  return (
    <div className="container py-8">
      <BlockDisplay name={blockName} styleName={activeStyle.name} />
    </div>
  )
}
