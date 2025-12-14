"use client"

import { FeatureHeroBlock } from "../_blocks"

const HERO_BLOCKS = [
  "marketing-hero-section-hero-section-with-customer-logos",
  "marketing-pricing-plans-pricing-table-with-toggle",
  "marketing-testimonial-testimonial-with-rating",
  "marketing-features-grid-layout-feature-cards",
  "marketing-faq-simple-faq-section",
  "marketing-footer-simple-footer",
]

const stats = [
  { value: "1000+", label: "Blocks" },
  { value: "15+", label: "Categories" },
  { value: "Weekly", label: "Updates" },
]

const tags = ["Marketing", "E-commerce", "Dashboards", "Authentication", "Portfolio"]

export function BlocksHeroSection() {
  return (
    <FeatureHeroBlock
      eyebrow={{ text: "1000+ Production-Ready Blocks", showDot: true }}
      headline={
        <>
          Complete Page Sections.
          <br />
          <span className="text-brand">Copy. Paste. Ship.</span>
        </>
      }
      subheadline="Marketing, e-commerce, dashboards, auth flows—all with one command. Build entire pages in minutes, not days."
      primaryCta={{ label: "Browse Blocks", href: "/blocks" }}
      secondaryCta={{ label: "Get Pro Access", href: "#pricing", isAnchor: true }}
      stats={stats}
      previewBlocks={HERO_BLOCKS}
      tags={tags}
      backgroundVariant="gradient"
    />
  )
}
