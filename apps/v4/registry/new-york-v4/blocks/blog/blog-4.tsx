"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogBlockProps {
  content?: {
    title?: string
    hero?: {
      title: string
      excerpt: string
      image: string
      category: string
      href: string
    }
    sidebar?: Array<{
      title: string
      image: string
      category: string
      href: string
    }>
    grid?: Array<{
      title: string
      image: string
      category: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const blog4Defaults = {
  title: "Magazine",
  hero: {
    title: "The Complete Guide to Modern Architecture",
    excerpt:
      "Exploring the intersection of form and function in contemporary design.",
    image: "/elements/landscape/plants/1.webp",
    category: "Architecture",
    href: "#",
  },
  sidebar: [
    {
      title: "Minimalism in Interior Design",
      image: "/elements/landscape/plants/2.webp",
      category: "Interior",
      href: "#",
    },
    {
      title: "Sustainable Building Materials",
      image: "/elements/landscape/plants/3.webp",
      category: "Sustainability",
      href: "#",
    },
    {
      title: "Urban Planning Innovations",
      image: "/elements/landscape/plants/4.webp",
      category: "Urban",
      href: "#",
    },
  ],
  grid: [
    {
      title: "Color Theory in Design",
      image: "/elements/landscape/plants/5.webp",
      category: "Design",
      href: "#",
    },
    {
      title: "Smart Home Technology",
      image: "/elements/landscape/plants/1.webp",
      category: "Technology",
      href: "#",
    },
    {
      title: "Biophilic Design Trends",
      image: "/elements/landscape/plants/2.webp",
      category: "Trends",
      href: "#",
    },
    {
      title: "Historic Preservation",
      image: "/elements/landscape/plants/3.webp",
      category: "History",
      href: "#",
    },
  ],
}

export function Blog4({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    title = blog4Defaults.title,
    hero = blog4Defaults.hero,
    sidebar = blog4Defaults.sidebar,
    grid = blog4Defaults.grid,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 flex items-center justify-between">
          <h2
            className={cn(
              "text-foreground text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <Button variant="outline" className="group" asChild>
            <Link href="#">
              Browse All{" "}
              <DynamicIcon
                name="ArrowRight"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* Hero + Sidebar */}
        <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Link
            href={hero.href}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl"
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <span className="mb-2 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                {hero.category}
              </span>
              <h3 className="mb-2 text-2xl font-bold text-white">
                {hero.title}
              </h3>
              <p className="text-white/80">{hero.excerpt}</p>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {sidebar.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group relative flex-1 overflow-hidden rounded-xl"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <span className="text-xs font-semibold text-white/80">
                    {post.category}
                  </span>
                  <h4 className="text-sm font-bold text-white">{post.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {grid.map((post, i) => (
            <Link key={i} href={post.href} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-primary mt-3 block text-xs font-semibold">
                {post.category}
              </span>
              <h4 className="text-foreground mt-1 font-semibold group-hover:underline">
                {post.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
