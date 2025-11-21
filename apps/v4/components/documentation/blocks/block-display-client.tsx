"use client"

import * as React from "react"

import BlockPreview from "@/components/documentation/block-preview"

interface BlockDisplayProps {
  name: string
  styleName: string
}

export function BlockDisplay({ name, styleName }: BlockDisplayProps) {
  const previewLink = `/view/${styleName}/${name}`

  return (
    <BlockPreview
      previewLink={previewLink}
      title={name}
      id={name}
      category={styleName}
      height={930}
    />
  )
}
