// Color palette definitions for block theming
// Each palette defines brand colors for light and dark modes

export interface PaletteColors {
  brand: string
  complementary: string
  tint: string // subtle background tint
}

export interface Palette {
  name: string
  slug: string
  light: PaletteColors
  dark: PaletteColors
}

export const palettes: Record<string, Palette> = {
  slate: {
    name: "Slate",
    slug: "slate",
    light: {
      brand: "#777777",
      complementary: "#999999",
      tint: "#fefefe",
    },
    dark: {
      brand: "#9a9a9a",
      complementary: "#b0b0b0",
      tint: "#141414",
    },
  },
  azure: {
    name: "Azure",
    slug: "azure",
    light: {
      brand: "#5c8ac4",
      complementary: "#c4915c",
      tint: "#f8fafc",
    },
    dark: {
      brand: "#8eb3d4",
      complementary: "#d4b38e",
      tint: "#1a2332",
    },
  },
  violet: {
    name: "Violet",
    slug: "violet",
    light: {
      brand: "#8c6dc4",
      complementary: "#8cb85c",
      tint: "#faf8fc",
    },
    dark: {
      brand: "#b097d4",
      complementary: "#b0d48e",
      tint: "#251a32",
    },
  },
  rose: {
    name: "Rose",
    slug: "rose",
    light: {
      brand: "#c45c7e",
      complementary: "#5cb89e",
      tint: "#fcf8fa",
    },
    dark: {
      brand: "#d48ea8",
      complementary: "#8ed4c2",
      tint: "#321a25",
    },
  },
  sage: {
    name: "Sage",
    slug: "sage",
    light: {
      brand: "#5cb87e",
      complementary: "#a85cb8",
      tint: "#f8fcf9",
    },
    dark: {
      brand: "#5a9e72",
      complementary: "#c88ed4",
      tint: "#1a3220",
    },
  },
  amber: {
    name: "Amber",
    slug: "amber",
    light: {
      brand: "#c4a15c",
      complementary: "#5c6dc4",
      tint: "#fcfbf8",
    },
    dark: {
      brand: "#b8944a",
      complementary: "#8e97d4",
      tint: "#32291a",
    },
  },
  cyan: {
    name: "Cyan",
    slug: "cyan",
    light: {
      brand: "#5cb4b8",
      complementary: "#c4665c",
      tint: "#f8fcfc",
    },
    dark: {
      brand: "#4a9ea2",
      complementary: "#d4988e",
      tint: "#1a3232",
    },
  },
  indigo: {
    name: "Indigo",
    slug: "indigo",
    light: {
      brand: "#5c6fc4",
      complementary: "#c4a85c",
      tint: "#f8f9fc",
    },
    dark: {
      brand: "#8e9ad4",
      complementary: "#d4c38e",
      tint: "#1a1d32",
    },
  },
  coral: {
    name: "Coral",
    slug: "coral",
    light: {
      brand: "#c4705c",
      complementary: "#5c9ac4",
      tint: "#fcf9f8",
    },
    dark: {
      brand: "#b86a58",
      complementary: "#8ebcd4",
      tint: "#321f1a",
    },
  },
  forest: {
    name: "Forest",
    slug: "forest",
    light: {
      brand: "#5cb870",
      complementary: "#b85c9c",
      tint: "#f8fcf9",
    },
    dark: {
      brand: "#8ed498",
      complementary: "#d48ec0",
      tint: "#1a321e",
    },
  },
  neon: {
    name: "Neon",
    slug: "neon",
    light: {
      brand: "#7fff00",
      complementary: "#ff00ff",
      tint: "#f0fff0",
    },
    dark: {
      brand: "#7fff00",
      complementary: "#ff00ff",
      tint: "#0a1a0a",
    },
  },
}

// Get palette by slug
export function getPalette(slug: string): Palette | null {
  return palettes[slug] || null
}

// Get all palette slugs
export function getPaletteSlugs(): string[] {
  return Object.keys(palettes)
}

// Get palette colors for a mode
export function getPaletteColors(
  slug: string,
  mode: "light" | "dark"
): PaletteColors | null {
  const palette = palettes[slug]
  if (!palette) return null
  return palette[mode]
}

// Default palette
export const DEFAULT_PALETTE = "slate"
