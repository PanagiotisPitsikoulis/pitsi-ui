"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"

// Types
interface TocItem {
  title: string
  url: string
  depth: number
}

interface Author {
  name: string
  avatar?: string
  bio?: string
}

interface RelatedPost {
  slug: string
  title: string
  coverImage?: string
}

// Table of Contents
function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    const headings = document.querySelectorAll("h2, h3")
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="space-y-1">
      <h4 className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {items.map((item) => {
          const id = item.url.replace("#", "")
          const isActive = activeId === id

          return (
            <li key={item.url}>
              <a
                href={item.url}
                className={cn(
                  "text-muted-foreground hover:text-foreground block text-sm transition-colors",
                  item.depth === 2 && "pl-0",
                  item.depth === 3 && "pl-4",
                  isActive && "text-foreground font-medium"
                )}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// Share Buttons
function ShareButtons({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-sm">Share:</span>
      <Button variant="outline" size="icon" className="size-8" asChild>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="size-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="size-8" asChild>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="size-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="size-8" asChild>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="size-4" />
        </a>
      </Button>
    </div>
  )
}

// Author Card
function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="bg-muted flex items-start gap-4 rounded-xl p-4">
      <Avatar className="size-12">
        <AvatarImage src={author.avatar} alt={author.name} />
        <AvatarFallback>
          {author.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium">{author.name}</h4>
        {author.bio && (
          <p className="text-muted-foreground mt-1 text-sm">{author.bio}</p>
        )}
      </div>
    </div>
  )
}

// Related Posts
function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null

  return (
    <div className="mt-12">
      <h3 className="display mb-4 text-lg font-semibold">Related Posts</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group hover:bg-muted flex items-center gap-4 rounded-lg border p-4 transition-colors"
          >
            {post.coverImage && (
              <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h4 className="group-hover:text-primary line-clamp-2 font-medium transition-colors">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Default data
const appBlogPost1Defaults = {
  title: "Building Accessible Components with Radix UI",
  excerpt:
    "Learn how to create accessible components using Radix UI primitives and best practices for inclusive design.",
  coverImage: "/placeholder.svg",
  category: "Development",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg",
    bio: "Senior Frontend Developer with a passion for accessibility and design systems.",
  } as Author,
  publishedAt: "December 15, 2024",
  readingTime: "8 min read",
  toc: [
    { title: "Introduction", url: "#introduction", depth: 2 },
    { title: "Why Accessibility Matters", url: "#why-accessibility", depth: 2 },
    { title: "Getting Started with Radix", url: "#getting-started", depth: 2 },
    {
      title: "Building Your First Component",
      url: "#first-component",
      depth: 2,
    },
    { title: "Testing Accessibility", url: "#testing", depth: 2 },
    { title: "Conclusion", url: "#conclusion", depth: 2 },
  ] as TocItem[],
  relatedPosts: [
    {
      slug: "tailwind-css-best-practices",
      title: "Tailwind CSS Best Practices for Large Projects",
      coverImage: "/placeholder.svg",
    },
    {
      slug: "design-tokens-guide",
      title: "A Complete Guide to Design Tokens",
      coverImage: "/placeholder.svg",
    },
  ] as RelatedPost[],
  children: (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2 id="introduction">Introduction</h2>
      <p>
        Building accessible web applications is not just a
        nice-to-have—it&apos;s a fundamental requirement for creating inclusive
        digital experiences. In this guide, we&apos;ll explore how to leverage
        Radix UI primitives to build accessible components from the ground up.
      </p>

      <h2 id="why-accessibility">Why Accessibility Matters</h2>
      <p>
        Web accessibility ensures that people with disabilities can perceive,
        understand, navigate, and interact with websites and applications. It
        also benefits users on mobile devices, slow internet connections, and
        those with temporary disabilities.
      </p>

      <h2 id="getting-started">Getting Started with Radix</h2>
      <p>
        Radix UI provides unstyled, accessible components that give you full
        control over styling while handling all the complex accessibility
        patterns. Let&apos;s start by installing the necessary packages.
      </p>

      <h2 id="first-component">Building Your First Component</h2>
      <p>
        We&apos;ll create an accessible dialog component that properly manages
        focus, keyboard navigation, and screen reader announcements.
      </p>

      <h2 id="testing">Testing Accessibility</h2>
      <p>
        Testing is crucial to ensure your components meet accessibility
        standards. We&apos;ll cover both automated testing with tools like
        axe-core and manual testing with screen readers.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        By using Radix UI primitives and following accessibility best practices,
        you can create components that work for everyone. Remember that
        accessibility is an ongoing process, not a one-time checklist.
      </p>
    </div>
  ),
}

interface AppBlogPost1Props {
  title?: string
  excerpt?: string
  coverImage?: string
  category?: string
  author?: Author
  publishedAt?: string
  readingTime?: string
  toc?: TocItem[]
  relatedPosts?: RelatedPost[]
  postUrl?: string
  children?: React.ReactNode
  className?: string
}

export function AppBlogPost1({
  title = appBlogPost1Defaults.title,
  excerpt = appBlogPost1Defaults.excerpt,
  coverImage = appBlogPost1Defaults.coverImage,
  category = appBlogPost1Defaults.category,
  author = appBlogPost1Defaults.author,
  publishedAt = appBlogPost1Defaults.publishedAt,
  readingTime = appBlogPost1Defaults.readingTime,
  toc = appBlogPost1Defaults.toc,
  relatedPosts = appBlogPost1Defaults.relatedPosts,
  postUrl = "https://example.com/blog/post",
  children = appBlogPost1Defaults.children,
  className,
}: AppBlogPost1Props) {
  return (
    <div className={cn("container px-6 py-8", className)}>
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="min-w-0 flex-1">
          {/* Back Link */}
          <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 size-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">
              {category}
            </Badge>
            <h1 className="display mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="text-muted-foreground mb-6 text-lg">{excerpt}</p>

            <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>
                    <User className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>{publishedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          {coverImage && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <article className="mb-8">{children}</article>

          <Separator className="my-8" />

          {/* Share & Author */}
          <div className="space-y-6">
            <ShareButtons url={postUrl} title={title} />
            <AuthorCard author={author} />
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedPosts} />
        </main>

        {/* Table of Contents Sidebar */}
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 lg:block">
          <div className="py-4">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>
    </div>
  )
}
