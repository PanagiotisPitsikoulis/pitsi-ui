import { ReactNode } from "react"
import { Metadata } from "next"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ component: string }>
}): Promise<Metadata> {
  const { component } = await params
  const page = source.getPage(["components", component])

  if (!page) {
    return { title: "Component Not Found" }
  }

  const { title, description } = page.data

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
        },
      ],
    },
  }
}

export default async function ComponentLayout({
  params,
  content,
  paywall,
}: {
  params: Promise<{
    component: string
  }>
  content: ReactNode
  paywall: ReactNode
}) {
  const { component } = await params

  // Get user subscription status
  const user = await getCurrentUser()
  const isPro = user?.isPro ?? false

  // Get registry item to check tier
  const item = (await queryRegistry({ name: component })) as RegistryItem | null

  // Determine if user can access this component
  // Free tier items are accessible to everyone
  // Pro tier items require isPro
  const isFreeItem = item?.tier === "free" || !item?.tier
  const canAccess = isFreeItem || isPro

  return <>{canAccess ? content : paywall}</>
}
