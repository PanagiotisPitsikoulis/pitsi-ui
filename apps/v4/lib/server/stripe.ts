import Stripe from "stripe"

import type { PlanType } from "./db/schema"

// Lazy initialization to avoid throwing at module load time
let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_PRIVATE_KEY) {
      throw new Error("STRIPE_PRIVATE_KEY is not set")
    }
    _stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
      apiVersion: "2025-10-29.clover",
      typescript: true,
    })
  }
  return _stripe
}

// Export for backwards compatibility (lazy getter)
export const stripe = new Proxy({} as Stripe, {
  get(_, prop) {
    return (getStripe() as any)[prop]
  },
})

// Plan Configurations
export const PLANS = {
  pro: {
    name: "Pro Plan",
    price: 14900, // 149 euros in cents
    currency: "eur",
    description: "One-time purchase for lifetime Pro access",
  },
  exclusive: {
    name: "Exclusive Plan",
    price: 49900, // 499 euros in cents
    currency: "eur",
    description: "Premium access with priority support and commercial license",
  },
  team: {
    name: "Team Plan",
    price: 99900, // 999 euros in cents
    currency: "eur",
    description: "One-time purchase for lifetime Team access with up to 10 members",
    maxMembers: 10,
  },
  enterprise: {
    name: "Enterprise Plan",
    price: 199900, // 1999 euros in cents
    currency: "eur",
    description: "One-time purchase for unlimited team members",
    maxMembers: Infinity,
  },
} as const

// Legacy export for backwards compatibility
export const PRO_PLAN = PLANS.pro

// Create or get Stripe customer
export async function getOrCreateStripeCustomer(
  userId: string,
  email: string,
  name: string
): Promise<string> {
  // Check if customer already exists by email
  const existingCustomers = await stripe.customers.list({
    email,
    limit: 1,
  })

  if (existingCustomers.data.length > 0) {
    return existingCustomers.data[0].id
  }

  // Create new customer
  const customer = await stripe.customers.create({
    email,
    name,
    metadata: {
      userId,
    },
  })

  return customer.id
}

// Create checkout session for a specific plan
export async function createCheckoutSession(
  userId: string,
  email: string,
  name: string,
  planType: "pro" | "exclusive" | "team" | "enterprise"
): Promise<string> {
  const customerId = await getOrCreateStripeCustomer(userId, email, name)
  const plan = PLANS[planType]

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: plan.currency,
          product_data: {
            name: plan.name,
            description: plan.description,
          },
          unit_amount: plan.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`,
    metadata: {
      userId,
      planType,
    },
  })

  return session.url!
}

// Legacy function for backwards compatibility
export async function createProCheckoutSession(
  userId: string,
  email: string,
  name: string
): Promise<string> {
  return createCheckoutSession(userId, email, name, "pro")
}
