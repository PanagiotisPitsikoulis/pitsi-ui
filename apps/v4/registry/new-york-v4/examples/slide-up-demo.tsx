"use client"

import SlideUp from "@/registry/new-york-v4/animations/slide-up/slide-up"

export default function SlideUpDemo() {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-8 bg-gradient-to-t from-indigo-900 to-purple-900 p-8">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[0, 0.1, 0.2].map((delay, i) => (
          <SlideUp key={i} delay={delay}>
            <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <span className="text-xl font-semibold text-white">
                Card {i + 1}
              </span>
            </div>
          </SlideUp>
        ))}
      </div>

      <SlideUp delay={0.3}>
        <p className="max-w-md text-center text-lg text-purple-200">
          Elements smoothly rise up into view with elegant timing
        </p>
      </SlideUp>

      <SlideUp delay={0.4}>
        <h1 className="text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
          Slide Up
        </h1>
      </SlideUp>
    </div>
  )
}
