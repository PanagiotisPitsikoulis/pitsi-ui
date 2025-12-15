export type DecorationCategory =
  | "guides"
  | "gradients"
  | "patterns"
  | "effects"
  | "animated"

export interface DecorationPreset {
  id: string
  name: string
  category: DecorationCategory
  description: string
  preview: string // CSS for preview thumbnail
}

export interface GuidesConfig {
  columnCount: number
  animated: boolean
  animationDuration: number
  animationDelay: number
  glowColor: string
  glowSize: number
  glowOpacity: number
  direction: "top-to-bottom" | "bottom-to-top" | "both" | "random"
  easing: "linear" | "easeIn" | "easeOut" | "easeInOut" | "spring"
  darkMode: boolean
}

export interface GradientConfig {
  type: "linear" | "radial" | "conic"
  angle: number
  colors: { color: string; position: number }[]
  animated: boolean
  animationDuration: number
}

export interface DotsConfig {
  size: number
  spacing: number
  color: string
  opacity: number
  fade: "none" | "radial" | "top" | "bottom"
}

export interface GridConfig {
  size: number
  strokeWidth: number
  color: string
  opacity: number
  fade: "none" | "radial" | "edges"
}

export interface NoiseConfig {
  opacity: number
  blendMode: "normal" | "overlay" | "soft-light" | "multiply"
  scale: number
}

export interface GlowConfig {
  color: string
  size: number
  blur: number
  x: number
  y: number
  opacity: number
  animated: boolean
}

export type DecorationType =
  | "guides"
  | "gradient"
  | "dots"
  | "grid"
  | "noise"
  | "glow"

export interface DecorationState {
  type: DecorationType
  guides: GuidesConfig
  gradient: GradientConfig
  dots: DotsConfig
  grid: GridConfig
  noise: NoiseConfig
  glow: GlowConfig
}

export const defaultGuidesConfig: GuidesConfig = {
  columnCount: 6,
  animated: true,
  animationDuration: 45,
  animationDelay: 0.6,
  glowColor: "hsl(185 95% 50%)",
  glowSize: 12,
  glowOpacity: 0.5,
  direction: "both",
  easing: "spring",
  darkMode: false,
}

export const defaultGradientConfig: GradientConfig = {
  type: "linear",
  angle: 135,
  colors: [
    { color: "hsl(185 85% 50% / 0.2)", position: 0 },
    { color: "hsl(280 75% 55% / 0.2)", position: 50 },
    { color: "hsl(320 85% 55% / 0.2)", position: 100 },
  ],
  animated: true,
  animationDuration: 12,
}

export const defaultDotsConfig: DotsConfig = {
  size: 1,
  spacing: 20,
  color: "hsl(260 70% 70%)",
  opacity: 0.35,
  fade: "radial",
}

export const defaultGridConfig: GridConfig = {
  size: 32,
  strokeWidth: 1,
  color: "hsl(210 100% 50%)",
  opacity: 0.12,
  fade: "radial",
}

export const defaultNoiseConfig: NoiseConfig = {
  opacity: 0.04,
  blendMode: "overlay",
  scale: 1.2,
}

export const defaultGlowConfig: GlowConfig = {
  color: "hsl(270 85% 60%)",
  size: 450,
  blur: 120,
  x: 50,
  y: 35,
  opacity: 0.35,
  animated: true,
}

export const defaultDecorationState: DecorationState = {
  type: "guides",
  guides: defaultGuidesConfig,
  gradient: defaultGradientConfig,
  dots: defaultDotsConfig,
  grid: defaultGridConfig,
  noise: defaultNoiseConfig,
  glow: defaultGlowConfig,
}
