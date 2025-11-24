import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb"
import { Button } from "@/registry/new-york-v4/ui/button"
import { BlockPageDisplay } from "@/components/documentation/blocks/block-page-display"
import { getActiveStyle } from "@/registry/styles"

export default async function BlockContentPage({
  params,
}: {
  params: Promise<{
    category: string
    subcategory: string
    blockName: string
  }>
}) {
  const { category, subcategory, blockName } = await params
  const activeStyle = await getActiveStyle()

  // Get all blocks in this subcategory for pagination
  const blocks = (await queryRegistry({
    returnType: "items",
    mainCategory: category,
    subcategory,
  })) as RegistryItem[]

  // Find current block index
  const currentIndex = blocks.findIndex((block) => block.name === blockName)
  const previousBlock = currentIndex > 0 ? blocks[currentIndex - 1] : null
  const nextBlock =
    currentIndex < blocks.length - 1 ? blocks[currentIndex + 1] : null

  // Format category and subcategory names
  const formatName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="h-(--top-spacing) shrink-0" />
      <div className="container flex flex-col gap-8 px-6 py-6 lg:px-3 lg:py-8">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blocks">Blocks</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/blocks/category/${category}`}>
                  {formatName(category)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/blocks/category/${category}/subcategory/${subcategory}`}
                >
                  {formatName(subcategory)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{formatName(blockName)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <BlockPageDisplay name={blockName} styleName={activeStyle.name} />

        {/* Pagination */}
        <div className="flex h-16 w-full items-center gap-2">
          {previousBlock && (
            <Button variant="outline" size="sm" asChild className="shadow-none">
              <Link
                href={`/block/${category}/${subcategory}/${previousBlock.name}`}
              >
                <ChevronRight className="rotate-180" />{" "}
                {formatName(previousBlock.name)}
              </Link>
            </Button>
          )}
          {nextBlock && (
            <Button
              variant="outline"
              size="sm"
              className="ml-auto shadow-none"
              asChild
            >
              <Link href={`/block/${category}/${subcategory}/${nextBlock.name}`}>
                {formatName(nextBlock.name)} <ChevronRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
