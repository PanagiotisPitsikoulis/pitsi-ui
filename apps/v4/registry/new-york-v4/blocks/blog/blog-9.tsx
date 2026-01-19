"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogBlockProps {
  content?: {
    title?: string
    hero?: {
      title: string
      excerpt: string
      image: string
      category: string
      author: { name: string; avatar: string }
      date: string
      href: string
    }
    destinations?: Array<{
      title: string
      image: string
      country: string
      href: string
    }>
    recent?: Array<{
      title: string
      category: string
      readTime: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const blog9Defaults = {
  title: "Destination Guides",
  hero: {
    title: "Exploring the Amalfi Coast: A Complete Travel Guide",
    excerpt:
      "From the colorful cliffside villages to hidden beaches and authentic Italian cuisine, discover everything you need to plan your dream trip to the Amalfi Coast.",
    image: "/elements/landscape/sea/7.webp",
    category: "Italy",
    author: {
      name: "Elena Rossi",
      avatar: "/avatars/04.webp",
    },
    date: "Jan 5, 2025",
    href: "#",
  },
  destinations: [
    {
      title: "Bali: Island of the Gods",
      image: "/elements/landscape/sea/8.webp",
      country: "Indonesia",
      href: "#",
    },
    {
      title: "Santorini Sunset Guide",
      image: "/elements/landscape/sea/9.webp",
      country: "Greece",
      href: "#",
    },
    {
      title: "Maldives Resort Comparison",
      image: "/elements/landscape/sea/10.webp",
      country: "Maldives",
      href: "#",
    },
    {
      title: "Dubai City Explorer",
      image: "/elements/landscape/plane/5.webp",
      country: "UAE",
      href: "#",
    },
  ],
  recent: [
    {
      title: "10 Hidden Gems in Portugal",
      category: "Europe",
      readTime: "8 min",
      href: "#",
    },
    {
      title: "Japan Cherry Blossom Season Guide",
      category: "Asia",
      readTime: "10 min",
      href: "#",
    },
    {
      title: "Safari Planning: Kenya vs Tanzania",
      category: "Africa",
      readTime: "12 min",
      href: "#",
    },
    {
      title: "New Zealand Road Trip Itinerary",
      category: "Oceania",
      readTime: "15 min",
      href: "#",
    },
    {
      title: "Iceland Northern Lights Guide",
      category: "Europe",
      readTime: "7 min",
      href: "#",
    },
  ],
}

export function Blog9({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    title = blog9Defaults.title,
    hero = blog9Defaults.hero,
    destinations = blog9Defaults.destinations,
    recent = blog9Defaults.recent,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <div className="mb-12 flex items-center justify-between">
            <h2
              className={cn(
                "text-foreground text-3xl font-bold md:text-4xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            <Button variant="ghost" className="group" asChild>
              <Link href="#">
                All Destinations
                <DynamicIcon
                  name="ArrowRight"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </SlideUp>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Hero Article */}
          <ScrollFade delay={0.1} scrollBased={false}>
            <Link href={hero.href} className="group block">
              <article className="bg-card overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={hero.image}
                    alt={hero.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {hero.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-foreground mb-3 text-2xl font-bold group-hover:underline md:text-3xl">
                    {hero.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-base">
                    {hero.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={hero.author.avatar}
                          alt={hero.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-medium">
                          {hero.author.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {hero.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollFade>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Destination Grid */}
            <SlideUp delay={0.2} distance={20}>
              <div className="grid grid-cols-2 gap-3">
                {destinations.map((dest, i) => (
                  <Link
                    key={i}
                    href={dest.href}
                    className="group relative aspect-square overflow-hidden rounded-xl"
                  >
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 p-3">
                      <p className="text-xs text-white/70">{dest.country}</p>
                      <p className="line-clamp-1 text-sm font-medium text-white">
                        {dest.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </SlideUp>

            {/* Recent Posts */}
            <SlideUp delay={0.3} distance={20}>
              <div className="border-border rounded-xl border p-5">
                <h4 className="text-foreground mb-4 flex items-center gap-2 font-semibold">
                  <DynamicIcon
                    name="TrendingUp"
                    className="text-primary h-5 w-5"
                  />
                  Trending Guides
                </h4>
                <ul className="space-y-4">
                  {recent.map((post, i) => (
                    <li key={i}>
                      <Link
                        href={post.href}
                        className="group flex items-start gap-3"
                      >
                        <span className="text-muted-foreground/50 text-2xl font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <p className="text-foreground text-sm font-medium transition-colors group-hover:underline">
                            {post.title}
                          </p>
                          <div className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                            <span>{post.category}</span>
                            <span>-</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  )
}
