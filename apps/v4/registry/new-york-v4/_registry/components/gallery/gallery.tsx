import React from "react"

import { cn } from "@/lib/utils"

export type GalleryProps = {
  className?: string
  images?: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
}

const defaultImages = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature89.webp",
    alt: "Feature showcase",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature20.webp",
    alt: "Product feature",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature13.webp",
    alt: "Interface design",
    width: 752,
    height: 432,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature18.webp",
    alt: "Dashboard view",
    width: 1760,
    height: 1408,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/pricing7.webp",
    alt: "Pricing section",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature87.webp",
    alt: "Feature section",
    width: 800,
    height: 1660,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/testimonial7.webp",
    alt: "Testimonial section",
    width: 800,
    height: 1020,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/feature102.webp",
    alt: "Feature highlight",
    width: 800,
    height: 800,
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/images/ui/homepage-montage/login2.webp",
    alt: "Login page",
    width: 800,
    height: 800,
  },
]

export function Gallery({ className, images = defaultImages }: GalleryProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,30%)_minmax(0,70%)] grid-rows-[auto_1fr] items-start gap-x-8 gap-y-10 pt-10 sm:-mb-36 sm:grid-cols-3 sm:gap-y-20 lg:grid-cols-2",
        className
      )}
    >
      <div className="relative flex items-start justify-end gap-x-8 pt-20 sm:col-span-2 sm:pt-0 lg:col-auto">
        <div className="relative mt-48 flex w-[880px] flex-col items-end">
          <div className="relative w-[400px]">
            <img
              alt={images[4]?.alt}
              className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
              src={images[4]?.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative mt-8 w-[880px] flex-none">
            <img
              alt={images[5]?.alt}
              width={images[5]?.width || 800}
              height={images[5]?.height || 1660}
              className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
              src={images[5]?.src}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="relative flex-none">
          <div className="relative w-[calc(400/16*1rem)]">
            <img
              alt={images[6]?.alt}
              width={images[6]?.width || 800}
              height={images[6]?.height || 1020}
              className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
              src={images[6]?.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative mt-8 w-[calc(400/16*1rem)]">
            <img
              alt={images[7]?.alt}
              width={images[7]?.width || 800}
              height={images[7]?.height || 800}
              className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
              src={images[7]?.src}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="relative mt-8 w-[calc(400/16*1rem)]">
            <img
              alt={images[8]?.alt}
              width={images[8]?.width || 800}
              height={images[8]?.height || 800}
              className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
              src={images[8]?.src}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <div className="relative order-last flex flex-col gap-y-8 sm:order-none sm:row-span-2">
        <div className="relative mt-32 w-[calc(880/16*1rem)] lg:order-none">
          <img
            alt={images[0]?.alt}
            className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
            src={images[0]?.src}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex">
          <div className="relative flex flex-none items-start gap-x-8">
            <div className="relative flex-none">
              <div className="relative w-[calc(376/16*1rem)]">
                <img
                  alt={images[1]?.alt}
                  className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
                  src={images[1]?.src}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="relative mt-8 w-[calc(376/16*1rem)]">
                <img
                  alt={images[2]?.alt}
                  width={images[2]?.width || 752}
                  height={images[2]?.height || 432}
                  className="relative z-10 w-full max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5"
                  src={images[2]?.src}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <img
              alt={images[3]?.alt}
              width={images[3]?.width || 1760}
              height={images[3]?.height || 1408}
              className="relative z-10 hidden w-[calc(880/16*1rem)] max-w-none flex-none rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-gray-950/5 lg:block"
              src={images[3]?.src}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
