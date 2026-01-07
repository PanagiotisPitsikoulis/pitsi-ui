import { cacheLife } from "next/cache"
import { redirect } from "next/navigation"

import {
  getAllCategories,
  getAllTemplatesFromRegistry,
  getBlockFilterOptions,
  getBlockIdsByCategory,
  getBlockMetadata,
} from "@/lib/blocks"
import { generateCategoryStaticParams } from "@/lib/pages/blocks"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { BlocksList } from "@/components/documentation/blocks/blocks-list"
import { getActiveStyle } from "@/registry/styles"

import { BlocksAdvancedFilter } from "./blocks-advanced-filter"
import { BlocksFilter } from "./blocks-filter"
import { FullPagesSection } from "./full-pages-section"

export async function generateStaticParams() {
  return generateCategoryStaticParams()
}

// Get templates from registry metadata (built from registry items with "template" category)
const templates = getAllTemplatesFromRegistry()

// Get filter options for advanced filtering
const filterOptions = getBlockFilterOptions()

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  "use cache"
  cacheLife("max")

  const { category } = await params
  const allCategories = getAllCategories()
  const activeStyle = await getActiveStyle()

  // Handle "all" category - show all blocks
  if (category === "all") {
    const blocks = (await queryRegistry({
      returnType: "items",
      types: ["registry:block"],
    })) as RegistryItem[]

    if (blocks.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground">No blocks available.</p>
        </div>
      )
    }

    // Transform blocks - get category from block's categories array
    const blockItems = blocks.map((block) => {
      const blockCategory = block.categories?.[0] || "uncategorized"
      const templateSlug = block.categories?.[1] || undefined // Second category is usually the template
      const metadata = getBlockMetadata(block.name)
      return {
        name: block.name,
        description: block.description,
        href: `/block/${blockCategory}/${block.name}`,
        readiness: block.readiness,
        tier: block.tier,
        iframeHeight: block.meta?.iframeHeight,
        styleName: activeStyle.name,
        blockCategory,
        templateSlug,
        palette: metadata?.palette,
        typography: metadata?.typography,
        template: metadata?.template,
      }
    })

    return (
      <div className="flex flex-col gap-8">
        {/* Full Pages Section + Filter */}
        <div className="flex flex-col gap-6">
          <FullPagesSection
            templates={templates}
            styleName={activeStyle.name}
          />
          <BlocksFilter />
          <BlocksAdvancedFilter filterOptions={filterOptions} />
        </div>

        {/* Blocks List */}
        <BlocksList blocks={blockItems} category="all" />
      </div>
    )
  }

  // Validate category exists
  if (!allCategories.includes(category)) {
    redirect("/blocks")
  }

  // Get blocks for this category
  const blockIds = getBlockIdsByCategory(category)
  const blocks = (await queryRegistry({
    returnType: "items",
    filter: (item) => blockIds.includes(item.name),
  })) as RegistryItem[]

  if (blocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground">No blocks in this category.</p>
      </div>
    )
  }

  // Transform blocks into the format expected by BlocksList
  const blockItems = blocks.map((block) => {
    const templateSlug = block.categories?.[1] || undefined // Second category is usually the template
    const metadata = getBlockMetadata(block.name)
    return {
      name: block.name,
      description: block.description,
      href: `/block/${category}/${block.name}`,
      readiness: block.readiness,
      tier: block.tier,
      iframeHeight: block.meta?.iframeHeight,
      styleName: activeStyle.name,
      blockCategory: category,
      templateSlug,
      palette: metadata?.palette,
      typography: metadata?.typography,
      template: metadata?.template,
    }
  })

  return (
    <div className="flex flex-col gap-8">
      {/* Full Pages Section + Filter */}
      <div className="flex flex-col gap-6">
        <FullPagesSection templates={templates} styleName={activeStyle.name} />
        <BlocksFilter />
        <BlocksAdvancedFilter filterOptions={filterOptions} />
      </div>

      {/* Blocks List */}
      <BlocksList blocks={blockItems} category={category} />
    </div>
  )
}
