import { Metadata } from "next"

import { defaultBezier, easingPresets } from "./_components/easing-presets"
import EasingComposerClient from "./page.client"

export const metadata: Metadata = {
  title: "Easing Composer",
  description: "Create and preview custom CSS easing curves for animations.",
  openGraph: {
    title: "Easing Composer",
    description: "Create and preview custom CSS easing curves for animations.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Easing Composer")}&description=${encodeURIComponent("Create and preview custom CSS easing curves for animations.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easing Composer",
    description: "Create and preview custom CSS easing curves for animations.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Easing Composer")}&description=${encodeURIComponent("Create and preview custom CSS easing curves for animations.")}`,
      },
    ],
  },
}

export default function EasingComposerPage() {
  return (
    <EasingComposerClient
      presets={easingPresets}
      initialBezier={defaultBezier}
    />
  )
}
