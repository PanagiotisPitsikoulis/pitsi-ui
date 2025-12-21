import { Metadata } from "next"
import { notFound } from "next/navigation"

import { TemplateViewerClient } from "./page.client"

// Template metadata for all available templates
const templatesMeta: Record<
  string,
  { name: string; description: string; category: string }
> = {
  // AI & Technology
  ai: {
    name: "AI Platform",
    description: "Futuristic hero section for AI and tech startups",
    category: "ai",
  },
  "ai-sci-fi": {
    name: "AI Sci-Fi",
    description: "Cyberpunk-inspired hero section for AI products",
    category: "ai",
  },
  "product-scifi": {
    name: "Tech Product",
    description: "Sleek hero section for technology products",
    category: "product",
  },
  // Creative & Art
  art: {
    name: "Art Gallery",
    description: "Elegant hero section for art galleries and exhibitions",
    category: "creative",
  },
  "service-fashion": {
    name: "Fashion",
    description: "Stylish hero section for fashion brands",
    category: "creative",
  },
  "service-tattoo": {
    name: "Tattoo Studio",
    description: "Bold and edgy hero section for tattoo artists",
    category: "service",
  },
  // Food & Beverage
  "food-pizza": {
    name: "Pizza Restaurant",
    description: "Warm and inviting hero section for pizzerias",
    category: "food",
  },
  "food-juice": {
    name: "Juice Bar",
    description: "Fresh and vibrant hero section for juice bars",
    category: "food",
  },
  "service-coffee-shop": {
    name: "Coffee Shop",
    description: "Cozy hero section for cafes and coffee shops",
    category: "food",
  },
  // Products & E-commerce
  "product-coffee": {
    name: "Coffee Brand",
    description: "Premium hero section for coffee product brands",
    category: "product",
  },
  "product-plants": {
    name: "Plant Shop",
    description: "Natural hero section for plant and garden shops",
    category: "product",
  },
  "product-skincare": {
    name: "Skincare",
    description: "Clean and minimal hero section for skincare brands",
    category: "product",
  },
  // Health & Wellness
  "service-gym": {
    name: "Fitness Center",
    description: "Dynamic hero section for gyms and fitness centers",
    category: "wellness",
  },
  "service-psychologist": {
    name: "Therapy Practice",
    description: "Calm and welcoming hero section for therapists",
    category: "wellness",
  },
  // Beauty & Personal Care
  "service-barber": {
    name: "Barbershop",
    description: "Classic and refined hero section for barbershops",
    category: "beauty",
  },
  "service-makeup": {
    name: "Makeup Artist",
    description: "Glamorous hero section for makeup artists",
    category: "beauty",
  },
  // Lifestyle & Leisure
  boat: {
    name: "Boat Charter",
    description: "Premium hero section for yacht and boat rentals",
    category: "lifestyle",
  },
  "service-hospitality": {
    name: "Hotel & Resort",
    description: "Luxurious hero section for hotels and resorts",
    category: "lifestyle",
  },
  "service-pet-sitting": {
    name: "Pet Services",
    description: "Friendly hero section for pet care services",
    category: "lifestyle",
  },
  // Professional Services
  "service-real-estate": {
    name: "Real Estate",
    description: "Professional hero section for real estate agencies",
    category: "professional",
  },
  "service-marketing": {
    name: "Marketing Agency",
    description: "Bold hero section for marketing agencies",
    category: "professional",
  },
  "service-plants": {
    name: "Landscaping",
    description: "Natural hero section for landscaping services",
    category: "professional",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = templatesMeta[slug]

  if (!template) {
    return {
      title: "Template Not Found - Pitsi UI",
    }
  }

  const title = `${template.name} Template - Pitsi UI`
  const description = template.description

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(templatesMeta).map((slug) => ({
    slug,
  }))
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = templatesMeta[slug]

  if (!template) {
    notFound()
  }

  return <TemplateViewerClient slug={slug} template={template} />
}
