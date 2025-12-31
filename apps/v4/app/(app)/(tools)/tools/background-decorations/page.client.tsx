"use client"

import { useCallback, useMemo, useState } from "react"

import {
  Bookmark,
  Compass,
  Download,
  Grid3X3,
  Layers,
  Moon,
  Redo2,
  RotateCcw,
  Settings2,
  Shuffle,
  Sparkles,
  Sun,
} from "@/lib/icons"
import { parseAsStringLiteral, useQueryState } from "nuqs"

import { STORAGE_KEYS, useLocalStorage } from "@/lib/local-storage"
import { cn } from "@/lib/utils"
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/kibo-ui/deck"
import {
  CodeBlock,
  ControlSection,
  PresetSelector,
  SavedItemsList,
  ToolLayout,
  ToolLayoutBackground,
  ToolLayoutContainer,
  ToolLayoutSidebar,
  ToolLayoutHeader,
  ToolLayoutCard,
  ToolLayoutTabs,
  ToolLayoutTabsList,
  ToolLayoutTabsTrigger,
  ToolLayoutTabsContent,
  ToolLayoutPreview,
  ToolLayoutPreviewHeader,
  ToolLayoutPreviewTitle,
  ToolLayoutPreviewContent,
  SliderRow,
  ColorPickerRow,
} from "@/components/tools"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import { decorationPresets, presetConfigs } from "./_components/decoration-presets"
import { generateCSSCode, generateTailwindCode } from "./_components/generate-code"
import {
  defaultDecorationState,
  type DecorationPreset,
  type DecorationState,
  type DecorationType,
} from "./_components/decoration-types"

// Icon from tools page
function BackgroundDecorationsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 93 100"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M69.02 77.07C68.31 80.87 67.26 84.13 65.85 86.85C64.02 90.36 61.6 92.98 58.58 94.7C55.31 96.57 51.65 97.35 47.6 97.05C43.55 96.75 39.39 95.36 35.11 92.89C32.9 91.61 30.68 90.04 28.43 88.17C26.19 86.3 23.9 84.16 21.56 81.73C22.16 75.07 23.65 69.26 26.02 64.31C26.78 62.71 27.64 61.19 28.59 59.77C29.29 58.73 30.02 57.73 30.79 56.79C32.81 54.3 35.08 52.17 37.61 50.4C39.45 49.11 41.42 48.01 43.53 47.1C42.29 47.1 41.09 47.17 39.91 47.3C35.5 47.73 31.48 48.94 27.84 50.94C26.66 51.57 25.52 52.3 24.42 53.1C19.04 57.05 15.27 62.94 13.13 70.76C12.87 70.38 12.62 69.98 12.38 69.58L11.63 68.28C8.49 62.86 6.09 57.45 4.46 52.05C2.82 46.65 2 41.54 2 36.7C2 31.48 2.9 27.01 4.71 23.3C6.51 19.58 9.02 16.81 12.23 14.98L13.67 14.26C16.9 12.8 20.64 12.35 24.91 12.9C27.51 13.22 30.31 13.93 33.3 15C41.93 18.1 54.04 24.92 69.62 35.45C70.83 54.49 70.62 68.36 69.02 77.07Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M89.02 67.07C87.41 75.77 83.94 81.65 78.58 84.7L76.87 85.56L76.82 85.58L58.58 94.7C61.6 92.98 64.02 90.36 65.85 86.85C67.26 84.13 68.31 80.87 69.02 77.07C70.62 68.36 70.83 54.49 69.62 35.45L89.62 25.45C90.83 44.49 90.62 58.36 89.02 67.07Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M76.87 85.56L78.58 84.7C78.02 85.02 77.45 85.31 76.87 85.56Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M89.62 25.45L69.62 35.45C54.04 24.92 41.93 18.1 33.3 15C30.31 13.93 27.51 13.22 24.91 12.9C20.64 12.35 16.9 12.8 13.67 14.26L32.23 4.98005C37.65 1.89005 44.67 1.90001 53.3 5.00001C61.93 8.1 74.04 14.92 89.62 25.45Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M43.53 47.1C41.42 48.01 39.45 49.11 37.61 50.4C35.08 52.17 32.81 54.3 30.79 56.79C30.02 57.73 29.29 58.73 28.59 59.77C27.64 61.19 26.78 62.71 26.02 64.31L13.13 70.76C15.27 62.94 19.04 57.05 24.42 53.1C25.52 52.3 26.66 51.57 27.84 50.94C31.48 48.94 35.5 47.73 39.91 47.3C41.09 47.17 42.29 47.11 43.53 47.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface SavedDecoration {
  id: string
  name: string
  state: DecorationState
  createdAt: number
}

interface BackgroundDecorationsPageClientProps {
  hasBackgroundDecoration?: boolean
}

const sidebarTabs = ["explore", "configure", "saved", "export"] as const
const codeFormats = ["tailwind", "css"] as const

// Convert presets array to object for PresetSelector
const presetsObject = decorationPresets.reduce((acc, preset) => {
  acc[preset.id] = { label: preset.name }
  return acc
}, {} as Record<string, { label: string }>)

export default function BackgroundDecorationsPageClient({
  hasBackgroundDecoration = true,
}: BackgroundDecorationsPageClientProps = {}) {
  const presets = decorationPresets
  const defaultState = defaultDecorationState
  // URL state
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(sidebarTabs).withDefault("configure")
  )
  const [codeFormat, setCodeFormat] = useQueryState(
    "format",
    parseAsStringLiteral(codeFormats).withDefault("tailwind")
  )

  // Local state
  const [darkMode, setDarkMode] = useState(false)
  const [state, setState] = useState<DecorationState>(defaultState)
  const [currentPreset, setCurrentPreset] = useState("neon-guides")
  const [savedDecorations, setSavedDecorations, isHydrated] = useLocalStorage<SavedDecoration[]>(
    STORAGE_KEYS.BACKGROUND_DECORATIONS || "background-decorations",
    []
  )

  // Deck state for explore tab
  const presetKeys = useMemo(() => presets.map((p) => p.id), [presets])
  const [deckIndex, setDeckIndex] = useState(0)

  const handleReset = useCallback(() => {
    setState(defaultState)
    setCurrentPreset("neon-guides")
    setDeckIndex(0)
  }, [defaultState])

  const handlePresetSelect = useCallback(
    (presetId: string) => {
      const config = presetConfigs[presetId]
      if (config) {
        setState((prev) => ({
          ...prev,
          ...config,
        }))
        setCurrentPreset(presetId)
        const index = presetKeys.indexOf(presetId)
        if (index >= 0) {
          setDeckIndex(index)
        }
      }
    },
    [presetKeys]
  )

  const handleTypeChange = useCallback((type: DecorationType) => {
    setState((prev) => ({
      ...prev,
      type,
    }))
    setCurrentPreset("custom")
  }, [])

  const updateGuides = useCallback(
    <K extends keyof DecorationState["guides"]>(
      key: K,
      value: DecorationState["guides"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        guides: { ...prev.guides, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  const updateGradient = useCallback(
    <K extends keyof DecorationState["gradient"]>(
      key: K,
      value: DecorationState["gradient"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        gradient: { ...prev.gradient, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  const updateDots = useCallback(
    <K extends keyof DecorationState["dots"]>(
      key: K,
      value: DecorationState["dots"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        dots: { ...prev.dots, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  const updateGrid = useCallback(
    <K extends keyof DecorationState["grid"]>(
      key: K,
      value: DecorationState["grid"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        grid: { ...prev.grid, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  const updateNoise = useCallback(
    <K extends keyof DecorationState["noise"]>(
      key: K,
      value: DecorationState["noise"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        noise: { ...prev.noise, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  const updateGlow = useCallback(
    <K extends keyof DecorationState["glow"]>(
      key: K,
      value: DecorationState["glow"][K]
    ) => {
      setState((prev) => ({
        ...prev,
        glow: { ...prev.glow, [key]: value },
      }))
      setCurrentPreset("custom")
    },
    []
  )

  // Save/load functionality
  const saveDecoration = useCallback(() => {
    const newDecoration: SavedDecoration = {
      id: crypto.randomUUID(),
      name: `Decoration ${savedDecorations.length + 1}`,
      state,
      createdAt: Date.now(),
    }
    setSavedDecorations((prev) => [...prev, newDecoration])
    setSidebarTab("saved")
  }, [savedDecorations.length, state, setSidebarTab])

  const loadDecoration = useCallback((decoration: SavedDecoration) => {
    setState(decoration.state)
    setCurrentPreset("custom")
    setSidebarTab("configure")
  }, [setSidebarTab])

  const deleteDecoration = useCallback((id: string) => {
    setSavedDecorations((prev) => prev.filter((d) => d.id !== id))
  }, [])

  const renameDecoration = useCallback((id: string, name: string) => {
    setSavedDecorations((prev) =>
      prev.map((d) => (d.id === id ? { ...d, name } : d))
    )
  }, [])

  const randomizePreset = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * presetKeys.length)
    handlePresetSelect(presetKeys[randomIndex])
  }, [presetKeys, handlePresetSelect])

  const generatedCode = useMemo(() => {
    return codeFormat === "tailwind"
      ? generateTailwindCode(state)
      : generateCSSCode(state)
  }, [state, codeFormat])

  const previewStyle = useMemo(() => {
    switch (state.type) {
      case "gradient": {
        const { gradient } = state
        const colorStops = gradient.colors
          .map((c) => `${c.color} ${c.position}%`)
          .join(", ")
        if (gradient.type === "linear") {
          return { background: `linear-gradient(${gradient.angle}deg, ${colorStops})` }
        } else if (gradient.type === "radial") {
          return { background: `radial-gradient(circle at 50% 30%, ${colorStops})` }
        }
        return { background: `conic-gradient(from ${gradient.angle}deg, ${colorStops})` }
      }
      case "dots": {
        const { dots } = state
        const color = dots.color.includes("var")
          ? `rgba(0,0,0,${dots.opacity})`
          : dots.color.replace(")", ` / ${dots.opacity})`)
        return {
          backgroundImage: `radial-gradient(circle, ${color} ${dots.size}px, transparent ${dots.size}px)`,
          backgroundSize: `${dots.spacing}px ${dots.spacing}px`,
          ...(dots.fade === "radial" && {
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }),
        }
      }
      case "grid": {
        const { grid } = state
        const color = grid.color.includes("var")
          ? `rgba(0,0,0,${grid.opacity})`
          : grid.color.replace(")", ` / ${grid.opacity})`)
        return {
          backgroundImage: `linear-gradient(${color} ${grid.strokeWidth}px, transparent ${grid.strokeWidth}px), linear-gradient(90deg, ${color} ${grid.strokeWidth}px, transparent ${grid.strokeWidth}px)`,
          backgroundSize: `${grid.size}px ${grid.size}px`,
        }
      }
      case "noise": {
        return {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: state.noise.opacity * 10,
          mixBlendMode: state.noise.blendMode as React.CSSProperties["mixBlendMode"],
        }
      }
      default:
        return {}
    }
  }, [state])

  // Get decoration type icon
  const getTypeIcon = (type: DecorationType) => {
    switch (type) {
      case "guides":
        return <Layers className="size-4" />
      case "gradient":
        return <Sparkles className="size-4" />
      case "dots":
      case "grid":
        return <Grid3X3 className="size-4" />
      case "noise":
        return <Sparkles className="size-4" />
      case "glow":
        return <Sun className="size-4" />
    }
  }

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        {/* Controls - First 2 columns */}
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Background Decorations"
            description="Add visual effects to your sections"
          />

          {/* Sidebar Tabs */}
          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) => setSidebarTab(v as typeof sidebarTab)}
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="configure" icon={Settings2}>
                  Configure
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="saved" icon={Bookmark}>
                  Saved
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="export" icon={Download}>
                  Export
                </ToolLayoutTabsTrigger>
              </ToolLayoutTabsList>

              {/* Explore Tab */}
              <ToolLayoutTabsContent value="explore" scrollable={false}>
                <div className="flex h-full flex-col items-center justify-center">
                  <Deck className="h-72 w-full max-w-xs">
                    <DeckCards
                      currentIndex={deckIndex}
                      onCurrentIndexChange={(index) => {
                        setDeckIndex(index)
                        if (presetKeys[index]) {
                          handlePresetSelect(presetKeys[index])
                        }
                      }}
                    >
                      {presets.map((preset) => (
                        <DeckItem key={preset.id} className="overflow-hidden rounded-[32px] p-0 shadow-sm">
                          <div className="flex size-full flex-col">
                            {/* Preview */}
                            <div
                              className="relative flex-1 rounded-t-[24px]"
                              style={{ background: preset.preview, minHeight: 120 }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                {getTypeIcon(presetConfigs[preset.id]?.type || "guides")}
                              </div>
                            </div>
                            {/* Label */}
                            <div className="bg-background p-4">
                              <div className="flex items-center gap-2">
                                <div
                                  className="size-4 shrink-0 rounded-full border"
                                  style={{ background: preset.preview }}
                                />
                                <div className="-space-y-0.5">
                                  <h3 className="text-sm font-semibold leading-none tracking-tight">
                                    {preset.name}
                                  </h3>
                                  <p className="text-muted-foreground text-[10px]">
                                    {preset.category}
                                  </p>
                                </div>
                              </div>
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
                            if (presetKeys[0]) {
                              handlePresetSelect(presetKeys[0])
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
                                setDeckIndex(prevIndex)
                                if (presetKeys[prevIndex]) {
                                  handlePresetSelect(presetKeys[prevIndex])
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
                              disabled={deckIndex >= presetKeys.length}
                              onClick={() => {
                                const newIndex = deckIndex + 1
                                setDeckIndex(newIndex)
                                if (presetKeys[newIndex]) {
                                  handlePresetSelect(presetKeys[newIndex])
                                }
                              }}
                            >
                              <Redo2 className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Next</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>
              </ToolLayoutTabsContent>

              {/* Configure Tab */}
              <ToolLayoutTabsContent value="configure">
                {/* Preset selector & controls */}
                <div className="flex items-center gap-1">
                  <PresetSelector
                    presets={{ ...presetsObject, custom: { label: "Custom" } }}
                    currentPreset={currentPreset}
                    onSelect={handlePresetSelect}
                    onSave={saveDecoration}
                    onReset={handleReset}
                    savedItems={savedDecorations}
                    onLoadSaved={loadDecoration}
                    renderPreview={(presetKey) => {
                      const preset = presets.find((p) => p.id === presetKey)
                      return (
                        <div
                          className="size-4 shrink-0 rounded-full border"
                          style={{ background: preset?.preview || "var(--muted)" }}
                        />
                      )
                    }}
                    renderSavedPreview={(item) => (
                      <div
                        className="size-4 shrink-0 rounded-full border"
                        style={{ background: "var(--primary)" }}
                      />
                    )}
                    searchPlaceholder="Search decorations..."
                    presetsGroupLabel="Built-in Presets"
                    savedGroupLabel="Saved Decorations"
                  />
                </div>

                <div className="space-y-0">
                  <ControlSection title="Decoration Type">
                    <Select
                      value={state.type}
                      onValueChange={(v) => handleTypeChange(v as DecorationType)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guides">
                          <div className="flex items-center gap-2">
                            <Layers className="size-4" />
                            Stripe Guides
                          </div>
                        </SelectItem>
                        <SelectItem value="gradient">
                          <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            Gradient
                          </div>
                        </SelectItem>
                        <SelectItem value="dots">
                          <div className="flex items-center gap-2">
                            <Grid3X3 className="size-4" />
                            Dot Pattern
                          </div>
                        </SelectItem>
                        <SelectItem value="grid">
                          <div className="flex items-center gap-2">
                            <Grid3X3 className="size-4" />
                            Grid Pattern
                          </div>
                        </SelectItem>
                        <SelectItem value="noise">
                          <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            Noise Texture
                          </div>
                        </SelectItem>
                        <SelectItem value="glow">
                          <div className="flex items-center gap-2">
                            <Sun className="size-4" />
                            Glow Effect
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </ControlSection>

                  {/* Guides Config */}
                  {state.type === "guides" && (
                    <>
                      <ControlSection title="Guide Lines">
                        <SliderRow
                          label="Column Count"
                          value={state.guides.columnCount}
                          onChange={(v) => updateGuides("columnCount", v)}
                          min={2}
                          max={12}
                        />
                      </ControlSection>
                      <ControlSection title="Animation">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Animated</Label>
                          <Switch
                            checked={state.guides.animated}
                            onCheckedChange={(v) => updateGuides("animated", v)}
                          />
                        </div>
                        {state.guides.animated && (
                          <>
                            <SliderRow
                              label="Duration"
                              value={state.guides.animationDuration}
                              onChange={(v) => updateGuides("animationDuration", v)}
                              min={10}
                              max={120}
                              unit="s"
                            />
                            <SliderRow
                              label="Delay"
                              value={state.guides.animationDelay}
                              onChange={(v) => updateGuides("animationDelay", v)}
                              min={0}
                              max={2}
                              step={0.1}
                              unit="s"
                            />
                            <div className="space-y-1.5">
                              <Label className="text-xs">Direction</Label>
                              <Select
                                value={state.guides.direction}
                                onValueChange={(v) =>
                                  updateGuides("direction", v as typeof state.guides.direction)
                                }
                              >
                                <SelectTrigger className="h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="top-to-bottom">Top to Bottom</SelectItem>
                                  <SelectItem value="bottom-to-top">Bottom to Top</SelectItem>
                                  <SelectItem value="both">Both</SelectItem>
                                  <SelectItem value="random">Random</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}
                      </ControlSection>
                      <ControlSection title="Glow Effect">
                        <ColorPickerRow
                          label="Color"
                          color={state.guides.glowColor}
                          onChange={(v) => updateGuides("glowColor", v)}
                        />
                        <SliderRow
                          label="Size"
                          value={state.guides.glowSize}
                          onChange={(v) => updateGuides("glowSize", v)}
                          min={5}
                          max={30}
                          unit="vh"
                        />
                        <SliderRow
                          label="Opacity"
                          value={state.guides.glowOpacity}
                          onChange={(v) => updateGuides("glowOpacity", v)}
                          min={0.1}
                          max={1}
                          step={0.05}
                        />
                      </ControlSection>
                    </>
                  )}

                  {/* Gradient Config */}
                  {state.type === "gradient" && (
                    <>
                      <ControlSection title="Gradient Style">
                        <div className="space-y-1.5">
                          <Label className="text-xs">Type</Label>
                          <Select
                            value={state.gradient.type}
                            onValueChange={(v) =>
                              updateGradient("type", v as typeof state.gradient.type)
                            }
                          >
                            <SelectTrigger className="h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="linear">Linear</SelectItem>
                              <SelectItem value="radial">Radial</SelectItem>
                              <SelectItem value="conic">Conic</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {state.gradient.type !== "radial" && (
                          <SliderRow
                            label="Angle"
                            value={state.gradient.angle}
                            onChange={(v) => updateGradient("angle", v)}
                            min={0}
                            max={360}
                            unit="deg"
                          />
                        )}
                      </ControlSection>
                      <ControlSection title="Animation">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Animated</Label>
                          <Switch
                            checked={state.gradient.animated}
                            onCheckedChange={(v) => updateGradient("animated", v)}
                          />
                        </div>
                      </ControlSection>
                    </>
                  )}

                  {/* Dots Config */}
                  {state.type === "dots" && (
                    <ControlSection title="Dot Pattern">
                      <SliderRow
                        label="Dot Size"
                        value={state.dots.size}
                        onChange={(v) => updateDots("size", v)}
                        min={1}
                        max={5}
                        unit="px"
                      />
                      <SliderRow
                        label="Spacing"
                        value={state.dots.spacing}
                        onChange={(v) => updateDots("spacing", v)}
                        min={10}
                        max={50}
                        unit="px"
                      />
                      <SliderRow
                        label="Opacity"
                        value={state.dots.opacity}
                        onChange={(v) => updateDots("opacity", v)}
                        min={0.1}
                        max={1}
                        step={0.05}
                      />
                      <div className="space-y-1.5">
                        <Label className="text-xs">Fade Effect</Label>
                        <Select
                          value={state.dots.fade}
                          onValueChange={(v) => updateDots("fade", v as typeof state.dots.fade)}
                        >
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="radial">Radial</SelectItem>
                            <SelectItem value="top">Top</SelectItem>
                            <SelectItem value="bottom">Bottom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </ControlSection>
                  )}

                  {/* Grid Config */}
                  {state.type === "grid" && (
                    <ControlSection title="Grid Pattern">
                      <SliderRow
                        label="Grid Size"
                        value={state.grid.size}
                        onChange={(v) => updateGrid("size", v)}
                        min={20}
                        max={100}
                        unit="px"
                      />
                      <SliderRow
                        label="Line Width"
                        value={state.grid.strokeWidth}
                        onChange={(v) => updateGrid("strokeWidth", v)}
                        min={1}
                        max={3}
                        unit="px"
                      />
                      <SliderRow
                        label="Opacity"
                        value={state.grid.opacity}
                        onChange={(v) => updateGrid("opacity", v)}
                        min={0.05}
                        max={0.5}
                        step={0.01}
                      />
                      <div className="space-y-1.5">
                        <Label className="text-xs">Fade Effect</Label>
                        <Select
                          value={state.grid.fade}
                          onValueChange={(v) => updateGrid("fade", v as typeof state.grid.fade)}
                        >
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="radial">Radial</SelectItem>
                            <SelectItem value="edges">Edges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </ControlSection>
                  )}

                  {/* Noise Config */}
                  {state.type === "noise" && (
                    <ControlSection title="Noise Texture">
                      <SliderRow
                        label="Opacity"
                        value={state.noise.opacity}
                        onChange={(v) => updateNoise("opacity", v)}
                        min={0.01}
                        max={0.1}
                        step={0.005}
                      />
                      <SliderRow
                        label="Scale"
                        value={state.noise.scale}
                        onChange={(v) => updateNoise("scale", v)}
                        min={0.5}
                        max={3}
                        step={0.1}
                      />
                      <div className="space-y-1.5">
                        <Label className="text-xs">Blend Mode</Label>
                        <Select
                          value={state.noise.blendMode}
                          onValueChange={(v) =>
                            updateNoise("blendMode", v as typeof state.noise.blendMode)
                          }
                        >
                          <SelectTrigger className="h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="overlay">Overlay</SelectItem>
                            <SelectItem value="soft-light">Soft Light</SelectItem>
                            <SelectItem value="multiply">Multiply</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </ControlSection>
                  )}

                  {/* Glow Config */}
                  {state.type === "glow" && (
                    <>
                      <ControlSection title="Glow Appearance">
                        <ColorPickerRow
                          label="Color"
                          color={state.glow.color}
                          onChange={(v) => updateGlow("color", v)}
                        />
                        <SliderRow
                          label="Size"
                          value={state.glow.size}
                          onChange={(v) => updateGlow("size", v)}
                          min={100}
                          max={800}
                          unit="px"
                        />
                        <SliderRow
                          label="Blur"
                          value={state.glow.blur}
                          onChange={(v) => updateGlow("blur", v)}
                          min={20}
                          max={200}
                          unit="px"
                        />
                        <SliderRow
                          label="Opacity"
                          value={state.glow.opacity}
                          onChange={(v) => updateGlow("opacity", v)}
                          min={0.1}
                          max={1}
                          step={0.05}
                        />
                      </ControlSection>
                      <ControlSection title="Position">
                        <SliderRow
                          label="X Position"
                          value={state.glow.x}
                          onChange={(v) => updateGlow("x", v)}
                          min={0}
                          max={100}
                          unit="%"
                        />
                        <SliderRow
                          label="Y Position"
                          value={state.glow.y}
                          onChange={(v) => updateGlow("y", v)}
                          min={0}
                          max={100}
                          unit="%"
                        />
                      </ControlSection>
                      <ControlSection title="Animation">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs">Animated</Label>
                          <Switch
                            checked={state.glow.animated}
                            onCheckedChange={(v) => updateGlow("animated", v)}
                          />
                        </div>
                      </ControlSection>
                    </>
                  )}
                </div>
              </ToolLayoutTabsContent>

              {/* Saved Tab */}
              <ToolLayoutTabsContent value="saved" scrollable={false}>
                {!isHydrated ? (
                  <div className="space-y-2 p-2">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-12 w-full rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <SavedItemsList
                    items={savedDecorations}
                    onLoad={loadDecoration}
                    onRename={renameDecoration}
                    onDelete={deleteDecoration}
                    emptyIcon={
                      <div className="relative">
                        {/* Decorative background previews */}
                        <div className="absolute -inset-8 -z-10 overflow-hidden rounded-3xl opacity-40">
                          <div
                            className="absolute inset-0"
                            style={{
                              background: "radial-gradient(circle at 20% 30%, hsl(185 85% 50% / 0.3), transparent 50%), radial-gradient(circle at 80% 70%, hsl(270 85% 60% / 0.3), transparent 50%)",
                            }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: "radial-gradient(circle, hsl(var(--foreground) / 0.15) 1px, transparent 1px)",
                              backgroundSize: "16px 16px",
                            }}
                          />
                        </div>
                        <BackgroundDecorationsIcon className="text-brand size-32" />
                      </div>
                    }
                    emptyText="No saved decorations yet"
                    emptySubtext="Click the save button to save your current decoration"
                    renderPreview={(decoration) => {
                      const previewBg = decoration.state.type === "glow"
                        ? decoration.state.glow.color
                        : decoration.state.type === "gradient" && decoration.state.gradient.colors[0]
                          ? decoration.state.gradient.colors[0].color
                          : "hsl(185 85% 50%)"
                      return (
                        <div
                          className="size-4 shrink-0 rounded-full border"
                          style={{ background: previewBg }}
                        />
                      )
                    }}
                    className="h-full p-2"
                  />
                )}
              </ToolLayoutTabsContent>

              {/* Export Tab */}
              <ToolLayoutTabsContent value="export">
                <div className="space-y-2">
                  <Select
                    value={codeFormat}
                    onValueChange={(v) => setCodeFormat(v as typeof codeFormat)}
                  >
                    <SelectTrigger className="bg-background h-7 w-28 text-xs shadow-2xs hover:bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tailwind">React/Tailwind</SelectItem>
                      <SelectItem value="css">CSS</SelectItem>
                    </SelectContent>
                  </Select>
                  <CodeBlock
                    code={generatedCode}
                    language={codeFormat === "tailwind" ? "tsx" : "css"}
                    filename={codeFormat === "tailwind" ? "component.tsx" : "styles.css"}
                    height={200}
                  />
                </div>

                {state.type === "guides" && (
                  <div className="mt-4 rounded-lg border p-3">
                    <p className="text-muted-foreground mb-2 text-xs font-medium">
                      Install the component:
                    </p>
                    <code className="bg-muted rounded px-2 py-1 text-xs">
                      npx pitsi add bg-guides
                    </code>
                  </div>
                )}
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        {/* Preview - Remaining 4 columns */}
        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
            <div className="flex items-center gap-2">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 shadow-none"
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      {darkMode ? (
                        <Sun className="size-4" />
                      ) : (
                        <Moon className="size-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {darkMode ? "Light mode" : "Dark mode"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </ToolLayoutPreviewHeader>

          <ToolLayoutPreviewContent>
            <div
              className={cn(
                "relative h-full w-full overflow-hidden transition-colors",
                darkMode ? "bg-neutral-950" : "bg-white"
              )}
            >
              {/* Preview the decoration */}
              {state.type === "guides" ? (
                <div className="relative h-full w-full">
                  {/* Simplified guides preview */}
                  <div className="absolute inset-0 flex justify-around px-8">
                    {Array.from({ length: state.guides.columnCount }).map(
                      (_, i) => (
                        <div
                          key={i}
                          className="relative h-full w-px"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, ${darkMode ? "hsl(233 14% 20%)" : "hsl(233 14% 93%)"} 50%, transparent 50%)`,
                            backgroundSize: "1px 8px",
                          }}
                        >
                          {state.guides.animated && (
                            <div
                              className="absolute w-full animate-pulse"
                              style={{
                                height: `${state.guides.glowSize}vh`,
                                top: `${(i * 15) % 100}%`,
                                background: `linear-gradient(to bottom, transparent, ${state.guides.glowColor}, ${darkMode ? "black" : "white"})`,
                                opacity: state.guides.glowOpacity,
                              }}
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : state.type === "glow" ? (
                <div className="relative h-full w-full">
                  <div
                    className={cn(
                      "absolute rounded-full",
                      state.glow.animated && "animate-pulse"
                    )}
                    style={{
                      width: state.glow.size,
                      height: state.glow.size,
                      left: `${state.glow.x}%`,
                      top: `${state.glow.y}%`,
                      transform: "translate(-50%, -50%)",
                      background: state.glow.color,
                      filter: `blur(${state.glow.blur}px)`,
                      opacity: state.glow.opacity,
                    }}
                  />
                </div>
              ) : (
                <div className="absolute inset-0" style={previewStyle} />
              )}

              {/* Sample content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                <h2
                  className={cn(
                    "mb-2 text-2xl font-bold",
                    darkMode ? "text-white" : "text-neutral-900"
                  )}
                >
                  Section Title
                </h2>
                <p
                  className={cn(
                    "max-w-md",
                    darkMode ? "text-neutral-400" : "text-neutral-600"
                  )}
                >
                  This is how your background decoration will look behind your
                  content.
                </p>
              </div>
            </div>
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
