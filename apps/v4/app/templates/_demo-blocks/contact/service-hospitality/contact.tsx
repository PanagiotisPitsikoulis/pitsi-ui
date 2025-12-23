"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceHospitality() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Form Side */}
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Luxury Concierge</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Reserve Your Experience
            </h2>
            <p className="text-muted-foreground mb-10">
              Personalized service, exceptional accommodations, unforgettable memories.
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
                  placeholder="Special requests, dates, occasion details..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-light tracking-wide">
                Request Reservation
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Prefer to call? <a href="mailto:concierge@grandhotel.com" className="text-primary hover:underline">concierge@grandhotel.com</a>
              </p>
            </form>
          </div>

          {/* Testimonial Side */}
          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-12 lg:p-16 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-hospitality/1.webp)] bg-cover bg-center opacity-10" />

            <div className="relative z-10">
              <svg className="w-12 h-12 text-primary/40 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed">
                "The attention to detail was extraordinary. From the moment we arrived, every need was anticipated. Truly a five-star experience."
              </p>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className={`${cardBg} w-14 h-14 rounded-full border border-border flex items-center justify-center`}>
                  <span className="text-sm font-light text-muted-foreground">RC</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Rebecca Chen</p>
                  <p className="text-sm text-muted-foreground">Anniversary Guest, 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                <div>
                  <p className="text-3xl font-light text-foreground">5★</p>
                  <p className="text-xs text-muted-foreground mt-1">Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground mt-1">Concierge</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-foreground">200+</p>
                  <p className="text-xs text-muted-foreground mt-1">Suites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
