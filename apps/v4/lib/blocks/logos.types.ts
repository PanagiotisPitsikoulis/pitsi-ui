import type { BlockBaseClassNames, BlockImage } from "./types"

// ============================================================================
// Logos Content Types
// ============================================================================

export interface LogoItem {
  name: string
  image: BlockImage
  href?: string
}

export interface LogosContent {
  title?: string
  /** Array of logo items */
  logos: LogoItem[]
}

// ============================================================================
// Logos ClassNames Types
// ============================================================================

export interface LogoItemClassNames {
  root?: string
  img?: string
  link?: string
}

export interface LogosClassNames extends BlockBaseClassNames {
  container?: string
  title?: string
  grid?: string
  logo?: LogoItemClassNames
}

// ============================================================================
// Logos Props
// ============================================================================

export interface LogosBlockProps {
  content?: Partial<LogosContent>
  classNames?: LogosClassNames
}

// ============================================================================
// Logos Defaults
// ============================================================================

export const logosDefaults: LogosContent = {
  title: "Trusted by Leading Brands",
  logos: [
    { name: "Company 1", image: { src: "/placeholders/logo-1.svg", alt: "Company 1 logo" } },
    { name: "Company 2", image: { src: "/placeholders/logo-2.svg", alt: "Company 2 logo" } },
    { name: "Company 3", image: { src: "/placeholders/logo-3.svg", alt: "Company 3 logo" } },
    { name: "Company 4", image: { src: "/placeholders/logo-4.svg", alt: "Company 4 logo" } },
    { name: "Company 5", image: { src: "/placeholders/logo-5.svg", alt: "Company 5 logo" } },
  ],
}
