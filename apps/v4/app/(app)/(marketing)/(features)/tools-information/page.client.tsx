"use client"

import { StripeBgGuides } from "@/registry/new-york-v4/ui/bg-guides"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  AdvancedFeaturesSection,
  CTASection,
  HeroSection,
  StackedToolsSection,
  tools,
  ToolShowcaseSection,
  WhatToolsDoSection,
} from "./_blocks"

export function ToolsInformationPageClient() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <Spacer size="6xl" sizeMobile="4xl" />

      {/* Hero */}
      <HeroSection />

      {/* Stacked Tools - Easing & Shadow Composer */}
      <StackedToolsSection />

      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="4xl" sizeMobile="2xl" />

      {/* What Tools Do */}
      <WhatToolsDoSection />

      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="4xl" sizeMobile="2xl" />

      {/* Tool Showcases */}
      {tools.map((tool, index) => (
        <div key={tool.id}>
          <ToolShowcaseSection tool={tool} index={index} />
          {index < tools.length - 1 && (
            <>
              <Spacer size="6xl" sizeMobile="4xl" />
              <Spacer size="4xl" sizeMobile="2xl" />
            </>
          )}
        </div>
      ))}

      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="4xl" sizeMobile="2xl" />

      {/* Advanced Features */}
      <AdvancedFeaturesSection />

      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="6xl" sizeMobile="4xl" />
      <Spacer size="6xl" sizeMobile="4xl" />

      {/* CTA */}
      <CTASection />

      <Spacer size="6xl" sizeMobile="4xl" />
    </div>
  )
}
