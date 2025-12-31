"use client"

import { Code2, Eye, Save, Shuffle } from "@/lib/icons"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

const interactiveFeatures = [
  {
    icon: Save,
    title: "Save & Load",
    description: "Save your work locally and pick up where you left off",
  },
  {
    icon: Code2,
    title: "Export Code",
    description: "Copy CSS, Tailwind config, or design tokens instantly",
  },
  {
    icon: Shuffle,
    title: "Randomize",
    description: "Generate variations with one click for quick exploration",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "See changes in real-time as you adjust parameters",
  },
]

export function InteractiveFeaturesSection() {
  return (
    <section className="container px-6">
      <div className="text-center">
        <p className="text-brand text-sm font-semibold uppercase tracking-wider">
          Features
        </p>
        <Spacer size="sm" />
        <h2 className="display text-3xl tracking-tight md:text-5xl">
          Built for real workflows
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Every tool includes features designers actually need
        </p>
      </div>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {interactiveFeatures.map((feature) => (
          <div
            key={feature.title}
            className="bg-background rounded-3xl border p-6 shadow-sm"
          >
            <div className="bg-brand/10 text-brand mb-4 flex size-10 items-center justify-center rounded-xl">
              <feature.icon className="size-5" />
            </div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
