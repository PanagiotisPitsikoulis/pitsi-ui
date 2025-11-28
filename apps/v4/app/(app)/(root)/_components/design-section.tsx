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
    <div className="group relative flex h-[20rem] flex-col overflow-hidden rounded-4xl border border-border bg-background shadow-xl transition-shadow duration-500 group-hover:shadow-2xl md:h-[24rem]">
      <div className="flex flex-1 items-center justify-center p-6">
        {children}
      </div>
      <div className="border-t bg-background/50 px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{label}</p>
      </div>
    </div>
  )
}

function MotionCurves() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor drags bezier control point - positioned over first control point */}
      <Cursor className="absolute left-[65px] top-[75px] z-10 animate-[cursor-drag_5s_ease-in-out_infinite] group-hover:animate-[cursor-drag_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-blue-500" />
        <CursorBody className="bg-blue-500 text-white">
          <CursorName>David</CursorName>
        </CursorBody>
      </Cursor>
      {/* Motion editor panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60 transition-colors duration-300 group-hover:text-brand" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2v12h12V2H2zm10 10H4V4h8v8z" />
            </svg>
            <div className="h-2 w-12 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
          </div>
          <div className="flex gap-1">
            <div className="h-4 w-12 rounded bg-foreground/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand/10">
              <span className="text-[7px] text-foreground/40 transition-colors duration-300 group-hover:text-brand/70">ease-out</span>
            </div>
          </div>
        </div>
        {/* Curve editor - control point synced with cursor drag */}
        <div className="p-3">
          <div className="relative h-28 rounded-lg border border-foreground/10 bg-foreground/[0.03] transition-colors duration-300 group-hover:border-brand/20 group-hover:bg-foreground/[0.05]">
            {/* Grid lines */}
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
              <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeOpacity="0.05" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.05" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeOpacity="0.05" />
              <line x1="25" y1="0" x2="25" y2="100" stroke="currentColor" strokeOpacity="0.05" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeOpacity="0.05" />
              <line x1="75" y1="0" x2="75" y2="100" stroke="currentColor" strokeOpacity="0.05" />
            </svg>
            {/* Bezier curve */}
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
              {/* Control point lines */}
              <line x1="5" y1="95" x2="25" y2="30" className="stroke-brand/30 transition-all duration-300 group-hover:stroke-brand/50" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="95" y1="5" x2="75" y2="15" className="stroke-brand-complementary/30 transition-all duration-300 group-hover:stroke-brand-complementary/50" strokeWidth="1" strokeDasharray="2 2" />
              {/* Main curve */}
              <path
                d="M5 95 C 25 30, 75 15, 95 5"
                fill="none"
                className="stroke-brand/60 transition-all duration-300 group-hover:stroke-brand"
                strokeWidth="2"
              />
              {/* Control points - first one synced with cursor drag */}
              <circle cx="5" cy="95" r="3" className="fill-foreground/30 transition-all duration-300" />
              <circle cx="25" cy="30" r="3" className="fill-brand/50 animate-[control-drag_5s_ease-in-out_infinite] group-hover:animate-[control-drag_2.5s_ease-in-out_infinite] transition-all duration-300 group-hover:fill-brand" />
              <circle cx="75" cy="15" r="3" className="fill-brand-complementary/50 transition-all duration-300 group-hover:fill-brand-complementary" />
              <circle cx="95" cy="5" r="3" className="fill-foreground/30 transition-all duration-300" />
            </svg>
          </div>
          {/* Presets */}
          <div className="mt-2 flex gap-1">
            <div className="flex-1 rounded bg-brand/10 px-2 py-1 text-center text-[8px] text-brand/60 transition-all duration-300 group-hover:bg-brand/20 group-hover:text-brand">ease</div>
            <div className="flex-1 rounded bg-foreground/[0.05] px-2 py-1 text-center text-[8px] text-foreground/40 transition-all duration-300 group-hover:bg-foreground/[0.10]">linear</div>
            <div className="flex-1 rounded bg-foreground/[0.05] px-2 py-1 text-center text-[8px] text-foreground/40 transition-all duration-300 group-hover:bg-foreground/[0.10]">spring</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ColorPalette() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor clicks on brand swatch - positioned over middle brand swatch */}
      <Cursor className="absolute left-[115px] top-[70px] z-10 animate-[cursor-click_4s_ease-in-out_infinite] group-hover:animate-[cursor-click_2s_ease-in-out_infinite]">
        <CursorPointer className="text-orange-500" />
        <CursorBody className="bg-orange-500 text-white">
          <CursorName>Nina</CursorName>
        </CursorBody>
      </Cursor>
      {/* Theme editor panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full bg-gradient-to-br from-brand/40 to-brand-complementary/40 animate-[pulse-subtle_3s_ease-in-out_infinite] transition-all duration-300 group-hover:from-brand/60 group-hover:to-brand-complementary/60 group-hover:animate-[pulse-subtle_1.5s_ease-in-out_infinite]" />
            <div className="h-2 w-14 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
          </div>
          <div className="flex gap-1">
            <div className="size-3 rounded-full border border-foreground/20 bg-background transition-all duration-300 group-hover:border-foreground/40" />
            <div className="size-3 rounded-full bg-foreground transition-all duration-300 group-hover:bg-brand" />
          </div>
        </div>
        {/* Color swatches - middle brand swatch synced with cursor click */}
        <div className="p-3 space-y-2">
          {/* Primary colors */}
          <div className="space-y-1">
            <div className="text-[8px] text-foreground/40 transition-colors duration-300 group-hover:text-foreground/60">Brand</div>
            <div className="flex gap-1">
              <div className="h-6 flex-1 rounded bg-brand/20 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand/40 transition-all duration-300" />
              {/* Middle swatch - synced with cursor click */}
              <div className="h-6 flex-1 rounded bg-brand/60 transition-all duration-300 animate-[swatch-click_4s_ease-in-out_infinite] group-hover:animate-[swatch-click_2s_ease-in-out_infinite]" />
              <div className="h-6 flex-1 rounded bg-brand/80 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand transition-all duration-300" />
            </div>
          </div>
          {/* Complementary */}
          <div className="space-y-1">
            <div className="text-[8px] text-foreground/40 transition-colors duration-300 group-hover:text-foreground/60">Accent</div>
            <div className="flex gap-1">
              <div className="h-6 flex-1 rounded bg-brand-complementary/20 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand-complementary/40 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand-complementary/60 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand-complementary/80 transition-all duration-300" />
              <div className="h-6 flex-1 rounded bg-brand-complementary transition-all duration-300" />
            </div>
          </div>
          {/* Neutral */}
          <div className="space-y-1">
            <div className="text-[8px] text-foreground/40 transition-colors duration-300 group-hover:text-foreground/60">Neutral</div>
            <div className="flex gap-1">
              <div className="h-6 flex-1 rounded border border-foreground/10 bg-background transition-all duration-300 group-hover:border-foreground/20" />
              <div className="h-6 flex-1 rounded bg-foreground/10 transition-all duration-300 group-hover:bg-foreground/15" />
              <div className="h-6 flex-1 rounded bg-foreground/30 transition-all duration-300 group-hover:bg-foreground/40" />
              <div className="h-6 flex-1 rounded bg-foreground/60 transition-all duration-300 group-hover:bg-foreground/70" />
              <div className="h-6 flex-1 rounded bg-foreground transition-all duration-300 group-hover:shadow-lg" />
            </div>
          </div>
        </div>
        {/* CSS variable */}
        <div className="border-t border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2 rounded bg-foreground/[0.03] px-2 py-1 font-mono transition-colors duration-300 group-hover:bg-foreground/[0.05]">
            <span className="text-[8px] text-brand/60 transition-colors duration-300 group-hover:text-brand">--brand:</span>
            <span className="text-[8px] text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70">oklch(0.7 0.15 250)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Decorations() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor navigates between decorations - positioned over sparkle */}
      <Cursor className="absolute left-[55px] top-[70px] z-10 animate-[cursor-navigate_5s_ease-in-out_infinite] group-hover:animate-[cursor-navigate_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-teal-500" />
        <CursorBody className="bg-teal-500 text-white">
          <CursorName>Jake</CursorName>
        </CursorBody>
      </Cursor>
      {/* Decorations panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand-complementary/60 animate-[float_3s_ease-in-out_infinite] transition-colors duration-300 group-hover:text-brand-complementary group-hover:animate-[float_1.5s_ease-in-out_infinite]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
            </svg>
            <div className="h-2 w-16 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
          </div>
          <div className="text-[8px] text-foreground/40 transition-colors duration-300 group-hover:text-foreground/60">12 items</div>
        </div>
        {/* Decoration grid - sparkle synced with cursor navigate */}
        <div className="p-3">
          <div className="grid grid-cols-4 gap-2">
            {/* Sparkle - synced with cursor navigate */}
            <div className="aspect-square rounded-lg border border-brand/20 bg-brand/5 p-2 flex items-center justify-center transition-all duration-300 animate-[decoration-select_5s_ease-in-out_infinite] group-hover:animate-[decoration-select_2.5s_ease-in-out_infinite]">
              <svg className="size-5 text-brand/50 transition-all duration-300 group-hover:text-brand" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l1.5 8.5L22 10l-8.5 1.5L12 20l-1.5-8.5L2 10l8.5-1.5z" />
              </svg>
            </div>
            {/* Dots */}
            <div className="aspect-square rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 flex items-center justify-center transition-all duration-300">
              <div className="grid grid-cols-2 gap-1">
                <div className="size-1.5 rounded-full bg-foreground/30 transition-all duration-300 group-hover:bg-foreground/50" />
                <div className="size-1.5 rounded-full bg-foreground/20 transition-all duration-300 group-hover:bg-foreground/40" />
                <div className="size-1.5 rounded-full bg-foreground/20 transition-all duration-300 group-hover:bg-foreground/40" />
                <div className="size-1.5 rounded-full bg-foreground/30 transition-all duration-300 group-hover:bg-foreground/50" />
              </div>
            </div>
            {/* Gradient blob */}
            <div className="aspect-square rounded-lg border border-brand-complementary/20 bg-brand-complementary/5 p-2 flex items-center justify-center transition-all duration-300">
              <div className="size-5 rounded-full bg-gradient-to-br from-brand-complementary/40 to-brand/20 animate-[pulse-subtle_4s_ease-in-out_infinite] transition-all duration-300 group-hover:from-brand-complementary/60 group-hover:to-brand/40 group-hover:animate-[pulse-subtle_2s_ease-in-out_infinite]" />
            </div>
            {/* Lines */}
            <div className="aspect-square rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 flex items-center justify-center transition-all duration-300">
              <div className="flex flex-col gap-1">
                <div className="h-0.5 w-4 rounded bg-foreground/25 transition-all duration-300 group-hover:bg-foreground/40" />
                <div className="h-0.5 w-3 rounded bg-foreground/20 transition-all duration-300 group-hover:bg-foreground/35" />
                <div className="h-0.5 w-4 rounded bg-foreground/25 transition-all duration-300 group-hover:bg-foreground/40" />
              </div>
            </div>
            {/* Ring */}
            <div className="aspect-square rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 flex items-center justify-center transition-all duration-300">
              <div className="size-5 rounded-full border-2 border-foreground/20 animate-[ring-expand_4s_ease-in-out_infinite] transition-all duration-300 group-hover:border-foreground/40 group-hover:animate-[ring-expand_2s_ease-in-out_infinite]" />
            </div>
            {/* Grid pattern */}
            <div className="aspect-square rounded-lg border border-brand/20 bg-brand/5 p-2 flex items-center justify-center transition-all duration-300">
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="size-1 rounded-sm bg-brand/30 animate-[pulse-subtle_3s_ease-in-out_infinite] transition-all duration-300 group-hover:bg-brand/50 group-hover:animate-[pulse-subtle_1.5s_ease-in-out_infinite]" style={{animationDelay: `${i * 50}ms`}} />
                ))}
              </div>
            </div>
            {/* Arrow */}
            <div className="aspect-square rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 flex items-center justify-center transition-all duration-300">
              <svg className="size-4 text-foreground/30 -rotate-45 transition-all duration-300 group-hover:text-foreground/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            {/* Glow */}
            <div className="aspect-square rounded-lg border border-brand-complementary/20 bg-brand-complementary/5 p-2 flex items-center justify-center relative transition-all duration-300">
              <div className="absolute size-4 rounded-full bg-brand-complementary/20 blur-sm animate-[glow_3s_ease-in-out_infinite] transition-all duration-300 group-hover:bg-brand-complementary/40 group-hover:animate-[glow_1.5s_ease-in-out_infinite]" />
              <div className="size-2 rounded-full bg-brand-complementary/50 transition-all duration-300 group-hover:bg-brand-complementary/80 group-hover:shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileFrame() {
  return (
    <div className="relative w-full max-w-[180px]">
      {/* Cursor scrolls on mobile - positioned over cards area */}
      <Cursor className="absolute left-[75px] top-[115px] z-10 animate-[cursor-scroll_4s_ease-in-out_infinite] group-hover:animate-[cursor-scroll_2s_ease-in-out_infinite]">
        <CursorPointer className="text-purple-500" />
        <CursorBody className="bg-purple-500 text-white">
          <CursorName>Kate</CursorName>
        </CursorBody>
      </Cursor>
      {/* Mobile device frame */}
      <div className="rounded-[1.5rem] border-4 border-foreground/15 bg-foreground/[0.02] shadow-sm transition-all duration-500 group-hover:border-foreground/25 group-hover:shadow-lg">
        {/* Notch */}
        <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/15" />
        {/* Screen content */}
        <div className="p-3 space-y-2 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-1">
            <div className="text-[6px] text-foreground/30 transition-colors duration-300 group-hover:text-foreground/50">9:41</div>
            <div className="flex gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/30" />
              <div className="h-1.5 w-2 rounded-sm bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/30" />
              <div className="h-1.5 w-4 rounded-sm bg-foreground/20 transition-colors duration-300 group-hover:bg-brand/30" />
            </div>
          </div>
          {/* Header */}
          <div className="rounded-lg bg-foreground/[0.03] px-2 py-1.5 transition-colors duration-300 group-hover:bg-foreground/[0.05]">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded bg-brand/20 animate-[pulse-subtle_3s_ease-in-out_infinite] transition-all duration-300 group-hover:bg-brand/30 group-hover:animate-[pulse-subtle_1.5s_ease-in-out_infinite]" />
              <div className="h-1.5 w-12 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
            </div>
          </div>
          {/* Cards - synced with cursor scroll */}
          <div className="space-y-1.5 animate-[mobile-scroll_4s_ease-in-out_infinite] group-hover:animate-[mobile-scroll_2s_ease-in-out_infinite]">
            <div className="rounded-lg bg-gradient-to-r from-brand/15 to-brand-complementary/10 p-2 transition-all duration-300 group-hover:from-brand/25 group-hover:to-brand-complementary/20 group-hover:shadow-md">
              <div className="mb-1 h-1.5 w-16 rounded bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/30" />
              <div className="h-1 w-12 rounded bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/20" />
            </div>
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/[0.05]">
              <div className="mb-1 h-1.5 w-14 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
              <div className="h-1 w-10 rounded bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/20" />
            </div>
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/[0.05]">
              <div className="mb-1 h-1.5 w-12 rounded bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/25" />
              <div className="h-1 w-8 rounded bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/20" />
            </div>
          </div>
          {/* Bottom nav */}
          <div className="flex items-center justify-around rounded-xl bg-foreground/[0.05] px-2 py-2 transition-colors duration-300 group-hover:bg-foreground/[0.08]">
            <div className="size-3 rounded bg-brand/25 animate-[pulse-subtle_3s_ease-in-out_infinite] transition-all duration-300 group-hover:bg-brand/40 group-hover:scale-110 group-hover:animate-[pulse-subtle_1.5s_ease-in-out_infinite]" />
            <div className="size-3 rounded bg-foreground/15 transition-all duration-300 group-hover:bg-foreground/25 group-hover:scale-95" />
            <div className="size-3 rounded bg-foreground/15 transition-all duration-300 group-hover:bg-foreground/25 group-hover:scale-95" />
            <div className="size-3 rounded bg-foreground/15 transition-all duration-300 group-hover:bg-foreground/25 group-hover:scale-95" />
          </div>
        </div>
        {/* Home indicator */}
        <div className="mx-auto mb-2 mt-1 h-1 w-8 rounded-full bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/30" />
      </div>
    </div>
  )
}

export function DesignSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Where Engineering Meets Aesthetics
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Professional Design
        <br />
        <span className="text-muted-foreground">No degree required.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard label="Subtle animations">
          <MotionCurves />
        </FeatureCard>
        <FeatureCard label="Deep theme system">
          <ColorPalette />
        </FeatureCard>
        <FeatureCard label="Decorations API">
          <Decorations />
        </FeatureCard>
        <FeatureCard label="Mobile-first">
          <MobileFrame />
        </FeatureCard>
      </div>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Your app doesn&apos;t look vibe coded. Your app doesn&apos;t look generic.
        Professional results without the design degree.
      </p>
    </div>
  )
}
