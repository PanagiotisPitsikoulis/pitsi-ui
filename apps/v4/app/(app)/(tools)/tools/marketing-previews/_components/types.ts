// Aspect Ratio Types and Constants
export type AspectRatioKey = "16:9" | "1:1" | "9:16"

export interface AspectRatioConfig {
  width: number
  height: number
  label: string
}

export const ASPECT_RATIOS: Record<AspectRatioKey, AspectRatioConfig> = {
  "16:9": { width: 1920, height: 1080, label: "Horizontal" },
  "1:1": { width: 1080, height: 1080, label: "Square" },
  "9:16": { width: 1080, height: 1920, label: "Vertical" },
}

// Device Types
export type DeviceType = "none" | "iphone" | "macbook" | "browser" | "ipad"

export const DEVICE_OPTIONS: { value: DeviceType; label: string }[] = [
  { value: "none", label: "None" },
  { value: "iphone", label: "iPhone" },
  { value: "macbook", label: "MacBook" },
  { value: "browser", label: "Browser" },
  { value: "ipad", label: "iPad" },
]

// Alias for backwards compatibility
export const DEVICE_TYPES: Record<DeviceType, { label: string }> = {
  none: { label: "None" },
  iphone: { label: "iPhone" },
  macbook: { label: "MacBook" },
  browser: { label: "Browser" },
  ipad: { label: "iPad" },
}

// Background Styles
export type BackgroundStyle =
  | "gradient-blur"
  | "mesh"
  | "dots"
  | "lines"
  | "solid"
  | "transparent"

export const BACKGROUND_STYLE_OPTIONS: { value: BackgroundStyle; label: string }[] = [
  { value: "gradient-blur", label: "Gradient Blur" },
  { value: "mesh", label: "Mesh" },
  { value: "dots", label: "Dots" },
  { value: "lines", label: "Lines" },
  { value: "solid", label: "Solid" },
  { value: "transparent", label: "Transparent" },
]

// Alias for backwards compatibility
export const BACKGROUND_STYLES: Record<BackgroundStyle, { label: string }> = {
  "gradient-blur": { label: "Gradient Blur" },
  mesh: { label: "Mesh" },
  dots: { label: "Dots" },
  lines: { label: "Lines" },
  solid: { label: "Solid" },
  transparent: { label: "Transparent" },
}

// Background Presets
export type BackgroundPresetKey = "apple" | "minimal" | "dark" | "vibrant" | "custom"

export interface BackgroundPreset {
  label: string
  style: BackgroundStyle
  primaryColor: string
  secondaryColor: string
  blur: number
  noise: number
}

export const BACKGROUND_PRESETS: Record<BackgroundPresetKey, BackgroundPreset> = {
  apple: {
    label: "Apple",
    style: "gradient-blur",
    primaryColor: "#8B5CF6",
    secondaryColor: "#3B82F6",
    blur: 80,
    noise: 0,
  },
  minimal: {
    label: "Minimal",
    style: "solid",
    primaryColor: "#FFFFFF",
    secondaryColor: "#F3F4F6",
    blur: 0,
    noise: 15,
  },
  dark: {
    label: "Dark",
    style: "gradient-blur",
    primaryColor: "#1F2937",
    secondaryColor: "#111827",
    blur: 60,
    noise: 0,
  },
  vibrant: {
    label: "Vibrant",
    style: "mesh",
    primaryColor: "#F97316",
    secondaryColor: "#EC4899",
    blur: 0,
    noise: 0,
  },
  custom: {
    label: "Custom",
    style: "gradient-blur",
    primaryColor: "#6366F1",
    secondaryColor: "#8B5CF6",
    blur: 40,
    noise: 10,
  },
}

// Layout Modes
export type LayoutMode = "single" | "two-up" | "three-up" | "grid"

export interface LayoutConfig {
  maxImages: number
  label: string
}

export const LAYOUT_MODES: Record<LayoutMode, LayoutConfig> = {
  single: { maxImages: 1, label: "Single" },
  "two-up": { maxImages: 2, label: "Two Up" },
  "three-up": { maxImages: 3, label: "Three Up" },
  grid: { maxImages: 6, label: "Grid" },
}

export const LAYOUT_MODE_OPTIONS: { value: LayoutMode; label: string }[] = [
  { value: "single", label: "Single" },
  { value: "two-up", label: "Two Up" },
  { value: "three-up", label: "Three Up" },
  { value: "grid", label: "Grid" },
]

// Device Color and Shadow Types
export type DeviceColor = "light" | "dark"
export type ShadowIntensity = "none" | "subtle" | "medium" | "strong"
export type TiltStyle = "flat" | "angled"

// Canvas Image Interface
export interface CanvasImage {
  id: string
  src: string
  name: string
  device: DeviceType
  deviceColor: DeviceColor
  shadowIntensity: ShadowIntensity
  tilt: TiltStyle
  scale: number
}

// Background Config Interface
export interface BackgroundConfig {
  preset: BackgroundPresetKey
  style: BackgroundStyle
  primaryColor: string
  secondaryColor: string
  blur: number
  noise: number
  patternDensity: number
}

// Canvas State Interface
export interface CanvasState {
  aspectRatio: AspectRatioKey
  layoutMode: LayoutMode
  images: CanvasImage[]
  background: BackgroundConfig
}

// Export Settings Interface
export type ExportFormat = "png" | "jpg"
export type ExportScale = 1 | 2 | 3

export interface ExportSettings {
  format: ExportFormat
  quality: number
  scale: ExportScale
}

// Helper Functions
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

export function createDefaultCanvasState(): CanvasState {
  const defaultPreset = BACKGROUND_PRESETS.apple
  return {
    aspectRatio: "16:9",
    layoutMode: "single",
    images: [],
    background: {
      preset: "apple",
      style: defaultPreset.style,
      primaryColor: defaultPreset.primaryColor,
      secondaryColor: defaultPreset.secondaryColor,
      blur: defaultPreset.blur,
      noise: defaultPreset.noise,
      patternDensity: 20,
    },
  }
}

export function createCanvasImage(src: string, name: string): CanvasImage {
  return {
    id: generateId(),
    src,
    name,
    device: "none",
    deviceColor: "light",
    shadowIntensity: "medium",
    tilt: "flat",
    scale: 1,
  }
}
