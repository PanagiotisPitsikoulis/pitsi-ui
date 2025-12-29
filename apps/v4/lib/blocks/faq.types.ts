import type { BlockBaseClassNames, BlockHeaderClassNames, BlockSectionHeader } from "./types"

// ============================================================================
// FAQ Content Types
// ============================================================================

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent extends BlockSectionHeader {
  /** Array of FAQ items */
  items: FaqItem[]
}

// ============================================================================
// FAQ ClassNames Types
// ============================================================================

export interface FaqItemClassNames {
  root?: string
  trigger?: string
  question?: string
  content?: string
  answer?: string
}

export interface FaqClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  accordion?: string
  item?: FaqItemClassNames
}

// ============================================================================
// FAQ Props
// ============================================================================

export interface FaqBlockProps {
  content?: Partial<FaqContent>
  classNames?: FaqClassNames
}

// ============================================================================
// FAQ Defaults
// ============================================================================

export const faqDefaults: FaqContent = {
  badge: "Questions",
  title: "Frequently Asked Questions",
  description: "Everything you need to know about our plants and services.",
  items: [
    {
      question: "How do I care for my new plant?",
      answer:
        "Each plant comes with a detailed care guide. Generally, most houseplants prefer indirect light and watering when the top inch of soil is dry.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day plant health guarantee. If your plant isn't thriving, we'll replace it free of charge.",
    },
    {
      question: "Do you offer gift options?",
      answer:
        "Yes! We offer gift wrapping and personalized cards. You can add these options at checkout.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. We also offer expedited shipping for an additional fee.",
    },
  ],
}
