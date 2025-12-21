"use client"

import { useState } from "react"
import { Code2, ExternalLink } from "lucide-react"

interface DevBlockOverlayProps {
  blockType: string
  slug: string
  children: React.ReactNode
  enabled?: boolean
}

// Base path for the demo blocks - adjust if your project structure differs
const BASE_PATH = "/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4/app/templates/_demo-blocks"

export function DevBlockOverlay({
  blockType,
  slug,
  children,
  enabled = true,
}: DevBlockOverlayProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Only show in development and when enabled
  if (process.env.NODE_ENV !== "development" || !enabled) {
    return <>{children}</>
  }

  // Construct the file path based on convention
  const filePath = `${BASE_PATH}/${blockType}/${slug}/${blockType}.tsx`

  const handleOpenInZed = async () => {
    try {
      const response = await fetch("/api/open-in-editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath }),
      })

      if (!response.ok) {
        console.error("Failed to open file in Zed")
      }
    } catch (error) {
      console.error("Error opening file:", error)
    }
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* Dev overlay */}
      {isHovered && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Border highlight */}
          <div className="absolute inset-0 border-2 border-dashed border-blue-500/50 bg-blue-500/5" />

          {/* Label and button */}
          <div className="absolute top-2 right-2 flex items-center gap-2 pointer-events-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-mono shadow-lg">
              <Code2 className="size-3" />
              <span>{blockType}/{slug}</span>
            </div>
            <button
              onClick={handleOpenInZed}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shadow-lg transition-colors"
              title={`Open in Zed: ${filePath}`}
            >
              <ExternalLink className="size-3" />
              Open in Zed
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
