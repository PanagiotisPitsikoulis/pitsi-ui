import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shadow Composer",
  description: "Design beautiful box shadows for your components.",
  openGraph: {
    title: "Shadow Composer",
    description: "Design beautiful box shadows for your components.",
    type: "article",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Shadow Composer")}&description=${encodeURIComponent("Design beautiful box shadows for your components.")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow Composer",
    description: "Design beautiful box shadows for your components.",
    images: [
      {
        url: `/og?title=${encodeURIComponent("Shadow Composer")}&description=${encodeURIComponent("Design beautiful box shadows for your components.")}`,
      },
    ],
  },
}

export default function ShadowComposerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
