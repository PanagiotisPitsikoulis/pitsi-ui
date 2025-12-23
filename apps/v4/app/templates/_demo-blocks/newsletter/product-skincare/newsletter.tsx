"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterProductSkincare() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted/50 border border-border mb-5">
                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
                Beauty Insider
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Join our exclusive community for skincare tips, product launches, and self-care rituals.
              </p>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring text-center"
              />
              <Button className="w-full rounded-2xl py-6 font-medium">
                Join the Community
              </Button>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-foreground font-bold text-lg">10K+</div>
                  <div className="text-muted-foreground text-xs">Members</div>
                </div>
                <div>
                  <div className="text-foreground font-bold text-lg">Weekly</div>
                  <div className="text-muted-foreground text-xs">Tips</div>
                </div>
                <div>
                  <div className="text-foreground font-bold text-lg">VIP</div>
                  <div className="text-muted-foreground text-xs">Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
