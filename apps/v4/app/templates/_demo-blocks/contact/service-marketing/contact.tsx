"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceMarketing() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Grow Together
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to scale your brand? Get in touch for a free strategy consultation.
            </p>
          </div>

          {/* Professional business meeting scheduler */}
          <div className={`${cardBg} rounded-2xl border border-border p-8`}>
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className={`${cardBg} border border-border rounded-xl p-5 text-center`}>
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">Free Audit</p>
                <p className="text-xs text-muted-foreground mt-1">30 min call</p>
              </div>
              <div className={`${cardBg} border border-border rounded-xl p-5 text-center`}>
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">ROI Focused</p>
                <p className="text-xs text-muted-foreground mt-1">Data-driven</p>
              </div>
              <div className={`${cardBg} border border-border rounded-xl p-5 text-center`}>
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">Expert Team</p>
                <p className="text-xs text-muted-foreground mt-1">10+ years exp</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">Schedule Strategy Call</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Company</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Monthly Marketing Budget</label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                  <option>Select budget range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Project Details & Goals</label>
                <textarea
                  placeholder="Tell us about your project and goals..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>
              <Button className="w-full rounded-xl font-semibold">
                Get Free Consultation
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Headquarters</p>
                  <p className="text-xs text-muted-foreground">500 Innovation Way</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">hello@growthagency.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
