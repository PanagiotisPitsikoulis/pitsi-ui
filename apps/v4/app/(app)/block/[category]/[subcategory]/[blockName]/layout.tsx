import { ReactNode } from "react"
import { Metadata } from "next"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string
    subcategory: string
    blockName: string
  }>
}): Promise<Metadata> {
  const { category, subcategory, blockName } = await params

  const item = (await queryRegistry({ name: blockName })) as RegistryItem | null

  const formatName = (name: string) =>
    name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

  const title = item?.name || formatName(blockName)
  const description =
    item?.description || `${formatName(blockName)} block for ${formatName(category)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        },
      ],
    },
  }
}

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
