"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterFoodJuice() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted/50 border border-border rounded-2xl mb-6">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="m8 12 2 2 4-4" />
            </svg>
            <span className="text-primary text-sm font-bold">100% Fresh</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
            Fresh Updates,<br />Delivered Daily
          </h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
            Get squeezed into our community! Recipes, health tips, and exclusive juice blends.
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-6 py-4 rounded-2xl bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-center text-lg"
            />
            <Button className="rounded-2xl py-6 text-lg font-semibold">
              Get Fresh Updates
            </Button>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Organic Content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>No Additives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
