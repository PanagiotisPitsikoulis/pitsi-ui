"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductCoffee() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          {/* Café counter style header */}
          <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
            <div className="lg:col-span-3">
              <p className="text-primary text-sm font-light tracking-[0.4em] uppercase mb-4">Connect</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
                Let's Talk Coffee
              </h2>
              <p className="text-muted-foreground">
                Questions about our beans, brewing methods, or wholesale inquiries? We'd love to hear from you.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className={`${cardBg} border border-border rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wide text-foreground text-sm">Roastery</h3>
                    <p className="text-xs text-muted-foreground">88 Roaster Row</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium tracking-wide text-foreground text-sm">Email</h3>
                    <p className="text-xs text-muted-foreground">hello@premiumcoffee.co</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Café counter inquiry form */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className={`${cardBg} rounded-2xl p-6 border border-border`}>
              <h3 className="text-lg font-medium tracking-wide text-foreground mb-4">Quick Inquiry</h3>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                  <option>General Inquiry</option>
                  <option>Wholesale</option>
                  <option>Retail</option>
                  <option>Catering</option>
                </select>
                <Button className="w-full rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>

            <div className={`${cardBg} rounded-2xl p-6 border border-border`}>
              <h3 className="text-lg font-medium tracking-wide text-foreground mb-4">Detailed Message</h3>
              <form className="space-y-3">
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-xl">
                    Attach File
                  </Button>
                  <Button className="flex-1 rounded-xl">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
