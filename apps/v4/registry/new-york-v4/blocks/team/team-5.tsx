"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface TeamBlockProps {
  content?: {
    title?: string
    description?: string
    members?: Array<{
      name: string
      role: string
      avatar: string
      bio: string
      linkedin?: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const team5Defaults = {
  title: "Our Experts",
  description: "Get to know the people who make it all happen.",
  members: [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "/avatars/01.webp",
      bio: "Sarah brings 15 years of experience in tech leadership. She's passionate about building products that make a difference.",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      avatar: "/avatars/02.webp",
      bio: "Michael is our tech visionary, leading engineering initiatives and driving innovation across all our products.",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Design",
      avatar: "/avatars/03.webp",
      bio: "Emily leads our design team, ensuring every product we ship delights users with its thoughtful design.",
      linkedin: "#",
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      avatar: "/avatars/04.webp",
      bio: "David oversees our engineering team, building scalable systems that power millions of users.",
      linkedin: "#",
    },
    {
      name: "Lisa Wang",
      role: "VP of Marketing",
      avatar: "/avatars/05.webp",
      bio: "Lisa drives our marketing strategy, growing our brand presence and customer engagement worldwide.",
      linkedin: "#",
    },
  ],
}

export function Team5({ content = {}, classNames = {} }: TeamBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const {
    title = team5Defaults.title,
    description = team5Defaults.description,
    members = team5Defaults.members,
  } = content

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
  }

  const current = members[currentIndex]

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

        <div className="mx-auto max-w-4xl">
          {/* Main Content */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="text-foreground mb-1 text-2xl font-bold">
                {current.name}
              </h3>
              <p className="text-primary mb-4 font-medium">{current.role}</p>
              <p className="text-muted-foreground mb-6">{current.bio}</p>

              {current.linkedin && (
                <Link
                  href={current.linkedin}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </Link>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center gap-4">
                <Button variant="outline" size="icon" onClick={prevSlide}>
                  <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
                </Button>
                <span className="text-muted-foreground text-sm">
                  {currentIndex + 1} / {members.length}
                </span>
                <Button variant="outline" size="icon" onClick={nextSlide}>
                  <DynamicIcon name="ChevronRight" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex justify-center gap-3">
            {members.map((member, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "relative h-12 w-12 overflow-hidden rounded-full transition-all",
                  i === currentIndex
                    ? "ring-primary ring-2 ring-offset-2"
                    : "opacity-50 hover:opacity-100"
                )}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
