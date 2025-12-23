"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogAiSciFi() {
  const logs = [
    {
      title: "Quantum Encryption Protocol Breach Analysis",
      excerpt: "Analysis of unauthorized access attempt to quantum communication channels. Security measures have been enhanced.",
      timestamp: "2247.11.23 14:32:17 UTC",
      classification: "RESTRICTED",
      logId: "QE-7832-Alpha",
      image: "/placeholders/blocks/ai-sci-fi/1.webp",
    },
    {
      title: "Neural Interface Compatibility Report v8.4",
      excerpt: "Latest findings on human-AI neural interface synchronization rates. Success metrics exceed previous benchmarks by 23%.",
      timestamp: "2247.11.20 09:15:44 UTC",
      classification: "CONFIDENTIAL",
      logId: "NI-4521-Beta",
      image: "/placeholders/blocks/ai-sci-fi/2.webp",
    },
    {
      title: "Deep Space Signal Anomaly: Sector 7G",
      excerpt: "Unidentified signal patterns detected at 0.7 light years. Recommend further analysis with enhanced telemetry.",
      timestamp: "2247.11.18 22:08:33 UTC",
      classification: "TOP SECRET",
      logId: "DS-9104-Gamma",
      image: "/placeholders/blocks/ai-sci-fi/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-mono tracking-wider">SYSTEM LOG ACCESS</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground font-mono mb-2">
            DATA_LOGS://
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            &gt; Retrieving archived entries...
          </p>
        </div>

        <div className="space-y-4">
          {logs.map((log, i) => (
            <Link
              href="#"
              key={i}
              className="group block border-l-4 border-primary/50 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300"
            >
              <div className="grid md:grid-cols-[140px,1fr] gap-4 p-6">
                <div className="relative aspect-square rounded overflow-hidden bg-muted border border-border">
                  <Image
                    src={log.image}
                    alt={log.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-primary bg-primary/20 px-2 py-1 rounded border border-primary/30">
                      {log.classification}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      LOG_ID: {log.logId}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground font-mono mb-2 group-hover:text-primary transition-colors">
                    {log.title}
                  </h3>

                  <p className="text-xs font-mono text-muted-foreground mb-3">
                    TIMESTAMP: {log.timestamp}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {log.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-mono text-primary">&gt;</span>
                    <span className="text-xs font-mono text-primary group-hover:underline">
                      ACCESS_FULL_REPORT
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
