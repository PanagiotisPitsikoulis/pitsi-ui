"use client"

import * as React from "react"
import { Suspense, useEffect, useRef, useState } from "react"
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
  Monitor,
  Moon,
  Sun,
  Terminal,
} from "lucide-react"
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
  ScrollContainerProvider,
} from "../../../_components"
import {
  getBlockComponent,
  getBlockSettings,
  getTemplateBlocks,
  type TemplateSlug,
} from "../../../blocks"

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
  const mainRef = useRef<HTMLElement>(null)
  const hasScrolled = useRef(false)

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

  // Get the block component and settings for preview mode
  const BlockComponent = getBlockComponent(blockName)
  const blockSettings = getBlockSettings(blockName)

  // Scroll to block when entering template mode
  useEffect(() => {
    if (viewMode === "template" && !hasScrolled.current) {
      hasScrolled.current = true
      // Small delay to let the components render
      setTimeout(() => {
        const blockElement = document.getElementById(blockName)
        if (blockElement) {
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
    <div className="relative min-h-screen pt-5">
      {/* Preview Mode - Render component directly */}
      {viewMode === "preview" && BlockComponent && (
        <BlockThemeWrapper
          slug={blockSettings.templateSlug || ""}
          tint={blockSettings.tint || DEFAULT_TINT}
          forceDark={blockSettings.forceDark}
          forceLight={blockSettings.forceLight}
        >
          <main className="relative isolate">
            <BlockContainer
              index={blockSettings.index}
              tint={blockSettings.tint || DEFAULT_TINT}
              forceBg="none"
            >
              <Suspense fallback={null}>
                <BlockComponent />
              </Suspense>
            </BlockContainer>
          </main>
        </BlockThemeWrapper>
      )}

      {/* Template Mode - Render actual components */}
      {viewMode === "template" && templateSlug && (
        <BlockThemeWrapper slug={templateSlug} tint={DEFAULT_TINT}>
          <main ref={mainRef} className="relative isolate">
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
                      slug={templateSlug}
                      tint={blockTint}
                      forceDark={forceDark}
                      forceLight={forceLight}
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
          </main>
        </BlockThemeWrapper>
      )}

      {/* Code Mode - Same as old CodeSection */}
      {viewMode === "code" && (
        <main className="relative isolate">
          <div className="container pb-6">
            {/* Install command header */}
            <div className="bg-background mb-4 flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm">
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

            {/* Code viewer - matches old CodeSection */}
            <div className="overflow-hidden rounded-xl border shadow-xs">
              <div className="flex items-center justify-between border-b px-4 py-2">
                <span className="text-muted-foreground text-sm font-medium">
                  Code
                </span>
              </div>

              <div className="bg-code text-code-foreground relative flex h-[600px] overflow-hidden">
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
                    className="no-scrollbar overflow-y-auto"
                  />
                </figure>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Floating bottom pill - forced dark */}
      <TooltipProvider delayDuration={0}>
        <div className="dark text-muted-foreground fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="bg-background ring-border flex items-center gap-0.5 rounded-full p-1 shadow-lg ring-1">
            {/* Back */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => router.back()}
                  className="hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors"
                >
                  <ArrowLeft className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Back</TooltipContent>
            </Tooltip>

            <div className="bg-border mx-0.5 h-4 w-px" />

            {/* Preview */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setViewMode("preview")}
                  className={cn(
                    "hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors",
                    viewMode === "preview" && "text-foreground"
                  )}
                >
                  <Eye className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Preview</TooltipContent>
            </Tooltip>

            {/* Template view - only show if block belongs to a template */}
            {templateSlug && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setViewMode("template")}
                    className={cn(
                      "hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors",
                      viewMode === "template" && "text-foreground"
                    )}
                  >
                    <Layers className="size-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>View in template</TooltipContent>
              </Tooltip>
            )}

            {/* Code */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setViewMode("code")}
                  className={cn(
                    "hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors",
                    viewMode === "code" && "text-foreground"
                  )}
                >
                  <Code2 className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Code & Install</TooltipContent>
            </Tooltip>

            <div className="bg-border mx-0.5 h-4 w-px" />

            {/* Copy command */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => copyCommandToClipboard(addCommand)}
                  className={cn(
                    "hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors",
                    isCommandCopied && "text-foreground"
                  )}
                >
                  <Terminal className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {isCommandCopied ? "Copied!" : "Copy install command"}
              </TooltipContent>
            </Tooltip>

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
                    "hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors",
                    isCopied && "text-foreground"
                  )}
                >
                  <Clipboard className="size-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {isCopied ? "Copied!" : "Copy code"}
              </TooltipContent>
            </Tooltip>

            <div className="bg-border mx-0.5 h-4 w-px" />

            {/* Theme toggle */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <button className="hover:text-foreground flex size-7 items-center justify-center rounded-full transition-colors">
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

            {/* Dev-only tools */}
            {isDev && (
              <>
                <div className="bg-border mx-0.5 h-4 w-px" />

                {/* Open Block Code */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => openInEditor(BLOCK_CODE_PATH)}
                      className="flex size-7 items-center justify-center rounded-full transition-colors hover:text-foreground"
                    >
                      <FileCode className="size-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Open Block
                    <kbd className="ml-2 rounded bg-foreground/20 px-1 py-0.5 font-mono text-[10px]">⌘G</kbd>
                  </TooltipContent>
                </Tooltip>

                {/* Open Components */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => openInEditor(BLOCK_COMPONENTS_PATH, true)}
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

                {/* Open Assets (conditional) */}
                {ASSETS_PATH && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => openInEditor(ASSETS_PATH, true)}
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
                )}
              </>
            )}
          </div>
        </div>
      </TooltipProvider>
    </div>
  )
}
