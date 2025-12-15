import type { ScaleRatio } from "./typography-types"

export const SCALE_RATIOS: ScaleRatio[] = [
  {
    name: "Minor Second",
    value: 1.067,
    description: "Subtle, minimal contrast",
  },
  {
    name: "Major Second",
    value: 1.125,
    description: "Gentle progression",
  },
  {
    name: "Minor Third",
    value: 1.2,
    description: "Balanced, versatile",
  },
  {
    name: "Major Third",
    value: 1.25,
    description: "Clear hierarchy",
  },
  {
    name: "Perfect Fourth",
    value: 1.333,
    description: "Strong contrast",
  },
  {
    name: "Augmented Fourth",
    value: 1.414,
    description: "Bold, dramatic",
  },
  {
    name: "Perfect Fifth",
    value: 1.5,
    description: "Classical harmony",
  },
  {
    name: "Golden Ratio",
    value: 1.618,
    description: "Natural proportion",
  },
]

export function getRatioByValue(value: number): ScaleRatio | undefined {
  return SCALE_RATIOS.find((r) => Math.abs(r.value - value) < 0.01)
}

export function getRatioName(value: number): string {
  const ratio = getRatioByValue(value)
  return ratio ? ratio.name : `Custom (${value.toFixed(3)})`
}
