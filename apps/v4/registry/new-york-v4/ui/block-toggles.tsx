"use client"

import * as React from "react"

import { COMPUTED_TEMPLATES } from "@/registry/__blocks-metadata__"
import { useBlockSelection } from "@/registry/new-york-v4/lib/block-selection-context"
import { cn } from "@/registry/new-york-v4/lib/utils"

interface BlockToggleProps {
  blockType: string
  className?: string
}

/**
 * Toggle button group for switching between alternative blocks of the same type
 */
export function BlockToggle({ blockType, className }: BlockToggleProps) {
  const { state, selectBlock, getSelectedBlockForType } = useBlockSelection()

  if (!state) return null

  const template = COMPUTED_TEMPLATES[state.templateSlug]
  if (!template) return null

  const blocks = template.blockGroups[blockType]
  if (!blocks || blocks.length <= 1) return null

  const selectedBlock = getSelectedBlockForType(blockType)

  return (
    <div
      className={cn(
        "bg-muted/50 inline-flex items-center gap-1 rounded-full p-1 backdrop-blur-sm",
        className
      )}
    >
      {blocks.map((blockName, index) => (
        <button
          key={blockName}
          onClick={() => selectBlock(blockType, blockName)}
          className={cn(
            "flex size-7 items-center justify-center rounded-full text-xs font-medium transition-all",
            selectedBlock === blockName
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label={`Select ${blockName}`}
          aria-pressed={selectedBlock === blockName}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

interface BlockTogglesToolbarProps {
  className?: string
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

/**
 * Floating toolbar with all block toggles for the current template
 */
export function BlockTogglesToolbar({
  className,
  position = "top-right",
}: BlockTogglesToolbarProps) {
  const { state } = useBlockSelection()

  if (!state || state.blockTypesWithAlternatives.length === 0) return null

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  }

  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2",
        positionClasses[position],
        className
      )}
    >
      {state.blockTypesWithAlternatives.map((blockType) => (
        <div key={blockType} className="flex items-center gap-2">
          <span className="bg-background/80 text-muted-foreground rounded px-2 py-0.5 text-xs font-medium capitalize backdrop-blur-sm">
            {blockType}
          </span>
          <BlockToggle blockType={blockType} />
        </div>
      ))}
    </div>
  )
}

interface InlineBlockTogglesProps {
  className?: string
}

/**
 * Inline version of block toggles for embedding in block viewer UI
 */
export function InlineBlockToggles({ className }: InlineBlockTogglesProps) {
  const { state } = useBlockSelection()

  if (!state || state.blockTypesWithAlternatives.length === 0) return null

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {state.blockTypesWithAlternatives.map((blockType) => (
        <div key={blockType} className="flex items-center gap-1.5">
          <span className="text-muted-foreground text-xs font-medium capitalize">
            {blockType}:
          </span>
          <BlockToggle blockType={blockType} />
        </div>
      ))}
    </div>
  )
}
