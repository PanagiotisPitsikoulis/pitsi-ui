"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceRealEstate() {
  const insights = [
    {
      title: "2024 Market Forecast: What Buyers Need to Know",
      excerpt: "Expert analysis of emerging market trends, interest rate predictions, and strategic timing for your next property purchase.",
      category: "Market Analysis",
      propertyType: "Residential",
      metrics: [
        { label: "Avg Price Change", value: "+3.2%" },
        { label: "Market Activity", value: "Strong" },
      ],
      image: "/placeholders/blocks/service-real-estate/1.webp",
    },
    {
      title: "Investment Properties: Maximizing ROI",
      excerpt: "Data-driven strategies for identifying high-yield investment opportunities and optimizing your real estate portfolio performance.",
      category: "Investment",
      propertyType: "Commercial",
      metrics: [
        { label: "Avg ROI", value: "8.5%" },
        { label: "Vacancy Rate", value: "3.1%" },
      ],
      image: "/placeholders/blocks/service-real-estate/2.webp",
    },
    {
      title: "First-Time Home Buyer's Complete Guide",
      excerpt: "Navigate the home-buying process with confidence. From pre-approval to closing, we cover everything you need to know.",
      category: "Buyer Guide",
      propertyType: "Residential",
      metrics: [
        { label: "Avg Down Payment", value: "15%" },
        { label: "Time to Close", value: "45 days" },
      ],
      image: "/placeholders/blocks/service-real-estate/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Market Insights</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Real Estate Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Data-driven insights and expert analysis for informed property decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                  {/* Property type badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded border border-border shadow-sm">
                      <span className="text-xs font-semibold text-foreground">{insight.propertyType}</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                      {insight.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {insight.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {insight.excerpt}
                  </p>

                  {/* Market metrics */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-3">
                      {insight.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-lg p-3 border border-border/50">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-medium">
                            {metric.label}
                          </p>
                          <p className="text-base font-bold text-foreground">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      Read Full Report
                    </span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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
