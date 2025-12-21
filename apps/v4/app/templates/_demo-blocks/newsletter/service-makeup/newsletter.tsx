"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceMakeup() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl" />
            <div className="relative border border-border bg-card rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-border mb-5">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                  <span className="text-primary text-sm font-semibold">Beauty Insider</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Glamour Box Teaser
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Discover the latest makeup trends, tutorials from pro artists, and exclusive product previews before anyone else.
                </p>
              </div>
              <div className="max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-2 rounded-full bg-gradient-to-r from-primary/80 to-primary/40" />
                  <div className="h-2 rounded-full bg-gradient-to-r from-primary/60 to-primary/30" />
                  <div className="h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/20" />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <Button className="w-full rounded-2xl py-6 text-base font-semibold">
                  Unlock Beauty Secrets
                </Button>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Free tutorials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>VIP discounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
