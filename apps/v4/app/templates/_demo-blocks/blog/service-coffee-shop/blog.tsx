"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceCoffeeShop() {
  const stories = [
    {
      title: "Meet Our New Barista: Sarah's Journey",
      excerpt: "From coffee enthusiast to award-winning barista, Sarah shares her passion for the perfect espresso and creating community connections.",
      author: "Café Stories",
      date: "Dec 18",
      image: "/placeholders/blocks/service-coffee-shop/1.webp",
    },
    {
      title: "Behind the Beans: Our Ethiopian Yirgacheffe",
      excerpt: "Discover the story of our single-origin Ethiopian coffee, from the farmers who grow it to your morning cup.",
      author: "Origin Stories",
      date: "Dec 15",
      image: "/placeholders/blocks/service-coffee-shop/2.webp",
    },
    {
      title: "Community Sundays: A New Tradition",
      excerpt: "How our weekly community gatherings are bringing neighbors together over great coffee and conversation.",
      author: "Community",
      date: "Dec 12",
      image: "/placeholders/blocks/service-coffee-shop/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-3">Stories from the Café</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Coffee & Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The stories behind the cups, the people, and the moments that make our café special
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative h-full">
                {/* Polaroid-style card */}
                <div className="bg-card border border-border rounded-sm p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1">
                  <div className="relative aspect-square overflow-hidden bg-muted mb-3">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-3 p-2">
                    {/* Handwritten date style */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground italic font-handwriting">
                        {story.date}
                      </span>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {story.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {story.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-primary">
                      <span className="text-xs font-semibold uppercase tracking-wide">Read Story</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tape effect at top */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-muted/40 border-l border-r border-border/30 -rotate-1 blur-[0.5px]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
