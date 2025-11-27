"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { useContentPagination } from "@/hooks/use-content-pagination"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { LazyComponentPreview } from "@/components/documentation/components/lazy-component-preview"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

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
}

function BlockPreview({
  name,
  styleName,
  iframeHeight,
}: {
  name: string
  styleName: string
  iframeHeight?: string
}) {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <LazyComponentPreview className="relative h-full w-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <iframe
        src={`/view/${styleName}/${name}`}
        className="pointer-events-none h-full w-full origin-top-left scale-[0.25]"
        style={{
          width: "400%",
          height: "400%",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </LazyComponentPreview>
  )
}

function BlockCard({ block }: { block: BlockItem }) {
  return (
    <div className="group relative flex scroll-mt-20 flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border shadow-xs">
        <div className="bg-background relative transition-all">
          <ReadinessBadge readiness={block.readiness as any} />
          <TierBadge tier={(block.tier ?? "free") as any} />
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className="preview relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden"
            >
              <BlockPreview
                name={block.name}
                styleName={block.styleName}
                iframeHeight={block.iframeHeight}
              />
            </div>
          </div>
        </div>
      </div>
      <Link href={block.href} className="group/link flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
              {formatBlockName(block.name)}
            </span>
          </div>
          <ArrowUpRight className="text-muted-foreground group-hover/link:text-foreground size-4 shrink-0 transition-colors" />
        </div>
        {block.description && (
          <p className="text-muted-foreground group-hover/link:text-foreground/70 line-clamp-2 max-w-6/7 text-sm transition-colors">
            {block.description}
          </p>
        )}
      </Link>
    </div>
  )
}

function formatBlockName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function BlocksList({ blocks }: BlocksListProps) {
  const { displayCount, hasMore, loadMoreRef } = useContentPagination(blocks, {
    initialLoad: 9,
    loadMore: 6,
  })

  const visibleBlocks = blocks.slice(0, displayCount)

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleBlocks.map((block) => (
          <BlockCard key={block.name} block={block} />
        ))}
      </div>

      {/* Load more trigger */}
      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex min-h-[200px] items-center justify-center py-8"
        />
      )}
    </div>
  )
}
