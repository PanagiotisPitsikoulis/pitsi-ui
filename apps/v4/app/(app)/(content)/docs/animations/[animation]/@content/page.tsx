import { cacheLife } from "next/cache"

import { generateDocsItemStaticParams } from "@/lib/pages/docs"
import { DocsItemContent } from "@/components/documentation/docs/docs-item-content"

export function generateStaticParams() {
  return generateDocsItemStaticParams("animations")
}

export default async function AnimationContentPage({
  params,
}: {
  params: Promise<{ animation: string }>
}) {
  "use cache"
  cacheLife("max")

  const { animation } = await params

  return <DocsItemContent itemName={animation} type="animations" />
}
