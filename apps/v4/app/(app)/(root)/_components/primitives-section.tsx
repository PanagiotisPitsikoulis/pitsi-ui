import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { Cursor, CursorBody, CursorName, CursorPointer } from "./cursor"

function FeatureCard({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <div className="group relative flex h-[20rem] flex-col overflow-hidden rounded-4xl border border-border bg-background shadow-xl md:h-[24rem]">
      <div className="flex flex-1 items-center justify-center p-6">
        {children}
      </div>
      <div className="border-t bg-background/50 px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{label}</p>
      </div>
    </div>
  )
}

function AtomicStructure() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor clicks on variant prop - positioned over first indicator */}
      <Cursor className="absolute left-[65px] bottom-[30px] z-10 animate-[cursor-click_5s_ease-in-out_infinite] group-hover:animate-[cursor-click_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-violet-500" />
        <CursorBody className="bg-violet-500 text-white">
          <CursorName>Lisa</CursorName>
        </CursorBody>
      </Cursor>
      {/* Component anatomy panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-brand/20 animate-pulse group-hover:animate-none group-hover:bg-brand/40" />
            <div className="h-2 w-16 rounded bg-foreground/15" />
          </div>
          <div className="flex items-center gap-1">
            <div className="size-4 rounded bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
            <div className="size-4 rounded bg-foreground/10 transition-colors group-hover:bg-brand/20" />
          </div>
        </div>
        {/* Anatomy diagram */}
        <div className="p-4">
          {/* Main component */}
          <div className="relative mx-auto w-48 rounded-lg border-2 border-dashed border-brand/30 bg-brand/5 p-3 transition-all duration-300 group-hover:border-brand/50 group-hover:bg-brand/10 group-hover:scale-105">
            <div className="absolute -top-2 left-2 rounded bg-brand/20 px-1.5 py-0.5 text-[7px] font-medium text-brand/70 transition-colors group-hover:bg-brand/40 group-hover:text-brand">Button</div>
            {/* Inner elements */}
            <div className="flex items-center gap-2">
              <div className="relative size-5 rounded bg-brand-complementary/15 border border-dashed border-brand-complementary/30 animate-[float_4s_ease-in-out_infinite] group-hover:animate-none group-hover:bg-brand-complementary/30 group-hover:border-brand-complementary/50 transition-all">
                <div className="absolute -top-2 -left-1 text-[6px] text-brand-complementary/60 transition-colors group-hover:text-brand-complementary">icon</div>
              </div>
              <div className="relative h-3 flex-1 rounded bg-foreground/10 border border-dashed border-foreground/20 animate-[float_4s_ease-in-out_infinite_0.5s] group-hover:animate-none group-hover:bg-foreground/20 transition-all">
                <div className="absolute -top-2 left-0 text-[6px] text-foreground/50 transition-colors group-hover:text-foreground/70">label</div>
              </div>
            </div>
          </div>
          {/* Prop indicators - first one synced with cursor click */}
          <div className="mt-4 flex justify-center gap-3">
            <div className="flex items-center gap-1 animate-[prop-highlight_5s_ease-in-out_infinite] group-hover:animate-[prop-highlight_2.5s_ease-in-out_infinite]">
              <div className="size-2 rounded-full bg-brand/40" />
              <span className="text-[8px] text-foreground/50">variant</span>
            </div>
            <div className="flex items-center gap-1 transition-transform delay-75 group-hover:scale-110">
              <div className="size-2 rounded-full bg-brand-complementary/40 animate-[pulse-subtle_2s_ease-in-out_infinite_0.3s] group-hover:animate-none group-hover:bg-brand-complementary/70" />
              <span className="text-[8px] text-foreground/50 transition-colors group-hover:text-brand-complementary/70">size</span>
            </div>
            <div className="flex items-center gap-1 transition-transform delay-150 group-hover:scale-110">
              <div className="size-2 rounded-full bg-foreground/30 animate-[pulse-subtle_2s_ease-in-out_infinite_0.6s] group-hover:animate-none group-hover:bg-foreground/50" />
              <span className="text-[8px] text-foreground/50 transition-colors group-hover:text-foreground/70">disabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PulseAnimation() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor navigates animation presets - positioned over Scale card */}
      <Cursor className="absolute left-[100px] top-[70px] z-10 animate-[cursor-navigate_6s_ease-in-out_infinite] group-hover:animate-[cursor-navigate_3s_ease-in-out_infinite]">
        <CursorPointer className="text-cyan-500" />
        <CursorBody className="bg-cyan-500 text-white">
          <CursorName>Tom</CursorName>
        </CursorBody>
      </Cursor>
      {/* Animation preview panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60 animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12z" />
            </svg>
            <div className="h-2 w-14 rounded bg-foreground/15" />
          </div>
          <div className="flex gap-1">
            <div className="size-3 rounded bg-brand/20 transition-colors group-hover:bg-brand/40" />
            <div className="size-3 rounded bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
          </div>
        </div>
        {/* Animation grid - Scale card synced with cursor navigate */}
        <div className="p-3">
          <div className="grid grid-cols-3 gap-2">
            {/* Fade */}
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all">
              <div className="mx-auto mb-1 size-6 rounded bg-gradient-to-b from-brand/30 to-brand/5 animate-[pulse-subtle_3s_ease-in-out_infinite] group-hover:animate-[pulse-subtle_0.5s_ease-in-out_infinite]" />
              <div className="text-[7px] text-foreground/50">fade</div>
            </div>
            {/* Scale - synced with cursor navigate */}
            <div className="rounded-lg border border-brand/20 bg-brand/5 p-2 text-center transition-all animate-[preset-select_6s_ease-in-out_infinite] group-hover:animate-[preset-select_3s_ease-in-out_infinite]">
              <div className="mx-auto mb-1 flex size-6 items-center justify-center">
                <div className="size-3 rounded bg-brand/40 animate-[pulse_2s_ease-in-out_infinite] group-hover:animate-[pulse_0.4s_ease-in-out_infinite]" />
              </div>
              <div className="text-[7px] text-brand/60">scale</div>
            </div>
            {/* Slide */}
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all">
              <div className="mx-auto mb-1 size-6 overflow-hidden rounded">
                <div className="h-full w-3 bg-foreground/20 animate-[slide_3s_ease-in-out_infinite] group-hover:animate-[slide_0.5s_ease-in-out_infinite]" />
              </div>
              <div className="text-[7px] text-foreground/50">slide</div>
            </div>
            {/* Rotate */}
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all">
              <div className="mx-auto mb-1 size-6 rounded flex items-center justify-center">
                <div className="size-4 rounded-sm bg-foreground/15 animate-[orbit_8s_linear_infinite] group-hover:animate-[orbit_1s_linear_infinite]" />
              </div>
              <div className="text-[7px] text-foreground/50">rotate</div>
            </div>
            {/* Bounce */}
            <div className="rounded-lg border border-brand-complementary/20 bg-brand-complementary/5 p-2 text-center transition-all">
              <div className="mx-auto mb-1 flex size-6 flex-col items-center justify-end">
                <div className="size-2.5 rounded-full bg-brand-complementary/40 animate-bounce group-hover:animate-[bounce_0.3s_ease-in-out_infinite]" style={{ animationDuration: '2s' }} />
                <div className="mt-0.5 h-0.5 w-3 rounded bg-brand-complementary/20" />
              </div>
              <div className="text-[7px] text-brand-complementary/60">bounce</div>
            </div>
            {/* Pulse */}
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all">
              <div className="mx-auto mb-1 flex size-6 items-center justify-center relative">
                <div className="absolute size-4 rounded-full bg-foreground/10 animate-[ring-expand_3s_ease-out_infinite] group-hover:animate-[ring-expand_0.6s_ease-out_infinite]" />
                <div className="size-2 rounded-full bg-foreground/25 animate-pulse" />
              </div>
              <div className="text-[7px] text-foreground/50">pulse</div>
            </div>
          </div>
        </div>
        {/* Preview bar */}
        <div className="border-t border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="text-[8px] text-foreground/40">duration</div>
            <div className="h-1.5 flex-1 rounded-full bg-foreground/10 overflow-hidden">
              <div className="h-full w-1/3 rounded-full bg-brand/30 animate-[expand_4s_ease-in-out_infinite] group-hover:animate-[expand_0.5s_ease-in-out_infinite] origin-left" />
            </div>
            <div className="text-[8px] text-foreground/40 transition-colors group-hover:text-brand/60">300ms</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AssembledLayout() {
  return (
    <div className="relative w-full max-w-[280px]">
      {/* Cursor hovers over Hero section */}
      <Cursor className="absolute right-[60px] top-[80px] z-10 animate-[cursor-hover_3s_ease-in-out_infinite] group-hover:animate-[cursor-hover_1.5s_ease-in-out_infinite]">
        <CursorPointer className="text-pink-500" />
        <CursorBody className="bg-pink-500 text-white">
          <CursorName>Zoe</CursorName>
        </CursorBody>
      </Cursor>
      {/* Full page preview */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-foreground/10 px-3 py-2">
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-red-400/60" />
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-yellow-400/60" />
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-green-400/60" />
          <div className="mx-2 h-4 flex-1 rounded bg-foreground/[0.05] px-2 flex items-center">
            <div className="h-1.5 w-16 rounded bg-foreground/15 transition-all group-hover:w-24" />
          </div>
        </div>
        {/* Page content */}
        <div className="p-2">
          {/* Nav */}
          <div className="mb-2 flex items-center justify-between rounded-lg bg-foreground/[0.03] px-2 py-1.5 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded bg-brand/25 animate-pulse group-hover:animate-none group-hover:bg-brand/40" />
              <div className="h-1.5 w-8 rounded bg-foreground/15" />
            </div>
            <div className="flex gap-2">
              <div className="h-1.5 w-6 rounded bg-foreground/10" />
              <div className="h-1.5 w-6 rounded bg-foreground/10" />
              <div className="h-1.5 w-6 rounded bg-foreground/10" />
            </div>
            <div className="h-3 w-8 rounded bg-brand/20" />
          </div>
          {/* Hero - synced with cursor hover, subtly pulses */}
          <div className="mb-2 rounded-lg bg-gradient-to-br from-brand/10 to-brand-complementary/5 p-3 text-center transition-all duration-300 animate-[section-highlight_3s_ease-in-out_infinite] group-hover:animate-[section-highlight_1.5s_ease-in-out_infinite] group-hover:scale-[1.02]">
            <div className="mx-auto mb-1.5 h-2 w-24 rounded bg-foreground/20 transition-all group-hover:w-28" />
            <div className="mx-auto mb-2 h-1.5 w-32 rounded bg-foreground/10 transition-all group-hover:w-36" />
            <div className="mx-auto flex justify-center gap-1">
              <div className="h-3 w-10 rounded bg-brand/25 transition-all group-hover:bg-brand/40 group-hover:w-12" />
              <div className="h-3 w-10 rounded bg-foreground/15 transition-all group-hover:bg-foreground/25" />
            </div>
          </div>
          {/* Features grid */}
          <div className="mb-2 grid grid-cols-3 gap-1">
            <div className="rounded bg-foreground/[0.03] p-1.5 transition-all duration-300">
              <div className="mb-1 size-3 rounded bg-brand/15 group-hover:bg-brand/30" />
              <div className="h-1 w-full rounded bg-foreground/10" />
            </div>
            <div className="rounded bg-foreground/[0.03] p-1.5 transition-all duration-300">
              <div className="mb-1 size-3 rounded bg-brand-complementary/15 group-hover:bg-brand-complementary/30" />
              <div className="h-1 w-full rounded bg-foreground/10" />
            </div>
            <div className="rounded bg-foreground/[0.03] p-1.5 transition-all duration-300">
              <div className="mb-1 size-3 rounded bg-foreground/15 group-hover:bg-foreground/25" />
              <div className="h-1 w-full rounded bg-foreground/10" />
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between rounded-lg bg-foreground/[0.03] px-2 py-1 transition-all duration-300">
            <div className="h-1 w-12 rounded bg-foreground/10 transition-all group-hover:w-16" />
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-foreground/15 transition-colors group-hover:bg-brand/30" />
              <div className="size-2 rounded-full bg-foreground/15 transition-colors delay-75 group-hover:bg-brand/30" />
              <div className="size-2 rounded-full bg-foreground/15 transition-colors delay-150 group-hover:bg-brand/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PrimitivesSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Blocks All the Way Down
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Use ours. Build yours.
        <br />
        <span className="text-muted-foreground">Mix both.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-3">
        <FeatureCard label="80+ components — the atoms">
          <AtomicStructure />
        </FeatureCard>
        <FeatureCard label="30+ animations — the life">
          <PulseAnimation />
        </FeatureCard>
        <FeatureCard label="1000+ blocks — the outcome">
          <AssembledLayout />
        </FeatureCard>
      </div>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Every block is just components. Every component is yours to remix.
        Compose, extend, or start from scratch — the system scales with you.
      </p>
    </div>
  )
}
