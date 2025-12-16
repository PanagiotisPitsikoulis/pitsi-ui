import { Metadata } from "next"

import ThemeGeneratorPageClient from "./page.client"

const title = "Theme Generator"
const description = "Create custom color themes for your shadcn/ui components"

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

export default function ThemeGeneratorPage() {
  return <ThemeGeneratorPageClient />
}
