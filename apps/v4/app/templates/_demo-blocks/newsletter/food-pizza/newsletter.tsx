"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterFoodPizza() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-4 border-border bg-card p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 right-0 h-8 bg-repeating-linear-to-r from-muted via-transparent to-muted opacity-50"
                 style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(45deg, transparent 25%, var(--muted) 25%, var(--muted) 50%, transparent 50%, transparent 75%, var(--muted) 75%)' }} />
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                  </svg>
                </div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Hot & Fresh</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Join Our Pizza Lovers Club
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Get weekly specials, new menu items, and exclusive pizza secrets delivered to your inbox!
              </p>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <Button className="w-full font-bold">
                  Order Your Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
