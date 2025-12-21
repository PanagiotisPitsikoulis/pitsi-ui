"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactAISciFi() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-5xl">
          {/* Holographic terminal header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">{">"} contact.init</p>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mb-6">
              Establish Connection
            </h2>
            <p className="text-muted-foreground text-lg font-mono">
              Ready to enter the next dimension? Our neural network operators are standing by.
            </p>
          </div>

          {/* Futuristic panel grid */}
          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <div className={`${cardBg} border border-border rounded-lg p-6`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-mono font-semibold text-sm text-foreground">{">"} COORDINATES</h3>
              </div>
              <p className="text-muted-foreground font-mono text-sm">Sector 7, Grid 42</p>
              <p className="text-muted-foreground font-mono text-sm">Neo Tokyo</p>
            </div>
            <div className={`${cardBg} border border-border rounded-lg p-6`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-mono font-semibold text-sm text-foreground">{">"} DATA LINK</h3>
              </div>
              <p className="text-muted-foreground font-mono text-sm">uplink@synthetic</p>
              <p className="text-muted-foreground font-mono text-sm">.reality</p>
            </div>
            <div className={`${cardBg} border border-border rounded-lg p-6`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-mono font-semibold text-sm text-foreground">{">"} STATUS</h3>
              </div>
              <p className="text-primary font-mono text-sm">ONLINE</p>
              <p className="text-muted-foreground font-mono text-sm">24/7 Active</p>
            </div>
          </div>

          {/* Main terminal form */}
          <div className={`${cardBg} rounded-lg border-2 border-primary/20 p-8`}>
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-muted/50"></div>
                <div className="w-3 h-3 rounded-full bg-muted/50"></div>
                <div className="w-3 h-3 rounded-full bg-muted/50"></div>
              </div>
              <h3 className="font-mono text-foreground ml-4">{">"} initiate_transmission.exe</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">{">"} DESIGNATION:</label>
                <input
                  type="text"
                  placeholder="Enter designation..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">{">"} NEURAL_LINK:</label>
                <input
                  type="email"
                  placeholder="your.address@network.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-sm text-muted-foreground mb-2 block">{">"} TRANSMISSION_DATA:</label>
                <textarea
                  placeholder="Enter transmission content..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none font-mono"
                />
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Button className="flex-1 rounded-lg font-mono">
                  {">"} TRANSMIT_NOW
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-mono text-xs text-muted-foreground">ENCRYPTED</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
