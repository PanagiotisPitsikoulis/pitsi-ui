"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import { KnockoutText } from "@/app/(app)/(content)/(blocks)/_block_components"
import { useScrollContainer } from "@/app/(app)/(content)/(blocks)/_components"

export function HeroServiceTravel() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Hero image slides right as user scrolls (0 to 100px)
  const heroImageX = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Compass decoration rotates as user scrolls (0deg to 25deg)
  const compassRotation = useTransform(scrollYProgress, [0, 1], [0, 25])

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-[calc(70svh+5rem)] flex-col items-center overflow-x-clip px-6 pt-48 pb-16 lg:pt-56 lg:pb-48"
    >
      {/* Background decoration - extends up behind header */}
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url('/placeholders/blocks/service-travel/assets/decoration-1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* Hero image - desktop: absolute right, slides right on scroll */}
      <motion.div
        className="pointer-events-none absolute -right-32 -bottom-32 z-0 hidden lg:block"
        style={{ x: heroImageX }}
      >
        <Image
          draggable={false}
          src="/placeholders/blocks/service-travel/subject/1.webp"
          alt="Traveler exploring scenic destination"
          width={900}
          height={1080}
          className="pointer-events-none object-contain select-none"
        />
      </motion.div>
      {/* Top left compass decoration - rotates on scroll */}
      <motion.div
        className="pointer-events-none absolute z-20 hidden lg:block"
        style={{
          top: "8rem",
          left: "-6rem",
          rotate: compassRotation,
        }}
      >
        <Image
          draggable={false}
          src="/placeholders/blocks/service-travel/assets/item-1.webp"
          alt="Compass decoration"
          width={400}
          height={400}
          className="pointer-events-none object-contain select-none"
        />
      </motion.div>
      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Tagline */}
        <p className="text-brand relative z-10 mb-6 text-sm font-medium tracking-[0.3em] uppercase">
          Travel Specialists
        </p>

        {/* Typography block with knockout effect */}
        <KnockoutText padX={40} padY={50} intensity={1}>
          {/* Main headline */}
          <h1 className="display text-center text-4xl leading-[0.9] tracking-tight text-white sm:text-5xl md:text-7xl">
            Discover the World&apos;s
            <br />
            Hidden Treasures
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-center text-lg text-white/80 md:text-2xl">
            Curated travel experiences. Expert guides.
            <br />
            Unforgettable memories await.
          </p>
        </KnockoutText>

        {/* Buttons - above blend layer */}
        <div className="relative z-10 mt-10 flex flex-row gap-3">
          <Link href="#">
            <HeroButton>Plan Your Trip</HeroButton>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="bg-background text-foreground rounded-full px-8"
          >
            View Destinations
          </Button>
        </div>
      </div>
      {/* Hero image - mobile only - extends beyond section */}
      <div className="relative z-10 mt-8 h-[500px] w-full overflow-visible lg:hidden">
        <Image
          draggable={false}
          src="/placeholders/blocks/service-travel/subject/1.webp"
          alt="Traveler exploring scenic destination"
          width={900}
          height={1080}
          className="pointer-events-none absolute top-0 left-1/2 h-[700px] w-auto -translate-x-1/2 object-contain select-none"
        />
      </div>
      <Spacer className="hidden lg:block" size={"3xl"} />
    </section>
  )
}
