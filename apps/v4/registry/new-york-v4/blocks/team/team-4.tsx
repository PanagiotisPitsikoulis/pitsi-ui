"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface TeamBlockProps {
  content?: {
    title?: string
    description?: string
    leadership?: Array<{
      name: string
      role: string
      avatar: string
      bio: string
      linkedin: string
    }>
    team?: Array<{
      name: string
      role: string
      avatar: string
      department: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const team4Defaults = {
  title: "Our Team",
  description:
    "A diverse group of passionate individuals working together to create something amazing.",
  leadership: [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      avatar: "/avatars/01.webp",
      bio: "Sarah founded the company in 2020 with a vision to transform how businesses operate. She brings 20 years of industry experience.",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      avatar: "/avatars/02.webp",
      bio: "Michael leads our engineering team and is responsible for our technical vision. Previously at Google and Stripe.",
      linkedin: "#",
    },
  ],
  team: [
    {
      name: "Emily R.",
      role: "Head of Design",
      avatar: "/avatars/03.webp",
      department: "Design",
    },
    {
      name: "David P.",
      role: "Engineering Lead",
      avatar: "/avatars/04.webp",
      department: "Engineering",
    },
    {
      name: "Lisa W.",
      role: "Product Manager",
      avatar: "/avatars/05.webp",
      department: "Product",
    },
    {
      name: "James F.",
      role: "Senior Engineer",
      avatar: "/avatars/06.webp",
      department: "Engineering",
    },
    {
      name: "Amanda S.",
      role: "UX Designer",
      avatar: "/avatars/07.webp",
      department: "Design",
    },
    {
      name: "Kevin L.",
      role: "DevOps Engineer",
      avatar: "/avatars/08.webp",
      department: "Engineering",
    },
  ],
}

export function Team4({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    title = team4Defaults.title,
    description = team4Defaults.description,
    leadership = team4Defaults.leadership,
    team = team4Defaults.team,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          title={title}
          description={description}
          spacing="none"
          className="mb-16"
          classNames={classNames.header}
        />

        {/* Leadership Section with CardsParallax */}
        <CardsParallaxContainer
          cardCount={leadership.length}
          className="mb-16"
        >
          <h3 className="text-foreground mb-8 text-center text-xl font-semibold">
            Leadership
          </h3>
          {leadership.map((leader, i) => (
            <ParallaxCard
              key={i}
              index={i}
              backgroundColor="hsl(var(--background))"
              className="mx-auto max-w-4xl"
              cardOffset={30}
              scaleStep={0.04}
            >
              <div className="flex h-full flex-col items-center gap-6 p-8 text-center md:flex-row md:text-left">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={leader.avatar}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-foreground text-lg font-semibold">
                    {leader.name}
                  </h4>
                  <p className="text-primary mb-2 text-sm">{leader.role}</p>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {leader.bio}
                  </p>
                  <Link
                    href={leader.linkedin}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ParallaxCard>
          ))}
        </CardsParallaxContainer>

        {/* Team Grid */}
        <div>
          <h3 className="text-foreground mb-8 text-center text-xl font-semibold">
            The Team
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-foreground font-medium">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
                <span className="bg-muted-foreground/10 text-muted-foreground mt-2 inline-block rounded-full px-2 py-0.5 text-xs">
                  {member.department}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
