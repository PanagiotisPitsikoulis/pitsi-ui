"use client"

import { useCallback, useMemo, useState } from "react"

import { generateFigmaShadowEffects } from "@/lib/figma-export"
import {
  ArrowRight,
  Bookmark,
  Bot,
  Check,
  ChevronDown,
  Compass,
  Download,
  Layers,
  Plus,
  RotateCcw,
  Save,
  Shuffle,
} from "@/lib/icons"
import { STORAGE_KEYS, useLocalStorage } from "@/lib/local-storage"
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/kibo-ui/deck"
import {
  AIJsonEditor,
  CodeBlock,
  PreviewNavigation,
  SavedItemsList,
  ToolLayout,
  ToolLayoutBackground,
  ToolLayoutCard,
  ToolLayoutContainer,
  ToolLayoutHeader,
  ToolLayoutPreview,
  ToolLayoutPreviewContent,
  ToolLayoutPreviewHeader,
  ToolLayoutPreviewTitle,
  ToolLayoutSidebar,
  ToolLayoutTabs,
  ToolLayoutTabsContent,
  ToolLayoutTabsList,
  ToolLayoutTabsTrigger,
} from "@/components/tools"
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
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import {
  previewComponents,
  PreviewType,
} from "./_components/preview-components"
import { ShadowLayerControl } from "./_components/shadow-layer-control"
import { shadowPresets } from "./_components/shadow-presets"
import {
  createShadowLayer,
  ShadowLayer,
  shadowsToCSS,
} from "./_components/shadow-types"

function ShadowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 111 127"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M88.6 102.088C87.75 106.988 86.26 111.098 84.15 114.398C82.17 117.498 79.63 119.888 76.54 121.588L75.47 122.128C74.89 122.418 74.29 122.678 73.67 122.908C65.58 125.938 56.27 124.418 45.74 118.328C39.68 114.828 33.99 110.228 28.69 104.508C23.38 98.7981 18.76 92.5481 14.83 85.7681C10.9 78.9881 7.78 71.8781 5.47 64.4581C3.16 57.0381 2 49.8481 2 42.8981C2 30.8081 5.36 22.0781 12.07 16.7181C13.22 15.7981 14.43 15.0181 15.69 14.3781L16.49 13.9781C19.72 12.4781 23.3 11.8281 27.22 12.0381C30.49 12.2081 33.99 12.9781 37.73 14.3281C36.43 21.7781 36.83 30.0181 38.92 39.0581C41.01 48.0881 44.62 57.0281 49.74 65.8581C54.87 74.6981 60.84 82.2881 67.66 88.6281C74.48 94.9681 81.46 99.4581 88.61 102.088H88.6Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M57.72 4.32816L37.72 14.3282C33.98 12.9782 30.48 12.2082 27.21 12.0382C23.29 11.8282 19.71 12.4782 16.48 13.9782L35.45 4.48816L36.43 3.99814C42.36 1.22814 49.46 1.33816 57.72 4.32816Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M108.6 92.0881C106.86 102.138 102.45 108.838 95.37 112.178L95.14 112.288L76.54 121.588C79.63 119.888 82.17 117.498 84.15 114.398C86.26 111.098 87.75 106.988 88.6 102.088L108.6 92.0881Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M108.6 92.0881L88.5998 102.088C81.4498 99.4581 74.4698 94.9681 67.6498 88.6281C60.8298 82.2881 54.8598 74.6981 49.7298 65.8581C44.6098 57.0281 40.9998 48.0881 38.9098 39.0581C36.8198 30.0181 36.4198 21.7781 37.7198 14.3281L57.7198 4.32812C56.4198 11.7781 56.8198 20.0181 58.9098 29.0581C60.9998 38.0881 64.6098 47.0281 69.7298 55.8581C74.8598 64.6981 80.8298 72.2881 87.6498 78.6281C94.4698 84.9681 101.45 89.4581 108.6 92.0881Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M95.9501 111.888L95.3701 112.178"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M15.6802 14.3781L16.4802 13.9781"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface SavedShadow {
  id: string
  name: string
  layers: ShadowLayer[]
  createdAt: number
}

function PresetSelector({
  presets,
  currentPreset,
  onSelect,
  onSave,
  savedShadows,
  onLoadSavedShadow,
}: {
  presets: Record<string, ShadowPreset>
  currentPreset: string
  onSelect: (preset: string) => void
  onSave: () => void
  savedShadows: SavedShadow[]
  onLoadSavedShadow: (shadow: SavedShadow) => void
}) {
  const [open, setOpen] = useState(false)

  const randomize = useCallback(() => {
    const presetNames = Object.keys(presets)
    const random = Math.floor(Math.random() * presetNames.length)
    onSelect(presetNames[random])
  }, [onSelect])

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-0 flex-1 justify-between gap-2 shadow-2xs"
            size="sm"
          >
            <span className="truncate font-medium">
              {presets[currentPreset]?.label || "Custom"}
            </span>
            <ChevronDown className="size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[220px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search shadows..." />
            <CommandList>
              <CommandEmpty>No shadow found.</CommandEmpty>
              {savedShadows.length > 0 && (
                <CommandGroup heading="Saved Shadows">
                  {savedShadows.map((shadow) => (
                    <CommandItem
                      key={shadow.id}
                      value={`saved-${shadow.name}`}
                      onSelect={() => {
                        onLoadSavedShadow(shadow)
                        setOpen(false)
                      }}
                    >
                      <span className="flex-1 font-medium">{shadow.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              <CommandGroup heading="Built-in Shadows">
                {Object.entries(presets).map(([key, preset]) => (
                  <CommandItem
                    key={key}
                    value={key}
                    onSelect={() => {
                      onSelect(key)
                      setOpen(false)
                    }}
                  >
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
          <TooltipContent>Save shadow</TooltipContent>
        </Tooltip>
      </TooltipProvider>

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
          <TooltipContent>Random shadow</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

interface ShadowComposerPageClientProps {
  hasBackgroundDecoration?: boolean
}

export default function ShadowComposerPageClient({
  hasBackgroundDecoration = true,
}: ShadowComposerPageClientProps = {}) {
  const presets = shadowPresets
  const [layers, setLayers] = useState<ShadowLayer[]>([createShadowLayer()])
  const [currentPreset, setCurrentPreset] = useState("sm")
  const [sidebarTab, setSidebarTab] = useState<
    "explore" | "shadows" | "saved" | "export"
  >("shadows")
  const [savedShadows, setSavedShadows, isHydrated] = useLocalStorage<
    SavedShadow[]
  >(STORAGE_KEYS.SHADOW_COMPOSER, [])
  const [selectedPreview, setSelectedPreview] = useState<PreviewType>("navbar")

  const presetKeys = useMemo(() => Object.keys(presets), [presets])
  const deckIndex = useMemo(() => {
    const index = presetKeys.indexOf(currentPreset)
    return index >= 0 ? index : 0
  }, [presetKeys, currentPreset])

  const shadowCSS = useMemo(() => shadowsToCSS(layers), [layers])

  const updateLayer = useCallback((index: number, layer: ShadowLayer) => {
    setLayers((prev) => {
      const newLayers = [...prev]
      newLayers[index] = layer
      return newLayers
    })
    setCurrentPreset("custom")
  }, [])

  const deleteLayer = useCallback((index: number) => {
    setLayers((prev) => prev.filter((_, i) => i !== index))
    setCurrentPreset("custom")
  }, [])

  const addLayer = useCallback(() => {
    setLayers((prev) => [...prev, createShadowLayer()])
    setCurrentPreset("custom")
  }, [])

  const applyPreset = useCallback((presetKey: string) => {
    const preset = presets[presetKey]
    if (preset) {
      setLayers(preset.layers.map((l) => ({ ...l, id: crypto.randomUUID() })))
      setCurrentPreset(presetKey)
    }
  }, [])

  const resetShadow = useCallback(() => {
    setLayers([createShadowLayer()])
    setCurrentPreset("sm")
  }, [])

  const saveShadow = useCallback(() => {
    const newShadow: SavedShadow = {
      id: crypto.randomUUID(),
      name: `Shadow ${savedShadows.length + 1}`,
      layers: layers,
      createdAt: Date.now(),
    }
    setSavedShadows((prev) => [...prev, newShadow])
    setSidebarTab("saved")
  }, [savedShadows.length, layers])

  const deleteSavedShadow = useCallback((id: string) => {
    setSavedShadows((prev) => prev.filter((s) => s.id !== id))
  }, [])

  const renameSavedShadow = useCallback((id: string, name: string) => {
    setSavedShadows((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name } : s))
    )
  }, [])

  const loadShadow = useCallback((shadow: SavedShadow) => {
    setLayers(shadow.layers.map((l) => ({ ...l, id: crypto.randomUUID() })))
    setCurrentPreset("custom")
  }, [])

  const generatedCSS = useMemo(() => {
    return `/* Box Shadow */
.shadow-custom {
  box-shadow: ${shadowCSS};
}

/* As CSS Variable */
:root {
  --shadow-custom: ${shadowCSS};
}

.element {
  box-shadow: var(--shadow-custom);
}`
  }, [shadowCSS])

  const generatedTailwindCSS = useMemo(() => {
    return `/* Tailwind CSS v4 */
@theme {
  --shadow-custom: ${shadowCSS};
}

/* Usage: shadow-custom */`
  }, [shadowCSS])

  const PreviewComponent = previewComponents[selectedPreview].component

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        {/* Controls - First 2 columns */}
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Shadow Composer"
            description="Design beautiful box shadows"
          />

          {/* Sidebar Tabs */}
          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) =>
                setSidebarTab(v as "explore" | "shadows" | "saved" | "export")
              }
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="shadows" icon={Layers}>
                  Shadows
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="saved" icon={Bookmark}>
                  Saved
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="export" icon={Download}>
                  Export
                </ToolLayoutTabsTrigger>
              </ToolLayoutTabsList>

              <ToolLayoutTabsContent value="explore" scrollable={false}>
                <div className="flex h-full flex-col items-center justify-center">
                  <Deck className="h-80 w-full max-w-xs">
                    <DeckCards
                      currentIndex={deckIndex}
                      onCurrentIndexChange={(index) => {
                        if (presetKeys[index]) {
                          applyPreset(presetKeys[index])
                        }
                      }}
                    >
                      {Object.entries(presets).map(([key, preset]) => {
                        const previewLayers = preset.layers.map((l, i) => ({
                          ...l,
                          id: `preview-${i}`,
                        }))
                        const previewCSS = shadowsToCSS(previewLayers)
                        return (
                          <DeckItem
                            key={key}
                            className="overflow-hidden rounded-3xl p-0 shadow-xs"
                            style={
                              {
                                "--background": "oklch(1 0 0)",
                                "--foreground": "oklch(0.145 0 0)",
                                "--card": "oklch(1 0 0)",
                                "--card-foreground": "oklch(0.145 0 0)",
                                "--muted": "oklch(0.965 0 0)",
                                "--muted-foreground": "oklch(0.45 0 0)",
                                "--border": "oklch(0.922 0 0)",
                              } as React.CSSProperties
                            }
                          >
                            <div className="flex size-full flex-col bg-[oklch(1_0_0)] text-[oklch(0.145_0_0)]">
                              <div className="relative flex flex-1 items-center justify-center p-6">
                                <div className="absolute size-48 rounded-full bg-[oklch(0.965_0_0)] blur-3xl" />
                                <div
                                  className="relative size-16 rounded-xl bg-[oklch(1_0_0)]"
                                  style={{ boxShadow: previewCSS }}
                                />
                              </div>
                              <div className="border-t bg-[oklch(1_0_0)] p-4 text-center">
                                <h3 className="text-lg font-semibold">
                                  {preset.label}
                                </h3>
                                <p className="text-sm text-[oklch(0.45_0_0)]">
                                  Swipe to navigate
                                </p>
                              </div>
                            </div>
                          </DeckItem>
                        )
                      })}
                    </DeckCards>
                    <DeckEmpty>
                      <div className="text-center">
                        <p className="text-sm font-medium">
                          All shadows explored!
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            if (presetKeys[0]) {
                              applyPreset(presetKeys[0])
                            }
                          }}
                        >
                          <RotateCcw className="mr-1.5 size-3.5" />
                          Start over
                        </Button>
                      </div>
                    </DeckEmpty>
                  </Deck>
                  {/* Navigation buttons */}
                  {deckIndex < presetKeys.length && (
                    <div className="mt-6 flex items-center gap-3">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-12 rounded-full shadow-none"
                              disabled={deckIndex === 0}
                              onClick={() => {
                                const prevIndex = deckIndex - 1
                                if (presetKeys[prevIndex]) {
                                  applyPreset(presetKeys[prevIndex])
                                }
                              }}
                            >
                              <RotateCcw className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Back</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-12 rounded-full shadow-none"
                              disabled={deckIndex >= presetKeys.length - 1}
                              onClick={() => {
                                if (presetKeys[deckIndex + 1]) {
                                  applyPreset(presetKeys[deckIndex + 1])
                                }
                              }}
                            >
                              <ArrowRight className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Next</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="shadows">
                {/* Preset selector & controls */}
                <div className="no-scrollbar -mx-4 flex items-center gap-1 overflow-x-auto px-4">
                  <PresetSelector
                    presets={presets}
                    currentPreset={currentPreset}
                    onSelect={applyPreset}
                    onSave={saveShadow}
                    savedShadows={savedShadows}
                    onLoadSavedShadow={loadShadow}
                  />

                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={resetShadow}
                          className="size-8 shrink-0 shadow-none"
                        >
                          <RotateCcw className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Reset to defaults</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <AIJsonEditor
                    value={layers}
                    onChange={setLayers}
                    title="Edit Shadow JSON"
                    description="Edit the shadow layers directly or use ChatGPT to modify"
                    tooltip="Edit with AI"
                    hints={[
                      "Add more shadow layers for depth",
                      "Adjust blur and spread values",
                      "Create inner shadows (inset: true)",
                      "Make shadows more subtle or dramatic",
                    ]}
                    trigger={
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8 shrink-0 shadow-none"
                      >
                        <Bot className="size-4" />
                      </Button>
                    }
                  />
                </div>

                {/* Shadow Layers */}
                <div className="space-y-4">
                  {layers.map((layer, index) => (
                    <div
                      key={layer.id}
                      className="bg-background overflow-hidden rounded-lg border p-4 shadow-xs"
                    >
                      <ShadowLayerControl
                        layer={layer}
                        index={index}
                        onChange={(updated) => updateLayer(index, updated)}
                        onDelete={() => deleteLayer(index)}
                        canDelete={layers.length > 1}
                      />
                    </div>
                  ))}

                  {/* Add Layer Button */}
                  <Button
                    variant="outline"
                    className="w-full shadow-2xs"
                    onClick={addLayer}
                  >
                    <Plus className="mr-2 size-4" />
                    Add Shadow Layer
                  </Button>
                </div>
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="saved" scrollable={false}>
                {!isHydrated ? (
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-12 w-full rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <SavedItemsList
                    items={savedShadows}
                    onLoad={loadShadow}
                    onRename={renameSavedShadow}
                    onDelete={deleteSavedShadow}
                    emptyIcon={<ShadowIcon className="text-brand size-40" />}
                    emptyText="No saved shadows yet"
                    emptySubtext="Click the save button to save your current shadow"
                    renderPreview={(shadow) => (
                      <div
                        className="bg-card size-8 rounded border"
                        style={{ boxShadow: shadowsToCSS(shadow.layers) }}
                      />
                    )}
                    className="h-full"
                  />
                )}
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="export">
                <div className="space-y-2">
                  <CodeBlock
                    code={generatedCSS}
                    language="css"
                    filename="styles.css"
                  />
                  <CodeBlock
                    code={generatedTailwindCSS}
                    language="css"
                    filename="tailwind v4"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      Figma export
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs shadow-2xs"
                      onClick={() => {
                        const json = generateFigmaShadowEffects(layers)
                        const blob = new Blob([json], {
                          type: "application/json",
                        })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement("a")
                        a.href = url
                        a.download = "figma-effects.json"
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                        URL.revokeObjectURL(url)
                      }}
                    >
                      <Download className="mr-1.5 size-3" />
                      Download JSON
                    </Button>
                  </div>
                  <CodeBlock
                    code={generateFigmaShadowEffects(layers)}
                    language="json"
                    filename="figma-effects.json"
                  />
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        {/* Preview - Remaining 4 columns */}
        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
            <PreviewNavigation
              items={(Object.keys(previewComponents) as PreviewType[]).map(
                (key) => ({ key, label: previewComponents[key].label })
              )}
              value={selectedPreview}
              onValueChange={(value) =>
                setSelectedPreview(value as PreviewType)
              }
            />
          </ToolLayoutPreviewHeader>

          {/* Preview - always light mode */}
          <ToolLayoutPreviewContent forceLightMode>
            <PreviewComponent shadowStyle={shadowCSS} className="h-full" />
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
