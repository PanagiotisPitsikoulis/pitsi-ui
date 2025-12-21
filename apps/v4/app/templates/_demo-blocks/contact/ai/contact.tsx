"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactAI() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build The Future
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform your business with AI? Our team is here to help you get started.
            </p>
          </div>

          {/* Chat interface style */}
          <div className="space-y-4 mb-6">
            {/* AI Assistant bubble */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                </svg>
              </div>
              <div className={`${cardBg} border border-border rounded-2xl rounded-tl-sm p-4 max-w-[80%]`}>
                <p className="text-sm text-foreground mb-2">
                  Hi! I'm your AI assistant. I can help you get started with our platform.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please fill out the form below and our team will reach out within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`${cardBg} rounded-2xl p-8 border border-border`}>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
              <Button className="w-full rounded-xl">
                Schedule Demo
              </Button>
            </form>
          </div>

          {/* Contact info at bottom */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Headquarters</h3>
                <p className="text-sm text-muted-foreground">100 Innovation Drive, Tech Valley</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">hello@neuralai.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
