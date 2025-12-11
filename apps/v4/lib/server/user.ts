import { cache } from "react"

import { auth } from "./auth"
import type { PlanType } from "./db/schema"

export type User = {
  id: string
  name: string
  email: string
  image: string | null
  isPro: boolean
  planType: PlanType
}

/**
 * Get the current session
 * Uses React cache to dedupe requests
 * Returns null if database is unavailable or during static prerendering
 */
export const getSession = cache(async () => {
  try {
    const { headers } = await import("next/headers")

    // Get headers - this will throw during prerendering
    let requestHeaders: Headers
    try {
      requestHeaders = await headers()
    } catch {
      // During prerendering, headers() is not available
      return null
    }

    const session = await auth.api.getSession({
      headers: requestHeaders as any,
    })

    return session
  } catch (error) {
    // Gracefully handle database connection errors
    // This allows pages to render even when the database is unavailable
    console.warn("Failed to get session:", error)
    return null
  }
})

/**
 * Get the current user with session data
 * Uses React cache to dedupe requests
 * Returns null if not authenticated
 */
export const getCurrentUser = cache(async (): Promise<User | null> => {
  const session = await getSession()

  if (!session?.user) {
    return null
  }

  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image ?? null,
    isPro: (session.user as any).isPro ?? false,
    planType: ((session.user as any).planType as PlanType) ?? "free",
  }
})
