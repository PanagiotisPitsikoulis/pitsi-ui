import { Metadata } from "next"

import { BackgroundImageParallax } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { TextParallax } from "@/registry/new-york-v4/animations/text-parallax/text-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Responsive } from "@/registry/new-york-v4/ui/responsive"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

const title = "The Foundation for your Design System"
const description =
  "A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default async function IndexPage() {
  "use cache"
  return (
    <div className="min-h-screen">
      {/*hero*/}
      <div className="relative -mt-[56px]">
        <div className="container flex h-full w-full flex-col items-center justify-center">
          {/*Typography*/}
          <Spacer size={"8xl"} sizeMobile={"6xl"} />
          <h1 className="text-center text-4xl leading-[0.9] xl:text-8xl">
            The Block Library
            <br />
            shadcn Deserves.
          </h1>
          <Spacer size={"xl"} sizeMobile={"md"} />
          <p className="text-muted-foreground text-center text-lg xl:text-3xl">
            Next-gen UI. 1000+ blocks.
            <br />
            Same API you already know.
          </p>
          {/*Buttons*/}
          <Spacer size={"2xl"} sizeMobile={"lg"} />
          <div className="flex flex-row gap-2">
            <Button size={"lg"} className="rounded-full xl:text-lg">
              Start Copy Pasting
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full xl:text-lg"
            >
              Get Pro
            </Button>
          </div>
          <Spacer size={"3xl"} sizeMobile={"xl"} />
          {/*Media*/}
          <Responsive
            mobile={
              <div className="grid w-full gap-4">
                {/*Card Desktop*/}
                <div className="aspect-video w-full rounded-xl border"></div>
                {/*Card Mobile*/}
                <div className="aspect-[9/16] w-full rounded-xl border"></div>
              </div>
            }
            desktop={
              <div className="grid h-[30rem] w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/*Card Desktop*/}
                <div className="rounded-xl border lg:col-span-2"></div>
                {/*Card Mobile*/}
                <div className="rounded-xl border"></div>
              </div>
            }
          />
        </div>
      </div>

      {/* Background Image Parallax Section */}
      <BackgroundImageParallax
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        alt="Mountain landscape"
        className="h-screen"
      />

      {/* Description Section */}
      <div className="flex min-h-[50vh] items-center justify-center py-20">
        <TextParallax speed={0.3} className="max-w-[80%] md:max-w-[50vw]">
          <p className="text-foreground text-center text-[6vw] leading-none uppercase md:text-[5vw]">
            Beautiful Components
          </p>
        </TextParallax>
      </div>

      {/* Perspective Section */}
      <BackgroundImageParallax
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
        alt="Nature landscape"
        className="h-screen"
        speed={0.3}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20">
          <p className="w-full self-end text-sm text-white uppercase mix-blend-difference md:w-[50vw] md:text-[2vw]">
            Beauty and quality need the right time to be conceived and realised
            even in a world that is in too much of a hurry.
          </p>
          <p className="text-2xl text-white uppercase mix-blend-difference md:text-[5vw]">
            Pixel Perfect Design
          </p>
        </div>
      </BackgroundImageParallax>

      {/* Spacer */}
      <div className="h-[50vh]" />
    </div>
  )
}
