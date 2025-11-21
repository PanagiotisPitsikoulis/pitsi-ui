import * as React from "react"
import { registryItemFileSchema } from "pitsi/schema"
import { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry"
import { BlockViewer } from "@/components/documentation/blocks/block-viewer"
import { type Style } from "@/registry/styles"

export async function BlockDisplay({
  name,
  styleName,
}: {
  name: string
  styleName: Style["name"]
}) {
  const item = await getCachedRegistryItem(name, styleName)

  if (!item?.files) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <div className="group relative flex scroll-mt-20 flex-col gap-4">
      <div className="overflow-hidden rounded-2xl border shadow-xs">
        <BlockViewer
          item={item}
          tree={tree}
          highlightedFiles={highlightedFiles}
          styleName={styleName}
        />
      </div>
    </div>
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    return await getRegistryItem(name, styleName)
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null
    }

    return await createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    )
  }
)
