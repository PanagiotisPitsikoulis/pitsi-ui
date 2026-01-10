"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface BlogBlockProps {
  content?: {
    title?: string
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

const blog6Defaults = {
  title: "Blog",
  posts: [
    {
      title: "Getting Started with Next.js 15",
      excerpt:
        "Learn how to build modern web applications with the latest version of Next.js.",
      image: "/elements/landscape/plants/1.webp",
      category: "Tutorial",
      readTime: "10 min",
      href: "#",
    },
    {
      title: "Understanding Tailwind CSS",
      excerpt: "A comprehensive guide to utility-first CSS.",
      image: "/elements/landscape/plants/2.webp",
      category: "CSS",
      readTime: "8 min",
      href: "#",
    },
    {
      title: "React State Management",
      excerpt: "Comparing different state management solutions.",
      image: "/elements/landscape/plants/3.webp",
      category: "React",
      readTime: "12 min",
      href: "#",
    },
  ],
  categories: ["All", "Tutorial", "CSS", "React", "JavaScript", "Design"],
  recentPosts: [
    { title: "Building APIs with Node.js", href: "#" },
    { title: "Introduction to GraphQL", href: "#" },
    { title: "Testing React Components", href: "#" },
    { title: "Docker for Developers", href: "#" },
  ],
  tags: [
    "React",
    "JavaScript",
    "CSS",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "API",
  ],
}

export function Blog6({ content = {}, classNames = {} }: BlogBlockProps) {
  const { title = blog6Defaults.title, posts = blog6Defaults.posts } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <h2
            className={cn(
              "text-foreground mb-12 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </SlideUp>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <ScrollFade key={i} delay={0.1 * i} scrollBased>
                <Link
                  href={post.href}
                  className="group grid gap-6 md:grid-cols-[250px_1fr]"
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
                    <span className="text-primary text-sm font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-foreground mt-1 text-xl font-bold group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                    <div className="text-muted-foreground mt-4 flex items-center gap-1 text-sm">
                      <DynamicIcon name="Clock" className="h-4 w-4" />{" "}
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              </ScrollFade>
            ))}
          </div>

          {/* Sidebar with SlideUp animations */}
          <aside className="space-y-8">
            {/* Newsletter */}
            <SlideUp delay={0.1} distance={30}>
              <div className="border-border rounded-xl border p-6">
                <h4 className="text-foreground mb-4 font-semibold">Newsletter</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get weekly updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Your email" />
                  <Button className="w-full">
                    <DynamicIcon name="Mail" className="mr-2 h-4 w-4" /> Subscribe
                  </Button>
                </div>
              </div>
            </SlideUp>

            {/* Categories */}
            <SlideUp delay={0.2} distance={30}>
              <div className="border-border rounded-xl border p-6">
                <h4 className="text-foreground mb-4 font-semibold">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {blog6Defaults.categories.map((cat, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-3 py-1 text-sm transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </SlideUp>

            {/* Recent Posts */}
            <SlideUp delay={0.3} distance={30}>
              <div className="border-border rounded-xl border p-6">
                <h4 className="text-foreground mb-4 font-semibold">
                  Recent Posts
                </h4>
                <ul className="space-y-3">
                  {blog6Defaults.recentPosts.map((post, i) => (
                    <li key={i}>
                      <Link
                        href={post.href}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>

            {/* Tags */}
            <SlideUp delay={0.4} distance={30}>
              <div className="border-border rounded-xl border p-6">
                <h4 className="text-foreground mb-4 flex items-center gap-2 font-semibold">
                  <DynamicIcon name="Tag" className="h-4 w-4" /> Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {blog6Defaults.tags.map((tag, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary rounded-md border px-2 py-1 text-xs transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </SlideUp>
          </aside>
        </div>
      </div>
    </section>
  )
}
