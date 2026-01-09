import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Previews",
  description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
  openGraph: {
    title: "Marketing Previews",
    description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Marketing Previews")}&description=${encodeURIComponent("Create stunning marketing screenshots with device mockups and beautiful backgrounds.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Previews",
    description: "Create stunning marketing screenshots with device mockups and beautiful backgrounds.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Marketing Previews")}&description=${encodeURIComponent("Create stunning marketing screenshots with device mockups and beautiful backgrounds.")}`,
      },
    ],
  },
}

export default function MarketingPreviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
