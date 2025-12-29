import * as React from "react"
import { cacheLife } from "next/cache"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry"
import { TrackBlockView } from "@/components/documentation/blocks/track-block-view"
import { getActiveStyle } from "@/registry/styles"
import {
  getTemplateForBlock,
  getBlockIndex,
} from "@/app/(app)/(content)/(blocks)/template-config"
import blocksData from "@/registry/__blocks__.json"
import { BlockViewerClient } from "../page.client"

export default async function BlockContentPage({
  params,
}: {
  params: Promise<{
    category: string
    blockName: string
  }>
}) {
  "use cache"
  cacheLife("max")

  const { category, blockName } = await params
  const activeStyle = await getActiveStyle()

  // Get registry item for code
  const item = await getRegistryItem(blockName, activeStyle.name)

  // Get file tree and highlighted files
  const [tree, highlightedFiles] = await Promise.all([
    item?.files ? createFileTreeForRegistryItemFiles(item.files) : null,
    item?.files
      ? Promise.all(
          item.files.map(async (file) => ({
            ...file,
            highlightedContent: await highlightCode(file.content ?? ""),
          }))
        )
      : null,
  ])

  // Get template info for this block
  const templateSlug = getTemplateForBlock(blockName)
  const blockIndex = templateSlug ? getBlockIndex(templateSlug, blockName) : 0

  return (
    <>
      <TrackBlockView name={blockName} category={category} />
      <BlockViewerClient
        blockName={blockName}
        category={category}
        styleName={activeStyle.name}
        templateSlug={templateSlug}
        blockIndex={blockIndex}
        item={item}
        tree={tree}
        highlightedFiles={highlightedFiles}
        blocks={blocksData}
      />
    </>
  )
}
