import { cacheLife } from "next/cache"

import { DocsPaywall } from "@/components/documentation/docs/docs-paywall"

export default async function BlockPaywallPage({
  params,
}: {
  params: Promise<{
    category: string
    blockName: string
  }>
}) {
  "use cache"
  cacheLife("max")

  const { blockName } = await params

  // Format block name for display
  const formattedName = blockName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container">
      <DocsPaywall title={formattedName} type="block" />
    </div>
  )
}
