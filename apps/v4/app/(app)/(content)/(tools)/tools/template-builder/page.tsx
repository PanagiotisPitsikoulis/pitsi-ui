import { Metadata } from "next"

import { templatePresets } from "./_components/template-presets"
import TemplateBuilderPageClient from "./page.client"

const title = "Template Builder"
const description =
  "Compose landing pages from pre-built sections. Select, arrange, and export complete pages."

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

export default function TemplateBuilderPage() {
  return <TemplateBuilderPageClient presets={templatePresets} />
}
