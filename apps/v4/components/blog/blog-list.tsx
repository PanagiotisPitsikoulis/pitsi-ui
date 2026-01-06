import Image from "next/image"
import Link from "next/link"

import {
  categoryLabels,
  getBlogCategories,
  type BlogCategory,
} from "@/lib/blog/source"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

import { CategoryBadge } from "./category-badge"

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

const allCategories = getBlogCategories()

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
                  <h2 className="display group-hover:text-brand mb-1 text-xl tracking-tight transition-colors md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {post.description}
                  </p>
                </div>

                {/* Image */}
                {post.image && (
                  <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="object-cover"
                      priority={false}
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
