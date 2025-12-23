"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterProductCoffee() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -top-2 -right-2 w-16 h-16">
              <div className="w-full h-full border-2 border-primary rounded-full animate-pulse opacity-20" />
            </div>
            <div className="w-16 h-16 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-5">
            Morning Brew Subscription
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Wake up to freshly roasted coffee tips, brewing guides, and exclusive blends in your inbox.
          </p>
          <div className="bg-card border border-border rounded-3xl p-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-6 py-4 mb-3 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Button className="w-full rounded-2xl py-6 text-base font-semibold">
              Start Your Morning Right
            </Button>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Free coffee guide included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
