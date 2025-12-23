"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductScifi() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-primary/20">
            {/* Terminal Side - Tech Testimonial */}
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 p-12 lg:p-16 flex flex-col justify-between font-mono">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-primary/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                  <span className="text-xs text-muted-foreground ml-2">SYSTEM ACTIVE</span>
                </div>

                <div className="space-y-2 mb-8">
                  <p className="text-xs text-primary">$ client.testimonial --display</p>
                  <div className="pl-4 border-l-2 border-primary/30">
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                      "The technical support team resolved our integration issues within hours. Their deep understanding of the platform and proactive communication made the entire process seamless. Exceptional service."
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jake Kim</p>
                    <p className="text-sm text-muted-foreground">CTO, TechVenture Inc</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex justify-between">
                    <span>INTEGRATION_DATE:</span>
                    <span className="text-foreground">2024-Q1</span>
                  </p>
                  <p className="flex justify-between">
                    <span>SUPPORT_RESPONSE:</span>
                    <span className="text-primary">{"<"} 90s AVG</span>
                  </p>
                  <p className="flex justify-between">
                    <span>UPTIME_STATUS:</span>
                    <span className="text-primary">99.99%</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-2 text-xs text-muted-foreground">
                <span>COMM_LINK_ESTABLISHED</span>
                <span className="text-primary animate-pulse">█</span>
              </div>
            </div>

            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 mb-6 font-mono text-xs">
                <span className="text-primary">SUPPORT_CHANNEL</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Initialize Contact
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Our technical specialists are standing by 24/7 to assist with your device or platform inquiries.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-border py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-border py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Device serial / Account ID (optional)"
                    className="w-full bg-transparent border-b border-border py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Describe your technical issue or inquiry..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="w-full rounded-full py-6 text-base font-mono">
                  SUBMIT REQUEST
                </Button>

                <p className="text-sm text-muted-foreground text-center font-mono">
                  Emergency? <a href="mailto:support@techdevice.io" className="text-primary hover:underline">support@techdevice.io</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
