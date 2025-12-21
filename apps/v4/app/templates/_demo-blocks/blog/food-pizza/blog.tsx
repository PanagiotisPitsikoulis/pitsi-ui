"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogFoodPizza() {
  const posts = [
    {
      title: "The Art of Neapolitan Pizza: Tradition Meets Perfection",
      excerpt: "Discover the centuries-old techniques behind authentic Neapolitan pizza, from hand-stretched dough to wood-fired perfection.",
      author: "Chef Marco Rossi",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "/placeholders/blocks/food-pizza/1.webp",
    },
    {
      title: "Beyond Margherita: Exploring Regional Italian Pizzas",
      excerpt: "Take a culinary journey through Italy's diverse pizza traditions, from Roman pinsa to Sicilian sfincione.",
      author: "Isabella Ferrari",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "/placeholders/blocks/food-pizza/2.webp",
    },
    {
      title: "Mastering the Perfect Pizza Dough at Home",
      excerpt: "Learn the secrets to creating restaurant-quality pizza dough in your own kitchen with our step-by-step guide.",
      author: "Chef Marco Rossi",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      image: "/placeholders/blocks/food-pizza/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            From Our Kitchen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stories, recipes, and insights from pizza artisans around the world
          </p>
        </div>

        <div className="space-y-16">
          {posts.map((post, i) => (
            <Link
              href="#"
              key={i}
              className="group block"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">Contributor</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      Read Full Story
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
