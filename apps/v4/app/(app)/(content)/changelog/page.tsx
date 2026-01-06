import { Metadata } from "next"
import { cacheLife } from "next/cache"

import {
  getAllChanges,
  getChangelogEntries,
  getChangeType,
} from "@/lib/changelog/parser"
import { ChangelogContent } from "@/components/changelog"
import { UploadIcon } from "@/components/icons/hero-icons"
import { ContentPageLayout } from "@/components/layout/content-page-layout"
import { ContentPageSidebar } from "@/components/layout/content-page-sidebar"

const title = "Changelog"
const description =
  "Stay up to date with the latest additions and improvements to pitsi/ui."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default async function ChangelogPage() {
  "use cache"
  cacheLife("max")

  const rawEntries = getChangelogEntries()

  const entries = rawEntries.map((entry) => ({
    version: entry.version,
    changeType: getChangeType(entry),
    changes: getAllChanges(entry).map((change) => ({
      type: change.type,
      commit: change.commit,
      description: change.description,
    })),
  }))

  return (
    <ContentPageLayout
      sidebar={
        <ContentPageSidebar
          label="pitsi/ui"
          title="Changelog"
          description="All notable changes to pitsi/ui components and documentation."
          icon={<UploadIcon className="text-brand w-48" />}
        />
      }
    >
      <ChangelogContent entries={entries} />
    </ContentPageLayout>
  )
}
