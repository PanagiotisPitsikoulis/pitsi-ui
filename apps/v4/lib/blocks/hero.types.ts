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
// Hero Content Types
// ============================================================================

export interface HeroContent extends BlockSectionHeader {
  /** Primary call-to-action button */
  primaryCta?: BlockCTA
  /** Secondary call-to-action button */
  secondaryCta?: BlockCTA
  /** Main hero image */
  image?: BlockImage
  /** Background/decoration image */
  backgroundImage?: BlockImage
  /** Additional decoration images */
  decorationImages?: BlockImage[]
  /** Layout variant for different themes */
  variant?: "left" | "right"
}

// ============================================================================
// Hero ClassNames Types
// ============================================================================

export interface HeroClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  cta?: BlockCtaClassNames
  image?: BlockImageClassNames
  background?: string
  decoration?: string
}

// ============================================================================
// Hero Props
// ============================================================================

export interface HeroBlockProps {
  content?: Partial<HeroContent>
  classNames?: HeroClassNames
}

// ============================================================================
// Hero Defaults
// ============================================================================

export const heroDefaults: HeroContent = {
  badge: "Plant Care Specialists",
  title: "Transform Your Space\nInto a Living Sanctuary",
  description:
    "Handpicked plants. Personalized care.\nFree delivery on orders over $50.",
  primaryCta: { label: "Explore Collection", href: "#" },
  secondaryCta: { label: "Plant Quiz", href: "#", variant: "outline" },
  image: {
    src: "/placeholders/blocks/service-plants/subject/4.webp",
    alt: "Woman holding houseplant",
  },
  backgroundImage: {
    src: "/placeholders/blocks/service-plants/assets/decoration-2.svg",
    alt: "",
  },
}
