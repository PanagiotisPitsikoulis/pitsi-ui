import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Search Content Types
// ============================================================================

export interface SearchResult {
  title: string
  description?: string
  href: string
  category?: string
  image?: BlockImage
  date?: string
  type?: "page" | "post" | "product" | "doc"
}

export interface SearchContent extends BlockSectionHeader {
  /** Placeholder text for search input */
  placeholder?: string
  /** Array of search results */
  results: SearchResult[]
  /** Number of results found */
  resultCount?: number
  /** Search query */
  query?: string
  /** Show filters */
  showFilters?: boolean
  /** Filter categories */
  categories?: string[]
  /** CTA for no results */
  noResultsCta?: BlockCTA
}

// ============================================================================
// Search ClassNames Types
// ============================================================================

export interface SearchResultClassNames {
  root?: string
  image?: string
  content?: string
  category?: string
  title?: string
  description?: string
  date?: string
}

export interface SearchClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  searchInput?: string
  filters?: string
  resultsGrid?: string
  result?: SearchResultClassNames
  noResults?: string
  pagination?: string
}

// ============================================================================
// Search Props
// ============================================================================

export interface SearchBlockProps {
  content?: Partial<SearchContent>
  classNames?: SearchClassNames
}

// ============================================================================
// Search Defaults
// ============================================================================

export const searchDefaults: SearchContent = {
  badge: "Search",
  title: "Search Results",
  description: "Find what you're looking for",
  placeholder: "Search...",
  query: "",
  resultCount: 6,
  showFilters: true,
  categories: ["All", "Pages", "Blog", "Products"],
  results: [
    {
      title: "Getting Started Guide",
      description:
        "Learn how to get started with our platform and make the most of its features.",
      href: "#",
      category: "Guides",
      type: "doc",
      date: "Dec 15, 2024",
    },
    {
      title: "Product Features Overview",
      description:
        "Explore all the powerful features that help you achieve your goals faster.",
      href: "#",
      category: "Products",
      type: "page",
      date: "Dec 12, 2024",
    },
    {
      title: "Best Practices for Success",
      description:
        "Tips and tricks from experts to help you succeed with our tools.",
      href: "#",
      category: "Blog",
      type: "post",
      date: "Dec 10, 2024",
    },
    {
      title: "Pricing Plans Comparison",
      description:
        "Compare our pricing plans to find the perfect fit for your needs.",
      href: "#",
      category: "Pages",
      type: "page",
      date: "Dec 8, 2024",
    },
    {
      title: "API Documentation",
      description:
        "Complete reference documentation for developers integrating with our API.",
      href: "#",
      category: "Docs",
      type: "doc",
      date: "Dec 5, 2024",
    },
    {
      title: "Customer Success Stories",
      description:
        "Read how other businesses have transformed with our solutions.",
      href: "#",
      category: "Blog",
      type: "post",
      date: "Dec 1, 2024",
    },
  ],
  noResultsCta: { label: "Browse All", href: "#" },
}
