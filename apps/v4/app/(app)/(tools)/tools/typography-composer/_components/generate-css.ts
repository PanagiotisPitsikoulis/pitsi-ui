import { getRatioName } from "./scale-ratios"
import { calculateTypeScale } from "./typography-presets"
import type { TypographyState } from "./typography-types"

export function generateTypographyCSS(state: TypographyState): string {
  const scale = calculateTypeScale(state)
  const ratioName = getRatioName(state.scaleRatio)

  const lines = [
    `/* Type Scale - ${ratioName} (${state.scaleRatio}) */`,
    `:root {`,
    `  /* Font Families */`,
    `  --font-body: "${state.bodyFont}", sans-serif;`,
    `  --font-heading: "${state.headingFont}", sans-serif;`,
    ``,
    `  /* Font Sizes */`,
  ]

  scale.forEach(({ name, cssSize }) => {
    lines.push(`  --font-size-${name}: ${cssSize};`)
  })

  lines.push(``)
  lines.push(`  /* Line Heights */`)
  lines.push(`  --leading-tight: ${state.headingLineHeight};`)
  lines.push(`  --leading-normal: ${state.bodyLineHeight};`)
  lines.push(
    `  --leading-relaxed: ${(state.bodyLineHeight + 0.25).toFixed(2)};`
  )
  lines.push(``)
  lines.push(`  /* Letter Spacing */`)
  lines.push(`  --tracking-tight: ${state.headingLetterSpacing}em;`)
  lines.push(`  --tracking-normal: ${state.bodyLetterSpacing}em;`)
  lines.push(`  --tracking-wide: 0.05em;`)
  lines.push(``)
  lines.push(`  /* Font Weights */`)
  lines.push(`  --font-weight-normal: ${state.bodyWeight};`)
  lines.push(`  --font-weight-bold: ${state.headingWeight};`)
  lines.push(`}`)

  return lines.join("\n")
}

export function generateTailwindV4Typography(state: TypographyState): string {
  const scale = calculateTypeScale(state)
  const ratioName = getRatioName(state.scaleRatio)

  const lines = [
    `/* Type Scale - ${ratioName} (${state.scaleRatio}) */`,
    `@theme {`,
    `  /* Font Families */`,
    `  --font-body: "${state.bodyFont}", sans-serif;`,
    `  --font-heading: "${state.headingFont}", sans-serif;`,
    ``,
    `  /* Font Sizes */`,
  ]

  scale.forEach(({ name, cssSize }) => {
    lines.push(`  --font-size-${name}: ${cssSize};`)
  })

  lines.push(``)
  lines.push(`  /* Line Heights */`)
  lines.push(`  --leading-tight: ${state.headingLineHeight};`)
  lines.push(`  --leading-normal: ${state.bodyLineHeight};`)
  lines.push(
    `  --leading-relaxed: ${(state.bodyLineHeight + 0.25).toFixed(2)};`
  )
  lines.push(`}`)

  return lines.join("\n")
}

export function generateFontImports(state: TypographyState): string {
  const fonts = new Set([state.bodyFont, state.headingFont])
  const weights = new Set([state.bodyWeight, state.headingWeight])
  const weightsStr = Array.from(weights)
    .sort((a, b) => a - b)
    .join(";")

  const imports = Array.from(fonts).map((font) => {
    const fontName = font.replace(/ /g, "+")
    return `@import url('https://fonts.googleapis.com/css2?family=${fontName}:wght@${weightsStr}&display=swap');`
  })

  return imports.join("\n")
}

export function generateTypographyJSON(state: TypographyState): string {
  const scale = calculateTypeScale(state)

  const obj = {
    fonts: {
      body: state.bodyFont,
      heading: state.headingFont,
    },
    scale: Object.fromEntries(
      scale.map(({ name, cssSize }) => [name, cssSize])
    ),
    lineHeights: {
      tight: state.headingLineHeight,
      normal: state.bodyLineHeight,
      relaxed: state.bodyLineHeight + 0.25,
    },
    letterSpacing: {
      tight: `${state.headingLetterSpacing}em`,
      normal: `${state.bodyLetterSpacing}em`,
    },
    weights: {
      normal: state.bodyWeight,
      bold: state.headingWeight,
    },
  }

  return JSON.stringify(obj, null, 2)
}
