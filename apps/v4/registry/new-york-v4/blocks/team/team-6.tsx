"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  SmoothParallaxContainer,
  SmoothParallaxLayer,
} from "@/registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll"

interface TeamBlockProps {
  content?: {
    story?: {
      title: string
      content: string
      image: string
    }
    values?: Array<{
      title: string
      description: string
    }>
    members?: Array<{
      name: string
      role: string
      avatar: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
  }
}

const team6Defaults = {
  story: {
    title: "Our Story",
    content:
      "Founded in 2020, we started with a simple mission: to help businesses succeed in the digital age. What began as a small team of passionate individuals has grown into a global company serving thousands of customers. Our journey has been defined by our commitment to innovation, quality, and customer success. We believe in building lasting relationships and creating products that truly make a difference.",
    image: "/elements/landscape/plants/1.webp",
  },
  values: [
    {
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      title: "Customer Focus",
      description: "Every decision we make starts with our customers in mind.",
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency and honest communication.",
    },
    {
      title: "Collaboration",
      description: "We achieve more together than we ever could alone.",
    },
  ],
  members: [
    { name: "Sarah Johnson", role: "CEO", avatar: "/avatars/01.webp" },
    { name: "Michael Chen", role: "CTO", avatar: "/avatars/02.webp" },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      avatar: "/avatars/03.webp",
    },
    {
      name: "David Park",
      role: "Engineering Lead",
      avatar: "/avatars/04.webp",
    },
    { name: "Lisa Wang", role: "Marketing", avatar: "/avatars/05.webp" },
    { name: "James Foster", role: "Sales", avatar: "/avatars/06.webp" },
    { name: "Amanda Lee", role: "Operations", avatar: "/avatars/07.webp" },
    { name: "Kevin Brown", role: "Support", avatar: "/avatars/08.webp" },
  ],
}

export function Team6({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    story = team6Defaults.story,
    values = team6Defaults.values,
    members = team6Defaults.members,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Story Section with SmoothParallaxScroll */}
        <SmoothParallaxContainer height="150vh" className="mb-20">
          <div className="grid items-center gap-12 px-4 lg:grid-cols-2">
            <SmoothParallaxLayer yRange={[-100, 0]} zIndex={1}>
              <div>
                <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
                  {story.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {story.content}
                </p>
              </div>
            </SmoothParallaxLayer>
            <SmoothParallaxLayer yRange={[-200, 0]} zIndex={2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={story.image}
                  alt="Our story"
                  fill
                  className="object-cover"
                />
              </div>
            </SmoothParallaxLayer>
          </div>
        </SmoothParallaxContainer>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-foreground mb-8 text-center text-2xl font-bold">
            Our Values
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="border-border rounded-xl border p-6 text-center"
              >
                <h4 className="text-foreground mb-2 font-semibold">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <h3 className="text-foreground mb-8 text-center text-2xl font-bold">
            Meet the Team
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {members.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative mx-auto mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-xl">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-foreground font-semibold">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
