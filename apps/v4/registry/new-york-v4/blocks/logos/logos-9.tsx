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
      category: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos9Defaults = {
  title: "Our Travel Partners",
  description:
    "We collaborate with world-class travel brands to bring you unforgettable experiences.",
  logos: [
    {
      name: "SkyWings Airlines",
      category: "Airlines",
      href: "#",
    },
    {
      name: "Grand Hotels Group",
      category: "Accommodation",
      href: "#",
    },
    {
      name: "Wanderlust Tours",
      category: "Tour Operators",
      href: "#",
    },
    {
      name: "Ocean Cruise Lines",
      category: "Cruises",
      href: "#",
    },
    {
      name: "Alpine Resorts",
      category: "Resorts",
      href: "#",
    },
    {
      name: "Safari Expeditions",
      category: "Adventures",
      href: "#",
    },
  ],
}

export function Logos9({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos9Defaults.title,
    description = logos9Defaults.description,
    logos = logos9Defaults.logos,
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((logo, i) => (
            <Link
              key={i}
              href={logo.href}
              className="border-border bg-card group relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-lg"
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 absolute inset-0 transition-colors" />
              <div className="relative">
                <div className="bg-muted mb-4 flex h-16 items-center justify-center rounded-lg">
                  <span className="text-muted-foreground group-hover:text-primary text-lg font-semibold tracking-wider transition-colors">
                    {logo.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-xs font-medium tracking-wider uppercase">
                    {logo.category}
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary text-sm transition-colors">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
