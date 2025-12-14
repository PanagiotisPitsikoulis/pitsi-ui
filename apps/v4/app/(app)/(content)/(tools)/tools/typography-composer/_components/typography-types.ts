export interface ScaleRatio {
  name: string
  value: number
  description: string
}

export interface TypographyState {
  // Base settings
  baseSize: number
  scaleRatio: number
  unit: "px" | "rem"

  // Body text
  bodyFont: string
  bodyWeight: number
  bodyLineHeight: number
  bodyLetterSpacing: number

  // Headings
  headingFont: string
  headingWeight: number
  headingLineHeight: number
  headingLetterSpacing: number

  // Scale steps
  stepsUp: number
  stepsDown: number
}

export interface TypographyPreset {
  label: string
  description: string
  state: TypographyState
}

export interface SavedTypography {
  id: string
  name: string
  state: TypographyState
  createdAt: number
}

export interface TypeScaleValue {
  name: string
  size: number
  cssSize: string
  lineHeight: number
  letterSpacing: number
  isHeading: boolean
}
