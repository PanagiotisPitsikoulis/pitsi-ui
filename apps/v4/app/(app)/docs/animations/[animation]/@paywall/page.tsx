import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { DocsPaywall } from "@/components/documentation/docs/docs-paywall"

export default async function AnimationPaywallPage({
  params,
}: {
  params: Promise<{
    animation: string
  }>
}) {
  const { animation } = await params

  // Get registry item for title
  const item = (await queryRegistry({ name: animation })) as RegistryItem | null

  // Format animation name for display
  const formattedName =
    item?.name ||
    animation
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

  return (
    <div className="container py-8">
      <DocsPaywall title={formattedName} type="animation" />
    </div>
  )
}
