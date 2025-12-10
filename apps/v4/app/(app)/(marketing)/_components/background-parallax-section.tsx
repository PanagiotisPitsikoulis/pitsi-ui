import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"

export function BackgroundParallaxSection() {
  return (
    <div className="bg-background">
      {/* Intro - Hero parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        alt="Mountain landscape"
        className="h-screen"
        range={["0vh", "50vh"]}
        offset={["start start", "end start"]}
      />

      {/* Description - Static text section */}
      <div className="flex min-h-[50vh] items-center justify-center py-20">
        <p className="text-foreground max-w-[80%] text-center text-[6vw] leading-none uppercase md:max-w-[50vw] md:text-[5vw]">
          Background Image Parallax
        </p>
      </div>

      {/* Section - Parallax with overlay content */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
        alt="Nature landscape"
        className="relative flex h-screen items-center justify-center"
        imageClassName="absolute inset-0 -top-[10vh] h-[120vh] w-full"
        range={["-10%", "10%"]}
        offset={["start end", "end start"]}
        clipPath
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20">
          <p className="w-full self-end text-sm text-white uppercase mix-blend-difference md:w-[50vw] md:text-[2vw]">
            Beauty and quality need the right time to be conceived and realised
            even in a world that is in too much of a hurry.
          </p>
          <p className="text-2xl text-white uppercase mix-blend-difference md:text-[5vw]">
            Background Parallax
          </p>
        </div>
      </ParallaxImage>

      <div className="h-[50vh]" />
    </div>
  )
}
