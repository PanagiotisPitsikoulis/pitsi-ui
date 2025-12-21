"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceTattoo() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative border-2 border-border bg-card rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
              <svg className="w-full h-full text-primary" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="20" cy="20" r="3" />
                <circle cx="40" cy="15" r="2" />
                <circle cx="60" cy="25" r="4" />
                <circle cx="25" cy="40" r="2" />
                <circle cx="50" cy="45" r="3" />
                <circle cx="75" cy="35" r="2" />
                <circle cx="30" cy="65" r="3" />
                <circle cx="55" cy="70" r="2" />
                <circle cx="80" cy="60" r="3" />
              </svg>
            </div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-foreground flex items-center justify-center">
                  <svg className="w-7 h-7 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-foreground text-background mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest">Flash Drops</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                    Ink Alerts
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                Get exclusive first access to new flash designs, limited-time booking slots, and artist collaborations. For the bold.
              </p>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full pl-6 pr-12 py-4 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <Button className="w-full rounded-lg py-6 font-bold uppercase tracking-wider">
                  Get Inked In
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Limited slots available. No regrets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
