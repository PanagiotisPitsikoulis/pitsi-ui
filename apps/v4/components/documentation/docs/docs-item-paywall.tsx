import type { DocsItemType } from "@/lib/pages/docs"
import { DocsPaywall } from "@/components/documentation/docs/docs-paywall"

function formatItemName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function DocsItemPaywallContent({
  itemName,
  type,
}: {
  itemName: string
  type: DocsItemType
}) {
  const formattedName = formatItemName(itemName)
  const displayType = type === "components" ? "component" : "animation"

  return (
    <div className="container py-8">
      <DocsPaywall title={formattedName} type={displayType} />
    </div>
  )
}
