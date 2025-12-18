"use client"

import Link from "next/link"

import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function CTASection() {
  return (
    <section className="container px-6">
      <div className="relative flex min-h-[400px] items-center justify-center md:min-h-[450px]">
        {/* CTA Content - centered */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="display text-4xl tracking-tight md:text-6xl lg:text-7xl">
            Start creating
          </h2>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-muted-foreground mx-auto max-w-md text-xl md:text-2xl">
            No accounts. No setup. <br />
            Just click and start creating.
          </p>
          <Spacer size="2xl" sizeMobile="xl" />
          <Link href="/tools">
            <HeroButton>Explore All Tools</HeroButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
