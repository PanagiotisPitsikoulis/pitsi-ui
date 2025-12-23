"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterServicePsychologist() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-card to-muted/10 border border-border rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border mb-4">
                <span className="text-primary text-sm font-medium">Mental Wellness</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Wellness Journal
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto">
                Subscribe for thoughtful insights on mental health, mindfulness practices, and self-care strategies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">What you'll receive:</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span>Weekly mindfulness exercises</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span>Emotional wellness tips</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span>Evidence-based practices</span>
                  </div>
                </div>
              </div>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button className="w-full rounded-2xl py-6 font-medium">
                Begin Your Journey
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Your privacy and peace of mind matter to us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
