import { Metadata } from "next"

import {
  BlocksCategoriesSection,
  BlocksHeroSection,
  BlocksShowcaseSection,
  BlocksWorkflowSection,
  CTASection,
  ReviewsSection,
  StripeBgGuides,
} from "../../_components"

export const metadata: Metadata = {
  title: "Blocks - Pitsi UI",
  description: "1000+ production-ready UI blocks. Marketing, e-commerce, dashboards, authentication—build entire pages in minutes.",
}

export default function BlocksPage() {
  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <BlocksHeroSection />
      <BlocksCategoriesSection />
      <BlocksShowcaseSection />
      <BlocksWorkflowSection />
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
