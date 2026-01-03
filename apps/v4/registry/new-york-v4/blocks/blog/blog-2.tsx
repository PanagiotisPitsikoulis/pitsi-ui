"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogBlockProps {
  content?: {
    title?: string
    featured?: {
      title: string
      excerpt: string
      image: string
      category: string
      readTime: string
      href: string
    }
    posts?: Array<{
      title: string
      excerpt: string
      image: string
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

const blog2Defaults = {
  title: "Latest Articles",
  featured: {
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of web development.",
    image: "/elements/landscape/plants/1.webp",
    category: "Technology",
    readTime: "8 min read",
    href: "#",
  },
  posts: [
    {
      title: "Building Scalable APIs",
      excerpt: "Best practices for API design.",
      image: "/elements/landscape/plants/2.webp",
      category: "Development",
      readTime: "5 min read",
      href: "#",
    },
    {
      title: "Design Systems 101",
      excerpt: "Creating consistent UI at scale.",
      image: "/elements/landscape/plants/3.webp",
      category: "Design",
      readTime: "6 min read",
      href: "#",
    },
    {
      title: "DevOps Best Practices",
      excerpt: "Streamline your deployment pipeline.",
      image: "/elements/landscape/plants/4.webp",
      category: "DevOps",
      readTime: "7 min read",
      href: "#",
    },
  ],
}

export function Blog2({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    title = blog2Defaults.title,
    featured = blog2Defaults.featured,
    posts = blog2Defaults.posts,
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
          <Button variant="ghost" className="group" asChild>
            <Link href="#">
              View All{" "}
              <DynamicIcon
                name="ArrowRight"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Post */}
          <Link href={featured.href} className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-primary text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                {featured.category}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                <DynamicIcon name="Clock" className="h-4 w-4" />
                {featured.readTime}
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold group-hover:underline">
                {featured.title}
              </h3>
              <p className="text-muted-foreground">{featured.excerpt}</p>
            </div>
          </Link>

          {/* Posts Grid */}
          <div className="grid gap-6">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group grid grid-cols-[120px_1fr] gap-4 sm:grid-cols-[160px_1fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-primary text-xs font-semibold">
                    {post.category}
                  </span>
                  <h4 className="text-foreground mt-1 font-semibold group-hover:underline">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                    <DynamicIcon name="Clock" className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
