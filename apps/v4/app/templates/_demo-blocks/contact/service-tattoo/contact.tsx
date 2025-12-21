"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceTattoo() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Book Your Ink
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to make your mark? Consultations are free. Let's discuss your custom design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Portfolio reference section */}
            <div className={`${cardBg} border-2 border-border rounded-2xl p-8`}>
              <h3 className="text-xl font-bold text-foreground mb-6">Design Inspiration</h3>
              <div className="space-y-4">
                <div className={`${cardBg} border border-border rounded-xl p-4`}>
                  <p className="text-sm font-bold text-foreground mb-2">Style Preferences</p>
                  <div className="flex flex-wrap gap-2">
                    {['Traditional', 'Realism', 'Japanese', 'Black & Grey', 'Neo-Traditional', 'Minimalist'].map((style) => (
                      <label key={style} className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-medium text-foreground cursor-pointer hover:bg-muted transition-colors">
                        <input type="checkbox" className="sr-only" />
                        {style}
                      </label>
                    ))}
                  </div>
                </div>

                <div className={`${cardBg} border border-border rounded-xl p-4`}>
                  <p className="text-sm font-bold text-foreground mb-2">Size Estimate</p>
                  <div className="grid grid-cols-3 gap-2">
                    {['Small', 'Medium', 'Large'].map((size) => (
                      <label key={size} className={`${cardBg} border border-border rounded-lg p-3 cursor-pointer hover:bg-muted transition-colors text-center`}>
                        <input type="radio" name="size" className="sr-only" />
                        <span className="text-sm font-medium text-foreground">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={`${cardBg} border border-border rounded-xl p-4`}>
                  <p className="text-sm font-bold text-foreground mb-2">Placement</p>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>Select body area</option>
                    <option>Arm</option>
                    <option>Leg</option>
                    <option>Back</option>
                    <option>Chest</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Consultation form */}
            <div className={`${cardBg} rounded-2xl p-8 border-2 border-border`}>
              <h3 className="text-xl font-bold text-foreground mb-6">Request Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-foreground mb-2 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Design Description</label>
                  <textarea
                    placeholder="Describe your tattoo idea, size, placement, and any reference images..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <p className="text-xs text-muted-foreground">Free consultation - no obligation</p>
                </div>

                <Button className="w-full rounded-lg font-bold">
                  Book Consultation
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-border">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-foreground">The Studio</p>
                  <p className="text-xs text-muted-foreground">777 Ink Street, Arts District</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-foreground">Hours</p>
                  <p className="text-xs text-muted-foreground">Tue-Sat: 12pm-10pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
