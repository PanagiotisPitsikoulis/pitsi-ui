"use client"

import { QualitySectionBlock } from "../_blocks/quality-section-block"

const qualityFeatures = [
  {
    title: "WCAG 2.1 AA",
    description: "All components meet accessibility standards for color contrast, focus states, and keyboard navigation.",
  },
  {
    title: "Radix Primitives",
    description: "Built on battle-tested headless components that handle complex accessibility patterns.",
  },
  {
    title: "Type Safe",
    description: "Full TypeScript support with strict types, autocomplete, and documentation in your IDE.",
  },
  {
    title: "Tree Shakeable",
    description: "Import only what you use. No bloated bundles, no unnecessary code.",
  },
]

export function ComponentsQualitySection() {
  return (
    <QualitySectionBlock
      parallax={{
        tagline: "Quality Standards",
        headline: (
          <>
            Built on the
            <br />
            <span className="text-foreground">best foundations.</span>
          </>
        ),
        scrollTexts: [
          "ACCESSIBLE • COMPOSABLE • THEMEABLE •",
          "TYPESCRIPT • RADIX • TAILWIND •",
        ],
      }}
      manifesto={{
        tagline: "Our Commitment",
        text: "Every component is keyboard navigable. Screen reader friendly. Follows WAI-ARIA guidelines. Tested across browsers. Works in light and dark mode. Ships with TypeScript definitions.",
      }}
      features={qualityFeatures}
    />
  )
}
