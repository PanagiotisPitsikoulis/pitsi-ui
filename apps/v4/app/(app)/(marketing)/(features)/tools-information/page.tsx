import { Metadata } from "next"

import { ToolsInformationPageClient } from "./page.client"

const title = "Tools - Pitsi UI"
const description =
  "Powerful design tools to accelerate your workflow. Theme generators, shadow composers, spacing generators, and more to help you build faster."

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

export default function ToolsInformationPage() {
  return <ToolsInformationPageClient />
}
