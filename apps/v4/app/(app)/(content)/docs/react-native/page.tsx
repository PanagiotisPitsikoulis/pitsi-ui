import { cacheLife } from "next/cache"

import { generateDocsListMetadata } from "@/lib/pages/docs"
import { DocsListPage } from "@/components/documentation/docs/docs-list-page"

export async function generateMetadata() {
  return generateDocsListMetadata("react-native")
}

const REACT_NATIVE_CATEGORY_URLS = {
  "react-native": "#react-native",
}

export default async function ReactNativeListPage() {
  "use cache"
  cacheLife("max")

  return (
    <DocsListPage type="react-native" categoryUrls={REACT_NATIVE_CATEGORY_URLS} />
  )
}
