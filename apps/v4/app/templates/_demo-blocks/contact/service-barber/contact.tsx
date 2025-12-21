"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceBarber() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Appointment
            </h2>
            <p className="text-muted-foreground text-lg">
              Walk-ins welcome, but appointments are recommended. Reach out to schedule your next cut.
            </p>
          </div>

          {/* Vintage appointment book style */}
          <div className={`${cardBg} rounded-xl border-2 border-border p-8`}>
            {/* Appointment book header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-border">
              <div className="w-16 h-16 rounded-lg bg-muted/50 border-2 border-border flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Appointment Book</h3>
                <p className="text-sm text-muted-foreground">Reserve your spot</p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-foreground mb-2 block">Service</label>
                <select className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Haircut</option>
                  <option>Haircut + Beard Trim</option>
                  <option>Shave</option>
                  <option>Beard Trim</option>
                  <option>Kids Cut</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-foreground mb-2 block">Preferred Date & Notes</label>
                <textarea
                  placeholder="Preferred date and service notes..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-lg font-bold">
                Book Now
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t-2 border-border grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-foreground mb-1">The Shop</p>
                <p className="text-sm text-muted-foreground">456 Main Street, Downtown</p>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">Hours</p>
                <p className="text-sm text-muted-foreground">Tue-Sat: 9am-7pm, Sun: 10am-4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
