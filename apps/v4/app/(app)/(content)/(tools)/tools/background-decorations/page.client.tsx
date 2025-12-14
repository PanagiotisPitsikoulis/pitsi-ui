"use client"

import { useCallback, useMemo, useState } from "react"

import {
  Check,
  Compass,
  Copy,
  Download,
  Grid3X3,
  Layers,
  Moon,
  RotateCcw,
  Settings2,
  Sparkles,
  Sun,
} from "lucide-react"
import { parseAsStringLiteral, useQueryState } from "nuqs"

import { cn } from "@/lib/utils"
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/kibo-ui/deck"
import {
  CodeBlock,
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
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import { presetConfigs } from "./_components/decoration-presets"
import { generateCSSCode, generateTailwindCode } from "./_components/generate-code"
import type {
  DecorationPreset,
  DecorationState,
  DecorationType,
} from "./_components/decoration-types"

interface BackgroundDecorationsPageClientProps {
  presets: DecorationPreset[]
  defaultState: DecorationState
}

function ColorInput({
  value,
  onChange,
  label,
}: {
  value: string
  onChange: (value: string) => void
  label: string
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs">{label}</Label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value.startsWith("hsl") ? "#22c55e" : value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-12 cursor-pointer rounded border"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-input bg-background h-9 flex-1 rounded border px-2 text-xs"
        />
      </div>
    </div>
  )
}

function SliderControl({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = "",
}: {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit?: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-xs">{label}</Label>
        <span className="text-muted-foreground text-xs">
          {value}
          {unit}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  )
}

export default function BackgroundDecorationsPageClient({
  presets,
  defaultState,
}: BackgroundDecorationsPageClientProps) {
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(["explore", "configure", "code"]).withDefault("explore")
  )
  const [copied, setCopied] = useState(false)
  const [codeFormat, setCodeFormat] = useState<"tailwind" | "css">("tailwind")
  const [darkMode, setDarkMode] = useState(false)

  const [state, setState] = useState<DecorationState>(defaultState)

  const handleReset = useCallback(() => {
    setState(defaultState)
  }, [defaultState])

  const handlePresetSelect = useCallback(
    (presetId: string) => {
      const config = presetConfigs[presetId]
      if (config) {
        setState((prev) => ({
          ...prev,
          ...config,
        }))
        setSidebarTab("configure")
      }
    },
    [setSidebarTab]
  )

  const handleTypeChange = useCallback((type: DecorationType) => {
    setState((prev) => ({
      ...prev,
      type,
    }))
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
    },
    []
  )

  const generatedCode = useMemo(() => {
    return codeFormat === "tailwind"
      ? generateTailwindCode(state)
      : generateCSSCode(state)
  }, [state, codeFormat])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generatedCode])

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
          mixBlendMode: state.noise.blendMode as any,
        }
      }
      default:
        return {}
    }
  }, [state])

  return (
    <ToolLayout>
      <ToolLayoutBackground />
      <ToolLayoutContainer>
        <ToolLayoutSidebar>
          <ToolLayoutHeader>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={handleReset}>
                    <RotateCcw className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reset to defaults</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </ToolLayoutHeader>

          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) => setSidebarTab(v as typeof sidebarTab)}
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore">
                  <Compass className="size-4" />
                  <span className="sr-only">Explore</span>
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="configure">
                  <Settings2 className="size-4" />
                  <span className="sr-only">Configure</span>
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="code">
                  <Download className="size-4" />
                  <span className="sr-only">Code</span>
                </ToolLayoutTabsTrigger>
              </ToolLayoutTabsList>

              {/* Explore Tab */}
              <ToolLayoutTabsContent value="explore">
                <div className="space-y-4 p-4">
                  <div>
                    <h3 className="mb-1 text-sm font-medium">Presets</h3>
                    <p className="text-muted-foreground text-xs">
                      Select a preset to get started
                    </p>
                  </div>
                  <Deck>
                    <DeckCards>
                      {presets.map((preset) => (
                        <DeckItem
                          key={preset.id}
                          onClick={() => handlePresetSelect(preset.id)}
                          className="cursor-pointer"
                        >
                          <div className="space-y-2">
                            <div
                              className="h-24 w-full rounded-lg border"
                              style={{ background: preset.preview }}
                            />
                            <div>
                              <p className="text-sm font-medium">{preset.name}</p>
                              <p className="text-muted-foreground text-xs">
                                {preset.description}
                              </p>
                            </div>
                          </div>
                        </DeckItem>
                      ))}
                    </DeckCards>
                    <DeckEmpty>No presets found</DeckEmpty>
                  </Deck>
                </div>
              </ToolLayoutTabsContent>

              {/* Configure Tab */}
              <ToolLayoutTabsContent value="configure">
                <div className="space-y-4 p-4">
                  <div>
                    <Label className="text-xs">Decoration Type</Label>
                    <Select
                      value={state.type}
                      onValueChange={(v) => handleTypeChange(v as DecorationType)}
                    >
                      <SelectTrigger className="mt-1">
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
                  </div>

                  <Separator />

                  {/* Guides Config */}
                  {state.type === "guides" && (
                    <div className="space-y-4">
                      <SliderControl
                        label="Column Count"
                        value={state.guides.columnCount}
                        onChange={(v) => updateGuides("columnCount", v)}
                        min={2}
                        max={12}
                      />
                      <div className="flex items-center justify-between">
                        <Label className="text-xs">Animated</Label>
                        <Switch
                          checked={state.guides.animated}
                          onCheckedChange={(v) => updateGuides("animated", v)}
                        />
                      </div>
                      {state.guides.animated && (
                        <>
                          <SliderControl
                            label="Animation Duration"
                            value={state.guides.animationDuration}
                            onChange={(v) => updateGuides("animationDuration", v)}
                            min={10}
                            max={120}
                            unit="s"
                          />
                          <SliderControl
                            label="Animation Delay"
                            value={state.guides.animationDelay}
                            onChange={(v) => updateGuides("animationDelay", v)}
                            min={0}
                            max={2}
                            step={0.1}
                            unit="s"
                          />
                          <div>
                            <Label className="text-xs">Direction</Label>
                            <Select
                              value={state.guides.direction}
                              onValueChange={(v) =>
                                updateGuides("direction", v as any)
                              }
                            >
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="top-to-bottom">
                                  Top to Bottom
                                </SelectItem>
                                <SelectItem value="bottom-to-top">
                                  Bottom to Top
                                </SelectItem>
                                <SelectItem value="both">Both</SelectItem>
                                <SelectItem value="random">Random</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}
                      <ColorInput
                        label="Glow Color"
                        value={state.guides.glowColor}
                        onChange={(v) => updateGuides("glowColor", v)}
                      />
                      <SliderControl
                        label="Glow Size"
                        value={state.guides.glowSize}
                        onChange={(v) => updateGuides("glowSize", v)}
                        min={5}
                        max={30}
                        unit="vh"
                      />
                      <SliderControl
                        label="Glow Opacity"
                        value={state.guides.glowOpacity}
                        onChange={(v) => updateGuides("glowOpacity", v)}
                        min={0.1}
                        max={1}
                        step={0.05}
                      />
                    </div>
                  )}

                  {/* Gradient Config */}
                  {state.type === "gradient" && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-xs">Gradient Type</Label>
                        <Select
                          value={state.gradient.type}
                          onValueChange={(v) =>
                            updateGradient("type", v as any)
                          }
                        >
                          <SelectTrigger className="mt-1">
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
                        <SliderControl
                          label="Angle"
                          value={state.gradient.angle}
                          onChange={(v) => updateGradient("angle", v)}
                          min={0}
                          max={360}
                          unit="deg"
                        />
                      )}
                      <div className="flex items-center justify-between">
                        <Label className="text-xs">Animated</Label>
                        <Switch
                          checked={state.gradient.animated}
                          onCheckedChange={(v) => updateGradient("animated", v)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Dots Config */}
                  {state.type === "dots" && (
                    <div className="space-y-4">
                      <SliderControl
                        label="Dot Size"
                        value={state.dots.size}
                        onChange={(v) => updateDots("size", v)}
                        min={1}
                        max={5}
                        unit="px"
                      />
                      <SliderControl
                        label="Spacing"
                        value={state.dots.spacing}
                        onChange={(v) => updateDots("spacing", v)}
                        min={10}
                        max={50}
                        unit="px"
                      />
                      <SliderControl
                        label="Opacity"
                        value={state.dots.opacity}
                        onChange={(v) => updateDots("opacity", v)}
                        min={0.1}
                        max={1}
                        step={0.05}
                      />
                      <div>
                        <Label className="text-xs">Fade Effect</Label>
                        <Select
                          value={state.dots.fade}
                          onValueChange={(v) => updateDots("fade", v as any)}
                        >
                          <SelectTrigger className="mt-1">
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
                    </div>
                  )}

                  {/* Grid Config */}
                  {state.type === "grid" && (
                    <div className="space-y-4">
                      <SliderControl
                        label="Grid Size"
                        value={state.grid.size}
                        onChange={(v) => updateGrid("size", v)}
                        min={20}
                        max={100}
                        unit="px"
                      />
                      <SliderControl
                        label="Line Width"
                        value={state.grid.strokeWidth}
                        onChange={(v) => updateGrid("strokeWidth", v)}
                        min={1}
                        max={3}
                        unit="px"
                      />
                      <SliderControl
                        label="Opacity"
                        value={state.grid.opacity}
                        onChange={(v) => updateGrid("opacity", v)}
                        min={0.05}
                        max={0.5}
                        step={0.01}
                      />
                      <div>
                        <Label className="text-xs">Fade Effect</Label>
                        <Select
                          value={state.grid.fade}
                          onValueChange={(v) => updateGrid("fade", v as any)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="radial">Radial</SelectItem>
                            <SelectItem value="edges">Edges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Noise Config */}
                  {state.type === "noise" && (
                    <div className="space-y-4">
                      <SliderControl
                        label="Opacity"
                        value={state.noise.opacity}
                        onChange={(v) => updateNoise("opacity", v)}
                        min={0.01}
                        max={0.1}
                        step={0.005}
                      />
                      <SliderControl
                        label="Scale"
                        value={state.noise.scale}
                        onChange={(v) => updateNoise("scale", v)}
                        min={0.5}
                        max={3}
                        step={0.1}
                      />
                      <div>
                        <Label className="text-xs">Blend Mode</Label>
                        <Select
                          value={state.noise.blendMode}
                          onValueChange={(v) =>
                            updateNoise("blendMode", v as any)
                          }
                        >
                          <SelectTrigger className="mt-1">
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
                    </div>
                  )}

                  {/* Glow Config */}
                  {state.type === "glow" && (
                    <div className="space-y-4">
                      <ColorInput
                        label="Color"
                        value={state.glow.color}
                        onChange={(v) => updateGlow("color", v)}
                      />
                      <SliderControl
                        label="Size"
                        value={state.glow.size}
                        onChange={(v) => updateGlow("size", v)}
                        min={100}
                        max={800}
                        unit="px"
                      />
                      <SliderControl
                        label="Blur"
                        value={state.glow.blur}
                        onChange={(v) => updateGlow("blur", v)}
                        min={20}
                        max={200}
                        unit="px"
                      />
                      <SliderControl
                        label="X Position"
                        value={state.glow.x}
                        onChange={(v) => updateGlow("x", v)}
                        min={0}
                        max={100}
                        unit="%"
                      />
                      <SliderControl
                        label="Y Position"
                        value={state.glow.y}
                        onChange={(v) => updateGlow("y", v)}
                        min={0}
                        max={100}
                        unit="%"
                      />
                      <SliderControl
                        label="Opacity"
                        value={state.glow.opacity}
                        onChange={(v) => updateGlow("opacity", v)}
                        min={0.1}
                        max={1}
                        step={0.05}
                      />
                      <div className="flex items-center justify-between">
                        <Label className="text-xs">Animated</Label>
                        <Switch
                          checked={state.glow.animated}
                          onCheckedChange={(v) => updateGlow("animated", v)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </ToolLayoutTabsContent>

              {/* Code Tab */}
              <ToolLayoutTabsContent value="code">
                <div className="space-y-4 p-4">
                  <div>
                    <h3 className="mb-1 text-sm font-medium">Export Code</h3>
                    <p className="text-muted-foreground text-xs">
                      Copy the code to use in your project
                    </p>
                  </div>

                  <Tabs
                    value={codeFormat}
                    onValueChange={(v) => setCodeFormat(v as typeof codeFormat)}
                  >
                    <TabsList className="w-full">
                      <TabsTrigger value="tailwind" className="flex-1">
                        React/Tailwind
                      </TabsTrigger>
                      <TabsTrigger value="css" className="flex-1">
                        CSS
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="relative">
                    <CodeBlock
                      code={generatedCode}
                      language={codeFormat === "tailwind" ? "tsx" : "css"}
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <Check className="size-4" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </Button>
                  </div>

                  {state.type === "guides" && (
                    <div className="rounded-lg border p-3">
                      <p className="text-muted-foreground mb-2 text-xs">
                        Install the component:
                      </p>
                      <code className="bg-muted rounded px-2 py-1 text-xs">
                        npx pitsi add bg-guides
                      </code>
                    </div>
                  )}
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
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
