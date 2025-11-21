import Stripe from "stripe"

if (!process.env.STRIPE_PRIVATE_KEY) {
  throw new Error("STRIPE_PRIVATE_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2025-10-29.clover",
  typescript: true,
})

// Pro Plan Configuration
export const PRO_PLAN = {
  name: "Pro Plan",
  price: 9900, // 99 euros in cents
  currency: "eur",
  description: "One-time purchase for lifetime Pro access",
} as const

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

// Create checkout session for Pro plan
export async function createProCheckoutSession(
  userId: string,
  email: string,
  name: string
): Promise<string> {
  const customerId = await getOrCreateStripeCustomer(userId, email, name)

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: PRO_PLAN.currency,
          product_data: {
            name: PRO_PLAN.name,
            description: PRO_PLAN.description,
          },
          unit_amount: PRO_PLAN.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    metadata: {
      userId,
      planType: "pro",
    },
  })

  return session.url!
}
