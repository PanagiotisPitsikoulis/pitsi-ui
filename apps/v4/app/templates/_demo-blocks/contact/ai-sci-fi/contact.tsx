"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactAISciFi() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Holographic testimonial */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-3xl" />
            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/ai-sci-fi/1.webp')] bg-cover bg-center opacity-5" />

              {/* Holographic grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(100%_-_1px),hsl(var(--primary))_calc(100%_-_1px)),linear-gradient(90deg,transparent_0%,transparent_calc(100%_-_1px),hsl(var(--primary))_calc(100%_-_1px))] bg-[length:40px_40px] opacity-10" />

              <div className="relative h-full flex flex-col justify-center p-8 lg:p-12">
                <div className={`${cardBg} border border-primary/50 rounded-xl p-8 backdrop-blur-md bg-background/60 shadow-[0_0_30px_rgba(var(--primary),0.3)]`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-primary tracking-wider">{">"} TRANSMISSION_LOG</span>
                  </div>

                  <div className="font-mono text-4xl text-primary mb-4">"</div>
                  <p className="text-foreground text-base font-mono leading-relaxed mb-6">
                    The integration was seamless. Response time improved by 300%. Our system has never been more efficient.
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="font-mono text-sm text-foreground">{">"} OPERATIVE: Dr. Chen Wei</p>
                    <p className="font-mono text-xs text-muted-foreground">{">"} DESIGNATION: Chief Neural Architect</p>
                    <p className="font-mono text-xs text-muted-foreground">{">"} ENTITY: Synthetic Reality Labs</p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border/50">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-muted-foreground">STATUS: VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary tracking-wider uppercase">{">"} CONTACT.INIT</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-mono">
              Establish Connection
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-mono">
              Ready to enter the next dimension? Our neural network operators are standing by.
            </p>

            <form className="space-y-6">
              <div>
                <label className="font-mono text-xs text-primary mb-2 block">{">"} DESIGNATION</label>
                <input
                  type="text"
                  placeholder="Enter your designation"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-primary mb-2 block">{">"} NEURAL_LINK</label>
                <input
                  type="email"
                  placeholder="your.address@network.com"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-primary mb-2 block">{">"} CONTACT_FREQUENCY (optional)</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-primary mb-2 block">{">"} TRANSMISSION_DATA</label>
                <textarea
                  placeholder="Enter transmission content..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-mono"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-mono font-medium">
                {">"} TRANSMIT_NOW
              </Button>

              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-center text-xs text-muted-foreground font-mono">
                  ENCRYPTED_CHANNEL: uplink@synthetic.reality
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
