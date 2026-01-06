"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Code2, Copy, FolderOpen } from "@/lib/icons"

interface DevBlockOverlayProps {
  blockKey: string
  children: React.ReactNode
  enabled?: boolean
  onHover?: (blockKey: string | null) => void
  isApplication?: boolean
}

// Base paths - adjust if your project structure differs
const PROJECT_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"
const REGISTRY_BLOCKS_PATH = `${PROJECT_PATH}/registry/new-york-v4/blocks`

export function DevBlockOverlay({
  blockKey,
  children,
  enabled = true,
  onHover,
  isApplication = false,
}: DevBlockOverlayProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Only show in development and when enabled
  if (process.env.NODE_ENV !== "development" || !enabled) {
    return <>{children}</>
  }

  // Construct the file path based on whether it's an application block or regular block
  let codePath: string
  if (isApplication) {
    // Application blocks are in: registry/new-york-v4/blocks/application/{blockKey}.tsx
    codePath = `${REGISTRY_BLOCKS_PATH}/application/${blockKey}.tsx`
  } else {
    // Extract block type from blockKey (e.g., "header-1" -> "header", "features-2" -> "features")
    const blockType = blockKey.replace(/-\d+$/, "")
    // Regular blocks are in: registry/new-york-v4/blocks/{type}/{blockKey}.tsx
    codePath = `${REGISTRY_BLOCKS_PATH}/${blockType}/${blockKey}.tsx`
  }

  const openInEditor = async (filePath: string, addToWorkspace = false) => {
    try {
      const response = await fetch("/api/open-in-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath, addToWorkspace }),
      })

      if (!response.ok) {
        console.error("Failed to open in editor")
      }
    } catch (error) {
      console.error("Error opening in editor:", error)
    }
  }

  const copyPath = async () => {
    try {
      await navigator.clipboard.writeText(codePath)
      toast.success("Copied to clipboard")
    } catch (error) {
      console.error("Failed to copy:", error)
      toast.error("Failed to copy")
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    onHover?.(blockKey)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onHover?.(null)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Dev overlay */}
      {isHovered && (
        <div className="pointer-events-none absolute inset-0 z-50">
          {/* Border highlight */}
          <div className="absolute inset-0 border-2 border-dashed border-blue-500/50 bg-blue-500/5" />

          {/* Label and buttons */}
          <div className="pointer-events-auto absolute top-2 right-2 flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 font-mono text-xs text-white shadow-lg">
                <Code2 className="size-3" />
                <span>{blockKey}</span>
              </div>
              <button
                onClick={() => openInEditor(codePath)}
                className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
                title={`Open code: ${codePath}`}
              >
                <FolderOpen className="size-3" />
                Code
                <kbd className="ml-1 rounded bg-blue-500 px-1 py-0.5 font-mono text-[10px]">
                  ⌘G
                </kbd>
              </button>
              <button
                onClick={copyPath}
                className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
                title="Copy path"
              >
                <Copy className="size-3" />
                Copy
                <kbd className="ml-1 rounded bg-blue-500 px-1 py-0.5 font-mono text-[10px]">
                  ⌘C
                </kbd>
              </button>
            </div>
            {/* Full path display */}
            <div className="max-w-md truncate rounded-md bg-black/80 px-3 py-1.5 font-mono text-[10px] text-white/70 shadow-lg">
              {codePath}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
