"use client"

import Link from "next/link"

import { BlockThemeWrapper, DEFAULT_TINT } from "./_demo-blocks/_components"
import { TEMPLATE_SLUGS, heroComponents } from "./_demo-blocks/blocks"

// Template metadata
const templatesMeta: Record<
  string,
  { name: string; description: string; category: string; theme: "light" | "dark" }
> = {
  ai: {
    name: "AI Platform",
    description: "Futuristic hero for AI and tech startups",
    category: "ai",
    theme: "dark",
  },
  "ai-sci-fi": {
    name: "AI Sci-Fi",
    description: "Cyberpunk-inspired hero for AI products",
    category: "ai",
    theme: "dark",
  },
  "product-scifi": {
    name: "Tech Product",
    description: "Sleek hero for technology products",
    category: "product",
    theme: "dark",
  },
  art: {
    name: "Art Gallery",
    description: "Elegant hero for art galleries and exhibitions",
    category: "creative",
    theme: "light",
  },
  "service-fashion": {
    name: "Fashion",
    description: "Stylish hero for fashion brands",
    category: "creative",
    theme: "dark",
  },
  "service-tattoo": {
    name: "Tattoo Studio",
    description: "Bold and edgy hero for tattoo artists",
    category: "service",
    theme: "dark",
  },
  "food-pizza": {
    name: "Pizza Restaurant",
    description: "Warm and inviting hero for pizzerias",
    category: "food",
    theme: "dark",
  },
  "food-juice": {
    name: "Juice Bar",
    description: "Fresh and vibrant hero for juice bars",
    category: "food",
    theme: "light",
  },
  "service-coffee-shop": {
    name: "Coffee Shop",
    description: "Cozy hero for cafes and coffee shops",
    category: "food",
    theme: "dark",
  },
  "product-coffee": {
    name: "Coffee Brand",
    description: "Premium hero for coffee product brands",
    category: "product",
    theme: "dark",
  },
  "product-plants": {
    name: "Plant Shop",
    description: "Natural hero for plant and garden shops",
    category: "product",
    theme: "light",
  },
  "product-skincare": {
    name: "Skincare",
    description: "Clean and minimal hero for skincare brands",
    category: "product",
    theme: "light",
  },
  "service-gym": {
    name: "Fitness Center",
    description: "Dynamic hero for gyms and fitness centers",
    category: "wellness",
    theme: "dark",
  },
  "service-psychologist": {
    name: "Therapy Practice",
    description: "Calm and welcoming hero for therapists",
    category: "wellness",
    theme: "light",
  },
  "service-barber": {
    name: "Barbershop",
    description: "Classic and refined hero for barbershops",
    category: "beauty",
    theme: "dark",
  },
  "service-makeup": {
    name: "Makeup Artist",
    description: "Glamorous hero for makeup artists",
    category: "beauty",
    theme: "dark",
  },
  boat: {
    name: "Boat Charter",
    description: "Premium hero for yacht and boat rentals",
    category: "lifestyle",
    theme: "dark",
  },
  "service-hospitality": {
    name: "Hotel & Resort",
    description: "Luxurious hero for hotels and resorts",
    category: "lifestyle",
    theme: "dark",
  },
  "service-pet-sitting": {
    name: "Pet Services",
    description: "Friendly hero for pet care services",
    category: "lifestyle",
    theme: "light",
  },
  "service-real-estate": {
    name: "Real Estate",
    description: "Professional hero for real estate agencies",
    category: "professional",
    theme: "dark",
  },
  "service-marketing": {
    name: "Marketing Agency",
    description: "Bold hero for marketing agencies",
    category: "professional",
    theme: "dark",
  },
  "service-plants": {
    name: "Landscaping",
    description: "Natural hero for landscaping services",
    category: "professional",
    theme: "light",
  },
}

// Build templates array from slugs
const templates = TEMPLATE_SLUGS.map((slug) => {
  const meta = templatesMeta[slug]
  const Component = heroComponents[slug]
  return {
    slug,
    name: meta?.name || slug,
    description: meta?.description || "",
    category: meta?.category || "other",
    theme: meta?.theme || "dark",
    Component,
  }
}).filter((t) => t.Component) // Only include templates with hero components

export function TemplatesClient() {
  return (
    <div className="min-h-screen bg-page">
      {/* Header */}
      <div className="border-b">
        <div className="container py-16 px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Templates
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Beautiful, production-ready website templates. Choose a template,
            customize it, and launch your site in minutes.
          </p>
        </div>
      </div>

      {/* Template Grid */}
      <div className="container py-12 px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg border aspect-[16/10]">
                {/* Render actual hero component scaled down with theme */}
                <div className="absolute inset-0 origin-top-left scale-[0.25] w-[400%] h-[400%] pointer-events-none">
                  <BlockThemeWrapper slug={template.slug} tint={DEFAULT_TINT} mode={template.theme}>
                    <template.Component />
                  </BlockThemeWrapper>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {template.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                  {template.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
