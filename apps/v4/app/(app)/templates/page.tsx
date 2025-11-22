import { Metadata } from "next"

const title = "Templates"
const description =
  "Production-ready templates built with pitsi/ui components. Start your next project with a solid foundation."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function TemplatesPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Templates
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Production-ready templates built with pitsi/ui components. Start your
          next project with a solid foundation.
        </p>
        <div className="mt-16 flex flex-col items-center justify-center gap-4">
          <div className="text-muted-foreground text-6xl">🚧</div>
          <p className="text-muted-foreground text-lg">Coming Soon</p>
          <p className="text-muted-foreground/70 max-w-md text-sm">
            We&apos;re working on bringing you beautiful, production-ready
            templates. Check back soon!
          </p>
        </div>
      </div>
    </div>
  )
}
