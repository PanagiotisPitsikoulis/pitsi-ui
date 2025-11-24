import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { DocsPaywall } from "@/components/documentation/docs/docs-paywall"

export default async function ComponentPaywallPage({
  params,
}: {
  params: Promise<{
    component: string
  }>
}) {
  const { component } = await params

  // Get registry item for title
  const item = (await queryRegistry({ name: component })) as RegistryItem | null

  // Format component name for display
  const formattedName =
    item?.name ||
    component
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

  return (
    <div className="container py-8">
      <DocsPaywall title={formattedName} type="component" />
    </div>
  )
}
