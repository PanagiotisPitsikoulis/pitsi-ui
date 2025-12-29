"use client"

import {
  BlocksProvider,
  FloatingDecoration,
  PatternDecoration,
} from "@/registry/new-york-v4/ui/blocks-provider"

export default function BlocksProviderDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Base theme (neutral) */}
      <BlocksProvider slug="default" tint="base" className="rounded-lg p-6">
        <div className="bg-background relative overflow-hidden rounded-lg border p-6">
          <PatternDecoration pattern="dots" opacity={20} />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold">Base Theme</h3>
            <p className="text-muted-foreground">
              Neutral colors, no brand tinting
            </p>
          </div>
        </div>
      </BlocksProvider>

      {/* Tinted theme (sage) */}
      <BlocksProvider
        slug="service-plants"
        tint="tinted"
        className="rounded-lg p-6"
      >
        <div className="bg-background relative overflow-hidden rounded-lg border p-6">
          <FloatingDecoration
            shape="circle"
            size="sm"
            position="top-right"
            color="bg-brand/30"
            blur="2xl"
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold">Tinted Theme</h3>
            <p className="text-muted-foreground">
              Sage brand colors with subtle tinting
            </p>
          </div>
        </div>
      </BlocksProvider>

      {/* Deep theme (azure) */}
      <BlocksProvider slug="ai" tint="deep" className="rounded-lg p-6">
        <div className="bg-background relative overflow-hidden rounded-lg border p-6">
          <PatternDecoration pattern="grid" opacity={15} fade="radial" />
          <FloatingDecoration
            shape="blob"
            size="md"
            position="bottom-right"
            color="bg-brand/20"
            blur="3xl"
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold">Deep Theme</h3>
            <p className="text-muted-foreground">
              Azure brand colors with deep background tinting
            </p>
          </div>
        </div>
      </BlocksProvider>
    </div>
  )
}
