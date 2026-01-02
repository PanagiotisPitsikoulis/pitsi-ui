"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

import { cn } from "@/lib/utils"

interface BlogBlockProps {
  content?: {
    title?: string
    posts?: Array<{
      title: string
      excerpt: string
      date: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const blog5Defaults = {
  title: "Recent Posts",
  posts: [
    {
      title: "Understanding React Server Components",
      excerpt:
        "A deep dive into the new React architecture and how it changes the way we build applications.",
      date: "Dec 20, 2024",
      href: "#",
    },
    {
      title: "The Rise of Edge Computing",
      excerpt:
        "How edge computing is transforming application performance and user experience.",
      date: "Dec 18, 2024",
      href: "#",
    },
    {
      title: "TypeScript Best Practices for 2025",
      excerpt:
        "Essential patterns and practices for writing maintainable TypeScript code.",
      date: "Dec 15, 2024",
      href: "#",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "Creating inclusive experiences that work for everyone.",
      date: "Dec 12, 2024",
      href: "#",
    },
    {
      title: "The Future of CSS",
      excerpt:
        "New features and capabilities that are changing how we style the web.",
      date: "Dec 10, 2024",
      href: "#",
    },
    {
      title: "Optimizing Database Performance",
      excerpt:
        "Strategies for improving query performance and reducing latency.",
      date: "Dec 8, 2024",
      href: "#",
    },
  ],
}

export function Blog5({ content = {}, classNames = {} }: BlogBlockProps) {
  const { title = blog5Defaults.title, posts = blog5Defaults.posts } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <h2
          className={cn(
            "text-foreground mb-12 text-3xl font-bold md:text-4xl",
            classNames.header?.title
          )}
        >
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={post.href}
              className="border-border bg-card group rounded-xl border p-6 transition-shadow hover:shadow-lg"
            >
              <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <h3 className="text-foreground mb-2 text-lg font-bold group-hover:underline">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {post.excerpt}
              </p>
              <span className="text-primary inline-flex items-center text-sm font-medium">
                Read more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
