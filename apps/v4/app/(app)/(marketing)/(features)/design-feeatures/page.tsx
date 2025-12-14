import { Metadata } from "next"

import {
  CTASection,
  DesignSection,
  ReviewsSection,
  StripeBgGuides,
} from "../../_components"

export const metadata: Metadata = {
  title: "Design - Pitsi UI",
  description:
    "Unparalleled design quality. Every pixel considered. From typography to color, spacing to motion — components with soul designed by humans who sweat the details.",
}

export default function DesignPage() {
  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <DesignSection />
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
