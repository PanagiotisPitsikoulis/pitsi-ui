"use client"

import { useCallback, useState } from "react"

import { Check, ChevronDown, RotateCcw, Save, Shuffle } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface PresetItem {
  key: string
  label: string
}

interface SavedItem {
  id: string
  name: string
}

interface PresetSelectorProps<T extends PresetItem, S extends SavedItem> {
  /**
   * Object of presets keyed by preset key
   */
  presets: Record<string, { label: string }>
  /**
   * Currently selected preset key
   */
  currentPreset: string
  /**
   * Callback when a preset is selected
   */
  onSelect: (presetKey: string) => void
  /**
   * Callback to save current state
   */
  onSave?: () => void
  /**
   * Callback to reset to defaults
   */
  onReset?: () => void
  /**
   * Optional saved items to show in dropdown
   */
  savedItems?: S[]
  /**
   * Callback when a saved item is loaded
   */
  onLoadSaved?: (item: S) => void
  /**
   * Custom render function for preset preview (e.g., color swatches)
   */
  renderPreview?: (presetKey: string) => React.ReactNode
  /**
   * Custom render function for saved item preview
   */
  renderSavedPreview?: (item: S) => React.ReactNode
  /**
   * Placeholder text for search input
   */
  searchPlaceholder?: string
  /**
   * Label for built-in presets group
   */
  presetsGroupLabel?: string
  /**
   * Label for saved items group
   */
  savedGroupLabel?: string
  className?: string
}

function PresetSelector<T extends PresetItem, S extends SavedItem>({
  presets,
  currentPreset,
  onSelect,
  onSave,
  onReset,
  savedItems = [],
  onLoadSaved,
  renderPreview,
  renderSavedPreview,
  searchPlaceholder = "Search...",
  presetsGroupLabel = "Built-in",
  savedGroupLabel = "Saved",
  className,
}: PresetSelectorProps<T, S>) {
  const [open, setOpen] = useState(false)

  const randomize = useCallback(() => {
    const presetKeys = Object.keys(presets)
    const random = Math.floor(Math.random() * presetKeys.length)
    onSelect(presetKeys[random])
  }, [presets, onSelect])

  const currentLabel = presets[currentPreset]?.label || "Custom"

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-0 flex-1 justify-between gap-2 shadow-2xs"
            size="sm"
          >
            <div className="flex min-w-0 items-center gap-2">
              {renderPreview && renderPreview(currentPreset)}
              <span className="truncate font-medium">{currentLabel}</span>
            </div>
            <ChevronDown className="size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] p-0" align="start">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {savedItems.length > 0 && onLoadSaved && (
                <CommandGroup heading={savedGroupLabel}>
                  {savedItems.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`saved-${item.name}`}
                      onSelect={() => {
                        onLoadSaved(item)
                        setOpen(false)
                      }}
                      className="flex items-center gap-2"
                    >
                      {renderSavedPreview && renderSavedPreview(item)}
                      <span className="flex-1 font-medium">{item.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              <CommandGroup heading={presetsGroupLabel}>
                {Object.entries(presets).map(([key, preset]) => (
                  <CommandItem
                    key={key}
                    value={key}
                    onSelect={() => {
                      onSelect(key)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2"
                  >
                    {renderPreview && renderPreview(key)}
                    <span className="flex-1 font-medium">{preset.label}</span>
                    {key === currentPreset && (
                      <Check className="size-4 shrink-0 opacity-70" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {onSave && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-8 shrink-0 shadow-none"
                onClick={onSave}
              >
                <Save className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-8 shrink-0 shadow-none"
              onClick={randomize}
            >
              <Shuffle className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Random</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {onReset && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-8 shrink-0 shadow-none"
                onClick={onReset}
              >
                <RotateCcw className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}

export { PresetSelector }
export type { PresetSelectorProps, PresetItem, SavedItem }
