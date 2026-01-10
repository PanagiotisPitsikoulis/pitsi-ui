"use client"

import { cn } from "@/lib/utils"
import FlyingPosters from "@/registry/new-york-v4/animations/flying-posters/flying-posters"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    images?: Array<{ src: string; alt: string; height?: "short" | "tall" }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery2Defaults = {
  title: "Our Work",
  description: "A collection of our finest projects and creative endeavors.",
  images: [
    {
      src: "/elements/landscape/plants/1.webp",
      alt: "Project 1",
      height: "tall" as const,
    },
    {
      src: "/elements/landscape/plants/2.webp",
      alt: "Project 2",
      height: "short" as const,
    },
    {
      src: "/elements/landscape/plants/3.webp",
      alt: "Project 3",
      height: "short" as const,
    },
    {
      src: "/elements/landscape/plants/4.webp",
      alt: "Project 4",
      height: "tall" as const,
    },
    {
      src: "/elements/landscape/plants/5.webp",
      alt: "Project 5",
      height: "short" as const,
    },
    {
      src: "/elements/landscape/plants/6.webp",
      alt: "Project 6",
      height: "tall" as const,
    },
    {
      src: "/elements/landscape/plants/7.webp",
      alt: "Project 7",
      height: "short" as const,
    },
    {
      src: "/elements/landscape/plants/8.webp",
      alt: "Project 8",
      height: "short" as const,
    },
  ],
}

export function Gallery2({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery2Defaults.title,
    description = gallery2Defaults.description,
    images = gallery2Defaults.images,
  } = content

  // Transform images to the format FlyingPosters expects (array of strings)
  const posterItems = images.map((img) => img.src)

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* FlyingPosters Gallery */}
        <div className="relative h-[500px] w-full md:h-[600px]">
          <FlyingPosters
            items={posterItems}
            planeWidth={280}
            planeHeight={280}
            distortion={2}
            scrollEase={0.015}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
