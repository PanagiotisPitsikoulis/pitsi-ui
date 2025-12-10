import { DocsItemPaywallContent } from "@/components/documentation/docs/docs-item-paywall"

export default async function ComponentPaywallPage({
  params,
}: {
  params: Promise<{ component: string }>
}) {
  const { component } = await params

  return <DocsItemPaywallContent itemName={component} type="components" />
}
