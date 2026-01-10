"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="relative container mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Blog Icon
function BlogIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-48", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="35"
        y="40"
        width="130"
        height="120"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <line
        x1="55"
        y1="70"
        x2="145"
        y2="70"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line
        x1="55"
        y1="95"
        x2="125"
        y2="95"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="55"
        y1="115"
        x2="135"
        y2="115"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="55"
        y1="135"
        x2="105"
        y2="135"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

// Types
interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  image?: string
  readTime?: string
}

interface BlogCategory {
  id: string
  label: string
}

// Default content
const pageBlog1Defaults = {
  label: "Articles",
  title: "Blog",
  description: "Insights, tutorials, and updates from our team.",
  backLink: { label: "Back to home", href: "/" },
  categories: [
    { id: "tutorials", label: "Tutorials" },
    { id: "design", label: "Design" },
    { id: "engineering", label: "Engineering" },
    { id: "announcements", label: "Announcements" },
  ] as BlogCategory[],
  posts: [
    {
      slug: "getting-started",
      title: "Getting Started with Our Component Library",
      description:
        "Learn how to install and configure the component library in your Next.js project.",
      date: "2024-01-15",
      category: "tutorials",
      readTime: "5 min read",
    },
    {
      slug: "design-tokens",
      title: "Understanding Design Tokens",
      description:
        "A deep dive into how design tokens help maintain consistency across your application.",
      date: "2024-01-10",
      category: "design",
      readTime: "8 min read",
    },
    {
      slug: "performance-tips",
      title: "Performance Optimization Tips",
      description:
        "Best practices for optimizing your React components for better performance.",
      date: "2024-01-05",
      category: "engineering",
      readTime: "6 min read",
    },
  ] as BlogPost[],
}

// Helper function to format date
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

interface PageBlog1Props {
  label?: string
  title?: string
  description?: string
  backLink?: { label: string; href: string }
  categories?: BlogCategory[]
  posts?: BlogPost[]
  currentCategory?: string
  baseUrl?: string
  className?: string
}

export function PageBlog1({
  label = pageBlog1Defaults.label,
  title = pageBlog1Defaults.title,
  description = pageBlog1Defaults.description,
  backLink = pageBlog1Defaults.backLink,
  categories = pageBlog1Defaults.categories,
  posts = pageBlog1Defaults.posts,
  currentCategory,
  baseUrl = "/blog",
  className,
}: PageBlog1Props) {
  const filteredPosts = currentCategory
    ? posts.filter((post) => post.category === currentCategory)
    : posts

  return (
    <div
      className={cn("relative -mt-14 min-h-screen overflow-x-clip", className)}
    >
      <StripedBackground />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />

        <div className="grid grid-cols-6 gap-6">
          {/* Left Column - Sticky Sidebar */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Back Link */}
              <Link
                href={backLink.href}
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {backLink.label}
              </Link>

              {/* Label */}
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                {label}
              </p>

              <Spacer size="md" sizeMobile="sm" />

              {/* Title */}
              <h1 className="text-4xl leading-[0.9] font-bold tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <Spacer size="lg" sizeMobile="md" />

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>

              <Spacer size="6xl" sizeMobile="2xl" />

              {/* Icon */}
              <div className="flex justify-center">
                <BlogIcon className="text-primary w-48" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            {/* Category Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <Link
                  href={baseUrl}
                  className={cn(
                    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
                    !currentCategory
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                >
                  All
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`${baseUrl}/category/${category.id}`}
                    className={cn(
                      "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
                      currentCategory === category.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-foreground hover:bg-muted"
                    )}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-20">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <article key={index} className="group relative">
                    <Link href={`${baseUrl}/${post.slug}`} className="block">
                      {/* Title section with vertical line */}
                      <div className="border-primary border-l-2 pl-4">
                        {/* Date and category */}
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                            {formatDate(post.date)}
                          </time>
                          <Badge variant="outline" className="text-xs">
                            {categories.find((c) => c.id === post.category)
                              ?.label || post.category}
                          </Badge>
                          {post.readTime && (
                            <span className="text-muted-foreground text-xs">
                              {post.readTime}
                            </span>
                          )}
                        </div>

                        {/* Title and description */}
                        <h2 className="group-hover:text-primary mb-1 text-xl font-bold tracking-tight transition-colors md:text-2xl">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {post.description}
                        </p>
                      </div>

                      {/* Image */}
                      {post.image && (
                        <div className="bg-muted relative mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="size-full object-cover"
                          />
                        </div>
                      )}
                    </Link>
                  </article>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    No articles found
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {currentCategory
                      ? "No articles in this category yet."
                      : "Check back soon for new articles."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
