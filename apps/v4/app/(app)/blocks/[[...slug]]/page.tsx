import { redirect } from "next/navigation"
import { cacheLife } from "next/cache"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { BlocksList } from "@/components/documentation/blocks/blocks-list"
import { getActiveStyle } from "@/registry/styles"

export async function generateStaticParams() {
  const categories = (await queryRegistry({
    returnType: "categories",
    types: ["registry:block", "registry:internal"],
  })) as string[]

  const params: Array<{ slug: string[] }> = []

  // Add root /blocks
  params.push({ slug: [] })

  for (const category of categories) {
    const subcategories = (await queryRegistry({
      returnType: "subcategories",
      mainCategory: category,
    })) as string[]

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
  cacheLife("max")

  const { slug = [] } = await params

  // Case 1: /blocks → redirect to first available category/subcategory
  if (slug.length === 0) {
    const categories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    // If no categories at all, show empty state
    if (categories.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground">No blocks available.</p>
        </div>
      )
    }

    // Try to find first category with subcategories
    for (const category of categories) {
      const subcategories = (await queryRegistry({
        returnType: "subcategories",
        mainCategory: category,
      })) as string[]

      if (subcategories.length > 0) {
        redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
      }
    }

    // Fallback to first category
    redirect(`/blocks/category/${categories[0]}`)
  }

  // Case 2: /blocks/category/[category] → redirect to first subcategory
  if (slug.length === 2 && slug[0] === "category") {
    const category = slug[1]
    const allCategories = (await queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    })) as string[]

    // If no categories exist, show empty state
    if (allCategories.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground">No blocks available.</p>
        </div>
      )
    }

    // Validate category exists
    if (!allCategories.includes(category)) {
      redirect("/blocks")
    }

    const subcategories = (await queryRegistry({
      returnType: "subcategories",
      mainCategory: category,
    })) as string[]
    if (subcategories.length > 0) {
      redirect(`/blocks/category/${category}/subcategory/${subcategories[0]}`)
    }

    // No subcategories - show empty state for this category
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground">No blocks in this category.</p>
      </div>
    )
  }

  // Case 3: /blocks/category/[category]/subcategory/[subcategory] → show blocks
  if (
    slug.length === 4 &&
    slug[0] === "category" &&
    slug[2] === "subcategory"
  ) {
    const category = slug[1]
    const subcategory = slug[3]

    const [activeStyle, allCategories, subcategories] = await Promise.all([
      getActiveStyle(),
      queryRegistry({
        returnType: "categories",
        types: ["registry:block", "registry:internal"],
      }),
      queryRegistry({
        returnType: "subcategories",
        mainCategory: category,
      }),
    ])

    // Validate category exists
    if (!(allCategories as string[]).includes(category)) {
      redirect("/blocks")
    }

    // Validate subcategory exists for this category
    if (!(subcategories as string[]).includes(subcategory)) {
      // Redirect to first subcategory if invalid
      if ((subcategories as string[]).length > 0) {
        redirect(
          `/blocks/category/${category}/subcategory/${(subcategories as string[])[0]}`
        )
      }
      redirect("/blocks")
    }

    const blocks = (await queryRegistry({
      returnType: "items",
      mainCategory: category,
      subcategory,
    })) as RegistryItem[]

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

  // Case 4: Invalid route → redirect to /blocks
  redirect("/blocks")
}
