"use client"

import {
  SmoothParallaxContainer,
  SmoothParallaxLayer,
} from "@/registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll"

export default function SmoothParallaxScrollDemo() {
  return (
    <SmoothParallaxContainer height="300vh" className="bg-black">
      {/* Background layer */}
      <SmoothParallaxLayer
        yRange={[-100, 0]}
        zIndex={0}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Mountains background"
          className="h-full w-full object-cover opacity-40"
        />
      </SmoothParallaxLayer>

      {/* Mid layer - mountains with scale */}
      <SmoothParallaxLayer
        yRange={[-200, 0]}
        scaleRange={[1, 1.2]}
        zIndex={10}
        className="absolute inset-x-0 bottom-0 flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=800&fit=crop"
          alt="Mountain peaks"
          className="h-[60vh] w-full object-cover object-bottom"
        />
      </SmoothParallaxLayer>

      {/* Foreground text */}
      <SmoothParallaxLayer
        yRange={[-400, 0]}
        opacityRange={[1, 1, 0.5, 0]}
        opacityInputRange={[0, 0.3, 0.6, 1]}
        zIndex={20}
        className="relative text-center"
      >
        <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
          PARALLAX
        </h1>
        <p className="mt-4 text-xl text-white/60">Smooth scrolling layers</p>
      </SmoothParallaxLayer>

      {/* Floating cards */}
      <SmoothParallaxLayer
        yRange={[-300, 0]}
        zIndex={30}
        className="absolute top-[20%] left-[10%]"
      >
        <div className="h-32 w-24 rounded-xl bg-white/10 backdrop-blur-sm" />
      </SmoothParallaxLayer>

      <SmoothParallaxLayer
        yRange={[-500, 0]}
        zIndex={30}
        className="absolute top-[30%] right-[15%]"
      >
        <div className="h-40 w-32 rounded-xl bg-white/10 backdrop-blur-sm" />
      </SmoothParallaxLayer>

      <SmoothParallaxLayer
        yRange={[-150, 0]}
        zIndex={30}
        className="absolute bottom-[20%] left-[20%]"
      >
        <div className="h-24 w-36 rounded-xl bg-white/10 backdrop-blur-sm" />
      </SmoothParallaxLayer>

      {/* Content section - positioned after sticky container */}
      <div className="absolute right-0 bottom-0 left-0 z-40 flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Depth Through Motion
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Multiple layers moving at different speeds create a sense of depth
            and immersion as you scroll through the page.
          </p>
        </div>
      </div>
    </SmoothParallaxContainer>
  )
}
