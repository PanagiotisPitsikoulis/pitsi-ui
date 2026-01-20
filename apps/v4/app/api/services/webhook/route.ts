import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import Stripe from "stripe"

import { db } from "@/lib/server/db"
import { serviceOrder } from "@/lib/server/db/schema"

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
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_SERVICES_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error("STRIPE_SERVICES_WEBHOOK_SECRET is not set")
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session

      // Check if this is a service order
      if (session.metadata?.type !== "service_order") {
        // Not a service order, skip
        break
      }

      const orderId = session.metadata.orderId

      if (!orderId) {
        console.error("No order ID in session metadata")
        break
      }

      // Update order status to paid
      await db
        .update(serviceOrder)
        .set({
          status: "paid",
          stripePaymentIntentId:
            typeof session.payment_intent === "string"
              ? session.payment_intent
              : session.payment_intent?.id,
          updatedAt: new Date(),
        })
        .where(eq(serviceOrder.id, orderId))

      console.log(`Service order ${orderId} marked as paid`)
      break
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent

      // Check if this is a service order
      if (paymentIntent.metadata?.type !== "service_order") {
        break
      }

      const orderId = paymentIntent.metadata.orderId

      if (orderId) {
        await db
          .update(serviceOrder)
          .set({
            status: "cancelled",
            updatedAt: new Date(),
          })
          .where(eq(serviceOrder.id, orderId))

        console.log(`Service order ${orderId} payment failed, marked as cancelled`)
      }
      break
    }

    default:
      // Unhandled event type
      break
  }

  return NextResponse.json({ received: true })
}
