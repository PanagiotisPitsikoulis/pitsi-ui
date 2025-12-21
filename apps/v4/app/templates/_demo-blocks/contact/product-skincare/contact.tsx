"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductSkincare() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-light tracking-[0.3em] uppercase mb-4">Connect</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Skincare Consultation
            </h2>
            <p className="text-muted-foreground text-lg">
              Our skincare specialists are here to help you find your perfect routine.
            </p>
          </div>

          {/* Clean beauty appointment style */}
          <div className={`${cardBg} rounded-3xl border border-border p-8 md:p-12`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-light text-foreground">Accepting New Clients</span>
              </div>
              <h3 className="text-2xl font-light text-foreground mb-2">Book Your Consultation</h3>
              <p className="text-sm text-muted-foreground">Complimentary skin analysis included</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-light text-foreground mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-light text-foreground mb-2 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-light text-foreground mb-2 block">Skin Concerns</label>
                  <textarea
                    placeholder="Tell us about your skin concerns..."
                    rows={4}
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
              </div>

              <Button className="w-full rounded-2xl py-6 font-light">
                Book Consultation
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-2 gap-6 text-center sm:text-left">
              <div>
                <p className="text-sm font-light text-muted-foreground mb-1">Location</p>
                <p className="text-sm text-foreground">567 Beauty Boulevard, Beverly Hills</p>
              </div>
              <div>
                <p className="text-sm font-light text-muted-foreground mb-1">Contact</p>
                <p className="text-sm text-foreground">glow@puraskin.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
