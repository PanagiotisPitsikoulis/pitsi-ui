import { ReactNode } from "react"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"

export async function DocsItemLayout({
  itemName,
  content,
  paywall,
}: {
  itemName: string
  content: ReactNode
  paywall: ReactNode
}) {
  try {
    // First check if item requires pro tier
    const item = (await queryRegistry({
      name: itemName,
    })) as RegistryItem | null

    // Free tier items are accessible to everyone - no user check needed
    if (item?.tier !== "pro") {
      return <>{content}</>
    }

    // Pro tier item - check if user has access
    const user = await getCurrentUser()
    const isPro = user?.isPro ?? false

    return <>{isPro ? content : paywall}</>
  } catch (error) {
    console.warn(`DocsItemLayout error for ${itemName}:`, error)
    // On error, show content (fail open for better UX)
    return <>{content}</>
  }
}
