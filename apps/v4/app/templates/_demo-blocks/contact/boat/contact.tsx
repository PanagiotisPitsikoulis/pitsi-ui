"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactBoat() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Nautical image with case study overlay */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/boat/1.webp')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className={`${cardBg} border border-border rounded-2xl p-8 backdrop-blur-sm bg-background/90`}>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-serif">Featured Charter</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-primary mb-1">2024</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Year</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-3xl font-serif font-bold text-primary mb-1">7</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Days</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-serif font-bold text-primary mb-1">12</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Guests</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-foreground font-serif italic mb-2">Mediterranean Dream Voyage</p>
                    <p className="text-sm text-muted-foreground">
                      Full-service luxury charter including captain, crew, and gourmet dining
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-6 font-serif rounded-sm">
              Set Sail
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
              Book Your Charter
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to experience the ocean? Our crew is standing by to plan your perfect voyage.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <textarea
                placeholder="Tell us about your dream voyage..."
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-serif"
              />
              <Button className="w-full rounded-full py-6 text-base font-medium font-serif">
                Request Quote
              </Button>
              <p className="text-center text-sm text-muted-foreground font-serif">
                Prefer to speak directly?{" "}
                <a href="mailto:charter@harborbay.com" className="text-primary hover:underline">
                  charter@harborbay.com
                </a>
              </p>
            </form>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-serif">Marina Location</p>
                <p className="text-sm text-foreground font-serif">Harbor Bay Marina, Slip 42</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">34.0522° N, 118.2437° W</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-serif">VHF Channel</p>
                <p className="text-sm text-foreground font-serif">Channel 16</p>
                <p className="text-xs text-muted-foreground font-serif mt-1">(555) SEA-SAIL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
