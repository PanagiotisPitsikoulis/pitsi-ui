"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Bookmark, Clock, MoreVertical } from "lucide-react"

import { useSavedBlocks, useRecentBlocks } from "@/lib/blocks-storage"
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
}

interface BlocksListProps {
  blocks: BlockItem[]
  category?: string
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
    <div className="relative h-full w-full overflow-hidden bg-page">
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

function BlockCard({ block, isBlockSaved, toggleSaveBlock }: {
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
        <div className="overflow-hidden rounded-2xl shadow-sm dark:border dark:border-border">
          <div className="bg-background relative">
            <ReadinessBadge readiness={block.readiness as any} />
            <TierBadge tier={(block.tier ?? "free") as any} />
            <div data-slot="preview" className="overflow-hidden">
              <div
                data-align="center"
                className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
              >
                <BlockPreview
                  name={block.name}
                  styleName={block.styleName}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between">
          <Link href={block.href}>
            <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
              {formatBlockName(block.name)}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
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
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-muted-foreground group-hover/card:text-foreground/70 line-clamp-2 min-h-[2.5rem] max-w-6/7 text-sm transition-colors">
          {block.description || "A component block for your application."}
        </p>
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
  const { savedBlocks, isBlockSaved, toggleSaveBlock, isHydrated: savedHydrated } = useSavedBlocks()
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
  if (filter && ((filter === "saved" && !savedHydrated) || (filter === "recent" && !recentHydrated))) {
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
    const Icon = filter === "saved" ? Bookmark : filter === "recent" ? Clock : null
    const title = filter === "saved" ? "No saved blocks" : filter === "recent" ? "No recently viewed blocks" : "No blocks"
    const description = filter === "saved"
      ? "Save blocks by clicking the menu on any block card"
      : filter === "recent"
        ? "Blocks you view will appear here"
        : "No blocks available"

    return (
      <div className="container">
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center">
          {Icon && (
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <Icon className="size-8 text-muted-foreground" />
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

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
