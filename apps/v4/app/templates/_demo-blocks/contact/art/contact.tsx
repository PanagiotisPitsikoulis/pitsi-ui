"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactArt() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="relative">
          {/* Gallery-style image backdrop */}
          <div className="absolute right-0 top-0 w-2/5 h-full hidden lg:block">
            <div className="sticky top-24 h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/art/1.webp')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background" />
            </div>
          </div>

          {/* Content with overlapping form */}
          <div className="relative max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-6 rounded-sm">
              Visit Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Experience Art In Person
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Our gallery is open to collectors and art enthusiasts. Schedule a private viewing or join one of our guided tours.
            </p>

            {/* Overlapping form card */}
            <div className={`${cardBg} rounded-2xl p-8 lg:p-10 border border-border shadow-lg relative z-10`}>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Schedule a Viewing</h3>
              <p className="text-muted-foreground italic mb-8">Drop us a line...</p>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Tell us about your interests..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <Button className="w-full rounded-full py-6 text-base font-medium">
                  Request Appointment
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Prefer email?{" "}
                  <a href="mailto:gallery@artspace.com" className="text-primary hover:underline">
                    gallery@artspace.com
                  </a>
                </p>
              </form>

              {/* Testimonial quote in form */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <div>
                    <p className="text-foreground italic mb-3">
                      "A truly inspiring collection. The private viewing experience was exceptional."
                    </p>
                    <p className="text-sm font-semibold text-foreground">— Isabella Martinez</p>
                    <p className="text-xs text-muted-foreground">Art Collector</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery info below */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-medium text-foreground">Gallery Location</p>
                  <p className="text-sm text-muted-foreground">789 Art District, Gallery Row</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="font-medium text-foreground">Gallery Hours</p>
                  <p className="text-sm text-muted-foreground">Tue-Sun: 10am-6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
