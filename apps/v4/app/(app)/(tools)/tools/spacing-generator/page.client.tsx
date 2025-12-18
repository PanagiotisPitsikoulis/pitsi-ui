"use client"

import { useCallback, useMemo, useState } from "react"

import { STORAGE_KEYS, useLocalStorage } from "@/lib/local-storage"
import {
  ArrowRight,
  Bookmark,
  Bot,
  Compass,
  Download,
  Moon,
  RotateCcw,
  Save,
  Settings,
  Shuffle,
  Sun,
} from "lucide-react"
import {
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs"

import { cn } from "@/lib/utils"
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/kibo-ui/deck"
import {
  AIJsonEditor,
  CodeBlock,
  ConfirmDialog,
  ControlSection,
  SavedItemsList,
  SliderRow,
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
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

import {
  generateSpacingCSS,
  generateSpacingJSON,
  generateTailwindV4Spacing,
} from "./_components/generate-css"
import {
  calculateSpacingValues,
  defaultState,
  spacingPresets,
} from "./_components/spacing-presets"
import type {
  SavedSpacing,
  ScaleType,
  SpacingPreset,
  SpacingState,
} from "./_components/spacing-types"

function SpacingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 99 125"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M73.96 53.54L44.27 36.4L29.4299 27.83L22 23.55L2 12V80.14L76.23 122.99V54.85L73.96 53.54ZM24.27 84.47L9.42993 75.9V24.8L22 32.06L24.27 33.37V84.47ZM68.8 110.18L53.96 101.61V50.51L68.8 59.08V110.18Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M68.8 94.1899V110.18L53.96 101.61L66.05 95.5699L68.8 94.1899Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M68.8 59.08V94.19L66.05 95.57L53.96 101.61V50.51L68.8 59.08Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M24.2698 68.48V84.47L9.42969 75.9L21.9998 69.62L24.2698 68.48Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M24.2698 33.37V68.48L21.9998 69.62L9.42969 75.9V24.8L21.9998 32.06L24.2698 33.37Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M96.2295 44.85V112.99L76.2295 122.99V54.85L88.3196 48.8L96.2295 44.85Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M96.23 44.85L88.3201 48.8L76.23 54.85L73.96 53.54L44.27 36.4L29.4299 27.83L22 23.55L2 12L22 2L96.23 44.85Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

function ScaleVisualization({
  state,
  maxWidth = 300,
}: {
  state: SpacingState
  maxWidth?: number
}) {
  const values = calculateSpacingValues(state)
  const maxValue = Math.max(...values.map((v) => v.value))

  return (
    <div className="space-y-1.5">
      {values.slice(0, 13).map(({ name, value, cssValue }) => (
        <div key={name} className="flex items-center gap-2">
          <span className="w-6 text-right font-mono text-xs text-muted-foreground">
            {name}
          </span>
          <div
            className="h-3 rounded-sm bg-primary transition-all"
            style={{
              width: maxValue > 0 ? `${(value / maxValue) * maxWidth}px` : 0,
              minWidth: value > 0 ? 4 : 0,
            }}
          />
          <span className="font-mono text-xs text-muted-foreground">
            {cssValue}
          </span>
        </div>
      ))}
    </div>
  )
}

function SpacingPreview({ state }: { state: SpacingState }) {
  const values = calculateSpacingValues(state)
  const getSpacing = (index: number) => values[index]?.cssValue || "0"

  return (
    <div className="space-y-8 p-6">
      {/* Scale Visualization */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Spacing Scale</h3>
        <ScaleVisualization state={state} maxWidth={400} />
      </div>

      {/* Card Example */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Card with Padding</h3>
        <div className="inline-block rounded-lg border bg-card">
          <div
            className="rounded-lg bg-primary/10"
            style={{ padding: getSpacing(4) }}
          >
            <div className="rounded bg-card p-4">
              <p className="text-sm font-medium">Card Content</p>
              <p className="text-xs text-muted-foreground">
                Using spacing-4 ({getSpacing(4)}) padding
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stack Example */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Vertical Stack (gap)</h3>
        <div
          className="flex flex-col"
          style={{ gap: getSpacing(3) }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border bg-card px-4 py-2"
            >
              <p className="text-sm">Item {i}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Gap: spacing-3 ({getSpacing(3)})
        </p>
      </div>

      {/* Grid Example */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Grid Layout</h3>
        <div
          className="grid grid-cols-3"
          style={{ gap: getSpacing(4) }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border bg-card"
            >
              <span className="text-xs text-muted-foreground">{i}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Gap: spacing-4 ({getSpacing(4)})
        </p>
      </div>

      {/* Form Example */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Form Layout</h3>
        <div
          className="flex max-w-xs flex-col"
          style={{ gap: getSpacing(4) }}
        >
          <div style={{ marginBottom: getSpacing(1) }}>
            <label className="mb-1.5 block text-sm font-medium">Label</label>
            <div className="h-9 rounded-md border bg-background" />
          </div>
          <div style={{ marginBottom: getSpacing(1) }}>
            <label className="mb-1.5 block text-sm font-medium">Label</label>
            <div className="h-9 rounded-md border bg-background" />
          </div>
          <div className="h-9 rounded-md bg-primary" />
        </div>
      </div>
    </div>
  )
}

interface SpacingGeneratorClientProps {
  hasBackgroundDecoration?: boolean
}

const scaleTypes = ["linear", "geometric", "fibonacci", "custom"] as const
const unitTypes = ["px", "rem"] as const
const tabTypes = ["explore", "settings", "saved", "export"] as const

export default function SpacingGeneratorClient({
  hasBackgroundDecoration = true,
}: SpacingGeneratorClientProps = {}) {
  const presets = spacingPresets
  const initialState = defaultState
  // URL state with nuqs
  const [baseSize, setBaseSize] = useQueryState(
    "base",
    parseAsFloat.withDefault(initialState.baseSize)
  )
  const [scale, setScale] = useQueryState(
    "scale",
    parseAsStringLiteral(scaleTypes).withDefault(initialState.scale)
  )
  const [multiplier, setMultiplier] = useQueryState(
    "mult",
    parseAsFloat.withDefault(initialState.multiplier)
  )
  const [unit, setUnit] = useQueryState(
    "unit",
    parseAsStringLiteral(unitTypes).withDefault(initialState.unit)
  )
  const [steps, setSteps] = useQueryState(
    "steps",
    parseAsInteger.withDefault(initialState.steps)
  )
  const [prefix, setPrefix] = useQueryState(
    "prefix",
    parseAsString.withDefault(initialState.prefix)
  )
  const [currentPreset, setCurrentPreset] = useQueryState(
    "preset",
    parseAsString.withDefault("tailwind")
  )
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(tabTypes).withDefault("settings")
  )
  const [isDark, setIsDark] = useState(false)

  const darkModeStyles = isDark
    ? ({
        "--background": "oklch(0.145 0 0)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.145 0 0)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.269 0 0)",
        "--muted-foreground": "oklch(0.708 0 0)",
        "--border": "oklch(1 0 0 / 10%)",
      } as React.CSSProperties)
    : {}
  const [savedItems, setSavedItems, isHydrated] = useLocalStorage<SavedSpacing[]>(STORAGE_KEYS.SPACING_GENERATOR, [])

  // Derived state object for calculations
  const state: SpacingState = useMemo(
    () => ({
      baseSize,
      scale,
      multiplier,
      unit,
      steps,
      customValues: [],
      prefix,
    }),
    [baseSize, scale, multiplier, unit, steps, prefix]
  )

  const presetKeys = useMemo(() => Object.keys(presets), [presets])
  const [deckIndex, setDeckIndex] = useState(
    Math.max(0, presetKeys.indexOf(currentPreset))
  )

  const updateState = useCallback(
    <K extends keyof SpacingState>(key: K, value: SpacingState[K]) => {
      switch (key) {
        case "baseSize":
          setBaseSize(value as number)
          break
        case "scale":
          setScale(value as ScaleType)
          break
        case "multiplier":
          setMultiplier(value as number)
          break
        case "unit":
          setUnit(value as "px" | "rem")
          break
        case "steps":
          setSteps(value as number)
          break
        case "prefix":
          setPrefix(value as string)
          break
      }
      setCurrentPreset("custom")
    },
    [setBaseSize, setScale, setMultiplier, setUnit, setSteps, setPrefix, setCurrentPreset]
  )

  const applyPreset = useCallback(
    (presetKey: string) => {
      const preset = presets[presetKey]
      if (preset) {
        const s = preset.state
        setBaseSize(s.baseSize)
        setScale(s.scale)
        setMultiplier(s.multiplier)
        setUnit(s.unit)
        setSteps(s.steps)
        setPrefix(s.prefix)
        setCurrentPreset(presetKey)
        const index = presetKeys.indexOf(presetKey)
        if (index >= 0) {
          setDeckIndex(index)
        }
      }
    },
    [presets, presetKeys, setBaseSize, setScale, setMultiplier, setUnit, setSteps, setPrefix, setCurrentPreset]
  )

  const randomize = useCallback(() => {
    const keys = Object.keys(presets)
    const random = keys[Math.floor(Math.random() * keys.length)]
    applyPreset(random)
  }, [presets, applyPreset])

  const resetState = useCallback(() => {
    setBaseSize(initialState.baseSize)
    setScale(initialState.scale)
    setMultiplier(initialState.multiplier)
    setUnit(initialState.unit)
    setSteps(initialState.steps)
    setPrefix(initialState.prefix)
    setCurrentPreset("tailwind")
    setDeckIndex(0)
  }, [initialState, setBaseSize, setScale, setMultiplier, setUnit, setSteps, setPrefix, setCurrentPreset])

  const saveItem = useCallback(() => {
    const newItem: SavedSpacing = {
      id: crypto.randomUUID(),
      name: `Spacing ${savedItems.length + 1}`,
      state,
      createdAt: Date.now(),
    }
    setSavedItems((prev) => [...prev, newItem])
    setSidebarTab("saved")
  }, [savedItems.length, state])

  const deleteItem = useCallback((id: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const renameItem = useCallback((id: string, name: string) => {
    setSavedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name } : item))
    )
  }, [])

  const loadItem = useCallback(
    (item: SavedSpacing) => {
      const s = item.state
      setBaseSize(s.baseSize)
      setScale(s.scale)
      setMultiplier(s.multiplier)
      setUnit(s.unit)
      setSteps(s.steps)
      setPrefix(s.prefix)
      setCurrentPreset("custom")
    },
    [setBaseSize, setScale, setMultiplier, setUnit, setSteps, setPrefix, setCurrentPreset]
  )

  const generatedCSS = useMemo(() => generateSpacingCSS(state), [state])
  const generatedTailwind = useMemo(
    () => generateTailwindV4Spacing(state),
    [state]
  )
  const generatedJSON = useMemo(() => generateSpacingJSON(state), [state])

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Spacing Generator"
            description="Create consistent spacing scales"
          />

          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) =>
                setSidebarTab(v as "explore" | "settings" | "saved" | "export")
              }
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="settings" icon={Settings}>
                  Settings
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
                  <Deck className="h-72 w-full max-w-xs">
                    <DeckCards
                      currentIndex={deckIndex}
                      onCurrentIndexChange={(index) => {
                        setDeckIndex(index)
                        if (presetKeys[index]) {
                          applyPreset(presetKeys[index])
                        }
                      }}
                    >
                      {Object.entries(presets).map(([key, preset]) => (
                        <DeckItem
                          key={key}
                          className="overflow-hidden p-0 shadow-sm"
                        >
                          <div className="flex size-full flex-col bg-background p-4">
                            <div className="mb-4 flex-1">
                              <ScaleVisualization
                                state={preset.state}
                                maxWidth={200}
                              />
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold">
                                {preset.label}
                              </h3>
                              <p className="text-[10px] text-muted-foreground">
                                {preset.description}
                              </p>
                            </div>
                          </div>
                        </DeckItem>
                      ))}
                    </DeckCards>
                    <DeckEmpty>
                      <div className="text-center">
                        <p className="text-sm font-medium">All presets explored!</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            setDeckIndex(0)
                            applyPreset(presetKeys[0])
                          }}
                        >
                          <RotateCcw className="mr-1.5 size-3.5" />
                          Start over
                        </Button>
                      </div>
                    </DeckEmpty>
                  </Deck>

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
                                setDeckIndex(prevIndex)
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
                                const newIndex = deckIndex + 1
                                setDeckIndex(newIndex)
                                if (presetKeys[newIndex]) {
                                  applyPreset(presetKeys[newIndex])
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

              <ToolLayoutTabsContent value="settings">
                <div className="flex items-center gap-1 pb-2">
                  <Select value={currentPreset} onValueChange={applyPreset}>
                    <SelectTrigger className="h-8 flex-1 text-xs shadow-2xs">
                      <SelectValue placeholder="Select preset" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(presets).map(([key, preset]) => (
                        <SelectItem key={key} value={key} className="text-xs">
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-8 shrink-0 shadow-2xs"
                          onClick={saveItem}
                        >
                          <Save className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Save</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-8 shrink-0 shadow-2xs"
                          onClick={randomize}
                        >
                          <Shuffle className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Random</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-8 shrink-0 shadow-2xs"
                          onClick={resetState}
                        >
                          <RotateCcw className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Reset</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <AIJsonEditor
                    value={state}
                    onChange={(newState) => {
                      updateState("baseSize", newState.baseSize)
                      updateState("scale", newState.scale)
                      updateState("multiplier", newState.multiplier)
                      updateState("unit", newState.unit)
                      updateState("steps", newState.steps)
                      updateState("prefix", newState.prefix)
                    }}
                    title="Edit Spacing JSON"
                    description="Edit the spacing values directly or use ChatGPT to modify"
                    tooltip="Edit with AI"
                    hints={[
                      "Change the scale ratio (e.g., golden ratio 1.618)",
                      "Adjust base size for different use cases",
                      "Add more steps for finer control",
                      "Change prefix for naming convention",
                    ]}
                    trigger={
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8 shrink-0 shadow-2xs"
                      >
                        <Bot className="size-4" />
                      </Button>
                    }
                  />
                </div>

                <ControlSection title="Base Settings" defaultExpanded>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Scale Type</Label>
                      <Select
                        value={state.scale}
                        onValueChange={(v) =>
                          updateState("scale", v as ScaleType)
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="linear" className="text-xs">
                            Linear
                          </SelectItem>
                          <SelectItem value="geometric" className="text-xs">
                            Geometric
                          </SelectItem>
                          <SelectItem value="fibonacci" className="text-xs">
                            Fibonacci
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <SliderRow
                      label="Base Size"
                      value={state.baseSize}
                      onChange={(v) => updateState("baseSize", v)}
                      min={state.unit === "rem" ? 0.125 : 1}
                      max={state.unit === "rem" ? 1 : 16}
                      step={state.unit === "rem" ? 0.125 : 1}
                      unit={state.unit}
                    />

                    {state.scale === "geometric" && (
                      <SliderRow
                        label="Multiplier"
                        value={state.multiplier}
                        onChange={(v) => updateState("multiplier", v)}
                        min={1.25}
                        max={3}
                        step={0.05}
                        unit="x"
                      />
                    )}

                    <SliderRow
                      label="Steps"
                      value={state.steps}
                      onChange={(v) => updateState("steps", v)}
                      min={6}
                      max={16}
                      step={1}
                    />
                  </div>
                </ControlSection>

                <ControlSection title="Output">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Unit</Label>
                      <Select
                        value={state.unit}
                        onValueChange={(v) =>
                          updateState("unit", v as "px" | "rem")
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="px" className="text-xs">
                            Pixels (px)
                          </SelectItem>
                          <SelectItem value="rem" className="text-xs">
                            REM
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs">Variable Prefix</Label>
                      <Input
                        value={state.prefix}
                        onChange={(e) => updateState("prefix", e.target.value)}
                        className="h-8 text-xs"
                        placeholder="spacing"
                      />
                    </div>
                  </div>
                </ControlSection>
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
                    items={savedItems}
                    onLoad={loadItem}
                    onRename={renameItem}
                    onDelete={deleteItem}
                    emptyIcon={<SpacingIcon className="size-40 text-brand" />}
                    emptyText="No saved scales yet"
                    emptySubtext="Click the save button to save your current scale"
                    renderPreview={(item) => (
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-4 rounded-sm bg-primary"
                            style={{ width: 4 * i }}
                          />
                        ))}
                      </div>
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
                    filename="spacing.css"
                    height={120}
                  />
                  <CodeBlock
                    code={generatedTailwind}
                    language="css"
                    filename="tailwind v4"
                    height={120}
                  />
                </div>

                <div className="space-y-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-xs"
                    onClick={() => {
                      const blob = new Blob([generatedJSON], {
                        type: "application/json",
                      })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement("a")
                      a.href = url
                      a.download = "spacing.json"
                      document.body.appendChild(a)
                      a.click()
                      document.body.removeChild(a)
                      URL.revokeObjectURL(url)
                    }}
                  >
                    <Download className="size-3" />
                    Download JSON
                  </Button>
                  <CodeBlock
                    code={generatedJSON}
                    language="json"
                    filename="spacing.json"
                    height={120}
                  />
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-8 shadow-2xs"
                    onClick={() => setIsDark(!isDark)}
                  >
                    {isDark ? (
                      <Moon className="size-4" />
                    ) : (
                      <Sun className="size-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isDark ? "Switch to light" : "Switch to dark"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ToolLayoutPreviewHeader>

          <ToolLayoutPreviewContent className={cn(isDark && "dark")}>
            <div
              className={cn(
                "h-full overflow-auto bg-background text-foreground",
                isDark && "dark"
              )}
              style={darkModeStyles}
            >
              <SpacingPreview state={state} />
            </div>
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
