"use client"

import * as React from "react"
import { Suspense, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Check,
  Clipboard,
  Code2,
  Eye,
  FileCode,
  Folder,
  ImageIcon,
  Layers,
  Maximize,
  Monitor,
  Moon,
  RotateCw,
  Sun,
  Terminal,
} from "@/lib/icons"
import { useTheme } from "next-themes"
import { registryItemFileSchema, type RegistryItem } from "pitsi/schema"
import { z } from "zod"

import { trackEvent } from "@/lib/events"
import { type FileTree } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { FileTreeSidebar } from "@/components/documentation/blocks/shared/file-tree"
import { getIconForLanguageExtension } from "@/components/shared/icons"
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
import { type Style } from "@/registry/styles"

import {
  BlockContainer,
  BlockThemeWrapper,
  DEFAULT_TINT,
  getTemplateFonts,
  ScrollContainerProvider,
  RelatedBlocksSection,
  type BlockItem,
} from "../../../_components"
import { getTemplateBlocks, type TemplateSlug } from "../../../blocks"
import { getTemplatePalette } from "../../../template-config"
import { type ColorPalette } from "@/registry/new-york-v4/lib/block-theme"
import { type FontPreset } from "../../../_components/template-fonts"

// Palette colors for theme display
const paletteColors: Record<ColorPalette, { brand: string; complementary: string }> = {
  slate: { brand: "#777777", complementary: "#999999" },
  azure: { brand: "#3b82f6", complementary: "#f97316" },
  violet: { brand: "#8b5cf6", complementary: "#22c55e" },
  rose: { brand: "#e11d48", complementary: "#14b8a6" },
  sage: { brand: "#84a98c", complementary: "#d4a574" },
  amber: { brand: "#d97706", complementary: "#4f46e5" },
  cyan: { brand: "#06b6d4", complementary: "#f97316" },
  indigo: { brand: "#4f46e5", complementary: "#f59e0b" },
  coral: { brand: "#f97316", complementary: "#06b6d4" },
  forest: { brand: "#166534", complementary: "#ea580c" },
  neon: { brand: "#00ff00", complementary: "#ff00ff" },
}

// Font preset to template mapping (reverse lookup)
const templateFontPresets: Record<string, FontPreset> = {
  "service-plants": "elegant",
  "service-travel": "modern",
  "service-boat": "classic",
  "service-fitness": "futuristic",
  "app-gym-tracker": "modern",
  "app-quiz": "playful",
}

function getTemplateFontPreset(slug: string): FontPreset {
  return templateFontPresets[slug] || "modern"
}

function ThemeDisplay({ palette }: { palette: ColorPalette }) {
  const colors = paletteColors[palette]
  // Primary is same as brand for non-slate palettes
  const primaryColor = palette === "slate" ? "#2d2d2d" : colors.brand

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/tools/theme-generator?palette=${palette}`}
          className="flex h-9 items-center gap-2 rounded-full bg-background px-3 shadow-sm"
        >
          <div className="flex items-center -space-x-1.5">
            <span
              className="inline-block size-4 rounded-full border-2 border-background shadow-sm"
              style={{ backgroundColor: colors.brand }}
            />
            <span
              className="inline-block size-4 rounded-full border-2 border-background shadow-sm"
              style={{ backgroundColor: colors.complementary }}
            />
            <span
              className="inline-block size-4 rounded-full border-2 border-background shadow-sm"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <span className="text-xs font-medium capitalize text-foreground">
            {palette}
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        Edit theme
      </TooltipContent>
    </Tooltip>
  )
}

function TypographyDisplay({ slug }: { slug: string }) {
  const preset = getTemplateFontPreset(slug)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/tools/typography-composer?preset=${preset}`}
          className="flex h-9 items-center gap-1.5 rounded-full bg-background px-3 shadow-sm"
        >
          <span className="text-sm font-semibold text-foreground">
            Aa
          </span>
          <span className="text-xs font-medium capitalize text-foreground">
            {preset}
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        Edit typography
      </TooltipContent>
    </Tooltip>
  )
}

type ViewMode = "preview" | "template" | "code"

interface BlockViewerClientProps {
  blockName: string
  category: string
  styleName: Style["name"]
  templateSlug: string | null
  blockIndex: number
  item: RegistryItem | null
  tree: FileTree[] | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
  blocks: BlockItem[]
}

export function BlockViewerClient({
  blockName,
  category,
  styleName,
  templateSlug,
  blockIndex,
  item,
  tree,
  highlightedFiles,
  blocks,
}: BlockViewerClientProps) {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<ViewMode>("preview")
  const [activeFile, setActiveFile] = useState<string | null>(
    highlightedFiles?.[0]?.target ?? null
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const { copyToClipboard: copyCommandToClipboard, isCopied: isCommandCopied } =
    useCopyToClipboard()
  const mainRef = useRef<HTMLDivElement>(null)
  const hasScrolled = useRef(false)
  const [iframeKey, setIframeKey] = useState(0)

  // Dev-only features
  const isDev = process.env.NODE_ENV === "development"

  // File paths for dev tools
  const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
  const blockType = blockName.replace(/-\d+$/, "") // "hero-1" -> "hero"
  const BLOCK_CODE_PATH = `${PROJECT_PATH}/registry/new-york-v4/blocks/${blockType}/${blockName}.tsx`
  const BLOCK_COMPONENTS_PATH = `${PROJECT_PATH}/app/templates/_demo-blocks/_block_components`
  const ASSETS_PATH = templateSlug
    ? `${PROJECT_PATH}/public/placeholders/blocks/${templateSlug}`
    : null

  // Open file in editor (dev only)
  const openInEditor = async (filePath: string, addToWorkspace = false) => {
    try {
      await fetch("/api/open-in-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath, addToWorkspace }),
      })
    } catch (error) {
      console.error("Failed to open in editor:", error)
    }
  }

  const ThemeIcon =
    resolvedTheme === "dark" ? Moon : resolvedTheme === "light" ? Sun : Monitor

  const file = highlightedFiles?.find((f) => f.target === activeFile)
  const fileForCopy = item?.files?.find((f) => f.target === activeFile)
  const language = file?.path.split(".").pop() ?? "tsx"

  // Build add command
  const addCommand = `npx pitsi@latest add ${blockName}`

  // Get template blocks if in template mode
  const templateBlocks = templateSlug
    ? getTemplateBlocks(templateSlug as TemplateSlug)
    : []

  // Get fonts for template
  const fonts = templateSlug ? getTemplateFonts(templateSlug) : undefined

  // Scroll to block when entering template mode
  useEffect(() => {
    if (viewMode === "template" && !hasScrolled.current) {
      hasScrolled.current = true
      // Small delay to let the components render
      setTimeout(() => {
        const blockElement = document.getElementById(blockName)
        if (blockElement && mainRef.current) {
          blockElement.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
    if (viewMode !== "template") {
      hasScrolled.current = false
    }
  }, [viewMode, blockName])

  // Dev-only keyboard shortcuts
  useEffect(() => {
    if (!isDev) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return

      switch (e.key.toLowerCase()) {
        case "g": // Open block code
          e.preventDefault()
          openInEditor(BLOCK_CODE_PATH)
          break
        case "k": // Open components
          e.preventDefault()
          openInEditor(BLOCK_COMPONENTS_PATH, true)
          break
        case "i": // Open assets (if exists)
          e.preventDefault()
          if (ASSETS_PATH) openInEditor(ASSETS_PATH, true)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDev, blockName, templateSlug, BLOCK_CODE_PATH, ASSETS_PATH])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-[calc(100vh-var(--header-height))] flex-col gap-3 overflow-x-hidden p-3">
        {/* Top Toolbar */}
        <div>
          <div className="container flex items-center gap-1 rounded-full bg-muted p-1.5">
            {/* Left side: Back button and View tabs */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => router.back()}
                  className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                >
                  <ArrowLeft className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">Back</TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="mx-1 h-5 w-px bg-border" />

            {/* View mode toggles */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setViewMode("preview")}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full transition-colors",
                    viewMode === "preview"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  )}
                >
                  <Eye className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">Preview</TooltipContent>
            </Tooltip>

            {templateSlug && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setViewMode("template")}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full transition-colors",
                      viewMode === "template"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                  >
                    <Layers className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">Template</TooltipContent>
              </Tooltip>
            )}

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setViewMode("code")}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full transition-colors",
                    viewMode === "code"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                  )}
                >
                  <Code2 className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">Code</TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="mx-1 hidden h-5 w-px bg-border lg:block" />

            {/* Fullscreen button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`/view/${styleName}/${blockName}`}
                  target="_blank"
                  className="text-muted-foreground hover:bg-background/50 hover:text-foreground hidden size-9 items-center justify-center rounded-full transition-colors lg:flex"
                >
                  <Maximize className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">Open in new tab</TooltipContent>
            </Tooltip>

            {/* Refresh button */}
            {viewMode === "preview" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIframeKey((k) => k + 1)}
                    className="text-muted-foreground hover:bg-background/50 hover:text-foreground hidden size-9 items-center justify-center rounded-full transition-colors lg:flex"
                  >
                    <RotateCw className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">Refresh</TooltipContent>
              </Tooltip>
            )}

            {/* Separator before theme displays */}
            {templateSlug && <div className="mx-1 hidden h-5 w-px bg-border lg:block" />}

            {/* Theme and Typography displays */}
            {templateSlug && (
              <div className="hidden items-center gap-1 lg:flex">
                <ThemeDisplay palette={getTemplatePalette(templateSlug)} />
                <TypographyDisplay slug={templateSlug} />
              </div>
            )}

            {/* Right side: Actions */}
            <div className="ml-auto flex items-center gap-1">
              {/* Copy command */}
              <button
                onClick={() => copyCommandToClipboard(addCommand)}
                className="bg-background text-foreground flex h-9 items-center gap-2 rounded-full px-3 font-mono text-xs shadow-sm transition-colors"
              >
                {isCommandCopied ? <Check className="size-3.5" /> : <Terminal className="size-3.5" />}
                <span className="hidden md:inline">npx pitsi add {blockName}</span>
              </button>

              {/* Copy code */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => {
                      if (fileForCopy?.content) {
                        copyToClipboard(fileForCopy.content)
                        trackEvent({
                          name: "copy_block_code",
                          properties: {
                            name: blockName,
                            file: file?.path ?? "",
                          },
                        })
                      }
                    }}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full transition-colors",
                      isCopied
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                  >
                    {isCopied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  {isCopied ? "Copied!" : "Copy code"}
                </TooltipContent>
              </Tooltip>

              {/* Separator */}
              <div className="mx-1 h-5 w-px bg-border" />

              {/* Theme toggle */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors">
                      <ThemeIcon className="size-4" />
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">Theme</TooltipContent>
                </Tooltip>
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

              {/* Dev-only tools */}
              {isDev && (
                <>
                  {/* Separator */}
                  <div className="mx-1 h-5 w-px bg-border" />

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => openInEditor(BLOCK_CODE_PATH)}
                        className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <FileCode className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Open Block <kbd className="ml-1 text-[10px]">⌘G</kbd>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => openInEditor(BLOCK_COMPONENTS_PATH, true)}
                        className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <Layers className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Components <kbd className="ml-1 text-[10px]">⌘K</kbd>
                    </TooltipContent>
                  </Tooltip>

                  {ASSETS_PATH && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => openInEditor(ASSETS_PATH, true)}
                          className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                        >
                          <ImageIcon className="size-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-xs">
                        Assets <kbd className="ml-1 text-[10px]">⌘I</kbd>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Preview Container */}
        <div className="container">
          <div className="bg-muted/30 h-[calc(100vh-var(--header-height)-80px)] min-h-[600px] overflow-hidden rounded-2xl border">
            {/* Preview Mode - uses iframe for isolation */}
            {viewMode === "preview" && (
              <div className="relative h-full w-full">
                <iframe
                  key={iframeKey}
                  src={`/view/${styleName}/${blockName}`}
                  className="h-full w-full border-0"
                />
              </div>
            )}

            {/* Template Mode - scrollable content */}
            <div
              ref={mainRef}
              className={cn(
                "h-full overflow-auto",
                viewMode !== "template" && viewMode !== "code" && "hidden"
              )}
            >

              {/* Template Mode */}
              {viewMode === "template" && templateSlug && (
                <BlockThemeWrapper palette={getTemplatePalette(templateSlug)} tint={DEFAULT_TINT} fonts={fonts}>
                  <ScrollContainerProvider value={mainRef}>
                    {templateBlocks.map(
                      (
                        { name, type, Component, tint, forceDark, forceLight },
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
                        const isCurrentBlock = name === blockName

                        return (
                          <BlockThemeWrapper
                            key={name}
                            palette={getTemplatePalette(templateSlug)}
                            tint={blockTint}
                            forceDark={forceDark}
                            forceLight={forceLight}
                            fonts={fonts}
                          >
                            <div
                              id={name}
                              className={cn(
                                isCurrentBlock &&
                                  "ring-primary ring-offset-background ring-2 ring-offset-2"
                              )}
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
                            </div>
                          </BlockThemeWrapper>
                        )
                      }
                    )}
                  </ScrollContainerProvider>
                </BlockThemeWrapper>
              )}

            {/* Code Mode */}
            {viewMode === "code" && (
              <div className="bg-background h-full overflow-auto p-6 pb-12">
                <div>
                  {/* Install command header */}
                  <div className="bg-background mb-4 flex items-center gap-3 rounded-xl border px-4 py-3">
                    <Terminal className="text-muted-foreground size-4" />
                    <code className="flex-1 font-mono text-sm">{addCommand}</code>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-7"
                      onClick={() => copyCommandToClipboard(addCommand)}
                    >
                      {isCommandCopied ? (
                        <Check className="size-3.5" />
                      ) : (
                        <Clipboard className="size-3.5" />
                      )}
                    </Button>
                  </div>

                  {/* Code viewer */}
                  <div className="overflow-hidden rounded-xl border shadow-xs">
                    <div className="flex items-center justify-between border-b px-4 py-2">
                      <span className="text-muted-foreground text-sm font-medium">
                        Code
                      </span>
                    </div>

                    <div className="bg-code text-code-foreground relative flex h-[500px] overflow-hidden">
                      {/* Sidebar - collapsible on mobile */}
                      <div
                        className={cn(
                          "bg-code absolute inset-y-0 left-0 z-40 w-72 transition-transform md:relative md:translate-x-0",
                          sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        )}
                      >
                        {tree && (
                          <FileTreeSidebar
                            tree={tree}
                            activeFile={activeFile}
                            setActiveFile={setActiveFile}
                          />
                        )}
                      </div>

                      {/* Overlay for mobile */}
                      {sidebarOpen && (
                        <div
                          className="absolute inset-0 z-30 bg-black/50 md:hidden"
                          onClick={() => setSidebarOpen(false)}
                        />
                      )}

                      <figure
                        data-rehype-pretty-code-figure=""
                        className="!mx-0 mt-0 flex min-w-0 flex-1 flex-col !rounded-none border-none"
                      >
                        <figcaption
                          className="text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 [&_svg]:size-4 [&_svg]:opacity-70"
                          data-language={language}
                        >
                          {getIconForLanguageExtension(language)}
                          <span className="line-clamp-1">{file?.target}</span>
                          <div className="ml-auto flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="bg-background size-7 border shadow-sm md:hidden"
                              onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                              <Folder />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-7"
                              onClick={() => {
                                if (fileForCopy?.content) {
                                  copyToClipboard(fileForCopy.content)
                                  trackEvent({
                                    name: "copy_block_code",
                                    properties: {
                                      name: blockName,
                                      file: file?.path ?? "",
                                    },
                                  })
                                }
                              }}
                            >
                              {isCopied ? <Check /> : <Clipboard />}
                            </Button>
                          </div>
                        </figcaption>
                        <div
                          key={file?.path}
                          dangerouslySetInnerHTML={{
                            __html: file?.highlightedContent ?? "",
                          }}
                          className="overflow-y-auto pb-8"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Related Blocks Section */}
        <div className="container">
          <RelatedBlocksSection
            currentBlockName={blockName}
            category={category}
            templateSlug={templateSlug}
            styleName={styleName}
            blocks={blocks}
          />
        </div>
      </div>
    </TooltipProvider>
  )
}
