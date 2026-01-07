"use client"

import React, { Suspense, useMemo, useRef } from "react"
import { useSearchParams } from "next/navigation"

import { type ColorPalette } from "@/registry/new-york-v4/lib/block-theme"

import {
  BlockContainer,
  BlockThemeWrapper,
  DEFAULT_TINT,
  getFontsByTypography,
  ScrollContainerProvider,
} from "@/app/(app)/(content)/(blocks)/_components"
import {
  getTemplateBlockGroups,
  getTemplateBlocks,
  type TemplateSlug,
} from "@/app/(app)/(content)/(blocks)/blocks"

interface TemplateViewPageProps {
  params: Promise<{
    style: string
    slug: string
  }>
}

function TemplateViewContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams()
  const mainRef = useRef<HTMLDivElement>(null)

  // Block selection - get all block groups
  const blockGroups = getTemplateBlockGroups(slug)

  // Build selected blocks from URL params
  const selectedBlocks = useMemo(() => {
    const selections: Record<string, string> = {}
    for (const [blockType, options] of Object.entries(blockGroups)) {
      const param = searchParams.get(blockType)
      selections[blockType] = param || options[0] // Default to first
    }
    return selections
  }, [searchParams, blockGroups])

  const blocks = getTemplateBlocks(slug as TemplateSlug, selectedBlocks)

  // Get palette and fonts from first block
  const firstBlock = blocks[0]
  const firstBlockPalette = (firstBlock?.palette || "slate") as ColorPalette
  const fonts = getFontsByTypography(firstBlock?.typography)

  if (blocks.length === 0) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">
          No blocks found for this template
        </p>
      </div>
    )
  }

  return (
    <div ref={mainRef} className="bg-background min-h-screen">
      <BlockThemeWrapper
        palette={firstBlockPalette}
        tint={DEFAULT_TINT}
        fonts={fonts}
      >
        <ScrollContainerProvider value={mainRef}>
          {blocks.map(
            (
              {
                name,
                type,
                Component,
                tint,
                forceDark,
                forceLight,
                palette,
                typography,
              },
              index
            ) => {
              const skipAlternatingBg =
                type === "hero" ||
                type === "header" ||
                forceDark ||
                forceLight
              const skipPadding =
                type === "hero" || type === "header" || type === "footer"
              const blockTint = tint || DEFAULT_TINT
              const blockPalette = (palette || "slate") as ColorPalette
              const blockFonts = getFontsByTypography(typography)

              return (
                <BlockThemeWrapper
                  key={name}
                  palette={blockPalette}
                  tint={blockTint}
                  forceDark={forceDark}
                  forceLight={forceLight}
                  fonts={blockFonts}
                >
                  <BlockContainer
                    index={index}
                    tint={blockTint}
                    forceBg={skipAlternatingBg ? "none" : undefined}
                    noPadding={skipPadding}
                  >
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  </BlockContainer>
                </BlockThemeWrapper>
              )
            }
          )}
        </ScrollContainerProvider>
      </BlockThemeWrapper>
    </div>
  )
}

export default function TemplateViewPage({ params }: TemplateViewPageProps) {
  const resolvedParams = React.use(params)
  const { slug } = resolvedParams

  return (
    <Suspense fallback={<div className="bg-background min-h-screen" />}>
      <TemplateViewContent slug={slug} />
    </Suspense>
  )
}
