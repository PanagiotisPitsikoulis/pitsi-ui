"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Code2 } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

import { BlockThemeWrapper, BlockContainer, DevBlockOverlay, DEFAULT_TINT } from "../_demo-blocks/_components"
import { getTemplateBlocks, type TemplateSlug } from "../_demo-blocks/blocks"

interface TemplateViewerClientProps {
  slug: string
  template: {
    name: string
    description: string
    category: string
  }
}

export function TemplateViewerClient({
  slug,
}: TemplateViewerClientProps) {
  const [devOverlayEnabled, setDevOverlayEnabled] = useState(true)
  const blocks = getTemplateBlocks(slug as TemplateSlug)
  const isDev = process.env.NODE_ENV === "development"

  if (blocks.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Template not found</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Back button and dev toggle */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
        <Link href="/templates">
          <Button variant="secondary" size="sm" className="gap-2">
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </Link>
        {isDev && (
          <Button
            variant={devOverlayEnabled ? "default" : "secondary"}
            size="sm"
            className="gap-2"
            onClick={() => setDevOverlayEnabled(!devOverlayEnabled)}
          >
            <Code2 className="size-4" />
            {devOverlayEnabled ? "Dev On" : "Dev Off"}
          </Button>
        )}
      </div>

      {/* Template blocks - each wrapped with theme and container */}
      {blocks.map(({ type, Component, tint, forceDark }, index) => {
        // Light mode by default, forceDark overrides for blocks with image overlays
        const mode = forceDark ? "dark" : "light"
        // Heroes/headers don't get alternating bg since they have their own backgrounds
        const skipAlternatingBg = type === "hero" || type === "header" || forceDark
        // Heroes/headers/footers handle their own padding
        const skipPadding = type === "hero" || type === "header" || type === "footer"
        const blockTint = tint || DEFAULT_TINT

        return (
          <BlockThemeWrapper
            key={type}
            slug={slug}
            tint={blockTint}
            mode={mode}
          >
            <BlockContainer
              index={index}
              tint={blockTint}
              forceBg={skipAlternatingBg ? "none" : undefined}
              noPadding={skipPadding}
            >
              <DevBlockOverlay blockType={type} slug={slug} enabled={devOverlayEnabled}>
                <Component />
              </DevBlockOverlay>
            </BlockContainer>
          </BlockThemeWrapper>
        )
      })}
    </div>
  )
}
