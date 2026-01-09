"use client"

import { useCallback, useRef, useState } from "react"

import {
  Download,
  Images,
  Layout,
  Palette,
} from "@/lib/icons"
import {
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
  ColorPickerRow,
  SliderRow,
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

import { CanvasPreview } from "./_components/canvas-preview"
import {
  downloadBlob,
  exportCanvas,
  generateFilename,
  readFileAsDataUrl,
} from "./_components/export-utils"
import { ImageList } from "./_components/image-list"
import { ImageUpload } from "./_components/image-upload"
import type {
  AspectRatioKey,
  BackgroundPresetKey,
  BackgroundStyle,
  CanvasImage,
  CanvasState,
  ExportSettings,
  LayoutMode,
} from "./_components/types"
import {
  ASPECT_RATIOS,
  BACKGROUND_PRESETS,
  BACKGROUND_STYLES,
  createCanvasImage,
  createDefaultCanvasState,
  LAYOUT_MODES,
} from "./_components/types"

export default function MarketingPreviewsPageClient() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<CanvasState>(createDefaultCanvasState)
  const [selectedImageId, setSelectedImageId] = useState<string>()
  const [sidebarTab, setSidebarTab] = useState<"images" | "layout" | "background" | "export">("images")
  const [isExporting, setIsExporting] = useState(false)
  const [exportSettings, setExportSettings] = useState<ExportSettings>({
    format: "png",
    quality: 90,
    scale: 2,
  })

  // Image handlers
  const handleImagesAdded = useCallback(async (files: File[]) => {
    const newImages: CanvasImage[] = []

    for (const file of files) {
      const src = await readFileAsDataUrl(file)
      newImages.push(createCanvasImage(src, file.name))
    }

    setState((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages].slice(0, LAYOUT_MODES[prev.layoutMode].maxImages),
    }))
  }, [])

  const handleUpdateImage = useCallback((id: string, updates: Partial<CanvasImage>) => {
    setState((prev) => ({
      ...prev,
      images: prev.images.map((img) =>
        img.id === id ? { ...img, ...updates } : img
      ),
    }))
  }, [])

  const handleDeleteImage = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img.id !== id),
    }))
    setSelectedImageId(undefined)
  }, [])

  // Layout handlers
  const handleAspectRatioChange = useCallback((value: AspectRatioKey) => {
    setState((prev) => ({ ...prev, aspectRatio: value }))
  }, [])

  const handleLayoutModeChange = useCallback((value: LayoutMode) => {
    setState((prev) => ({
      ...prev,
      layoutMode: value,
      images: prev.images.slice(0, LAYOUT_MODES[value].maxImages),
    }))
  }, [])

  // Background handlers
  const handlePresetChange = useCallback((preset: BackgroundPresetKey) => {
    const presetConfig = BACKGROUND_PRESETS[preset]
    setState((prev) => ({
      ...prev,
      background: {
        preset,
        ...presetConfig,
        patternDensity: prev.background.patternDensity,
      },
    }))
  }, [])

  const handleBackgroundStyleChange = useCallback((style: BackgroundStyle) => {
    setState((prev) => ({
      ...prev,
      background: { ...prev.background, style, preset: "custom" },
    }))
  }, [])

  const handleBackgroundColorChange = useCallback(
    (key: "primaryColor" | "secondaryColor") => (color: string) => {
      setState((prev) => ({
        ...prev,
        background: { ...prev.background, [key]: color, preset: "custom" },
      }))
    },
    []
  )

  const handleBackgroundSliderChange = useCallback(
    (key: "blur" | "noise" | "patternDensity") => (value: number) => {
      setState((prev) => ({
        ...prev,
        background: { ...prev.background, [key]: value, preset: "custom" },
      }))
    },
    []
  )

  // Export handlers
  const handleExport = useCallback(async () => {
    if (!canvasRef.current) return

    setIsExporting(true)
    try {
      const blob = await exportCanvas(
        canvasRef.current,
        state.aspectRatio,
        exportSettings
      )
      const filename = generateFilename(exportSettings.format)
      downloadBlob(blob, filename)
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [state.aspectRatio, exportSettings])

  return (
    <ToolLayout>
      <ToolLayoutBackground />

      <ToolLayoutContainer>
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Marketing Previews"
            description="Create stunning marketing screenshots"
          />

          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) => setSidebarTab(v as typeof sidebarTab)}
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="images" icon={Images}>
                  Images
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="layout" icon={Layout}>
                  Layout
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="background" icon={Palette}>
                  Background
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="export" icon={Download}>
                  Export
                </ToolLayoutTabsTrigger>
              </ToolLayoutTabsList>

              {/* Images Tab */}
              <ToolLayoutTabsContent value="images">
                <ImageUpload
                  onImagesAdded={handleImagesAdded}
                  maxImages={LAYOUT_MODES[state.layoutMode].maxImages}
                  currentCount={state.images.length}
                />

                <ImageList
                  images={state.images}
                  onUpdateImage={handleUpdateImage}
                  onDeleteImage={handleDeleteImage}
                  selectedId={selectedImageId}
                  onSelect={setSelectedImageId}
                />
              </ToolLayoutTabsContent>

              {/* Layout Tab */}
              <ToolLayoutTabsContent value="layout">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs">Aspect Ratio</Label>
                    <Select
                      value={state.aspectRatio}
                      onValueChange={handleAspectRatioChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(ASPECT_RATIOS).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Layout</Label>
                    <Select
                      value={state.layoutMode}
                      onValueChange={handleLayoutModeChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(LAYOUT_MODES).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </ToolLayoutTabsContent>

              {/* Background Tab */}
              <ToolLayoutTabsContent value="background">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs">Preset</Label>
                    <Select
                      value={state.background.preset}
                      onValueChange={handlePresetChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(BACKGROUND_PRESETS).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs">Style</Label>
                    <Select
                      value={state.background.style}
                      onValueChange={handleBackgroundStyleChange}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(BACKGROUND_STYLES).map(([key, { label }]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <ColorPickerRow
                    label="Primary Color"
                    color={state.background.primaryColor}
                    onChange={handleBackgroundColorChange("primaryColor")}
                  />

                  <ColorPickerRow
                    label="Secondary Color"
                    color={state.background.secondaryColor}
                    onChange={handleBackgroundColorChange("secondaryColor")}
                  />

                  {(state.background.style === "gradient-blur" ||
                    state.background.style === "mesh") && (
                    <SliderRow
                      label="Blur"
                      value={state.background.blur}
                      onChange={handleBackgroundSliderChange("blur")}
                      min={20}
                      max={150}
                    />
                  )}

                  {state.background.style === "solid" && (
                    <SliderRow
                      label="Noise"
                      value={state.background.noise}
                      onChange={handleBackgroundSliderChange("noise")}
                      min={0}
                      max={30}
                    />
                  )}

                  {(state.background.style === "dots" ||
                    state.background.style === "lines") && (
                    <SliderRow
                      label="Density"
                      value={state.background.patternDensity}
                      onChange={handleBackgroundSliderChange("patternDensity")}
                      min={10}
                      max={50}
                    />
                  )}
                </div>
              </ToolLayoutTabsContent>

              {/* Export Tab */}
              <ToolLayoutTabsContent value="export">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs">Format</Label>
                    <Select
                      value={exportSettings.format}
                      onValueChange={(value: "png" | "jpg") =>
                        setExportSettings((prev) => ({ ...prev, format: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {exportSettings.format === "jpg" && (
                    <SliderRow
                      label="Quality"
                      value={exportSettings.quality}
                      onChange={(value) =>
                        setExportSettings((prev) => ({ ...prev, quality: value }))
                      }
                      min={60}
                      max={100}
                      unit="%"
                    />
                  )}

                  <div className="space-y-2">
                    <Label className="text-xs">Resolution</Label>
                    <Select
                      value={String(exportSettings.scale)}
                      onValueChange={(value) =>
                        setExportSettings((prev) => ({
                          ...prev,
                          scale: Number(value) as 1 | 2 | 3,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1x</SelectItem>
                        <SelectItem value="2">2x (Recommended)</SelectItem>
                        <SelectItem value="3">3x</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleExport}
                    disabled={isExporting || state.images.length === 0}
                  >
                    <Download className="mr-2 size-4" />
                    {isExporting ? "Exporting..." : "Download"}
                  </Button>
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
          </ToolLayoutPreviewHeader>

          <ToolLayoutPreviewContent forceLightMode={false}>
            <CanvasPreview ref={canvasRef} state={state} className="h-full" />
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
