"use client"

import {
  ParallaxColumn,
  ParallaxGallery,
} from "@/registry/new-york-v4/animations/parallax-scroll/parallax-scroll"

const images = [
  "https://skiper-ui.com/images/lummi/img15.png",
  "https://skiper-ui.com/images/lummi/img21.png",
  "https://skiper-ui.com/images/lummi/img3.png",
  "https://skiper-ui.com/images/lummi/img4.png",
  "https://skiper-ui.com/images/lummi/img5.png",
  "https://skiper-ui.com/images/lummi/img6.png",
  "https://skiper-ui.com/images/lummi/img7.png",
  "https://skiper-ui.com/images/lummi/img8.png",
  "https://skiper-ui.com/images/lummi/img24.png",
  "https://skiper-ui.com/images/lummi/img10.png",
  "https://skiper-ui.com/images/lummi/img11.png",
  "https://skiper-ui.com/images/lummi/img12.png",
  "https://skiper-ui.com/images/lummi/img13.png",
]

export default function ParallaxScrollDemo() {
  return (
    <main className="w-full bg-[#eee] text-black">
      <div className="font-geist flex h-screen items-center justify-center gap-2">
        <div className="absolute top-[10%] left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
      </div>

      <ParallaxGallery className="bg-white">
        <ParallaxColumn
          images={[images[0], images[1], images[2]]}
          speed={2}
          initialOffset="-45%"
        />
        <ParallaxColumn
          images={[images[3], images[4], images[5]]}
          speed={3.3}
          initialOffset="-95%"
        />
        <ParallaxColumn
          images={[images[6], images[7], images[8]]}
          speed={1.25}
          initialOffset="-45%"
        />
        <ParallaxColumn
          images={[images[9], images[10], images[11]]}
          speed={3}
          initialOffset="-75%"
        />
      </ParallaxGallery>

      <div className="font-geist relative flex h-screen items-center justify-center gap-2">
        <div className="absolute top-[10%] left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs leading-tight uppercase opacity-40 after:absolute after:top-full after:left-1/2 after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll up to see
          </span>
        </div>
      </div>
    </main>
  )
}
