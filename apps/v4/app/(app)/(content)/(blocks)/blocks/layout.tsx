import { Metadata } from "next"

import { getAllCategories, getCategoryBlockCounts } from "@/lib/blocks"
import { BlocksLayoutClient } from "./layout-client"

const title = "Building Blocks for the Web"
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default async function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = getAllCategories()
  const blockCounts = getCategoryBlockCounts()

  // Calculate total count
  const totalCount = Object.values(blockCounts).reduce((sum, count) => sum + count, 0)

  // Build category links with "all" first
  const categoryLinks = [
    { category: "all", href: "/blocks/all", count: totalCount },
    ...categories
      .map((category) => ({
        category,
        href: `/blocks/${category}`,
        count: blockCounts[category] || 0,
      }))
      .filter((cat) => cat.count > 0)
      .sort((a, b) => b.count - a.count),
  ]

  return (
    <BlocksLayoutClient categoryLinks={categoryLinks}>
      {children}
    </BlocksLayoutClient>
  )
}
