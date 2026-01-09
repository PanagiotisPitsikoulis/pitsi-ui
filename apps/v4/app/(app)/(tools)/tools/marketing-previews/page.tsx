import { Metadata } from "next"

import MarketingPreviewsPageClient from "./page.client"

const title = "Marketing Previews"
const description = "Create stunning marketing screenshots with device mockups and beautiful backgrounds"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function MarketingPreviewsPage() {
  return <MarketingPreviewsPageClient />
}
