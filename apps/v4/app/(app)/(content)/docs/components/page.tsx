import { cacheLife } from "next/cache"

import { generateDocsListMetadata } from "@/lib/pages/docs"
import { DocsListPage } from "@/components/documentation/docs/docs-list-page"

export async function generateMetadata() {
  return generateDocsListMetadata("components")
}

const COMPONENT_CATEGORY_URLS = {
  "core-components": "#core-components",
  primitives: "#primitives",
  sectorial: "#sectorial",
  layout: "#layout",
  providers: "#providers",
}

export default async function ComponentsListPage() {
  "use cache"
  cacheLife("max")

  return <DocsListPage type="components" categoryUrls={COMPONENT_CATEGORY_URLS} />
}
