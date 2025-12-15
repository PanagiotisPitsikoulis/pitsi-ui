"use client"

import * as React from "react"
import { useRef, useState } from "react"

import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { TextGradientOpacity } from "@/registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity"
import {
  HorizontalScrollContainer,
  HorizontalSlide,
} from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

import { StripeBgGuides } from "@/components/layout/striped-bg-guides"

// Featured blocks for the design showcase grid
const DESIGN_BLOCKS = [
  "marketing-gallery-gallery-section-with-innovation",
  "marketing-hero-section-accommodation-businesses-hero-section",
  "marketing-blogs-news-alternate-blog-post",
  "marketing-hero-section-accommodation-hero-section-with-social-icons",
  "marketing-portfolio-tailwind-css-portfolio-with-product-or-project-s-features",
  "e-commerce-refund-status-refund-status-with-order-summary",
]

function RegistryBlockPreview({
  name,
  className = "",
}: {
  name: string
  className?: string
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  React.useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "200px",
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  const desktopScale = 0.25
  const mobileScale = 0.2
  const scale = isMobile ? mobileScale : desktopScale
  const sizeMultiplier = 1 / scale

  return (
    <div
      ref={containerRef}
      className={`bg-background relative aspect-video w-full overflow-hidden ${className}`}
    >
      {isInView && (
        <>
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Spinner className="size-4" />
            </div>
          )}
          <iframe
            src={`/view/new-york-v4/${name}`}
            className="h-full w-full origin-top-left"
            style={{
              transform: `scale(${scale})`,
              width: `${sizeMultiplier * 100}%`,
              height: `${sizeMultiplier * 100}%`,
            }}
            onLoad={() => setIsLoading(false)}
            scrolling="no"
          />
        </>
      )}
    </div>
  )
}

export function DesignSection() {
  return (
    <div id="design" className="bg-background relative isolate flex flex-col overflow-hidden">
      <StripeBgGuides contained glowOpacity={0.8} />

      {/* Intro Section */}
      <div className="relative flex min-h-[32rem] md:min-h-svh flex-col items-center justify-start gap-6 pt-16 pb-[10vh] text-center">
        <ParallaxImage
          src="/marketing/man-sky.webp"
          alt="Museum"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          imageClassName="object-cover object-bottom"
          range={["-5%", "5%"]}
          offset={["start end", "end start"]}
        />
        <ParallaxImage
          src="/marketing/man-sky-no-bg.webp"
          alt="Museum"
          className="pointer-events-none absolute inset-0 z-50 h-full w-full"
          imageClassName="object-cover object-bottom"
          range={["-5%", "5%"]}
          offset={["start end", "end start"]}
        />
        <div className="relative z-10 container px-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 flex flex-col items-center gap-2 text-center text-shadow-xs md:gap-4">
              <p className="text-sm font-medium tracking-widest text-white uppercase">
                Where Engineering Meets Aesthetics
              </p>
              <h2 className="display text-[12vw] leading-[0.85] tracking-tight text-white md:text-[8vw]">
                Unparalleled
              </h2>
              <div className="flex items-center">
                <h2 className="display text-[12vw] leading-[0.85] tracking-tight text-white md:text-[8vw]">
                  Design
                </h2>
              </div>
            </div>
            <div className="col-span-6 mt-16 flex flex-col items-start md:col-span-2">
              <p className="text-base text-white text-shadow-2xs">
                Every detail considered.
              </p>
              <p className="text-base text-white text-shadow-2xs">
                From typography to color, spacing to motion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Parallax - The Problem */}
      <HorizontalScrollContainer className="bg-background relative flex min-h-[50vh] md:min-h-[80vh] flex-col justify-center overflow-hidden py-12 md:py-24">
        <HorizontalSlide
          direction="left"
          distance={400}
          className="text-foreground/5 display text-[20vw] leading-none font-bold tracking-tighter whitespace-nowrap"
        >
          HOURS WASTED • STILL LOOKS OFF • HOURS WASTED •
        </HorizontalSlide>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-6 text-center">
            <p className="text-brand mb-4 text-xs font-medium tracking-widest uppercase">
              We Get It
            </p>
            <h2 className="display text-foreground mx-auto max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
              You&apos;re not a designer.
              <br />
              <span className="text-foreground">
                That&apos;s the point.
              </span>
            </h2>
          </div>
        </div>
        <HorizontalSlide
          direction="right"
          distance={400}
          className="text-foreground/5 display text-[20vw] leading-none font-bold tracking-tighter whitespace-nowrap"
        >
          SOMETHING&apos;S WRONG • CAN&apos;T TELL WHAT • SOMETHING&apos;S WRONG •
        </HorizontalSlide>
      </HorizontalScrollContainer>

      {/* Text Gradient Opacity - The Solution */}
      <div className="bg-muted relative min-h-[40vh] md:min-h-[70vh] overflow-hidden">
        <div className="relative flex min-h-[40vh] md:min-h-[70vh] items-center py-12 md:py-24">
          <div className="container px-6">
            <p className="text-brand mb-6 text-xs font-medium tracking-widest uppercase">
              Every Pixel Already Considered
            </p>
            <TextGradientOpacity
              text="Obsessive whitespace. Intentional contrast. Rhythm in every layout. Components with soul — designed by humans who sweat the details, so you don't have to."
              className="[&_p]:text-foreground [&_p]:text-3xl [&_p]:leading-tight [&_p]:font-normal md:[&_p]:text-5xl lg:[&_p]:text-6xl"
            />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <HorizontalScrollContainer className="bg-muted relative flex min-h-[50vh] md:min-h-[80vh] flex-col justify-center overflow-hidden py-12 md:py-24">
        <HorizontalSlide
          direction="left"
          distance={400}
          className="text-foreground/5 display text-[20vw] leading-none font-bold tracking-tighter whitespace-nowrap"
        >
          PIXEL PERFECT • CLEAN LAYOUTS • PRO QUALITY •
        </HorizontalSlide>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-6 text-center">
            <p className="text-brand mb-4 text-xs font-medium tracking-widest uppercase">
              Level Up Your Project's Design
            </p>
            <h2 className="display text-foreground mx-auto max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Ship work you&apos;re proud of.
              <br />
              <span className="text-foreground">
                Finally.
              </span>
            </h2>
          </div>
        </div>
        <HorizontalSlide
          direction="right"
          distance={400}
          className="text-foreground/5 display text-[20vw] leading-none font-bold tracking-tighter whitespace-nowrap"
        >
          DESIGN SYSTEM • VISUAL POLISH • ZERO COMPROMISES •
        </HorizontalSlide>
      </HorizontalScrollContainer>

      {/* Blocks Grid with Fade */}
      <div className="relative z-50 overflow-hidden py-10 md:py-20">
        <div className="container px-6">
          {/* Design Explained */}
          <div className="grid grid-cols-6 gap-6 mb-10 md:mb-16">
            <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
              <div>
                <h3 className="capitalize font-medium md:mb-2 md:text-xl">
                  Typography
                  <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Carefully crafted type scales, line heights, and letter spacing
                  that make your content effortlessly readable.
                </p>
              </div>
            </div>
            <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
              <div>
                <h3 className="capitalize font-medium md:mb-2 md:text-xl">
                  Spacing & Rhythm
                  <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Consistent spacing tokens and vertical rhythm throughout.
                  Everything aligns, nothing feels off.
                </p>
              </div>
            </div>
            <div className="relative col-span-6 flex gap-3 rounded-lg border-dashed md:col-span-2 md:block md:border-l md:p-5">
              <div>
                <h3 className="capitalize font-medium md:mb-2 md:text-xl">
                  Color & Contrast
                  <span className="bg-brand absolute -left-px hidden h-6 w-px md:inline-block"></span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Accessible color palettes with perfect contrast ratios.
                  Light and dark modes that actually look good.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {DESIGN_BLOCKS.map((blockName) => (
                <RegistryBlockPreview
                  key={blockName}
                  name={blockName}
                  className="rounded-2xl border shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
