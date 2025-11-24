import { ReactNode } from "react"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"

export default async function BlockPreviewLayout({
  params,
  content,
  paywall,
}: {
  params: Promise<{
    category: string
    subcategory: string
    blockName: string
  }>
  content: ReactNode
  paywall: ReactNode
}) {
  const { blockName } = await params

  // Get user subscription status
  const user = await getCurrentUser()
  const isPro = user?.isPro ?? false

  // Get registry item to check tier
  const item = (await queryRegistry({ name: blockName })) as RegistryItem | null

  // Determine if user can access this block
  // Free tier items are accessible to everyone
  // Pro tier items require isPro
  const isFreeItem = item?.tier === "free" || !item?.tier
  const canAccess = isFreeItem || isPro

  return <>{canAccess ? content : paywall}</>
}
