"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight, Clock, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"

// Types
interface BlogCategory {
  id: string
  name: string
  count: number
}

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage?: string
  category: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  readingTime: string
}

// Category Sidebar
function CategorySidebar({
  categories,
  activeCategory,
  onSelectCategory,
}: {
  categories: BlogCategory[]
  activeCategory: string | null
  onSelectCategory: (id: string | null) => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Categories</h3>
        <div className="space-y-1">
          <button
            onClick={() => onSelectCategory(null)}
            className={cn(
              "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
              !activeCategory
                ? "bg-accent text-accent-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Blog Card
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden">
      {post.coverImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {post.category}
          </Badge>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-primary line-clamp-2 text-lg font-semibold transition-colors"
        >
          {post.title}
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="text-muted-foreground flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <User className="size-3.5" />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="size-3.5" />
          <span>{post.publishedAt}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="size-3.5" />
          <span>{post.readingTime}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

// Pagination
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="size-4" />
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page)}
            className="size-9"
          >
            {page}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  )
}

// Default data
const appBlogList1Defaults = {
  categories: [
    { id: "design", name: "Design", count: 12 },
    { id: "development", name: "Development", count: 24 },
    { id: "tutorials", name: "Tutorials", count: 8 },
    { id: "updates", name: "Updates", count: 5 },
  ] as BlogCategory[],
  posts: [
    {
      id: "1",
      slug: "building-accessible-components",
      title: "Building Accessible Components with Radix UI",
      excerpt:
        "Learn how to create accessible components using Radix UI primitives and best practices for inclusive design.",
      coverImage: "/placeholder.svg",
      category: "Development",
      author: { name: "Jane Doe" },
      publishedAt: "Dec 15, 2024",
      readingTime: "8 min read",
    },
    {
      id: "2",
      slug: "tailwind-css-best-practices",
      title: "Tailwind CSS Best Practices for Large Projects",
      excerpt:
        "Discover techniques for organizing and scaling your Tailwind CSS in enterprise applications.",
      coverImage: "/placeholder.svg",
      category: "Development",
      author: { name: "John Smith" },
      publishedAt: "Dec 10, 2024",
      readingTime: "6 min read",
    },
    {
      id: "3",
      slug: "design-tokens-guide",
      title: "A Complete Guide to Design Tokens",
      excerpt:
        "Understand how design tokens can streamline your design-to-development workflow.",
      coverImage: "/placeholder.svg",
      category: "Design",
      author: { name: "Alex Johnson" },
      publishedAt: "Dec 5, 2024",
      readingTime: "10 min read",
    },
    {
      id: "4",
      slug: "dark-mode-implementation",
      title: "Implementing Dark Mode the Right Way",
      excerpt:
        "Best practices for implementing dark mode with CSS variables and next-themes.",
      coverImage: "/placeholder.svg",
      category: "Tutorials",
      author: { name: "Sarah Chen" },
      publishedAt: "Nov 28, 2024",
      readingTime: "7 min read",
    },
  ] as BlogPost[],
  totalPages: 3,
}

interface AppBlogList1Props {
  categories?: BlogCategory[]
  posts?: BlogPost[]
  totalPages?: number
  className?: string
}

export function AppBlogList1({
  categories = appBlogList1Defaults.categories,
  posts = appBlogList1Defaults.posts,
  totalPages = appBlogList1Defaults.totalPages,
  className,
}: AppBlogList1Props) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  )
  const [currentPage, setCurrentPage] = React.useState(1)

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      !activeCategory ||
      post.category.toLowerCase() === activeCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className={cn("container px-6 py-8", className)}>
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-56 shrink-0 lg:block">
          <div className="py-4">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-6"
            />
            <CategorySidebar
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="mb-8">
            <h1 className="display text-3xl font-bold tracking-tight">Blog</h1>
            <p className="text-muted-foreground mt-2">
              Insights, tutorials, and updates from our team.
            </p>
          </div>

          {/* Mobile Search */}
          <div className="mb-6 lg:hidden">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No posts found matching your criteria.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && totalPages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
