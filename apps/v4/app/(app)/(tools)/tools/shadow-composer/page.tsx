import { Metadata } from "next"

import ShadowComposerPageClient from "./page.client"

const title = "Shadow Composer"
const description = "Design beautiful box shadows for your UI components"

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

export default function ShadowComposerPage() {
  return <ShadowComposerPageClient />
}
