"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Check,
  Code2,
  Eye,
  FolderOpen,
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
import { useTheme } from "next-themes"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
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
  TemplateBlocksSection,
  type BlockMetadata,
} from "../../_components"
import type { BlockConfig } from "../../template-config"

interface ApplicationTemplateViewerClientProps {
  slug: string
  styleName: Style["name"]
  template: {
    name: string
    description: string
  }
  templateBlocks: BlockConfig[]
  shell: string
  blocksMetadata: BlockMetadata[]
}

// Base paths
const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
const REGISTRY_BLOCKS_PATH = `${PROJECT_PATH}/registry/new-york-v4/blocks`
const THEME_FILE_PATH = `${PROJECT_PATH}/app/(app)/(tools)/tools/theme-generator/_components/theme-presets.ts`

export function ApplicationTemplateViewerClient({
  slug,
  styleName,
  template,
  templateBlocks,
  shell,
  blocksMetadata,
}: ApplicationTemplateViewerClientProps) {
  const router = useRouter()
  const isDev = process.env.NODE_ENV === "development"
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { copyToClipboard: copyInstallCommand, isCopied: isInstallCopied } = useCopyToClipboard()
  const [iframeKey, setIframeKey] = useState(0)
  const installCommand = `npx pitsi@latest add ${slug}`

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

  const openBlock = useCallback(
    (blockName: string) => {
      const codePath = `${REGISTRY_BLOCKS_PATH}/application/${blockName}.tsx`
      openInEditor(codePath)
    },
    [openInEditor]
  )

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

  // Keyboard shortcuts
  useEffect(() => {
    if (!isDev) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if Cmd (Mac) or Ctrl (Windows) is pressed
      if (!e.metaKey && !e.ctrlKey) return

      switch (e.key.toLowerCase()) {
        case "i":
          e.preventDefault()
          openAssets()
          break
        case "k":
          e.preventDefault()
          openComponents()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDev, openAssets, openComponents])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-[calc(100vh-var(--header-height))] flex-col gap-3 overflow-x-hidden p-3">
        {/* Top Toolbar */}
        <div>
          <div className="container flex items-center gap-1 rounded-full bg-muted p-1.5">
            {/* Back button */}
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

            {/* Preview (always active) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="bg-background text-foreground flex size-9 items-center justify-center rounded-full shadow-sm transition-colors"
                >
                  <Eye className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">Preview</TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="mx-1 hidden h-5 w-px bg-border lg:block" />

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
              <TooltipContent side="bottom" className="text-xs">Open in new tab</TooltipContent>
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
              <TooltipContent side="bottom" className="text-xs">Refresh</TooltipContent>
            </Tooltip>

            {/* Right side: Actions */}
            <div className="ml-auto flex items-center gap-1">
              {/* Install template */}
              <button
                onClick={() => copyInstallCommand(installCommand)}
                className="bg-background text-foreground hover:bg-muted flex h-9 items-center gap-2 rounded-full px-3 font-mono text-xs shadow-sm transition-colors"
              >
                {isInstallCopied ? <Check className="size-3.5" /> : <Terminal className="size-3.5" />}
                <span className="hidden md:inline">{isInstallCopied ? "Copied!" : installCommand}</span>
              </button>

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
                    <TooltipContent side="bottom" className="text-xs">Theme file</TooltipContent>
                  </Tooltip>

                  {/* Blocks dropdown */}
                  <DropdownMenu>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DropdownMenuTrigger className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors">
                          <Code2 className="size-4" />
                        </DropdownMenuTrigger>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-xs">Open blocks</TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent align="end" className="w-56">
                      {/* Main app component */}
                      <DropdownMenuItem onClick={() => openBlock(slug)}>
                        <FolderOpen className="mr-2 size-4" />
                        <span className="font-mono text-xs">{slug}</span>
                        <span className="text-muted-foreground ml-auto text-xs">main</span>
                      </DropdownMenuItem>
                      {/* Shell component */}
                      <DropdownMenuItem onClick={() => openBlock(shell)}>
                        <FolderOpen className="mr-2 size-4" />
                        <span className="font-mono text-xs">{shell}</span>
                        <span className="text-muted-foreground ml-auto text-xs">shell</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {/* View components */}
                      {templateBlocks.map((block) => (
                        <DropdownMenuItem key={block.name} onClick={() => openBlock(block.name)}>
                          <FolderOpen className="mr-2 size-4" />
                          <span className="font-mono text-xs">{block.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Preview Container */}
        <div className="container">
          <div
            key={iframeKey}
            className="bg-muted/30 h-[calc(100vh-var(--header-height)-120px)] min-h-[500px] overflow-hidden rounded-2xl border"
          >
            <iframe
              src={`/view/${styleName}/${slug}`}
              className="h-full w-full border-0"
            />
          </div>
        </div>

        {/* Template Blocks Section */}
        <div className="container">
          <TemplateBlocksSection
            templateBlocks={templateBlocks}
            styleName={styleName}
            blocksMetadata={blocksMetadata}
            title="Views in this Application"
          />
        </div>
      </div>
    </TooltipProvider>
  )
}
