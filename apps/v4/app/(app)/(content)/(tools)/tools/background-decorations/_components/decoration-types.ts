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
  animationDuration: 62,
  animationDelay: 0.8,
  glowColor: "hsl(142 76% 36%)",
  glowSize: 10,
  glowOpacity: 0.4,
  direction: "both",
  easing: "spring",
  darkMode: false,
}

export const defaultGradientConfig: GradientConfig = {
  type: "radial",
  angle: 45,
  colors: [
    { color: "hsl(142 76% 36% / 0.15)", position: 0 },
    { color: "transparent", position: 70 },
  ],
  animated: false,
  animationDuration: 10,
}

export const defaultDotsConfig: DotsConfig = {
  size: 1,
  spacing: 24,
  color: "hsl(var(--foreground))",
  opacity: 0.3,
  fade: "radial",
}

export const defaultGridConfig: GridConfig = {
  size: 40,
  strokeWidth: 1,
  color: "hsl(var(--foreground))",
  opacity: 0.1,
  fade: "none",
}

export const defaultNoiseConfig: NoiseConfig = {
  opacity: 0.03,
  blendMode: "overlay",
  scale: 1,
}

export const defaultGlowConfig: GlowConfig = {
  color: "hsl(142 76% 36%)",
  size: 400,
  blur: 100,
  x: 50,
  y: 30,
  opacity: 0.3,
  animated: false,
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
