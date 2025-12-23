"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceHospitality() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-b from-card to-muted/20 border border-border rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-12 rounded-lg bg-muted/50 border border-border mb-6 relative">
                <svg className="w-8 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 3v4M8 3v4M2 11h20" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Guest Privileges
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
                Unlock exclusive member rates, priority booking, and personalized travel recommendations.
              </p>
              <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Membership Level</span>
                  <span className="text-primary font-semibold">Gold</span>
                </div>
                <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden mb-3">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Earn points with every stay
                </div>
              </div>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring mb-3"
              />
              <Button className="w-full rounded-2xl py-6 font-semibold">
                Activate Membership
              </Button>
              <p className="text-muted-foreground text-xs mt-4">
                Complimentary room upgrade on your first booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
