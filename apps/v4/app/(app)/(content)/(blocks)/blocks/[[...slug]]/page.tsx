import { cacheLife } from "next/cache"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
  // Only generate for /blocks (no slug)
  return [{ slug: undefined }]
}

export default async function BlocksRedirectPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  "use cache"
  cacheLife("max")

  const { slug = [] } = await params

  // /blocks → redirect to "all" category
  if (slug.length === 0) {
    redirect("/blocks/all")
  }

  // Invalid route → redirect to /blocks/all
  redirect("/blocks/all")
}
