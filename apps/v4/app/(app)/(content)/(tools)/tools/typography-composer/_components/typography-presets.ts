import type {
  TypeScaleValue,
  TypographyPreset,
  TypographyState,
} from "./typography-types"

export const defaultState: TypographyState = {
  baseSize: 16,
  scaleRatio: 1.25,
  unit: "rem",
  bodyFont: "Inter",
  bodyWeight: 400,
  bodyLineHeight: 1.5,
  bodyLetterSpacing: 0,
  headingFont: "Inter",
  headingWeight: 700,
  headingLineHeight: 1.2,
  headingLetterSpacing: -0.02,
  stepsUp: 6,
  stepsDown: 2,
}

export const typographyPresets: Record<string, TypographyPreset> = {
  default: {
    label: "Default",
    description: "Inter, Major Third (1.25) - balanced and versatile",
    state: defaultState,
  },
  editorial: {
    label: "Editorial",
    description: "Playfair Display + Source Serif for elegant reading",
    state: {
      baseSize: 18,
      scaleRatio: 1.333,
      unit: "rem",
      bodyFont: "Source Serif 4",
      bodyWeight: 400,
      bodyLineHeight: 1.6,
      bodyLetterSpacing: 0,
      headingFont: "Playfair Display",
      headingWeight: 700,
      headingLineHeight: 1.1,
      headingLetterSpacing: -0.03,
      stepsUp: 6,
      stepsDown: 2,
    },
  },
  modern: {
    label: "Modern",
    description: "Plus Jakarta Sans with Minor Third ratio",
    state: {
      baseSize: 16,
      scaleRatio: 1.2,
      unit: "rem",
      bodyFont: "Plus Jakarta Sans",
      bodyWeight: 400,
      bodyLineHeight: 1.5,
      bodyLetterSpacing: 0,
      headingFont: "Plus Jakarta Sans",
      headingWeight: 700,
      headingLineHeight: 1.2,
      headingLetterSpacing: -0.02,
      stepsUp: 6,
      stepsDown: 2,
    },
  },
  technical: {
    label: "Technical",
    description: "JetBrains Mono + Inter for documentation",
    state: {
      baseSize: 15,
      scaleRatio: 1.125,
      unit: "rem",
      bodyFont: "Inter",
      bodyWeight: 400,
      bodyLineHeight: 1.6,
      bodyLetterSpacing: 0,
      headingFont: "JetBrains Mono",
      headingWeight: 600,
      headingLineHeight: 1.3,
      headingLetterSpacing: -0.01,
      stepsUp: 5,
      stepsDown: 2,
    },
  },
  bold: {
    label: "Bold",
    description: "Bebas Neue + Open Sans for impactful headlines",
    state: {
      baseSize: 16,
      scaleRatio: 1.5,
      unit: "rem",
      bodyFont: "Open Sans",
      bodyWeight: 400,
      bodyLineHeight: 1.6,
      bodyLetterSpacing: 0,
      headingFont: "Bebas Neue",
      headingWeight: 400,
      headingLineHeight: 1.0,
      headingLetterSpacing: 0.02,
      stepsUp: 6,
      stepsDown: 2,
    },
  },
  elegant: {
    label: "Elegant",
    description: "Cormorant Garamond with Golden Ratio",
    state: {
      baseSize: 18,
      scaleRatio: 1.618,
      unit: "rem",
      bodyFont: "Cormorant Garamond",
      bodyWeight: 400,
      bodyLineHeight: 1.7,
      bodyLetterSpacing: 0.01,
      headingFont: "Cormorant Garamond",
      headingWeight: 600,
      headingLineHeight: 1.1,
      headingLetterSpacing: -0.01,
      stepsUp: 5,
      stepsDown: 2,
    },
  },
  compact: {
    label: "Compact",
    description: "14px base with Minor Second for dense UIs",
    state: {
      baseSize: 14,
      scaleRatio: 1.067,
      unit: "rem",
      bodyFont: "Inter",
      bodyWeight: 400,
      bodyLineHeight: 1.4,
      bodyLetterSpacing: 0,
      headingFont: "Inter",
      headingWeight: 600,
      headingLineHeight: 1.2,
      headingLetterSpacing: -0.01,
      stepsUp: 6,
      stepsDown: 2,
    },
  },
  display: {
    label: "Display",
    description: "18px base with Augmented Fourth for large screens",
    state: {
      baseSize: 18,
      scaleRatio: 1.414,
      unit: "rem",
      bodyFont: "DM Sans",
      bodyWeight: 400,
      bodyLineHeight: 1.5,
      bodyLetterSpacing: 0,
      headingFont: "DM Sans",
      headingWeight: 700,
      headingLineHeight: 1.1,
      headingLetterSpacing: -0.03,
      stepsUp: 6,
      stepsDown: 2,
    },
  },
}

// Calculate type scale values
export function calculateTypeScale(state: TypographyState): TypeScaleValue[] {
  const { baseSize, scaleRatio, unit, stepsUp, stepsDown, headingLineHeight, headingLetterSpacing, bodyLineHeight, bodyLetterSpacing } = state
  const values: TypeScaleValue[] = []

  // Steps down (small text)
  for (let i = stepsDown; i >= 1; i--) {
    const size = baseSize / Math.pow(scaleRatio, i)
    const roundedSize = Math.round(size * 100) / 100
    const name = i === 1 ? "sm" : i === 2 ? "xs" : `${i}xs`
    values.push({
      name,
      size: roundedSize,
      cssSize: unit === "rem" ? `${(roundedSize / 16).toFixed(3)}rem` : `${roundedSize}px`,
      lineHeight: bodyLineHeight,
      letterSpacing: bodyLetterSpacing,
      isHeading: false,
    })
  }

  // Base size
  values.push({
    name: "base",
    size: baseSize,
    cssSize: unit === "rem" ? `${(baseSize / 16).toFixed(3)}rem` : `${baseSize}px`,
    lineHeight: bodyLineHeight,
    letterSpacing: bodyLetterSpacing,
    isHeading: false,
  })

  // Steps up (headings)
  const headingNames = ["lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"]
  for (let i = 1; i <= stepsUp; i++) {
    const size = baseSize * Math.pow(scaleRatio, i)
    const roundedSize = Math.round(size * 100) / 100
    values.push({
      name: headingNames[i - 1] || `${i}xl`,
      size: roundedSize,
      cssSize: unit === "rem" ? `${(roundedSize / 16).toFixed(3)}rem` : `${roundedSize}px`,
      lineHeight: headingLineHeight,
      letterSpacing: headingLetterSpacing,
      isHeading: true,
    })
  }

  return values
}

// Popular Google Fonts for the picker
export const POPULAR_FONTS = [
  "Inter",
  "Roboto",
  "Open Sans",
  "Lato",
  "Montserrat",
  "Source Sans 3",
  "Poppins",
  "DM Sans",
  "Plus Jakarta Sans",
  "Nunito",
  "Work Sans",
  "Raleway",
  "Outfit",
  "Manrope",
  "Space Grotesk",
  "Playfair Display",
  "Merriweather",
  "Lora",
  "Source Serif 4",
  "Cormorant Garamond",
  "Libre Baskerville",
  "Crimson Text",
  "PT Serif",
  "Bebas Neue",
  "Oswald",
  "Anton",
  "Archivo Black",
  "JetBrains Mono",
  "Fira Code",
  "Source Code Pro",
  "IBM Plex Mono",
]
