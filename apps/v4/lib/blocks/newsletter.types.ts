import type { BlockBaseClassNames, BlockHeaderClassNames, BlockSectionHeader } from "./types"

// ============================================================================
// Newsletter Content Types
// ============================================================================

export interface NewsletterForm {
  placeholder: string
  submitLabel: string
  successMessage?: string
}

export interface NewsletterContent extends BlockSectionHeader {
  /** Form configuration */
  form: NewsletterForm
  /** Privacy/disclaimer text */
  disclaimer?: string
}

// ============================================================================
// Newsletter ClassNames Types
// ============================================================================

export interface NewsletterFormClassNames {
  root?: string
  input?: string
  button?: string
}

export interface NewsletterClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  form?: NewsletterFormClassNames
  disclaimer?: string
}

// ============================================================================
// Newsletter Props
// ============================================================================

export interface NewsletterBlockProps {
  content?: Partial<NewsletterContent>
  classNames?: NewsletterClassNames
}

// ============================================================================
// Newsletter Defaults
// ============================================================================

export const newsletterDefaults: NewsletterContent = {
  badge: "Newsletter",
  title: "Stay in the Loop",
  description: "Get plant care tips, new arrivals, and exclusive offers delivered to your inbox.",
  form: {
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    successMessage: "Thanks for subscribing!",
  },
  disclaimer: "We respect your privacy. Unsubscribe at any time.",
}
