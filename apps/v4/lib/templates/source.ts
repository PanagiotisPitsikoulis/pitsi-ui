export type TemplateCategory =
  | "landing"
  | "dashboard"
  | "ecommerce"
  | "portfolio"
  | "saas"
  | "blog"

export interface Template {
  slug: string
  title: string
  description: string
  category: TemplateCategory
  image: string
  features: string[]
  demoUrl?: string
  isPremium?: boolean
}

export const categoryLabels: Record<TemplateCategory, string> = {
  landing: "Landing Pages",
  dashboard: "Dashboards",
  ecommerce: "E-commerce",
  portfolio: "Portfolio",
  saas: "SaaS",
  blog: "Blog & Content",
}

const templates: Template[] = [
  {
    slug: "startup-landing",
    title: "Startup Landing",
    description:
      "A modern landing page template for startups and tech companies. Features hero section, features grid, testimonials, and pricing.",
    category: "landing",
    image: "/marketing/mountain.webp",
    features: [
      "Hero with gradient background",
      "Feature cards with icons",
      "Testimonial carousel",
      "Pricing comparison table",
      "FAQ accordion",
      "Newsletter signup",
    ],
  },
  {
    slug: "agency-portfolio",
    title: "Agency Portfolio",
    description:
      "Showcase your agency's work with this elegant portfolio template. Includes project gallery, team section, and contact form.",
    category: "portfolio",
    image: "/marketing/cliff.webp",
    features: [
      "Project showcase grid",
      "Filterable portfolio",
      "Team member cards",
      "Client logos",
      "Contact form",
      "Animated transitions",
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with charts, metrics, and data tables. Perfect for SaaS applications.",
    category: "dashboard",
    image: "/marketing/party.webp",
    features: [
      "Real-time metrics cards",
      "Interactive charts",
      "Data tables with sorting",
      "Sidebar navigation",
      "Date range picker",
      "Export functionality",
    ],
    isPremium: true,
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    description:
      "A complete e-commerce template with product listings, cart, and checkout flow. Built for conversion.",
    category: "ecommerce",
    image: "/marketing/surfing.webp",
    features: [
      "Product grid with filters",
      "Quick view modal",
      "Shopping cart sidebar",
      "Checkout flow",
      "Order confirmation",
      "Wishlist functionality",
    ],
    isPremium: true,
  },
  {
    slug: "saas-marketing",
    title: "SaaS Marketing",
    description:
      "Marketing site template for SaaS products. Features comparison tables, feature highlights, and conversion-focused design.",
    category: "saas",
    image: "/marketing/sky-night.webp",
    features: [
      "Animated hero section",
      "Feature comparison",
      "Integration logos",
      "Use case sections",
      "ROI calculator",
      "Demo request form",
    ],
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    description:
      "A clean, readable blog template with categories, search, and newsletter integration.",
    category: "blog",
    image: "/marketing/mountain.webp",
    features: [
      "Article grid layout",
      "Category filtering",
      "Search functionality",
      "Reading time estimates",
      "Author profiles",
      "Newsletter signup",
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "Minimal and elegant personal portfolio for developers, designers, and creatives.",
    category: "portfolio",
    image: "/marketing/cliff.webp",
    features: [
      "About section",
      "Project showcase",
      "Skills visualization",
      "Experience timeline",
      "Contact section",
      "Social links",
    ],
  },
  {
    slug: "admin-panel",
    title: "Admin Panel",
    description:
      "Full-featured admin panel with user management, settings, and CRUD operations.",
    category: "dashboard",
    image: "/marketing/party.webp",
    features: [
      "User management",
      "Role-based access",
      "Settings pages",
      "Activity logs",
      "Notification center",
      "Dark mode support",
    ],
    isPremium: true,
  },
]

export function getTemplates(): Template[] {
  return templates
}

export function getTemplate(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug)
}

export function getTemplatesByCategory(category: TemplateCategory): Template[] {
  return templates.filter((t) => t.category === category)
}

export function getTemplateCategories(): TemplateCategory[] {
  return ["landing", "dashboard", "ecommerce", "portfolio", "saas", "blog"]
}
