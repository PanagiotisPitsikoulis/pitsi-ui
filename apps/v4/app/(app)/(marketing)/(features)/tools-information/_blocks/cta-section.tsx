"use client"

import Link from "next/link"

import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import EasingComposerClient from "@/app/(app)/(tools)/tools/easing-composer/page.client"
import ShadowComposerPageClient from "@/app/(app)/(tools)/tools/shadow-composer/page.client"

export function CTASection() {
  return (
    <section className="relative">
      {/* Tool Previews - positioned far off center, only edges visible */}
      <div className="pointer-events-none absolute inset-0">
        {/* Easing Composer - Left/Up */}
        <div
          className="absolute top-0 left-0 w-[70%] origin-center -translate-x-[80%] -translate-y-[15%] -rotate-6 md:-translate-x-[70%]"
          aria-hidden="true"
        >
          <div className="bg-background text-foreground dark rounded-3xl border shadow-2xl">
            <EasingComposerClient hasBackgroundDecoration={false} />
          </div>
        </div>

        {/* Shadow Composer - Right/Down */}
        <div
          className="absolute right-0 bottom-0 w-[70%] origin-center translate-x-[90%] translate-y-[15%] -rotate-6 md:translate-x-[70%] md:rotate-6"
          aria-hidden="true"
        >
          <div className="bg-background text-foreground dark rounded-3xl border shadow-2xl">
            <ShadowComposerPageClient hasBackgroundDecoration={false} />
          </div>
        </div>
      </div>

      {/* CTA Content - centered */}
      <div className="relative z-10 container flex min-h-[500px] flex-col items-center justify-center px-6 md:min-h-[600px]">
        <h2 className="display text-center text-4xl tracking-tight md:text-6xl lg:text-7xl">
          Start creating
        </h2>
        <Spacer size="lg" sizeMobile="md" />
        <p className="text-muted-foreground mx-auto max-w-md text-center text-xl md:text-2xl">
          No accounts. No setup. <br />
          Just click and start creating.
        </p>
        <Spacer size="2xl" sizeMobile="xl" />
        <Link href="/tools">
          <HeroButton>Explore All Tools</HeroButton>
        </Link>
      </div>
    </section>
  )
}
