import { Metadata } from "next"

import { DesignPurposePageClient } from "./page.client"

const title = "Design - Pitsi UI"
const description =
  "Unparalleled design quality. Every pixel considered. From typography to color, spacing to motion — components with soul designed by humans who sweat the details."

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

export default function DesignPurposePage() {
  return <DesignPurposePageClient />
}
