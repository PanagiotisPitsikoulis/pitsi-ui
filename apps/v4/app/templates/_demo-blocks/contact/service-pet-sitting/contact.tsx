"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServicePetSitting() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Meet Your Pet
            </h2>
            <p className="text-muted-foreground text-lg">
              Schedule a free meet & greet so your furry friend can get comfortable with us before their stay.
            </p>
          </div>

          {/* Pet profile + booking form */}
          <div className={`${cardBg} rounded-2xl border-2 border-border p-8`}>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
              <div className="w-14 h-14 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
                  <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
                  <path d="M8 14v.5M16 14v.5" />
                  <path d="M11.25 16.25h1.5L12 17l-.75-.75z" />
                  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309m-2.174-3.39l.01-.02m-9.12 3.41l-.01-.02" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Pet Care Booking</h3>
                <p className="text-sm text-muted-foreground">Tell us about your furry friend</p>
              </div>
            </div>

            <form className="space-y-6">
              {/* Owner Info */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Your Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring mt-4"
                />
              </div>

              {/* Pet Profile */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Pet Profile</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Pet's Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Pet Type</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Breed"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-4">Service Details</h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Service Type</option>
                    <option>Pet Sitting (Home)</option>
                    <option>Dog Walking</option>
                    <option>Boarding</option>
                    <option>Drop-in Visits</option>
                  </select>
                  <input
                    type="date"
                    placeholder="Start Date"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <textarea
                  placeholder="Pet details, dates, special needs, medications, feeding schedule..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-xl font-bold">
                Schedule Meet & Greet
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Service Area</p>
                  <p className="text-xs text-muted-foreground">Greater Downtown & Suburbs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Call or Text</p>
                  <p className="text-xs text-muted-foreground">+1 (555) PET-CARE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
