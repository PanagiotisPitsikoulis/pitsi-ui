import { IconArrowDown } from "@tabler/icons-react"

import TextParallax from "@/registry/new-york-v4/animations/text-parallax/text-parallax"

export default function TextParallaxDemo() {
  return (
    <div className="flex min-h-[1200px] w-full flex-col p-8">
      {/* Scroll indicator */}
      <div className="flex animate-bounce flex-col items-center justify-center gap-2 py-12">
        <p className="text-muted-foreground text-sm">Scroll down</p>
        <IconArrowDown className="text-muted-foreground size-5" />
      </div>

      {/* Empty space to enable scrolling */}
      <div className="flex-1" />

      {/* Animation demo */}
      <div className="flex min-h-[400px] w-full items-center justify-center">
        <TextParallax>
          <div className="bg-card rounded-lg border p-8 text-center">
            <h3 className="text-2xl font-bold">Text Parallax Animation</h3>
            <p className="text-muted-foreground mt-2">
              Text elements move with staggered parallax effect
            </p>
          </div>
        </TextParallax>
      </div>

      {/* Bottom space */}
      <div className="h-96" />
    </div>
  )
}
