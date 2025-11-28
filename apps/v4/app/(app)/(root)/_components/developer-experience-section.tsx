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

function UnifiedPlatform() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor clicks on MCP service - positioned over middle card */}
      <Cursor className="absolute left-[100px] bottom-[45px] z-10 animate-[cursor-click_5s_ease-in-out_infinite] group-hover:animate-[cursor-click_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-fuchsia-500" />
        <CursorBody className="bg-fuchsia-500 text-white">
          <CursorName>Sam</CursorName>
        </CursorBody>
      </Cursor>
      {/* Platform architecture diagram */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h8v8H4V4z" />
            </svg>
            <div className="h-2 w-14 rounded bg-foreground/15" />
          </div>
          <div className="text-[8px] text-foreground/40">ecosystem</div>
        </div>
        {/* Architecture */}
        <div className="p-3">
          {/* Central hub */}
          <div className="relative mx-auto mb-3 w-20 rounded-lg border-2 border-brand/30 bg-brand/10 p-2 text-center animate-[pulse-subtle_3s_ease-in-out_infinite] group-hover:animate-[glow_1.5s_ease-in-out_infinite]">
            <div className="text-[9px] font-medium text-brand/70">pitsi/ui</div>
          </div>
          {/* Connection lines */}
          <div className="relative mb-2 flex justify-center">
            <svg className="h-6 w-32 animate-[pulse-subtle_3s_ease-in-out_infinite] group-hover:animate-[glow_1.5s_ease-in-out_infinite]" viewBox="0 0 128 24">
              <path d="M32 0 L32 12 L8 12 L8 24" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none" className="group-hover:stroke-brand/40" />
              <path d="M64 0 L64 24" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none" className="group-hover:stroke-brand/40" />
              <path d="M96 0 L96 12 L120 12 L120 24" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none" className="group-hover:stroke-brand/40" />
            </svg>
          </div>
          {/* Connected services - middle card (MCP) synced with cursor click */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all duration-300">
              <div className="mx-auto mb-1 size-5 rounded bg-brand-complementary/15 flex items-center justify-center">
                <span className="text-[6px] text-brand-complementary/60">CLI</span>
              </div>
              <div className="text-[7px] text-foreground/50">shadcn</div>
            </div>
            <div className="rounded-lg border border-brand/20 bg-brand/5 p-2 text-center transition-all duration-300 animate-[service-select_5s_ease-in-out_infinite] group-hover:animate-[service-select_2.5s_ease-in-out_infinite]">
              <div className="mx-auto mb-1 size-5 rounded bg-brand/20 flex items-center justify-center">
                <span className="text-[6px] text-brand/60">MCP</span>
              </div>
              <div className="text-[7px] text-brand/60">server</div>
            </div>
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-2 text-center transition-all duration-300">
              <div className="mx-auto mb-1 size-5 rounded bg-foreground/10 flex items-center justify-center">
                <span className="text-[6px] text-foreground/50">CMS</span>
              </div>
              <div className="text-[7px] text-foreground/50">Payload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeBrackets() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor selects code lines - positioned over line 5 */}
      <Cursor className="absolute left-[25px] top-[105px] z-10 animate-[cursor-select_4s_ease-in-out_infinite] group-hover:animate-[cursor-select_2s_ease-in-out_infinite]">
        <CursorPointer className="text-green-500" />
        <CursorBody className="bg-green-500 text-white">
          <CursorName>Leo</CursorName>
        </CursorBody>
      </Cursor>
      {/* Code editor panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Editor tabs */}
        <div className="flex items-center gap-px border-b border-foreground/10">
          <div className="flex items-center gap-2 bg-foreground/[0.03] px-3 py-2 border-b-2 border-brand/40">
            <div className="size-2 rounded-sm bg-brand/30" />
            <span className="text-[8px] text-foreground/60">Button.tsx</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="size-2 rounded-sm bg-foreground/20" />
            <span className="text-[8px] text-foreground/40">Card.tsx</span>
          </div>
        </div>
        {/* Code content - line 5 gets selection highlight synced with cursor */}
        <div className="p-3 font-mono space-y-1 relative">
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">1</span>
            <span className="text-[8px] text-brand-complementary/60">import</span>
            <span className="text-[8px] text-foreground/50">{"{ Button }"}</span>
            <span className="text-[8px] text-brand-complementary/60">from</span>
            <span className="text-[8px] text-brand/50">&quot;@/ui&quot;</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">2</span>
            <span className="inline-block w-1 h-2 bg-brand/60 animate-[cursor-blink_1s_ease-in-out_infinite] ml-1"></span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">3</span>
            <span className="text-[8px] text-brand-complementary/60">export</span>
            <span className="text-[8px] text-foreground/50">function</span>
            <span className="text-[8px] text-brand/60">Hero</span>
            <span className="text-[8px] text-foreground/50">() {"{"}</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">4</span>
            <span className="text-[8px] text-foreground/50 ml-3">return (</span>
          </div>
          {/* Line 5 - synced with cursor select */}
          <div className="relative flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="absolute inset-0 bg-green-500/15 rounded animate-[text-select_4s_ease-in-out_infinite] group-hover:animate-[text-select_2s_ease-in-out_infinite]" style={{ transformOrigin: 'left' }} />
            <span className="relative text-[8px] text-foreground/30">5</span>
            <span className="relative text-[8px] text-foreground/50 ml-6">{"<Button"}</span>
            <span className="relative text-[8px] text-brand-complementary/50">variant</span>
            <span className="relative text-[8px] text-foreground/50">=</span>
            <span className="relative text-[8px] text-brand/50">&quot;primary&quot;</span>
            <span className="relative text-[8px] text-foreground/50">{">"}</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">6</span>
            <span className="text-[8px] text-foreground/60 ml-8">Get Started</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-200 rounded px-1 -mx-1">
            <span className="text-[8px] text-foreground/30">7</span>
            <span className="text-[8px] text-foreground/50 ml-6">{"</Button>"}</span>
          </div>
        </div>
        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-foreground/10 px-3 py-1.5">
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-green-500/50 animate-[pulse-subtle_2s_ease-in-out_infinite]" />
            <span className="text-[7px] text-foreground/40">TypeScript</span>
          </div>
          <span className="text-[7px] text-foreground/40">Same API</span>
        </div>
      </div>
    </div>
  )
}

function DocsBook() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor navigates sidebar - positioned over second item */}
      <Cursor className="absolute left-[30px] top-[85px] z-10 animate-[cursor-navigate_6s_ease-in-out_infinite] group-hover:animate-[cursor-navigate_3s_ease-in-out_infinite]">
        <CursorPointer className="text-yellow-500" />
        <CursorBody className="bg-yellow-500 text-white">
          <CursorName>Amy</CursorName>
        </CursorBody>
      </Cursor>
      {/* Documentation panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <svg className="size-3 text-brand/60" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 0v10h8V3H4z" />
            </svg>
            <div className="h-2 w-8 rounded bg-foreground/15" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-14 rounded bg-foreground/10 flex items-center justify-center">
              <span className="text-[7px] text-foreground/40">search...</span>
            </div>
          </div>
        </div>
        {/* Docs layout */}
        <div className="flex">
          {/* Sidebar - second item gets selected synced with cursor navigate */}
          <div className="w-20 border-r border-foreground/10 p-2 space-y-1">
            <div className="text-[7px] text-foreground/40 mb-1">Getting Started</div>
            <div className="rounded bg-brand/10 px-2 py-1">
              <div className="h-1 w-10 rounded bg-brand/40" />
            </div>
            {/* This item gets selected when cursor clicks */}
            <div className="rounded px-2 py-1 transition-colors duration-200 animate-[sidebar-select_6s_ease-in-out_infinite] group-hover:animate-[sidebar-select_3s_ease-in-out_infinite]">
              <div className="h-1 w-12 rounded bg-foreground/15" />
            </div>
            <div className="text-[7px] text-foreground/40 mt-2 mb-1">Components</div>
            <div className="rounded px-2 py-1 transition-colors duration-200">
              <div className="h-1 w-8 rounded bg-foreground/15" />
            </div>
            <div className="rounded px-2 py-1 transition-colors duration-200">
              <div className="h-1 w-10 rounded bg-foreground/15" />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            <div className="h-3 w-24 rounded bg-foreground/20" />
            <div className="space-y-2 animate-[scroll-content_8s_ease-in-out_infinite] group-hover:animate-[scroll-content_4s_ease-in-out_infinite]">
              <div className="h-1.5 w-full rounded bg-foreground/10" />
              <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
              <div className="h-1.5 w-5/6 rounded bg-foreground/10" />
              <div className="h-1.5 w-full rounded bg-foreground/10" />
              <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
            </div>
            {/* Code example */}
            <div className="mt-2 rounded-lg bg-foreground/[0.05] p-2 font-mono transition-all duration-300 group-hover:bg-foreground/[0.08]">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[7px] text-brand/50">npx</span>
                <span className="text-[7px] text-foreground/50">pitsi add button</span>
              </div>
              <div className="flex gap-1">
                <div className="h-4 flex-1 rounded bg-foreground/10 animate-[pulse-subtle_2s_ease-in-out_infinite]" />
                <div className="h-4 w-8 rounded bg-brand/15 transition-all duration-300 group-hover:bg-brand/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DeveloperExperienceSection() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        The shadcn Ecosystem, Unified
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Zero New APIs.
        <br />
        <span className="text-muted-foreground">Infinite Possibilities.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-3">
        <FeatureCard label="One platform">
          <UnifiedPlatform />
        </FeatureCard>
        <FeatureCard label="Same APIs — nothing to unlearn">
          <CodeBrackets />
        </FeatureCard>
        <FeatureCard label="Docs that don't suck">
          <DocsBook />
        </FeatureCard>
      </div>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        No more scattered dependencies and fragmented tools.
        Hours saved. Sanity preserved.
      </p>
    </div>
  )
}
