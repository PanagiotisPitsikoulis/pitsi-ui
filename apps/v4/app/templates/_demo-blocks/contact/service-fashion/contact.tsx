"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceFashion() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-light tracking-[0.4em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Style Consultation
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to elevate your wardrobe? Our stylists are here to help you discover your perfect look.
            </p>
          </div>

          {/* Showroom appointment elegant layout */}
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className={`${cardBg} border border-border rounded-2xl p-6 h-full`}>
                <h3 className="text-lg font-medium text-foreground mb-6">Showroom Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-light text-muted-foreground tracking-wider uppercase mb-2">Address</p>
                    <p className="text-sm text-foreground">789 Fashion Avenue</p>
                    <p className="text-sm text-muted-foreground">Style Quarter</p>
                  </div>
                  <div>
                    <p className="text-xs font-light text-muted-foreground tracking-wider uppercase mb-2">Hours</p>
                    <p className="text-sm text-foreground">By Appointment Only</p>
                    <p className="text-sm text-muted-foreground">Tue-Sat: 10am-6pm</p>
                  </div>
                  <div>
                    <p className="text-xs font-light text-muted-foreground tracking-wider uppercase mb-2">Contact</p>
                    <p className="text-sm text-foreground">style@fashionhouse.com</p>
                    <p className="text-sm text-muted-foreground">+1 (555) STYLE-ME</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-light text-muted-foreground mb-3">Services</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-muted/50 text-xs text-foreground">Personal Styling</span>
                      <span className="px-3 py-1 rounded-full bg-muted/50 text-xs text-foreground">Wardrobe Edit</span>
                      <span className="px-3 py-1 rounded-full bg-muted/50 text-xs text-foreground">Shopping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className={`${cardBg} rounded-2xl p-8 border border-border`}>
                <h3 className="text-xl font-medium text-foreground mb-6">Book a Session</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-light text-foreground mb-2 block">First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-light text-foreground mb-2 block">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                      <option>Personal Styling Session</option>
                      <option>Wardrobe Consultation</option>
                      <option>Personal Shopping</option>
                      <option>Event Styling</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Tell us about your style goals</label>
                    <textarea
                      placeholder="Share your style preferences, occasions you're dressing for, or any specific needs..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    />
                  </div>
                  <Button className="w-full rounded-xl font-light">
                    Schedule Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
