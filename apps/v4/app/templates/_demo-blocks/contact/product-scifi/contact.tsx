"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductScifi() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Support</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tech Support Hub
            </h2>
            <p className="text-muted-foreground text-lg">
              Our technical specialists are available around the clock to assist with your device.
            </p>
          </div>

          {/* Comm link interface */}
          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <div className={`${cardBg} border-2 border-primary/30 rounded-xl p-4 relative`}>
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">COMM_CHANNEL_1</p>
              <p className="text-sm font-semibold text-foreground">Experience Center</p>
              <p className="text-xs text-muted-foreground mt-1">1 Innovation Plaza</p>
            </div>
            <div className={`${cardBg} border-2 border-primary/30 rounded-xl p-4 relative`}>
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">SUPPORT_STATUS</p>
              <p className="text-sm font-semibold text-foreground">24/7 Active</p>
              <p className="text-xs text-muted-foreground mt-1">All Systems Online</p>
            </div>
            <div className={`${cardBg} border-2 border-primary/30 rounded-xl p-4 relative`}>
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">RESPONSE_TIME</p>
              <p className="text-sm font-semibold text-foreground">{"<"} 2 Minutes</p>
              <p className="text-xs text-muted-foreground mt-1">Average Response</p>
            </div>
          </div>

          {/* Communication terminal */}
          <div className={`${cardBg} border-2 border-primary/20 rounded-xl p-8`}>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-lg font-semibold text-foreground">Initialize Support Request</h3>
              </div>
              <span className="text-xs font-mono text-muted-foreground">ID: #TSH-{Math.floor(Math.random() * 10000)}</span>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-2 block">USER_ID:</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                  />
                </div>
                <div>
                  <label className="text-sm font-mono text-muted-foreground mb-2 block">COMM_ADDRESS:</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">DEVICE_SERIAL:</label>
                <input
                  type="text"
                  placeholder="Device Serial Number (Optional)"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                />
              </div>

              <div>
                <label className="text-sm font-mono text-muted-foreground mb-2 block">ISSUE_DESCRIPTION:</label>
                <textarea
                  placeholder="Describe your issue..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none font-mono"
                />
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 rounded-lg font-mono">
                  Submit Ticket
                </Button>
                <Button variant="outline" className="px-6 rounded-lg font-mono">
                  Emergency Support
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
