import { cacheLife } from "next/cache"

import { generateDocsItemStaticParams } from "@/lib/pages/docs"
import { TrackAnimationView } from "@/components/documentation/animations/track-animation-view"
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

  return (
    <>
      <TrackAnimationView name={animation} />
      <DocsItemContent itemName={animation} type="animations" />
    </>
  )
}
