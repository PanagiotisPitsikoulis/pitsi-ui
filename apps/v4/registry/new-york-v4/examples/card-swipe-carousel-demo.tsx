"use client"

import dynamic from "next/dynamic"

const Skiper48 = dynamic(
  () =>
    import("@/registry/new-york-v4/animations/card-swipe-carousel/card-swipe-carousel").then(
      (mod) => mod.Skiper48
    ),
  { ssr: false }
)

export default function CardSwipeCarouselDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <Skiper48 />
    </div>
  )
}
