"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  ArrowLeft,
  Code2,
  ImageIcon,
  Layers,
  Monitor,
  Moon,
  Sun,
} from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

import {
  BlockContainer,
  BlockThemeWrapper,
  DEFAULT_TINT,
  DevBlockOverlay,
} from "../_demo-blocks/_components"
import { getTemplateBlocks, type TemplateSlug } from "../_demo-blocks/blocks"

interface TemplateViewerClientProps {
  slug: string
  template: {
    name: string
    description: string
    category: string
  }
}

// Base paths
const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
const BLOCKS_PATH = `${PROJECT_PATH}/app/templates/_demo-blocks`

export function TemplateViewerClient({
  slug,
  template,
}: TemplateViewerClientProps) {
  const [devOverlayEnabled, setDevOverlayEnabled] = useState(true)
  const hoveredBlockRef = useRef<string | null>(null)
  const blocks = getTemplateBlocks(slug as TemplateSlug)
  const isDev = process.env.NODE_ENV === "development"
  const { theme, setTheme, resolvedTheme } = useTheme()

  const ThemeIcon =
    resolvedTheme === "dark" ? Moon : resolvedTheme === "light" ? Sun : Monitor

  const openInEditor = useCallback(async (filePath: string) => {
    try {
      await fetch("/api/open-in-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath, addToWorkspace: true }),
      })
    } catch (error) {
      console.error("Failed to open:", error)
    }
  }, [])

  const openAssets = useCallback(
    () =>
      openInEditor(
        `${PROJECT_PATH}/public/placeholders/blocks/${slug}`
      ),
    [openInEditor, slug]
  )

  const openComponents = useCallback(
    () =>
      openInEditor(
        `${PROJECT_PATH}/app/templates/_demo-blocks/_block_components`
      ),
    [openInEditor]
  )

  const openCurrentBlock = useCallback(() => {
    const blockKey = hoveredBlockRef.current
    if (!blockKey) return
    const baseType = blockKey.replace(/-\d+$/, "")
    const codePath = `${BLOCKS_PATH}/${baseType}/${slug}/${blockKey}.tsx`
    openInEditor(codePath)
  }, [openInEditor, slug])

  const copyCurrentBlockPath = useCallback(async () => {
    const blockKey = hoveredBlockRef.current
    if (!blockKey) return
    const baseType = blockKey.replace(/-\d+$/, "")
    const codePath = `${BLOCKS_PATH}/${baseType}/${slug}/${blockKey}.tsx`
    try {
      await navigator.clipboard.writeText(codePath)
      toast.success("Copied to clipboard")
    } catch (error) {
      console.error("Failed to copy:", error)
      toast.error("Failed to copy")
    }
  }, [slug])

  const onBlockHover = useCallback((blockKey: string | null) => {
    hoveredBlockRef.current = blockKey
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    if (!isDev) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if Cmd (Mac) or Ctrl (Windows) is pressed
      if (!e.metaKey && !e.ctrlKey) return

      switch (e.key.toLowerCase()) {
        case "d":
          e.preventDefault()
          setDevOverlayEnabled((prev) => !prev)
          break
        case "i":
          e.preventDefault()
          openAssets()
          break
        case "k":
          e.preventDefault()
          openComponents()
          break
        case "g":
          e.preventDefault()
          openCurrentBlock()
          break
        case "c":
          // Only copy if hovering a block (don't override normal copy)
          if (hoveredBlockRef.current) {
            e.preventDefault()
            copyCurrentBlockPath()
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDev, openAssets, openComponents, openCurrentBlock, copyCurrentBlockPath])

  if (blocks.length === 0) {
    return (
      <div className="bg-sidebar flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Template not found</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-sidebar">
      {/* Inset wrapper */}
      <div className="flex min-h-0 flex-1 flex-col p-2">
        {/* Inset content area with theme */}
        <BlockThemeWrapper slug={slug} tint={DEFAULT_TINT} className="flex flex-1 flex-col overflow-hidden rounded-xl shadow-sm">
          {/* Header inside theme container */}
          <header className="sticky top-0 z-50 grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border bg-card px-4">
            {/* Left - Back button */}
            <div className="flex items-center">
              <Link href="/templates">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="size-4" />
                  Back
                </Button>
              </Link>
            </div>

            {/* Center - Title */}
            <span className="text-sm font-medium">
              {template.name}
            </span>

            {/* Right - Dev buttons */}
            <div className="flex items-center justify-end gap-2">
              {isDev && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    onClick={openAssets}
                  >
                    <ImageIcon className="size-4" />
                    <span className="hidden sm:inline">Assets</span>
                    <kbd className="pointer-events-none hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline">
                      ⌘I
                    </kbd>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    onClick={openComponents}
                  >
                    <Layers className="size-4" />
                    <span className="hidden sm:inline">Components</span>
                    <kbd className="pointer-events-none hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline">
                      ⌘K
                    </kbd>
                  </Button>
                  <Button
                    variant={devOverlayEnabled ? "secondary" : "ghost"}
                    size="sm"
                    className="gap-2"
                    onClick={() => setDevOverlayEnabled(!devOverlayEnabled)}
                  >
                    <Code2 className="size-4" />
                    <span className="hidden sm:inline">Dev</span>
                    <kbd className="pointer-events-none hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline">
                      ⌘D
                    </kbd>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThemeIcon className="size-4" />
                        <span className="hidden sm:inline capitalize">
                          {theme === "system" ? "System" : resolvedTheme}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup
                        value={theme}
                        onValueChange={setTheme}
                      >
                        <DropdownMenuRadioItem value="light">
                          <Sun className="mr-2 size-4" />
                          Light
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          <Moon className="mr-2 size-4" />
                          Dark
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">
                          <Monitor className="mr-2 size-4" />
                          System
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>
          </header>

          {/* Main content area */}
          <main className="relative flex-1 overflow-y-auto bg-background">
            {/* Template blocks - each wrapped with theme and container */}
            {blocks.map(({ type, Component, tint, forceDark, blockKey }, index) => {
              // Heroes/headers don't get alternating bg since they have their own backgrounds
              const skipAlternatingBg =
                type === "hero" || type === "header" || forceDark
              // Heroes/headers/footers handle their own padding
              const skipPadding =
                type === "hero" || type === "header" || type === "footer"
              const blockTint = tint || DEFAULT_TINT

              return (
                <BlockThemeWrapper
                  key={blockKey}
                  slug={slug}
                  tint={blockTint}
                  forceDark={forceDark}
                >
                  <DevBlockOverlay
                    blockKey={blockKey}
                    slug={slug}
                    enabled={devOverlayEnabled}
                    onHover={onBlockHover}
                  >
                    <BlockContainer
                      index={index}
                      tint={blockTint}
                      forceBg={skipAlternatingBg ? "none" : undefined}
                      noPadding={skipPadding}
                    >
                      <Component />
                    </BlockContainer>
                  </DevBlockOverlay>
                </BlockThemeWrapper>
              )
            })}
          </main>
        </BlockThemeWrapper>
      </div>
    </div>
  )
}
