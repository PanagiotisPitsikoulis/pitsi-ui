"use client"

import { useState } from "react"
import { ArrowRight, Check, ChevronDown, Copy, RotateCcw } from "lucide-react"

import { Deck, DeckCards, DeckItem } from "@/components/kibo-ui/deck"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

// Actual theme config data
const themeConfigData = {
  primary: "oklch(0.65 0.15 230)",
  secondary: "oklch(0.96 0 0)",
  accent: "oklch(0.96 0 0)",
  destructive: "oklch(0.6 0.3 25)",
  background: "oklch(0.995 0 0)",
  foreground: "oklch(0.13 0 0)",
  radius: "0.75rem",
}

// Sample presets with colors
const samplePresets = [
  { key: "tailwind", label: "Tailwind", colors: ["#3b82f6", "#8b5cf6", "#ec4899"] },
  { key: "radix", label: "Radix", colors: ["#0091ff", "#7c66dc", "#e93d82"] },
  { key: "shadcn", label: "shadcn/ui", colors: ["#18181b", "#71717a", "#fafafa"] },
  { key: "material", label: "Material", colors: ["#6200ee", "#03dac6", "#cf6679"] },
]

// AI Editor Preview - Shows dialog-like UI inline
function AIEditorPreview() {
  const jsonValue = JSON.stringify(themeConfigData, null, 2)

  return (
    <div className="flex h-[340px] w-full max-w-sm flex-col overflow-hidden rounded-2xl border bg-background shadow-lg">
      {/* Dialog Header */}
      <div className="border-b px-4 py-3">
        <h3 className="text-base font-semibold">Edit with AI</h3>
        <p className="text-xs text-muted-foreground">Edit the JSON directly or copy to use with AI</p>
      </div>

      {/* Dialog Content */}
      <div className="flex flex-1 flex-col space-y-3 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Theme Configuration</p>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="size-7">
              <Copy className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="size-7">
              <RotateCcw className="size-3.5" />
            </Button>
          </div>
        </div>

        <Textarea
          value={jsonValue}
          readOnly
          className="flex-1 font-mono text-xs"
        />

        <div className="rounded-lg border bg-muted/50 p-3">
          <p className="text-xs font-medium mb-1">Use with any AI:</p>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            <li>• "Make the primary color warmer"</li>
            <li>• "Increase contrast for accessibility"</li>
            <li>• "Generate a dark mode variant"</li>
          </ul>
        </div>
      </div>

      {/* Dialog Footer */}
      <div className="flex justify-end gap-2 border-t px-4 py-3">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Apply Changes</Button>
      </div>
    </div>
  )
}

// Shadow presets for the deck
const shadowPresets = [
  {
    key: "soft",
    label: "Soft",
    shadow: "0 3px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
  },
  {
    key: "elevated",
    label: "Elevated",
    shadow: "0 10px 30px rgba(0,0,0,0.12), 0 30px 60px rgba(0,0,0,0.08)",
  },
  {
    key: "medium",
    label: "Medium",
    shadow: "0 2px 5px rgba(10,37,64,0.08), 0 10px 30px rgba(10,37,64,0.12)",
  },
  {
    key: "dramatic",
    label: "Dramatic",
    shadow: "0 8px 16px rgba(10,37,64,0.08), 0 24px 56px rgba(10,37,64,0.15)",
  },
  {
    key: "modal",
    label: "Modal",
    shadow: "0 4px 12px rgba(23,23,23,0.08), 0 16px 32px rgba(23,23,23,0.12)",
  },
  {
    key: "brutal",
    label: "Brutal",
    shadow: "4px 4px 0px rgba(0,0,0,1)",
  },
]

// Preset Selector Preview - Shows swipable deck with combobox overlay
function PresetSelectorPreview() {
  const [deckIndex, setDeckIndex] = useState(0)

  return (
    <div className="relative flex h-[340px] w-full flex-col items-center justify-center">
      {/* Combobox Overlay - Top Right */}
      <div className="absolute right-0 top-0 z-20 w-[180px] overflow-hidden rounded-lg border bg-background shadow-xl">
        <button className="flex w-full items-center justify-between gap-2 border-b px-3 py-2 text-left">
          <div className="flex items-center gap-2">
            <div
              className="size-4 rounded border bg-white"
              style={{ boxShadow: shadowPresets[deckIndex].shadow }}
            />
            <span className="text-xs font-medium">{shadowPresets[deckIndex].label}</span>
          </div>
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </button>
        <div className="max-h-[140px] overflow-y-auto p-1">
          {shadowPresets.map((preset, index) => (
            <button
              key={preset.key}
              onClick={() => setDeckIndex(index)}
              className={`flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left transition-colors ${
                index === deckIndex ? "bg-accent" : "hover:bg-accent/50"
              }`}
            >
              <div
                className="size-4 shrink-0 rounded border bg-white"
                style={{ boxShadow: preset.shadow }}
              />
              <div className="min-w-0 flex-1">
                <span className="block truncate text-xs font-medium">{preset.label}</span>
              </div>
              {index === deckIndex && <Check className="size-3 shrink-0 opacity-70" />}
            </button>
          ))}
        </div>
      </div>

      {/* Swipable Deck - Centered */}
      <Deck className="h-52 w-full max-w-[240px]">
        <DeckCards
          currentIndex={deckIndex}
          onCurrentIndexChange={setDeckIndex}
        >
          {shadowPresets.map((preset) => (
            <DeckItem
              key={preset.key}
              className="overflow-hidden rounded-2xl border p-0 shadow-xs"
            >
              <div className="flex size-full flex-col bg-white">
                <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-gray-50 to-white">
                  <div className="absolute size-32 rounded-full bg-gray-100 blur-3xl" />
                  <div
                    className="relative size-14 rounded-xl bg-white"
                    style={{ boxShadow: preset.shadow }}
                  />
                </div>
                <div className="border-t bg-white p-3 text-center">
                  <h4 className="text-sm font-semibold text-gray-900">{preset.label}</h4>
                  <p className="text-[10px] text-gray-500">Swipe to explore</p>
                </div>
              </div>
            </DeckItem>
          ))}
        </DeckCards>
      </Deck>

      {/* Navigation Buttons - Exactly like tools page */}
      <div className="mt-3 flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full shadow-none"
          disabled={deckIndex === 0}
          onClick={() => setDeckIndex(Math.max(0, deckIndex - 1))}
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full shadow-none"
          disabled={deckIndex >= shadowPresets.length - 1}
          onClick={() => setDeckIndex(Math.min(shadowPresets.length - 1, deckIndex + 1))}
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}

const advancedFeatures = [
  {
    title: "Edit with AI",
    description:
      "Copy your theme configuration and paste it into ChatGPT, Claude, or any AI. Describe your changes in plain English and paste the result back.",
    preview: AIEditorPreview,
    backgroundImage: "/placeholders/art/3.webp",
  },
  {
    title: "Explore Presets",
    description:
      "Swipe through curated presets to discover new ideas. An intuitive explore UI makes it easy to find the perfect starting point.",
    preview: PresetSelectorPreview,
    backgroundImage: "/placeholders/art/7.webp",
  },
]

export function AdvancedFeaturesSection() {
  return (
    <section className="container px-6">
      <div className="text-center">
        <p className="text-brand text-sm font-semibold uppercase tracking-wider">
          Power Features
        </p>
        <Spacer size="sm" />
        <h2 className="display text-3xl tracking-tight md:text-5xl">
          Power user features
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Go beyond the basics with AI and curated presets
        </p>
      </div>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid gap-6 md:grid-cols-2">
        {advancedFeatures.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-3">
            {/* Preview Card */}
            <div
              className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl border bg-cover bg-center p-6 shadow-sm"
              style={{ backgroundImage: `url(${feature.backgroundImage})` }}
            >
              <feature.preview />
            </div>
            {/* Description Card */}
            <div className="bg-background rounded-3xl border p-6 shadow-xs">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
