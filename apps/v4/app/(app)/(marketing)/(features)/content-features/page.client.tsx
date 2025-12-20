"use client"

import { StripeBgGuides } from "@/registry/new-york-v4/ui/bg-guides"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  HeroAI,
  HeroAISciFi,
  HeroArt,
  HeroBoat,
  HeroFoodJuice,
  HeroFoodPizza,
  HeroServiceCoffeeShop,
  HeroServicePlants,
  HeroProductSciFi,
  HeroProductSkincare,
  HeroServiceBarber,
  HeroServiceGym,
  HeroServicePsychologist,
  HeroServiceTattoo,
} from "../../_demo-blocks/hero"

const heroSections = [
  {
    id: "service-tattoo",
    label: "Tattoo Studio",
    component: HeroServiceTattoo,
    style: "Edgy & Bold",
    description: "High contrast typography with dramatic scale. Conveys rebellion, artistry, and self-expression.",
  },
  {
    id: "service-barber",
    label: "Barbershop",
    component: HeroServiceBarber,
    style: "Masculine & Classic",
    description: "Strong stacked type with outlined accents. Conveys tradition, craftsmanship, and confidence.",
  },
  {
    id: "ai",
    label: "AI",
    component: HeroAI,
    style: "Futuristic & Clean",
    description: "Stacked uppercase with gradient accents. Conveys innovation, technology, and limitless possibility.",
  },
  {
    id: "ai-sci-fi",
    label: "AI Sci-Fi",
    component: HeroAISciFi,
    style: "Cyberpunk & Technical",
    description: "Monospace elements with neon gradients. Conveys cutting-edge tech, digital worlds, and the future.",
  },
  {
    id: "art",
    label: "Art Gallery",
    component: HeroArt,
    style: "Elegant & Refined",
    description: "Mixed serif and sans-serif with generous spacing. Conveys sophistication, culture, and timelessness.",
  },
  {
    id: "boat",
    label: "Boat Rental",
    component: HeroBoat,
    style: "Adventurous & Premium",
    description: "Bottom-anchored layout with flowing connectors. Conveys luxury, freedom, and ocean adventure.",
  },
  {
    id: "food-juice",
    label: "Juice Bar",
    component: HeroFoodJuice,
    style: "Fresh & Playful",
    description: "Vibrant gradients with playful symbols. Conveys health, energy, and natural goodness.",
  },
  {
    id: "food-pizza",
    label: "Pizza Restaurant",
    component: HeroFoodPizza,
    style: "Warm & Authentic",
    description: "Italic script headers with bold display. Conveys tradition, warmth, and Italian heritage.",
  },
  {
    id: "service-coffee-shop",
    label: "Coffee Shop",
    component: HeroServiceCoffeeShop,
    style: "Minimal & Artisan",
    description: "Clean uppercase with rotated side labels. Conveys craft, quality, and morning ritual.",
  },
  {
    id: "service-plants",
    label: "Plant Shop",
    component: HeroServicePlants,
    style: "Organic & Natural",
    description: "Flowing layout with geometric accents. Conveys growth, nature, and bringing outdoors in.",
  },
  {
    id: "product-scifi",
    label: "Tech Products",
    component: HeroProductSciFi,
    style: "Terminal & Futuristic",
    description: "Monospace with command-line aesthetics. Conveys innovation, power, and bleeding-edge technology.",
  },
  {
    id: "product-skincare",
    label: "Skincare Brand",
    component: HeroProductSkincare,
    style: "Soft & Luxurious",
    description: "Elegant serif mixed with clean sans. Conveys beauty, self-care, and premium quality.",
  },
  {
    id: "service-gym",
    label: "Fitness Center",
    component: HeroServiceGym,
    style: "Powerful & Dynamic",
    description: "Bold gradients with explosive layout. Conveys strength, transformation, and peak performance.",
  },
  {
    id: "service-psychologist",
    label: "Therapy Services",
    component: HeroServicePsychologist,
    style: "Calming & Supportive",
    description: "Gentle serif with generous whitespace. Conveys safety, healing, and compassionate care.",
  },
]

export function ContentFeaturesPageClient() {
  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />

      {/* Hero Sections List */}
      {heroSections.map((section, index) => (
        <section key={section.id}>
          <Spacer size="6xl" sizeMobile="4xl" />
          {/* Section Label */}
          <div className="container px-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  {section.label}
                </span>
              </div>
              <div className="pl-10">
                <p className="text-foreground font-medium text-lg">
                  {section.style}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
          <Spacer size="lg" sizeMobile="md" />
          {/* Hero Component */}
          <section.component />
          <Spacer size="6xl" sizeMobile="4xl" />
        </section>
      ))}

      <Spacer size="6xl" sizeMobile="4xl" />
    </div>
  )
}
