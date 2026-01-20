import Link from "next/link"

import { Check } from "lucide-react"

import { formatPrice, type ServiceTier } from "@/lib/server/services"

interface ServicePricingCardProps {
  tier: ServiceTier
  serviceType: "website" | "mobile_app"
}

export function ServicePricingCard({ tier, serviceType }: ServicePricingCardProps) {
  const checkoutUrl =
    serviceType === "website"
      ? `/websites/checkout?tier=${tier.id}`
      : `/apps/checkout?tier=${tier.id}`

  return (
    <div
      className={`bg-card relative flex flex-col rounded-2xl border p-8 ${
        tier.popular ? "border-primary shadow-lg" : ""
      }`}
    >
      {tier.popular && (
        <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold">{tier.name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold">{formatPrice(tier.price)}</span>
        <span className="text-muted-foreground ml-1">one-time</span>
      </div>

      <div className="text-muted-foreground mb-6 text-sm">
        Delivery in {tier.deliveryDays} days
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={checkoutUrl}
        className={`rounded-lg py-3 text-center font-semibold transition-colors ${
          tier.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        Get Started
      </Link>
    </div>
  )
}
