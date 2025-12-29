import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Blog Content Types
// ============================================================================

export interface BlogPost {
  title: string
  excerpt?: string
  image?: BlockImage
  author?: {
    name: string
    avatar?: BlockImage
  }
  date?: string
  category?: string
  href: string
  readTime?: string
}

export interface BlogContent extends BlockSectionHeader {
  /** Array of blog posts */
  posts: BlogPost[]
  /** View all button */
  cta?: BlockCTA
}

// ============================================================================
// Blog ClassNames Types
// ============================================================================

export interface BlogPostClassNames {
  root?: string
  image?: string
  content?: string
  category?: string
  title?: string
  excerpt?: string
  meta?: string
  author?: string
  date?: string
}

export interface BlogClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  post?: BlogPostClassNames
  cta?: string
}

// ============================================================================
// Blog Props
// ============================================================================

export interface BlogBlockProps {
  content?: Partial<BlogContent>
  classNames?: BlogClassNames
}

// ============================================================================
// Blog Defaults
// ============================================================================

export const blogDefaults: BlogContent = {
  badge: "From the Blog",
  title: "Plant Care Tips & Inspiration",
  description: "Expert advice to help your plants thrive.",
  posts: [
    {
      title: "How to Choose the Perfect Plant for Your Space",
      excerpt: "A guide to finding the right plant based on lighting and lifestyle.",
      image: { src: "/placeholders/blocks/service-plants/assets/item-1.webp", alt: "Plant selection guide" },
      author: { name: "Sarah Green" },
      date: "Dec 15, 2024",
      category: "Guides",
      href: "#",
      readTime: "5 min read",
    },
    {
      title: "Winter Plant Care Essentials",
      excerpt: "Keep your indoor plants healthy during the colder months.",
      image: { src: "/placeholders/blocks/service-plants/assets/item-2.webp", alt: "Winter plant care" },
      author: { name: "Mike Chen" },
      date: "Dec 10, 2024",
      category: "Care Tips",
      href: "#",
      readTime: "4 min read",
    },
    {
      title: "Creating a Jungle Corner",
      excerpt: "Transform any corner into a lush plant paradise.",
      image: { src: "/placeholders/blocks/service-plants/assets/item-3.webp", alt: "Jungle corner setup" },
      author: { name: "Emma Wilson" },
      date: "Dec 5, 2024",
      category: "Design",
      href: "#",
      readTime: "6 min read",
    },
  ],
  cta: { label: "View All Posts", href: "#" },
}
