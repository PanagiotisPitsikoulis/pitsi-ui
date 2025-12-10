import { Metadata } from "next"

import { queryRegistry } from "@/lib/registry-utils"
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
  // Fetch categories and counts in parallel
  const [categories, blockCounts] = await Promise.all([
    queryRegistry({
      returnType: "categories",
      types: ["registry:block", "registry:internal"],
    }) as Promise<string[]>,
    queryRegistry({
      returnType: "counts",
      types: ["registry:block", "registry:internal"],
    }) as Promise<Record<string, number>>,
  ])

  // Build category links with subcategories
  const categoryLinks = await Promise.all(
    categories.map(async (category) => {
      const [subcategories, subcategoryCounts] = await Promise.all([
        queryRegistry({
          returnType: "subcategories",
          mainCategory: category,
        }) as Promise<string[]>,
        queryRegistry({
          returnType: "subcategoryCounts",
          mainCategory: category,
        }) as Promise<Record<string, number>>,
      ])

      // Build subcategory links with counts and sort by count (highest first)
      const subcategoryLinks = subcategories
        .map((subcategory) => ({
          subcategory,
          href: `/blocks/category/${category}/subcategory/${subcategory}`,
          count: subcategoryCounts[subcategory] || 0,
        }))
        .sort((a, b) => b.count - a.count)

      // Update href to point to the first subcategory after sorting
      const sortedHref =
        subcategoryLinks.length > 0
          ? subcategoryLinks[0].href
          : `/blocks/category/${category}`

      return {
        category,
        href: sortedHref,
        count: blockCounts[category] || 0,
        subcategories: subcategoryLinks,
      }
    })
  )

  // Sort categories by count (highest first) and filter out empty ones
  const filteredCategoryLinks = categoryLinks
    .filter((cat) => cat.subcategories.length > 0)
    .sort((a, b) => b.count - a.count)

  return (
    <BlocksLayoutClient categoryLinks={filteredCategoryLinks}>
      {children}
    </BlocksLayoutClient>
  )
}
