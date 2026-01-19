"use client"

import Link from "next/link"
import { Quote } from "lucide-react"

import { cn } from "@/lib/utils"

interface LogosBlockProps {
  content?: {
    badge?: string
    title?: string
    press?: Array<{
      name: string
      quote: string
      href: string
    }>
    logos?: Array<{ name: string }>
  }
  classNames?: {
    root?: string
    container?: string
    badge?: string
    title?: string
  }
}

const logos10Defaults = {
  badge: "As Seen In",
  title: "Award-winning travel experiences",
  press: [
    {
      name: "Travel + Leisure",
      quote: "The best travel agency for luxury adventures",
      href: "#",
    },
    {
      name: "Conde Nast Traveler",
      quote: "Redefining the way we explore the world",
      href: "#",
    },
    {
      name: "National Geographic",
      quote: "Sustainable travel done right",
      href: "#",
    },
  ],
  logos: [
    { name: "Forbes Travel" },
    { name: "The Telegraph" },
    { name: "Lonely Planet" },
    { name: "Afar Magazine" },
    { name: "Travel Weekly" },
  ],
}

export function Logos10({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    badge = logos10Defaults.badge,
    title = logos10Defaults.title,
    press = logos10Defaults.press,
    logos = logos10Defaults.logos,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 text-center">
          {badge && (
            <span
              className={cn(
                "text-primary mb-3 inline-block text-sm font-medium tracking-widest uppercase",
                classNames.badge
              )}
            >
              {badge}
            </span>
          )}
          {title && (
            <h2
              className={cn(
                "text-foreground text-3xl font-bold md:text-4xl",
                classNames.title
              )}
            >
              {title}
            </h2>
          )}
        </div>

        {/* Press Quotes */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {press.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="bg-background border-border group rounded-xl border p-6 transition-all hover:shadow-lg"
            >
              <Quote className="text-primary/30 mb-4 h-8 w-8" />
              <p className="text-foreground mb-4 text-sm leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="text-muted-foreground group-hover:text-primary text-sm font-semibold tracking-wider transition-colors">
                {item.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Logo Row */}
        <div className="border-border border-t pt-10">
          <p className="text-muted-foreground mb-6 text-center text-xs tracking-widest uppercase">
            Also featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="text-muted-foreground/40 hover:text-muted-foreground text-sm font-semibold tracking-wider transition-colors md:text-base"
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
