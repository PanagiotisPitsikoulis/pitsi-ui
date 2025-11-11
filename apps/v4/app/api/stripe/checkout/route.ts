import { NextResponse } from "next/server"

import { auth } from "@/lib/server/auth"
import { createProCheckoutSession } from "@/lib/server/stripe"

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

    // Check if user is already pro
    if ((user as any).isPro) {
      return NextResponse.json(
        { error: "You are already a Pro member" },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const checkoutUrl = await createProCheckoutSession(
      user.id,
      user.email,
      user.name
    )

    return NextResponse.json({ url: checkoutUrl })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
