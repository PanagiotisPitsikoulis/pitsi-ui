import { headers } from "next/headers"
import Link from "next/link"

import {
  getAllMainCategories,
  getCategoryBlockCounts,
  getSubcategories,
} from "@/lib/blocks"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"

export async function BlocksNav() {
  const categories = await getAllMainCategories()
  const blockCounts = await getCategoryBlockCounts()
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") || ""

  // Extract active category from pathname
  const categoryMatch = pathname.match(/\/blocks\/category\/([^/]+)/)
  const activeCategory = categoryMatch ? categoryMatch[1] : "marketing"

  // Build category links with first subcategory
  const categoryLinks = await Promise.all(
    categories.map(async (category) => {
      const subcategories = await getSubcategories(category)
      const href =
        subcategories.length > 0
          ? `/blocks/category/${category}/subcategory/${subcategories[0]}`
          : `/blocks/category/${category}`

      return { category, href, count: blockCounts[category] || 0 }
    })
  )

  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          {categoryLinks.map(({ category, href, count }) => {
            // Format category name: replace dashes with spaces and capitalize
            const formattedName = category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")

            return (
              <Link
                key={category}
                href={href}
                className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 min-w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap px-4 text-center text-base font-medium transition-colors"
                data-active={activeCategory === category}
              >
                <span>{formattedName}</span>
                <span className="text-muted-foreground text-xs">({count})</span>
              </Link>
            )
          })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
