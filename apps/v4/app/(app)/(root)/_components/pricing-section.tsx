import { Spacer } from "@/registry/new-york-v4/ui/spacer"

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

function PieChart() {
  return (
    <div className="w-full max-w-[260px]">
      {/* Analytics panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12z" />
            </svg>
            <div className="h-2 w-14 rounded bg-foreground/15" />
          </div>
          <div className="text-[8px] text-foreground/40">distribution</div>
        </div>
        {/* Chart */}
        <div className="p-4">
          <div className="relative mx-auto size-28">
            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
                strokeOpacity="0.05"
              />
              {/* Free portion (30%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                className="stroke-brand animate-[pulse-subtle_4s_ease-in-out_infinite] transition-all duration-500 group-hover:stroke-opacity-60 group-hover:scale-105"
                strokeWidth="20"
                strokeOpacity="0.4"
                strokeDasharray="75.4 251.3"
              />
              {/* Pro portion (70%) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                className="stroke-foreground animate-[pulse-subtle_4s_ease-in-out_infinite_0.5s] transition-all duration-500 group-hover:stroke-opacity-25 group-hover:scale-105"
                strokeWidth="20"
                strokeOpacity="0.15"
                strokeDasharray="175.9 251.3"
                strokeDashoffset="-75.4"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <span className="text-xl font-bold text-brand/70">30%</span>
              <span className="text-[8px] text-foreground/40">free</span>
            </div>
          </div>
          {/* Legend */}
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="size-2.5 rounded-full bg-brand/40 animate-[pulse-subtle_4s_ease-in-out_infinite]" />
              <span className="text-[9px] text-foreground/50">Free (30%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2.5 rounded-full bg-foreground/15 animate-[pulse-subtle_4s_ease-in-out_infinite_0.5s]" />
              <span className="text-[9px] text-foreground/50">Pro (70%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UnlockedIcon() {
  return (
    <div className="w-full max-w-[260px]">
      {/* Access panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand-complementary/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a4 4 0 00-4 4v3H3a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1V9a1 1 0 00-1-1h-1V5a4 4 0 00-4-4z" />
            </svg>
            <div className="h-2 w-10 rounded bg-foreground/15" />
          </div>
          <div className="text-[8px] text-green-500/70">unlocked</div>
        </div>
        {/* Content */}
        <div className="p-4">
          {/* Lock visualization */}
          <div className="relative mx-auto mb-4 w-24">
            {/* Lock body */}
            <div className="relative mx-auto h-16 w-14 rounded-xl border-2 border-foreground/15 bg-foreground/[0.05] animate-[glow_3s_ease-in-out_infinite] transition-all duration-500 group-hover:border-brand-complementary/30 group-hover:bg-brand-complementary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-4 rounded-full border-2 border-brand-complementary/40 bg-brand-complementary/20 animate-[pulse-subtle_3s_ease-in-out_infinite]" />
              </div>
              <div className="absolute bottom-3 left-1/2 h-5 w-0.5 -translate-x-1/2 rounded-full bg-foreground/10" />
            </div>
            {/* Shackle (open) */}
            <div className="absolute -top-5 right-1 h-10 w-8 rounded-t-full border-4 border-brand/30 border-b-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand/50" />
          </div>
          {/* Description */}
          <div className="space-y-2 text-center">
            <div className="text-[10px] font-medium text-foreground/70">Pro unlocks quantity</div>
            <div className="flex justify-center gap-1">
              <div className="rounded bg-foreground/10 px-2 py-1 text-[8px] text-foreground/50">same quality</div>
              <div className="rounded bg-brand/10 px-2 py-1 text-[8px] text-brand/60">more blocks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RefreshIcon() {
  return (
    <div className="w-full max-w-[260px]">
      {/* Updates panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.5 2.5a1 1 0 00-1.41 0L11 3.59V3a5 5 0 10-5 5h.59l-1.09 1.09a1 1 0 001.41 1.41l2.79-2.79a1 1 0 000-1.41L6.91 3.5a1 1 0 00-1.41 1.41L6.59 6H6a3 3 0 113-3v.59l1.09-1.09a1 1 0 001.41 0z" />
            </svg>
            <div className="h-2 w-12 rounded bg-foreground/15" />
          </div>
          <div className="text-[8px] text-foreground/40">lifetime</div>
        </div>
        {/* Content */}
        <div className="p-4">
          {/* Refresh visualization */}
          <div className="relative mx-auto mb-4 size-20">
            <svg viewBox="0 0 60 60" className="size-full animate-[orbit_8s_linear_infinite] group-hover:animate-[orbit_2s_linear_infinite]" fill="none">
              {/* Circular arrow */}
              <path
                d="M30 8 A22 22 0 1 1 8 30"
                className="stroke-brand transition-all duration-500 group-hover:stroke-opacity-60"
                strokeWidth="3"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />
              {/* Arrow head */}
              <path
                d="M30 2 L30 14 L18 8 Z"
                className="fill-brand transition-all duration-500 group-hover:fill-opacity-60"
                fillOpacity="0.35"
              />
              {/* Inner circle */}
              <circle cx="30" cy="30" r="10" className="fill-brand-complementary animate-[pulse-subtle_3s_ease-in-out_infinite]" fillOpacity="0.15" />
              <circle cx="30" cy="30" r="4" className="fill-brand-complementary animate-[glow_3s_ease-in-out_infinite]" fillOpacity="0.3" />
            </svg>
          </div>
          {/* Timeline */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-brand/40 animate-[pulse-subtle_3s_ease-in-out_infinite]" />
              <div className="h-1.5 flex-1 rounded bg-foreground/10" />
              <span className="text-[7px] text-foreground/40">v1.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-brand/40 animate-[pulse-subtle_3s_ease-in-out_infinite_0.3s]" />
              <div className="h-1.5 flex-1 rounded bg-foreground/10" />
              <span className="text-[7px] text-foreground/40">v1.5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-brand/60 animate-[pulse-subtle_3s_ease-in-out_infinite_0.6s]" />
              <div className="h-1.5 flex-1 rounded bg-brand/20" />
              <span className="text-[7px] text-brand/60">v2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full border border-dashed border-foreground/30 animate-[pulse-subtle_3s_ease-in-out_infinite_0.9s]" />
              <div className="h-1.5 flex-1 rounded border border-dashed border-foreground/10" />
              <span className="text-[7px] text-foreground/40">future</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        Quality Isn&apos;t Gated
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Pay for More.
        <br />
        <span className="text-muted-foreground">Not for Better.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-3">
        <FeatureCard label="30% free / 70% paid">
          <PieChart />
        </FeatureCard>
        <FeatureCard label="Pro unlocks quantity, not quality">
          <UnlockedIcon />
        </FeatureCard>
        <FeatureCard label="Free updates forever">
          <RefreshIcon />
        </FeatureCard>
      </div>
    </div>
  )
}
