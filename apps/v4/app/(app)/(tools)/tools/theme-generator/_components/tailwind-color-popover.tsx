"use client"

import { useCallback, useState } from "react"

import { colorsEqual } from "@/lib/colors"
import { Check, LayoutGrid, List, Palette } from "@/lib/icons"
import { TAILWIND_PALETTE } from "@/lib/tailwind-colors"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"

interface TailwindColorPopoverProps {
  currentColor: string
  onChange: (color: string) => void
}

export function TailwindColorPopover({
  currentColor,
  onChange,
}: TailwindColorPopoverProps) {
  const [open, setOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"list" | "palette">("palette")

  const handleColorSelect = useCallback(
    (color: string) => {
      onChange(color)
      setOpen(false)
    },
    [onChange]
  )

  const isColorSelected = useCallback(
    (color: string) => {
      try {
        return colorsEqual(currentColor, color)
      } catch {
        return false
      }
    },
    [currentColor]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-6 shrink-0 rounded-[calc(var(--radius)-5px)]"
          title="Tailwind Colors"
        >
          <Palette className="text-muted-foreground size-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto gap-0 overflow-hidden p-0"
        align="end"
        sideOffset={4}
      >
        <div className="flex items-center justify-between gap-4 border-b px-3 py-2">
          <div className="flex items-center gap-1.5">
            <Palette className="size-4" />
            <span className="text-muted-foreground text-sm font-medium">
              Tailwind v4
            </span>
          </div>

          <div className="flex gap-1">
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              className="size-7 p-0"
              onClick={() => setViewMode("list")}
            >
              <List className="size-3.5" />
            </Button>
            <Button
              variant={viewMode === "palette" ? "secondary" : "ghost"}
              size="sm"
              className="size-7 p-0"
              onClick={() => setViewMode("palette")}
            >
              <LayoutGrid className="size-3.5" />
            </Button>
          </div>
        </div>

        {viewMode === "list" ? (
          <ScrollArea className="h-80 w-72">
            <div className="p-2">
              {Object.entries(TAILWIND_PALETTE).map(([colorFamily, shades]) => (
                <div key={colorFamily} className="mb-3">
                  <div className="text-muted-foreground mb-1 px-1 text-xs font-medium capitalize">
                    {colorFamily}
                  </div>
                  <div className="space-y-0.5">
                    {Object.entries(shades).map(([shade, color]) => {
                      const isSelected = isColorSelected(color)
                      return (
                        <button
                          key={`${colorFamily}-${shade}`}
                          type="button"
                          onClick={() => handleColorSelect(color)}
                          className={cn(
                            "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                            isSelected && "bg-muted"
                          )}
                        >
                          <div
                            className="size-5 shrink-0 rounded border"
                            style={{ backgroundColor: color }}
                          />
                          <span className="flex-1 text-left">
                            {colorFamily}-{shade}
                          </span>
                          {isSelected && (
                            <Check className="size-4 opacity-70" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <ScrollArea className="h-80 w-auto">
            <div className="flex flex-col gap-0.5 p-2">
              {Object.entries(TAILWIND_PALETTE).map(([colorFamily, shades]) => (
                <div key={colorFamily} className="flex gap-0.5">
                  {Object.entries(shades).map(([shade, color]) => (
                    <button
                      key={`${colorFamily}-${shade}`}
                      type="button"
                      onClick={() => handleColorSelect(color)}
                      title={`${colorFamily}-${shade}`}
                      className={cn(
                        "size-6 shrink-0 rounded-sm border transition-all hover:z-10 hover:scale-110 hover:shadow-lg",
                        isColorSelected(color) && "ring-brand ring-2"
                      )}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </PopoverContent>
    </Popover>
  )
}
