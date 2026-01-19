"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Badge } from "@/registry/new-york-v4/ui/badge"

interface BlogBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    categories?: string[]
    posts?: Array<{
      title: string
      excerpt: string
      category: string
      readTime: string
      date: string
      featured?: boolean
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
  }
}

const blog10Defaults = {
  badge: "Travel Tips",
  title: "Expert Advice for Every Journey",
  description:
    "Curated tips from seasoned travelers to help you navigate the world with confidence.",
  categories: ["All", "Planning", "Safety", "Budget", "Solo Travel", "Family"],
  posts: [
    {
      title: "15 Money-Saving Hacks Every Traveler Should Know",
      excerpt:
        "From flight booking timing to local currency tips, these strategies will stretch your travel budget further.",
      category: "Budget",
      readTime: "7 min read",
      date: "Jan 8, 2025",
      featured: true,
      href: "#",
    },
    {
      title: "How to Stay Safe While Traveling Solo",
      excerpt:
        "Essential safety tips and precautions for confident solo exploration.",
      category: "Solo Travel",
      readTime: "6 min read",
      date: "Jan 6, 2025",
      href: "#",
    },
    {
      title: "The Complete Airport Navigation Guide",
      excerpt:
        "Beat the stress of international airports with these insider tips.",
      category: "Planning",
      readTime: "5 min read",
      date: "Jan 4, 2025",
      href: "#",
    },
    {
      title: "Keeping Kids Entertained on Long Flights",
      excerpt:
        "Tried and tested activities to make flying with children enjoyable.",
      category: "Family",
      readTime: "8 min read",
      date: "Jan 2, 2025",
      href: "#",
    },
    {
      title: "Travel Insurance: What You Actually Need",
      excerpt:
        "A no-nonsense guide to understanding and choosing travel insurance.",
      category: "Safety",
      readTime: "9 min read",
      date: "Dec 30, 2024",
      href: "#",
    },
    {
      title: "How to Avoid Tourist Traps",
      excerpt:
        "Spot the red flags and find authentic local experiences instead.",
      category: "Budget",
      readTime: "5 min read",
      date: "Dec 28, 2024",
      href: "#",
    },
    {
      title: "Building a Flexible Travel Itinerary",
      excerpt: "The art of planning enough without over-scheduling your trip.",
      category: "Planning",
      readTime: "6 min read",
      date: "Dec 26, 2024",
      href: "#",
    },
    {
      title: "Making Friends While Traveling Alone",
      excerpt:
        "Strategies for meaningful connections when you are on your own.",
      category: "Solo Travel",
      readTime: "7 min read",
      date: "Dec 24, 2024",
      href: "#",
    },
  ],
}

export function Blog10({ content = {}, classNames = {} }: BlogBlockProps) {
  const {
    badge = blog10Defaults.badge,
    title = blog10Defaults.title,
    description = blog10Defaults.description,
    categories = blog10Defaults.categories,
    posts = blog10Defaults.posts,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </SlideUp>

        {/* Category Pills */}
        <SlideUp delay={0.1} distance={20}>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SlideUp>

        {/* Posts List */}
        <div className="mx-auto max-w-3xl">
          <div className="divide-border divide-y">
            {posts.map((post, i) => (
              <ScrollFade key={i} delay={0.05 * i} scrollBased={false}>
                <Link
                  href={post.href}
                  className="group block py-6 first:pt-0 last:pb-0"
                >
                  <article
                    className={cn(
                      "relative",
                      post.featured && "bg-background -mx-6 rounded-xl p-6"
                    )}
                  >
                    {post.featured && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary absolute top-6 right-6 hidden sm:inline-flex"
                      >
                        <DynamicIcon
                          name="Star"
                          className="mr-1 h-3 w-3 fill-current"
                        />
                        Featured
                      </Badge>
                    )}
                    <div className="mb-2 flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-primary font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground/50">-</span>
                      <span className="text-muted-foreground">{post.date}</span>
                      <span className="text-muted-foreground/50">-</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <DynamicIcon name="Clock" className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "text-foreground mb-2 font-semibold transition-colors group-hover:underline",
                        post.featured ? "text-xl md:text-2xl" : "text-lg"
                      )}
                    >
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {post.excerpt}
                    </p>
                    <span className="text-primary mt-3 inline-flex items-center text-sm font-medium">
                      Read Article
                      <DynamicIcon
                        name="ArrowRight"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </article>
                </Link>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* Load More */}
        <SlideUp delay={0.5} distance={20}>
          <div className="mt-12 text-center">
            <button className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors">
              Load More Articles
              <DynamicIcon name="ChevronDown" className="h-4 w-4" />
            </button>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
