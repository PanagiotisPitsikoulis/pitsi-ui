"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    posts?: Array<{
      title: string
      excerpt: string
      image: string
      category: string
      readTime: string
      icon: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
  }
}

const blog8Defaults = {
  badge: "Packing Essentials",
  title: "Travel Smarter, Pack Lighter",
  description:
    "Expert packing tips and essential guides to help you travel like a pro.",
  posts: [
    {
      title: "The Minimalist Packing Guide",
      excerpt:
        "Learn how to pack everything you need in just a carry-on for any trip length.",
      image: "/elements/landscape/plane/2.webp",
      category: "Packing Tips",
      readTime: "5 min read",
      icon: "Backpack",
      href: "#",
    },
    {
      title: "Beach Vacation Essentials",
      excerpt:
        "Sun, sand, and everything you need for the perfect beach getaway.",
      image: "/elements/landscape/sea/4.webp",
      category: "Packing Lists",
      readTime: "4 min read",
      icon: "Sun",
      href: "#",
    },
    {
      title: "City Break Must-Haves",
      excerpt:
        "Pack smart for urban adventures with our city explorer checklist.",
      image: "/elements/landscape/plane/3.webp",
      category: "Packing Lists",
      readTime: "4 min read",
      icon: "Building2",
      href: "#",
    },
    {
      title: "Adventure Travel Gear Guide",
      excerpt: "Essential gear for hiking, trekking, and outdoor adventures.",
      image: "/elements/landscape/sea/5.webp",
      category: "Gear Guide",
      readTime: "7 min read",
      icon: "Mountain",
      href: "#",
    },
    {
      title: "Tech Packing for Digital Nomads",
      excerpt:
        "Stay connected on the road with our essential tech packing list.",
      image: "/elements/landscape/plane/4.webp",
      category: "Tech",
      readTime: "6 min read",
      icon: "Laptop",
      href: "#",
    },
    {
      title: "Winter Travel Wardrobe",
      excerpt:
        "How to pack warm without overpacking for cold weather destinations.",
      image: "/elements/landscape/sea/6.webp",
      category: "Seasonal",
      readTime: "5 min read",
      icon: "Snowflake",
      href: "#",
    },
  ],
}

export function Blog8({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    badge = blog8Defaults.badge,
    title = blog8Defaults.title,
    description = blog8Defaults.description,
    posts = blog8Defaults.posts,
  } = content

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div className={cn("py-16 md:py-24", classNames.container)}>
        <div className="container px-6">
          <SlideUp delay={0} distance={20}>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <BlockHeader
                badge={badge}
                title={title}
                description={description}
                align="left"
                spacing="none"
                classNames={classNames.header}
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => scroll("left")}
                >
                  <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
                  <span className="sr-only">Scroll left</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => scroll("right")}
                >
                  <DynamicIcon name="ChevronRight" className="h-5 w-5" />
                  <span className="sr-only">Scroll right</span>
                </Button>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto px-6 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="w-[calc((100vw-3rem)/2-12px)] shrink-0 md:w-[calc((100vw-1536px)/2+1rem)] lg:block" />
          {posts.map((post, i) => (
            <SlideUp key={i} delay={0.05 * i} distance={20} scrollBased={false}>
              <Link
                href={post.href}
                className="bg-background group flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-md"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="bg-background/90 absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full">
                    <DynamicIcon
                      name={post.icon}
                      className="text-primary h-5 w-5"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-muted-foreground mb-2 flex items-center gap-3 text-xs">
                    <span className="text-primary font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="Clock" className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-foreground mb-2 text-lg font-semibold group-hover:underline">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground line-clamp-2 flex-1 text-sm">
                    {post.excerpt}
                  </p>
                  <span className="text-primary mt-4 inline-flex items-center text-sm font-medium">
                    Read Guide
                    <DynamicIcon
                      name="ArrowRight"
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </SlideUp>
          ))}
          <div className="w-[calc((100vw-3rem)/2-12px)] shrink-0 md:w-[calc((100vw-1536px)/2+1rem)] lg:block" />
        </div>
      </div>
    </section>
  )
}
