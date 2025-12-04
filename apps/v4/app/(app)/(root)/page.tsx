import { Suspense } from "react"
import { Metadata } from "next"

import { getCurrentUser } from "@/lib/server/user"
import { CardsParallax } from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import CardsParallaxDemo from "@/registry/new-york-v4/examples/cards-parallax-demo"

import {
  BackgroundParallaxSection,
  CardsParallaxSection,
  ContentExplained,
  ContentSection,
  CTASection,
  DesignSection,
  HeroSection,
  PerspectiveSectionDemo,
  PowerBentoSection,
  PricingCardsSection,
  PricingExplained,
  PricingToast,
  PurposeSection,
  ReviewsSection,
  StripeBgGuides,
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
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <Suspense fallback={null}>
        <PricingToast />
      </Suspense>
      <HeroSection />
      <ContentSection />
      <ContentExplained />
      <PurposeSection />
      <DesignSection />
      <PowerBentoSection />
      <PricingCardsSection user={user} />
      <PricingExplained />
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
