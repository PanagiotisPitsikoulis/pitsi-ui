import { Metadata } from "next"

import { AdvancedFeaturesPageClient } from "./page.client"

const title = "Advanced Features - Pitsi UI"
const description =
  "Explore advanced capabilities including animations, hooks, utilities, and powerful customization options to build exceptional user experiences."

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

export default function AdvancedFeaturesPage() {
  return <AdvancedFeaturesPageClient />
}
