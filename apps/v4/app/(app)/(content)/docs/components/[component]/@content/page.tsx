import { cacheLife } from "next/cache"

import { generateDocsItemStaticParams } from "@/lib/pages/docs"
import { TrackComponentView } from "@/components/documentation/components/track-component-view"
import { DocsItemContent } from "@/components/documentation/docs/docs-item-content"

export function generateStaticParams() {
  return generateDocsItemStaticParams("components")
}

export default async function ComponentContentPage({
  params,
}: {
  params: Promise<{ component: string }>
}) {
  "use cache"
  cacheLife("max")

  const { component } = await params

  return (
    <>
      <TrackComponentView name={component} />
      <DocsItemContent itemName={component} type="components" />
    </>
  )
}
