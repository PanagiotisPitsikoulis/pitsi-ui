"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryState,
} from "nuqs"

import {
  ArrowRight,
  Bookmark,
  Bot,
  Check,
  ChevronDown,
  Compass,
  Download,
  Info,
  Pause,
  Play,
  RotateCcw,
  Save,
  Settings,
  Shuffle,
} from "@/lib/icons"
import { STORAGE_KEYS, useLocalStorage } from "@/lib/local-storage"
import { cn } from "@/lib/utils"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import { defaultBezier, easingPresets } from "./_components/easing-presets"
import type {
  CubicBezier,
  EasingPreset,
  SavedEasing,
} from "./_components/easing-types"
import {
  bezierToCSS,
  generateEasingCSS,
  generateEasingJSON,
  generateFramerMotionEasing,
  generateTailwindV4Easing,
} from "./_components/generate-css"
import {
  previewComponents,
  type PreviewType,
} from "./_components/preview-components"

function EasingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 115 112"
      fill="none"
      className={className}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M22.5604 59.7502V69.1803L6.11035 59.6903V50.2502L22.5604 59.7502Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M91.8801 78.2502C91.3001 74.3002 90.2801 70.3203 88.8101 66.2903C87.4701 62.6103 85.7599 58.9003 83.6699 55.1503C83.3999 54.6603 83.1201 54.1703 82.8401 53.6803C80.5501 49.7303 78.09 46.1503 75.45 42.9403C70.72 37.1703 65.4201 32.5902 59.5601 29.2102C55.8101 27.0402 52.29 25.6302 49 24.9702C44.74 24.1002 40.8701 24.4903 37.4001 26.1603L36.8401 26.4403C36.6301 26.5403 36.43 26.6503 36.23 26.7703C36.11 26.8403 35.9801 26.9202 35.8601 27.0002C33.4101 28.4902 31.44 30.5103 29.98 33.0503C29.08 34.5803 28.3701 36.3102 27.8601 38.2202C27.6101 39.0802 27.41 39.9703 27.25 40.9103C26.86 43.0603 26.6699 45.4102 26.6699 47.9702C26.6699 48.0602 26.6699 48.1602 26.6699 48.2502C26.6699 48.8402 26.68 49.4403 26.7 50.0403C26.8 52.4403 27.06 54.8503 27.49 57.2803C27.97 60.0603 28.6701 62.8503 29.5901 65.6603C31.1601 70.4903 33.38 75.3502 36.22 80.2602C42.59 91.2502 50.37 99.4003 59.55 104.7C68.19 109.68 75.6101 110.68 81.8101 107.7L82.04 107.59C82.31 107.46 82.5701 107.32 82.8301 107.17C86.1001 105.33 88.5301 102.59 90.1301 98.9403C91.6701 95.4503 92.4399 91.1103 92.4399 85.9503C92.4399 83.4003 92.2501 80.8302 91.8701 78.2502H91.8801ZM71.1101 88.6803L68.9199 89.9303L64.05 81.4802L55.45 66.5902V45.7102L63.6699 50.4602V67.4403L74.78 86.5902L71.1101 88.6803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M63.6702 50.4602V62.4802L55.4502 66.5902V45.7102L63.6702 50.4602Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M74.7803 86.5902L71.1104 88.6803L68.9202 89.9303L64.0503 81.4802L55.4502 66.5902L63.6702 62.4802V67.4403L74.7803 86.5902Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M42.5605 12.0002V21.4403L33.8105 25.8203L25.0405 30.2003L22.5605 31.4403V22.0002L42.5605 12.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M42.5604 12.0002L22.5604 22.0002L22.0004 21.6803L19.5104 20.2402L6.11035 12.5103L26.1105 2.51025L42.5604 12.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M22.5604 22.0002V31.4403L10.7504 24.6202L6.11035 21.9403V12.5103L19.5104 20.2402L22.0004 21.6803L22.5604 22.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M35.8601 27.0001C33.4101 28.4901 31.44 30.5102 29.98 33.0502C29.08 34.5802 28.3701 36.3101 27.8601 38.2201L22.5601 40.8701L2 29.0001L10.75 24.6201L22.5601 31.4402L25.04 30.2002L33.8101 25.8202L35.8601 27.0001Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M27.2498 40.9103C26.8598 43.0603 26.6697 45.4102 26.6697 47.9702C26.6697 48.0602 26.6697 48.1602 26.6697 48.2502L26.0999 48.5403L22.5498 50.3103V40.8702L27.8499 38.2202C27.5999 39.0802 27.3997 39.9703 27.2397 40.9103H27.2498Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M27.5004 57.2802L22.5604 59.7501L6.11035 50.2501L14.8705 45.8701L22.5604 50.3102L26.1105 48.5402L26.6803 48.2501C26.6803 48.8401 26.6903 49.4402 26.7103 50.0402C26.8103 52.4402 27.0704 54.8502 27.5004 57.2802Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M22.5601 40.8702V50.3103L14.8701 45.8702L2 38.4403V29.0002L22.5601 40.8702Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M29.6006 65.6603L22.5605 69.1803V59.7502L27.5005 57.2803C27.9805 60.0603 28.6806 62.8503 29.6006 65.6603Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M112.45 75.9504C112.45 86.4804 109.25 93.5603 102.84 97.1703C102.64 97.2803 102.44 97.3903 102.25 97.4903L101.85 97.6904L82.0503 107.59C82.3203 107.46 82.5803 107.32 82.8403 107.17C86.1103 105.33 88.5404 102.59 90.1404 98.9404C91.6804 95.4504 92.4502 91.1104 92.4502 85.9504C92.4502 83.4004 92.2604 80.8303 91.8804 78.2503C91.3004 74.3003 90.2803 70.3203 88.8103 66.2903C87.4703 62.6103 85.7602 58.9003 83.6702 55.1503C83.4002 54.6603 83.1203 54.1704 82.8403 53.6804C80.5503 49.7304 78.0902 46.1504 75.4502 42.9404C70.7202 37.1704 65.4203 32.5903 59.5603 29.2103C55.8103 27.0403 52.2902 25.6303 49.0002 24.9703C44.7402 24.1003 40.8704 24.4903 37.4004 26.1603L57.0803 16.3204L57.3704 16.1703C63.5204 13.2103 70.9203 14.2203 79.5603 19.2103C88.6803 24.4703 96.4403 32.6304 102.84 43.6804C109.25 54.7304 112.45 65.4904 112.45 75.9504Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BezierCurveEditor({
  bezier,
  onChange,
  size = 200,
}: {
  bezier: CubicBezier
  onChange: (bezier: CubicBezier) => void
  size?: number
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dragging, setDragging] = useState<"p1" | "p2" | null>(null)

  const padding = 20
  const innerSize = size - padding * 2

  const toSVG = (x: number, y: number) => ({
    x: padding + x * innerSize,
    y: padding + (1 - y) * innerSize,
  })

  const fromSVG = (clientX: number, clientY: number) => {
    if (!svgRef.current) return { x: 0, y: 0 }
    const rect = svgRef.current.getBoundingClientRect()
    const x = Math.max(
      0,
      Math.min(1, (clientX - rect.left - padding) / innerSize)
    )
    const y = Math.max(
      -0.5,
      Math.min(1.5, 1 - (clientY - rect.top - padding) / innerSize)
    )
    return { x, y }
  }

  const handleMouseDown = (point: "p1" | "p2") => (e: React.MouseEvent) => {
    e.preventDefault()
    setDragging(point)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return
      const pos = fromSVG(e.clientX, e.clientY)
      if (dragging === "p1") {
        onChange({
          ...bezier,
          x1: Math.round(pos.x * 100) / 100,
          y1: Math.round(pos.y * 100) / 100,
        })
      } else {
        onChange({
          ...bezier,
          x2: Math.round(pos.x * 100) / 100,
          y2: Math.round(pos.y * 100) / 100,
        })
      }
    },
    [dragging, bezier, onChange]
  )

  const handleMouseUp = useCallback(() => {
    setDragging(null)
  }, [])

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [dragging, handleMouseMove, handleMouseUp])

  const p0 = toSVG(0, 0)
  const p1 = toSVG(bezier.x1, bezier.y1)
  const p2 = toSVG(bezier.x2, bezier.y2)
  const p3 = toSVG(1, 1)

  const pathD = `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      className="touch-none select-none"
    >
      {/* Grid */}
      <defs>
        <pattern
          id="grid"
          width={innerSize / 4}
          height={innerSize / 4}
          patternUnits="userSpaceOnUse"
          x={padding}
          y={padding}
        >
          <path
            d={`M ${innerSize / 4} 0 L 0 0 0 ${innerSize / 4}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.1}
          />
        </pattern>
      </defs>
      <rect
        x={padding}
        y={padding}
        width={innerSize}
        height={innerSize}
        fill="url(#grid)"
        className="stroke-border"
        strokeWidth={1}
      />

      {/* Linear reference line */}
      <line
        x1={p0.x}
        y1={p0.y}
        x2={p3.x}
        y2={p3.y}
        className="stroke-muted-foreground/30"
        strokeWidth={1}
        strokeDasharray="4 4"
      />

      {/* Control point lines */}
      <line
        x1={p0.x}
        y1={p0.y}
        x2={p1.x}
        y2={p1.y}
        className="stroke-brand/50"
        strokeWidth={1}
      />
      <line
        x1={p3.x}
        y1={p3.y}
        x2={p2.x}
        y2={p2.y}
        className="stroke-brand/50"
        strokeWidth={1}
      />

      {/* Bezier curve */}
      <path d={pathD} fill="none" className="stroke-brand" strokeWidth={2.5} />

      {/* Start and end points */}
      <circle cx={p0.x} cy={p0.y} r={4} className="fill-muted-foreground" />
      <circle cx={p3.x} cy={p3.y} r={4} className="fill-muted-foreground" />

      {/* Control point 1 */}
      <circle
        cx={p1.x}
        cy={p1.y}
        r={8}
        className={cn(
          "fill-brand stroke-background cursor-grab stroke-2",
          dragging === "p1" && "cursor-grabbing"
        )}
        onMouseDown={handleMouseDown("p1")}
      />

      {/* Control point 2 */}
      <circle
        cx={p2.x}
        cy={p2.y}
        r={8}
        className={cn(
          "fill-brand stroke-background cursor-grab stroke-2",
          dragging === "p2" && "cursor-grabbing"
        )}
        onMouseDown={handleMouseDown("p2")}
      />
    </svg>
  )
}

function PresetCurvePreview({ bezier }: { bezier: CubicBezier }) {
  const size = 60
  const padding = 6
  const innerSize = size - padding * 2

  const toSVG = (x: number, y: number) => ({
    x: padding + x * innerSize,
    y: padding + (1 - y) * innerSize,
  })

  const p0 = toSVG(0, 0)
  const p1 = toSVG(bezier.x1, bezier.y1)
  const p2 = toSVG(bezier.x2, bezier.y2)
  const p3 = toSVG(1, 1)

  const pathD = `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`

  return (
    <svg width={size} height={size} className="shrink-0">
      <rect
        x={padding}
        y={padding}
        width={innerSize}
        height={innerSize}
        className="fill-muted/50 stroke-border"
        strokeWidth={1}
        rx={4}
      />
      <path d={pathD} fill="none" className="stroke-brand" strokeWidth={2} />
    </svg>
  )
}

function PresetSelector({
  presets,
  currentPreset,
  bezier,
  onSelect,
  onSave,
  savedItems,
  onLoadSavedItem,
}: {
  presets: Record<string, EasingPreset>
  currentPreset: string
  bezier: CubicBezier
  onSelect: (preset: string) => void
  onSave: () => void
  savedItems: SavedEasing[]
  onLoadSavedItem: (item: SavedEasing) => void
}) {
  const [open, setOpen] = useState(false)

  const randomize = useCallback(() => {
    const presetNames = Object.keys(presets)
    const random = Math.floor(Math.random() * presetNames.length)
    onSelect(presetNames[random])
  }, [presets, onSelect])

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-0 flex-1 justify-between gap-2 shadow-2xs"
            size="sm"
          >
            <div className="flex min-w-0 items-center gap-2">
              <PresetCurvePreview bezier={bezier} />
              <span className="truncate font-medium">
                {presets[currentPreset]?.label || "Custom"}
              </span>
            </div>
            <ChevronDown className="size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search easings..." />
            <CommandList>
              <CommandEmpty>No easing found.</CommandEmpty>
              {savedItems.length > 0 && (
                <CommandGroup heading="Saved Easings">
                  {savedItems.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`saved-${item.name}`}
                      onSelect={() => {
                        onLoadSavedItem(item)
                        setOpen(false)
                      }}
                      className="flex items-center gap-2 py-2"
                    >
                      <PresetCurvePreview bezier={item.bezier} />
                      <span className="flex-1 font-medium">{item.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              <CommandGroup heading="Built-in Easings">
                {Object.entries(presets).map(([key, preset]) => (
                  <CommandItem
                    key={key}
                    value={key}
                    onSelect={() => {
                      onSelect(key)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 py-2"
                  >
                    <PresetCurvePreview bezier={preset.bezier} />
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
              className="size-8 shrink-0 shadow-2xs"
              onClick={onSave}
            >
              <Save className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Save easing</TooltipContent>
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
          <TooltipContent>Random easing</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

const sidebarTabs = ["explore", "curve", "saved", "export"] as const

// Use imported presets directly
const presets = easingPresets

interface EasingComposerClientProps {
  hasBackgroundDecoration?: boolean
}

export default function EasingComposerClient({
  hasBackgroundDecoration = true,
}: EasingComposerClientProps) {
  // URL state
  const [x1, setX1] = useQueryState(
    "x1",
    parseAsFloat.withDefault(defaultBezier.x1)
  )
  const [y1, setY1] = useQueryState(
    "y1",
    parseAsFloat.withDefault(defaultBezier.y1)
  )
  const [x2, setX2] = useQueryState(
    "x2",
    parseAsFloat.withDefault(defaultBezier.x2)
  )
  const [y2, setY2] = useQueryState(
    "y2",
    parseAsFloat.withDefault(defaultBezier.y2)
  )
  const [duration, setDuration] = useQueryState(
    "dur",
    parseAsInteger.withDefault(500)
  )
  const [currentPreset, setCurrentPreset] = useQueryState(
    "preset",
    parseAsString.withDefault("smooth")
  )
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(sidebarTabs).withDefault("curve")
  )
  // Local state
  const [savedItems, setSavedItems, isHydrated] = useLocalStorage<
    SavedEasing[]
  >(STORAGE_KEYS.EASING_COMPOSER, [])
  const [selectedPreview, setSelectedPreview] = useState<PreviewType>("card")
  const [isPlaying, setIsPlaying] = useState(true)

  const presetKeys = useMemo(() => Object.keys(presets), [presets])
  const [deckIndex, setDeckIndex] = useState(
    Math.max(0, presetKeys.indexOf(currentPreset))
  )

  const bezier: CubicBezier = useMemo(
    () => ({ x1, y1, x2, y2 }),
    [x1, y1, x2, y2]
  )

  const updateBezier = useCallback(
    (newBezier: CubicBezier) => {
      setX1(newBezier.x1)
      setY1(newBezier.y1)
      setX2(newBezier.x2)
      setY2(newBezier.y2)
      setCurrentPreset("custom")
    },
    [setX1, setY1, setX2, setY2, setCurrentPreset]
  )

  const applyPreset = useCallback(
    (presetKey: string) => {
      const preset = presets[presetKey]
      if (preset) {
        setX1(preset.bezier.x1)
        setY1(preset.bezier.y1)
        setX2(preset.bezier.x2)
        setY2(preset.bezier.y2)
        setCurrentPreset(presetKey)
        const index = presetKeys.indexOf(presetKey)
        if (index >= 0) setDeckIndex(index)
      }
    },
    [presets, presetKeys, setX1, setY1, setX2, setY2, setCurrentPreset]
  )

  const reset = useCallback(() => {
    applyPreset("smooth")
    setDeckIndex(presetKeys.indexOf("smooth"))
  }, [applyPreset, presetKeys])

  const saveItem = useCallback(() => {
    const newItem: SavedEasing = {
      id: crypto.randomUUID(),
      name: `Easing ${savedItems.length + 1}`,
      bezier: { ...bezier },
      createdAt: Date.now(),
    }
    setSavedItems((prev) => [...prev, newItem])
    setSidebarTab("saved")
  }, [bezier, savedItems.length, setSidebarTab])

  const deleteItem = useCallback((id: string) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const renameItem = useCallback((id: string, name: string) => {
    setSavedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name } : item))
    )
  }, [])

  const loadItem = useCallback(
    (item: SavedEasing) => {
      setX1(item.bezier.x1)
      setY1(item.bezier.y1)
      setX2(item.bezier.x2)
      setY2(item.bezier.y2)
      setCurrentPreset("custom")
    },
    [setX1, setY1, setX2, setY2, setCurrentPreset]
  )

  // Generated code
  const generatedCSS = useMemo(() => generateEasingCSS(bezier), [bezier])
  const generatedTailwind = useMemo(
    () => generateTailwindV4Easing(bezier),
    [bezier]
  )
  const generatedFramer = useMemo(
    () => generateFramerMotionEasing(bezier),
    [bezier]
  )
  const generatedJSON = useMemo(() => generateEasingJSON(bezier), [bezier])

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Easing Composer"
            description="Create custom CSS easing curves"
          />

          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) =>
                setSidebarTab(v as (typeof sidebarTabs)[number])
              }
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="curve" icon={Settings}>
                  Curve
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
                  <Deck className="h-80 w-full max-w-xs">
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
                              "--brand": "oklch(0.646 0.222 41.116)",
                            } as React.CSSProperties
                          }
                        >
                          <div className="relative flex size-full flex-col bg-[oklch(1_0_0)] text-[oklch(0.145_0_0)]">
                            {/* Info button */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <button
                                  type="button"
                                  className="absolute top-4 right-4 z-10 flex size-6 items-center justify-center rounded-full border bg-white shadow-xs hover:bg-[oklch(0.965_0_0)]"
                                  style={{ borderColor: "oklch(0.922 0 0)" }}
                                >
                                  <Info className="size-3 text-[oklch(0.45_0_0)]" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2">
                                    <PresetCurvePreview
                                      bezier={preset.bezier}
                                    />
                                    {preset.label}
                                  </DialogTitle>
                                  <DialogDescription>
                                    {preset.description}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="bg-muted/50 rounded-lg border p-3">
                                  <p className="text-foreground text-xs font-medium">
                                    Curve values:
                                  </p>
                                  <code className="text-muted-foreground mt-1 block font-mono text-xs">
                                    cubic-bezier({preset.bezier.x1},{" "}
                                    {preset.bezier.y1}, {preset.bezier.x2},{" "}
                                    {preset.bezier.y2})
                                  </code>
                                  <p className="text-foreground mt-2 text-xs font-medium">
                                    Best for:
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {preset.category === "standard" &&
                                      "General purpose UI animations and transitions"}
                                    {preset.category === "emphasis" &&
                                      "Drawing attention to important elements"}
                                    {preset.category === "material" &&
                                      "Material Design style interactions"}
                                    {preset.category === "expressive" &&
                                      "Playful and dynamic interfaces"}
                                    {preset.category === "smooth" &&
                                      "Subtle, elegant transitions"}
                                  </p>
                                </div>
                              </DialogContent>
                            </Dialog>

                            <div className="relative flex flex-1 items-center justify-center p-6">
                              <div className="absolute size-32 rounded-full bg-[oklch(0.965_0_0)] blur-3xl" />
                              <div className="relative">
                                <PresetCurvePreview bezier={preset.bezier} />
                              </div>
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
                      ))}
                    </DeckCards>
                    <DeckEmpty>
                      <div className="text-center">
                        <p className="text-sm font-medium">
                          All presets explored!
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            setDeckIndex(0)
                            if (presetKeys[0]) applyPreset(presetKeys[0])
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
                                if (presetKeys[prevIndex])
                                  applyPreset(presetKeys[prevIndex])
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
                                if (presetKeys[newIndex])
                                  applyPreset(presetKeys[newIndex])
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

              {/* Curve Tab */}
              <ToolLayoutTabsContent value="curve">
                {/* Preset selector & controls */}
                <div className="flex items-center gap-1">
                  <PresetSelector
                    presets={presets}
                    currentPreset={currentPreset}
                    bezier={bezier}
                    onSelect={applyPreset}
                    onSave={saveItem}
                    savedItems={savedItems}
                    onLoadSavedItem={loadItem}
                  />

                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={reset}
                          className="size-8 shrink-0 shadow-2xs"
                        >
                          <RotateCcw className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Reset to defaults</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <AIJsonEditor
                    value={bezier}
                    onChange={(newBezier) => {
                      setX1(newBezier.x1)
                      setY1(newBezier.y1)
                      setX2(newBezier.x2)
                      setY2(newBezier.y2)
                      setCurrentPreset("custom")
                    }}
                    title="Edit Easing JSON"
                    description="Edit the bezier curve values directly or use ChatGPT to modify"
                    tooltip="Edit with AI"
                    hints={[
                      "Create bounce or elastic effects (values > 1 or < 0)",
                      "Make easing more aggressive or subtle",
                      "Generate standard easing curves (ease-in, ease-out)",
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

                {/* Bezier curve editor card */}
                <div className="bg-background mt-4 rounded-xl border p-4 shadow-sm">
                  <div className="flex justify-center">
                    <BezierCurveEditor
                      bezier={bezier}
                      onChange={updateBezier}
                      size={180}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <code className="text-muted-foreground font-mono text-xs">
                      cubic-bezier({x1}, {y1}, {x2}, {y2})
                    </code>
                  </div>
                </div>

                {/* Control Points */}
                <div className="mt-4 space-y-3">
                  {/* P1 */}
                  <div className="bg-card rounded-lg border p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Start Control (P1)
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground size-6"
                          >
                            <Info className="size-3.5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Start Control Point (P1)</DialogTitle>
                            <DialogDescription>
                              Controls how the animation begins. The X value
                              (0-1) determines when the curve starts to
                              accelerate, while the Y value controls the initial
                              velocity.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="bg-muted/50 rounded-lg border p-3">
                            <p className="text-foreground text-xs font-medium">
                              Tips:
                            </p>
                            <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
                              <li>
                                • Low X = quick start, high X = delayed start
                              </li>
                              <li>• Y &gt; 1 = overshoot at the beginning</li>
                              <li>
                                • Y &lt; 0 = anticipation (slight reverse first)
                              </li>
                            </ul>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
                          X
                        </label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[x1]}
                            onValueChange={([v]) => {
                              setX1(v)
                              setCurrentPreset("custom")
                            }}
                            min={0}
                            max={1}
                            step={0.01}
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={x1}
                            onChange={(e) => {
                              setX1(parseFloat(e.target.value) || 0)
                              setCurrentPreset("custom")
                            }}
                            min={0}
                            max={1}
                            step={0.01}
                            className="h-7 w-16 font-mono text-xs"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
                          Y
                        </label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[y1]}
                            onValueChange={([v]) => {
                              setY1(v)
                              setCurrentPreset("custom")
                            }}
                            min={-0.5}
                            max={1.5}
                            step={0.01}
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={y1}
                            onChange={(e) => {
                              setY1(parseFloat(e.target.value) || 0)
                              setCurrentPreset("custom")
                            }}
                            min={-0.5}
                            max={1.5}
                            step={0.01}
                            className="h-7 w-16 font-mono text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* P2 */}
                  <div className="bg-card rounded-lg border p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        End Control (P2)
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground size-6"
                          >
                            <Info className="size-3.5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>End Control Point (P2)</DialogTitle>
                            <DialogDescription>
                              Controls how the animation ends. The X value
                              determines when deceleration begins, while the Y
                              value controls the final approach.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="bg-muted/50 rounded-lg border p-3">
                            <p className="text-foreground text-xs font-medium">
                              Tips:
                            </p>
                            <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
                              <li>
                                • Low X = early slowdown, high X = late slowdown
                              </li>
                              <li>• Y &gt; 1 = overshoot before settling</li>
                              <li>• Y &lt; 0 = bounce back effect</li>
                            </ul>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
                          X
                        </label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[x2]}
                            onValueChange={([v]) => {
                              setX2(v)
                              setCurrentPreset("custom")
                            }}
                            min={0}
                            max={1}
                            step={0.01}
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={x2}
                            onChange={(e) => {
                              setX2(parseFloat(e.target.value) || 0)
                              setCurrentPreset("custom")
                            }}
                            min={0}
                            max={1}
                            step={0.01}
                            className="h-7 w-16 font-mono text-xs"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
                          Y
                        </label>
                        <div className="flex items-center gap-2">
                          <Slider
                            value={[y2]}
                            onValueChange={([v]) => {
                              setY2(v)
                              setCurrentPreset("custom")
                            }}
                            min={-0.5}
                            max={1.5}
                            step={0.01}
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            value={y2}
                            onChange={(e) => {
                              setY2(parseFloat(e.target.value) || 0)
                              setCurrentPreset("custom")
                            }}
                            min={-0.5}
                            max={1.5}
                            step={0.01}
                            className="h-7 w-16 font-mono text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-card rounded-lg border p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Duration</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-foreground size-6"
                          >
                            <Info className="size-3.5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Animation Duration</DialogTitle>
                            <DialogDescription>
                              The total time for the animation to complete.
                              Shorter durations feel snappy, longer ones feel
                              more dramatic.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="bg-muted/50 rounded-lg border p-3">
                            <p className="text-foreground text-xs font-medium">
                              Guidelines:
                            </p>
                            <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
                              <li>• 100-200ms: Micro-interactions, hovers</li>
                              <li>• 200-400ms: Standard UI transitions</li>
                              <li>• 400-700ms: Page transitions, modals</li>
                              <li>• 700ms+: Dramatic reveals, onboarding</li>
                            </ul>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="flex items-center gap-2">
                      <Slider
                        value={[duration]}
                        onValueChange={([v]) => setDuration(v)}
                        min={100}
                        max={10000}
                        step={50}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={duration}
                        onChange={(e) =>
                          setDuration(parseInt(e.target.value) || 100)
                        }
                        min={100}
                        max={10000}
                        step={50}
                        className="h-7 w-20 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>
              </ToolLayoutTabsContent>

              {/* Saved Tab */}
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
                    emptyIcon={<EasingIcon className="text-brand size-40" />}
                    emptyText="No saved easings"
                    emptySubtext="Click the save button to save your current easing"
                    renderPreview={(item) => (
                      <PresetCurvePreview bezier={item.bezier} />
                    )}
                    className="h-full"
                  />
                )}
              </ToolLayoutTabsContent>

              {/* Export Tab */}
              <ToolLayoutTabsContent value="export">
                <div className="space-y-2">
                  <CodeBlock
                    code={generatedCSS}
                    language="css"
                    filename="easing.css"
                    height={120}
                  />
                  <CodeBlock
                    code={generatedTailwind}
                    language="css"
                    filename="tailwind v4"
                    height={80}
                  />
                  <CodeBlock
                    code={generatedFramer}
                    language="tsx"
                    filename="framer-motion"
                    height={100}
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
                      a.download = "easing.json"
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
                    filename="easing.json"
                    height={100}
                  />
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
            <div className="flex items-center gap-2">
              <PreviewNavigation
                items={(Object.keys(previewComponents) as PreviewType[]).map(
                  (key) => ({
                    key,
                    label: previewComponents[key].label,
                  })
                )}
                value={selectedPreview}
                onValueChange={(value) =>
                  setSelectedPreview(value as PreviewType)
                }
              />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 shrink-0"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="size-4" fill="currentColor" />
                      ) : (
                        <Play className="size-4" fill="currentColor" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {isPlaying ? "Pause animation" : "Play animation"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </ToolLayoutPreviewHeader>

          <ToolLayoutPreviewContent>
            {(() => {
              const PreviewComponent =
                previewComponents[selectedPreview].component
              return (
                <div
                  className="dark h-full"
                  style={
                    {
                      "--background": "oklch(0.145 0 0)",
                      "--foreground": "oklch(0.985 0 0)",
                      "--card": "oklch(0.205 0 0)",
                      "--card-foreground": "oklch(0.985 0 0)",
                      "--muted": "oklch(0.269 0 0)",
                      "--muted-foreground": "oklch(0.708 0 0)",
                      "--border": "oklch(1 0 0 / 10%)",
                      colorScheme: "dark",
                    } as React.CSSProperties
                  }
                >
                  <PreviewComponent
                    easingCSS={bezierToCSS(bezier)}
                    duration={duration}
                    className="h-full"
                    isPlaying={isPlaying}
                  />
                </div>
              )
            })()}
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
