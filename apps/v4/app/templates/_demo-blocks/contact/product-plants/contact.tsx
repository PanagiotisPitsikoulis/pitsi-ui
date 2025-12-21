"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductPlants() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Plant Questions? We're Here
            </h2>
            <p className="text-muted-foreground text-lg">
              Need plant care advice or have questions about your order? Our plant experts are ready to help.
            </p>
          </div>

          {/* Greenhouse visit scheduler */}
          <div className={`${cardBg} rounded-2xl border-2 border-border p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Schedule Greenhouse Visit</h3>
                <p className="text-sm text-muted-foreground">Book a tour or consultation with our plant specialists</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Visit Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Greenhouse Tour</option>
                    <option>Plant Consultation</option>
                    <option>Care Workshop</option>
                    <option>Private Event</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">What can we help you with?</label>
                <textarea
                  placeholder="Tell us about your plant interests or questions..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-xl">
                Book Visit
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Nursery</p>
                    <p className="text-xs text-muted-foreground">234 Greenhouse Lane</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">care@rareplants.co</p>
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
