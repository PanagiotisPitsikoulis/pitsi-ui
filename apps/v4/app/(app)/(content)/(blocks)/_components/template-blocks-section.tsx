"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "@/lib/icons"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

// Minimal block info needed for the section
interface BlockInfo {
  name: string
}

export interface BlockMetadata {
  name: string
  description: string
  categories: string[]
}

interface TemplateBlocksSectionProps {
  templateBlocks: BlockInfo[]
  styleName: string
  blocksMetadata: BlockMetadata[]
  title?: string
}

// Format category name for display (e.g., "hero" -> "Hero", "cta" -> "CTA")
function formatCategoryName(category: string): string {
  const acronyms = ["cta", "faq"]
  if (acronyms.includes(category.toLowerCase())) {
    return category.toUpperCase()
  }
  return category.charAt(0).toUpperCase() + category.slice(1)
}

export function TemplateBlocksSection({
  templateBlocks,
  styleName,
  blocksMetadata,
  title = "Blocks in this Template",
}: TemplateBlocksSectionProps) {
  // Get metadata for each block in the template
  const blocksWithMetadata = templateBlocks
    .map((config) => {
      const metadata = blocksMetadata.find((b) => b.name === config.name)
      if (!metadata) return null
      return {
        ...config,
        ...metadata,
        category: metadata.categories[0] || "blocks",
      }
    })
    .filter((b): b is NonNullable<typeof b> => b !== null)

  if (blocksWithMetadata.length === 0) {
    return null
  }

  // Group blocks by their category
  const blocksByCategory = blocksWithMetadata.reduce<Record<string, typeof blocksWithMetadata>>((acc, block) => {
    const cat = block.category
    if (!acc[cat]) {
      acc[cat] = []
    }
    acc[cat].push(block)
    return acc
  }, {})

  // Sort categories alphabetically
  const sortedCategories = Object.keys(blocksByCategory).sort((a, b) => a.localeCompare(b))

  return (
    <div className="bg-muted rounded-xl p-6">
      <Collapsible className="group/collapsible">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-muted-foreground text-sm font-medium">
            {title}
          </h2>
          <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors">
            <span className="group-data-[state=open]/collapsible:hidden">View all</span>
            <span className="group-data-[state=closed]/collapsible:hidden">Collapse</span>
            <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </div>

        {/* Collapsed: Horizontal scroll (flat list) */}
        <div className="group-data-[state=open]/collapsible:hidden relative -mx-4 px-4">
          <div className="no-scrollbar flex gap-8 overflow-x-auto pb-2">
            {blocksWithMetadata.map((block) => (
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
                <h3 className="text-foreground text-sm font-medium mb-4">
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
  block: BlockMetadata & { category: string }
  styleName: string
  compact?: boolean
}) {
  return (
    <Link
      href={`/block/${block.category}/${block.name}`}
      className={`group/card relative flex scroll-mt-20 flex-col gap-3 ${
        compact ? "w-[220px] shrink-0" : ""
      }`}
    >
      <div className="overflow-hidden rounded-xl shadow-sm dark:border dark:border-border">
        <div className="bg-background relative">
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
            >
              <div className="relative h-full w-full overflow-hidden bg-page">
                <Image
                  src={`/r/styles/${styleName}/${block.name}-light.webp`}
                  alt={`${block.name} preview`}
                  fill
                  className="object-cover object-top dark:hidden"
                  sizes={compact ? "220px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                  priority={false}
                />
                <Image
                  src={`/r/styles/${styleName}/${block.name}-dark.webp`}
                  alt={`${block.name} preview`}
                  fill
                  className="hidden object-cover object-top dark:block"
                  sizes={compact ? "220px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
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
