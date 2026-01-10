"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface LogosBlockProps {
  content?: {
    title?: string
    description?: string
    featured?: Array<{
      name: string
      caseStudyHref: string
    }>
    logos?: Array<{ name: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos4Defaults = {
  title: "Trusted by the Best",
  description:
    "Join thousands of companies that rely on our platform to grow their business.",
  featured: [
    { name: "Stripe", caseStudyHref: "#" },
    { name: "Vercel", caseStudyHref: "#" },
    { name: "Linear", caseStudyHref: "#" },
  ],
  logos: [
    { name: "Notion" },
    { name: "Figma" },
    { name: "Slack" },
    { name: "Discord" },
    { name: "Spotify" },
    { name: "Airbnb" },
  ],
}

export function Logos4({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos4Defaults.title,
    description = logos4Defaults.description,
    featured = logos4Defaults.featured,
    logos = logos4Defaults.logos,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Featured Partners */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {featured.map((partner, i) => (
            <div
              key={i}
              className="bg-background border-border rounded-xl border p-8 text-center"
            >
              <div className="bg-muted mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                <span className="text-foreground text-2xl font-bold">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                {partner.name}
              </h3>
              <Button variant="link" asChild className="group">
                <Link href={partner.caseStudyHref}>
                  Read case study
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Other Logos */}
        <div className="border-border border-t pt-12">
          <p className="text-muted-foreground mb-6 text-center text-sm">
            And many more innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="text-muted-foreground/50 hover:text-foreground text-lg font-semibold tracking-wider transition-colors"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
