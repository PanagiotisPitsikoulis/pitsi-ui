"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface LogosBlockProps {
  content?: {
    title?: string
    description?: string
    logos?: Array<{
      name: string
      description: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos3Defaults = {
  title: "Our Partners",
  description: "We work with the best companies in the industry.",
  logos: [
    {
      name: "Acme Corporation",
      description: "Enterprise software solutions",
      href: "#",
    },
    {
      name: "TechGlobal Inc",
      description: "Cloud infrastructure provider",
      href: "#",
    },
    {
      name: "Innovate Labs",
      description: "AI and machine learning",
      href: "#",
    },
    {
      name: "DataFlow Systems",
      description: "Data analytics platform",
      href: "#",
    },
    {
      name: "SecureNet",
      description: "Cybersecurity services",
      href: "#",
    },
    {
      name: "CloudFirst",
      description: "Multi-cloud management",
      href: "#",
    },
  ],
}

export function Logos3({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos3Defaults.title,
    description = logos3Defaults.description,
    logos = logos3Defaults.logos,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((logo, i) => (
            <Link
              key={i}
              href={logo.href}
              className="border-border bg-card group hover:border-primary rounded-xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="bg-muted mb-4 flex h-16 items-center justify-center rounded-lg">
                <span className="text-muted-foreground group-hover:text-foreground text-lg font-semibold tracking-wider transition-colors">
                  {logo.name}
                </span>
              </div>
              <h3 className="text-foreground mb-1 font-semibold">
                {logo.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {logo.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
