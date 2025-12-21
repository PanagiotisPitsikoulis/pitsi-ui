"use client"

import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

export interface AboutStoryBlockProps {
  story?: {
    headline: string
    leadText: string
    bodyText: string
    images: [string, string, string]
  }
  workplace?: {
    headline: string
    leadText: string
    bodyText: string
    images: [string, string, string]
  }
  className?: string
}

const defaultStory = {
  headline: "Our Story",
  leadText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias repellendus perferendis earum facilis est soluta consequatur placeat hic aliquid exercitationem, ex molestias nam veniam distinctio maxime culpa magnam autem.",
  bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore quas placeat expedita aliquam rerum tempore amet, sequi ipsa ad quam, adipisci exercitationem nihil, sapiente laborum minus doloribus consequuntur sed. Quo repudiandae nihil quas voluptates, aut beatae reiciendis aliquid perspiciatis quae explicabo inventore temporibus laborum, nostrum omnis quos excepturi dolorum reprehenderit vel labore eaque libero perferendis? Qui illo numquam beatae?",
  images: [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg",
  ] as [string, string, string],
}

const defaultWorkplace = {
  headline: "Our Workplace",
  leadText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque laboriosam repudiandae quaerat inventore dolores saepe pariatur, adipisci atque voluptate doloribus!",
  bodyText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid laudantium minus distinctio exercitationem odio non nihil blanditiis quae, beatae assumenda ad reiciendis soluta dolorem. Natus repellendus quidem dolorum temporibus!",
  images: [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg",
  ] as [string, string, string],
}

export function AboutStoryBlock({
  story = defaultStory,
  workplace = defaultWorkplace,
  className,
}: AboutStoryBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                {story.headline}
              </h1>
              <p className="mb-9 lg:text-xl">{story.leadText}</p>
              <p className="text-muted-foreground">{story.bodyText}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="relative aspect-[0.7] w-full rounded-lg overflow-hidden md:w-1/2">
                <Image
                  src={story.images[0]}
                  alt="about 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <div className="relative aspect-[1.1] w-full rounded-lg overflow-hidden">
                  <Image
                    src={story.images[1]}
                    alt="about 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[0.7] w-full rounded-lg overflow-hidden">
                  <Image
                    src={story.images[2]}
                    alt="about 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="relative aspect-[0.9] w-full rounded-lg overflow-hidden md:w-1/2">
                <Image
                  src={workplace.images[0]}
                  alt="about 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <div className="relative aspect-[0.8] w-full rounded-lg overflow-hidden">
                  <Image
                    src={workplace.images[1]}
                    alt="about 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[0.9] w-full rounded-lg overflow-hidden">
                  <Image
                    src={workplace.images[2]}
                    alt="about 6"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <h1 className="mb-8 text-2xl font-semibold lg:mb-6">
                {workplace.headline}
              </h1>
              <p className="mb-9 lg:text-xl">{workplace.leadText}</p>
              <p className="text-muted-foreground">{workplace.bodyText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
