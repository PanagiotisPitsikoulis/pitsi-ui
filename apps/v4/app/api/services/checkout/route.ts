import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import Stripe from "stripe"

import { auth } from "@/lib/server/auth"
import { db } from "@/lib/server/db"
import { serviceOrder, type ServiceType } from "@/lib/server/db/schema"
import {
  getDeliveryDate,
  getServiceTierById,
  getServiceTypeLabel,
} from "@/lib/server/services"
import { getOrCreateStripeCustomer } from "@/lib/server/stripe"

// Lazy Stripe initialization
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

export async function POST(req: Request) {
  try {
    // Get the current session
    const session = await auth.api.getSession({
      headers: req.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = session.user
    const body = await req.json()

    const { serviceType, tierId, projectDetails } = body as {
      serviceType: ServiceType
      tierId: string
      projectDetails?: {
        projectName?: string
        description?: string
      }
    }

    // Validate service type
    if (!["website", "mobile_app"].includes(serviceType)) {
      return NextResponse.json(
        { error: "Invalid service type" },
        { status: 400 }
      )
    }

    // Get tier
    const tier = getServiceTierById(serviceType, tierId)
    if (!tier) {
      return NextResponse.json(
        { error: "Invalid tier" },
        { status: 400 }
      )
    }

    // Create service order in database
    const [order] = await db
      .insert(serviceOrder)
      .values({
        userId: user.id,
        serviceType,
        tier: tierId,
        amount: tier.price,
        projectDetails: projectDetails || {},
        deliveryDate: getDeliveryDate(tier.deliveryDays),
      })
      .returning()

    // Get or create Stripe customer
    const customerId = await getOrCreateStripeCustomer(
      user.id,
      user.email,
      user.name
    )

    // Create Stripe checkout session
    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${tier.name} - ${getServiceTypeLabel(serviceType)}`,
              description: tier.description,
            },
            unit_amount: tier.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/services/${order.id}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/${serviceType === "website" ? "websites" : "apps"}/checkout?tier=${tierId}&canceled=true`,
      metadata: {
        userId: user.id,
        orderId: order.id,
        serviceType,
        tierId,
        type: "service_order",
      },
    })

    // Update order with checkout session ID
    await db
      .update(serviceOrder)
      .set({ stripeCheckoutSessionId: checkoutSession.id })
      .where(eq(serviceOrder.id, order.id))

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Error creating service checkout session:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
