"use client"

import { ShowcaseSectionBlock } from "../_blocks/showcase-section-block"

const SHOWCASE_BLOCKS = [
  "marketing-hero-section-accommodation-businesses-hero-section",
  "marketing-pricing-plans-pricing-table-with-featured-plan",
  "marketing-testimonial-testimonial-carousel-with-images",
  "marketing-features-bento-style-feature-grid",
  "marketing-footer-footer-with-sitemap-and-newsletter",
  "e-commerce-product-details-product-details-with-gallery",
]

export function BlocksShowcaseSection() {
  return (
    <ShowcaseSectionBlock
      parallax={{
        tagline: "Quality at Scale",
        headline: (
          <>
            Every block is
            <br />
            <span className="text-foreground">production-ready.</span>
          </>
        ),
        scrollTexts: [
          "HEROES • PRICING • FOOTERS • GALLERIES •",
          "DASHBOARDS • FORMS • CARDS • TABLES •",
        ],
      }}
      textGradient={{
        tagline: "Why Developers Choose Us",
        text: "Pixel-perfect designs. Responsive by default. Dark mode included. Every block tested across browsers. Copy once, customize forever.",
      }}
      grid={{
        title: "See What's Possible",
        description: "A small sample from our extensive collection",
        blocks: SHOWCASE_BLOCKS,
      }}
    />
  )
}
