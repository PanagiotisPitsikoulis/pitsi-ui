// Template font pairings
// Based on 2024 recommended Google Fonts pairings from design experts
// Sources: Pagecloud, Rossul, FontPair, ColorsAndFonts

export interface TemplateFonts {
  display: string // Font family for display/headings
  body: string // Font family for body text
  displayWeight: string // Weight for display font
  bodyWeight: string // Weight for body font
}

// Font definitions for each template - refined, professional pairings
export const templateFonts: Record<string, TemplateFonts> = {
  // AI & Technology - modern, professional
  ai: {
    display: '"Manrope", sans-serif',
    body: '"Inter", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "ai-sci-fi": {
    display: '"Sora", sans-serif',
    body: '"Inter", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "product-scifi": {
    display: '"Sora", sans-serif',
    body: '"Inter", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },

  // Creative & Art - elegant serif pairings
  art: {
    display: '"Playfair Display", serif',
    body: '"Source Sans 3", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "service-fashion": {
    display: '"Playfair Display", serif',
    body: '"Montserrat", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "service-tattoo": {
    display: '"Epilogue", sans-serif',
    body: '"Mulish", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },

  // Food & Beverage - friendly, approachable
  "food-pizza": {
    display: '"DM Sans", sans-serif',
    body: '"Nunito", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "food-juice": {
    display: '"DM Sans", sans-serif',
    body: '"Nunito", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "service-coffee-shop": {
    display: '"DM Sans", sans-serif',
    body: '"Nunito", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },

  // Products - refined, memorable
  "product-coffee": {
    display: '"Cormorant Garamond", serif',
    body: '"Lato", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "product-plants": {
    display: '"Fraunces", serif',
    body: '"DM Sans", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "product-skincare": {
    display: '"Manrope", sans-serif',
    body: '"Inter", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },

  // Health & Wellness - trustworthy, calming
  "service-gym": {
    display: '"Epilogue", sans-serif',
    body: '"Mulish", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "service-psychologist": {
    display: '"Lora", serif',
    body: '"Source Sans 3", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },

  // Beauty & Personal Care - classic, professional
  "service-barber": {
    display: '"Roboto Slab", serif',
    body: '"Roboto", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "service-makeup": {
    display: '"Prata", serif',
    body: '"Raleway", sans-serif',
    displayWeight: "400",
    bodyWeight: "400",
  },

  // Lifestyle & Leisure - luxurious, elegant
  boat: {
    display: '"Cormorant", serif',
    body: '"Raleway", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "service-hospitality": {
    display: '"Cormorant", serif',
    body: '"Karla", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
  "service-pet-sitting": {
    display: '"DM Sans", sans-serif',
    body: '"Nunito Sans", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },

  // Professional Services - trustworthy, modern
  "service-real-estate": {
    display: '"Roboto Slab", serif',
    body: '"Roboto", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "service-marketing": {
    display: '"Manrope", sans-serif',
    body: '"Inter", sans-serif',
    displayWeight: "700",
    bodyWeight: "400",
  },
  "service-plants": {
    display: '"Fraunces", serif',
    body: '"DM Sans", sans-serif',
    displayWeight: "600",
    bodyWeight: "400",
  },
}

// Default fonts fallback
const defaultFonts: TemplateFonts = {
  display: '"Inter", sans-serif',
  body: '"Inter", sans-serif',
  displayWeight: "700",
  bodyWeight: "400",
}

// Get fonts for a template
export function getTemplateFonts(slug: string): TemplateFonts {
  return templateFonts[slug] || defaultFonts
}

// Get font CSS variables for a template
export function getTemplateFontStyles(slug: string): React.CSSProperties {
  const fonts = getTemplateFonts(slug)
  return {
    "--font-display": fonts.display,
    "--font-body": fonts.body,
    "--font-display-weight": fonts.displayWeight,
    "--font-body-weight": fonts.bodyWeight,
  } as React.CSSProperties
}

// Get all unique font families for preloading
export function getAllFontFamilies(): string[] {
  const families = new Set<string>()

  Object.values(templateFonts).forEach((fonts) => {
    // Extract font family name from the full string
    const displayFamily = fonts.display.split(",")[0].replace(/['"]/g, "").trim()
    const bodyFamily = fonts.body.split(",")[0].replace(/['"]/g, "").trim()
    families.add(displayFamily)
    families.add(bodyFamily)
  })

  return Array.from(families).sort()
}
