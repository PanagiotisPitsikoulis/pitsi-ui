import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Pricing Content Types
// ============================================================================

export interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  cta?: BlockCTA
  /** Whether this plan is highlighted/popular */
  highlighted?: boolean
}

export interface PricingContent extends BlockSectionHeader {
  /** Array of pricing plans */
  plans: PricingPlan[]
  /** Background decoration image */
  backgroundImage?: BlockImage
}

// ============================================================================
// Pricing ClassNames Types
// ============================================================================

export interface PricingPlanClassNames {
  root?: string
  header?: string
  name?: string
  price?: string
  period?: string
  description?: string
  features?: string
  featureItem?: string
  cta?: string
}

export interface PricingClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  plan?: PricingPlanClassNames
  planHighlighted?: PricingPlanClassNames
  background?: string
}

// ============================================================================
// Pricing Props
// ============================================================================

export interface PricingBlockProps {
  content?: Partial<PricingContent>
  classNames?: PricingClassNames
}

// ============================================================================
// Pricing Defaults
// ============================================================================

export const pricingDefaults: PricingContent = {
  badge: "Monthly Boxes",
  title: "Subscribe & Save",
  description: "Fresh plants delivered to your door every month.",
  plans: [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for new plant parents",
      features: ["1 medium plant", "Care guide included", "Standard pot", "Email support"],
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Grower",
      price: "$59",
      period: "/month",
      description: "For the growing collection",
      features: [
        "2 medium plants",
        "Care guides included",
        "Premium ceramic pots",
        "Priority support",
        "Free repotting guide",
      ],
      cta: { label: "Get Started", href: "#" },
      highlighted: true,
    },
    {
      name: "Jungle",
      price: "$99",
      period: "/month",
      description: "Transform your space",
      features: [
        "4 plants (mixed sizes)",
        "Care guides included",
        "Designer pot collection",
        "24/7 plant hotline",
        "Monthly care tips",
        "Free replacements",
      ],
      cta: { label: "Get Started", href: "#" },
    },
  ],
  backgroundImage: {
    src: "/placeholders/blocks/service-plants/assets/decoration-3.svg",
    alt: "",
  },
}
