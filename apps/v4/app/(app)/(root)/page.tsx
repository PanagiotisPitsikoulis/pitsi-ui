import { Suspense } from "react"
import { Metadata } from "next"

import { getCurrentUser } from "@/lib/server/user"

import {
  ContentSection,
  CTASection,
  DesignSection,
  DeveloperExperienceSection,
  HeroSection,
  PowerSection,
  PricingCardsSection,
  PricingSection,
  PricingToast,
  PrimitivesSection,
} from "./_components"

const title = "The Foundation for your Design System"
const description =
  "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code."

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

export default async function IndexPage() {
  const user = await getCurrentUser()

  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <PricingToast />
      </Suspense>
      <HeroSection />
      <ContentSection />
      <PrimitivesSection />
      <DesignSection />
      <PowerSection />
      <DeveloperExperienceSection />
      <PricingSection />
      <PricingCardsSection user={user} />
      <CTASection />
    </div>
  )
}
