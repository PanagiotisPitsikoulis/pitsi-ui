import { cacheLife } from "next/cache"

import { generateDocsListMetadata } from "@/lib/pages/docs"
import { DocsListPage } from "@/components/documentation/docs/docs-list-page"

export async function generateMetadata() {
  return generateDocsListMetadata("animations")
}

const ANIMATION_CATEGORY_URLS = {
  animations: "#animations",
}

export default async function AnimationsListPage() {
  "use cache"
  cacheLife("max")

  return <DocsListPage type="animations" categoryUrls={ANIMATION_CATEGORY_URLS} />
}
