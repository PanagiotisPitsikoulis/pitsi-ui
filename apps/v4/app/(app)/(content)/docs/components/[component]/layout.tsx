import { ReactNode } from "react"

import { generateDocsItemMetadata } from "@/lib/pages/docs"
import { DocsItemLayout } from "@/components/documentation/docs/docs-item-layout"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ component: string }>
}) {
  const { component } = await params
  return generateDocsItemMetadata({ itemName: component, type: "components" })
}

export default async function ComponentLayout({
  params,
  content,
  paywall,
}: {
  params: Promise<{ component: string }>
  content: ReactNode
  paywall: ReactNode
}) {
  const { component } = await params

  return (
    <DocsItemLayout itemName={component} content={content} paywall={paywall} />
  )
}
