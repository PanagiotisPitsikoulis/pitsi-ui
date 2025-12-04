"use client"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  FullStackBlocksIllustration,
  CMSIntegrationIllustration,
  FullyFunctionalIllustration,
  BattleTestedIllustration,
  SmartMCPServerIllustration,
  ThemeSystemIllustration,
  ComposableBlocksIllustration,
} from "../_bento_animations"

const bentoItems = [
  {
    title: "Full-Stack Blocks",
    description: "Complete page sections with frontend code and CMS schemas. Heroes, pricing tables, auth flows—ready for production.",
    illustration: FullStackBlocksIllustration,
    colSpan: "md:col-span-2",
    rowSpan: "",
    height: "h-80 md:h-[28rem]",
  },
  {
    title: "CMS Integration",
    description: "Payload and Sanity schemas included.",
    illustration: CMSIntegrationIllustration,
    colSpan: "md:col-span-1",
    rowSpan: "",
    height: "h-72 md:h-[28rem]",
  },
  {
    title: "Fully Functional",
    description: "Code included in every block. You don't just download the looks—everything works out of the box.",
    illustration: FullyFunctionalIllustration,
    colSpan: "md:col-span-1",
    rowSpan: "",
    height: "h-72 md:h-80",
  },
  {
    title: "Battle Tested",
    description: "Resilient components that are bug-proof. Tested in production, built to last.",
    illustration: BattleTestedIllustration,
    colSpan: "md:col-span-1",
    rowSpan: "",
    height: "h-72 md:h-80",
  },
  {
    title: "Smart MCP Server",
    description: "AI integrations built-in. Everything is AI-friendly and ready for your workflows.",
    illustration: SmartMCPServerIllustration,
    colSpan: "md:col-span-1",
    rowSpan: "",
    height: "h-72 md:h-80",
  },
  {
    title: "Theme System",
    description: "Customizing the primitives changes all the blocks. Bulk customize many blocks at once.",
    illustration: ThemeSystemIllustration,
    colSpan: "md:col-span-2",
    rowSpan: "",
    height: "h-80 md:h-96",
  },
  {
    title: "Composable Blocks",
    description: "Every block is made up of components. Mix and match to make your own or customize existing ones.",
    illustration: ComposableBlocksIllustration,
    colSpan: "md:col-span-1",
    rowSpan: "",
    height: "h-72 md:h-96",
  },
]

export function PowerBentoSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-32 text-center md:py-40">
      <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
        Power Under the Hood
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        Production-Ready.
        <br />
        <span className="text-muted-foreground">Battle-Tested.</span>
      </h2>
      <Spacer size="5xl" sizeMobile="3xl" />

      {/* Bento Grid */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {bentoItems.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-4 ${item.colSpan} ${item.rowSpan}`}
          >
            {/* Illustration Card */}
            <div
              className={`border-border bg-background group relative overflow-hidden rounded-3xl border shadow-sm ${item.height}`}
            >
              <div className="relative h-full w-full p-4">
                <item.illustration />
              </div>
            </div>
            {/* Description Card */}
            <div className="border-border bg-background flex flex-col gap-2 rounded-3xl border p-6 text-left shadow-sm">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Empty decorative spaces */}
        <div className="hidden md:block" />
      </div>
    </div>
  )
}
