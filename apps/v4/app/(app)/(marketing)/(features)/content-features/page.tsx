import { Metadata } from "next"

import { ContentFeaturesPageClient } from "./page.client"

const title = "Blocks - Pitsi UI"
const description =
  "1000+ production-ready UI blocks. Marketing, e-commerce, dashboards, authentication—build entire pages in minutes."

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

export default function ContentFeaturesPage() {
  return <ContentFeaturesPageClient />
}
