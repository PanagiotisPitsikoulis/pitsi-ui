import { Metadata } from "next"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

import { TemplatesClient } from "./page.client"

const title = "Templates - Pitsi UI"
const description =
  "Beautiful, production-ready website templates. Hero sections, landing pages, and more—customize and launch in minutes."

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

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <TemplatesClient />
      <SiteFooter />
    </>
  )
}
