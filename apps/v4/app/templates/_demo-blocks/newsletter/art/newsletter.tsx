"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

export function NewsletterArt() {
  return (
    <section>
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-border bg-card p-10 md:p-14 rounded-sm relative">
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center bg-muted/50 rotate-12">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="border-l-4 border-primary pl-6 mb-6">
              <h2 className="font-display text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 italic">
                Art Postcard Club
              </h2>
              <p className="text-muted-foreground text-lg font-serif italic">
                Receive curated art stories, exhibition updates, and creative inspiration
              </p>
            </div>
            <div className="space-y-3 mb-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-5 py-3 border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring rounded-sm"
              />
              <Button className="w-full rounded-sm text-base">
                Sign Me Up
              </Button>
            </div>
            <p className="text-muted-foreground text-sm text-center font-serif italic">
              One postcard per week, crafted with care
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
