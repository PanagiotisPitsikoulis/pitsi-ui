import { IconArrowDown } from "@tabler/icons-react"

import ScrollFade from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"

export default function ScrollFadeDemo() {
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
        <ScrollFade>
          <div className="bg-card rounded-lg border p-8 text-center">
            <h3 className="text-2xl font-bold">Scroll Fade Animation</h3>
            <p className="text-muted-foreground mt-2">
              This element fades in as you scroll
            </p>
          </div>
        </ScrollFade>
      </div>

      {/* Bottom space */}
      <div className="h-96" />
    </div>
  )
}
