import { cacheLife } from "next/cache"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowUpRight } from "lucide-react"

import { getAllCategories, getBlockIdsByCategory } from "@/lib/blocks"
import { generateCategoryStaticParams } from "@/lib/pages/blocks"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { BlocksList } from "@/components/documentation/blocks/blocks-list"
import { getActiveStyle } from "@/registry/styles"
import { getAllTemplatesMetadata } from "@/app/(app)/(content)/(blocks)/template-config"

export async function generateStaticParams() {
  return generateCategoryStaticParams()
}

// Get templates from config
const templates = getAllTemplatesMetadata()

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  "use cache"
  cacheLife("max")

  const { category } = await params
  const allCategories = getAllCategories()
  const activeStyle = await getActiveStyle()

  // Handle "all" category - show all blocks
  if (category === "all") {
    const blocks = (await queryRegistry({
      returnType: "items",
      types: ["registry:block"],
    })) as RegistryItem[]

    if (blocks.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground">No blocks available.</p>
        </div>
      )
    }

    // Transform blocks - get category from block's categories array
    const blockItems = blocks.map((block) => {
      const blockCategory = block.categories?.[0] || "uncategorized"
      return {
        name: block.name,
        description: block.description,
        href: `/block/${blockCategory}/${block.name}`,
        readiness: block.readiness,
        tier: block.tier,
        iframeHeight: block.meta?.iframeHeight,
        styleName: activeStyle.name,
      }
    })

    return (
      <div className="flex flex-col gap-8">
        {/* Templates Section */}
        <div className="container">
          <div className="bg-muted rounded-xl p-6">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <div
                  key={template.slug}
                  className="group relative flex scroll-mt-20 flex-col gap-4"
                >
                  <div className="overflow-hidden rounded-2xl border-transparent shadow-sm dark:border dark:border-border">
                    <div className="bg-background relative transition-all">
                      <span className="bg-primary/90 text-primary-foreground absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-xs font-medium">
                        Full Page
                      </span>
                    <div data-slot="preview" className="overflow-hidden">
                      <div className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden">
                        <div className="relative h-full w-full overflow-hidden">
                          <iframe
                            src={`/view/${activeStyle.name}/${template.heroBlock}`}
                            className="pointer-events-none h-full w-full origin-top-left scale-[0.25]"
                            style={{
                              width: "400%",
                              height: "400%",
                            }}
                            title={`${template.name} hero preview`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/template/${template.slug}`}
                  className="group/link flex flex-col gap-1 px-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
                      {template.name}
                    </span>
                    <ArrowUpRight className="text-muted-foreground group-hover/link:text-foreground size-4 shrink-0 transition-colors" />
                  </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Blocks List */}
        <BlocksList blocks={blockItems} />
      </div>
    )
  }

  // Validate category exists
  if (!allCategories.includes(category)) {
    redirect("/blocks")
  }

  // Get blocks for this category
  const blockIds = getBlockIdsByCategory(category)
  const blocks = (await queryRegistry({
    returnType: "items",
    filter: (item) => blockIds.includes(item.name),
  })) as RegistryItem[]

  if (blocks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground">No blocks in this category.</p>
      </div>
    )
  }

  // Transform blocks into the format expected by BlocksList
  const blockItems = blocks.map((block) => ({
    name: block.name,
    description: block.description,
    href: `/block/${category}/${block.name}`,
    readiness: block.readiness,
    tier: block.tier,
    iframeHeight: block.meta?.iframeHeight,
    styleName: activeStyle.name,
  }))

  return <BlocksList blocks={blockItems} />
}
