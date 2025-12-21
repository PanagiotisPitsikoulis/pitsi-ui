"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterBoat() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl" />
            <div className="relative border border-border bg-card rounded-3xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 border border-border rounded-full">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 21a9 9 0 0 1 9-9 9 9 0 0 1 9 9M16 8A6 6 0 1 0 4 8a6 6 0 0 0 12 0" />
                  </svg>
                  <span className="text-primary text-sm font-semibold">Maritime Updates</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
                Set Sail with Our Newsletter
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-center max-w-xl mx-auto">
                Navigate the seas of knowledge with weekly sailing tips, weather updates, and nautical stories.
              </p>
              <div className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-muted/30 border border-border rounded-2xl">
                  <input
                    type="email"
                    placeholder="captain@vessel.com"
                    className="flex-1 px-5 py-3 bg-card border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring rounded-xl"
                  />
                  <Button className="rounded-xl px-6 whitespace-nowrap">
                    Join Crew
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm text-center mt-4">
                  Smooth sailing ahead. Unsubscribe at any port.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
