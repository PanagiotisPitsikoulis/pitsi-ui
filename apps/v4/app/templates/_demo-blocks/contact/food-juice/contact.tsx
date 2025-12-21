"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactFoodJuice() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Find Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Fresh Is Just Around The Corner
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit our juice bar or order for delivery. We're here to help you feel your best.
            </p>
          </div>

          {/* Fresh order form style */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className={`${cardBg} border border-border rounded-2xl p-6 text-center`}>
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Juice Bar</h3>
              <p className="text-sm text-muted-foreground">456 Wellness Way</p>
            </div>
            <div className={`${cardBg} border border-border rounded-2xl p-6 text-center`}>
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Open Daily</h3>
              <p className="text-sm text-muted-foreground">7am - 7pm</p>
            </div>
            <div className={`${cardBg} border border-border rounded-2xl p-6 text-center`}>
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Call to Order</h3>
              <p className="text-sm text-muted-foreground">(555) JUICE-UP</p>
            </div>
          </div>

          <div className={`${cardBg} rounded-2xl p-8 border border-border`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-foreground">Fresh</span>
                <span className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-foreground">Organic</span>
              </div>
            </div>
            <form className="space-y-4">
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
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
              <Button className="w-full rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
