import { Metadata } from "next"

import { decorationPresets } from "./_components/decoration-presets"
import { defaultDecorationState } from "./_components/decoration-types"
import BackgroundDecorationsPageClient from "./page.client"

const title = "Background Decorations"
const description =
  "Add visual effects to your sections with gradients, patterns, and animated backgrounds"

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

export default function BackgroundDecorationsPage() {
  return (
    <BackgroundDecorationsPageClient
      presets={decorationPresets}
      defaultState={defaultDecorationState}
    />
  )
}
