import { Metadata } from "next"
import { cacheLife } from "next/cache"

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
import HeroSectionOne from "@/components/hero-section-one"
import HeroSectionTwo from "@/components/hero-section-two"
import Integrations4 from "@/components/integrations-4"
import Integrations5 from "@/components/integrations-5"
import PricingComparatorOne from "@/components/pricing-comparator-one"
import PricingSectionTwo from "@/components/pricing-section-two"

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
  "use cache"

  return (
    <div className="bg-page flex flex-1 flex-col">
      <HeroSectionOne />

      <h1>Content</h1>
      <p className="flex flex-col space-y-2">
        <span>Build portfolio</span>
        <span>Build SAAS/ APP Landing Page</span>
        <span>Build simple marketing websites</span>
        <span>Build your blog</span>
      </p>

      <h2>Use Cases</h2>
      <div className="flex flex-col space-y-2">
        {/*promise*/}
        <p>Build anything</p>
        <p>Quality & Quantity</p>
      </div>

      <h2>Design</h2>
      <div className="flex flex-col space-y-2">
        {/*promise*/}
        <p>The UI Framework that teaches you how to design</p>
        <span>Bring personality into your projects</span>
        <span>
          Doesnt look vibe coded or generic / You dont have to learn anything
          new
        </span>
      </div>

      <h2>Features</h2>
      <p className="flex flex-col space-y-2">{/*promise*/}</p>

      <h2>Developer Experience</h2>
      <div className="flex flex-col space-y-2">
        {/*promise*/}
        <p>Save hours of dev time</p>
        <span>Easy plug and play</span>
      </div>

      <h2>Themes</h2>
      <p className="flex flex-col space-y-2">{/*promise*/}</p>

      <h2>Pricing</h2>
      <div>
        {/*Promise*/}
        <p></p>
      </div>

      <FeaturesThree />
      <Features7 />
      <Features9 />
      <Features12 />
      <Integrations5 />
      <PricingSectionTwo />
    </div>
  )
}
