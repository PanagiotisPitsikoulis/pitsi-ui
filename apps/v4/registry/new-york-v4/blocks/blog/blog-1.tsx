"use client"

import Image from "next/image"
import Link from "next/link"

import { blogDefaults, type BlogBlockProps } from "@/lib/blocks/blog.types"
import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Button } from "@/registry/new-york-v4/ui/button"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "From Our Blog",
  title: "Plant Care Tips",
  posts: [
    {
      title: "The Ultimate Guide to Monstera Care",
      excerpt:
        "Everything you need to know about keeping your Monstera deliciosa happy and thriving.",
      image: {
        src: "/elements/landscape/plants/2.webp",
        alt: "Monstera Care",
      },
      category: "Care Guide",
      readTime: "5 min read",
      author: {
        name: "Emma Green",
        avatar: { src: "/avatars/04.webp", alt: "Emma Green" },
      },
      href: "#",
    },
    {
      title: "Best Low-Light Plants for Your Office",
      excerpt:
        "Transform your workspace with these hardy plants that thrive without direct sunlight.",
      image: {
        src: "/elements/landscape/plants/3.webp",
        alt: "Office Plants",
      },
      category: "Plant Selection",
      readTime: "4 min read",
      author: {
        name: "Sofia Bloom",
        avatar: { src: "/avatars/06.webp", alt: "Sofia Bloom" },
      },
      href: "#",
    },
    {
      title: "How to Propagate Your Favorite Plants",
      excerpt:
        "Learn the art of plant propagation and grow your collection for free.",
      image: {
        src: "/elements/landscape/plants/4.webp",
        alt: "Plant Propagation",
      },
      category: "Tips & Tricks",
      readTime: "6 min read",
      author: {
        name: "James Fern",
        avatar: { src: "/avatars/05.webp", alt: "James Fern" },
      },
      href: "#",
    },
  ],
  cta: {
    label: "View All Articles",
    href: "#",
    variant: "secondary" as const,
  },
}

// Card background colors for the parallax effect (sage palette)
const cardColors = [
  "hsl(var(--card))",
  "hsl(var(--muted))",
  "hsl(var(--card))",
]

export function Blog1({ content = {}, classNames = {} }: BlogBlockProps) {
  // Merge content with block-specific defaults, falling back to generic defaults
  const {
    badge = blockDefaults.badge ?? blogDefaults.badge,
    title = blockDefaults.title ?? blogDefaults.title,
    posts = blockDefaults.posts ?? blogDefaults.posts,
    cta = blockDefaults.cta ?? blogDefaults.cta,
  } = content

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <SlideUp delay={0} distance={20}>
          <div
            className={cn(
              "mb-12 flex flex-col md:flex-row md:items-end md:justify-between",
              classNames.header?.root
            )}
          >
            <div>
              {badge && (
                <p
                  className={cn(
                    "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                    classNames.header?.badge
                  )}
                >
                  {badge}
                </p>
              )}
              <h2
                className={cn(
                  "font-display text-foreground text-3xl font-bold md:text-5xl",
                  classNames.header?.title
                )}
              >
                {title}
              </h2>
            </div>
            {cta && (
              <Link
                href={cta.href}
                className={cn("mt-4 md:mt-0", classNames.cta)}
              >
                <Button
                  variant={cta.variant ?? "secondary"}
                  className="bg-page hover:bg-page hover:text-muted-foreground/50 rounded-full"
                >
                  {cta.label}
                </Button>
              </Link>
            )}
          </div>
        </SlideUp>

        {/* CardsParallax for posts */}
        <CardsParallaxContainer
          cardCount={posts.length}
          className="min-h-[200vh]"
        >
          {posts.map((post, i) => (
            <ParallaxCard
              key={i}
              index={i}
              backgroundColor={cardColors[i % cardColors.length]}
              className="border-border flex h-auto min-h-[400px] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border shadow-lg md:flex-row md:min-h-[350px]"
              cardOffset={30}
              scaleStep={0.04}
            >
              <Link
                href={post.href}
                className={cn("group flex flex-1 flex-col md:flex-row", classNames.post?.root)}
              >
                {/* Image side */}
                <div
                  className={cn(
                    "relative aspect-[4/3] w-full shrink-0 overflow-hidden md:aspect-auto md:w-2/5",
                    classNames.post?.image
                  )}
                >
                  {post.image && (
                    <Image
                      draggable={false}
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      className="pointer-events-none object-cover transition-transform duration-500 select-none group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content side */}
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <div
                    className={cn(
                      "mb-3 flex items-center gap-3",
                      classNames.post?.meta
                    )}
                  >
                    {post.category && (
                      <span
                        className={cn(
                          "text-primary text-xs font-medium",
                          classNames.post?.category
                        )}
                      >
                        {post.category}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="text-muted-foreground text-xs">
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors md:text-2xl",
                      classNames.post?.title
                    )}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p
                      className={cn(
                        "text-muted-foreground mb-4 line-clamp-3 text-sm md:text-base",
                        classNames.post?.excerpt
                      )}
                    >
                      {post.excerpt}
                    </p>
                  )}
                  {post.author && (
                    <div
                      className={cn(
                        "mt-auto flex items-center gap-2",
                        classNames.post?.author
                      )}
                    >
                      {post.author.avatar && (
                        <div className="bg-muted relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            draggable={false}
                            src={post.author.avatar.src}
                            alt={post.author.avatar.alt}
                            fill
                            className="pointer-events-none object-cover select-none"
                          />
                        </div>
                      )}
                      <span className="text-muted-foreground text-sm">
                        {post.author.name}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </ParallaxCard>
          ))}
        </CardsParallaxContainer>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Blog1 as BlogServicePlants }
