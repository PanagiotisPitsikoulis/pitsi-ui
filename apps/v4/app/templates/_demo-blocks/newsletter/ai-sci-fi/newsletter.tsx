"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterAiSciFi() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border border-border bg-card p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <div className="w-2 h-2 rounded-full bg-primary/30" />
                </div>
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  DATA STREAM ACTIVE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-mono">
                &gt; Subscribe to Transmissions_
              </h2>
              <p className="text-muted-foreground text-lg mb-8 font-mono">
                Receive encrypted updates on AI advancements, quantum computing, and future tech.
              </p>
              <div className="grid sm:grid-cols-[1fr,auto] gap-3">
                <input
                  type="email"
                  placeholder="user@network.sys"
                  className="px-6 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                />
                <Button className="font-mono uppercase tracking-wider">
                  Initialize
                </Button>
              </div>
              <p className="text-muted-foreground text-xs mt-4 font-mono">
                &gt; 256-bit encryption | Opt-out anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
