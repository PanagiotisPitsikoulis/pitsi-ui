"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { Check, ChevronDown } from "@/lib/icons"
import { PixelatedImage } from "@/components/effects"
import { CodeBlock, SliderRow } from "@/components/tools"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Parallax Bento Card component with pixelated background
function ParallaxBentoCard({
  backgroundImage,
  children,
}: {
  backgroundImage: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div
      ref={ref}
      className="relative h-[340px] overflow-hidden rounded-[2rem] border shadow-sm"
    >
      {/* Parallax pixelated background */}
      <motion.div
        className="absolute inset-0 -top-[20%] h-[140%] w-full"
        style={{ y }}
      >
        <PixelatedImage
          src={backgroundImage}
          className="h-full w-full"
          pixelSize={24}
        />
      </motion.div>
      {/* Content overlay */}
      <div className="relative z-10 flex h-full items-center justify-center overflow-hidden p-4">
        {children}
      </div>
    </div>
  )
}

// Actual theme presets from theme generator tool (brand, complementary, tint)
const themePresets = [
  { key: "slate", label: "Slate", colors: ["#2d2d2d", "#777777", "#fefefe"] },
  { key: "azure", label: "Azure", colors: ["#5c8ac4", "#c4915c", "#f8fafc"] },
  {
    key: "azure-tinted",
    label: "Azure Tinted",
    colors: ["#5c8ac4", "#ffffff", "#f8fafc"],
  },
  {
    key: "azure-deep",
    label: "Azure Deep",
    colors: ["#8eb3d4", "#d4b38e", "#1a2332"],
  },
  { key: "violet", label: "Violet", colors: ["#8c6dc4", "#8cb85c", "#faf8fc"] },
  {
    key: "violet-tinted",
    label: "Violet Tinted",
    colors: ["#8c6dc4", "#ffffff", "#faf8fc"],
  },
  {
    key: "violet-deep",
    label: "Violet Deep",
    colors: ["#b097d4", "#b0d48e", "#251a32"],
  },
  { key: "rose", label: "Rose", colors: ["#c45c7e", "#5cb89e", "#fcf8fa"] },
  {
    key: "rose-tinted",
    label: "Rose Tinted",
    colors: ["#c45c7e", "#ffffff", "#fcf8fa"],
  },
  {
    key: "rose-deep",
    label: "Rose Deep",
    colors: ["#d48ea8", "#8ed4c2", "#321a25"],
  },
  { key: "sage", label: "Sage", colors: ["#5cb87e", "#a85cb8", "#f8fcf9"] },
  { key: "amber", label: "Amber", colors: ["#c4a15c", "#5c6dc4", "#fcfbf8"] },
  { key: "cyan", label: "Cyan", colors: ["#5cb4b8", "#c4665c", "#f8fcfc"] },
  { key: "indigo", label: "Indigo", colors: ["#5c6fc4", "#c4a85c", "#f8f9fc"] },
  { key: "coral", label: "Coral", colors: ["#c4705c", "#5c9ac4", "#fcf9f8"] },
  { key: "forest", label: "Forest", colors: ["#5cb870", "#b85c9c", "#f8fcf9"] },
]

// Ready-Made Presets - Theme presets combobox
function ThemePresetsPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex min-h-[260px] items-center justify-center">
      <div className="bg-background w-[220px] overflow-hidden rounded-3xl border shadow-lg">
        <button className="flex w-full items-center justify-between gap-2 border-b px-4 py-3 text-left">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {themePresets[selectedIndex].colors.map((color, i) => (
                <div
                  key={i}
                  className="border-background size-4 rounded-full border-2"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="text-sm font-medium">
              {themePresets[selectedIndex].label}
            </span>
          </div>
          <ChevronDown className="text-muted-foreground size-4" />
        </button>
        <ScrollArea className="h-[180px]">
          <div className="p-1.5">
            {themePresets.map((preset, index) => (
              <button
                key={preset.key}
                onClick={() => setSelectedIndex(index)}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  index === selectedIndex ? "bg-accent" : "hover:bg-accent/50"
                }`}
              >
                <div className="flex -space-x-1">
                  {preset.colors.map((color, i) => (
                    <div
                      key={i}
                      className="border-background size-4 rounded-full border-2"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="flex-1 text-sm font-medium">
                  {preset.label}
                </span>
                {index === selectedIndex && (
                  <Check className="size-3.5 opacity-70" />
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

// Advanced Controls - Shadow composer controls
function ShadowControlsPreview() {
  const [blur, setBlur] = useState(12)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(8)
  const [opacity, setOpacity] = useState(0.15)

  const shadowValue = `${offsetX}px ${offsetY}px ${blur}px rgba(0,0,0,${opacity})`

  return (
    <div className="bg-background flex h-full w-full flex-col rounded-3xl border p-6 shadow-lg">
      <div className="flex flex-1 items-center justify-center">
        <div
          className="size-14 rounded-2xl bg-white"
          style={{ boxShadow: shadowValue }}
        />
      </div>
      <div className="space-y-1.5">
        <SliderRow
          label="Blur"
          value={blur}
          onChange={setBlur}
          min={0}
          max={48}
          step={1}
          unit="px"
        />
        <SliderRow
          label="Offset X"
          value={offsetX}
          onChange={setOffsetX}
          min={-24}
          max={24}
          step={1}
          unit="px"
        />
        <SliderRow
          label="Offset Y"
          value={offsetY}
          onChange={setOffsetY}
          min={-24}
          max={24}
          step={1}
          unit="px"
        />
        <SliderRow
          label="Opacity"
          value={opacity}
          onChange={setOpacity}
          min={0}
          max={1}
          step={0.01}
          unit=""
        />
      </div>
    </div>
  )
}

// Export formats matching actual tool output (CSS, Tailwind, Figma)
const exportTabs = [
  {
    key: "css",
    label: "CSS",
    code: `@theme {
  --color-primary: oklch(0.6 0.18 250);
  --color-primary-foreground: oklch(0.98 0 0);
  --color-secondary: oklch(0.96 0.02 250);
  --color-destructive: oklch(0.55 0.22 25);
  --color-background: oklch(0.995 0 0);
  --color-foreground: oklch(0.13 0.02 250);
  --color-muted: oklch(0.96 0.01 250);
  --color-border: oklch(0.92 0.01 250);
  --radius: 0.625rem;
  --shadow-sm: 0 1px 2px 0 oklch(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px oklch(0 0 0 / 0.1);
}`,
    language: "css",
    filename: "theme.css",
  },
  {
    key: "tailwind",
    label: "Tailwind",
    code: `/* Tailwind CSS v4 */
@theme {
  --color-primary: oklch(0.6 0.18 250);
  --color-secondary: oklch(0.96 0.02 250);
  --color-accent: oklch(0.92 0.04 250);
  --color-background: oklch(0.995 0 0);
  --color-foreground: oklch(0.13 0.02 250);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.625rem;
}`,
    language: "css",
    filename: "tailwind.css",
  },
  {
    key: "figma",
    label: "Figma",
    code: `{
  "colors": {
    "primary": {
      "value": "#4F46E5",
      "type": "color"
    },
    "secondary": {
      "value": "#F3F4F6",
      "type": "color"
    },
    "background": {
      "value": "#FFFFFF",
      "type": "color"
    },
    "foreground": {
      "value": "#111827",
      "type": "color"
    }
  }
}`,
    language: "json",
    filename: "figma-tokens.json",
  },
]

// Export Anywhere - Minimal code preview with integrated tabs
function ExportCodePreview() {
  const [activeTab, setActiveTab] = useState(2)

  return (
    <div className="flex h-full w-full flex-col">
      {/* Floating tabs */}
      <div className="bg-background/80 mx-auto mb-2 flex w-fit gap-0.5 rounded-lg p-1 backdrop-blur">
        {exportTabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(index)}
            className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-colors ${
              index === activeTab
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Code block */}
      <div className="w-full flex-1 overflow-hidden">
        <CodeBlock
          code={exportTabs[activeTab].code}
          language={exportTabs[activeTab].language}
          filename={exportTabs[activeTab].filename}
          height={220}
          className="rounded-2xl shadow-lg [&_figcaption]:border-b-0"
        />
      </div>
    </div>
  )
}

const capabilities = [
  {
    title: "Ready-Made Presets",
    description: "Start with curated presets from popular design systems",
    preview: ThemePresetsPreview,
    backgroundImage: "/colors/blue/portrait/1.webp",
  },
  {
    title: "Advanced Controls",
    description: "Simple UI consistent across all tools — no learning curve",
    preview: ShadowControlsPreview,
    backgroundImage: "/colors/blue/portrait/2.webp",
  },
  {
    title: "Export Anywhere",
    description: "CSS, Tailwind, Figma, JSON — configure once, use everywhere",
    preview: ExportCodePreview,
    backgroundImage: "/colors/blue/portrait/3.webp",
  },
]

export function WhatToolsDoSection() {
  return (
    <section className="container px-6">
      <div className="text-center">
        <p className="text-brand text-sm font-semibold tracking-wider uppercase">
          Capabilities
        </p>
        <Spacer size="sm" />
        <h2 className="display text-3xl tracking-tight md:text-5xl">
          Design systems in minutes
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Stop guessing. Start generating.
        </p>
      </div>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((cap) => (
          <div key={cap.title} className="flex flex-col gap-3">
            {/* Preview Card with Parallax Background */}
            <ParallaxBentoCard backgroundImage={cap.backgroundImage}>
              <cap.preview />
            </ParallaxBentoCard>
            {/* Description Card */}
            <div className="bg-background rounded-[2rem] border p-6 text-center shadow-xs">
              <h3 className="text-lg font-semibold">{cap.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {cap.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
