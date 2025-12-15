export type ScaleType = "linear" | "geometric" | "fibonacci" | "custom"

export interface SpacingState {
  baseSize: number
  scale: ScaleType
  multiplier: number
  unit: "px" | "rem"
  steps: number
  customValues: number[]
  prefix: string
}

export interface SpacingPreset {
  label: string
  description: string
  state: SpacingState
}

export interface SavedSpacing {
  id: string
  name: string
  state: SpacingState
  createdAt: number
}

export interface SpacingValue {
  name: string
  value: number
  cssValue: string
}
