"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServicePsychologist() {
  const articles = [
    {
      title: "Understanding Anxiety: Tools for Daily Life",
      excerpt: "Learn practical strategies to manage anxiety and cultivate inner calm. Evidence-based techniques you can apply immediately.",
      topic: "Anxiety",
      readTime: "8 min read",
      author: "Dr. Sarah Mitchell",
      image: "/placeholders/blocks/service-psychologist/1.webp",
    },
    {
      title: "Building Resilience Through Mindfulness",
      excerpt: "Discover how mindfulness practices can strengthen your emotional resilience and help you navigate life's challenges with greater ease.",
      topic: "Mindfulness",
      readTime: "6 min read",
      author: "Dr. James Chen",
      image: "/placeholders/blocks/service-psychologist/2.webp",
    },
    {
      title: "Healthy Relationships: Setting Boundaries",
      excerpt: "The importance of boundaries in maintaining healthy relationships. Learn how to communicate your needs with compassion and clarity.",
      topic: "Relationships",
      readTime: "7 min read",
      author: "Dr. Emily Torres",
      image: "/placeholders/blocks/service-psychologist/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-1 bg-primary/5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
              <span className="text-primary text-xs uppercase tracking-wider font-medium">Wellness Journal</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Mental Health Insights
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Evidence-based guidance for emotional wellbeing and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-card to-card/50 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                  {/* Calm wave decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {article.topic}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-4 border-t border-border/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">
                          {article.author.split(' ')[1][0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-foreground">{article.author}</p>
                        <p className="text-xs text-muted-foreground">{article.readTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm text-primary font-medium group-hover:underline inline-flex items-center gap-2">
                      Continue Reading
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
