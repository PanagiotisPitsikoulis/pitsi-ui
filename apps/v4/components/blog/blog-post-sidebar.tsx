import { type BlogCategory } from "@/lib/blog/source"
import { formatDate } from "@/lib/format"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { BackLink } from "@/components/navigation/back-link"

import { CategoryBadge } from "./category-badge"

interface BlogPostSidebarProps {
  date: string
  category: BlogCategory
  title: string
  description: string
  readTime?: string
}

export function BlogPostSidebar({
  date,
  category,
  title,
  description,
  readTime,
}: BlogPostSidebarProps) {
  return (
    <>
      <BackLink href="/blog">Back to blog</BackLink>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          {formatDate(date)}
        </time>
        <CategoryBadge category={category} />
      </div>
      <Spacer size="sm" sizeMobile="xs" />
      <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <Spacer size="md" sizeMobile="sm" />
      <p className="text-muted-foreground text-base md:text-lg">{description}</p>
      <Spacer size="md" sizeMobile="sm" />
      {readTime && (
        <span className="text-muted-foreground text-sm">{readTime}</span>
      )}
    </>
  )
}
