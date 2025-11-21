import { Metadata } from "next"

import Features7 from "@/components/features-7"
import Features9 from "@/components/features-9"
import Features12 from "@/components/features-12"
import FeaturesThree from "@/components/features-three"
import HeroSectionOne from "@/components/hero-section-one"
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
      <span>The feature-complete UI framework</span>
      <h1>Build anything</h1>
      <h3>Build your portfolio</h3>
      <span>200+ portfolio blocks</span>
      <h3>Build the landing page for your SAAS / App</h3>
      <h3>Build simple marketing websites</h3>
      <h3>Build your blog / docs</h3>
      <h3>Build your AI platform</h3>
      <h3>Build your E-Commerce store</h3>
      <HeroSectionOne />

      <span>Content</span>
      <h2>Not quality over quantity, quality & quantity</h2>
      <h3>1000+ blocks </h3>
      <h3>Diverse blocks marketing, ecommerce, portfolio etc.</h3>
      <h3>30+ animations</h3>
      <h3>80+ components + Deep themed components</h3>
      <Features9 />

      <span>Design</span>
      <h2>The UI Framework that teaches you how to design</h2>
      <h3>Bring personality into your projects</h3>
      <h3>Professional Design</h3>
      <h3>Descorations</h3>
      <h3>Subtle animations</h3>
      <h3>Deep-Theme system</h3>
      <h3>Best practices</h3>
      <h3>Decorations api, globally apply your final touches app-wide</h3>
      <h3>
        Deep theme system, may not look like shadcn but has the same api. spend
        0 time learning new tools.
      </h3>
      <Features7 />

      <span>Not just blocks</span>
      <h2>Advanced features / Integrations</h2>
      <h3>Full stack blocks</h3>
      <h3>Code blocks</h3>
      <h3>100% Payload compatibility all blocks</h3>
      <h3>MCP server</h3>
      <h3>Designed to be easy to use by humans and AI Alike</h3>
      <Features12 />

      <span>Dont go ouch for your users to go wow</span>
      <h2>API / Devex</h2>
      <h3>save hours of dev time</h3>
      <h3>
        embracing open source tools, unifying scattered apis and dependencies
        into one cohesive package.
      </h3>
      <h3>
        same shadcn apis you have grown to love, 0 new things to learn, new
        features just work
      </h3>
      <h3>developer friendly docs website</h3>
      <h3>AI friendly docs website. We embrace the vibes</h3>
      <FeaturesThree />

      <span></span>
      <h2>Pricing / Roadmap</h2>
      <h3>Dead simple - consumer friendly pricing model</h3>
      <h3>generous 30/70 free paid split</h3>
      <h3>
        pro plan doesnt buy more quality, buys more quantity. because every
        website deserves to look beautiful
      </h3>
      <h3>free updates for life</h3>

      <div>
        <h2>roadmap page</h2>
        <h3>Block content release schedule</h3>
        <ul>
          <li>30 nov / 2025 base release</li>
          <li>100 blocks week</li>
          <li>...</li>
          <li>30 dec final release 1000+ blocks + Advanced themes support</li>
        </ul>

        <h3>28 febr</h3>
        <h4>react native port</h4>
        <h4>tutorials - design reosurces</h4>

        <h3>30 march</h3>
        <h4>
          ai tool (graph database) to search and recommend blocks based on user
          activity on site and to connect blocks together to design websites
          better
        </h4>

        <h3>30 apr</h3>
        <h4>
          pitsiui pencil - tool to visually edit websites that auto changes the
          code in your files locally with ai integration
        </h4>

        <h3>30 may</h3>
        <h4>bob code</h4>
        <h4>bob studio</h4>
      </div>
      <PricingSectionTwo />
    </div>
  )
}
