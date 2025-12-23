"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceTattoo() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border-2 border-border">
          {/* Testimonial Side - Left */}
          <div className="relative bg-gradient-to-br from-foreground/95 to-foreground p-12 lg:p-16 flex flex-col justify-between text-background order-2 lg:order-1">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-tattoo/1.webp)] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-8">
                <svg className="w-4 h-4 text-background" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs font-bold text-background tracking-wider uppercase">Artist Portfolio</span>
              </div>

              <svg className="w-12 h-12 text-background/60 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-bold mb-12 leading-tight">
                "My sleeve is a masterpiece. The attention to detail, the shading, the way it flows — absolutely incredible. Worth every penny."
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-background/20">
                <div className="w-12 h-12 rounded-full bg-background/10 border-2 border-background/20 flex items-center justify-center">
                  <span className="text-sm font-bold">JR</span>
                </div>
                <div>
                  <p className="font-bold">Jake Rodriguez</p>
                  <p className="text-sm text-background/70">Full Sleeve Client, 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-background/60 mb-1">Investment</p>
                  <p className="text-2xl font-bold">$3,500</p>
                </div>
                <div>
                  <p className="text-xs text-background/60 mb-1">Sessions</p>
                  <p className="text-2xl font-bold">6</p>
                </div>
              </div>

              <div className="pt-6 border-t border-background/20">
                <p className="text-xs text-background/60 mb-3">Style</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs font-bold">Japanese</span>
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs font-bold">Color</span>
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs font-bold">Full Sleeve</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Right */}
          <div className={`${cardBg} p-12 lg:p-16 order-1 lg:order-2`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              </svg>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Custom Ink</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Ink
            </h2>
            <p className="text-muted-foreground mb-10">
              Custom designs, expert artists, lifetime memories.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Describe your tattoo idea (design, style, size, placement)..."
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-bold tracking-wide">
                Book Free Consultation
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Instagram? <a href="mailto:studio@inklegends.com" className="text-primary hover:underline font-bold">@inklegends</a>
              </p>
            </form>

            <div className="mt-10 pt-8 border-t border-border">
              <div className={`${cardBg} rounded-2xl border-2 border-border p-4`}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <div className="text-xs text-muted-foreground">
                    <p className="font-bold text-foreground mb-1">Free Consultation</p>
                    <p>No obligation. Discuss your design, get pricing, meet your artist.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
