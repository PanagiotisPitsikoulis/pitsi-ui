"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { BlockThemeWrapper } from "../../_components"
import { ImageOverlay } from "../../_block_components"

export function ContactServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Side */}
          <div className="order-2 lg:order-1 lg:py-8">
            <p className="text-brand-complementary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              Get In Touch
            </p>
            <h2 className="font-display text-foreground mb-4 text-4xl font-bold lg:text-5xl">
              Grow With Us
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Expert guidance for every plant parent, from beginner to pro.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className={cn(
                    "border-border text-foreground w-full border-b bg-transparent py-4 transition-colors",
                    "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none"
                  )}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className={cn(
                    "border-border text-foreground w-full border-b bg-transparent py-4 transition-colors",
                    "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none"
                  )}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className={cn(
                    "border-border text-foreground w-full border-b bg-transparent py-4 transition-colors",
                    "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none"
                  )}
                />
              </div>

              <div>
                <textarea
                  placeholder="What plants are you interested in? Any questions about care?"
                  rows={4}
                  className={cn(
                    "border-border text-foreground w-full resize-none border-b bg-transparent py-4 transition-colors",
                    "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none"
                  )}
                />
              </div>

              <div className="flex items-center gap-3">
                <Button className="flex-1 rounded-full py-6 text-base font-medium">
                  Get Plant Advice
                </Button>
                <Button
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-full bg-brand-complementary text-background hover:bg-brand-complementary/90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Button>
                <Button
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-full bg-brand-complementary text-background hover:bg-brand-complementary/90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Button>
                <Button
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-full bg-brand-complementary text-background hover:bg-brand-complementary/90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Button>
              </div>

              <p className="text-muted-foreground text-center text-sm">
                Or email us at{" "}
                <a
                  href="mailto:greenhouse@botanicals.com"
                  className="text-brand-complementary hover:underline"
                >
                  greenhouse@botanicals.com
                </a>
              </p>
            </form>
          </div>

          {/* Image & Testimonial Side */}
          <BlockThemeWrapper
            slug="service-plants"
            tint="deep"
            forceDark
            className="order-1 aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[700px]"
          >
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/5.webp"
              alt="Beautiful indoor plants"
              fill
              className="select-none pointer-events-none object-cover"
            />
            <ImageOverlay opacity={50} />

            {/* Testimonial overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-12">
              <svg
                className="mb-4 h-8 w-8 text-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              <p className="mb-6 text-xl font-normal leading-relaxed text-foreground lg:text-2xl">
                "I killed every plant I touched until I found this shop. Now my
                apartment is a jungle! The care guides changed everything."
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-foreground/40">
                  <Image draggable={false}
                    src="/avatars/08.webp"
                    alt="Alex Thompson"
                    fill
                    className="select-none pointer-events-none object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alex Thompson</p>
                  <p className="text-sm text-foreground/90">
                    Plant Parent Since 2023
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-foreground/30 pt-8">
                <div>
                  <p className="text-2xl font-medium text-foreground lg:text-3xl">
                    1000+
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">Varieties</p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-foreground lg:text-3xl">
                    Free
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">Care Guide</p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-foreground lg:text-3xl">
                    Expert
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">Advice</p>
                </div>
              </div>
            </div>
          </BlockThemeWrapper>
        </div>
      </div>
    </section>
  )
}
