"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceGym() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-border bg-card rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6.5 6.5l11 11M6.5 17.5l11-11" />
                    <circle cx="6.5" cy="6.5" r="2" />
                    <circle cx="17.5" cy="6.5" r="2" />
                    <circle cx="6.5" cy="17.5" r="2" />
                    <circle cx="17.5" cy="17.5" r="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                  Level Up
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Fitness Tips Weekly
                </h2>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              Get personalized workout plans, nutrition guides, and motivation delivered straight to your inbox. No excuses.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">5K+</div>
                  <div className="text-xs text-muted-foreground uppercase">Members</div>
                </div>
                <div className="text-center border-x border-border">
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-xs text-muted-foreground uppercase">Workouts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground uppercase">Support</div>
                </div>
              </div>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button className="w-full rounded-xl py-6 text-base font-bold uppercase tracking-wide">
                Start Training
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
