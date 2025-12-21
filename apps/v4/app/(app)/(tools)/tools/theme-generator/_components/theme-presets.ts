import type { ThemeStyles, ThemeStyleProps } from "./theme-types"

export interface ThemePreset {
  label: string
  styles: ThemeStyles
}

// Base neutral colors matching globals.css structure
const lightBase: ThemeStyleProps = {
  background: "#fefefe",
  foreground: "#1f1f1f",
  card: "#fcfcfc",
  "card-foreground": "#1f1f1f",
  popover: "#ffffff",
  "popover-foreground": "#1f1f1f",
  primary: "#2d2d2d",
  "primary-foreground": "#fbfbfb",
  secondary: "#f5f5f5",
  "secondary-foreground": "#2d2d2d",
  muted: "#f7f7f7",
  "muted-foreground": "#777777",
  accent: "#f5f5f5",
  "accent-foreground": "#2d2d2d",
  destructive: "#dc4545",
  "destructive-foreground": "#fefefe",
  success: "#3d9a5f",
  "success-foreground": "#fefefe",
  warning: "#c9a227",
  "warning-foreground": "#1f1f1f",
  info: "#4a7dc4",
  "info-foreground": "#fefefe",
  border: "#f5f5f5",
  input: "#f0f0f0",
  ring: "#9a9a9a",
  "chart-1": "#6b9bd1",
  "chart-2": "#5889c4",
  "chart-3": "#4677b7",
  "chart-4": "#3565aa",
  "chart-5": "#25539d",
  radius: "1.5rem",
  sidebar: "#ffffff",
  "sidebar-foreground": "#1f1f1f",
  "sidebar-primary": "#2d2d2d",
  "sidebar-primary-foreground": "#fbfbfb",
  "sidebar-accent": "#f5f5f5",
  "sidebar-accent-foreground": "#2d2d2d",
  "sidebar-border": "#f0f0f0",
  "sidebar-ring": "#9a9a9a",
  code: "#fefefe",
  "code-foreground": "#1f1f1f",
  "code-highlight": "#f0f4f8",
  "code-number": "#777777",
  selection: "#2d2d2d",
  "selection-foreground": "#ffffff",
  page: "#fefefe",
  brand: "#777777",
  "brand-complementary": "#999999",
}

const darkBase: ThemeStyleProps = {
  background: "#262626",
  foreground: "#fcfcfc",
  card: "#2d2d2d",
  "card-foreground": "#fcfcfc",
  popover: "#2d2d2d",
  "popover-foreground": "#fcfcfc",
  primary: "#ebebeb",
  "primary-foreground": "#2d2d2d",
  secondary: "#383838",
  "secondary-foreground": "#fcfcfc",
  muted: "#333333",
  "muted-foreground": "#9a9a9a",
  accent: "#383838",
  "accent-foreground": "#fcfcfc",
  destructive: "#e05555",
  "destructive-foreground": "#1f1f1f",
  success: "#4db072",
  "success-foreground": "#1f1f1f",
  warning: "#d4b23a",
  "warning-foreground": "#1f1f1f",
  info: "#5a8fd4",
  "info-foreground": "#1f1f1f",
  border: "#333333",
  input: "#363636",
  ring: "#777777",
  "chart-1": "#7babd8",
  "chart-2": "#6b9bd1",
  "chart-3": "#5889c4",
  "chart-4": "#4677b7",
  "chart-5": "#3565aa",
  radius: "1.5rem",
  sidebar: "#1f1f1f",
  "sidebar-foreground": "#f7f7f7",
  "sidebar-primary": "#ebebeb",
  "sidebar-primary-foreground": "#2d2d2d",
  "sidebar-accent": "#2d2d2d",
  "sidebar-accent-foreground": "#f7f7f7",
  "sidebar-border": "#2f2f2f",
  "sidebar-ring": "#777777",
  code: "#262626",
  "code-foreground": "#d6d6d6",
  "code-highlight": "#2d3748",
  "code-number": "#9a9a9a",
  selection: "#ebebeb",
  "selection-foreground": "#2d2d2d",
  page: "#141414",
  brand: "#9a9a9a",
  "brand-complementary": "#b0b0b0",
}

// Color definitions for each palette
interface ColorPalette {
  name: string
  light: {
    brand: string
    brandComplementary: string
    tint: string // subtle tint color for tinted variant
  }
  dark: {
    brand: string
    brandComplementary: string
    tint: string
  }
}

const palettes: ColorPalette[] = [
  {
    name: "Azure",
    light: { brand: "#5c8ac4", brandComplementary: "#c4915c", tint: "#f8fafc" },
    dark: { brand: "#8eb3d4", brandComplementary: "#d4b38e", tint: "#1a2332" },
  },
  {
    name: "Violet",
    light: { brand: "#8c6dc4", brandComplementary: "#8cb85c", tint: "#faf8fc" },
    dark: { brand: "#b097d4", brandComplementary: "#b0d48e", tint: "#251a32" },
  },
  {
    name: "Rose",
    light: { brand: "#c45c7e", brandComplementary: "#5cb89e", tint: "#fcf8fa" },
    dark: { brand: "#d48ea8", brandComplementary: "#8ed4c2", tint: "#321a25" },
  },
  {
    name: "Sage",
    light: { brand: "#5cb87e", brandComplementary: "#a85cb8", tint: "#f8fcf9" },
    dark: { brand: "#5a9e72", brandComplementary: "#c88ed4", tint: "#1a3220" },
  },
  {
    name: "Amber",
    light: { brand: "#c4a15c", brandComplementary: "#5c6dc4", tint: "#fcfbf8" },
    dark: { brand: "#b8944a", brandComplementary: "#8e97d4", tint: "#32291a" },
  },
  {
    name: "Cyan",
    light: { brand: "#5cb4b8", brandComplementary: "#c4665c", tint: "#f8fcfc" },
    dark: { brand: "#4a9ea2", brandComplementary: "#d4988e", tint: "#1a3232" },
  },
  {
    name: "Indigo",
    light: { brand: "#5c6fc4", brandComplementary: "#c4a85c", tint: "#f8f9fc" },
    dark: { brand: "#8e9ad4", brandComplementary: "#d4c38e", tint: "#1a1d32" },
  },
  {
    name: "Coral",
    light: { brand: "#c4705c", brandComplementary: "#5c9ac4", tint: "#fcf9f8" },
    dark: { brand: "#b86a58", brandComplementary: "#8ebcd4", tint: "#321f1a" },
  },
  {
    name: "Forest",
    light: { brand: "#5cb870", brandComplementary: "#b85c9c", tint: "#f8fcf9" },
    dark: { brand: "#8ed498", brandComplementary: "#d48ec0", tint: "#1a321e" },
  },
]

// Helper to create base theme (neutral with brand colors)
function createBaseTheme(palette: ColorPalette): ThemeStyles {
  return {
    light: {
      ...lightBase,
      // Ensure neutral borders
      border: "#f5f5f5",
      input: "#f0f0f0",
      "sidebar-border": "#f0f0f0",
      brand: palette.light.brand,
      "brand-complementary": palette.light.brandComplementary,
    },
    dark: {
      ...darkBase,
      // Ensure neutral borders
      border: "#333333",
      input: "#363636",
      "sidebar-border": "#2f2f2f",
      brand: palette.dark.brand,
      "brand-complementary": palette.dark.brandComplementary,
    },
  }
}

// Helper to create tinted theme (very subtle tint on neutrals, brand as primary)
function createTintedTheme(palette: ColorPalette): ThemeStyles {
  return {
    light: {
      ...lightBase,
      // Very subtle tint on backgrounds
      background: mixColors(palette.light.tint, "#fefefe", 0.3),
      card: "#ffffff",
      popover: "#ffffff",
      page: mixColors(palette.light.tint, "#fefefe", 0.4),
      // Subtle tint on muted/secondary/accent
      muted: mixColors(palette.light.tint, "#f7f7f7", 0.2),
      secondary: mixColors(palette.light.tint, "#f5f5f5", 0.2),
      accent: mixColors(palette.light.tint, "#f5f5f5", 0.2),
      // Primary is the brand color
      primary: palette.light.brand,
      "primary-foreground": "#ffffff",
      // Neutral borders - close to background
      border: "#f5f5f5",
      input: "#f0f0f0",
      sidebar: "#ffffff",
      "sidebar-border": "#f0f0f0",
      code: mixColors(palette.light.tint, "#fefefe", 0.3),
      "code-highlight": mixColors(palette.light.tint, "#f0f4f8", 0.3),
      brand: palette.light.brand,
      "brand-complementary": palette.light.brandComplementary,
    },
    dark: {
      ...darkBase,
      // Very subtle tint on backgrounds
      background: mixColors(palette.dark.tint, "#262626", 0.3),
      card: mixColors(palette.dark.tint, "#2d2d2d", 0.15),
      popover: mixColors(palette.dark.tint, "#2d2d2d", 0.15),
      page: mixColors(palette.dark.tint, "#141414", 0.3),
      // Subtle tint on muted/secondary/accent
      muted: mixColors(palette.dark.tint, "#333333", 0.2),
      secondary: mixColors(palette.dark.tint, "#383838", 0.2),
      accent: mixColors(palette.dark.tint, "#383838", 0.2),
      // Primary is the brand color
      primary: palette.dark.brand,
      "primary-foreground": "#1f1f1f",
      // Neutral borders - close to background
      border: "#333333",
      input: "#363636",
      sidebar: mixColors(palette.dark.tint, "#1f1f1f", 0.2),
      "sidebar-border": "#2f2f2f",
      code: mixColors(palette.dark.tint, "#262626", 0.3),
      "code-highlight": mixColors(palette.dark.tint, "#2d3748", 0.3),
      brand: palette.dark.brand,
      "brand-complementary": palette.dark.brandComplementary,
    },
  }
}

// Helper to create deep theme (bold brand surfaces, complementary primary, clean contrast)
// Deep themes always use dark mode aesthetic - moody and saturated in both light and dark
function createDeepTheme(palette: ColorPalette): ThemeStyles {
  // Deep theme styles - same for both light and dark mode (always dark aesthetic)
  const deepStyles: ThemeStyleProps = {
    ...darkBase,
    // Deep brand surfaces - dark and moody
    background: darkenColor(palette.dark.brand, 0.72),
    foreground: mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    card: darkenColor(palette.dark.brand, 0.68),
    "card-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    popover: darkenColor(palette.dark.brand, 0.68),
    "popover-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    // Complementary as primary - bright for visibility
    primary: palette.dark.brandComplementary,
    "primary-foreground": "#1a1a1a",
    // Brand surface variations - maintain depth
    secondary: darkenColor(palette.dark.brand, 0.65),
    "secondary-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    muted: darkenColor(palette.dark.brand, 0.75),
    "muted-foreground": mixColors(palette.dark.brand, "#aaaaaa", 0.15),
    accent: darkenColor(palette.dark.brand, 0.6),
    "accent-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    // Borders - neutral grays close to background luminance
    border: "#2a2a2a",
    input: "#2d2d2d",
    ring: palette.dark.brandComplementary,
    // Page darker than bg for depth
    page: darkenColor(palette.dark.brand, 0.8),
    // Sidebar matches card style
    sidebar: darkenColor(palette.dark.brand, 0.68),
    "sidebar-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    "sidebar-primary": palette.dark.brandComplementary,
    "sidebar-primary-foreground": "#1a1a1a",
    "sidebar-accent": darkenColor(palette.dark.brand, 0.6),
    "sidebar-accent-foreground": mixColors(palette.dark.brand, "#f5f5f5", 0.1),
    "sidebar-border": "#2a2a2a",
    brand: palette.dark.brand,
    "brand-complementary": palette.dark.brandComplementary,
    selection: palette.dark.brandComplementary,
    "selection-foreground": "#1a1a1a",
  }

  return {
    light: deepStyles,
    dark: deepStyles,
  }
}

// Color manipulation helpers
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")
  )
}

function mixColors(color1: string, color2: string, amount: number): string {
  const c1 = hexToRgb(color1)
  const c2 = hexToRgb(color2)
  return rgbToHex(
    c1.r * amount + c2.r * (1 - amount),
    c1.g * amount + c2.g * (1 - amount),
    c1.b * amount + c2.b * (1 - amount)
  )
}

function darkenColor(color: string, amount: number): string {
  const c = hexToRgb(color)
  return rgbToHex(c.r * (1 - amount), c.g * (1 - amount), c.b * (1 - amount))
}

function lightenColor(color: string, amount: number): string {
  const c = hexToRgb(color)
  return rgbToHex(
    c.r + (255 - c.r) * amount,
    c.g + (255 - c.g) * amount,
    c.b + (255 - c.b) * amount
  )
}

// Generate all theme presets
export const themePresets: Record<string, ThemePreset> = {}

// Add slate (pure neutral) first
themePresets.slate = {
  label: "Slate",
  styles: {
    light: { ...lightBase },
    dark: { ...darkBase },
  },
}

// Add all color palettes with their variants
for (const palette of palettes) {
  const key = palette.name.toLowerCase()

  // Base variant
  themePresets[key] = {
    label: palette.name,
    styles: createBaseTheme(palette),
  }

  // Tinted variant
  themePresets[`${key}-tinted`] = {
    label: `${palette.name} Tinted`,
    styles: createTintedTheme(palette),
  }

  // Deep variant
  themePresets[`${key}-deep`] = {
    label: `${palette.name} Deep`,
    styles: createDeepTheme(palette),
  }
}
