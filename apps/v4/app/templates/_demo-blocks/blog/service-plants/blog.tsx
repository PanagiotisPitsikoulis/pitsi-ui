"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"

export function BlogServicePlants() {
  const posts = [
    {
      title: "The Ultimate Guide to Monstera Care",
      excerpt:
        "Everything you need to know about keeping your Monstera deliciosa happy and thriving.",
      image: "/placeholders/blocks/service-plants/2.webp",
      category: "Care Guide",
      readTime: "5 min read",
      author: {
        name: "Emma Green",
        avatar: "/avatars/04.webp",
      },
    },
    {
      title: "Best Low-Light Plants for Your Office",
      excerpt:
        "Transform your workspace with these hardy plants that thrive without direct sunlight.",
      image: "/placeholders/blocks/service-plants/3.webp",
      category: "Plant Selection",
      readTime: "4 min read",
      author: {
        name: "Sofia Bloom",
        avatar: "/avatars/06.webp",
      },
    },
    {
      title: "How to Propagate Your Favorite Plants",
      excerpt:
        "Learn the art of plant propagation and grow your collection for free.",
      image: "/placeholders/blocks/service-plants/4.webp",
      category: "Tips & Tricks",
      readTime: "6 min read",
      author: {
        name: "James Fern",
        avatar: "/avatars/05.webp",
      },
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              From Our Blog
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Plant Care Tips
            </h2>
          </div>
          <Link href="#" className="mt-4 md:mt-0">
            <Button variant="outline" className="rounded-full border-border">
              View All Articles
            </Button>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Link href="#" key={i} className="group">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image draggable={false}
                  src={post.image}
                  alt={post.title}
                  fill
                  className="select-none pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-medium text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full bg-muted">
                  <Image draggable={false}
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="select-none pointer-events-none object-cover"
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {post.author.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
