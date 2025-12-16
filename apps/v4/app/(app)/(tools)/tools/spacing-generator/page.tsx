import { Metadata } from "next"

import SpacingGeneratorClient from "./page.client"

export const metadata: Metadata = {
  title: "Spacing Generator",
  description: "Create consistent spacing scales for your design system.",
  openGraph: {
    title: "Spacing Generator",
    description: "Create consistent spacing scales for your design system.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Spacing Generator")}&description=${encodeURIComponent("Create consistent spacing scales for your design system.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacing Generator",
    description: "Create consistent spacing scales for your design system.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Spacing Generator")}&description=${encodeURIComponent("Create consistent spacing scales for your design system.")}`,
      },
    ],
  },
}

export default async function SpacingGeneratorPage() {
  return <SpacingGeneratorClient />
}
