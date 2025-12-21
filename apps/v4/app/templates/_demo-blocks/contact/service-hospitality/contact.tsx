"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceHospitality() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-light tracking-[0.4em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Plan Your Stay
            </h2>
            <p className="text-muted-foreground text-lg">
              Our concierge team is ready to assist with reservations, special requests, and curating your perfect experience.
            </p>
          </div>

          {/* Luxury hotel concierge desk */}
          <div className={`${cardBg} rounded-3xl border border-border p-8 md:p-12`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-muted/50 border border-border mb-4">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-sm font-light text-foreground">5-Star Service</span>
              </div>
              <h3 className="text-2xl font-light text-foreground mb-2">Concierge Services</h3>
              <p className="text-sm text-muted-foreground">Available 24/7 for our guests</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Check-in</label>
                    <input
                      type="date"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Check-out</label>
                    <input
                      type="date"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-light text-foreground mb-2 block">Special Requests</label>
                  <textarea
                    placeholder="Room preferences, dietary requirements, celebration occasions..."
                    rows={4}
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
              </div>

              <Button className="w-full rounded-2xl py-6 font-light">
                Request Booking
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-2 gap-6 text-center sm:text-left">
              <div>
                <p className="text-sm font-light text-muted-foreground mb-1">Location</p>
                <p className="text-sm text-foreground">1 Grand Avenue, Waterfront</p>
              </div>
              <div>
                <p className="text-sm font-light text-muted-foreground mb-1">Direct Line</p>
                <p className="text-sm text-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
