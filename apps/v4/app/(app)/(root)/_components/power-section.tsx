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

function CMSIcon() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor clicks on table rows - positioned over middle row */}
      <Cursor className="absolute right-8 top-[105px] z-10 animate-[cursor-click_4s_ease-in-out_infinite] group-hover:animate-[cursor-click_2s_ease-in-out_infinite]">
        <CursorPointer className="text-red-500" />
        <CursorBody className="bg-red-500 text-white">
          <CursorName>Max</CursorName>
        </CursorBody>
      </Cursor>
      {/* CMS admin panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded bg-brand/20 animate-[pulse-subtle_3s_ease-in-out_infinite] group-hover:animate-pulse" />
            <div className="h-2 w-12 rounded bg-foreground/15" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-14 rounded bg-foreground/10 flex items-center justify-center">
              <span className="text-[7px] text-foreground/40">Payload</span>
            </div>
          </div>
        </div>
        {/* Sidebar + Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-16 border-r border-foreground/10 p-2 space-y-1">
            <div className="rounded bg-brand/15 px-2 py-1 transition-colors group-hover:bg-brand/25">
              <div className="h-1 w-6 rounded bg-brand/40" />
            </div>
            <div className="rounded px-2 py-1 transition-colors group-hover:bg-foreground/5">
              <div className="h-1 w-8 rounded bg-foreground/15" />
            </div>
            <div className="rounded px-2 py-1 transition-colors group-hover:bg-foreground/5">
              <div className="h-1 w-5 rounded bg-foreground/15" />
            </div>
            <div className="rounded px-2 py-1 transition-colors group-hover:bg-foreground/5">
              <div className="h-1 w-7 rounded bg-foreground/15" />
            </div>
          </div>
          {/* Content area */}
          <div className="flex-1 p-2">
            {/* Collection header */}
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-12 rounded bg-foreground/20" />
              <div className="h-4 w-10 rounded bg-brand/20 transition-colors group-hover:bg-brand/30" />
            </div>
            {/* Table */}
            <div className="rounded-lg border border-foreground/10 bg-foreground/[0.03]">
              {/* Header row */}
              <div className="flex gap-2 border-b border-foreground/10 px-2 py-1.5">
                <div className="h-1.5 w-3 rounded bg-foreground/20" />
                <div className="h-1.5 w-16 rounded bg-foreground/15" />
                <div className="h-1.5 w-12 rounded bg-foreground/15" />
                <div className="h-1.5 w-8 rounded bg-foreground/15" />
              </div>
              {/* Data rows - middle row synced with cursor click */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`flex gap-2 border-b border-foreground/5 px-2 py-1.5 last:border-0 transition-all origin-left ${
                    i === 1
                      ? "animate-[row-select_4s_ease-in-out_infinite] group-hover:animate-[row-select_2s_ease-in-out_infinite]"
                      : ""
                  }`}
                >
                  <div className={`size-1.5 rounded-sm transition-colors ${i === 1 ? "bg-brand/40" : "bg-foreground/20"}`} />
                  <div className="h-1.5 w-16 rounded bg-foreground/10" />
                  <div className="h-1.5 w-12 rounded bg-foreground/10" />
                  <div className={`h-1.5 w-8 rounded ${i === 1 ? "bg-brand/30" : "bg-foreground/10"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServerTerminal() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor hovers over capabilities - positioned over badges */}
      <Cursor className="absolute left-[85px] top-[145px] z-10 animate-[cursor-hover_3s_ease-in-out_infinite] group-hover:animate-[cursor-hover_1.5s_ease-in-out_infinite]">
        <CursorPointer className="text-lime-500" />
        <CursorBody className="bg-lime-500 text-white">
          <CursorName>Dev</CursorName>
        </CursorBody>
      </Cursor>
      {/* MCP Server panel */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="size-2 rounded-full bg-brand/40 animate-[pulse-subtle_2s_ease-in-out_infinite] group-hover:animate-pulse" />
            <div className="size-2 rounded-full bg-brand-complementary/40 animate-[pulse-subtle_2s_ease-in-out_infinite] [animation-delay:0.3s] group-hover:animate-pulse" />
            <div className="size-2 rounded-full bg-foreground/20 animate-[pulse-subtle_2s_ease-in-out_infinite] [animation-delay:0.6s] group-hover:animate-pulse" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[8px] text-foreground/40">mcp-server</span>
            <div className="size-2 rounded-full bg-green-500/50 animate-[pulse-subtle_1.5s_ease-in-out_infinite] group-hover:animate-pulse" />
          </div>
        </div>
        {/* Terminal content */}
        <div className="p-3 font-mono space-y-1.5">
          {/* Command */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-brand/60 animate-[cursor-blink_1s_step-end_infinite]">$</span>
            <span className="text-[9px] text-foreground/60">npx pitsi mcp</span>
          </div>
          {/* Output */}
          <div className="rounded bg-foreground/[0.03] p-2 space-y-1 transition-colors group-hover:bg-foreground/[0.05]">
            <div className="flex items-center gap-1 transition-all group-hover:translate-x-0.5">
              <span className="text-[8px] text-green-500/70">✓</span>
              <span className="text-[8px] text-foreground/50">Server started on port 3100</span>
            </div>
            <div className="flex items-center gap-1 transition-all group-hover:translate-x-0.5 [transition-delay:50ms]">
              <span className="text-[8px] text-green-500/70">✓</span>
              <span className="text-[8px] text-foreground/50">Registered 1247 blocks</span>
            </div>
            <div className="flex items-center gap-1 transition-all group-hover:translate-x-0.5 [transition-delay:100ms]">
              <span className="text-[8px] text-green-500/70">✓</span>
              <span className="text-[8px] text-foreground/50">Connected to Claude</span>
            </div>
          </div>
          {/* Capabilities - badges pulse when cursor hovers */}
          <div className="space-y-1">
            <div className="text-[8px] text-foreground/40">capabilities:</div>
            <div className="flex flex-wrap gap-1">
              <div className="rounded bg-brand/10 px-1.5 py-0.5 text-[7px] text-brand/60 animate-[capability-pulse_3s_ease-in-out_infinite] group-hover:animate-[capability-pulse_1.5s_ease-in-out_infinite]">search</div>
              <div className="rounded bg-brand-complementary/10 px-1.5 py-0.5 text-[7px] text-brand-complementary/60 animate-[capability-pulse_3s_ease-in-out_infinite_0.5s] group-hover:animate-[capability-pulse_1.5s_ease-in-out_infinite_0.25s]">preview</div>
              <div className="rounded bg-foreground/10 px-1.5 py-0.5 text-[7px] text-foreground/50 animate-[capability-pulse_3s_ease-in-out_infinite_1s] group-hover:animate-[capability-pulse_1.5s_ease-in-out_infinite_0.5s]">install</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIBrain() {
  return (
    <div className="relative w-full max-w-[260px]">
      {/* Cursor selects text in chat - positioned over AI response */}
      <Cursor className="absolute left-[45px] top-[95px] z-10 animate-[cursor-select_5s_ease-in-out_infinite] group-hover:animate-[cursor-select_2.5s_ease-in-out_infinite]">
        <CursorPointer className="text-sky-500" />
        <CursorBody className="bg-sky-500 text-white">
          <CursorName>AI</CursorName>
        </CursorBody>
      </Cursor>
      {/* AI chat interface */}
      <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-foreground/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="size-4 rounded-full bg-gradient-to-br from-brand/40 to-brand-complementary/40 animate-[pulse-subtle_2.5s_ease-in-out_infinite] group-hover:animate-[spin_3s_linear_infinite]" />
            <div className="h-2 w-10 rounded bg-foreground/15" />
          </div>
          <div className="flex items-center gap-1">
            <div className="size-1.5 rounded-full bg-green-500/50 animate-[pulse-subtle_1.5s_ease-in-out_infinite] group-hover:animate-pulse" />
            <span className="text-[7px] text-foreground/40">online</span>
          </div>
        </div>
        {/* Chat messages */}
        <div className="p-3 space-y-2">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-lg rounded-br-sm bg-brand/15 px-2.5 py-1.5 transition-all group-hover:scale-105 group-hover:bg-brand/20">
              <p className="text-[8px] text-foreground/70">Add a pricing section with 3 tiers</p>
            </div>
          </div>
          {/* AI response - text gets selected synced with cursor */}
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-lg rounded-bl-sm bg-foreground/[0.05] px-2.5 py-1.5 space-y-1.5 transition-all group-hover:scale-105 group-hover:bg-foreground/[0.08]">
              <p className="relative text-[8px] text-foreground/60">
                <span className="relative z-10">I&apos;ll add the pricing-section-03 block:</span>
                <span className="absolute inset-0 bg-sky-500/20 rounded animate-[text-select_5s_ease-in-out_infinite] group-hover:animate-[text-select_2.5s_ease-in-out_infinite]" style={{ transformOrigin: 'left' }} />
              </p>
              {/* Code block */}
              <div className="rounded bg-foreground/[0.05] px-2 py-1 font-mono transition-colors group-hover:bg-foreground/[0.08]">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-brand/60">npx</span>
                  <span className="text-[7px] text-foreground/50">pitsi add pricing-03</span>
                </div>
              </div>
              {/* Preview */}
              <div className="rounded border border-foreground/10 bg-foreground/[0.03] p-1.5 transition-colors group-hover:bg-foreground/[0.05]">
                <div className="flex gap-1">
                  <div className="h-8 flex-1 rounded bg-foreground/10 transition-all group-hover:bg-foreground/15" />
                  <div className="h-8 flex-1 rounded bg-brand/15 border border-brand/20 transition-all group-hover:bg-brand/25 group-hover:scale-105" />
                  <div className="h-8 flex-1 rounded bg-foreground/10 transition-all group-hover:bg-foreground/15" />
                </div>
              </div>
            </div>
          </div>
          {/* Typing indicator */}
          <div className="flex gap-1 px-2">
            <div className="size-1.5 rounded-full bg-foreground/30 animate-pulse group-hover:bg-foreground/50 transition-colors" />
            <div className="size-1.5 rounded-full bg-foreground/30 animate-pulse [animation-delay:0.2s] group-hover:bg-foreground/50 transition-colors" />
            <div className="size-1.5 rounded-full bg-foreground/30 animate-pulse [animation-delay:0.4s] group-hover:bg-foreground/50 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function PowerSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        A Full Ecosystem Behind a Simple Install
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Blocks Are Just
        <br />
        <span className="text-muted-foreground">the Beginning.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <div className="grid w-full gap-4 md:grid-cols-3">
        <FeatureCard label="100% Payload CMS compatible">
          <CMSIcon />
        </FeatureCard>
        <FeatureCard label="MCP server included">
          <ServerTerminal />
        </FeatureCard>
        <FeatureCard label="Built for AI">
          <AIBrain />
        </FeatureCard>
      </div>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Built for humans. Built for AI. Built to last.
      </p>
    </div>
  )
}
