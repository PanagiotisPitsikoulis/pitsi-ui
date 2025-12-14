import { DesignShowcaseBlock } from "../_blocks"

// Featured blocks for the design showcase grid
const DESIGN_BLOCKS = [
  "marketing-gallery-gallery-section-with-innovation",
  "marketing-hero-section-accommodation-businesses-hero-section",
  "marketing-blogs-news-alternate-blog-post",
  "marketing-hero-section-accommodation-hero-section-with-social-icons",
  "marketing-portfolio-tailwind-css-portfolio-with-product-or-project-s-features",
  "e-commerce-refund-status-refund-status-with-order-summary",
]

const DESIGN_FEATURES = [
  {
    title: "Typography",
    description:
      "Carefully crafted type scales, line heights, and letter spacing that make your content effortlessly readable.",
  },
  {
    title: "Spacing & Rhythm",
    description:
      "Consistent spacing tokens and vertical rhythm throughout. Everything aligns, nothing feels off.",
  },
  {
    title: "Color & Contrast",
    description:
      "Accessible color palettes with perfect contrast ratios. Light and dark modes that actually look good.",
  },
]

export function DesignSection() {
  return (
    <DesignShowcaseBlock
      intro={{
        tagline: "Where Engineering Meets Aesthetics",
        headline: ["Unparalleled", "Design"],
        subtext: [
          "Every detail considered.",
          "From typography to color, spacing to motion.",
        ],
        backgroundImage: "/marketing/man-sky.webp",
        foregroundImage: "/marketing/man-sky-no-bg.webp",
      }}
      problem={{
        tagline: "We Get It",
        headline: (
          <>
            You&apos;re not a designer.
            <br />
            <span className="text-foreground">That&apos;s the point.</span>
          </>
        ),
        scrollTexts: [
          "HOURS WASTED • STILL LOOKS OFF • HOURS WASTED •",
          "SOMETHING'S WRONG • CAN'T TELL WHAT • SOMETHING'S WRONG •",
        ],
      }}
      solution={{
        tagline: "Every Pixel Already Considered",
        text: "Obsessive whitespace. Intentional contrast. Rhythm in every layout. Components with soul — designed by humans who sweat the details, so you don't have to.",
      }}
      finalCta={{
        tagline: "Level Up Your Project's Design",
        headline: (
          <>
            Ship work you&apos;re proud of.
            <br />
            <span className="text-foreground">Finally.</span>
          </>
        ),
        scrollTexts: [
          "PIXEL PERFECT • CLEAN LAYOUTS • PRO QUALITY •",
          "DESIGN SYSTEM • VISUAL POLISH • ZERO COMPROMISES •",
        ],
      }}
      features={DESIGN_FEATURES}
      previewBlocks={DESIGN_BLOCKS}
      showStripeBg
    />
  )
}
