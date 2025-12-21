"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceMarketing() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border border-border bg-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start mb-8">
              <div className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border mb-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    Growth Insights
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                  Marketing Intelligence Weekly
                </h2>
                <p className="text-muted-foreground text-lg">
                  Data-driven strategies, conversion tactics, and growth hacks delivered to ambitious marketers.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">25K+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Subscribers</div>
                </div>
                <div className="border-l border-r border-border pl-6">
                  <div className="text-2xl font-bold text-foreground mb-1">98%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Open Rate</div>
                </div>
                <div className="pl-6">
                  <div className="text-2xl font-bold text-foreground mb-1">ROI</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Focused</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full px-6 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button className="w-full rounded-xl py-6 font-semibold">
                Start Growing Today
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Join marketing leaders from Fortune 500 companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
