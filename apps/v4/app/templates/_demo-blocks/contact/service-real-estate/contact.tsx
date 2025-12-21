"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceRealEstate() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Find Your Dream Home
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether buying, selling, or investing, our expert agents are here to guide you every step of the way.
            </p>
          </div>

          {/* Property viewing request form */}
          <div className={`${cardBg} rounded-2xl border border-border p-8`}>
            <div className="grid lg:grid-cols-4 gap-4 mb-8">
              {['Buy', 'Sell', 'Rent', 'Invest'].map((type) => (
                <label key={type} className={`${cardBg} border-2 border-border rounded-xl p-4 cursor-pointer hover:bg-muted transition-colors text-center`}>
                  <input type="radio" name="propertyType" className="sr-only" />
                  <svg className="w-6 h-6 text-primary mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="text-sm font-semibold text-foreground">{type}</span>
                </label>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">Property Viewing Request</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Select range</option>
                    <option>$0 - $300k</option>
                    <option>$300k - $500k</option>
                    <option>$500k - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Bedrooms</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Bathrooms</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Property Details & Preferences</label>
                <textarea
                  placeholder="Property interests, preferred areas, timeline, must-haves..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-xl font-semibold">
                Schedule Viewing
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Main Office</p>
                  <p className="text-xs text-muted-foreground">888 Property Plaza</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Call Us</p>
                  <p className="text-xs text-muted-foreground">+1 (555) HOME-NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
