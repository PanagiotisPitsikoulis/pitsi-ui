"use client"

import {
  BarChart3,
  KeyRound,
  LayoutDashboard,
  Megaphone,
  ShoppingCart,
  User,
} from "lucide-react"

import { CategoriesGridBlock } from "../_blocks"

const categories = [
  {
    id: "marketing",
    name: "Marketing",
    description: "Heroes, pricing, testimonials, FAQ, footers",
    count: "400+",
    icon: Megaphone,
    href: "/blocks?category=marketing",
    previewBlock: "marketing-hero-section-hero-section-with-customer-logos",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Product cards, carts, checkout, orders",
    count: "200+",
    icon: ShoppingCart,
    href: "/blocks?category=e-commerce",
    previewBlock: "e-commerce-product-details-product-details-with-features",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Stats, charts, tables, analytics",
    count: "150+",
    icon: LayoutDashboard,
    href: "/blocks?category=application",
    previewBlock: "application-sidebar-sidebar-with-secondary-navigation",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    id: "authentication",
    name: "Authentication",
    description: "Login, signup, forgot password, 2FA",
    count: "50+",
    icon: KeyRound,
    href: "/blocks?category=authentication",
    previewBlock: "authentication-login-login-with-providers",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Galleries, case studies, about sections",
    count: "100+",
    icon: User,
    href: "/blocks?category=marketing",
    previewBlock: "marketing-portfolio-portfolio-section-with-feature-list",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Charts, graphs, metrics, reports",
    count: "100+",
    icon: BarChart3,
    href: "/blocks?category=application",
    previewBlock: "application-area-chart-area-chart-with-legend",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
]

export function BlocksCategoriesSection() {
  return (
    <CategoriesGridBlock
      tagline="Organized for Speed"
      headline={
        <>
          Find Exactly What
          <br />
          <span className="text-foreground">You Need</span>
        </>
      }
      description="Browse by category or search for specific blocks. Every section is production-ready and fully responsive."
      categories={categories}
      viewAllLink={{ label: "View all categories", href: "/blocks" }}
    />
  )
}
