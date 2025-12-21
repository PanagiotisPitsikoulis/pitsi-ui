"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactBoat() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Set Sail</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Charter
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to experience the ocean? Our crew is standing by to plan your perfect voyage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Nautical map style contact info */}
            <div className={`${cardBg} border border-border rounded-2xl p-8 relative overflow-hidden`}>
              {/* Compass decoration */}
              <div className="absolute -right-8 -top-8 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="text-primary">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M50 10 L55 48 L50 50 L45 48 Z" fill="currentColor" />
                  <path d="M90 50 L52 55 L50 50 L52 45 Z" fill="currentColor" />
                  <path d="M50 90 L45 52 L50 50 L55 52 Z" fill="currentColor" />
                  <path d="M10 50 L48 45 L50 50 L48 55 Z" fill="currentColor" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-6">Marina Coordinates</h3>

              <div className="space-y-6 relative z-10">
                <div className={`${cardBg} border border-border rounded-lg p-4`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Harbor Bay Marina</h4>
                      <p className="text-sm text-muted-foreground">Slip 42, Coastal City</p>
                      <p className="text-xs text-primary mt-2 font-mono">Lat: 34.0522° N, Long: 118.2437° W</p>
                    </div>
                  </div>
                </div>

                <div className={`${cardBg} border border-border rounded-lg p-4`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">VHF Channel 16</h4>
                      <p className="text-sm text-muted-foreground">(555) SEA-SAIL</p>
                    </div>
                  </div>
                </div>

                <div className={`${cardBg} border border-border rounded-lg p-4`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Dock Hours</h4>
                      <p className="text-sm text-muted-foreground">Daily: Sunrise to Sunset</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div className={`${cardBg} rounded-2xl p-8 border border-border`}>
              <h3 className="text-xl font-semibold text-foreground mb-6">Plan Your Voyage</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Captain's Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    placeholder="Departure Date"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    type="number"
                    placeholder="Passengers"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your dream voyage..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
                <Button className="w-full rounded-xl">
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
