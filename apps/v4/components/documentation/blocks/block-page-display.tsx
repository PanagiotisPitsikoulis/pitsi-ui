import * as React from "react"
import { registryItemFileSchema } from "pitsi/schema"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry"
import { BlockPageViewer } from "@/components/documentation/blocks/block-page-viewer"
import { type Style } from "@/registry/styles"

export async function BlockPageDisplay({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
}) {
  try {
    const item = await getCachedRegistryItem(name, styleName)

    if (!item?.files) {
      return null
    }

    const [tree, highlightedFiles] = await Promise.all([
      getCachedFileTree(item.files),
      getCachedHighlightedFiles(item.files),
    ])

    return (
      <BlockPageViewer
        item={item}
        tree={tree}
        highlightedFiles={highlightedFiles}
        styleName={styleName}
      />
    )
  } catch (error) {
    console.warn(`BlockPageDisplay error for ${name}:`, error)
    return null
  }
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    try {
      return await getRegistryItem(name, styleName)
    } catch (error) {
      console.warn(`getCachedRegistryItem error for ${name}:`, error)
      return null
    }
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    try {
      if (!files) {
        return null
      }
      return await createFileTreeForRegistryItemFiles(files)
    } catch (error) {
      console.warn("getCachedFileTree error:", error)
      return null
    }
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    try {
      return await Promise.all(
        files.map(async (file) => ({
          ...file,
          highlightedContent: await highlightCode(file.content ?? ""),
        }))
      )
    } catch (error) {
      console.warn("getCachedHighlightedFiles error:", error)
      return []
    }
  }
)
