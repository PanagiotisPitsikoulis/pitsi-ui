"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceMarketing() {
  const caseStudies = [
    {
      title: "SaaS Startup Achieves 300% Growth in 6 Months",
      excerpt: "How we helped a B2B SaaS company triple their MRR through targeted content marketing and conversion optimization.",
      client: "TechFlow",
      industry: "SaaS",
      metrics: [
        { label: "Revenue Growth", value: "+300%" },
        { label: "Lead Quality", value: "+85%" },
      ],
      image: "/placeholders/blocks/service-marketing/1.webp",
    },
    {
      title: "E-commerce Brand Doubles Conversion Rate",
      excerpt: "A data-driven approach to UX optimization and personalization that transformed shopping experiences and boosted sales.",
      client: "StyleCo",
      industry: "E-commerce",
      metrics: [
        { label: "Conversion Rate", value: "+112%" },
        { label: "AOV", value: "+45%" },
      ],
      image: "/placeholders/blocks/service-marketing/2.webp",
    },
    {
      title: "Local Service Business Goes National",
      excerpt: "Strategic SEO and local marketing tactics that enabled a regional business to expand into 15 new markets successfully.",
      client: "HomePro",
      industry: "Services",
      metrics: [
        { label: "Market Expansion", value: "15 Cities" },
        { label: "Organic Traffic", value: "+420%" },
      ],
      image: "/placeholders/blocks/service-marketing/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-16">
          <div className="inline-block bg-primary/10 px-4 py-1 rounded-full mb-4">
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real businesses, measurable growth, data-driven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Client badge */}
                  <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {study.client.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{study.client}</p>
                        <p className="text-[10px] text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {study.excerpt}
                  </p>

                  {/* Metrics highlights */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">
                      Key Results
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-muted rounded-lg p-3">
                          <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                          <p className="text-lg font-bold text-primary">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      Read Case Study
                    </span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
