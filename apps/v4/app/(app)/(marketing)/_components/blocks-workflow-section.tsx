import { Check, Copy, Search, Wand2 } from "lucide-react"

import { WorkflowStepsBlock } from "../_blocks/workflow-steps-block"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse",
    description: "Find the perfect block for your needs. Filter by category, search by name, or explore our curated collections.",
    visual: (
      <div className="bg-card relative overflow-hidden rounded-xl border p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-muted flex-1 rounded-lg px-3 py-2 text-sm text-muted-foreground">
            Search blocks...
          </div>
          <div className="bg-brand rounded-lg p-2">
            <Search className="size-4 text-white" />
          </div>
        </div>
        <div className="space-y-2">
          {["Hero Section", "Pricing Table", "Testimonials"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg border p-3 text-sm ${i === 0 ? "border-brand bg-brand/5" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item}</span>
                {i === 0 && <Check className="text-brand size-4" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Copy,
    title: "Copy",
    description: "One command adds the block to your project. All dependencies included, no configuration needed.",
    visual: (
      <div className="bg-zinc-900 dark:bg-zinc-950 relative overflow-hidden rounded-xl border border-zinc-800 p-4 font-mono text-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>
        <div className="text-zinc-400">
          <span className="text-green-400">$</span>{" "}
          <span className="text-white">npx pitsi add</span>{" "}
          <span className="text-cyan-400">marketing-hero-section</span>
        </div>
        <div className="mt-3 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Installing dependencies...</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Creating component files...</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <span>✓</span>
            <span>Done! Block added to your project.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: Wand2,
    title: "Customize",
    description: "Make it yours with props, variants, and Tailwind classes. Full control over every detail.",
    visual: (
      <div className="bg-card relative overflow-hidden rounded-xl border">
        <div className="border-b bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
          hero-section.tsx
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="text-zinc-500">&lt;HeroSection</div>
          <div className="pl-4">
            <span className="text-purple-500">title</span>=
            <span className="text-green-500">&quot;Your Title&quot;</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-500">subtitle</span>=
            <span className="text-green-500">&quot;Your subtitle here&quot;</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-500">variant</span>=
            <span className="text-green-500">&quot;centered&quot;</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-500">className</span>=
            <span className="text-green-500">&quot;bg-brand&quot;</span>
          </div>
          <div className="text-zinc-500">/&gt;</div>
        </div>
      </div>
    ),
  },
]

export function BlocksWorkflowSection() {
  return (
    <WorkflowStepsBlock
      tagline="Simple Workflow"
      headline={
        <>
          From Discovery to
          <br />
          <span className="text-foreground">Production in Minutes</span>
        </>
      }
      description="No complex setup. No configuration headaches. Just find, copy, and customize."
      steps={steps}
    />
  )
}
