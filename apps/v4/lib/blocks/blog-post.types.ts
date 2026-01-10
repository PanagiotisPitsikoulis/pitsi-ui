import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockHeaderClassNames,
  BlockImage,
  BlockSocialLink,
} from "./types"

// ============================================================================
// Blog Post Content Types
// ============================================================================

export interface BlogPostAuthor {
  name: string
  avatar?: BlockImage
  role?: string
  bio?: string
  social?: BlockSocialLink[]
}

export interface BlogPostContent {
  /** Post title */
  title: string
  /** Post subtitle or excerpt */
  subtitle?: string
  /** Featured image */
  featuredImage?: BlockImage
  /** Post author */
  author?: BlogPostAuthor
  /** Publication date */
  date?: string
  /** Read time estimate */
  readTime?: string
  /** Post category */
  category?: string
  /** Post tags */
  tags?: string[]
  /** Post content (HTML or markdown) */
  content?: string
  /** Table of contents items */
  tableOfContents?: { id: string; title: string; level: number }[]
  /** Related posts */
  relatedPosts?: {
    title: string
    href: string
    image?: BlockImage
    date?: string
  }[]
  /** CTA at end of post */
  cta?: BlockCTA
  /** Share buttons */
  showShareButtons?: boolean
}

// ============================================================================
// Blog Post ClassNames Types
// ============================================================================

export interface BlogPostClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames & {
    category?: string
    meta?: string
    featuredImage?: string
  }
  content?: string
  sidebar?: string
  tableOfContents?: string
  author?: {
    root?: string
    avatar?: string
    name?: string
    bio?: string
  }
  share?: string
  tags?: string
  related?: {
    root?: string
    grid?: string
    post?: string
  }
  cta?: string
}

// ============================================================================
// Blog Post Props
// ============================================================================

export interface BlogPostBlockProps {
  content?: Partial<BlogPostContent>
  classNames?: BlogPostClassNames
}

// ============================================================================
// Blog Post Defaults
// ============================================================================

export const blogPostDefaults: BlogPostContent = {
  title: "The Complete Guide to Indoor Plant Care",
  subtitle:
    "Everything you need to know about keeping your houseplants healthy and thriving year-round.",
  featuredImage: {
    src: "/placeholders/blocks/service-plants/assets/item-1.webp",
    alt: "Indoor plants arrangement",
  },
  author: {
    name: "Sarah Green",
    role: "Plant Expert",
    bio: "Sarah is a certified horticulturist with over 10 years of experience helping plant lovers create thriving indoor gardens.",
    avatar: {
      src: "/placeholders/avatars/1.webp",
      alt: "Sarah Green",
    },
  },
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Plant Care",
  tags: ["Indoor Plants", "Care Guide", "Beginners"],
  showShareButtons: true,
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "lighting", title: "Understanding Light Requirements", level: 2 },
    { id: "watering", title: "Watering Best Practices", level: 2 },
    { id: "humidity", title: "Humidity & Temperature", level: 2 },
    { id: "common-problems", title: "Common Problems & Solutions", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],
  content: `
    <p>Indoor plants have become an essential part of modern home decor, bringing life, color, and a sense of nature into our living spaces. But keeping them healthy requires understanding their basic needs.</p>

    <h2 id="lighting">Understanding Light Requirements</h2>
    <p>Light is the most crucial factor in plant health. Different plants have varying light requirements, from low-light tolerant species like pothos and snake plants to sun-lovers like succulents and cacti.</p>

    <h2 id="watering">Watering Best Practices</h2>
    <p>Overwatering is the most common cause of houseplant death. The key is to understand your specific plant's needs and check the soil moisture before watering.</p>

    <h2 id="humidity">Humidity & Temperature</h2>
    <p>Most houseplants are tropical in origin and appreciate humidity levels between 40-60%. Grouping plants together or using a humidifier can help.</p>

    <h2 id="common-problems">Common Problems & Solutions</h2>
    <p>Yellow leaves, brown tips, and drooping are common issues that usually indicate watering or lighting problems. Learning to read these signs helps you respond quickly.</p>

    <h2 id="conclusion">Conclusion</h2>
    <p>With the right knowledge and attention, anyone can become a successful plant parent. Start with easy-care plants and gradually expand your collection as you learn.</p>
  `,
  relatedPosts: [
    {
      title: "5 Low-Light Plants for Dark Corners",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-plants/assets/item-2.webp",
        alt: "Low light plants",
      },
      date: "Dec 10, 2024",
    },
    {
      title: "How to Propagate Your Favorite Plants",
      href: "#",
      image: {
        src: "/placeholders/blocks/service-plants/assets/item-3.webp",
        alt: "Plant propagation",
      },
      date: "Dec 5, 2024",
    },
  ],
  cta: {
    label: "Subscribe to Our Newsletter",
    href: "#",
    variant: "default",
  },
}
