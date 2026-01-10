"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface LogosBlockProps {
  content?: {
    title?: string
    description?: string
    testimonials?: Array<{
      company: string
      quote: string
      author: {
        name: string
        role: string
        avatar: string
      }
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const logos6Defaults = {
  title: "What Our Customers Say",
  description: "See why industry leaders choose us.",
  testimonials: [
    {
      company: "Acme Corp",
      quote:
        "This platform transformed how we handle our operations. The results speak for themselves.",
      author: {
        name: "Sarah Johnson",
        role: "CTO",
        avatar: "/avatars/01.webp",
      },
      href: "#",
    },
    {
      company: "TechStart",
      quote:
        "We've seen a 300% increase in productivity since switching. Absolutely game-changing.",
      author: {
        name: "Michael Chen",
        role: "CEO",
        avatar: "/avatars/02.webp",
      },
      href: "#",
    },
    {
      company: "GlobalScale",
      quote:
        "The support team is incredible. They helped us migrate seamlessly with zero downtime.",
      author: {
        name: "Emily Rodriguez",
        role: "VP of Engineering",
        avatar: "/avatars/03.webp",
      },
      href: "#",
    },
  ],
}

export function Logos6({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos6Defaults.title,
    description = logos6Defaults.description,
    testimonials = logos6Defaults.testimonials,
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

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-background border-border flex flex-col rounded-xl border p-6"
            >
              {/* Company Logo Placeholder */}
              <div className="bg-muted mb-4 flex h-12 items-center justify-center rounded-lg">
                <span className="text-muted-foreground text-sm font-semibold tracking-wider">
                  {item.company}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 flex-1 text-sm leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-border flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={item.author.avatar}
                      alt={item.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {item.author.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {item.author.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild className="group">
            <Link href="#">
              Read all customer stories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
