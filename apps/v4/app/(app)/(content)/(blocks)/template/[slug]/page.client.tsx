"use client"

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import {
  ArrowLeft,
  Check,
  Code2,
  Eye,
  ImageIcon,
  Layers,
  Maximize,
  Monitor,
  Moon,
  Palette,
  RotateCw,
  Sun,
  Terminal,
} from "@/lib/icons"
import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { type ComputedTemplateBlock } from "@/registry/__blocks-metadata__"
import { type ColorPalette } from "@/registry/new-york-v4/lib/block-theme"
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
  BlockSelectorOverlay,
  BlockThemeWrapper,
  DEFAULT_TINT,
  DevBlockOverlay,
  getFontsByTypography,
  ScrollContainerProvider,
  TemplateBlocksSection,
  type BlockMetadata,
} from "../../_components"
import { type FontPreset } from "../../_components/template-fonts"
import {
  getTemplateBlockGroups,
  getTemplateBlockGroupsWithVariants,
  getTemplateBlocks,
  type TemplateSlug,
} from "../../blocks"

// Palette colors for theme display
const paletteColors: Record<
  ColorPalette,
  { brand: string; complementary: string }
> = {
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

function ThemeDisplay({ palette }: { palette: ColorPalette }) {
  const colors = paletteColors[palette]
  // Primary is same as brand for non-slate palettes
  const primaryColor = palette === "slate" ? "#2d2d2d" : colors.brand

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/tools/theme-generator?palette=${palette}`}
          className="bg-background flex h-9 items-center gap-2 rounded-full px-3 shadow-sm"
        >
          <div className="flex items-center -space-x-1.5">
            <span
              className="border-background inline-block size-4 rounded-full border-2 shadow-sm"
              style={{ backgroundColor: colors.brand }}
            />
            <span
              className="border-background inline-block size-4 rounded-full border-2 shadow-sm"
              style={{ backgroundColor: colors.complementary }}
            />
            <span
              className="border-background inline-block size-4 rounded-full border-2 shadow-sm"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <span className="text-foreground text-xs font-medium capitalize">
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

function TypographyDisplay({ preset }: { preset: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/tools/typography-composer?preset=${preset}`}
          className="bg-background flex h-9 items-center gap-1.5 rounded-full px-3 shadow-sm"
        >
          <span className="text-foreground text-sm font-semibold">Aa</span>
          <span className="text-foreground text-xs font-medium capitalize">
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

interface TemplateViewerClientProps {
  slug: string
  styleName: Style["name"]
  template: {
    name: string
    description: string
  }
  templateBlocks: ComputedTemplateBlock[]
  blocksMetadata: BlockMetadata[]
}

// Base paths
const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
const REGISTRY_BLOCKS_PATH = `${PROJECT_PATH}/registry/new-york-v4/blocks`
const THEME_FILE_PATH = `${PROJECT_PATH}/app/(app)/(tools)/tools/theme-generator/_components/theme-presets.ts`

export function TemplateViewerClient({
  slug,
  styleName,
  template,
  templateBlocks: templateBlocksConfig,
  blocksMetadata,
}: TemplateViewerClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [devOverlayEnabled, setDevOverlayEnabled] = useState(false)
  const hoveredBlockRef = useRef<string | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const [overlayOpen, setOverlayOpen] = useState(false)

  // Block selection - get all block groups with variants
  const blockGroups = getTemplateBlockGroups(slug)
  const blockGroupsWithVariants = getTemplateBlockGroupsWithVariants(slug)

  // Build selected blocks from URL params
  const selectedBlocks = useMemo(() => {
    const selections: Record<string, string> = {}
    for (const [blockType, options] of Object.entries(blockGroups)) {
      const param = searchParams.get(blockType)
      selections[blockType] = param || options[0] // Default to first
    }
    return selections
  }, [searchParams, blockGroups])

  const handleBlockSelect = useCallback(
    (blockType: string, blockName: string) => {
      const params = new URLSearchParams(searchParams.toString())
      const defaultBlock = blockGroups[blockType]?.[0]
      if (blockName === defaultBlock) {
        params.delete(blockType)
      } else {
        params.set(blockType, blockName)
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [blockGroups, pathname, router, searchParams]
  )

  const blocks = getTemplateBlocks(slug as TemplateSlug, selectedBlocks)
  const isDev = process.env.NODE_ENV === "development"
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { copyToClipboard: copyInstallCommand, isCopied: isInstallCopied } =
    useCopyToClipboard()
  const [iframeKey, setIframeKey] = useState(0)
  const installCommand = `npx pitsi@latest add ${slug}`

  const ThemeIcon =
    resolvedTheme === "dark" ? Moon : resolvedTheme === "light" ? Sun : Monitor

  // Get palette and typography from first block (for display purposes)
  const firstBlock = blocks[0]
  const firstBlockPalette = (firstBlock?.palette || "slate") as ColorPalette
  const firstBlockTypography = (firstBlock?.typography ||
    "modern") as FontPreset
  const fonts = getFontsByTypography(firstBlock?.typography)

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
        <p className="text-muted-foreground">
          No blocks found for this template
        </p>
      </div>
    )
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-[calc(100vh-var(--header-height))] flex-col gap-3 overflow-x-hidden p-3">
        {/* Top Toolbar */}
        <div>
          <div className="bg-muted container flex items-center gap-1 rounded-full p-1.5">
            {/* Back button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blocks"
                  className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                >
                  <ArrowLeft className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Back to blocks
              </TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="bg-border mx-1 h-5 w-px" />

            {/* Preview (always active for template) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-background text-foreground flex size-9 items-center justify-center rounded-full shadow-sm transition-colors">
                  <Eye className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Preview
              </TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="bg-border mx-1 hidden h-5 w-px lg:block" />

            {/* Fullscreen button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`/view/${styleName}/${slug}`}
                  target="_blank"
                  className="text-muted-foreground hover:bg-background/50 hover:text-foreground hidden size-9 items-center justify-center rounded-full transition-colors lg:flex"
                >
                  <Maximize className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Open in new tab
              </TooltipContent>
            </Tooltip>

            {/* Refresh button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="text-muted-foreground hover:bg-background/50 hover:text-foreground hidden size-9 items-center justify-center rounded-full transition-colors lg:flex"
                >
                  <RotateCw className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Refresh
              </TooltipContent>
            </Tooltip>

            {/* Customize blocks button */}
            {Object.keys(blockGroupsWithVariants).length > 0 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setOverlayOpen(true)}
                    className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                  >
                    <Layers className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  Customize Blocks
                </TooltipContent>
              </Tooltip>
            )}

            {/* Separator */}
            <div className="bg-border mx-1 hidden h-5 w-px lg:block" />

            {/* Theme and Typography displays */}
            <div className="hidden items-center gap-1 lg:flex">
              <ThemeDisplay palette={firstBlockPalette} />
              <TypographyDisplay preset={firstBlockTypography} />
            </div>

            {/* Right side: Actions */}
            <div className="ml-auto flex items-center gap-1">
              {/* Install template */}
              <button
                onClick={() => copyInstallCommand(installCommand)}
                className="bg-background text-foreground hover:bg-muted flex h-9 items-center gap-2 rounded-full px-3 font-mono text-xs shadow-sm transition-colors"
              >
                {isInstallCopied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Terminal className="size-3.5" />
                )}
                <span className="hidden md:inline">
                  {isInstallCopied ? "Copied!" : installCommand}
                </span>
              </button>

              {/* Separator */}
              <div className="bg-border mx-1 h-5 w-px" />

              {/* Theme toggle */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors">
                      <ThemeIcon className="size-4" />
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    Theme
                  </TooltipContent>
                </Tooltip>
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

              {/* Dev-only tools */}
              {isDev && (
                <>
                  {/* Separator */}
                  <div className="bg-border mx-1 h-5 w-px" />

                  {/* Assets */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={openAssets}
                        className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <ImageIcon className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Assets <kbd className="ml-1 text-[10px]">⌘I</kbd>
                    </TooltipContent>
                  </Tooltip>

                  {/* Components */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={openComponents}
                        className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <Layers className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Components <kbd className="ml-1 text-[10px]">⌘K</kbd>
                    </TooltipContent>
                  </Tooltip>

                  {/* Theme file */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={openTheme}
                        className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
                      >
                        <Palette className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Theme file
                    </TooltipContent>
                  </Tooltip>

                  {/* Dev overlay toggle */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setDevOverlayEnabled(!devOverlayEnabled)}
                        className={cn(
                          "flex size-9 items-center justify-center rounded-full transition-colors",
                          devOverlayEnabled
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                        )}
                      >
                        <Code2 className="size-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      Dev overlay <kbd className="ml-1 text-[10px]">⌘D</kbd>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Preview Container */}
        <div className="container">
          <div
            ref={mainRef}
            className="bg-muted/30 h-[calc(100vh-var(--header-height)-80px)] min-h-[600px] overflow-hidden rounded-2xl border"
          >
            <div className="h-full overflow-auto">
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
                        type === "hero" ||
                        type === "header" ||
                        type === "footer"
                      const blockTint = tint || DEFAULT_TINT
                      // Use block's palette and typography
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
              </BlockThemeWrapper>
            </div>
          </div>
        </div>

        {/* Template Blocks Section */}
        <div className="container">
          <TemplateBlocksSection
            templateBlocks={templateBlocksConfig}
            styleName={styleName}
            blocksMetadata={blocksMetadata}
            title="Blocks in this Template"
          />
        </div>
      </div>

      {/* Block Selector Overlay */}
      <BlockSelectorOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        blockGroups={blockGroupsWithVariants}
        selectedBlocks={selectedBlocks}
        onBlockSelect={handleBlockSelect}
      />
    </TooltipProvider>
  )
}
