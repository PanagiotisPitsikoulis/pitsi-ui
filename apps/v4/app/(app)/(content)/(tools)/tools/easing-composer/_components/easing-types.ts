export interface CubicBezier {
  x1: number
  y1: number
  x2: number
  y2: number
}

export interface EasingPreset {
  id: string
  label: string
  description: string
  category: "standard" | "ease-in" | "ease-out" | "ease-in-out"
  bezier: CubicBezier
}

export interface SavedEasing {
  id: string
  name: string
  bezier: CubicBezier
  createdAt: number
}

export type AnimationType = "translate" | "scale" | "rotate" | "opacity" | "all"

export const ANIMATION_TYPES: { value: AnimationType; label: string }[] = [
  { value: "translate", label: "Translate" },
  { value: "scale", label: "Scale" },
  { value: "rotate", label: "Rotate" },
  { value: "opacity", label: "Opacity" },
  { value: "all", label: "All" },
]
