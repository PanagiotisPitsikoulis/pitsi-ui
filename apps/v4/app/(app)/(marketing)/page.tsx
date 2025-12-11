import { Suspense } from "react"
import { Metadata } from "next"
import { cacheLife } from "next/cache"

import { getRegistrySummaryCounts } from "@/lib/registry"

import {
  ContentExplained,
  ContentSection,
  CTASection,
  DesignSection,
  DynamicPricingSection,
  HeroSection,
  PowerBentoSection,
  PricingCardsSection,
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
  return (
    <IndexPageInteral
      pricingSection={
        <Suspense fallback={<PricingCardsSection user={null} />}>
          <DynamicPricingSection />
        </Suspense>
      }
    />
  )
}

async function IndexPageInteral({
  pricingSection,
}: {
  pricingSection: React.ReactNode
}) {
  "use cache"
  cacheLife("max")
  const registryCounts = await getRegistrySummaryCounts()

  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <Suspense fallback={null}>
        <PricingToast />
      </Suspense>
      <HeroSection />
      {/*<ContentSection registryCounts={registryCounts} />*/}
      {/*<ContentExplained />*/}
      <PurposeSection />
      <DesignSection />
      <PowerBentoSection />
      {pricingSection}
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
