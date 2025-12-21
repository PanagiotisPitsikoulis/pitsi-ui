"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterAi() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-medium tracking-wide">AI POWERED</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Intelligence Updates
          </h2>
          <p className="text-muted-foreground text-base mb-10 max-w-md mx-auto">
            Get the latest AI insights delivered to your inbox
          </p>
          <div className="relative max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-2xl bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
            />
            <Button className="absolute right-2 top-2 rounded-xl px-6">
              Join
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
