import { Metadata } from "next"
import { cacheLife } from "next/cache"

import { getRoadmapEntries } from "@/lib/roadmap/parser"
import { RoadmapIcon } from "@/components/icons/hero-icons"
import { ContentPageLayout } from "@/components/layout/content-page-layout"
import { ContentPageSidebar } from "@/components/layout/content-page-sidebar"
import { RoadmapContent } from "@/components/roadmap"

const title = "Roadmap"
const description =
  "See what we're building next and what's on the horizon for pitsi/ui."

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

export default async function RoadmapPage() {
  "use cache"
  cacheLife("max")

  const entries = getRoadmapEntries()

  return (
    <ContentPageLayout
      sidebar={
        <ContentPageSidebar
          label="What's Next"
          title="Roadmap"
          description="See what we're building next and what's on the horizon for pitsi/ui."
          icon={<RoadmapIcon className="text-brand w-48" />}
        />
      }
    >
      <RoadmapContent items={entries} />
    </ContentPageLayout>
  )
}
