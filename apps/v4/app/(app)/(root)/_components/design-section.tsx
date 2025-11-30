"use client"

import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"

export function DesignSection() {
  return (
    <div className="dark bg-background flex flex-col">
      {/* Intro Section */}
      <PerspectiveContainer height="200vh">
        <PerspectiveSection
          scaleRange={[1, 0.85]}
          rotateRange={[0, -4]}
          sticky
          className="relative flex flex-col items-center justify-start gap-6 pt-16 pb-[10vh] text-center text-white"
        >
          <img
            src="/marketing/museum-3.jpg"
            alt="Museum"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover brightness-75 grayscale"
          />
          <img
            src="/marketing/woman-museum.png"
            alt="Museum"
            className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover brightness-75 grayscale"
          />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-sm font-medium tracking-widest uppercase">
              Where Engineering Meets Aesthetics
            </p>
            <h2 className="display text-[12vw] leading-[0.9] tracking-tight md:text-[8vw]">
              Unparalleled
            </h2>
            <div className="flex items-center gap-4 md:gap-6">
              <img
                src="/marketing/typography.jpg"
                alt="Typography"
                className="size-12 rounded-full object-cover md:size-20"
              />
              <h2 className="display text-[12vw] leading-[0.9] tracking-tight md:text-[8vw]">
                Po<span>---</span>lish
              </h2>
            </div>
            <div className="mt-[100px] mr-[800px] flex flex-col items-start justify-start">
              <p className="max-w-xl text-xs">Every detail considered.</p>
              <p className="max-w-xl text-xs">
                From typography to color, spacing to motion.
              </p>
            </div>
          </div>
        </PerspectiveSection>

        <PerspectiveSection
          scaleRange={[0.85, 1]}
          rotateRange={[4, 0]}
          className="relative overflow-hidden"
        >
          <ParallaxImage
            src="/marketing/museum-2.jpg"
            alt="Abstract art"
            className="absolute inset-0 h-full w-full saturate-0"
            range={["-5%", "5%"]}
            offset={["start end", "end start"]}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="max-w-2xl px-8 text-center text-2xl font-medium text-white md:text-4xl">
              Design that feels intentional
            </p>
          </div>
        </PerspectiveSection>
      </PerspectiveContainer>

      {/* Image Treatments */}
      <div className="bg-background">
        <ParallaxImage
          src="/marketing/museum.jpg"
          alt="Mountain landscape"
          className="relative flex h-screen items-center justify-center"
          imageClassName="absolute inset-0 saturate-0 -top-[10vh] h-[120vh] w-full brightness-50"
          range={["-10%", "10%"]}
          offset={["start end", "end start"]}
          clipPath
        >
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20">
            <p className="w-full self-end text-sm text-white uppercase mix-blend-difference md:w-[40vw] md:text-base">
              Professional results without the professional timeline.
            </p>
            <p className="text-2xl font-medium text-white uppercase mix-blend-difference md:text-[4vw]">
              Design excellence
            </p>
          </div>
        </ParallaxImage>
      </div>
    </div>
  )
}
