"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterProductScifi() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border border-border bg-card rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-1">
              <div className="bg-card p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-3">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-75" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-150" />
                      </div>
                      <span className="text-primary text-xs font-medium uppercase tracking-wider">
                        Signal Active
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                      Transmission Frequency
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Subscribe to receive cosmic updates, futuristic product launches, and exclusive tech transmissions.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-[1fr,auto] gap-3 items-start">
                  <input
                    type="email"
                    placeholder="username@station.space"
                    className="px-5 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <Button className="rounded-lg px-8 whitespace-nowrap h-[50px]">
                    Connect Signal
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Encrypted transmission | Unsubscribe at lightspeed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
