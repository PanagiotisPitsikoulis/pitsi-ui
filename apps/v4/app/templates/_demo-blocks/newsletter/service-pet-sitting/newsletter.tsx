"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServicePetSitting() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-border bg-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-8 right-8 opacity-10">
              <svg className="w-32 h-32 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm16.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-5 5a3.5 3.5 0 1 1-2 0" />
              </svg>
            </div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm16.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM9 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <span className="text-primary text-sm font-semibold">Pet Care Tips</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pawsome Newsletter
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Get weekly pet care tips, training tricks, and adorable stories straight to your inbox!
              </p>
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex gap-2 justify-center mb-6">
                  {['🐕', '🐈', '🐇', '🐦'].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-muted/50 border border-border flex items-center justify-center text-xl"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <Button className="w-full rounded-2xl py-6 text-base font-semibold">
                  Join the Pack
                </Button>
                <p className="text-muted-foreground text-sm">
                  Tail-wagging content, no spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
