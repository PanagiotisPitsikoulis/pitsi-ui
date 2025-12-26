"use client"

import { Suspense, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
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

function ColorBox({ color }: { color: string }) {
  return (
    <div
      className="size-3.5 shrink-0 rounded-full border border-background ring-1 ring-border/50"
      style={{ backgroundColor: color }}
    />
  )
}

export function TemplateViewerClient({
  slug,
  template,
}: TemplateViewerClientProps) {
  const [devOverlayEnabled, setDevOverlayEnabled] = useState(true)
  const hoveredBlockRef = useRef<string | null>(null)
  const mainRef = useRef<HTMLElement>(null)
  const blocks = getTemplateBlocks(slug as TemplateSlug)
  const isDev = process.env.NODE_ENV === "development"
  const { theme, setTheme, resolvedTheme } = useTheme()

  const ThemeIcon =
    resolvedTheme === "dark" ? Moon : resolvedTheme === "light" ? Sun : Monitor

  // Get theme colors for display
  const palette = templatePalettes[slug] || "azure"
  const presetKey = getPresetKey(palette, DEFAULT_TINT)
  const preset = themePresets[presetKey] || themePresets["azure-tinted"]
  const currentMode = (resolvedTheme as "light" | "dark") || "light"
  const themeColors = preset?.styles?.[currentMode]

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
      <div className="bg-sidebar flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">No blocks found for this template</p>
      </div>
    )
  }

  return (
    <div className="bg-sidebar flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4">
        {/* Left - Back button */}
        <div className="flex items-center">
          <Link href="/blocks/all">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
        </div>

        {/* Center - Title with theme colors */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{template.name}</span>
          {themeColors && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-default flex -space-x-1">
                  <ColorBox color={themeColors.brand} />
                  <ColorBox color={themeColors["brand-complementary"]} />
                  <ColorBox color={themeColors.primary} />
                </div>
              </TooltipTrigger>
              <TooltipContent>{preset.label}</TooltipContent>
            </Tooltip>
          )}
        </div>

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
                <kbd className="bg-muted text-muted-foreground pointer-events-none hidden rounded px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline">
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
                <kbd className="bg-muted text-muted-foreground pointer-events-none hidden rounded px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline">
                  ⌘K
                </kbd>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={openTheme}
              >
                <Palette className="size-4" />
                <span className="hidden sm:inline">Theme</span>
              </Button>
              <Button
                variant={devOverlayEnabled ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
                onClick={() => setDevOverlayEnabled(!devOverlayEnabled)}
              >
                <Code2 className="size-4" />
                <span className="hidden sm:inline">Dev</span>
                <kbd className="bg-muted text-muted-foreground pointer-events-none hidden rounded px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline">
                  ⌘D
                </kbd>
              </Button>
            </>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <ThemeIcon className="size-4" />
                <span className="hidden capitalize sm:inline">
                  {theme === "system" ? "System" : resolvedTheme}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
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
      </header>

      {/* Inset container */}
      <div className="flex min-h-0 flex-1 flex-col px-2 pb-2">
        <BlockThemeWrapper
          slug={slug}
          tint={DEFAULT_TINT}
          className="border-border flex flex-1 flex-col overflow-hidden rounded-xl border shadow-inner"
        >
          {/* Main content area */}
          <main
            ref={mainRef}
            className="bg-background relative isolate flex-1 overflow-y-auto"
          >
            <ScrollContainerProvider value={mainRef}>
              {/* Template blocks - each wrapped with theme and container */}
              {blocks.map(
                ({ name, type, Component, tint, forceDark, forceLight }, index) => {
                  // Heroes/headers don't get alternating bg since they have their own backgrounds
                  const skipAlternatingBg =
                    type === "hero" || type === "header" || forceDark || forceLight
                  // Heroes/headers/footers handle their own padding
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
      </div>
    </div>
  )
}
