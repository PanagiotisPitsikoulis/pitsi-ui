import { Metadata } from "next"

import AppearancePageClient from "./page.client"

const title = "Appearance"
const description = "Customize the look and feel of your dashboard"

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

export default function AppearancePage() {
  return <AppearancePageClient />
}
