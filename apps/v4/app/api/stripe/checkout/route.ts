import { NextResponse } from "next/server"

import { auth } from "@/lib/server/auth"
import { createCheckoutSession } from "@/lib/server/stripe"

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
    const userPlanType = (user as any).planType || "free"

    // Parse request body for plan type
    const body = await req.json().catch(() => ({}))
    const requestedPlan = body.planType || "pro"

    // Validate plan type
    if (!["pro", "exclusive", "team", "enterprise"].includes(requestedPlan)) {
      return NextResponse.json(
        { error: "Invalid plan type" },
        { status: 400 }
      )
    }

    // Plan hierarchy: free < pro < exclusive < team < enterprise
    const planHierarchy = ["free", "pro", "exclusive", "team", "enterprise"]
    const currentPlanIndex = planHierarchy.indexOf(userPlanType)
    const requestedPlanIndex = planHierarchy.indexOf(requestedPlan)

    // Check if user already has this plan or a higher one
    if (requestedPlanIndex <= currentPlanIndex) {
      return NextResponse.json(
        { error: `You already have the ${userPlanType.charAt(0).toUpperCase() + userPlanType.slice(1)} plan or higher` },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const checkoutUrl = await createCheckoutSession(
      user.id,
      user.email,
      user.name,
      requestedPlan
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
