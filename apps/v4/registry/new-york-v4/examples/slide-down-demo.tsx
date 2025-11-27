"use client"

import SlideDown from "@/registry/new-york-v4/animations/slide-down/slide-down"

export default function SlideDownDemo() {
  return (
    <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-zinc-900 to-zinc-800 p-8">
      <SlideDown delay={0}>
        <h1 className="text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
          Slide Down
        </h1>
      </SlideDown>

      <SlideDown delay={0.1}>
        <p className="max-w-md text-center text-lg text-zinc-400">
          Elements gracefully slide down into view with a smooth animation
        </p>
      </SlideDown>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[0.2, 0.3, 0.4].map((delay, i) => (
          <SlideDown key={i} delay={delay}>
            <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <span className="text-xl font-semibold text-white">
                Card {i + 1}
              </span>
            </div>
          </SlideDown>
        ))}
      </div>
    </div>
  )
}
