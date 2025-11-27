"use client"

import { IconArrowDown } from "@tabler/icons-react"

import ScrollFade from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"

export default function ScrollFadeDemo() {
  return (
    <div className="flex min-h-[1600px] w-full flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header section */}
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Scroll Fade
        </h1>
        <p className="text-slate-400">Keep scrolling to see the magic</p>
        <div className="mt-8 animate-bounce">
          <IconArrowDown className="size-8 text-slate-400" />
        </div>
      </div>

      {/* Fade in sections */}
      <div className="flex flex-col items-center gap-40 py-20">
        <ScrollFade>
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Smooth Transitions
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Elements gracefully fade into view as you scroll down the page
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Design", "Develop", "Deploy"].map((item, i) => (
              <div
                key={i}
                className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800"
              >
                <span className="text-xl font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              alt="Mountain landscape"
              className="h-64 w-full object-cover md:h-80 md:w-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-2xl font-bold text-white">Beautiful Views</p>
              <p className="text-slate-300">Discover the world</p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </div>
  )
}
