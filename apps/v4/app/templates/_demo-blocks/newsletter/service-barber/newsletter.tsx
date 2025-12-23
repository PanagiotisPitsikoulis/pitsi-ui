"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceBarber() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative border-2 border-border bg-card rounded-xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)',
              color: 'hsl(var(--primary) / 0.2)'
            }} />
            <div className="p-8 md:p-12 pt-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-px h-8 bg-border" />
                <div className="w-16 h-16 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-card" />
                </div>
                <div className="w-px h-8 bg-border" />
              </div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border mb-4">
                  <span className="text-primary text-sm font-bold uppercase tracking-widest">
                    Member's Club
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Join the Brotherhood
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Get grooming tips, exclusive offers, and be the first to book premium slots.
                </p>
              </div>
              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <Button className="w-full rounded-lg py-6 font-bold uppercase tracking-wide">
                  Claim Membership
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  First cut's on us. No strings attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
