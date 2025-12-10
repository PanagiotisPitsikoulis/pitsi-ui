import { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { absoluteUrl } from "@/lib/utils"
import { getStyle, STYLES } from "@/registry/styles"

export async function generateViewMetadata({
  style: styleName,
  name,
}: {
  style: string
  name: string
}): Promise<Metadata> {
  const style = getStyle(styleName)

  if (!style) {
    return {}
  }

  const item = (await queryRegistry({
    name,
    style: style.name,
  })) as RegistryItem | null

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/view/${style.name}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@pitsi",
    },
  }
}

export async function generateViewStaticParams() {
  const { Index } = await import("@/registry/__index__")
  const params: Array<{ style: string; name: string }> = []
  const hideAlpha = process.env.HIDE_ALPHA_ITEMS === "true"

  for (const style of STYLES) {
    if (!Index[style.name]) {
      continue
    }

    const styleIndex = Index[style.name]
    for (const itemName in styleIndex) {
      const item = styleIndex[itemName]

      // Skip alpha items if HIDE_ALPHA_ITEMS is true
      if (hideAlpha && item.readiness === "alpha") {
        continue
      }

      // Include blocks, components, examples, and animations (UI items with animations category)
      const isAnimation = item.categories?.includes("animations")
      if (
        ["registry:block", "registry:component", "registry:example"].includes(
          item.type
        ) ||
        isAnimation
      ) {
        params.push({
          style: style.name,
          name: item.name,
        })
      }
    }
  }

  return params
}
