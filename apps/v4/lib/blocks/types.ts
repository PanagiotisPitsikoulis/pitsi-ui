/**
 * Common types for all blocks
 * These types are shared across all block categories
 */

// ============================================================================
// Image Types
// ============================================================================

/**
 * Image with full attributes for Next.js Image component
 */
export interface BlockImage {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

// ============================================================================
// Link Types
// ============================================================================

/**
 * Basic link structure
 */
export interface BlockLink {
  label: string
  href: string
  external?: boolean
}

/**
 * CTA extends link with button styling options
 */
export interface BlockCTA extends BlockLink {
  icon?: string // Lucide icon name
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

// ============================================================================
// Section Types
// ============================================================================

/**
 * Common section header pattern used across many blocks
 */
export interface BlockSectionHeader {
  badge?: string
  title: string
  description?: string
}

// ============================================================================
// Navigation Types
// ============================================================================

/**
 * Navigation item for headers/footers
 */
export interface BlockNavItem extends BlockLink {
  children?: BlockNavItem[]
}

// ============================================================================
// Social Types
// ============================================================================

/**
 * Social media link
 */
export interface BlockSocialLink {
  platform: "twitter" | "facebook" | "instagram" | "linkedin" | "github" | "youtube"
  href: string
  label?: string
}

// ============================================================================
// Form Types
// ============================================================================

/**
 * Form field definition
 */
export interface BlockFormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox"
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}

// ============================================================================
// ClassNames Types
// ============================================================================

/**
 * Base classNames every block has
 */
export interface BlockBaseClassNames {
  root?: string
}

/**
 * Common header classNames structure
 */
export interface BlockHeaderClassNames {
  root?: string
  badge?: string
  title?: string
  description?: string
}

/**
 * Common CTA classNames structure
 */
export interface BlockCtaClassNames {
  root?: string
  primary?: string
  secondary?: string
}

/**
 * Common image classNames structure
 */
export interface BlockImageClassNames {
  root?: string
  wrapper?: string
  img?: string
}

/**
 * Common grid classNames structure
 */
export interface BlockGridClassNames {
  root?: string
  item?: string
}
