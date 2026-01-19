"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    featured?: {
      title: string
      excerpt: string
      image: string
      category: string
      readTime: string
      destination: string
      href: string
    }
    posts?: Array<{
      title: string
      excerpt: string
      image: string
      category: string
      readTime: string
      destination: string
      href: string
    }>
    cta?: {
      label: string
      href: string
    }
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

const blog7Defaults = {
  badge: "Travel Journal",
  title: "Discover Your Next Adventure",
  description:
    "Expert guides and insider tips to help you explore the world with confidence.",
  featured: {
    title: "The Ultimate Guide to Greek Island Hopping",
    excerpt:
      "Navigate the azure waters of the Aegean Sea with our comprehensive guide to the best Greek islands, hidden beaches, and local secrets.",
    image: "/elements/landscape/sea/1.webp",
    category: "Destination Guide",
    readTime: "12 min read",
    destination: "Greece",
    href: "#",
  },
  posts: [
    {
      title: "Essential Packing List for Tropical Adventures",
      excerpt: "Everything you need to pack for the perfect beach vacation.",
      image: "/elements/landscape/sea/2.webp",
      category: "Packing Tips",
      readTime: "6 min read",
      destination: "Various",
      href: "#",
    },
    {
      title: "Budget Travel: Southeast Asia on $50 a Day",
      excerpt:
        "How to experience the best of Thailand, Vietnam, and Cambodia without breaking the bank.",
      image: "/elements/landscape/sea/3.webp",
      category: "Budget Travel",
      readTime: "8 min read",
      destination: "Southeast Asia",
      href: "#",
    },
    {
      title: "First-Time Flyer: Everything You Need to Know",
      excerpt:
        "From booking to boarding, a complete guide for nervous first-time travelers.",
      image: "/elements/landscape/plane/1.webp",
      category: "Travel Tips",
      readTime: "5 min read",
      destination: "Worldwide",
      href: "#",
    },
  ],
  cta: {
    label: "View All Articles",
    href: "#",
  },
}

export function Blog7({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    badge = blog7Defaults.badge,
    title = blog7Defaults.title,
    description = blog7Defaults.description,
    featured = blog7Defaults.featured,
    posts = blog7Defaults.posts,
    cta = blog7Defaults.cta,
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

        {/* Featured Post */}
        <ScrollFade delay={0.1} scrollBased={false}>
          <Link href={featured.href} className="group mb-12 block">
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-white/80">
                    <DynamicIcon name="MapPin" className="h-4 w-4" />
                    {featured.destination}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-white/80">
                    <DynamicIcon name="Clock" className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white md:text-4xl">
                  {featured.title}
                </h3>
                <p className="max-w-2xl text-base text-white/80 md:text-lg">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </ScrollFade>

        {/* Posts Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollFade key={i} delay={0.1 * (i + 1)} scrollBased={false}>
              <Link href={post.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="bg-primary text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-muted-foreground mb-2 flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="MapPin" className="h-3 w-3" />
                      {post.destination}
                    </span>
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="Clock" className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h4 className="text-foreground mb-2 text-lg font-semibold group-hover:underline">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <SlideUp delay={0.4} distance={20}>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="group">
                <Link href={cta.href}>
                  {cta.label}
                  <DynamicIcon
                    name="ArrowRight"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </SlideUp>
        )}
      </div>
    </section>
  )
}
