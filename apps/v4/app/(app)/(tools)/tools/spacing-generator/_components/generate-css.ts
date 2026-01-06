import { calculateSpacingValues } from "./spacing-presets"
import type { SpacingState, SpacingValue } from "./spacing-types"

export function generateSpacingCSS(state: SpacingState): string {
  const values = calculateSpacingValues(state)
  const { prefix } = state

  const lines = [":root {"]

  values.forEach(({ name, cssValue }) => {
    lines.push(`  --${prefix}-${name}: ${cssValue};`)
  })

  lines.push("}")

  return lines.join("\n")
}

export function generateTailwindV4Spacing(state: SpacingState): string {
  const values = calculateSpacingValues(state)
  const { prefix } = state

  const lines = ["@theme {"]

  values.forEach(({ name, cssValue }) => {
    lines.push(`  --${prefix}-${name}: ${cssValue};`)
  })

  lines.push("}")

  return lines.join("\n")
}

export function generateSpacingJSON(state: SpacingState): string {
  const values = calculateSpacingValues(state)
  const { prefix } = state

  const obj: Record<string, string> = {}
  values.forEach(({ name, cssValue }) => {
    obj[`${prefix}-${name}`] = cssValue
  })

  return JSON.stringify(obj, null, 2)
}

export function generateTailwindConfig(state: SpacingState): string {
  const values = calculateSpacingValues(state)

  const spacing: Record<string, string> = {}
  values.forEach(({ name, cssValue }) => {
    spacing[name] = cssValue
  })

  return `// tailwind.config.js
module.exports = {
  theme: {
    spacing: ${JSON.stringify(spacing, null, 6).replace(/^/gm, "    ").trim()},
  },
}`
}
