import { getAllBlockIds } from "@/lib/blocks"
import { registryCategories } from "@/lib/categories"
import { BlockDisplay } from "@/components/block-display"
import { BlocksPaginated } from "@/components/blocks-paginated"
import { getActiveStyle } from "@/registry/styles"

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const [{ categories = [] }, activeStyle] = await Promise.all([
    params,
    getActiveStyle(),
  ])
  const blocks = await getAllBlockIds(["registry:block"], categories)

  return (
    <BlocksPaginated blocks={blocks}>
      {blocks.map((name) => (
        <BlockDisplay name={name} key={name} styleName={activeStyle.name} />
      ))}
    </BlocksPaginated>
  )
}
