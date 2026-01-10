# Marketing Previews Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a tool for creating polished marketing screenshots with device mockups, multi-image layouts, and decorative backgrounds.

**Architecture:** Client-side React tool using canvas-like rendering via CSS/HTML, with html-to-image for export. Follows existing tool patterns with ToolLayout components, tabs for controls, and live preview panel.

**Tech Stack:** React 19, TypeScript, html-to-image, Tailwind CSS, existing pitsi/ui components (ToolLayout, Tabs, Slider, etc.)

---

## Task 1: Create Types and Constants

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/types.ts`

**Step 1: Create the types file**

```typescript
// Aspect ratio options
export type AspectRatio = "16:9" | "1:1" | "9:16"

export const ASPECT_RATIOS: Record<AspectRatio, { width: number; height: number; label: string }> = {
  "16:9": { width: 1920, height: 1080, label: "Horizontal (16:9)" },
  "1:1": { width: 1080, height: 1080, label: "Square (1:1)" },
  "9:16": { width: 1080, height: 1920, label: "Vertical (9:16)" },
}

// Device frame types
export type DeviceType = "none" | "iphone" | "macbook" | "browser" | "ipad"

export const DEVICE_TYPES: Record<DeviceType, { label: string }> = {
  none: { label: "No Frame" },
  iphone: { label: "iPhone" },
  macbook: { label: "MacBook" },
  browser: { label: "Browser" },
  ipad: { label: "iPad" },
}

// Background style types
export type BackgroundStyle = "gradient-blur" | "mesh" | "dots" | "lines" | "solid" | "transparent"

export const BACKGROUND_STYLES: Record<BackgroundStyle, { label: string }> = {
  "gradient-blur": { label: "Gradient Blur" },
  mesh: { label: "Mesh Gradient" },
  dots: { label: "Dot Grid" },
  lines: { label: "Lines" },
  solid: { label: "Solid + Noise" },
  transparent: { label: "Transparent" },
}

// Background presets
export type BackgroundPreset = "apple" | "minimal" | "dark" | "vibrant" | "custom"

export const BACKGROUND_PRESETS: Record<BackgroundPreset, {
  label: string
  style: BackgroundStyle
  primaryColor: string
  secondaryColor: string
  blur: number
  noise: number
}> = {
  apple: {
    label: "Apple",
    style: "gradient-blur",
    primaryColor: "#a855f7",
    secondaryColor: "#3b82f6",
    blur: 80,
    noise: 0,
  },
  minimal: {
    label: "Minimal",
    style: "solid",
    primaryColor: "#f5f5f5",
    secondaryColor: "#e5e5e5",
    blur: 0,
    noise: 5,
  },
  dark: {
    label: "Dark",
    style: "gradient-blur",
    primaryColor: "#1e1b4b",
    secondaryColor: "#0f172a",
    blur: 100,
    noise: 3,
  },
  vibrant: {
    label: "Vibrant",
    style: "mesh",
    primaryColor: "#f97316",
    secondaryColor: "#ec4899",
    blur: 60,
    noise: 0,
  },
  custom: {
    label: "Custom",
    style: "gradient-blur",
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
    blur: 80,
    noise: 0,
  },
}

// Layout modes
export type LayoutMode = "single" | "two-up" | "three-up" | "grid"

export const LAYOUT_MODES: Record<LayoutMode, { label: string; maxImages: number }> = {
  single: { label: "Single", maxImages: 1 },
  "two-up": { label: "Two Up", maxImages: 2 },
  "three-up": { label: "Three Up", maxImages: 3 },
  grid: { label: "Grid", maxImages: 6 },
}

// Image item in canvas
export interface CanvasImage {
  id: string
  src: string
  name: string
  device: DeviceType
  deviceColor: "light" | "dark"
  shadowIntensity: "none" | "subtle" | "medium" | "strong"
  tilt: "flat" | "angled"
  scale: number
}

// Canvas state
export interface CanvasState {
  aspectRatio: AspectRatio
  layoutMode: LayoutMode
  images: CanvasImage[]
  background: {
    preset: BackgroundPreset
    style: BackgroundStyle
    primaryColor: string
    secondaryColor: string
    blur: number
    noise: number
    patternDensity: number
  }
}

// Export settings
export interface ExportSettings {
  format: "png" | "jpg"
  quality: number
  scale: 1 | 2 | 3
}

// Helper to generate unique IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}

// Default canvas state
export function createDefaultCanvasState(): CanvasState {
  return {
    aspectRatio: "16:9",
    layoutMode: "single",
    images: [],
    background: {
      preset: "apple",
      ...BACKGROUND_PRESETS.apple,
    },
  }
}

// Create new canvas image
export function createCanvasImage(src: string, name: string): CanvasImage {
  return {
    id: generateId(),
    src,
    name,
    device: "iphone",
    deviceColor: "dark",
    shadowIntensity: "medium",
    tilt: "flat",
    scale: 100,
  }
}
```

**Step 2: Verify file was created**

Run: `ls -la apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/`

---

## Task 2: Create Device Frame Components

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/device-frames.tsx`

**Step 1: Create device frame SVG components**

```tsx
import { cn } from "@/lib/utils"

interface DeviceFrameProps {
  children: React.ReactNode
  className?: string
  color?: "light" | "dark"
  shadowIntensity?: "none" | "subtle" | "medium" | "strong"
}

const shadowStyles = {
  none: "",
  subtle: "drop-shadow-md",
  medium: "drop-shadow-xl",
  strong: "drop-shadow-2xl",
}

// iPhone frame (bezel-less style)
export function IPhoneFrame({
  children,
  className,
  color = "dark",
  shadowIntensity = "medium",
}: DeviceFrameProps) {
  const frameColor = color === "dark" ? "#1a1a1a" : "#f5f5f5"
  const bezelColor = color === "dark" ? "#000" : "#fff"

  return (
    <div className={cn("relative inline-block", shadowStyles[shadowIntensity], className)}>
      <svg viewBox="0 0 375 812" className="h-full w-auto">
        {/* Outer frame */}
        <rect
          x="0"
          y="0"
          width="375"
          height="812"
          rx="55"
          ry="55"
          fill={frameColor}
        />
        {/* Screen bezel */}
        <rect
          x="10"
          y="10"
          width="355"
          height="792"
          rx="45"
          ry="45"
          fill={bezelColor}
        />
        {/* Dynamic Island */}
        <rect
          x="125"
          y="20"
          width="125"
          height="35"
          rx="17"
          ry="17"
          fill={frameColor}
        />
        {/* Screen area */}
        <foreignObject x="15" y="15" width="345" height="782">
          <div className="size-full overflow-hidden rounded-[40px]">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// MacBook frame
export function MacBookFrame({
  children,
  className,
  color = "dark",
  shadowIntensity = "medium",
}: DeviceFrameProps) {
  const frameColor = color === "dark" ? "#2d2d2d" : "#e5e5e5"
  const screenBg = color === "dark" ? "#1a1a1a" : "#f0f0f0"

  return (
    <div className={cn("relative inline-block", shadowStyles[shadowIntensity], className)}>
      <svg viewBox="0 0 1200 750" className="h-full w-auto">
        {/* Screen housing */}
        <rect x="60" y="0" width="1080" height="680" rx="20" ry="20" fill={frameColor} />
        {/* Screen bezel */}
        <rect x="75" y="15" width="1050" height="650" rx="8" ry="8" fill={screenBg} />
        {/* Camera */}
        <circle cx="600" cy="8" r="4" fill="#333" />
        {/* Screen area */}
        <foreignObject x="80" y="20" width="1040" height="640">
          <div className="size-full overflow-hidden rounded-md">
            {children}
          </div>
        </foreignObject>
        {/* Base */}
        <path
          d="M0 680 L60 680 L60 700 Q60 710 70 710 L1130 710 Q1140 710 1140 700 L1140 680 L1200 680 L1200 730 Q1200 750 1180 750 L20 750 Q0 750 0 730 Z"
          fill={frameColor}
        />
        {/* Notch in base */}
        <ellipse cx="600" cy="680" rx="150" ry="8" fill={color === "dark" ? "#1a1a1a" : "#d5d5d5"} />
      </svg>
    </div>
  )
}

// Browser frame
export function BrowserFrame({
  children,
  className,
  color = "dark",
  shadowIntensity = "medium",
}: DeviceFrameProps) {
  const frameColor = color === "dark" ? "#2d2d2d" : "#f5f5f5"
  const tabColor = color === "dark" ? "#3d3d3d" : "#e5e5e5"
  const dotColors = ["#ff5f57", "#febc2e", "#28c840"]

  return (
    <div className={cn("relative inline-block", shadowStyles[shadowIntensity], className)}>
      <svg viewBox="0 0 1200 800" className="h-full w-auto">
        {/* Window frame */}
        <rect x="0" y="0" width="1200" height="800" rx="12" ry="12" fill={frameColor} />
        {/* Title bar */}
        <rect x="0" y="0" width="1200" height="40" rx="12" ry="0" fill={frameColor} />
        <rect x="0" y="12" width="1200" height="28" fill={frameColor} />
        {/* Traffic lights */}
        {dotColors.map((fill, i) => (
          <circle key={i} cx={20 + i * 20} cy="20" r="6" fill={fill} />
        ))}
        {/* Address bar */}
        <rect x="200" y="10" width="800" height="22" rx="6" ry="6" fill={tabColor} />
        {/* Content area */}
        <foreignObject x="1" y="40" width="1198" height="758">
          <div className="size-full overflow-hidden rounded-b-xl">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

// iPad frame
export function IPadFrame({
  children,
  className,
  color = "dark",
  shadowIntensity = "medium",
}: DeviceFrameProps) {
  const frameColor = color === "dark" ? "#1a1a1a" : "#e5e5e5"

  return (
    <div className={cn("relative inline-block", shadowStyles[shadowIntensity], className)}>
      <svg viewBox="0 0 1024 768" className="h-full w-auto">
        {/* Outer frame */}
        <rect x="0" y="0" width="1024" height="768" rx="30" ry="30" fill={frameColor} />
        {/* Screen area */}
        <foreignObject x="20" y="20" width="984" height="728">
          <div className="size-full overflow-hidden rounded-2xl bg-white">
            {children}
          </div>
        </foreignObject>
        {/* Camera */}
        <circle cx="512" cy="10" r="4" fill="#333" />
      </svg>
    </div>
  )
}

// No frame wrapper (just rounded corners + optional shadow)
export function NoFrame({
  children,
  className,
  shadowIntensity = "medium",
}: Omit<DeviceFrameProps, "color">) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl",
        shadowStyles[shadowIntensity],
        className
      )}
    >
      {children}
    </div>
  )
}

// Device frame wrapper component
export function DeviceFrame({
  device,
  children,
  className,
  color = "dark",
  shadowIntensity = "medium",
}: DeviceFrameProps & { device: "none" | "iphone" | "macbook" | "browser" | "ipad" }) {
  switch (device) {
    case "iphone":
      return (
        <IPhoneFrame className={className} color={color} shadowIntensity={shadowIntensity}>
          {children}
        </IPhoneFrame>
      )
    case "macbook":
      return (
        <MacBookFrame className={className} color={color} shadowIntensity={shadowIntensity}>
          {children}
        </MacBookFrame>
      )
    case "browser":
      return (
        <BrowserFrame className={className} color={color} shadowIntensity={shadowIntensity}>
          {children}
        </BrowserFrame>
      )
    case "ipad":
      return (
        <IPadFrame className={className} color={color} shadowIntensity={shadowIntensity}>
          {children}
        </IPadFrame>
      )
    case "none":
    default:
      return (
        <NoFrame className={className} shadowIntensity={shadowIntensity}>
          {children}
        </NoFrame>
      )
  }
}
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/device-frames.tsx`

---

## Task 3: Create Background Components

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/backgrounds.tsx`

**Step 1: Create background pattern components**

```tsx
import { cn } from "@/lib/utils"

interface BackgroundProps {
  className?: string
  primaryColor: string
  secondaryColor: string
  blur?: number
  noise?: number
  patternDensity?: number
}

// Gradient blur background (Apple-style soft orbs)
export function GradientBlurBackground({
  className,
  primaryColor,
  secondaryColor,
  blur = 80,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}20 0%, ${secondaryColor}20 100%)`,
        }}
      />
      {/* Blur orb 1 - top left */}
      <div
        className="absolute -left-1/4 -top-1/4 h-2/3 w-2/3 rounded-full"
        style={{
          background: primaryColor,
          filter: `blur(${blur}px)`,
          opacity: 0.6,
        }}
      />
      {/* Blur orb 2 - bottom right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full"
        style={{
          background: secondaryColor,
          filter: `blur(${blur}px)`,
          opacity: 0.6,
        }}
      />
      {/* Blur orb 3 - center */}
      <div
        className="absolute left-1/4 top-1/3 h-1/2 w-1/2 rounded-full"
        style={{
          background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
          filter: `blur(${blur * 1.2}px)`,
          opacity: 0.4,
        }}
      />
    </div>
  )
}

// Mesh gradient background
export function MeshBackground({
  className,
  primaryColor,
  secondaryColor,
  blur = 60,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 40% 20%, ${primaryColor} 0px, transparent 50%),
            radial-gradient(at 80% 0%, ${secondaryColor}80 0px, transparent 50%),
            radial-gradient(at 0% 50%, ${primaryColor}80 0px, transparent 50%),
            radial-gradient(at 80% 50%, ${secondaryColor} 0px, transparent 50%),
            radial-gradient(at 0% 100%, ${primaryColor} 0px, transparent 50%),
            radial-gradient(at 80% 100%, ${secondaryColor}80 0px, transparent 50%)
          `,
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
  )
}

// Dot grid background
export function DotsBackground({
  className,
  primaryColor,
  patternDensity = 20,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${primaryColor}40 1px, transparent 1px)`,
          backgroundSize: `${patternDensity}px ${patternDensity}px`,
        }}
      />
    </div>
  )
}

// Lines background
export function LinesBackground({
  className,
  primaryColor,
  patternDensity = 30,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${primaryColor}20 1px, transparent 1px),
            linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)
          `,
          backgroundSize: `${patternDensity}px ${patternDensity}px`,
        }}
      />
    </div>
  )
}

// Solid color with noise
export function SolidNoiseBackground({
  className,
  primaryColor,
  noise = 5,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)} style={{ backgroundColor: primaryColor }}>
      {noise > 0 && (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: noise / 100,
          }}
        />
      )}
    </div>
  )
}

// Transparent background (checkerboard pattern to indicate transparency)
export function TransparentBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
            linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
            linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />
    </div>
  )
}

// Canvas background wrapper
export function CanvasBackground({
  style,
  className,
  primaryColor,
  secondaryColor,
  blur,
  noise,
  patternDensity,
}: BackgroundProps & { style: string }) {
  switch (style) {
    case "gradient-blur":
      return (
        <GradientBlurBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          blur={blur}
        />
      )
    case "mesh":
      return (
        <MeshBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          blur={blur}
        />
      )
    case "dots":
      return (
        <DotsBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          patternDensity={patternDensity}
        />
      )
    case "lines":
      return (
        <LinesBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          patternDensity={patternDensity}
        />
      )
    case "solid":
      return (
        <SolidNoiseBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          noise={noise}
        />
      )
    case "transparent":
      return <TransparentBackground className={className} />
    default:
      return (
        <GradientBlurBackground
          className={className}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          blur={blur}
        />
      )
  }
}
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/backgrounds.tsx`

---

## Task 4: Create Image Upload Component

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/image-upload.tsx`

**Step 1: Create upload/paste component**

```tsx
"use client"

import { useCallback, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { ImagePlus, Upload } from "@/lib/icons"

interface ImageUploadProps {
  onImagesAdded: (files: File[]) => void
  maxImages?: number
  currentCount?: number
  className?: string
}

export function ImageUpload({
  onImagesAdded,
  maxImages = 6,
  currentCount = 0,
  className,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const remainingSlots = maxImages - currentCount

  const processFiles = useCallback(
    (files: FileList | File[]) => {
      const validFiles = Array.from(files)
        .filter((file) => file.type.startsWith("image/"))
        .slice(0, remainingSlots)

      if (validFiles.length > 0) {
        onImagesAdded(validFiles)
      }
    },
    [onImagesAdded, remainingSlots]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      if (remainingSlots <= 0) return
      processFiles(e.dataTransfer.files)
    },
    [processFiles, remainingSlots]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        processFiles(e.target.files)
      }
      // Reset input so same file can be selected again
      e.target.value = ""
    },
    [processFiles]
  )

  const handleClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  // Handle paste from clipboard
  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      if (remainingSlots <= 0) return

      const items = e.clipboardData.items
      const files: File[] = []

      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile()
          if (file) files.push(file)
        }
      }

      if (files.length > 0) {
        processFiles(files)
      }
    },
    [processFiles, remainingSlots]
  )

  const isDisabled = remainingSlots <= 0

  return (
    <div
      className={cn(
        "relative rounded-xl border-2 border-dashed transition-colors",
        isDragging && !isDisabled && "border-brand bg-brand/5",
        !isDragging && !isDisabled && "border-border hover:border-muted-foreground/50",
        isDisabled && "cursor-not-allowed border-border opacity-50",
        className
      )}
      onDragOver={!isDisabled ? handleDragOver : undefined}
      onDragLeave={!isDisabled ? handleDragLeave : undefined}
      onDrop={!isDisabled ? handleDrop : undefined}
      onPaste={!isDisabled ? handlePaste : undefined}
      tabIndex={0}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        onChange={handleChange}
        className="hidden"
        disabled={isDisabled}
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className="flex w-full flex-col items-center gap-2 p-6 text-center"
      >
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            isDragging ? "bg-brand/10 text-brand" : "bg-muted text-muted-foreground"
          )}
        >
          {isDragging ? (
            <Upload className="size-5" />
          ) : (
            <ImagePlus className="size-5" />
          )}
        </div>

        <div>
          <p className="text-sm font-medium">
            {isDisabled ? "Maximum images reached" : "Drop images here or click to upload"}
          </p>
          <p className="text-muted-foreground mt-1 text-xs">
            {isDisabled
              ? `${maxImages} images max`
              : `PNG, JPG, WebP (${remainingSlots} remaining)`}
          </p>
          {!isDisabled && (
            <p className="text-muted-foreground mt-1 text-xs">
              Or paste from clipboard (Cmd/Ctrl+V)
            </p>
          )}
        </div>
      </button>
    </div>
  )
}
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/image-upload.tsx`

---

## Task 5: Create Canvas Preview Component

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/canvas-preview.tsx`

**Step 1: Create the canvas preview component**

```tsx
"use client"

import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { CanvasBackground } from "./backgrounds"
import { DeviceFrame } from "./device-frames"
import type { AspectRatio, CanvasImage, CanvasState, LayoutMode } from "./types"
import { ASPECT_RATIOS } from "./types"

interface CanvasPreviewProps {
  state: CanvasState
  className?: string
  scale?: number
}

// Calculate dimensions to fit container while maintaining aspect ratio
function getCanvasDimensions(aspectRatio: AspectRatio, containerWidth: number) {
  const ratio = ASPECT_RATIOS[aspectRatio]
  const aspect = ratio.width / ratio.height

  // For preview, use container width and calculate height
  const width = containerWidth
  const height = width / aspect

  return { width, height }
}

// Get layout grid styles based on layout mode and image count
function getLayoutStyles(layoutMode: LayoutMode, imageCount: number) {
  switch (layoutMode) {
    case "single":
      return "flex items-center justify-center"
    case "two-up":
      return "grid grid-cols-2 gap-4 items-center justify-items-center"
    case "three-up":
      return "grid grid-cols-3 gap-4 items-center justify-items-center"
    case "grid":
      if (imageCount <= 2) return "grid grid-cols-2 gap-4 items-center justify-items-center"
      if (imageCount <= 4) return "grid grid-cols-2 gap-4 items-center justify-items-center"
      return "grid grid-cols-3 gap-4 items-center justify-items-center"
    default:
      return "flex items-center justify-center"
  }
}

// Get device size based on layout
function getDeviceSize(layoutMode: LayoutMode, device: string) {
  const sizeMap = {
    single: { iphone: "h-[70%]", macbook: "h-[60%]", browser: "h-[70%]", ipad: "h-[65%]", none: "h-[70%]" },
    "two-up": { iphone: "h-[60%]", macbook: "h-[50%]", browser: "h-[55%]", ipad: "h-[50%]", none: "h-[55%]" },
    "three-up": { iphone: "h-[50%]", macbook: "h-[40%]", browser: "h-[45%]", ipad: "h-[40%]", none: "h-[45%]" },
    grid: { iphone: "h-[45%]", macbook: "h-[35%]", browser: "h-[40%]", ipad: "h-[35%]", none: "h-[40%]" },
  }

  return sizeMap[layoutMode]?.[device as keyof typeof sizeMap.single] || "h-[50%]"
}

// Individual image in canvas
function CanvasImageItem({
  image,
  layoutMode,
}: {
  image: CanvasImage
  layoutMode: LayoutMode
}) {
  const sizeClass = getDeviceSize(layoutMode, image.device)

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        image.tilt === "angled" && "transform perspective-[1000px] rotate-y-[-5deg] rotate-x-[5deg]"
      )}
      style={{ transform: `scale(${image.scale / 100})` }}
    >
      <DeviceFrame
        device={image.device}
        color={image.deviceColor}
        shadowIntensity={image.shadowIntensity}
        className={sizeClass}
      >
        <img
          src={image.src}
          alt={image.name}
          className="size-full object-cover"
        />
      </DeviceFrame>
    </div>
  )
}

export const CanvasPreview = forwardRef<HTMLDivElement, CanvasPreviewProps>(
  function CanvasPreview({ state, className, scale = 1 }, ref) {
    const { aspectRatio, layoutMode, images, background } = state

    // For container aspect ratio
    const ratio = ASPECT_RATIOS[aspectRatio]
    const paddingBottom = `${(ratio.height / ratio.width) * 100}%`

    return (
      <div className={cn("relative w-full", className)}>
        {/* Aspect ratio container */}
        <div className="relative" style={{ paddingBottom }}>
          {/* Canvas content */}
          <div
            ref={ref}
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            {/* Background */}
            <CanvasBackground
              style={background.style}
              primaryColor={background.primaryColor}
              secondaryColor={background.secondaryColor}
              blur={background.blur}
              noise={background.noise}
              patternDensity={background.patternDensity}
            />

            {/* Images */}
            {images.length > 0 && (
              <div className={cn("absolute inset-0 p-8", getLayoutStyles(layoutMode, images.length))}>
                {images.map((image) => (
                  <CanvasImageItem
                    key={image.id}
                    image={image}
                    layoutMode={layoutMode}
                  />
                ))}
              </div>
            )}

            {/* Empty state */}
            {images.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-white/20 p-6 text-center backdrop-blur-sm">
                  <p className="text-sm font-medium text-white drop-shadow">
                    Add images to get started
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/canvas-preview.tsx`

---

## Task 6: Create Export Utilities

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/export-utils.ts`

**Step 1: Create export utilities**

```typescript
import { toPng, toJpeg } from "html-to-image"

import type { AspectRatio, ExportSettings } from "./types"
import { ASPECT_RATIOS } from "./types"

export async function exportCanvas(
  element: HTMLElement,
  aspectRatio: AspectRatio,
  settings: ExportSettings
): Promise<Blob> {
  const { format, quality, scale } = settings
  const dimensions = ASPECT_RATIOS[aspectRatio]

  const width = dimensions.width * scale
  const height = dimensions.height * scale

  const options = {
    width,
    height,
    pixelRatio: 1, // We handle scale via width/height
    quality: quality / 100,
    backgroundColor: format === "jpg" ? "#ffffff" : undefined,
  }

  try {
    if (format === "png") {
      const dataUrl = await toPng(element, options)
      return dataUrlToBlob(dataUrl)
    } else {
      const dataUrl = await toJpeg(element, options)
      return dataUrlToBlob(dataUrl)
    }
  } catch (error) {
    console.error("Export failed:", error)
    throw new Error("Failed to export image")
  }
}

function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(",")
  const mime = parts[0].match(/:(.*?);/)?.[1] || "image/png"
  const binary = atob(parts[1])
  const array = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i++) {
    array[i] = binary.charCodeAt(i)
  }

  return new Blob([array], { type: mime })
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function generateFilename(format: "png" | "jpg"): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)
  return `marketing-preview-${timestamp}.${format}`
}

export function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
```

**Step 2: Install html-to-image dependency**

Run: `cd apps/v4 && bun add html-to-image`

**Step 3: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/export-utils.ts`

---

## Task 7: Create Image List Component

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/_components/image-list.tsx`

**Step 1: Create the image list with controls**

```tsx
"use client"

import { useCallback } from "react"

import { cn } from "@/lib/utils"
import { GripVertical, Settings2, Trash2 } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Slider } from "@/registry/new-york-v4/ui/slider"

import type { CanvasImage, DeviceType } from "./types"
import { DEVICE_TYPES } from "./types"

interface ImageListProps {
  images: CanvasImage[]
  onUpdateImage: (id: string, updates: Partial<CanvasImage>) => void
  onDeleteImage: (id: string) => void
  onReorder?: (fromIndex: number, toIndex: number) => void
  selectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

function ImageItem({
  image,
  isSelected,
  onUpdate,
  onDelete,
  onSelect,
}: {
  image: CanvasImage
  isSelected: boolean
  onUpdate: (updates: Partial<CanvasImage>) => void
  onDelete: () => void
  onSelect: () => void
}) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 rounded-lg border p-2 transition-colors",
        isSelected ? "border-brand bg-brand/5" : "border-border bg-background hover:border-muted-foreground/50"
      )}
      onClick={onSelect}
    >
      {/* Drag handle */}
      <div className="text-muted-foreground cursor-grab">
        <GripVertical className="size-4" />
      </div>

      {/* Thumbnail */}
      <div className="size-10 shrink-0 overflow-hidden rounded-md border">
        <img
          src={image.src}
          alt={image.name}
          className="size-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{image.name}</p>
        <p className="text-muted-foreground text-xs capitalize">
          {DEVICE_TYPES[image.device].label}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={(e) => e.stopPropagation()}
            >
              <Settings2 className="size-3.5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64" align="end" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs">Device Frame</Label>
                <Select
                  value={image.device}
                  onValueChange={(value: DeviceType) => onUpdate({ device: value })}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(DEVICE_TYPES).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Device Color</Label>
                <Select
                  value={image.deviceColor}
                  onValueChange={(value: "light" | "dark") =>
                    onUpdate({ deviceColor: value })
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Shadow</Label>
                <Select
                  value={image.shadowIntensity}
                  onValueChange={(value: "none" | "subtle" | "medium" | "strong") =>
                    onUpdate({ shadowIntensity: value })
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="subtle">Subtle</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="strong">Strong</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Scale: {image.scale}%</Label>
                <Slider
                  value={[image.scale]}
                  onValueChange={([value]) => onUpdate({ scale: value })}
                  min={50}
                  max={150}
                  step={5}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          className="size-7 text-destructive hover:text-destructive"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}

export function ImageList({
  images,
  onUpdateImage,
  onDeleteImage,
  selectedId,
  onSelect,
  className,
}: ImageListProps) {
  const handleUpdate = useCallback(
    (id: string) => (updates: Partial<CanvasImage>) => {
      onUpdateImage(id, updates)
    },
    [onUpdateImage]
  )

  const handleDelete = useCallback(
    (id: string) => () => {
      onDeleteImage(id)
    },
    [onDeleteImage]
  )

  const handleSelect = useCallback(
    (id: string) => () => {
      onSelect?.(id)
    },
    [onSelect]
  )

  if (images.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-2", className)}>
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          isSelected={selectedId === image.id}
          onUpdate={handleUpdate(image.id)}
          onDelete={handleDelete(image.id)}
          onSelect={handleSelect(image.id)}
        />
      ))}
    </div>
  )
}
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/_components/image-list.tsx`

---

## Task 8: Create Main Client Component

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/page.client.tsx`

**Step 1: Create the main client component**

```tsx
"use client"

import { useCallback, useRef, useState } from "react"

import {
  Bookmark,
  Download,
  Image,
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

import { CanvasBackground } from "./_components/backgrounds"
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
  AspectRatio,
  BackgroundPreset,
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
  const handleAspectRatioChange = useCallback((value: AspectRatio) => {
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
  const handlePresetChange = useCallback((preset: BackgroundPreset) => {
    const presetConfig = BACKGROUND_PRESETS[preset]
    setState((prev) => ({
      ...prev,
      background: {
        preset,
        ...presetConfig,
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
                <ToolLayoutTabsTrigger value="images" icon={Image}>
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
                    value={state.background.primaryColor}
                    onChange={handleBackgroundColorChange("primaryColor")}
                  />

                  <ColorPickerRow
                    label="Secondary Color"
                    value={state.background.secondaryColor}
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
                      suffix="%"
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
```

**Step 2: Verify file exists**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/page.client.tsx`

---

## Task 9: Create Page Files

**Files:**
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/page.tsx`
- Create: `apps/v4/app/(app)/(tools)/tools/marketing-previews/layout.tsx`

**Step 1: Create page.tsx**

```tsx
import { Metadata } from "next"

import MarketingPreviewsPageClient from "./page.client"

const title = "Marketing Previews"
const description = "Create stunning marketing screenshots with device mockups and beautiful backgrounds"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function MarketingPreviewsPage() {
  return <MarketingPreviewsPageClient />
}
```

**Step 2: Create layout.tsx**

```tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Previews",
  description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
  openGraph: {
    title: "Marketing Previews",
    description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Marketing Previews")}&description=${encodeURIComponent("Create stunning marketing screenshots with device mockups and beautiful backgrounds.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Previews",
    description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Marketing Previews")}&description=${encodeURIComponent("Create stunning marketing screenshots with device mockups and beautiful backgrounds.")}`,
      },
    ],
  },
}

export default function MarketingPreviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

**Step 3: Verify files exist**

Run: `ls apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/`

---

## Task 10: Add Tool to Listing Page

**Files:**
- Modify: `apps/v4/app/(app)/(tools)/tools/page.tsx`

**Step 1: Add isometric icon for Marketing Previews**

Add after the existing icon functions (around line 557, before the `tools` array):

```tsx
function MarketingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Layered cards representing multiple screenshots */}
      <path
        d="M10 90L10 40L50 20L90 40L90 90L50 110L10 90Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Back card */}
      <path
        d="M15 85L15 45L50 27L85 45L85 85L50 103L15 85Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Middle card */}
      <path
        d="M20 80L20 50L50 34L80 50L80 80L50 96L20 80Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Front card with screen */}
      <path
        d="M25 75L25 55L50 41L75 55L75 75L50 89L25 75Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Screen content lines */}
      <path
        d="M35 62L50 54L65 62"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M35 68L50 60L65 68"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Device frame indicator */}
      <path
        d="M45 48L50 45.5L55 48"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* Decorative orbs representing backgrounds */}
      <circle cx="20" cy="30" r="8" stroke="currentColor" />
      <circle cx="80" cy="25" r="6" stroke="currentColor" />
      <circle cx="85" cy="100" r="5" stroke="currentColor" />
    </svg>
  )
}
```

**Step 2: Add to tools array**

Add to the `tools` array (around line 590):

```tsx
{
  slug: "marketing-previews",
  title: "Marketing Previews",
  description: "Create stunning screenshots",
  icon: <MarketingIcon className="size-32" />,
},
```

**Step 3: Verify the tool appears**

Run: `grep -n "marketing-previews" apps/v4/app/\(app\)/\(tools\)/tools/page.tsx`

---

## Task 11: Verify and Test

**Step 1: Run type check**

Run: `cd apps/v4 && bun run typecheck`

**Step 2: Start dev server and verify**

Run: `cd apps/v4 && bun run dev`

Then open `http://localhost:4000/tools/marketing-previews` in browser.

**Step 3: Test functionality**

- Upload an image via drag & drop
- Paste an image from clipboard
- Change aspect ratios
- Switch device frames
- Try different backgrounds
- Export as PNG/JPG

---

## Task 12: Commit

**Step 1: Stage all new files**

```bash
git add apps/v4/app/\(app\)/\(tools\)/tools/marketing-previews/
git add apps/v4/app/\(app\)/\(tools\)/tools/page.tsx
```

**Step 2: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: add marketing previews tool

- Add tool for creating marketing screenshots
- Support device mockups (iPhone, MacBook, Browser, iPad)
- Multiple background styles (gradient blur, mesh, dots, lines, solid)
- Three aspect ratios: 16:9, 1:1, 9:16
- Multi-image layouts (single, 2-up, 3-up, grid)
- PNG/JPG export at 1x, 2x, 3x resolution
- File upload and clipboard paste support

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

Plan complete and saved to `docs/plans/2026-01-08-marketing-previews.md`. Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

Which approach?