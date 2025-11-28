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
 */
export const getSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: (await Promise.resolve(
      (await import("next/headers")).headers()
    )) as any,
  })

  return session
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
