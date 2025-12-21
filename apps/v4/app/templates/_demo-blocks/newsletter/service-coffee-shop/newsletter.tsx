"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServiceCoffeeShop() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-[280px,1fr] gap-6 items-center">
            <div className="border border-border bg-card rounded-2xl p-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mx-auto md:mx-0 mb-4">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">10</div>
              <div className="text-sm text-muted-foreground mb-3">Free Coffee</div>
              <div className="flex gap-1.5 justify-center md:justify-start flex-wrap">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-lg border border-border ${
                      i < 3 ? 'bg-primary' : 'bg-muted/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border mb-4">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-primary text-sm font-semibold">Loyalty Program</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
                Coffee Stamp Card
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Sign up for exclusive rewards, early access to new blends, and birthday treats!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <Button className="rounded-xl px-6 whitespace-nowrap">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
