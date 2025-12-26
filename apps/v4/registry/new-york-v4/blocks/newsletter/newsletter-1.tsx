"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-muted/50 border-border mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <svg
              className="text-primary h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-primary text-sm font-medium">
              Stay Updated
            </span>
          </div>
          <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-5xl">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Weekly care tips, early access to new arrivals, and member-only
            discounts.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-ring h-12 flex-1 rounded-full border px-6 focus:ring-1 focus:outline-none"
            />
            <Button className="h-12 rounded-full px-8">Subscribe</Button>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            No spam, unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  )
}
