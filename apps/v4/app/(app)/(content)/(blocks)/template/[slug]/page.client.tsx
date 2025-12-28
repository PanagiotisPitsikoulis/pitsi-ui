"use client"

import { Suspense, useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Code2,
  ImageIcon,
  Layers,
  Monitor,
  Moon,
  Palette,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { themePresets } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-presets"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import {
  BlockContainer,
  BlockThemeWrapper,
  DEFAULT_TINT,
  DevBlockOverlay,
  getPresetKey,
  ScrollContainerProvider,
  templatePalettes,
} from "../../_components"
import { getTemplateBlocks, type TemplateSlug } from "../../blocks"

interface TemplateViewerClientProps {
  slug: string
  template: {
    name: string
    description: string
  }
}

// Base paths
const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
const REGISTRY_BLOCKS_PATH = `${PROJECT_PATH}/registry/new-york-v4/blocks`
const THEME_FILE_PATH = `${PROJECT_PATH}/app/(app)/(tools)/tools/theme-generator/_components/theme-presets.ts`

export function TemplateViewerClient({
  slug,
  template,
}: TemplateViewerClientProps) {
  const router = useRouter()
  const [devOverlayEnabled, setDevOverlayEnabled] = useState(false)
  const hoveredBlockRef = useRef<string | null>(null)
  const mainRef = useRef<HTMLElement>(null)
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
    () => openInEditor(`${PROJECT_PATH}/public/placeholders/blocks/${slug}`),
    [openInEditor, slug]
  )

  const openComponents = useCallback(
    () =>
      openInEditor(
        `${PROJECT_PATH}/app/(app)/(content)/(blocks)/_block_components`
      ),
    [openInEditor]
  )

  const openTheme = useCallback(
    () => openInEditor(THEME_FILE_PATH),
    [openInEditor]
  )

  const openCurrentBlock = useCallback(() => {
    const blockKey = hoveredBlockRef.current
    if (!blockKey) return
    const blockType = blockKey.replace(/-\d+$/, "")
    const codePath = `${REGISTRY_BLOCKS_PATH}/${blockType}/${blockKey}.tsx`
    openInEditor(codePath)
  }, [openInEditor])

  const copyCurrentBlockPath = useCallback(async () => {
    const blockKey = hoveredBlockRef.current
    if (!blockKey) return
    const blockType = blockKey.replace(/-\d+$/, "")
    const codePath = `${REGISTRY_BLOCKS_PATH}/${blockType}/${blockKey}.tsx`
    try {
      await navigator.clipboard.writeText(codePath)
      toast.success("Copied to clipboard")
    } catch (error) {
      console.error("Failed to copy:", error)
      toast.error("Failed to copy")
    }
  }, [])

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
          // Only copy if dev overlay is on and hovering a block
          if (devOverlayEnabled && hoveredBlockRef.current) {
            e.preventDefault()
            copyCurrentBlockPath()
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [
    isDev,
    devOverlayEnabled,
    openAssets,
    openComponents,
    openCurrentBlock,
    copyCurrentBlockPath,
  ])

  if (blocks.length === 0) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">No blocks found for this template</p>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <BlockThemeWrapper slug={slug} tint={DEFAULT_TINT} className="flex flex-1 flex-col">
        {/* Main content area */}
        <main
          ref={mainRef}
          className="bg-background relative isolate flex-1"
        >
          <ScrollContainerProvider value={mainRef}>
            {/* Template blocks */}
            {blocks.map(
              ({ name, type, Component, tint, forceDark, forceLight }, index) => {
                const skipAlternatingBg =
                  type === "hero" || type === "header" || forceDark || forceLight
                const skipPadding =
                  type === "hero" || type === "header" || type === "footer"
                const blockTint = tint || DEFAULT_TINT

                return (
                  <BlockThemeWrapper
                    key={name}
                    slug={slug}
                    tint={blockTint}
                    forceDark={forceDark}
                    forceLight={forceLight}
                  >
                    <DevBlockOverlay
                      blockKey={name}
                      enabled={devOverlayEnabled}
                      onHover={onBlockHover}
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
                    </DevBlockOverlay>
                  </BlockThemeWrapper>
                )
              }
            )}
          </ScrollContainerProvider>
        </main>
      </BlockThemeWrapper>

      {/* Floating bottom pill - forced dark */}
      <TooltipProvider delayDuration={0}>
        <div className="dark fixed bottom-6 left-1/2 z-50 -translate-x-1/2 text-muted-foreground">
          <div className="flex items-center gap-0.5 rounded-full bg-background p-1 shadow-lg ring-1 ring-border">
            {/* Back */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => router.back()}
                  className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Back</TooltipContent>
            </Tooltip>

            <div className="mx-0.5 h-4 w-px bg-border" />

            {isDev && (
              <>
                {/* Assets */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={openAssets}
                      className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground"
                    >
                      <ImageIcon className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Assets
                    <kbd className="ml-2 rounded bg-foreground/20 px-1 py-0.5 font-mono text-[10px]">⌘I</kbd>
                  </TooltipContent>
                </Tooltip>

                {/* Components */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={openComponents}
                      className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground"
                    >
                      <Layers className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Components
                    <kbd className="ml-2 rounded bg-foreground/20 px-1 py-0.5 font-mono text-[10px]">⌘K</kbd>
                  </TooltipContent>
                </Tooltip>

                {/* Theme */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={openTheme}
                      className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground"
                    >
                      <Palette className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Theme</TooltipContent>
                </Tooltip>

                {/* Dev toggle */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => setDevOverlayEnabled(!devOverlayEnabled)}
                      className={cn(
                        "flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground",
                        devOverlayEnabled && "text-foreground"
                      )}
                    >
                      <Code2 className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Dev overlay
                    <kbd className="ml-2 rounded bg-foreground/20 px-1 py-0.5 font-mono text-[10px]">⌘D</kbd>
                  </TooltipContent>
                </Tooltip>

                <div className="mx-0.5 h-4 w-px bg-border" />
              </>
            )}

            {/* Theme toggle */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <button className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground">
                      <ThemeIcon className="size-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Theme</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="center" side="top" sideOffset={8}>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
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
          </div>
        </div>
      </TooltipProvider>
    </div>
  )
}
