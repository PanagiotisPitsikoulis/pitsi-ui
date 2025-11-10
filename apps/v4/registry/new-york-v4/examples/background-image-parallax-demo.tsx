import { IconArrowDown } from "@tabler/icons-react"

import BackgroundImageParallax from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"

export default function BackgroundImageParallaxDemo() {
  return (
    <div className="relative min-h-[1400px]">
      {/* Scroll indicator */}
      <div className="absolute top-12 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center gap-2">
        <p className="text-sm text-white drop-shadow-lg">Scroll down</p>
        <IconArrowDown className="size-5 text-white drop-shadow-lg" />
      </div>

      {/* Empty space to enable scrolling */}
      <div className="h-96" />

      <BackgroundImageParallax
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="Mountain landscape"
        className="min-h-[600px]"
      >
        <div className="flex min-h-[600px] items-center justify-center p-8">
          <div className="bg-card/90 rounded-lg border p-8 text-center shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold">Parallax Background</h3>
            <p className="text-muted-foreground mt-2">
              Scroll to see the background move at a different speed
            </p>
          </div>
        </div>
      </BackgroundImageParallax>

      {/* Bottom space */}
      <div className="h-96" />
    </div>
  )
}
