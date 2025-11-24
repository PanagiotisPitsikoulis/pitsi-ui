import { ReactNode } from "react"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"

export default async function AnimationLayout({
  params,
  content,
  paywall,
}: {
  params: Promise<{
    animation: string
  }>
  content: ReactNode
  paywall: ReactNode
}) {
  const { animation } = await params

  // Get user subscription status
  const user = await getCurrentUser()
  const isPro = user?.isPro ?? false

  // Get registry item to check tier
  const item = (await queryRegistry({ name: animation })) as RegistryItem | null

  // Determine if user can access this animation
  // Free tier items are accessible to everyone
  // Pro tier items require isPro
  const isFreeItem = item?.tier === "free" || !item?.tier
  const canAccess = isFreeItem || isPro

  return <>{canAccess ? content : paywall}</>
}
