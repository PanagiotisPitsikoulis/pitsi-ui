import { Metadata } from "next"

import TypographyComposerClient from "./page.client"

export const metadata: Metadata = {
  title: "Typography Composer",
  description: "Design type scales and font pairings for your projects.",
  openGraph: {
    title: "Typography Composer",
    description: "Design type scales and font pairings for your projects.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Typography Composer")}&description=${encodeURIComponent("Design type scales and font pairings for your projects.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Typography Composer",
    description: "Design type scales and font pairings for your projects.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Typography Composer")}&description=${encodeURIComponent("Design type scales and font pairings for your projects.")}`,
      },
    ],
  },
}

export default async function TypographyComposerPage() {
  return <TypographyComposerClient />
}
