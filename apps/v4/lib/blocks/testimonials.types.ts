import type {
  BlockBaseClassNames,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Testimonials Content Types
// ============================================================================

export interface TestimonialItem {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: BlockImage
  rating?: number
}

export interface TestimonialsContent extends BlockSectionHeader {
  /** Array of testimonial items */
  testimonials: TestimonialItem[]
}

// ============================================================================
// Testimonials ClassNames Types
// ============================================================================

export interface TestimonialItemClassNames {
  root?: string
  quote?: string
  author?: string
  role?: string
  avatar?: string
  rating?: string
}

export interface TestimonialsClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  testimonial?: TestimonialItemClassNames
}

// ============================================================================
// Testimonials Props
// ============================================================================

export interface TestimonialsBlockProps {
  content?: Partial<TestimonialsContent>
  classNames?: TestimonialsClassNames
}

// ============================================================================
// Testimonials Defaults
// ============================================================================

export const testimonialsDefaults: TestimonialsContent = {
  badge: "What People Say",
  title: "Loved by Plant Parents",
  testimonials: [
    {
      quote:
        "The quality of plants is incredible. Each one arrived in perfect condition.",
      author: "Sarah M.",
      role: "Interior Designer",
      rating: 5,
    },
    {
      quote:
        "Best plant subscription I've tried. The care guides are so helpful!",
      author: "James K.",
      role: "Home Gardener",
      rating: 5,
    },
    {
      quote:
        "My apartment has never looked better. Customer service is top-notch.",
      author: "Emily R.",
      role: "Plant Enthusiast",
      rating: 5,
    },
  ],
}
