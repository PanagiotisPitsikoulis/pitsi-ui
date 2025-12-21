"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactArt() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-2xl">
          {/* Postcard-style header */}
          <div className={`${cardBg} border-2 border-border rounded-lg p-8 mb-8 relative`}>
            {/* Postcard stamp decoration */}
            <div className="absolute top-6 right-6 w-16 h-20 border-2 border-border rounded-sm flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>

            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Visit Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience Art In Person
            </h2>
            <p className="text-muted-foreground">
              Our gallery is open to collectors and art enthusiasts. Schedule a private viewing or join one of our guided tours.
            </p>
          </div>

          {/* Postcard-style form */}
          <div className={`${cardBg} border-2 border-border rounded-lg p-8 relative`}>
            {/* Address lines decoration */}
            <div className="absolute top-6 left-6 space-y-1.5">
              <div className="w-3 h-0.5 bg-muted/50"></div>
              <div className="w-3 h-0.5 bg-muted/50"></div>
              <div className="w-3 h-0.5 bg-muted/50"></div>
            </div>

            <div className="ml-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Viewing</h3>
              <p className="text-sm text-muted-foreground mb-6 italic">Drop us a line...</p>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Message</label>
                  <textarea
                    placeholder="Tell us about your interests..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    style={{ fontFamily: 'inherit' }}
                  />
                </div>
                <Button className="w-full rounded-xl">
                  Request Appointment
                </Button>
              </form>

              {/* Gallery info at bottom */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-sm text-muted-foreground">789 Art District, Gallery Row, NY 10001</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <p className="text-sm text-muted-foreground">Tue-Sun: 10am-6pm, Closed Monday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
