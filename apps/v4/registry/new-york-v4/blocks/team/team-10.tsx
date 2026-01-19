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

interface TeamLeader {
  name: string
  role: string
  avatar: string
  bio: string
  achievements: string[]
  quote: string
  socials: {
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

interface TeamMember {
  name: string
  role: string
  avatar: string
  specialty: string
}

interface TeamBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    leader?: TeamLeader
    team?: TeamMember[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
  }
}

const team10Defaults = {
  badge: "Meet the Team",
  title: "Led by Passion, Driven by Excellence",
  description:
    "Our team combines decades of travel industry expertise with a genuine love for exploration and discovery.",
  leader: {
    name: "Victoria Hayes",
    role: "Founder & CEO",
    avatar: "/avatars/01.webp",
    bio: "With over 25 years in the travel industry and visits to 100+ countries, Victoria founded our agency with a simple belief: travel should transform lives. Her vision has helped thousands of travelers discover their perfect journey, earning recognition as a top travel advisor worldwide.",
    achievements: [
      "Travel + Leisure A-List Advisor",
      "Virtuoso Travel Network Member",
      "Certified Sustainable Tourism Expert",
      "TEDx Speaker on Transformative Travel",
    ],
    quote:
      "Every journey begins with a single step, but the best ones begin with the right guide.",
    socials: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  team: [
    {
      name: "Alexandra Chen",
      role: "Director of Operations",
      avatar: "/avatars/02.webp",
      specialty: "Logistics & Planning",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Luxury Travel",
      avatar: "/avatars/03.webp",
      specialty: "High-End Experiences",
    },
    {
      name: "Priya Sharma",
      role: "Asia Travel Director",
      avatar: "/avatars/04.webp",
      specialty: "Asian Destinations",
    },
    {
      name: "Thomas Weber",
      role: "European Specialist",
      avatar: "/avatars/05.webp",
      specialty: "European Tours",
    },
    {
      name: "Emma Rodriguez",
      role: "Adventure Coordinator",
      avatar: "/avatars/06.webp",
      specialty: "Adventure & Eco Tours",
    },
    {
      name: "James Park",
      role: "Client Relations Manager",
      avatar: "/avatars/07.webp",
      specialty: "Customer Experience",
    },
  ] as TeamMember[],
}

export function Team10({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    badge = team10Defaults.badge,
    title = team10Defaults.title,
    description = team10Defaults.description,
    leader = team10Defaults.leader,
    team = team10Defaults.team,
  } = content

  return (
    <section
      className={cn("bg-background relative overflow-hidden", classNames.root)}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div
        className={cn(
          "relative container px-6 py-16 md:py-24",
          classNames.container
        )}
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

        {/* Featured Leader Section */}
        <SlideUp>
          <div className="dark:to-background mb-20 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white shadow-xl dark:border-sky-900 dark:from-sky-950">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative min-h-[400px] lg:min-h-[500px]">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent lg:bg-gradient-to-r" />

                {/* Quote overlay on image */}
                <div className="absolute right-0 bottom-0 left-0 p-6 lg:hidden">
                  <blockquote className="text-lg text-white italic">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium tracking-wide text-sky-600 uppercase dark:text-sky-400">
                    {leader.role}
                  </p>
                  <h3 className="text-foreground text-3xl font-bold md:text-4xl">
                    {leader.name}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 text-lg">
                  {leader.bio}
                </p>

                {/* Quote - desktop only */}
                <blockquote className="text-muted-foreground mb-6 hidden border-l-4 border-sky-500 pl-4 italic lg:block">
                  "{leader.quote}"
                </blockquote>

                {/* Achievements */}
                <div className="mb-6">
                  <p className="text-muted-foreground mb-3 text-sm font-medium tracking-wide uppercase">
                    Achievements & Certifications
                  </p>
                  <div className="space-y-2">
                    {leader.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-center gap-2"
                      >
                        <DynamicIcon
                          name="CheckCircle"
                          className="h-5 w-5 flex-shrink-0 text-sky-500"
                        />
                        <span className="text-foreground text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-3">
                  {leader.socials.linkedin && (
                    <Link
                      href={leader.socials.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-300 dark:hover:bg-sky-800"
                    >
                      <DynamicIcon name="Linkedin" className="h-5 w-5" />
                    </Link>
                  )}
                  {leader.socials.twitter && (
                    <Link
                      href={leader.socials.twitter}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-300 dark:hover:bg-sky-800"
                    >
                      <DynamicIcon name="Twitter" className="h-5 w-5" />
                    </Link>
                  )}
                  {leader.socials.instagram && (
                    <Link
                      href={leader.socials.instagram}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-300 dark:hover:bg-sky-800"
                    >
                      <DynamicIcon name="Instagram" className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SlideUp>

        {/* Team Grid */}
        <div>
          <h3 className="text-foreground mb-8 text-center text-2xl font-bold">
            The Team
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {team.map((member, index) => (
              <SlideUp key={member.name} delay={index * 0.05}>
                <div className="group text-center">
                  <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl border-2 border-sky-100 transition-all group-hover:border-sky-300 group-hover:shadow-lg dark:border-sky-900 dark:group-hover:border-sky-700">
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="rounded-none">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h4 className="text-foreground font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-sm text-sky-600 dark:text-sky-400">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {member.specialty}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
