import { DocsItemPaywallContent } from "@/components/documentation/docs/docs-item-paywall"

export default async function AnimationPaywallPage({
  params,
}: {
  params: Promise<{ animation: string }>
}) {
  const { animation } = await params

  return <DocsItemPaywallContent itemName={animation} type="animations" />
}
