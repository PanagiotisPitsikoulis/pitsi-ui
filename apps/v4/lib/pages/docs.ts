import { Metadata } from "next"

import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { Index } from "@/registry/__index__"

export type DocsItemType = "components" | "animations"

export function generateDocsStaticParams() {
  const hideAlpha = process.env.HIDE_ALPHA_ITEMS === "true"
  const allParams = source.generateParams()

  if (!hideAlpha) {
    return allParams
  }

  // Filter out alpha components and animations
  return allParams.filter((param) => {
    const slug = param.slug
    if (!slug || slug.length < 2) return true

    // Check if this is a component or animation page
    const isComponentPage = slug[0] === "components"
    const isAnimationPage = slug[0] === "animations"

    if (!isComponentPage && !isAnimationPage) return true

    // Get the item name from the slug
    const itemName = slug[1]
    const registryItem = Index["new-york-v4"]?.[itemName]

    // Filter out alpha items
    return registryItem?.readiness !== "alpha"
  })
}

export async function generateDocsMetadata({
  slug,
}: {
  slug: string[]
}): Promise<Metadata> {
  try {
    const page = source.getPage(slug)

    if (!page) {
      return { title: "Not Found" }
    }

    const doc = page.data

    if (!doc.title || !doc.description) {
      return { title: "Not Found" }
    }

    return {
      title: doc.title,
      description: doc.description,
      openGraph: {
        title: doc.title,
        description: doc.description,
        type: "article",
        url: absoluteUrl(page.url),
        images: [
          {
            url: `/og?title=${encodeURIComponent(
              doc.title
            )}&description=${encodeURIComponent(doc.description)}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: doc.title,
        description: doc.description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(
              doc.title
            )}&description=${encodeURIComponent(doc.description)}`,
          },
        ],
        creator: "@pitsi",
      },
    }
  } catch (error) {
    console.warn(`Failed to generate docs metadata for ${slug.join("/")}:`, error)
    return { title: "Documentation" }
  }
}

export async function generateDocsListMetadata(type: DocsItemType) {
  try {
    const page = source.getPage([type])

    if (!page) {
      return { title: type === "components" ? "Components" : "Animations" }
    }

    const { title, description } = page.data

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: absoluteUrl(page.url),
        images: [
          {
            url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
          },
        ],
        creator: "@pitsi",
      },
    }
  } catch (error) {
    console.warn(`Failed to generate docs list metadata for ${type}:`, error)
    return { title: type === "components" ? "Components" : "Animations" }
  }
}

export async function generateDocsItemMetadata({
  itemName,
  type,
}: {
  itemName: string
  type: DocsItemType
}): Promise<Metadata> {
  try {
    const page = source.getPage([type, itemName])

    if (!page) {
      return {
        title: `${type === "components" ? "Component" : "Animation"} Not Found`,
      }
    }

    const { title, description } = page.data

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: absoluteUrl(page.url),
        images: [
          {
            url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [
          {
            url: `/og?title=${encodeURIComponent(title || "")}&description=${encodeURIComponent(description || "")}`,
          },
        ],
      },
    }
  } catch (error) {
    console.warn(`Failed to generate docs item metadata for ${itemName}:`, error)
    return {
      title: `${type === "components" ? "Component" : "Animation"} Not Found`,
    }
  }
}

export function generateDocsItemStaticParams(type: DocsItemType) {
  const folder = source.pageTree.children.find((child) => child.$id === type)

  if (folder?.type !== "folder") {
    return []
  }

  const hideAlpha = process.env.HIDE_ALPHA_ITEMS === "true"
  const paramKey = type === "components" ? "component" : "animation"

  return folder.children
    .filter((child) => child.type === "page")
    .map((child) => {
      const urlParts = child.url.split("/").filter(Boolean)
      const itemName = urlParts[urlParts.length - 1]
      return { [paramKey]: itemName }
    })
    .filter((param) => {
      if (!hideAlpha) return true
      const itemName = param[paramKey]
      const registryItem = Index["new-york-v4"]?.[itemName]
      return registryItem?.readiness !== "alpha"
    })
}
