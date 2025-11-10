import { getAllBlockIds } from "@/lib/blocks"
import { BlockDisplay } from "@/components/block-display"
import { BlocksPaginated } from "@/components/blocks-paginated"
import { getActiveStyle } from "@/registry/styles"

export const revalidate = false
export const dynamic = "force-static"

export default async function BlocksPage() {
  const activeStyle = await getActiveStyle()
  const blocks = await getAllBlockIds(["registry:block"], ["marketing"])

  return (
    <BlocksPaginated blocks={blocks}>
      {blocks.map((name) => (
        <BlockDisplay name={name} key={name} styleName={activeStyle.name} />
      ))}
    </BlocksPaginated>
  )
}
