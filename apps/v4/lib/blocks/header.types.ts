import type { BlockBaseClassNames, BlockCTA, BlockImage, BlockNavItem } from "./types"

// ============================================================================
// Header Content Types
// ============================================================================

export interface HeaderContent {
  /** Logo configuration */
  logo?: {
    image?: BlockImage
    text?: string
    href?: string
  }
  /** Navigation items */
  navigation: BlockNavItem[]
  /** Primary CTA button */
  cta?: BlockCTA
  /** Secondary CTA button */
  secondaryCta?: BlockCTA
}

// ============================================================================
// Header ClassNames Types
// ============================================================================

export interface HeaderNavClassNames {
  root?: string
  item?: string
  link?: string
  dropdown?: string
}

export interface HeaderClassNames extends BlockBaseClassNames {
  container?: string
  logo?: string
  nav?: HeaderNavClassNames
  cta?: string
  secondaryCta?: string
  mobileMenu?: string
}

// ============================================================================
// Header Props
// ============================================================================

export interface HeaderBlockProps {
  content?: Partial<HeaderContent>
  classNames?: HeaderClassNames
}

// ============================================================================
// Header Defaults
// ============================================================================

export const headerDefaults: HeaderContent = {
  logo: {
    text: "PlantLife",
    href: "/",
  },
  navigation: [
    { label: "Shop", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Care Guides", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Shop Now", href: "#" },
}
