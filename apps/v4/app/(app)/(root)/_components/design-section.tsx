"use client"

import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"

import { StripeBgGuides } from "./striped-bg-guides"

export function DesignSection() {
  return (
    <div className="bg-background relative isolate flex flex-col overflow-hidden">
      <StripeBgGuides darkMode contained zIndex={999} glowOpacity={0.8} />
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
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover brightness-[0.8] saturate-0"
          />
          <img
            src="/marketing/woman-museum.png"
            alt="Museum"
            className="pointer-events-none absolute inset-0 z-50 h-full w-full object-cover brightness-[0.8] saturate-0"
          />
          <div className="relative z-10 container px-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Hero text - centered */}
              <div className="col-span-6 flex flex-col items-center gap-2 md:gap-4 text-center">
                <p className="text-sm font-medium tracking-widest uppercase">
                  Where Engineering Meets Aesthetics
                </p>
                <h2 className="display text-[12vw] leading-[0.85] tracking-tight md:text-[8vw]">
                  Unparalleled
                </h2>
                <div className="flex items-center">
                  <h2 className="display text-[12vw] leading-[0.85] tracking-tight md:text-[8vw]">
                    Po
                  </h2>
                  <div className="w-0 md:w-32 lg:w-40" />
                  <h2 className="display text-[12vw] leading-[0.85] tracking-tight md:text-[8vw]">
                    lish
                  </h2>
                </div>
              </div>
              {/* Small text - left 2 columns */}
              <div className="col-span-6 mt-16 flex flex-col items-start md:col-span-2">
                <p className="text-xs">Every detail considered.</p>
                <p className="text-xs">
                  From typography to color, spacing to motion.
                </p>
              </div>
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
            alt="Mountain landscape"
            className="absolute inset-0 h-full w-full"
            imageClassName="brightness-[0.3] saturate-0"
            range={["-5%", "5%"]}
            offset={["start end", "end start"]}
          />
          <div className="relative z-10 container flex h-full flex-col justify-end px-6 py-16">
            {/* Main content - Title left, Problem/Solution right */}
            <div className="grid grid-cols-6 items-end gap-6">
              {/* Left column - Title & Philosophy */}
              <div className="col-span-6 md:col-span-4">
                <p className="mb-1 text-sm font-medium tracking-widest text-zinc-400 uppercase md:text-[10px]">
                  Teaches you how to design
                </p>
                <h2 className="display text-4xl leading-[0.95] text-white md:text-[3vw] md:font-medium md:uppercase">
                  Built-in taste
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-400 mix-blend-difference">
                  Maybe you're not a designer. You don't need to be. We've made
                  hundreds of design decisions so you don't have to.
                </p>
                <div className="mt-10 hidden flex-wrap gap-4 text-[9px] tracking-wider text-white uppercase md:flex">
                  <span>65+ Components</span>
                  <span>·</span>
                  <span>Zero design skills needed</span>
                  <span>·</span>
                  <span>Infinite combinations</span>
                </div>
              </div>

              {/* Right column - Problem & Solution */}
              <div className="col-span-6 md:col-span-2">
                <div className="space-y-5">
                  {/* The Problem */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-px flex-1 bg-zinc-700" />
                      <p className="text-[11px] font-medium tracking-widest text-white uppercase md:text-[10px]">
                        The Problem
                      </p>
                    </div>
                    <p className="text-[15px] leading-relaxed text-zinc-300 md:text-xs">
                      Every developer has been there. You have the technical
                      skills to build anything, but when it comes to making it
                      look good, something always feels off. Too many choices,
                      not enough <span className="text-white font-medium">constraints</span>.
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">73%</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        say design is<br/>their weakness
                      </p>
                    </div>
                    <div className="text-center border-x border-zinc-700">
                      <p className="text-2xl font-light text-white md:text-lg">4h+</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        tweaking UI<br/>per feature
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">#1</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        pain point<br/>for solo devs
                      </p>
                    </div>
                  </div>

                  {/* The Solution */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-px flex-1 bg-zinc-700" />
                      <p className="text-[11px] font-medium tracking-widest text-white uppercase md:text-[10px]">
                        The Solution
                      </p>
                    </div>
                    <p className="text-[15px] leading-relaxed text-zinc-300 md:text-xs">
                      Pitsi UI gives you <span className="text-white font-medium">ready-made blocks</span>, composable components,
                      and guides. Customizable, but with <span className="text-white">just enough options</span>—so
                      it can't look ugly. Swap images, change colors, make it yours.
                    </p>
                  </div>

                  {/* Solution Stats Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">50+</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        design decisions<br/>made for you
                      </p>
                    </div>
                    <div className="text-center border-x border-zinc-700">
                      <p className="text-2xl font-light text-white md:text-lg">1000+</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        ready to use<br/>assets
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">8px</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        spacing grid<br/>system
                      </p>
                    </div>
                  </div>

                  {/* AI Section */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-px flex-1 bg-zinc-700" />
                      <p className="text-[11px] font-medium tracking-widest text-white uppercase md:text-[10px]">
                        AI-friendly design
                      </p>
                    </div>
                    <p className="text-[15px] leading-relaxed text-zinc-300 md:text-xs">
                      Give your AI the tools to <span className="text-white font-medium">actually design</span>.
                      Create sections, improve layouts, get feedback, and compose full pages
                      with <span className="text-white">consistent, professional results</span>. Slop-proof.
                    </p>
                  </div>

                  {/* AI Stats Row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">MCP</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        server<br/>included
                      </p>
                    </div>
                    <div className="text-center border-x border-zinc-700">
                      <p className="text-2xl font-light text-white md:text-lg">AI</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        friendly<br/>docs
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-white md:text-lg">TS</p>
                      <p className="text-[10px] text-white uppercase tracking-wider leading-tight md:text-[8px]">
                        props for<br/>blocks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PerspectiveSection>
      </PerspectiveContainer>

      {/* Design System Section */}
      <div className="bg-background relative min-h-screen overflow-hidden">
        <ParallaxImage
          src="/marketing/museum.jpg"
          alt="Abstract art"
          className="absolute inset-0 h-full w-full"
          imageClassName="brightness-[0.25] saturate-0"
          range={["-5%", "5%"]}
          offset={["start end", "end start"]}
        />
        <div className="relative z-10 container px-6 py-16">
          <div className="grid grid-cols-6 gap-6">
            {/* Header - left 2 columns */}
            <div className="col-span-6 mb-8 pr-8 lg:col-span-2 lg:mb-0 lg:pr-12">
              <p className="mb-1 text-sm font-medium tracking-widest text-zinc-400 uppercase">
                Advanced Theme System
              </p>
              <h2 className="display mb-6 text-4xl leading-[0.95] text-white md:text-5xl">
                Complete
                <br />
                Foundation
              </h2>
              <p className="max-w-md text-sm text-zinc-400">
                Typography, colors, spacing, and components. Everything you need
                to build consistent, beautiful interfaces.
              </p>
            </div>

            {/* Content - right 4 columns as 2x2 grid */}
            <div className="col-span-6 grid grid-cols-2 gap-6 lg:col-span-4">
              {/* Typography */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white">
                    Typography
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Beautiful text hierarchy, zero guesswork
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-bold text-white">Aa</p>
                    <p className="text-[10px] text-zinc-600">Inter Bold</p>
                  </div>
                  <div>
                    <p className="display text-4xl text-zinc-300">Aa</p>
                    <p className="text-[10px] text-zinc-600">Display</p>
                  </div>
                  <div>
                    <p className="font-mono text-4xl text-zinc-400">Aa</p>
                    <p className="text-[10px] text-zinc-600">Mono</p>
                  </div>
                  <div>
                    <p className="text-4xl text-zinc-500 italic">Aa</p>
                    <p className="text-[10px] text-zinc-600">Italic</p>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white">Colors</h3>
                  <p className="text-sm text-zinc-500">
                    Harmonious palettes that just work together
                  </p>
                </div>
                <div className="flex flex-wrap gap-y-3">
                  {/* Blue */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-blue-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-blue-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-blue-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-blue-900" />
                  </div>
                  {/* Emerald */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-emerald-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-emerald-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-emerald-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-emerald-900" />
                  </div>
                  {/* Amber */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-amber-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-amber-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-amber-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-amber-900" />
                  </div>
                  {/* Rose */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-rose-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-rose-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-rose-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-rose-900" />
                  </div>
                  {/* Violet */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-violet-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-violet-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-violet-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-violet-900" />
                  </div>
                  {/* Zinc */}
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-zinc-300" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-zinc-500" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                    <div className="size-8 rounded-full border-2 border-zinc-900 bg-zinc-800" />
                  </div>
                </div>
              </div>

              {/* Separator between rows */}
              <div className="col-span-2 border-t border-zinc-700/50" />

              {/* Spacing */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white">Spacing</h3>
                  <p className="text-sm text-zinc-500">
                    Consistent rhythm without the math
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">4px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">8px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">12px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">16px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">20px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">24px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">32px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">40px</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-sm bg-zinc-500" />
                    <span className="text-[10px] text-zinc-600">48px</span>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white">
                    Components
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Production-ready, no styling required
                  </p>
                </div>
                <div className="space-y-2.5">
                  {/* Buttons */}
                  <div className="flex flex-wrap gap-1.5">
                    <div className="rounded-md bg-white px-2 py-0.5 text-[10px] font-medium leading-none text-zinc-900">
                      Button
                    </div>
                    <div className="rounded-md border border-zinc-600 px-2 py-0.5 text-[10px] font-medium leading-none text-white">
                      Outline
                    </div>
                    <div className="rounded-md bg-blue-500 px-2 py-0.5 text-[10px] font-medium leading-none text-white">
                      Primary
                    </div>
                    <div className="rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] font-medium leading-none text-zinc-400">
                      Ghost
                    </div>
                  </div>
                  {/* Input & Select */}
                  <div className="flex gap-2">
                    <div className="h-7 flex-1 rounded-md border border-zinc-700 bg-zinc-900/50" />
                    <div className="flex h-7 items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900/50 px-2">
                      <span className="text-[10px] text-zinc-400">Select</span>
                      <span className="text-[8px] text-zinc-600">▼</span>
                    </div>
                  </div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    <div className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-medium text-emerald-400">
                      Completed
                    </div>
                    <div className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[9px] font-medium text-amber-400">
                      Pending
                    </div>
                    <div className="rounded-full bg-rose-500/20 px-2 py-0.5 text-[9px] font-medium text-rose-400">
                      Cancelled
                    </div>
                    <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] font-medium text-blue-400">
                      New
                    </div>
                  </div>
                  {/* Toggle, Checkbox, Radio, Slider */}
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-8 rounded-full bg-blue-500 p-0.5">
                      <div className="ml-auto h-3 w-3 rounded-full bg-white" />
                    </div>
                    <div className="flex h-4 w-4 items-center justify-center rounded border border-zinc-600 bg-blue-500 text-[10px] text-white">
                      ✓
                    </div>
                    <div className="h-4 w-4 rounded-full border-2 border-zinc-600">
                      <div className="m-0.5 h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <div className="relative h-1 w-12 rounded-full bg-zinc-700">
                      <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow" />
                    </div>
                  </div>
                  {/* Avatar stack & Tooltip */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-blue-500" />
                      <div className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-emerald-500" />
                      <div className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-amber-500" />
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-700 text-[9px] text-white">
                        +3
                      </div>
                    </div>
                    <div className="rounded bg-zinc-800 px-2 py-1 text-[9px] text-white">
                      Tooltip
                    </div>
                  </div>
                  {/* Progress */}
                  <div className="h-1.5 w-full rounded-full bg-zinc-800">
                    <div className="h-full w-2/3 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>

              {/* Separator before Layout */}
              <div className="col-span-2 border-t border-zinc-700/50" />

              {/* Layout - spans 2 columns */}
              <div className="col-span-2 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white">Layout</h3>
                  <p className="text-sm text-zinc-500">
                    Pixel-perfect layouts, effortlessly
                  </p>
                </div>
                <div className="flex gap-3">
                  {/* Grid example */}
                  <div className="flex-1 rounded-lg border border-zinc-700/50 bg-zinc-800/30 p-3">
                    <div className="grid grid-cols-6 gap-1.5">
                      <div className="col-span-2 h-8 rounded bg-zinc-700" />
                      <div className="col-span-4 h-8 rounded bg-zinc-700" />
                      <div className="col-span-3 h-8 rounded bg-zinc-700" />
                      <div className="col-span-3 h-8 rounded bg-zinc-700" />
                      <div className="col-span-6 h-8 rounded bg-zinc-700" />
                    </div>
                  </div>
                  {/* Container example */}
                  <div className="flex-1 rounded-lg border border-zinc-700/50 bg-zinc-800/30 p-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex gap-1.5">
                        <div className="h-8 w-8 shrink-0 rounded bg-zinc-700" />
                        <div className="h-8 flex-1 rounded bg-zinc-700" />
                      </div>
                      <div className="h-16 rounded bg-zinc-700" />
                      <div className="flex gap-1.5">
                        <div className="h-8 flex-1 rounded bg-zinc-700" />
                        <div className="h-8 flex-1 rounded bg-zinc-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
