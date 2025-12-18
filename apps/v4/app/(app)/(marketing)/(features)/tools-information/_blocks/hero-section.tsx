"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroSection() {
  return (
    <div className="relative -mt-[56px] h-full w-full overflow-hidden">
      {/* Gradient header overlay */}
      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        <Spacer size={"5xl"} sizeMobile={"3xl"} />
        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight max-lg:text-[3rem] sm:text-5xl md:text-8xl">
          Powerful Tools for
          <br />
          Design Engineers
        </h1>
        <Spacer size={"2xl"} sizeMobile={"md"} />
        <p className="text-muted-foreground text-center text-lg md:text-3xl">
          Professional tools at your fingertips.
          <br />
          Design faster. Build better. For free.
        </p>
        <Spacer size={"3xl"} sizeMobile={"lg"} />
        <div className="flex flex-row gap-2">
          <Link href="/tools">
            <HeroButton>Explore Tools</HeroButton>
          </Link>
          <Link href="/">
            <Button variant="outline" size="lg" className="rounded-full">
              Back Home
            </Button>
          </Link>
        </div>
        <Spacer size={"6xl"} sizeMobile={"6xl"} />
      </div>
    </div>
  )
}
