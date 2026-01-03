"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    description?: string
    videos?: Array<{
      thumbnail: string
      quote: string
      author: string
      role: string
      company: string
      duration: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const testimonials4Defaults = {
  title: "Video Testimonials",
  description: "Hear directly from our customers about their experience.",
  videos: [
    {
      thumbnail: "/elements/landscape/plants/1.webp",
      quote: "The implementation was seamless and the results were immediate.",
      author: "Jessica Williams",
      role: "Head of Product",
      company: "InnovateCo",
      duration: "2:34",
    },
    {
      thumbnail: "/elements/landscape/plants/2.webp",
      quote: "We've seen a 3x improvement in our conversion rates.",
      author: "Robert Taylor",
      role: "Marketing Director",
      company: "GrowthLab",
      duration: "3:12",
    },
    {
      thumbnail: "/elements/landscape/plants/3.webp",
      quote: "The customer support team is incredibly responsive.",
      author: "Amanda Foster",
      role: "Operations Manager",
      company: "ScaleUp Inc",
      duration: "1:58",
    },
    {
      thumbnail: "/elements/landscape/plants/4.webp",
      quote: "This tool has become essential to our daily workflow.",
      author: "Kevin Anderson",
      role: "Engineering Lead",
      company: "DevTeam",
      duration: "2:45",
    },
  ],
}

export function Testimonials4({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials4Defaults.title,
    description = testimonials4Defaults.description,
    videos = testimonials4Defaults.videos,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, i) => (
            <div
              key={i}
              className="border-border group cursor-pointer overflow-hidden rounded-xl border"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.author}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                  <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                    <DynamicIcon name="Play" className="ml-1 h-7 w-7" />
                  </div>
                </div>
                <div className="bg-background/90 absolute right-3 bottom-3 rounded px-2 py-1 text-xs font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-foreground mb-3 text-sm">
                  &ldquo;{video.quote}&rdquo;
                </p>
                <div className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">
                    {video.author}
                  </span>{" "}
                  · {video.role}, {video.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
