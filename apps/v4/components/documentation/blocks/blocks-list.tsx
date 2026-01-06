"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { useRecentBlocks, useSavedBlocks } from "@/lib/blocks-storage"
import { Bookmark, Clock, ExternalLink, MoreVertical } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

interface BlockItem {
  name: string
  description?: string
  href: string
  readiness?: string
  tier?: string
  iframeHeight?: string
  styleName: string
  blockCategory?: string // The block's actual category
  templateSlug?: string // Associated template slug
}

interface BlocksListProps {
  blocks: BlockItem[]
  category?: string
}

// Format category name for display (e.g., "hero" -> "Hero", "cta" -> "CTA")
function formatCategoryName(category: string): string {
  const acronyms = ["cta", "faq"]
  if (acronyms.includes(category.toLowerCase())) {
    return category.toUpperCase()
  }
  return category.charAt(0).toUpperCase() + category.slice(1)
}

// Category descriptions
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  header: "Navigation bars and site headers with responsive menus",
  hero: "Eye-catching hero sections to make a strong first impression",
  features: "Showcase your product or service features and benefits",
  products: "Product grids, cards, and e-commerce displays",
  pricing: "Pricing tables and plan comparison sections",
  testimonials: "Customer reviews, quotes, and social proof",
  gallery: "Image galleries and media showcases",
  team: "Team member profiles and about sections",
  stats: "Statistics, metrics, and achievement displays",
  logos: "Client logos, partner brands, and trust badges",
  faq: "Frequently asked questions and accordion sections",
  blog: "Blog post grids, article previews, and news sections",
  contact: "Contact forms and get-in-touch sections",
  newsletter: "Email signup forms and subscription sections",
  cta: "Call-to-action sections that drive conversions",
  footer: "Site footers with links, social media, and legal info",
  showcase: "Product showcases and feature highlights",
  bento: "Bento grid layouts for modern content presentation",
  application: "Full application interfaces and dashboard layouts",
  template:
    "Complete page templates combining multiple blocks into cohesive designs",
}

function BlockPreview({
  name,
  styleName,
}: {
  name: string
  styleName: string
}) {
  const lightSrc = `/r/styles/${styleName}/${name}-light.webp`
  const darkSrc = `/r/styles/${styleName}/${name}-dark.webp`

  return (
    <div className="bg-page relative h-full w-full overflow-hidden">
      {/* Light mode image */}
      <Image
        src={lightSrc}
        alt={`${name} preview`}
        fill
        className="object-cover object-top dark:hidden"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      {/* Dark mode image */}
      <Image
        src={darkSrc}
        alt={`${name} preview`}
        fill
        className="hidden object-cover object-top dark:block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  )
}

function BlockCard({
  block,
  isBlockSaved,
  toggleSaveBlock,
}: {
  block: BlockItem
  isBlockSaved: (name: string) => boolean
  toggleSaveBlock: (name: string, category: string) => void
}) {
  const saved = isBlockSaved(block.name)
  // Extract category from href (e.g., /block/hero/hero-1 -> hero)
  const category = block.href.split("/")[2] || "uncategorized"

  return (
    <div className="group/card relative flex scroll-mt-20 flex-col gap-4">
      <Link href={block.href}>
        <div className="dark:border-border overflow-hidden rounded-2xl shadow-sm dark:border">
          <div className="bg-background relative">
            <div className="opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
              <ReadinessBadge readiness={block.readiness as any} />
              <TierBadge tier={(block.tier ?? "free") as any} />
            </div>
            <div data-slot="preview" className="overflow-hidden">
              <div
                data-align="center"
                className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
              >
                <BlockPreview name={block.name} styleName={block.styleName} />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-0.5 px-2">
        <div className="flex items-center justify-between">
          <Link href={block.href}>
            <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
              {formatBlockName(block.name)}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors">
              <MoreVertical className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => toggleSaveBlock(block.name, category)}
                className="gap-2"
              >
                <Bookmark className={cn("size-4", saved && "fill-current")} />
                {saved ? "Remove from saved" : "Save this block"}
              </DropdownMenuItem>
              {block.templateSlug && (
                <DropdownMenuItem asChild className="gap-2">
                  <Link href={`/template/${block.templateSlug}`}>
                    <ExternalLink className="size-4" />
                    Open template
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {block.description && (
          <p className="text-muted-foreground line-clamp-1 text-sm">
            {block.description}
          </p>
        )}
      </div>
    </div>
  )
}

function formatBlockName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function BlocksList({ blocks, category }: BlocksListProps) {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")
  const {
    savedBlocks,
    isBlockSaved,
    toggleSaveBlock,
    isHydrated: savedHydrated,
  } = useSavedBlocks()
  const { recentBlocks, isHydrated: recentHydrated } = useRecentBlocks()

  // Filter blocks based on search params
  // Note: We filter by block name only, not category, because:
  // - The blocks array is already filtered by category from the page
  // - Recent/saved data stores the URL category (e.g., "hero") not template category
  const filteredBlocks = blocks.filter((block) => {
    if (!filter) return true

    if (filter === "saved") {
      return savedBlocks.some((s) => s.name === block.name)
    }

    if (filter === "recent") {
      return recentBlocks.some((r) => r.name === block.name)
    }

    return true
  })

  // Show loading state while hydrating
  if (
    filter &&
    ((filter === "saved" && !savedHydrated) ||
      (filter === "recent" && !recentHydrated))
  ) {
    return (
      <div className="container">
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  // Show empty state
  if (filteredBlocks.length === 0) {
    const Icon =
      filter === "saved" ? Bookmark : filter === "recent" ? Clock : null
    const title =
      filter === "saved"
        ? "No saved blocks"
        : filter === "recent"
          ? "No recently viewed blocks"
          : "No blocks"
    const description =
      filter === "saved"
        ? "Save blocks by clicking the menu on any block card"
        : filter === "recent"
          ? "Blocks you view will appear here"
          : "No blocks available"

    return (
      <div className="container">
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center">
          {Icon && (
            <div className="bg-muted flex size-16 items-center justify-center rounded-full">
              <Icon className="text-muted-foreground size-8" />
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  // Group blocks by category when showing "all"
  const showGrouped = category === "all" && !filter

  if (showGrouped) {
    // Group blocks by their category
    const blocksByCategory = filteredBlocks.reduce<Record<string, BlockItem[]>>(
      (acc, block) => {
        const cat = block.blockCategory || block.href.split("/")[2] || "other"
        if (!acc[cat]) {
          acc[cat] = []
        }
        acc[cat].push(block)
        return acc
      },
      {}
    )

    // Sort categories alphabetically
    const sortedCategories = Object.keys(blocksByCategory).sort((a, b) =>
      a.localeCompare(b)
    )

    return (
      <div className="container space-y-12">
        {sortedCategories.map((cat) => (
          <div key={cat}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">
                  {formatCategoryName(cat)}
                </h2>
                {CATEGORY_DESCRIPTIONS[cat] && (
                  <p className="text-muted-foreground text-sm">
                    {CATEGORY_DESCRIPTIONS[cat]}
                  </p>
                )}
              </div>
              <Link
                href={`/blocks/${cat}`}
                className="text-muted-foreground hover:text-foreground shrink-0 text-sm transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blocksByCategory[cat].map((block) => (
                <BlockCard
                  key={block.name}
                  block={block}
                  isBlockSaved={isBlockSaved}
                  toggleSaveBlock={toggleSaveBlock}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlocks.map((block) => (
          <BlockCard
            key={block.name}
            block={block}
            isBlockSaved={isBlockSaved}
            toggleSaveBlock={toggleSaveBlock}
          />
        ))}
      </div>
    </div>
  )
}
