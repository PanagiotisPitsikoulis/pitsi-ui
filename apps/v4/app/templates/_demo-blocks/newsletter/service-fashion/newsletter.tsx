"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceFashion() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-card via-card to-muted/20 border border-border rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative p-10 md:p-14">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background mb-6">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6m0-6 6 6" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Exclusive</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5 tracking-tight">
                  VIP Runway Access
                </h2>
                <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                  Get first access to new collections, styling tips from top designers, and exclusive fashion week coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 rounded-xl bg-background/80 backdrop-blur border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <Button className="rounded-xl px-8 py-4 font-semibold whitespace-nowrap">
                    Join VIP List
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-muted/50 border-2 border-card" />
                    <div className="w-8 h-8 rounded-full bg-muted/50 border-2 border-card" />
                    <div className="w-8 h-8 rounded-full bg-muted/50 border-2 border-card" />
                  </div>
                  <span className="text-muted-foreground">Join 50,000+ fashion insiders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
