import { ReactNode } from "react"

import { categoryLabels, type BlogCategory } from "@/lib/blog/source"
import { BackLink } from "@/components/navigation/back-link"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface BlogListSidebarProps {
  category?: BlogCategory
  page: number
  icon: ReactNode
}

export function BlogListSidebar({
  category,
  page,
  icon,
}: BlogListSidebarProps) {
  const pageTitle = category ? `${categoryLabels[category]} Articles` : "Blog"
  const pageSubtitle = category
    ? `Browse ${categoryLabels[category].toLowerCase()} articles from the pitsi/ui team.`
    : "Insights, tutorials, and updates from the pitsi/ui team."

  return (
    <>
      <BackLink href="/">Back to home</BackLink>
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        {category ? categoryLabels[category] : "Articles"}
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h1 className="display text-4xl leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
        {pageTitle}
        {page > 1 && (
          <span className="text-muted-foreground"> - Page {page}</span>
        )}
      </h1>
      <Spacer size="lg" sizeMobile="md" />
      <p className="text-muted-foreground text-base md:text-lg">
        {pageSubtitle}
      </p>
      <Spacer size="6xl" sizeMobile="2xl" />
      <div className="flex justify-center">{icon}</div>
    </>
  )
}
