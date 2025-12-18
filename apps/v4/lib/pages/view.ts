import { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { type RegistryItem } from "@/lib/registry-utils"
import { absoluteUrl } from "@/lib/utils"
import { Index } from "@/registry/__index__"
import { getStyle, STYLES } from "@/registry/styles"

export function generateViewMetadata({
  style: styleName,
  name,
}: {
  style: string
  name: string
}): Metadata {
  try {
    const style = getStyle(styleName)

    if (!style) {
      return {}
    }

    // Use direct Index access for O(1) lookup without file I/O
    const item = Index[style.name]?.[name] as RegistryItem | undefined

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
  } catch (error) {
    console.warn(`Failed to generate view metadata for ${styleName}/${name}:`, error)
    return {}
  }
}

export async function generateViewStaticParams() {
  try {
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
  } catch (error) {
    console.warn("Failed to generate view static params:", error)
    return []
  }
}
