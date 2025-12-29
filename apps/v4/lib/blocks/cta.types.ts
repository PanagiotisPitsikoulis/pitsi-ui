import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockCtaClassNames,
  BlockHeaderClassNames,
  BlockImage,
  BlockImageClassNames,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// CTA Content Types
// ============================================================================

export interface CtaContent extends BlockSectionHeader {
  /** Primary call-to-action button */
  primaryCta?: BlockCTA
  /** Secondary call-to-action button */
  secondaryCta?: BlockCTA
  /** Side/background image */
  image?: BlockImage
}

// ============================================================================
// CTA ClassNames Types
// ============================================================================

export interface CtaClassNames extends BlockBaseClassNames {
  container?: string
  content?: string
  header?: BlockHeaderClassNames
  cta?: BlockCtaClassNames
  image?: BlockImageClassNames
}

// ============================================================================
// CTA Props
// ============================================================================

export interface CtaBlockProps {
  content?: Partial<CtaContent>
  classNames?: CtaClassNames
}

// ============================================================================
// CTA Defaults
// ============================================================================

export const ctaDefaults: CtaContent = {
  badge: "Get Started",
  title: "Ready to Transform Your Space?",
  description: "Join thousands of happy plant parents and start your green journey today.",
  primaryCta: { label: "Shop Now", href: "#" },
  secondaryCta: { label: "Learn More", href: "#", variant: "outline" },
}
