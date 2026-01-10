"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Check,
  Clipboard,
  Eye,
  Moon,
  Palette,
  RotateCcw,
  Save,
  Settings2,
  Sun,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Label } from "@/registry/new-york-v4/ui/label"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

// Types
type MobileView = "controls" | "preview"

// Mobile View Context
const MobileViewContext = React.createContext<{
  mobileView: MobileView
  setMobileView: (view: MobileView) => void
  toggleMobileView: () => void
} | null>(null)

function useMobileView() {
  const context = React.useContext(MobileViewContext)
  if (!context) {
    throw new Error("useMobileView must be used within AppToolLayout1")
  }
  return context
}

// Control Section Component
function ControlSection({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

// Slider Row Component
function SliderRow({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  suffix = "",
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
  suffix?: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-sm">{label}</Label>
        <span className="text-muted-foreground text-sm">
          {value}
          {suffix}
        </span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={([v]) => onChange(v)}
      />
    </div>
  )
}

// Color Picker Row Component
function ColorPickerRow({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex items-center justify-between">
      <Label className="text-sm">{label}</Label>
      <div className="flex items-center gap-2">
        <div
          className="size-8 rounded-md border"
          style={{ backgroundColor: value }}
        />
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
          id={`color-${label}`}
        />
        <label
          htmlFor={`color-${label}`}
          className="bg-muted cursor-pointer rounded-md px-2 py-1 font-mono text-xs"
        >
          {value}
        </label>
      </div>
    </div>
  )
}

// Code Output Component
function CodeOutput({
  code,
  language = "css",
}: {
  code: string
  language?: string
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="size-4" />
        ) : (
          <Clipboard className="size-4" />
        )}
        {copied ? "Copied" : "Copy"}
      </Button>
      <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

// Default state for demo
interface ThemeState {
  primaryColor: string
  backgroundColor: string
  borderRadius: number
  spacing: number
  darkMode: boolean
}

const defaultThemeState: ThemeState = {
  primaryColor: "#3b82f6",
  backgroundColor: "#ffffff",
  borderRadius: 8,
  spacing: 16,
  darkMode: false,
}

// Default data
const appToolLayout1Defaults = {
  backHref: "/tools",
  backLabel: "Tools Menu",
  title: "Theme Generator",
  description: "Create and customize theme variables for your application",
}

interface AppToolLayout1Props {
  backHref?: string
  backLabel?: string
  title?: string
  description?: string
  className?: string
}

export function AppToolLayout1({
  backHref = appToolLayout1Defaults.backHref,
  backLabel = appToolLayout1Defaults.backLabel,
  title = appToolLayout1Defaults.title,
  description = appToolLayout1Defaults.description,
  className,
}: AppToolLayout1Props) {
  const [mobileView, setMobileView] = React.useState<MobileView>("controls")
  const [state, setState] = React.useState<ThemeState>(defaultThemeState)
  const [activeTab, setActiveTab] = React.useState("settings")

  const toggleMobileView = React.useCallback(() => {
    setMobileView((prev) => (prev === "controls" ? "preview" : "controls"))
  }, [])

  const contextValue = React.useMemo(
    () => ({ mobileView, setMobileView, toggleMobileView }),
    [mobileView, toggleMobileView]
  )

  const handleReset = () => setState(defaultThemeState)

  const generatedCSS = `:root {
  --primary: ${state.primaryColor};
  --background: ${state.backgroundColor};
  --radius: ${state.borderRadius}px;
  --spacing: ${state.spacing}px;
}

.dark {
  --background: #0a0a0a;
}`

  return (
    <MobileViewContext.Provider value={contextValue}>
      <div className={cn("relative overflow-clip", className)}>
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="relative container mx-auto h-full px-6">
            <div className="absolute inset-0 flex justify-between">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="bg-border/30 h-full w-px" />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container px-6 py-8">
          <div className="grid grid-cols-6 items-start gap-6">
            {/* Sidebar - Controls */}
            <div
              className={cn(
                "col-span-6 lg:col-span-2",
                mobileView === "preview" && "hidden lg:block"
              )}
            >
              <div className="flex flex-col space-y-4">
                {/* Header */}
                <div className="h-[100px] shrink-0">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" asChild className="-ml-2">
                      <Link href={backHref}>
                        <ArrowLeft className="size-4" />
                        {backLabel}
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleMobileView}
                      className="lg:hidden"
                    >
                      {mobileView === "controls" ? (
                        <>
                          <Eye className="size-4" />
                          Preview
                        </>
                      ) : (
                        <>
                          <Settings2 className="size-4" />
                          Controls
                        </>
                      )}
                    </Button>
                  </div>
                  <h1 className="display text-2xl font-semibold tracking-tight">
                    {title}
                  </h1>
                  {description && (
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  )}
                </div>

                {/* Controls Card */}
                <Card className="h-[68vh]">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex h-full flex-col"
                  >
                    <CardHeader className="pb-0">
                      <TabsList className="w-full">
                        <TabsTrigger value="settings" className="flex-1">
                          <Settings2 className="mr-2 size-4" />
                          Settings
                        </TabsTrigger>
                        <TabsTrigger value="colors" className="flex-1">
                          <Palette className="mr-2 size-4" />
                          Colors
                        </TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-hidden p-0">
                      <ScrollArea className="h-full p-4">
                        <TabsContent value="settings" className="m-0 space-y-6">
                          <ControlSection title="Layout">
                            <SliderRow
                              label="Border Radius"
                              value={state.borderRadius}
                              min={0}
                              max={24}
                              onChange={(v) =>
                                setState((s) => ({ ...s, borderRadius: v }))
                              }
                              suffix="px"
                            />
                            <SliderRow
                              label="Spacing"
                              value={state.spacing}
                              min={4}
                              max={32}
                              onChange={(v) =>
                                setState((s) => ({ ...s, spacing: v }))
                              }
                              suffix="px"
                            />
                          </ControlSection>

                          <Separator />

                          <ControlSection title="Appearance">
                            <div className="flex items-center justify-between">
                              <Label className="text-sm">Dark Mode</Label>
                              <Switch
                                checked={state.darkMode}
                                onCheckedChange={(v) =>
                                  setState((s) => ({ ...s, darkMode: v }))
                                }
                              />
                            </div>
                          </ControlSection>
                        </TabsContent>

                        <TabsContent value="colors" className="m-0 space-y-6">
                          <ControlSection title="Theme Colors">
                            <ColorPickerRow
                              label="Primary"
                              value={state.primaryColor}
                              onChange={(v) =>
                                setState((s) => ({ ...s, primaryColor: v }))
                              }
                            />
                            <ColorPickerRow
                              label="Background"
                              value={state.backgroundColor}
                              onChange={(v) =>
                                setState((s) => ({ ...s, backgroundColor: v }))
                              }
                            />
                          </ControlSection>
                        </TabsContent>
                      </ScrollArea>
                    </CardContent>
                  </Tabs>
                </Card>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="size-4" />
                    Reset
                  </Button>
                  <Button size="sm" className="ml-auto">
                    <Save className="size-4" />
                    Save Theme
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div
              className={cn(
                "col-span-6 lg:col-span-4 lg:pl-4",
                mobileView === "controls" && "hidden lg:block"
              )}
            >
              <div className="flex flex-col gap-3">
                {/* Mobile close button */}
                <div className="flex items-center justify-end lg:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleMobileView}
                  >
                    <Settings2 className="size-4" />
                    Controls
                  </Button>
                </div>

                {/* Preview Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                    Preview
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8"
                      onClick={() =>
                        setState((s) => ({ ...s, darkMode: !s.darkMode }))
                      }
                    >
                      {state.darkMode ? (
                        <Sun className="size-4" />
                      ) : (
                        <Moon className="size-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Preview Content */}
                <div
                  className="overflow-hidden rounded-3xl border"
                  style={{
                    height: "calc(68vh + 72px)",
                    backgroundColor: state.darkMode
                      ? "#0a0a0a"
                      : state.backgroundColor,
                    color: state.darkMode ? "#ffffff" : "#000000",
                  }}
                >
                  <div className="flex h-full flex-col p-6">
                    {/* Sample UI Elements */}
                    <div className="mb-6 flex items-center gap-4">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white"
                        style={{
                          backgroundColor: state.primaryColor,
                          borderRadius: `${state.borderRadius}px`,
                        }}
                      >
                        Primary Button
                      </button>
                      <button
                        className="border px-4 py-2 text-sm font-medium"
                        style={{
                          borderRadius: `${state.borderRadius}px`,
                          borderColor: state.darkMode
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(0,0,0,0.2)",
                        }}
                      >
                        Outline Button
                      </button>
                    </div>

                    {/* Sample Card */}
                    <div
                      className="mb-6 border p-4"
                      style={{
                        borderRadius: `${state.borderRadius}px`,
                        borderColor: state.darkMode
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.1)",
                        padding: `${state.spacing}px`,
                      }}
                    >
                      <h3 className="display mb-2 font-medium">Sample Card</h3>
                      <p
                        className="text-sm"
                        style={{
                          color: state.darkMode
                            ? "rgba(255,255,255,0.6)"
                            : "rgba(0,0,0,0.6)",
                        }}
                      >
                        This card demonstrates your theme settings including
                        border radius and spacing values.
                      </p>
                    </div>

                    {/* Generated Code */}
                    <div className="flex-1 overflow-hidden">
                      <h3 className="mb-2 text-sm font-medium">
                        Generated CSS
                      </h3>
                      <CodeOutput code={generatedCSS} language="css" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileViewContext.Provider>
  )
}
