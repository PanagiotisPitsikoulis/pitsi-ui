import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import Stripe from "stripe"

import { db } from "@/lib/server/db"
import { user } from "@/lib/server/db/schema"
import { stripe } from "@/lib/server/stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("STRIPE_WEBHOOK_SECRET is not set")
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Get user ID from metadata
        const userId = session.metadata?.userId

        if (!userId) {
          console.error("No userId in session metadata")
          return NextResponse.json(
            { error: "Missing userId in metadata" },
            { status: 400 }
          )
        }

        // Update user to Pro
        await db
          .update(user)
          .set({
            isPro: true,
            stripeCustomerId: session.customer as string,
            stripePaymentId: session.payment_intent as string,
            proUpgradedAt: new Date(),
          })
          .where(eq(user.id, userId))

        console.log(`User ${userId} upgraded to Pro`)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}
