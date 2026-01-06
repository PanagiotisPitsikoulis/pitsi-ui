import { Suspense } from "react"
import { Metadata } from "next"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  CTASection,
  DynamicPricingSection,
  PricingCardsSection, // Used as fallback
  ReviewsSection,
  StripeBgGuides,
} from "../(marketing)/_components"

export const metadata: Metadata = {
  title: "Pricing - Pitsi UI",
  description:
    "Flexible pricing plans to suit your needs, from hobby to enterprise.",
}

function PricingHero() {
  return (
    <div className="relative -mt-[56px] overflow-hidden">
      <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />
      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        <Spacer size={"8xl"} sizeMobile={"6xl"} />
        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
          Simple Pricing
          <br />
          For Everyone
        </h1>
        <Spacer size={"2xl"} sizeMobile={"md"} />
        <p className="text-muted-foreground text-center text-lg md:text-3xl">
          Choose a plan that fits your needs.
          <br />
          Scale with your ambition.
        </p>
        <Spacer size={"3xl"} sizeMobile={"lg"} />
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <PricingHero />
      <Suspense fallback={<PricingCardsSection user={null} />}>
        <DynamicPricingSection />
      </Suspense>
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
