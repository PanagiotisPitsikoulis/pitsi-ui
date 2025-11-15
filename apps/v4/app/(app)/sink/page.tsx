import { Metadata } from "next"

import Features7 from "@/components/features-7"
import Features9 from "@/components/features-9"
import Features12 from "@/components/features-12"
import FeaturesEight from "@/components/features-eight"
import FeaturesEleven from "@/components/features-eleven"
import FeaturesFour from "@/components/features-four"
import FeaturesOne from "@/components/features-one"
import FeaturesSeven from "@/components/features-seven"
import FeaturesSix from "@/components/features-six"
import FeaturesTen from "@/components/features-ten"
import FeaturesThree from "@/components/features-three"
import FeaturesTwo from "@/components/features-two"
import HeroSectionFive from "@/components/hero-section-five"
import HeroSectionFour from "@/components/hero-section-four"
import HeroSectionTwo from "@/components/hero-section-two"
import Integrations4 from "@/components/integrations-4"
import Integrations5 from "@/components/integrations-5"
import PricingComparatorOne from "@/components/pricing-comparator-one"
import PricingSectionTwo from "@/components/pricing-section-two"

export const metadata: Metadata = {
  title: "Component Blocks",
  description: "All available component blocks and sections",
}

export default function SinkPage() {
  return (
    <div className="bg-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl space-y-32 px-6 py-16">
        <h1 className="text-4xl font-bold">Component Blocks</h1>

        <section>
          <h2 className="mb-8 text-2xl font-semibold">Hero Sections</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">HeroSectionTwo</h3>
              <HeroSectionTwo />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">HeroSectionFour</h3>
              <HeroSectionFour />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">HeroSectionFive</h3>
              <HeroSectionFive />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-semibold">Features Sections</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesOne</h3>
              <FeaturesOne />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesTwo</h3>
              <FeaturesTwo />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesThree</h3>
              <FeaturesThree />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesFour</h3>
              <FeaturesFour />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesSix</h3>
              <FeaturesSix />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesSeven</h3>
              <FeaturesSeven />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesEight</h3>
              <FeaturesEight />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesEleven</h3>
              <FeaturesEleven />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">FeaturesTen</h3>
              <FeaturesTen />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">Features7</h3>
              <Features7 />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">Features9</h3>
              <Features9 />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">Features12</h3>
              <Features12 />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-semibold">Integrations Sections</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">Integrations4</h3>
              <Integrations4 />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">Integrations5</h3>
              <Integrations5 />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-semibold">Pricing Sections</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">PricingSectionTwo</h3>
              <PricingSectionTwo />
            </div>
            <div>
              <h3 className="text-muted-foreground mb-4 font-mono text-sm">PricingComparatorOne</h3>
              <PricingComparatorOne />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
