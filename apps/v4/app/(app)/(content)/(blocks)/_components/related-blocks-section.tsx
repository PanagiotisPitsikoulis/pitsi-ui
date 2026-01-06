"use client"

import Image from "next/image"
import Link from "next/link"

import { ChevronDown } from "@/lib/icons"
import { getBlocksByCategory } from "@/registry/__blocks-metadata__"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

export interface BlockItem {
  name: string
  description: string
  categories: string[]
}

interface RelatedBlocksSectionProps {
  currentBlockName: string
  category: string
  templateSlug: string | null
  styleName: string
  blocks: BlockItem[]
}

// Format category name for display (e.g., "hero" -> "Hero", "cta" -> "CTA")
function formatCategoryName(category: string): string {
  const acronyms = ["cta", "faq"]
  if (acronyms.includes(category.toLowerCase())) {
    return category.toUpperCase()
  }
  return category.charAt(0).toUpperCase() + category.slice(1)
}

export function RelatedBlocksSection({
  currentBlockName,
  category,
  templateSlug,
  styleName,
  blocks,
}: RelatedBlocksSectionProps) {
  // Get the current block to find its template association
  const currentBlock = blocks.find((b) => b.name === currentBlockName)
  const currentBlockTemplate = currentBlock?.categories[1] // Second category is usually the template

  // Collect related blocks from multiple sources
  const relatedBlocksSet = new Set<string>()

  // 1. Blocks in the same category
  const categoryBlocks = getBlocksByCategory(category)
  categoryBlocks.forEach((name) => {
    if (name !== currentBlockName) relatedBlocksSet.add(name)
  })

  // 2. Blocks in the same template (from categories array)
  if (currentBlockTemplate) {
    blocks.forEach((block) => {
      if (
        block.name !== currentBlockName &&
        block.categories.includes(currentBlockTemplate)
      ) {
        relatedBlocksSet.add(block.name)
      }
    })
  }

  // 3. Blocks from the templateSlug (if provided and different from currentBlockTemplate)
  if (templateSlug && templateSlug !== currentBlockTemplate) {
    blocks.forEach((block) => {
      if (
        block.name !== currentBlockName &&
        block.categories.includes(templateSlug)
      ) {
        relatedBlocksSet.add(block.name)
      }
    })
  }

  // Get metadata for related blocks
  const relatedBlocks = Array.from(relatedBlocksSet)
    .map((name) => blocks.find((b) => b.name === name))
    .filter((b): b is BlockItem => b !== undefined)

  if (relatedBlocks.length === 0) {
    return null
  }

  // Group blocks by their primary category
  const blocksByCategory = relatedBlocks.reduce<Record<string, BlockItem[]>>(
    (acc, block) => {
      const blockCategory = block.categories[0] || "other"
      if (!acc[blockCategory]) {
        acc[blockCategory] = []
      }
      acc[blockCategory].push(block)
      return acc
    },
    {}
  )

  // Sort categories - put current category first, then alphabetically
  const sortedCategories = Object.keys(blocksByCategory).sort((a, b) => {
    if (a === category) return -1
    if (b === category) return 1
    return a.localeCompare(b)
  })

  return (
    <div className="bg-muted rounded-xl p-6">
      <Collapsible className="group/collapsible">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-muted-foreground text-sm font-medium">
            Related Blocks
          </h2>
          <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors">
            <span className="group-data-[state=open]/collapsible:hidden">
              View all
            </span>
            <span className="group-data-[state=closed]/collapsible:hidden">
              Collapse
            </span>
            <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </div>

        {/* Collapsed: Horizontal scroll (flat list) */}
        <div className="relative -mx-4 px-4 group-data-[state=open]/collapsible:hidden">
          <div className="no-scrollbar flex gap-8 overflow-x-auto pb-2">
            {relatedBlocks.map((block) => (
              <BlockCard
                key={block.name}
                block={block}
                styleName={styleName}
                compact
              />
            ))}
          </div>
        </div>

        {/* Expanded: Grouped by category */}
        <CollapsibleContent>
          <div className="space-y-8">
            {sortedCategories.map((cat) => (
              <div key={cat}>
                <h3 className="text-foreground mb-4 text-sm font-medium">
                  {formatCategoryName(cat)}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {blocksByCategory[cat].map((block) => (
                    <BlockCard
                      key={block.name}
                      block={block}
                      styleName={styleName}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

function BlockCard({
  block,
  styleName,
  compact = false,
}: {
  block: BlockItem
  styleName: string
  compact?: boolean
}) {
  // Get the category from the block's categories (first one is the type)
  const blockCategory = block.categories[0] || "blocks"

  return (
    <Link
      href={`/block/${blockCategory}/${block.name}`}
      className={`group/card relative flex scroll-mt-20 flex-col gap-3 ${
        compact ? "w-[220px] shrink-0" : ""
      }`}
    >
      <div className="dark:border-border overflow-hidden rounded-xl shadow-sm dark:border">
        <div className="bg-background relative">
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
            >
              <div className="bg-page relative h-full w-full overflow-hidden">
                <Image
                  src={`/r/styles/${styleName}/${block.name}-light.webp`}
                  alt={`${block.name} preview`}
                  fill
                  className="object-cover object-top dark:hidden"
                  sizes={
                    compact
                      ? "220px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  priority={false}
                />
                <Image
                  src={`/r/styles/${styleName}/${block.name}-dark.webp`}
                  alt={`${block.name} preview`}
                  fill
                  className="hidden object-cover object-top dark:block"
                  sizes={
                    compact
                      ? "220px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-1">
        <span className="group-hover/card:text-primary text-sm font-medium transition-colors group-hover/card:underline">
          {block.name}
        </span>
      </div>
    </Link>
  )
}
