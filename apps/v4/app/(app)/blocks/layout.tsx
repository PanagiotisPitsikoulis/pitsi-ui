import { Metadata } from "next"

import { BlocksNav } from "@/components/blocks-nav"
import { PageNav } from "@/components/page-nav"

const title = "Building Blocks for the Web"
const description =
  "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever."

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

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageNav id="blocks">
        <BlocksNav />
      </PageNav>
      <div className="container section-soft flex-1 md:py-12">
        {children}
      </div>
    </>
  )
}
