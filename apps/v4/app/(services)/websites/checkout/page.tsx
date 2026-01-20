"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

import { ArrowLeft, Check, Loader2 } from "lucide-react"

import {
  formatPrice,
  getServiceTierById,
  WEBSITE_TIERS,
} from "@/lib/server/services"

export default function WebsiteCheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tierId = searchParams.get("tier")
  const tier = tierId ? getServiceTierById("website", tierId) : WEBSITE_TIERS[1]

  const [isLoading, setIsLoading] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [description, setDescription] = useState("")

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/services/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "website",
          tierId: tier?.id,
          projectDetails: {
            projectName,
            description,
          },
        }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!tier) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Package not found</h1>
          <p className="text-muted-foreground mt-2">
            Please select a valid package.
          </p>
          <button
            onClick={() => router.push("/websites")}
            className="bg-primary text-primary-foreground mt-4 rounded-lg px-4 py-2"
          >
            View Packages
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <button
        onClick={() => router.back()}
        className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Complete Your Order</h1>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl border p-6">
              <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

              <div className="mb-4 rounded-lg border p-4">
                <h3 className="font-semibold">{tier.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="mb-6 space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(tier.price)}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Delivery in {tier.deliveryDays} days
                </p>
              </div>
            </div>
          </div>

          {/* Project Details Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-xl border p-6">
              <h2 className="mb-4 text-lg font-semibold">Project Details</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Tell us about your project. You can provide more details after
                checkout.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="projectName"
                    className="mb-1 block text-sm font-medium"
                  >
                    Project Name
                  </label>
                  <input
                    id="projectName"
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., My Business Website"
                    className="border-input bg-background focus:ring-primary w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium"
                  >
                    Brief Description (optional)
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about your business and what you want to achieve..."
                    rows={4}
                    className="border-input bg-background focus:ring-primary w-full resize-none rounded-lg border px-4 py-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading || !projectName}
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Proceed to Payment</>
                )}
              </button>

              <p className="text-muted-foreground mt-4 text-center text-xs">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
