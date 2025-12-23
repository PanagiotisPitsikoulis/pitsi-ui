"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceRealEstate() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Form Side - Left */}
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Expert Agents</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-muted-foreground mb-10">
              Buying, selling, or investing — we're here every step of the way.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="What are you looking for? (property type, location, budget, timeline...)"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Schedule Viewing
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Prefer email? <a href="mailto:agents@dreamhomes.com" className="text-primary hover:underline">agents@dreamhomes.com</a>
              </p>
            </form>
          </div>

          {/* Success Story Side - Right */}
          <div className="relative bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-primary/10 p-12 lg:p-16 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-real-estate/1.webp)] bg-cover bg-center opacity-15" />

            <div className="relative z-10">
              <div className={`${cardBg} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8`}>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs font-medium text-foreground">Buyer Success Story</span>
              </div>

              <svg className="w-10 h-10 text-primary/40 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light text-foreground mb-12 leading-relaxed">
                "They helped us find the perfect family home in our dream neighborhood. The process was smooth, transparent, and stress-free."
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-border/50">
                <div className={`${cardBg} w-12 h-12 rounded-full border border-border overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-300" />
                </div>
                <div>
                  <p className="font-medium text-foreground">The Johnson Family</p>
                  <p className="text-sm text-muted-foreground">First-Time Buyers, 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Purchase</p>
                  <p className="text-2xl font-light text-foreground">$685K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                  <p className="text-2xl font-light text-foreground">45 days</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Saved</p>
                  <p className="text-2xl font-light text-foreground">$15K</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-3">Property Details</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs text-foreground">4 Bed</span>
                  <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs text-foreground">3 Bath</span>
                  <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs text-foreground">2,400 sqft</span>
                  <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs text-foreground">Backyard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
