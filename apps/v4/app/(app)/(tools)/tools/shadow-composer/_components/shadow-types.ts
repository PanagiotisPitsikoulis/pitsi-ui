export interface ShadowLayer {
  id: string
  type: "outer" | "inset"
  color: string
  horizontal: number
  vertical: number
  blur: number
  spread: number
  opacity: number
}

export interface ShadowPreset {
  name: string
  label: string
  layers: Omit<ShadowLayer, "id">[]
}

export const defaultShadowLayer: Omit<ShadowLayer, "id"> = {
  type: "outer",
  color: "#11111a",
  horizontal: 0,
  vertical: 4,
  blur: 16,
  spread: 0,
  opacity: 0.1,
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}

export function createShadowLayer(
  overrides?: Partial<Omit<ShadowLayer, "id">>
): ShadowLayer {
  return {
    id: generateId(),
    ...defaultShadowLayer,
    ...overrides,
  }
}

export function shadowLayerToCSS(layer: ShadowLayer): string {
  const { type, color, horizontal, vertical, blur, spread, opacity } = layer
  const inset = type === "inset" ? "inset " : ""

  // Convert hex color to rgba
  const hex = color.replace("#", "")
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return `${inset}${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function shadowsToCSS(layers: ShadowLayer[]): string {
  if (layers.length === 0) return "none"
  return layers.map(shadowLayerToCSS).join(",\n    ")
}

export function generateCSSVariable(
  name: string,
  layers: ShadowLayer[]
): string {
  return `--shadow-${name}: ${shadowsToCSS(layers)};`
}
