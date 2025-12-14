import Color from "color"

// Figma uses RGBA values in 0-1 range
export interface FigmaColor {
  r: number
  g: number
  b: number
  a: number
}

export interface FigmaEffect {
  type: "DROP_SHADOW" | "INNER_SHADOW"
  color: FigmaColor
  offset: { x: number; y: number }
  radius: number
  spread: number
  visible: boolean
  blendMode: "NORMAL"
}

/**
 * Convert any CSS color string to Figma RGBA format (0-1 range)
 */
export function colorToFigmaRGBA(colorString: string): FigmaColor {
  try {
    const color = Color(colorString)
    const rgb = color.rgb().array()
    return {
      r: Math.round((rgb[0] / 255) * 1000) / 1000,
      g: Math.round((rgb[1] / 255) * 1000) / 1000,
      b: Math.round((rgb[2] / 255) * 1000) / 1000,
      a: Math.round(color.alpha() * 1000) / 1000,
    }
  } catch {
    return { r: 0, g: 0, b: 0, a: 1 }
  }
}

/**
 * Generate Figma color variables JSON from theme styles
 */
export function generateFigmaColorVariables(
  styles: Record<string, string>
): string {
  const figmaColors: Record<string, FigmaColor> = {}

  // Filter only color properties (exclude radius, etc.)
  const colorKeys = Object.keys(styles).filter(
    (key) => !key.includes("radius")
  )

  for (const key of colorKeys) {
    const value = styles[key]
    if (typeof value === "string" && value) {
      figmaColors[key] = colorToFigmaRGBA(value)
    }
  }

  const exportData = {
    version: "1.0",
    name: "Theme Colors",
    colors: figmaColors,
  }

  return JSON.stringify(exportData, null, 2)
}

/**
 * Convert shadow layer to Figma effect format
 */
export function shadowLayerToFigmaEffect(layer: {
  type: "outer" | "inset"
  color: string
  horizontal: number
  vertical: number
  blur: number
  spread: number
  opacity: number
}): FigmaEffect {
  const baseColor = colorToFigmaRGBA(layer.color)

  return {
    type: layer.type === "inset" ? "INNER_SHADOW" : "DROP_SHADOW",
    color: {
      ...baseColor,
      a: layer.opacity,
    },
    offset: {
      x: layer.horizontal,
      y: layer.vertical,
    },
    radius: layer.blur,
    spread: layer.spread,
    visible: true,
    blendMode: "NORMAL",
  }
}

/**
 * Generate Figma effects JSON from shadow layers
 */
export function generateFigmaShadowEffects(
  layers: Array<{
    type: "outer" | "inset"
    color: string
    horizontal: number
    vertical: number
    blur: number
    spread: number
    opacity: number
  }>
): string {
  const effects = layers.map(shadowLayerToFigmaEffect)

  const exportData = {
    version: "1.0",
    name: "Shadow Effect",
    effects,
  }

  return JSON.stringify(exportData, null, 2)
}
