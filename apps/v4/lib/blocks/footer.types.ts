import type {
  BlockBaseClassNames,
  BlockImage,
  BlockLink,
  BlockSocialLink,
} from "./types"

// ============================================================================
// Footer Content Types
// ============================================================================

export interface FooterColumn {
  title: string
  links: BlockLink[]
}

export interface FooterContent {
  /** Logo configuration */
  logo?: {
    image?: BlockImage
    text?: string
    href?: string
  }
  /** Column groups with links */
  columns: FooterColumn[]
  /** Social media links */
  social?: BlockSocialLink[]
  /** Copyright text */
  copyright?: string
  /** Bottom links (privacy, terms, etc.) */
  bottomLinks?: BlockLink[]
}

// ============================================================================
// Footer ClassNames Types
// ============================================================================

export interface FooterColumnClassNames {
  root?: string
  title?: string
  links?: string
  link?: string
}

export interface FooterClassNames extends BlockBaseClassNames {
  container?: string
  logo?: string
  columns?: string
  column?: FooterColumnClassNames
  social?: string
  socialLink?: string
  copyright?: string
  bottomLinks?: string
}

// ============================================================================
// Footer Props
// ============================================================================

export interface FooterBlockProps {
  content?: Partial<FooterContent>
  classNames?: FooterClassNames
}

// ============================================================================
// Footer Defaults
// ============================================================================

export const footerDefaults: FooterContent = {
  logo: {
    text: "PlantLife",
    href: "/",
  },
  columns: [
    {
      title: "Shop",
      links: [
        { label: "All Plants", href: "#" },
        { label: "New Arrivals", href: "#" },
        { label: "Best Sellers", href: "#" },
        { label: "Plant Care", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Track Order", href: "#" },
      ],
    },
  ],
  social: [
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "facebook", href: "#" },
  ],
  copyright: "2024 PlantLife. All rights reserved.",
}
