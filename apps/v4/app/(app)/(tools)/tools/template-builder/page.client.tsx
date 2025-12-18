"use client"

import type { TemplatePreset } from "./_components/template-types"

interface TemplateBuilderPageClientProps {
  presets: TemplatePreset[]
}

export default function TemplateBuilderPageClient({
  presets,
}: TemplateBuilderPageClientProps) {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Template Builder</h1>
        <p className="text-muted-foreground mt-4">
          This feature is coming soon. You&apos;ll be able to compose landing
          pages from pre-built sections.
        </p>
        <div className="mt-8 grid gap-4">
          {presets.map((preset) => (
            <div
              key={preset.id}
              className="rounded-lg border p-4 text-left opacity-50"
            >
              <h3 className="font-semibold">{preset.label}</h3>
              <p className="text-muted-foreground text-sm">
                {preset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
