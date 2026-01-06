import { Code2, Moon, Palette, Terminal } from "@/lib/icons"

import { IntegrationBentoBlock } from "../_blocks/integration-bento-block"

const integrations = [
  {
    icon: Code2,
    title: "Radix Primitives",
    description:
      "Built on battle-tested headless components that handle complex accessibility patterns for you.",
    size: "large" as const,
    visual: (
      <div className="mt-4 flex flex-wrap gap-2">
        {["Dialog", "Popover", "Tabs", "Select", "Menu", "Toast"].map(
          (name) => (
            <div
              key={name}
              className="bg-muted rounded-lg px-3 py-1.5 text-xs font-medium"
            >
              {name}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    icon: Terminal,
    title: "CLI Integration",
    description:
      "Add components with a single command. Dependencies resolved automatically.",
    size: "small" as const,
    visual: (
      <div className="mt-4 rounded-lg bg-zinc-900 p-3 font-mono text-xs dark:bg-zinc-950">
        <span className="text-green-400">$</span>{" "}
        <span className="text-white">npx pitsi add button</span>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Theme System",
    description:
      "CSS variables for complete control. Customize colors, spacing, and more.",
    size: "small" as const,
    visual: (
      <div className="mt-4 flex gap-2">
        {[
          "bg-brand",
          "bg-blue-500",
          "bg-green-500",
          "bg-purple-500",
          "bg-orange-500",
        ].map((color, i) => (
          <div key={i} className={`${color} size-8 rounded-lg shadow-sm`} />
        ))}
      </div>
    ),
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "Every component looks great in both light and dark themes out of the box.",
    size: "large" as const,
    visual: (
      <div className="mt-4 flex gap-3">
        <div className="bg-background flex-1 rounded-lg border p-3">
          <div className="bg-foreground/80 h-3 w-16 rounded" />
          <div className="bg-muted mt-2 h-2 w-full rounded" />
        </div>
        <div className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 p-3">
          <div className="h-3 w-16 rounded bg-white/80" />
          <div className="mt-2 h-2 w-full rounded bg-zinc-700" />
        </div>
      </div>
    ),
  },
]

const techStack = [
  { name: "Next.js" },
  { name: "React" },
  { name: "Tailwind" },
  { name: "TypeScript" },
]

export function ComponentsIntegrationSection() {
  return (
    <IntegrationBentoBlock
      tagline="Seamless Integration"
      headline={
        <>
          Works With Your
          <br />
          <span className="text-foreground">Existing Stack</span>
        </>
      }
      description="Built for modern React apps with Tailwind CSS. No lock-in, no proprietary formats."
      integrations={integrations}
      techStack={techStack}
    />
  )
}
