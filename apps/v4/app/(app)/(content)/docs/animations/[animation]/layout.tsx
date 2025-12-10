import { ReactNode } from "react"

import { generateDocsItemMetadata } from "@/lib/pages/docs"
import { DocsItemLayout } from "@/components/documentation/docs/docs-item-layout"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ animation: string }>
}) {
  const { animation } = await params
  return generateDocsItemMetadata({ itemName: animation, type: "animations" })
}

export default async function AnimationLayout({
  params,
  content,
  paywall,
}: {
  params: Promise<{ animation: string }>
  content: ReactNode
  paywall: ReactNode
}) {
  const { animation } = await params

  return (
    <DocsItemLayout itemName={animation} content={content} paywall={paywall} />
  )
}
