"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

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
  Type,
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
  generateFontImports,
  generateTailwindV4Typography,
  generateTypographyCSS,
  generateTypographyJSON,
} from "./_components/generate-css"
import { getRatioName, SCALE_RATIOS } from "./_components/scale-ratios"
import {
  calculateTypeScale,
  defaultState,
  POPULAR_FONTS,
  typographyPresets,
} from "./_components/typography-presets"
import type {
  SavedTypography,
  TypographyPreset,
  TypographyState,
} from "./_components/typography-types"

function TypographyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 121 107"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M118.08 82.02V94.27L98.0801 104.27V92.02L106.71 87.71L118.08 82.02Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M93.6101 77.1899L91.3901 78.2999L79.3901 84.2999V65.9199L83.3801 68.2299L90.0701 72.0899V75.1499L91.3901 75.9099L93.6101 77.1899Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M107.23 78.8199L98.7001 83.0799L90.0701 87.3999V90.4599L79.3901 84.2999L91.3901 78.2999L93.6101 77.1899L98.0801 79.7699L103.86 76.8799L107.23 78.8199Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M118.08 57.52V69.77L98.0801 79.77V67.52L99.3901 66.87L109.55 61.79L118.08 57.52Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M71.3899 66.46V75.65L63.3799 79.65V70.46L70.5899 66.86L71.3899 66.46Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M48.9602 48.3496L48.6802 48.4897L44.7002 50.4796V45.8896L48.6802 48.1896L48.9602 48.3496Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M83.3799 42.0796V46.1196L71.3899 52.1096V57.2696L70.5799 57.6696L63.3799 61.2696V52.0796L64.6999 51.4196L66.3199 50.6096L74.8499 46.3496L75.3699 46.0896L83.3799 42.0796Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M83.3799 42.0797L75.3699 46.0897L74.8499 46.3497L66.3199 50.6097L64.6999 51.4197L63.3799 52.0797L59.3799 45.1797L66.5899 41.5697L70.8499 39.4397L79.3799 35.1797L83.3799 42.0797Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M27.06 26.5198L22 23.5998L2 12.0498V48.7998L10 53.4198V44.2298L18.53 49.1598L20.68 50.3998V59.5898L28.68 64.2098V27.4598L27.06 26.5198ZM20.68 41.2098L10 35.0498V25.8598L18.53 30.7798L20.68 32.0198V41.2098Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M20.68 32.0198V41.2098L10 35.0498L18.53 30.7798L20.68 32.0198Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M18.53 30.7799L10 35.0499V25.8599L18.53 30.7799Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M48.6802 17.46V26.09L39.6402 30.61L36.6902 32.08V60.21L28.6802 64.21V27.46L31.6302 25.99L40.1602 21.72L48.6802 17.46Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M48.68 17.4598L40.16 21.7198L31.63 25.9898L28.68 27.4598L27.06 26.5198L22 23.5998L2 12.0498L22 2.0498L48.68 17.4598Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M18.53 49.16L10 53.42V44.23L18.53 49.16Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M79.3799 35.1796L70.8499 39.4396L66.5899 41.5696L59.3799 45.1796L57.4899 44.0896L56.6899 43.6296L48.6799 38.9996L36.6899 32.0796L39.6399 30.6096L48.6799 26.0896L56.6899 22.0796L79.3799 35.1796Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M71.3899 75.6499V75.9299L59.3799 81.9299L63.3799 79.6499L71.3899 75.6499Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M63.3799 61.2696V52.0796L59.3799 45.1796L57.4899 44.0896L56.6899 43.6296L48.6799 38.9996L36.6899 32.0796V68.8296L59.3799 81.9296L63.3799 79.6496V70.4596L59.3799 63.5496L62.1399 61.9796L63.3799 61.2696ZM55.3699 70.4296L44.6999 64.2696V59.6696L48.9699 62.1396L55.3699 65.8396V70.4296ZM55.3699 56.6496L48.6799 52.7796L44.6999 50.4796V45.8896L48.6799 48.1896L48.9599 48.3496L55.3699 52.0496V56.6496Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M55.3702 65.8396V70.4296L44.7002 64.2696L48.9702 62.1396L55.3702 65.8396Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M48.9702 62.1399L44.7002 64.2699V59.6699L48.9702 62.1399Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M55.3702 52.0496V56.6496L48.6802 52.7796L44.7002 50.4796L48.6802 48.4896L48.9602 48.3496L55.3702 52.0496Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M71.3899 57.27V66.46L70.5899 66.86L63.3799 70.46L59.3799 63.55L62.1399 61.98L63.3799 61.27L70.5799 57.67L71.3899 57.27Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M90.0701 75.1499V72.0899L83.3801 68.2299L79.3901 65.9199V84.2999L90.0701 90.4599V87.3999L98.0801 92.0199V104.27L71.3901 88.8599V52.1099L76.1701 54.8699L82.1401 58.3199L91.3901 63.6599L98.0801 67.5199V79.7699L93.6101 77.1899L91.3901 75.9099L90.0701 75.1499Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M118.08 57.5199L109.55 61.7899L99.3901 66.8699L98.0801 67.5199L91.3901 63.6599L82.1401 58.3199L76.1701 54.8699L71.3901 52.1099L83.3801 46.1199L91.3901 42.1099L118.08 57.5199Z" stroke="currentColor" strokeLinejoin="round"/>
      <path d="M118.08 82.0199L106.71 87.7099L98.0798 92.0199L90.0698 87.3999L98.6998 83.0799L107.23 78.8199L110.07 77.3999L118.08 82.0199Z" stroke="currentColor" strokeLinejoin="round"/>
    </svg>
  )
}

function TypeScaleVisualization({
  state,
  previewText = "Aa",
}: {
  state: TypographyState
  previewText?: string
}) {
  const scale = calculateTypeScale(state)

  return (
    <div className="space-y-1">
      {scale
        .slice()
        .reverse()
        .slice(0, 8)
        .map(({ name, size, cssSize, isHeading }) => (
          <div key={name} className="flex items-baseline gap-2">
            <span className="w-8 text-right font-mono text-[10px] text-muted-foreground">
              {name}
            </span>
            <span
              className="truncate leading-none"
              style={{
                fontSize: `${Math.min(size, 48)}px`,
                fontFamily: isHeading ? state.headingFont : state.bodyFont,
                fontWeight: isHeading ? state.headingWeight : state.bodyWeight,
              }}
            >
              {previewText}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              {cssSize}
            </span>
          </div>
        ))}
    </div>
  )
}

function TypographyPreview({ state }: { state: TypographyState }) {
  const scale = calculateTypeScale(state)
  const getSize = (name: string) =>
    scale.find((s) => s.name === name)?.cssSize || "1rem"

  return (
    <div className="space-y-8 p-6">
      {/* Type Scale */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Type Scale</h3>
        <div className="space-y-3 rounded-lg border bg-card p-4">
          {scale
            .slice()
            .reverse()
            .map(({ name, size, cssSize, isHeading, lineHeight }) => (
              <div key={name} className="flex items-baseline gap-3">
                <span className="w-10 shrink-0 text-right font-mono text-xs text-muted-foreground">
                  {name}
                </span>
                <span
                  className="min-w-0 flex-1 truncate"
                  style={{
                    fontSize: cssSize,
                    fontFamily: isHeading ? state.headingFont : state.bodyFont,
                    fontWeight: isHeading ? state.headingWeight : state.bodyWeight,
                    lineHeight,
                  }}
                >
                  The quick brown fox
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {Math.round(size)}px
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Blog Post Preview */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Blog Post</h3>
        <article className="space-y-4 rounded-lg border bg-card p-6">
          <h1
            style={{
              fontSize: getSize("4xl"),
              fontFamily: state.headingFont,
              fontWeight: state.headingWeight,
              lineHeight: state.headingLineHeight,
              letterSpacing: `${state.headingLetterSpacing}em`,
            }}
          >
            Getting Started with Typography
          </h1>
          <p
            className="text-muted-foreground"
            style={{
              fontSize: getSize("lg"),
              fontFamily: state.bodyFont,
              fontWeight: state.bodyWeight,
              lineHeight: state.bodyLineHeight,
            }}
          >
            A well-crafted type scale brings harmony and rhythm to your designs.
          </p>
          <p
            style={{
              fontSize: getSize("base"),
              fontFamily: state.bodyFont,
              fontWeight: state.bodyWeight,
              lineHeight: state.bodyLineHeight,
            }}
          >
            Typography is the art and technique of arranging type to make written
            language legible, readable, and appealing when displayed. The
            arrangement of type involves selecting typefaces, point sizes, line
            lengths, line-spacing, and letter-spacing.
          </p>
          <h2
            style={{
              fontSize: getSize("2xl"),
              fontFamily: state.headingFont,
              fontWeight: state.headingWeight,
              lineHeight: state.headingLineHeight,
              letterSpacing: `${state.headingLetterSpacing}em`,
            }}
          >
            Understanding Scale Ratios
          </h2>
          <p
            style={{
              fontSize: getSize("base"),
              fontFamily: state.bodyFont,
              fontWeight: state.bodyWeight,
              lineHeight: state.bodyLineHeight,
            }}
          >
            A type scale is a series of font sizes that relate to each other
            through a common ratio. This creates visual consistency and harmony
            throughout your design system.
          </p>
          <h3
            style={{
              fontSize: getSize("xl"),
              fontFamily: state.headingFont,
              fontWeight: state.headingWeight,
              lineHeight: state.headingLineHeight,
              letterSpacing: `${state.headingLetterSpacing}em`,
            }}
          >
            Popular Ratios
          </h3>
          <p
            className="text-muted-foreground"
            style={{
              fontSize: getSize("sm"),
              fontFamily: state.bodyFont,
              lineHeight: state.bodyLineHeight,
            }}
          >
            The most common ratios include Minor Third (1.2), Major Third (1.25),
            Perfect Fourth (1.333), and the Golden Ratio (1.618).
          </p>
        </article>
      </div>

      {/* Card Preview */}
      <div>
        <h3 className="mb-4 text-sm font-medium">Card</h3>
        <div className="max-w-sm rounded-lg border bg-card p-5">
          <h4
            style={{
              fontSize: getSize("lg"),
              fontFamily: state.headingFont,
              fontWeight: state.headingWeight,
              lineHeight: state.headingLineHeight,
            }}
          >
            Card Title
          </h4>
          <p
            className="mt-1 text-muted-foreground"
            style={{
              fontSize: getSize("sm"),
              fontFamily: state.bodyFont,
              lineHeight: state.bodyLineHeight,
            }}
          >
            This is a description of the card content with some additional
            details.
          </p>
          <div className="mt-4 flex gap-2">
            <div
              className="rounded bg-primary px-3 py-1.5 text-primary-foreground"
              style={{
                fontSize: getSize("sm"),
                fontFamily: state.bodyFont,
                fontWeight: 500,
              }}
            >
              Action
            </div>
            <div
              className="rounded border px-3 py-1.5"
              style={{
                fontSize: getSize("sm"),
                fontFamily: state.bodyFont,
              }}
            >
              Secondary
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface TypographyComposerClientProps {
  hasBackgroundDecoration?: boolean
}

const unitTypes = ["px", "rem"] as const
const tabTypes = ["explore", "scale", "fonts", "saved", "export"] as const

export default function TypographyComposerClient({
  hasBackgroundDecoration = true,
}: TypographyComposerClientProps = {}) {
  const presets = typographyPresets
  const initialState = defaultState
  // URL state with nuqs
  const [baseSize, setBaseSize] = useQueryState(
    "base",
    parseAsInteger.withDefault(initialState.baseSize)
  )
  const [scaleRatio, setScaleRatio] = useQueryState(
    "ratio",
    parseAsFloat.withDefault(initialState.scaleRatio)
  )
  const [unit, setUnit] = useQueryState(
    "unit",
    parseAsStringLiteral(unitTypes).withDefault(initialState.unit)
  )
  const [bodyFont, setBodyFont] = useQueryState(
    "body",
    parseAsString.withDefault(initialState.bodyFont)
  )
  const [bodyWeight, setBodyWeight] = useQueryState(
    "bw",
    parseAsInteger.withDefault(initialState.bodyWeight)
  )
  const [bodyLineHeight, setBodyLineHeight] = useQueryState(
    "blh",
    parseAsFloat.withDefault(initialState.bodyLineHeight)
  )
  const [bodyLetterSpacing, setBodyLetterSpacing] = useQueryState(
    "bls",
    parseAsFloat.withDefault(initialState.bodyLetterSpacing)
  )
  const [headingFont, setHeadingFont] = useQueryState(
    "heading",
    parseAsString.withDefault(initialState.headingFont)
  )
  const [headingWeight, setHeadingWeight] = useQueryState(
    "hw",
    parseAsInteger.withDefault(initialState.headingWeight)
  )
  const [headingLineHeight, setHeadingLineHeight] = useQueryState(
    "hlh",
    parseAsFloat.withDefault(initialState.headingLineHeight)
  )
  const [headingLetterSpacing, setHeadingLetterSpacing] = useQueryState(
    "hls",
    parseAsFloat.withDefault(initialState.headingLetterSpacing)
  )
  const [stepsUp, setStepsUp] = useQueryState(
    "up",
    parseAsInteger.withDefault(initialState.stepsUp)
  )
  const [stepsDown, setStepsDown] = useQueryState(
    "down",
    parseAsInteger.withDefault(initialState.stepsDown)
  )
  const [currentPreset, setCurrentPreset] = useQueryState(
    "preset",
    parseAsString.withDefault("default")
  )
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(tabTypes).withDefault("scale")
  )
  const [savedItems, setSavedItems, isHydrated] = useLocalStorage<SavedTypography[]>(STORAGE_KEYS.TYPOGRAPHY_COMPOSER, [])
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

  // Derived state object for calculations
  const state: TypographyState = useMemo(
    () => ({
      baseSize,
      scaleRatio,
      unit,
      bodyFont,
      bodyWeight,
      bodyLineHeight,
      bodyLetterSpacing,
      headingFont,
      headingWeight,
      headingLineHeight,
      headingLetterSpacing,
      stepsUp,
      stepsDown,
    }),
    [
      baseSize,
      scaleRatio,
      unit,
      bodyFont,
      bodyWeight,
      bodyLineHeight,
      bodyLetterSpacing,
      headingFont,
      headingWeight,
      headingLineHeight,
      headingLetterSpacing,
      stepsUp,
      stepsDown,
    ]
  )

  const presetKeys = useMemo(() => Object.keys(presets), [presets])
  const [deckIndex, setDeckIndex] = useState(
    Math.max(0, presetKeys.indexOf(currentPreset))
  )

  // Load Google Fonts
  useEffect(() => {
    const fonts = new Set([state.bodyFont, state.headingFont])
    fonts.forEach((font) => {
      const link = document.createElement("link")
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:wght@300;400;500;600;700;800&display=swap`
      link.rel = "stylesheet"
      document.head.appendChild(link)
    })
  }, [state.bodyFont, state.headingFont])

  const updateState = useCallback(
    <K extends keyof TypographyState>(key: K, value: TypographyState[K]) => {
      switch (key) {
        case "baseSize":
          setBaseSize(value as number)
          break
        case "scaleRatio":
          setScaleRatio(value as number)
          break
        case "unit":
          setUnit(value as "px" | "rem")
          break
        case "bodyFont":
          setBodyFont(value as string)
          break
        case "bodyWeight":
          setBodyWeight(value as number)
          break
        case "bodyLineHeight":
          setBodyLineHeight(value as number)
          break
        case "bodyLetterSpacing":
          setBodyLetterSpacing(value as number)
          break
        case "headingFont":
          setHeadingFont(value as string)
          break
        case "headingWeight":
          setHeadingWeight(value as number)
          break
        case "headingLineHeight":
          setHeadingLineHeight(value as number)
          break
        case "headingLetterSpacing":
          setHeadingLetterSpacing(value as number)
          break
        case "stepsUp":
          setStepsUp(value as number)
          break
        case "stepsDown":
          setStepsDown(value as number)
          break
      }
      setCurrentPreset("custom")
    },
    [
      setBaseSize,
      setScaleRatio,
      setUnit,
      setBodyFont,
      setBodyWeight,
      setBodyLineHeight,
      setBodyLetterSpacing,
      setHeadingFont,
      setHeadingWeight,
      setHeadingLineHeight,
      setHeadingLetterSpacing,
      setStepsUp,
      setStepsDown,
      setCurrentPreset,
    ]
  )

  const applyPreset = useCallback(
    (presetKey: string) => {
      const preset = presets[presetKey]
      if (preset) {
        const s = preset.state
        setBaseSize(s.baseSize)
        setScaleRatio(s.scaleRatio)
        setUnit(s.unit)
        setBodyFont(s.bodyFont)
        setBodyWeight(s.bodyWeight)
        setBodyLineHeight(s.bodyLineHeight)
        setBodyLetterSpacing(s.bodyLetterSpacing)
        setHeadingFont(s.headingFont)
        setHeadingWeight(s.headingWeight)
        setHeadingLineHeight(s.headingLineHeight)
        setHeadingLetterSpacing(s.headingLetterSpacing)
        setStepsUp(s.stepsUp)
        setStepsDown(s.stepsDown)
        setCurrentPreset(presetKey)
        const index = presetKeys.indexOf(presetKey)
        if (index >= 0) {
          setDeckIndex(index)
        }
      }
    },
    [
      presets,
      presetKeys,
      setBaseSize,
      setScaleRatio,
      setUnit,
      setBodyFont,
      setBodyWeight,
      setBodyLineHeight,
      setBodyLetterSpacing,
      setHeadingFont,
      setHeadingWeight,
      setHeadingLineHeight,
      setHeadingLetterSpacing,
      setStepsUp,
      setStepsDown,
      setCurrentPreset,
    ]
  )

  const randomize = useCallback(() => {
    const keys = Object.keys(presets)
    const random = keys[Math.floor(Math.random() * keys.length)]
    applyPreset(random)
  }, [presets, applyPreset])

  const resetState = useCallback(() => {
    setBaseSize(initialState.baseSize)
    setScaleRatio(initialState.scaleRatio)
    setUnit(initialState.unit)
    setBodyFont(initialState.bodyFont)
    setBodyWeight(initialState.bodyWeight)
    setBodyLineHeight(initialState.bodyLineHeight)
    setBodyLetterSpacing(initialState.bodyLetterSpacing)
    setHeadingFont(initialState.headingFont)
    setHeadingWeight(initialState.headingWeight)
    setHeadingLineHeight(initialState.headingLineHeight)
    setHeadingLetterSpacing(initialState.headingLetterSpacing)
    setStepsUp(initialState.stepsUp)
    setStepsDown(initialState.stepsDown)
    setCurrentPreset("default")
    setDeckIndex(0)
  }, [
    initialState,
    setBaseSize,
    setScaleRatio,
    setUnit,
    setBodyFont,
    setBodyWeight,
    setBodyLineHeight,
    setBodyLetterSpacing,
    setHeadingFont,
    setHeadingWeight,
    setHeadingLineHeight,
    setHeadingLetterSpacing,
    setStepsUp,
    setStepsDown,
    setCurrentPreset,
  ])

  const saveItem = useCallback(() => {
    const newItem: SavedTypography = {
      id: crypto.randomUUID(),
      name: `Typography ${savedItems.length + 1}`,
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
    (item: SavedTypography) => {
      const s = item.state
      setBaseSize(s.baseSize)
      setScaleRatio(s.scaleRatio)
      setUnit(s.unit)
      setBodyFont(s.bodyFont)
      setBodyWeight(s.bodyWeight)
      setBodyLineHeight(s.bodyLineHeight)
      setBodyLetterSpacing(s.bodyLetterSpacing)
      setHeadingFont(s.headingFont)
      setHeadingWeight(s.headingWeight)
      setHeadingLineHeight(s.headingLineHeight)
      setHeadingLetterSpacing(s.headingLetterSpacing)
      setStepsUp(s.stepsUp)
      setStepsDown(s.stepsDown)
      setCurrentPreset("custom")
    },
    [
      setBaseSize,
      setScaleRatio,
      setUnit,
      setBodyFont,
      setBodyWeight,
      setBodyLineHeight,
      setBodyLetterSpacing,
      setHeadingFont,
      setHeadingWeight,
      setHeadingLineHeight,
      setHeadingLetterSpacing,
      setStepsUp,
      setStepsDown,
      setCurrentPreset,
    ]
  )

  const generatedCSS = useMemo(() => generateTypographyCSS(state), [state])
  const generatedTailwind = useMemo(
    () => generateTailwindV4Typography(state),
    [state]
  )
  const generatedImports = useMemo(() => generateFontImports(state), [state])
  const generatedJSON = useMemo(() => generateTypographyJSON(state), [state])

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Typography Composer"
            description="Design type scales and font pairings"
          />

          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) =>
                setSidebarTab(
                  v as "explore" | "scale" | "fonts" | "saved" | "export"
                )
              }
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="scale" icon={Settings}>
                  Scale
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="fonts" icon={Type}>
                  Fonts
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
                            <div className="mb-3 flex-1 overflow-hidden">
                              <TypeScaleVisualization
                                state={preset.state}
                                previewText="Ag"
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
                        <p className="text-sm font-medium">
                          All presets explored!
                        </p>
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

              <ToolLayoutTabsContent value="scale">
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
                      updateState("scaleRatio", newState.scaleRatio)
                      updateState("unit", newState.unit)
                      updateState("bodyFont", newState.bodyFont)
                      updateState("bodyWeight", newState.bodyWeight)
                      updateState("bodyLineHeight", newState.bodyLineHeight)
                      updateState("bodyLetterSpacing", newState.bodyLetterSpacing)
                      updateState("headingFont", newState.headingFont)
                      updateState("headingWeight", newState.headingWeight)
                      updateState("headingLineHeight", newState.headingLineHeight)
                      updateState("headingLetterSpacing", newState.headingLetterSpacing)
                      updateState("stepsUp", newState.stepsUp)
                      updateState("stepsDown", newState.stepsDown)
                    }}
                    title="Edit Typography JSON"
                    description="Edit the typography values directly or use ChatGPT to modify"
                    tooltip="Edit with AI"
                    hints={[
                      "Change font families for body or headings",
                      "Adjust scale ratio (e.g., major third 1.25)",
                      "Modify line heights for better readability",
                      "Adjust letter spacing for different styles",
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
                    <SliderRow
                      label="Base Size"
                      value={state.baseSize}
                      onChange={(v) => updateState("baseSize", v)}
                      min={12}
                      max={24}
                      step={1}
                      unit="px"
                    />

                    <div className="space-y-2">
                      <Label className="text-xs">Scale Ratio</Label>
                      <Select
                        value={String(state.scaleRatio)}
                        onValueChange={(v) =>
                          updateState("scaleRatio", parseFloat(v))
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue>
                            {getRatioName(state.scaleRatio)}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {SCALE_RATIOS.map((ratio) => (
                            <SelectItem
                              key={ratio.value}
                              value={String(ratio.value)}
                              className="text-xs"
                            >
                              {ratio.name} ({ratio.value})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <SliderRow
                      label="Steps Up"
                      value={state.stepsUp}
                      onChange={(v) => updateState("stepsUp", v)}
                      min={4}
                      max={8}
                      step={1}
                    />

                    <SliderRow
                      label="Steps Down"
                      value={state.stepsDown}
                      onChange={(v) => updateState("stepsDown", v)}
                      min={1}
                      max={3}
                      step={1}
                    />
                  </div>
                </ControlSection>
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="fonts">
                <ControlSection title="Body Text" defaultExpanded>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Font Family</Label>
                      <Select
                        value={state.bodyFont}
                        onValueChange={(v) => updateState("bodyFont", v)}
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {POPULAR_FONTS.map((font) => (
                            <SelectItem key={font} value={font} className="text-xs">
                              {font}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs">Weight</Label>
                      <Select
                        value={String(state.bodyWeight)}
                        onValueChange={(v) =>
                          updateState("bodyWeight", parseInt(v))
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[300, 400, 500, 600, 700].map((w) => (
                            <SelectItem
                              key={w}
                              value={String(w)}
                              className="text-xs"
                            >
                              {w}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <SliderRow
                      label="Line Height"
                      value={state.bodyLineHeight}
                      onChange={(v) => updateState("bodyLineHeight", v)}
                      min={1.2}
                      max={2}
                      step={0.05}
                    />

                    <SliderRow
                      label="Letter Spacing"
                      value={state.bodyLetterSpacing}
                      onChange={(v) => updateState("bodyLetterSpacing", v)}
                      min={-0.05}
                      max={0.1}
                      step={0.005}
                      unit="em"
                    />
                  </div>
                </ControlSection>

                <ControlSection title="Headings" defaultExpanded>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Font Family</Label>
                      <Select
                        value={state.headingFont}
                        onValueChange={(v) => updateState("headingFont", v)}
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {POPULAR_FONTS.map((font) => (
                            <SelectItem key={font} value={font} className="text-xs">
                              {font}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs">Weight</Label>
                      <Select
                        value={String(state.headingWeight)}
                        onValueChange={(v) =>
                          updateState("headingWeight", parseInt(v))
                        }
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[400, 500, 600, 700, 800].map((w) => (
                            <SelectItem
                              key={w}
                              value={String(w)}
                              className="text-xs"
                            >
                              {w}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <SliderRow
                      label="Line Height"
                      value={state.headingLineHeight}
                      onChange={(v) => updateState("headingLineHeight", v)}
                      min={1}
                      max={1.5}
                      step={0.05}
                    />

                    <SliderRow
                      label="Letter Spacing"
                      value={state.headingLetterSpacing}
                      onChange={(v) => updateState("headingLetterSpacing", v)}
                      min={-0.05}
                      max={0.05}
                      step={0.005}
                      unit="em"
                    />
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
                    emptyIcon={<TypographyIcon className="size-40 text-brand" />}
                    emptyText="No saved scales yet"
                    emptySubtext="Click the save button to save your current scale"
                    renderPreview={(item) => (
                      <div
                        className="text-lg font-semibold"
                        style={{ fontFamily: item.state.headingFont }}
                      >
                        Aa
                      </div>
                    )}
                    className="h-full"
                  />
                )}
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="export">
                <div className="space-y-2">
                  <CodeBlock
                    code={generatedImports}
                    language="css"
                    filename="font-imports.css"
                    height={60}
                  />
                  <CodeBlock
                    code={generatedCSS}
                    language="css"
                    filename="typography.css"
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
                      a.download = "typography.json"
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
                    filename="typography.json"
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
              <TypographyPreview state={state} />
            </div>
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
