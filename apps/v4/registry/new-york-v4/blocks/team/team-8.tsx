"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

interface TravelAdvisor {
  name: string
  role: string
  avatar: string
  bio: string
  destinations: string[]
  languages: string[]
  socials: {
    instagram?: string
    linkedin?: string
    email?: string
  }
}

interface TeamBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    advisors?: TravelAdvisor[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
    grid?: string
    member?: {
      root?: string
      avatar?: string
      name?: string
      role?: string
      bio?: string
      social?: string
      socialLink?: string
    }
  }
}

const team8Defaults = {
  badge: "Our Travel Experts",
  title: "Meet Your Adventure Guides",
  description:
    "Our passionate team of travel advisors brings decades of combined experience to help you discover the world's most breathtaking destinations.",
  advisors: [
    {
      name: "Elena Martinez",
      role: "Senior Travel Advisor",
      avatar: "/avatars/01.webp",
      bio: "Specializing in luxury European getaways and Mediterranean cruises. 12+ years crafting unforgettable journeys.",
      destinations: ["Europe", "Mediterranean", "Caribbean"],
      languages: ["English", "Spanish", "Italian"],
      socials: { instagram: "#", linkedin: "#", email: "#" },
    },
    {
      name: "James Chen",
      role: "Asia Pacific Specialist",
      avatar: "/avatars/02.webp",
      bio: "Expert in Asian cultures and hidden gems. From Tokyo's neon streets to Bali's serene temples.",
      destinations: ["Japan", "Thailand", "Indonesia"],
      languages: ["English", "Mandarin", "Japanese"],
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Sarah Thompson",
      role: "Adventure Travel Expert",
      avatar: "/avatars/03.webp",
      bio: "Curating adrenaline-packed expeditions and eco-tours. Certified dive master and trekking guide.",
      destinations: ["New Zealand", "Costa Rica", "Nepal"],
      languages: ["English", "French"],
      socials: { instagram: "#", email: "#" },
    },
    {
      name: "Michael Okonkwo",
      role: "African Safari Specialist",
      avatar: "/avatars/04.webp",
      bio: "Born and raised in Kenya, bringing authentic African experiences and wildlife expertise.",
      destinations: ["Kenya", "Tanzania", "South Africa"],
      languages: ["English", "Swahili"],
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Isabella Romano",
      role: "Honeymoon Curator",
      avatar: "/avatars/05.webp",
      bio: "Creating romantic escapes and once-in-a-lifetime celebration trips for couples.",
      destinations: ["Maldives", "Santorini", "Paris"],
      languages: ["English", "Italian", "French"],
      socials: { instagram: "#", email: "#" },
    },
    {
      name: "David Park",
      role: "Family Travel Specialist",
      avatar: "/avatars/06.webp",
      bio: "Planning stress-free family adventures with kid-friendly activities and accommodations.",
      destinations: ["Orlando", "Hawaii", "Australia"],
      languages: ["English", "Korean"],
      socials: { linkedin: "#", email: "#" },
    },
  ] as TravelAdvisor[],
}

export function Team8({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    badge = team8Defaults.badge,
    title = team8Defaults.title,
    description = team8Defaults.description,
  } = content

  const advisors =
    (content as { advisors?: TravelAdvisor[] }).advisors ??
    team8Defaults.advisors

  return (
    <section
      className={cn(
        "dark:via-background relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50/50 dark:from-sky-950 dark:to-sky-950/50",
        classNames.root
      )}
    >
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            spacing="compact"
            classNames={{
              ...classNames.header,
              badge: cn(
                "text-sky-600 dark:text-sky-400",
                classNames.header?.badge
              ),
            }}
          />
        </ScrollFade>

        <div
          className={cn(
            "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {advisors.map((advisor, index) => (
            <SlideUp key={advisor.name} delay={index * 0.1}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-sky-900 dark:bg-sky-950/50",
                  classNames.member?.root
                )}
              >
                {/* Header with avatar and info */}
                <div className="mb-4 flex items-start gap-4">
                  <Avatar
                    className={cn(
                      "h-16 w-16 ring-2 ring-sky-100 dark:ring-sky-800",
                      classNames.member?.avatar
                    )}
                  >
                    <AvatarImage src={advisor.avatar} alt={advisor.name} />
                    <AvatarFallback>
                      {advisor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "text-foreground text-lg font-semibold",
                        classNames.member?.name
                      )}
                    >
                      {advisor.name}
                    </h3>
                    <p
                      className={cn(
                        "text-sm font-medium text-sky-600 dark:text-sky-400",
                        classNames.member?.role
                      )}
                    >
                      {advisor.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p
                  className={cn(
                    "text-muted-foreground mb-4 text-sm",
                    classNames.member?.bio
                  )}
                >
                  {advisor.bio}
                </p>

                {/* Destinations */}
                <div className="mb-4">
                  <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                    Destinations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {advisor.destinations.map((dest) => (
                      <span
                        key={dest}
                        className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
                      >
                        <DynamicIcon name="MapPin" className="h-3 w-3" />
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {advisor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-muted-foreground text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div
                  className={cn(
                    "flex gap-2 border-t border-sky-100 pt-4 dark:border-sky-900",
                    classNames.member?.social
                  )}
                >
                  {advisor.socials.instagram && (
                    <Link
                      href={advisor.socials.instagram}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors hover:bg-sky-100 dark:bg-sky-900/50 dark:text-sky-400 dark:hover:bg-sky-900",
                        classNames.member?.socialLink
                      )}
                    >
                      <DynamicIcon name="Instagram" className="h-4 w-4" />
                    </Link>
                  )}
                  {advisor.socials.linkedin && (
                    <Link
                      href={advisor.socials.linkedin}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors hover:bg-sky-100 dark:bg-sky-900/50 dark:text-sky-400 dark:hover:bg-sky-900",
                        classNames.member?.socialLink
                      )}
                    >
                      <DynamicIcon name="Linkedin" className="h-4 w-4" />
                    </Link>
                  )}
                  {advisor.socials.email && (
                    <Link
                      href={`mailto:${advisor.socials.email}`}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors hover:bg-sky-100 dark:bg-sky-900/50 dark:text-sky-400 dark:hover:bg-sky-900",
                        classNames.member?.socialLink
                      )}
                    >
                      <DynamicIcon name="Mail" className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
