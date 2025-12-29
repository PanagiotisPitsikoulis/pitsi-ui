import type {
  BlockBaseClassNames,
  BlockHeaderClassNames,
  BlockImage,
  BlockImageClassNames,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Features Content Types
// ============================================================================

export interface FeatureItem {
  /** Lucide icon name */
  icon: string
  title: string
  description: string
  /** Optional image for the feature */
  image?: string
}

export interface FeaturesContent extends BlockSectionHeader {
  /** Array of feature items */
  features: FeatureItem[]
  /** Center/side image */
  image?: BlockImage
}

// ============================================================================
// Features ClassNames Types
// ============================================================================

export interface FeatureItemClassNames {
  root?: string
  icon?: string
  iconWrapper?: string
  title?: string
  description?: string
}

export interface FeaturesClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  feature?: FeatureItemClassNames
  image?: BlockImageClassNames
}

// ============================================================================
// Features Props
// ============================================================================

export interface FeaturesBlockProps {
  content?: Partial<FeaturesContent>
  classNames?: FeaturesClassNames
}

// ============================================================================
// Features Defaults
// ============================================================================

export const featuresDefaults: FeaturesContent = {
  badge: "The Difference",
  title: "Why Plant Lovers Choose Us",
  features: [
    {
      icon: "Sparkles",
      title: "Expert Selection of Plants",
      description: "Each plant is hand-picked by our horticulturists for health and beauty.",
    },
    {
      icon: "Package",
      title: "Safe Delivery to Your House",
      description: "Specially packaged to arrive healthy and ready to thrive in your home.",
    },
    {
      icon: "Heart",
      title: "30-Day Plant Health Guarantee",
      description: "Not thriving? We'll replace it free within 30 days of delivery.",
    },
    {
      icon: "Truck",
      title: "Free Shipping on All Orders",
      description: "Complimentary shipping on all orders over $50, delivered with care.",
    },
    {
      icon: "Leaf",
      title: "Rare and Unique Varieties",
      description: "Hard-to-find cultivars and rare specimens sourced from specialty growers.",
    },
    {
      icon: "RefreshCcw",
      title: "Hassle-Free Easy Returns",
      description: "Hassle-free returns and exchanges if your plant doesn't meet expectations.",
    },
  ],
  image: {
    src: "/placeholders/blocks/service-plants/assets/item-6.webp",
    alt: "Beautiful indoor plants",
  },
}
