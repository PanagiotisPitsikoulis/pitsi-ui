import Link from "next/link"

import { type BlogCategory } from "@/lib/blog/source"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: BlogCategory
  image?: string
  readTime?: string
}

interface BlogListProps {
  posts: BlogPost[]
  currentCategory?: BlogCategory
}

const categoryLabels: Record<BlogCategory, string> = {
  tutorial: "Tutorial",
  announcement: "Announcement",
  "deep-dive": "Deep Dive",
  design: "Design",
}

const allCategories: BlogCategory[] = [
  "tutorial",
  "announcement",
  "deep-dive",
  "design",
]

function CategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <Badge variant="outline" className="font-mono text-xs">
      {categoryLabels[category]}
    </Badge>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function BlogList({ posts, currentCategory }: BlogListProps) {
  return (
    <>
      {/* Category Tags */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={cn(
              "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
              !currentCategory
                ? "border-brand bg-brand/10 text-brand"
                : "border-border bg-background text-foreground hover:bg-muted"
            )}
          >
            All
          </Link>
          {allCategories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className={cn(
                "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
                currentCategory === category
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border bg-background text-foreground hover:bg-muted"
              )}
            >
              {categoryLabels[category]}
            </Link>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="space-y-20">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <article key={index} className="group relative">
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Title section with vertical line */}
                <div className="border-brand border-l-2 pl-4">
                  {/* Date and category */}
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                      {formatDate(post.date)}
                    </time>
                    <CategoryBadge category={post.category} />
                    {post.readTime && (
                      <span className="text-muted-foreground text-xs">
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title and description */}
                  <h2 className="display mb-1 text-xl tracking-tight transition-colors group-hover:text-brand md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {post.description}
                  </p>
                </div>

                {/* Image */}
                {post.image && (
                  <div className="mt-6">
                    <img
                      src={post.image}
                      alt=""
                      className="aspect-video w-full rounded-2xl object-cover shadow-sm"
                    />
                  </div>
                )}
              </Link>
            </article>
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground text-lg">No articles found</p>
            <p className="text-muted-foreground mt-2 text-sm">
              {currentCategory
                ? "No articles in this category yet."
                : "Check back soon for new articles."}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
