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
    title?: string
    description?: string
    posts?: Array<{
      title: string
      excerpt: string
      image: string
      author: { name: string; avatar: string }
      date: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const blog3Defaults = {
  title: "From Our Blog",
  description: "Insights and updates from our team.",
  posts: [
    {
      title: "How We Scaled to 1 Million Users",
      excerpt: "The technical challenges and solutions that helped us grow.",
      image: "/elements/landscape/plants/1.webp",
      author: {
        name: "Sarah Chen",
        avatar: "/elements/landscape/plants/2.webp",
      },
      date: "Dec 15, 2024",
      href: "#",
    },
    {
      title: "The Art of Product Design",
      excerpt: "Creating intuitive interfaces that users love.",
      image: "/elements/landscape/plants/2.webp",
      author: {
        name: "Mike Johnson",
        avatar: "/elements/landscape/plants/3.webp",
      },
      date: "Dec 12, 2024",
      href: "#",
    },
    {
      title: "Remote Work Best Practices",
      excerpt: "Tips for staying productive while working from home.",
      image: "/elements/landscape/plants/3.webp",
      author: {
        name: "Emma Wilson",
        avatar: "/elements/landscape/plants/4.webp",
      },
      date: "Dec 10, 2024",
      href: "#",
    },
    {
      title: "Security in the Cloud",
      excerpt: "Protecting your data in a distributed environment.",
      image: "/elements/landscape/plants/4.webp",
      author: {
        name: "Alex Kim",
        avatar: "/elements/landscape/plants/5.webp",
      },
      date: "Dec 8, 2024",
      href: "#",
    },
  ],
}

export function Blog3({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    title = blog3Defaults.title,
    description = blog3Defaults.description,
    posts = blog3Defaults.posts,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </SlideUp>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <ScrollFade key={i} delay={0.1 * i} scrollBased>
              <Link
                href={post.href}
                className="bg-background group grid gap-6 overflow-hidden rounded-xl p-4 md:grid-cols-[200px_1fr] md:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-square">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-foreground mb-2 text-xl font-bold group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-foreground text-sm font-medium">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <DynamicIcon name="Calendar" className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
