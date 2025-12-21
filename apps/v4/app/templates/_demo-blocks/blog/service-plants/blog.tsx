"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"

export function BlogServicePlants() {
  const posts = [
    {
      title: "The Ultimate Guide to Monstera Care",
      excerpt: "Everything you need to know about keeping your Monstera deliciosa happy and thriving.",
      image: "/placeholders/blocks/service-plants/2.webp",
      category: "Care Guide",
      readTime: "5 min read",
    },
    {
      title: "Best Low-Light Plants for Your Office",
      excerpt: "Transform your workspace with these hardy plants that thrive without direct sunlight.",
      image: "/placeholders/blocks/service-plants/3.webp",
      category: "Plant Selection",
      readTime: "4 min read",
    },
    {
      title: "How to Propagate Your Favorite Plants",
      excerpt: "Learn the art of plant propagation and grow your collection for free.",
      image: "/placeholders/blocks/service-plants/4.webp",
      category: "Tips & Tricks",
      readTime: "6 min read",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">From Our Blog</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Plant Care Tips
            </h2>
          </div>
          <Link href="#" className="mt-4 md:mt-0">
            <Button variant="outline" className="rounded-full border-border">
              View All Articles
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link href="#" key={i} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xs font-medium">{post.category}</span>
                <span className="text-muted-foreground text-xs">{post.readTime}</span>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
