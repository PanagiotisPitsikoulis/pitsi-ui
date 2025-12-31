"use client"

import { useEffect } from "react"
import { FileCode, FileText, Layers } from "@/lib/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface DevPillMenuProps {
  itemName: string
  type: "components" | "animations"
}

export function DevPillMenu({ itemName, type }: DevPillMenuProps) {
  const isDev = process.env.NODE_ENV === "development"

  // File paths for dev tools
  const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"

  // Example/demo file path (e.g., dialog-demo.tsx)
  const DEMO_CODE_PATH = `${PROJECT_PATH}/registry/new-york-v4/examples/${itemName}-demo.tsx`

  // UI component file path (e.g., dialog.tsx)
  const UI_CODE_PATH = `${PROJECT_PATH}/registry/new-york-v4/ui/${itemName}.tsx`

  // Docs file path (e.g., components/dialog.mdx or animations/fade-in.mdx)
  const DOCS_PATH = `${PROJECT_PATH}/content/docs/${type}/${itemName}.mdx`

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

  // Dev-only keyboard shortcuts
  useEffect(() => {
    if (!isDev) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return

      switch (e.key.toLowerCase()) {
        case "j": // Open demo code
          e.preventDefault()
          openInEditor(DEMO_CODE_PATH)
          break
        case "g": // Open UI component code
          e.preventDefault()
          openInEditor(UI_CODE_PATH)
          break
        case "u": // Open docs
          e.preventDefault()
          openInEditor(DOCS_PATH)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDev, DEMO_CODE_PATH, UI_CODE_PATH, DOCS_PATH])

  if (!isDev) return null

  return (
    <div className="flex items-center gap-1 rounded-full bg-muted p-1.5">
      <TooltipProvider delayDuration={0}>
        {/* Open Demo Code */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => openInEditor(DEMO_CODE_PATH)}
              className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
            >
              <FileCode className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            Open Demo
            <kbd className="bg-foreground/20 ml-2 rounded px-1 py-0.5 font-mono text-[10px]">
              ⌘J
            </kbd>
          </TooltipContent>
        </Tooltip>

        {/* Open UI Component Code */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => openInEditor(UI_CODE_PATH)}
              className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
            >
              <Layers className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            Open Component
            <kbd className="bg-foreground/20 ml-2 rounded px-1 py-0.5 font-mono text-[10px]">
              ⌘G
            </kbd>
          </TooltipContent>
        </Tooltip>

        {/* Open Docs */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => openInEditor(DOCS_PATH)}
              className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors"
            >
              <FileText className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            Open Docs
            <kbd className="bg-foreground/20 ml-2 rounded px-1 py-0.5 font-mono text-[10px]">
              ⌘U
            </kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
