import type { ServiceType } from "./db/schema"

export interface ServiceTier {
  id: string
  name: string
  price: number // in cents
  description: string
  features: string[]
  deliveryDays: number
  popular?: boolean
}

export const WEBSITE_TIERS: ServiceTier[] = [
  {
    id: "website-starter",
    name: "Starter Website",
    price: 99900, // EUR 999
    description: "Perfect for small businesses",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "SEO optimization",
      "1 revision round",
    ],
    deliveryDays: 14,
  },
  {
    id: "website-professional",
    name: "Professional Website",
    price: 249900, // EUR 2,499
    description: "Full-featured for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design",
      "CMS integration",
      "Blog",
      "Analytics",
      "3 revision rounds",
    ],
    deliveryDays: 28,
    popular: true,
  },
  {
    id: "website-enterprise",
    name: "Enterprise Website",
    price: 499900, // EUR 4,999
    description: "Complete solution for large organizations",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce ready",
      "Multi-language",
      "3 months support",
    ],
    deliveryDays: 45,
  },
]

export const MOBILE_APP_TIERS: ServiceTier[] = [
  {
    id: "app-mvp",
    name: "MVP App",
    price: 299900, // EUR 2,999
    description: "Launch your idea quickly",
    features: [
      "iOS or Android",
      "Up to 5 screens",
      "Basic auth",
      "Push notifications",
      "1 revision round",
    ],
    deliveryDays: 30,
  },
  {
    id: "app-standard",
    name: "Standard App",
    price: 599900, // EUR 5,999
    description: "Full-featured mobile application",
    features: [
      "iOS and Android",
      "Up to 15 screens",
      "Social auth",
      "In-app purchases",
      "3 revision rounds",
    ],
    deliveryDays: 60,
    popular: true,
  },
  {
    id: "app-premium",
    name: "Premium App",
    price: 999900, // EUR 9,999
    description: "Enterprise-grade mobile solution",
    features: [
      "iOS and Android",
      "Unlimited screens",
      "Custom backend",
      "Admin dashboard",
      "3 months support",
    ],
    deliveryDays: 90,
  },
]

export function getServiceTiers(serviceType: ServiceType): ServiceTier[] {
  return serviceType === "website" ? WEBSITE_TIERS : MOBILE_APP_TIERS
}

export function getServiceTierById(
  serviceType: ServiceType,
  tierId: string
): ServiceTier | undefined {
  const tiers = getServiceTiers(serviceType)
  return tiers.find((tier) => tier.id === tierId)
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(priceInCents / 100)
}

export function getDeliveryDate(deliveryDays: number): Date {
  const date = new Date()
  date.setDate(date.getDate() + deliveryDays)
  return date
}

export function getServiceTypeLabel(serviceType: ServiceType): string {
  return serviceType === "website" ? "Website" : "Mobile App"
}

export function getStatusLabel(
  status: string
): { label: string; color: string } {
  const statusMap: Record<string, { label: string; color: string }> = {
    pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
    paid: { label: "Paid", color: "bg-blue-100 text-blue-800" },
    in_progress: { label: "In Progress", color: "bg-purple-100 text-purple-800" },
    review: { label: "In Review", color: "bg-orange-100 text-orange-800" },
    completed: { label: "Completed", color: "bg-green-100 text-green-800" },
    cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800" },
  }
  return statusMap[status] || { label: status, color: "bg-gray-100 text-gray-800" }
}
