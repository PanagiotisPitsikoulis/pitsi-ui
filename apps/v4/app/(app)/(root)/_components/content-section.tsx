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

function BlocksGrid() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor clicks on block - positioned over block 4 */}
      <Cursor className="absolute left-[105px] top-[75px] z-20 animate-[cursor-click_4s_ease-in-out_infinite] group-hover:animate-[cursor-click_2s_ease-in-out_infinite]">
        <CursorPointer className="text-indigo-500" />
        <CursorBody className="bg-indigo-500 text-white">
          <CursorName>Alex</CursorName>
        </CursorBody>
      </Cursor>
      {/* Mini browser window */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-foreground/10 px-3 py-2">
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-red-400/60" />
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-yellow-400/60" />
          <div className="size-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-green-400/60" />
          <div className="ml-2 h-2 w-20 rounded bg-foreground/10" />
        </div>
        {/* Content grid - 3x3 = 9 blocks */}
        <div className="p-3">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-lg border transition-all duration-300 ${
                  i === 4
                    ? "border-brand/40 bg-brand/15 animate-[block-open_4s_ease-in-out_infinite] group-hover:animate-[block-open_2s_ease-in-out_infinite]"
                    : i === 7
                      ? "border-brand-complementary/30 bg-brand-complementary/10"
                      : "border-foreground/10 bg-foreground/[0.03]"
                }`}
              >
                <div className="flex h-full flex-col p-1.5">
                  <div className="mb-1 h-1 w-3/4 rounded-full bg-foreground/15" />
                  <div className="flex-1 rounded bg-foreground/10" />
                </div>
                {/* Block opens into preview on click */}
                {i === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-brand/20 opacity-0 animate-[block-open_4s_ease-in-out_infinite] group-hover:animate-[block-open_2s_ease-in-out_infinite]">
                    <div className="text-[6px] font-medium text-brand">Preview</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-3 flex items-center justify-center gap-1">
            <div className="size-1.5 rounded-full bg-brand/50" />
            <div className="size-1.5 rounded-full bg-foreground/20" />
            <div className="size-1.5 rounded-full bg-foreground/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PortfolioLayout() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor drags the top-right block */}
      <Cursor className="absolute right-[50px] top-[55px] z-20 animate-[cursor-drag_5s_ease-in-out_infinite] group-hover:animate-[cursor-drag_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-emerald-500" />
        <CursorBody className="bg-emerald-500 text-white">
          <CursorName>Sarah</CursorName>
        </CursorBody>
      </Cursor>
      {/* Portfolio preview card */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-md bg-brand/15" />
            <div className="h-2 w-12 rounded bg-foreground/15" />
          </div>
          <div className="flex gap-1">
            <div className="h-4 w-8 rounded bg-foreground/10" />
            <div className="h-4 w-8 rounded bg-brand/20" />
          </div>
        </div>
        {/* Bento layout */}
        <div className="p-3">
          <div className="grid grid-cols-3 gap-2">
            {/* Hero block */}
            <div className="col-span-2 row-span-2 rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2">
              <div className="mb-2 h-16 rounded bg-gradient-to-br from-brand/15 to-brand-complementary/10" />
              <div className="space-y-1">
                <div className="h-1.5 w-3/4 rounded bg-foreground/15" />
                <div className="h-1.5 w-1/2 rounded bg-foreground/10" />
              </div>
            </div>
            {/* This block gets dragged - synced with cursor */}
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-1.5 animate-[element-drag_5s_ease-in-out_infinite] group-hover:animate-[element-drag_2.5s_ease-in-out_infinite]">
              <div className="mb-1 h-6 rounded bg-emerald-500/20" />
              <div className="h-1 w-2/3 rounded bg-emerald-500/15" />
            </div>
            <div className="rounded-lg border border-brand-complementary/20 bg-brand-complementary/5 p-1.5">
              <div className="mb-1 h-6 rounded bg-brand-complementary/15" />
              <div className="h-1 w-2/3 rounded bg-brand-complementary/10" />
            </div>
            {/* Bottom row */}
            <div className="col-span-3 flex gap-2">
              <div className="flex-1 rounded-lg border border-foreground/10 bg-foreground/[0.03] p-1.5">
                <div className="h-4 rounded bg-foreground/10" />
              </div>
              <div className="flex-1 rounded-lg border border-foreground/10 bg-foreground/[0.03] p-1.5">
                <div className="h-4 rounded bg-foreground/10" />
              </div>
              <div className="flex-1 rounded-lg border border-brand/20 bg-brand/5 p-1.5">
                <div className="h-4 rounded bg-brand/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentTree() {
  return (
    <div className="relative w-full max-w-[240px]">
      {/* Cursor clicks on tree nodes */}
      <Cursor className="absolute left-[72px] top-[70px] z-20 animate-[cursor-navigate_6s_ease-in-out_infinite] group-hover:animate-[cursor-navigate_3s_ease-in-out_infinite]">
        <CursorPointer className="text-amber-500" />
        <CursorBody className="bg-amber-500 text-white">
          <CursorName>Mike</CursorName>
        </CursorBody>
      </Cursor>
      {/* Component explorer panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Panel header */}
        <div className="flex items-center gap-2 border-b border-foreground/10 px-3 py-2">
          <svg className="size-3 text-foreground/40" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
          </svg>
          <div className="h-2 w-16 rounded bg-foreground/15" />
        </div>
        {/* Tree structure */}
        <div className="p-3 space-y-1">
          {/* Root - this node gets clicked */}
          <div className="flex items-center gap-2 rounded-md bg-amber-500/15 px-2 py-1.5 animate-[block-open_6s_ease-in-out_infinite] group-hover:animate-[block-open_3s_ease-in-out_infinite]">
            <svg className="size-3 text-amber-500/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 6l4 4 4-4H4z" />
            </svg>
            <div className="size-3 rounded bg-amber-500/30" />
            <div className="h-1.5 w-12 rounded bg-amber-500/30" />
          </div>
          {/* Children - expand/collapse synced with cursor */}
          <div className="ml-4 border-l border-foreground/10 pl-3 overflow-hidden animate-[node-expand_6s_ease-in-out_infinite] group-hover:animate-[node-expand_3s_ease-in-out_infinite]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md px-2 py-1">
                <svg className="size-2.5 text-foreground/30" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6 4l4 4-4 4V4z" />
                </svg>
                <div className="size-2.5 rounded bg-foreground/20" />
                <div className="h-1.5 w-10 rounded bg-foreground/15" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-brand-complementary/10 px-2 py-1">
                <svg className="size-2.5 text-brand-complementary/50" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6 4l4 4-4 4V4z" />
                </svg>
                <div className="size-2.5 rounded bg-brand-complementary/30" />
                <div className="h-1.5 w-14 rounded bg-brand-complementary/25" />
              </div>
            </div>
          </div>
          {/* Static sibling node */}
          <div className="ml-4 border-l border-foreground/10 pl-3">
            <div className="flex items-center gap-2 rounded-md px-2 py-1">
              <svg className="size-2.5 text-foreground/30" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 4l4 4-4 4V4z" />
              </svg>
              <div className="size-2.5 rounded bg-foreground/20" />
              <div className="h-1.5 w-12 rounded bg-foreground/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimationWaves() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor drags playhead - positioned on the playhead bar */}
      <Cursor className="absolute left-[72px] top-[125px] z-20 animate-[cursor-drag_4s_ease-in-out_infinite] group-hover:animate-[cursor-drag_2s_ease-in-out_infinite]">
        <CursorPointer className="text-rose-500" />
        <CursorBody className="bg-rose-500 text-white">
          <CursorName>Emma</CursorName>
        </CursorBody>
      </Cursor>
      {/* Animation timeline panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex size-4 items-center justify-center rounded bg-brand/15">
              <svg className="size-2 text-brand/60" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 3l9 5-9 5V3z" />
              </svg>
            </div>
            <div className="h-2 w-14 rounded bg-foreground/15" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-6 rounded bg-foreground/10 text-center text-[6px] leading-3 text-foreground/30">0:00</div>
            <div className="h-3 w-6 rounded bg-foreground/10 text-center text-[6px] leading-3 text-foreground/30">1:00</div>
          </div>
        </div>
        {/* Timeline tracks */}
        <div className="p-3 space-y-2">
          {/* Track 1 - Fade */}
          <div className="flex items-center gap-2">
            <div className="w-12 text-[8px] text-foreground/40">fade-in</div>
            <div className="h-4 flex-1 rounded bg-foreground/[0.03] border border-foreground/10 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-3/5 rounded bg-gradient-to-r from-brand/30 to-brand/10" />
            </div>
          </div>
          {/* Track 2 - Slide */}
          <div className="flex items-center gap-2">
            <div className="w-12 text-[8px] text-foreground/40">slide-up</div>
            <div className="h-4 flex-1 rounded bg-foreground/[0.03] border border-foreground/10 relative overflow-hidden">
              <div className="absolute left-[20%] top-0 h-full w-2/5 rounded bg-gradient-to-r from-brand-complementary/30 to-brand-complementary/10" />
            </div>
          </div>
          {/* Track 3 - Scale */}
          <div className="flex items-center gap-2">
            <div className="w-12 text-[8px] text-foreground/40">scale</div>
            <div className="h-4 flex-1 rounded bg-foreground/[0.03] border border-foreground/10 relative overflow-hidden">
              <div className="absolute left-[10%] top-0 h-full w-4/5 rounded bg-gradient-to-r from-foreground/20 to-foreground/5" />
            </div>
          </div>
          {/* Playhead - moves synced with cursor drag */}
          <div className="relative h-2 rounded bg-foreground/[0.03] border border-foreground/10">
            <div className="absolute -top-1 h-4 w-0.5 rounded bg-rose-500/80 animate-[playhead-drag_4s_ease-in-out_infinite] group-hover:animate-[playhead-drag_2s_ease-in-out_infinite]" />
            <div className="absolute -top-2 size-2 -translate-x-1/2 rotate-45 bg-rose-500/80 animate-[playhead-drag_4s_ease-in-out_infinite] group-hover:animate-[playhead-drag_2s_ease-in-out_infinite]" />
          </div>
        </div>
        {/* Easing curve preview */}
        <div className="border-t border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="text-[8px] text-foreground/40">easing</div>
            <svg className="h-4 flex-1" viewBox="0 0 100 20">
              <path
                d="M0 18 C 30 18, 20 2, 100 2"
                fill="none"
                className="stroke-brand/40 transition-all group-hover:stroke-brand/70"
                strokeWidth="1.5"
                strokeDasharray="100"
                strokeDashoffset="0"
              >
                <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ContentSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Why Choose When You Can Have Both?
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Quality AND quantity
        <br />
        <span className="text-muted-foreground">— finally.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard label="1000+ blocks">
          <BlocksGrid />
        </FeatureCard>
        <FeatureCard label="200+ portfolio blocks">
          <PortfolioLayout />
        </FeatureCard>
        <FeatureCard label="80+ components">
          <ComponentTree />
        </FeatureCard>
        <FeatureCard label="30+ animations">
          <AnimationWaves />
        </FeatureCard>
      </div>
    </div>
  )
}
