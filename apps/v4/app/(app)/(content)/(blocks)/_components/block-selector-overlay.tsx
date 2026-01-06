"use client"

import { useCallback, useEffect, useState } from "react"

import { Check } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"

import { BLOCK_TYPES, type BlockType } from "../blocks"

interface BlockSelectorOverlayProps {
  open: boolean
  onClose: () => void
  blockGroups: Record<string, string[]>
  selectedBlocks: Record<string, string>
  onBlockSelect: (blockType: string, blockName: string) => void
}

// Block type display names
const blockTypeLabels: Record<string, string> = {
  header: "Header",
  hero: "Hero",
  logos: "Logos",
  features: "Features",
  showcase: "Showcase",
  bento: "Bento",
  products: "Products",
  pricing: "Pricing",
  testimonials: "Testimonials",
  gallery: "Gallery",
  team: "Team",
  stats: "Stats",
  faq: "FAQ",
  blog: "Blog",
  contact: "Contact",
  newsletter: "Newsletter",
  cta: "CTA",
  footer: "Footer",
}

export function BlockSelectorOverlay({
  open,
  onClose,
  blockGroups,
  selectedBlocks,
  onBlockSelect,
}: BlockSelectorOverlayProps) {
  // Get ordered block types that have variants
  const blockTypesWithVariants = BLOCK_TYPES.filter(
    (type) => blockGroups[type]?.length > 1
  )

  const [activeType, setActiveType] = useState<BlockType | null>(
    blockTypesWithVariants[0] || null
  )

  // Reset active type when blockGroups change
  useEffect(() => {
    if (
      blockTypesWithVariants.length > 0 &&
      !blockTypesWithVariants.includes(activeType as BlockType)
    ) {
      setActiveType(blockTypesWithVariants[0])
    }
  }, [blockTypesWithVariants, activeType])

  const handleBlockClick = useCallback(
    (blockName: string) => {
      if (activeType) {
        onBlockSelect(activeType, blockName)
      }
    },
    [activeType, onBlockSelect]
  )

  const activeVariants = activeType ? blockGroups[activeType] || [] : []

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0">
        <DialogHeader className="space-y-1 border-b px-6 py-4">
          <DialogTitle>Customize Blocks</DialogTitle>
          <DialogDescription>
            Select different block variants for your template
          </DialogDescription>
        </DialogHeader>

        <div className="flex">
          {/* Left Sidebar - Block Types */}
          <div className="bg-muted/30 w-44 shrink-0 border-r">
            <ScrollArea className="h-[360px]">
              <div className="space-y-0.5 p-2">
                {blockTypesWithVariants.map((type) => {
                  const variants = blockGroups[type] || []
                  const isActive = activeType === type
                  const selectedVariant = selectedBlocks[type]
                  const isDefault = selectedVariant === variants[0]

                  return (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={cn(
                        "group flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        isActive ? "bg-background shadow-sm" : ""
                      )}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span
                          className={cn(
                            "font-medium transition-colors",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          )}
                        >
                          {blockTypeLabels[type] || type}
                        </span>
                        {!isDefault && (
                          <span className="text-brand text-[10px]">
                            customized
                          </span>
                        )}
                      </div>
                      <span
                        className={cn(
                          "text-xs tabular-nums",
                          isActive
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60"
                        )}
                      >
                        {variants.length}
                      </span>
                    </button>
                  )
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Right Side - Variant Grid */}
          <div className="bg-background flex-1">
            <ScrollArea className="h-[360px]">
              <div className="p-4">
                {activeType && activeVariants.length > 0 ? (
                  <>
                    <p className="text-muted-foreground mb-3 text-xs">
                      {blockTypeLabels[activeType]} variants
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {activeVariants.map((blockName, index) => {
                        const isSelected =
                          selectedBlocks[activeType] === blockName
                        const isDefault = index === 0

                        return (
                          <button
                            key={blockName}
                            onClick={() => handleBlockClick(blockName)}
                            className={cn(
                              "group bg-muted/50 relative flex aspect-[4/3] flex-col items-center justify-center rounded-lg border text-center transition-all",
                              isSelected
                                ? "border-brand bg-brand/5 ring-brand ring-1"
                                : "border-border hover:border-brand/50 hover:bg-muted"
                            )}
                          >
                            {/* Selected checkmark */}
                            {isSelected && (
                              <div className="bg-brand absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full">
                                <Check className="text-primary-foreground size-2.5" />
                              </div>
                            )}

                            {/* Variant number */}
                            <span
                              className={cn(
                                "text-lg font-semibold",
                                isSelected
                                  ? "text-brand"
                                  : "text-muted-foreground"
                              )}
                            >
                              {index + 1}
                            </span>

                            {/* Default label */}
                            {isDefault && (
                              <span className="text-muted-foreground text-[10px]">
                                default
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center py-20">
                    <p className="text-muted-foreground text-sm">
                      Select a block type
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
