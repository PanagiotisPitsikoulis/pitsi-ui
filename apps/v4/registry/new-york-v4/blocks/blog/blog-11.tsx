"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface BlogBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    stories?: Array<{
      title: string
      excerpt: string
      image: string
      location: string
      author: { name: string; avatar: string }
      readTime: string
      size: "large" | "medium" | "small"
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

const blog11Defaults = {
  badge: "Travel Stories",
  title: "Adventures From Around the World",
  description:
    "Real experiences and personal journeys shared by our community of travelers.",
  stories: [
    {
      title: "Lost in the Souks of Marrakech",
      excerpt:
        "A serendipitous journey through the colorful maze of Morocco's most enchanting city.",
      image: "/elements/landscape/sea/1.webp",
      location: "Morocco",
      author: { name: "James Porter", avatar: "/avatars/05.webp" },
      readTime: "12 min",
      size: "large" as const,
      href: "#",
    },
    {
      title: "Sunrise at Angkor Wat",
      excerpt: "Witnessing the magic of Cambodia's ancient temple at dawn.",
      image: "/elements/landscape/sea/2.webp",
      location: "Cambodia",
      author: { name: "Maya Chen", avatar: "/avatars/04.webp" },
      readTime: "8 min",
      size: "medium" as const,
      href: "#",
    },
    {
      title: "Road Tripping Through Patagonia",
      excerpt: "An epic journey to the end of the world.",
      image: "/elements/landscape/sea/3.webp",
      location: "Argentina",
      author: { name: "Carlos Mendez", avatar: "/avatars/03.webp" },
      readTime: "15 min",
      size: "small" as const,
      href: "#",
    },
    {
      title: "Finding Peace in Kyoto's Gardens",
      excerpt: "A contemplative escape into Japan's traditional heart.",
      image: "/elements/landscape/plane/6.webp",
      location: "Japan",
      author: { name: "Yuki Tanaka", avatar: "/avatars/06.webp" },
      readTime: "10 min",
      size: "small" as const,
      href: "#",
    },
    {
      title: "The Northern Lights in Tromso",
      excerpt:
        "Chasing the aurora borealis through the Arctic wilderness of Norway.",
      image: "/elements/landscape/plane/7.webp",
      location: "Norway",
      author: { name: "Erik Larsen", avatar: "/avatars/02.webp" },
      readTime: "11 min",
      size: "medium" as const,
      href: "#",
    },
    {
      title: "Island Hopping in the Philippines",
      excerpt: "Discovering hidden paradises in Southeast Asia's archipelago.",
      image: "/elements/landscape/sea/4.webp",
      location: "Philippines",
      author: { name: "Ana Santos", avatar: "/avatars/01.webp" },
      readTime: "9 min",
      size: "large" as const,
      href: "#",
    },
  ],
}

export function Blog11({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    badge = blog11Defaults.badge,
    title = blog11Defaults.title,
    description = blog11Defaults.description,
    stories = blog11Defaults.stories,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            spacing="default"
            classNames={classNames.header}
          />
        </SlideUp>

        {/* Masonry Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <ScrollFade key={i} delay={0.1 * i} scrollBased={false}>
              <Link
                href={story.href}
                className={cn(
                  "group relative block overflow-hidden rounded-2xl",
                  story.size === "large" &&
                    "md:col-span-2 lg:col-span-1 lg:row-span-2",
                  story.size === "medium" && "lg:row-span-1"
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    story.size === "large" ? "aspect-[4/5]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute right-0 bottom-0 left-0 p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <DynamicIcon name="MapPin" className="h-3 w-3" />
                      {story.location}
                    </span>
                    <span className="text-xs text-white/70">
                      {story.readTime}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mb-2 font-bold text-white transition-colors group-hover:text-white/90",
                      story.size === "large" ? "text-xl md:text-2xl" : "text-lg"
                    )}
                  >
                    {story.title}
                  </h3>
                  <p
                    className={cn(
                      "mb-4 text-white/80",
                      story.size === "large"
                        ? "line-clamp-3 text-sm md:text-base"
                        : "line-clamp-2 text-sm"
                    )}
                  >
                    {story.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/30">
                      <Image
                        src={story.author.avatar}
                        alt={story.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {story.author.name}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        {/* View All */}
        <SlideUp delay={0.6} distance={20}>
          <div className="mt-12 text-center">
            <Link
              href="#"
              className="text-primary hover:text-primary/80 group inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              View All Stories
              <DynamicIcon
                name="ArrowRight"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
