import { CtaWaveBlock } from "../_blocks"

export function CTASection() {
  return (
    <CtaWaveBlock
      tagline="Start Building"
      headline={
        <>
          Get Ready to Build
          <br />
          <span className="text-foreground">Something Beautiful</span>
        </>
      }
      primaryCta={{ label: "Explore Blocks", href: "/blocks" }}
      secondaryCta={{ label: "Browse Components", href: "/docs/components" }}
      lightModeImage="/marketing/surfing.webp"
      darkModeImage="/marketing/sky-night.webp"
    />
  )
}
