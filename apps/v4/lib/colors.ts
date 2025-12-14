import * as culori from "culori"
import type { Hsl } from "culori"

export type ColorFormat = "hsl" | "rgb" | "hex" | "oklch"

export const formatNumber = (num?: number): string => {
  if (!num) return "0"
  return num % 1 === 0 ? String(num) : num.toFixed(4)
}

export const formatHsl = (hsl: Hsl): string => {
  return `hsl(${formatNumber(hsl.h)} ${formatNumber((hsl.s ?? 0) * 100)}% ${formatNumber((hsl.l ?? 0) * 100)}%)`
}

export const colorFormatter = (
  colorValue: string,
  format: ColorFormat = "hsl"
): string => {
  try {
    const color = culori.parse(colorValue)
    if (!color) throw new Error("Invalid color input")

    switch (format) {
      case "hsl": {
        const hsl = culori.converter("hsl")(color)
        return formatHsl(hsl)
      }
      case "rgb":
        return culori.formatRgb(color)
      case "oklch": {
        const oklch = culori.converter("oklch")(color)
        return `oklch(${formatNumber(oklch.l)} ${formatNumber(oklch.c)} ${formatNumber(oklch.h)})`
      }
      case "hex":
        return culori.formatHex(color)
      default:
        return colorValue
    }
  } catch {
    return colorValue
  }
}

export const convertToHSL = (colorValue: string): string =>
  colorFormatter(colorValue, "hsl")

export const convertToHex = (colorValue: string): string =>
  colorFormatter(colorValue, "hex")

export const parseColor = (colorValue: string) => {
  try {
    return culori.parse(colorValue)
  } catch {
    return null
  }
}

export const isValidColor = (colorValue: string): boolean => {
  return parseColor(colorValue) !== null
}

// Compare two colors for equality
export const colorsEqual = (a: string, b: string): boolean => {
  try {
    const hexA = culori.formatHex(culori.parse(a)!)
    const hexB = culori.formatHex(culori.parse(b)!)
    return hexA === hexB
  } catch {
    return a === b
  }
}
