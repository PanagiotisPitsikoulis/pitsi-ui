"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-primary text-sm font-medium">Stay Updated</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Weekly care tips, early access to new arrivals, and member-only discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 px-6 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Button className="h-12 rounded-full px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            No spam, unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  )
}
