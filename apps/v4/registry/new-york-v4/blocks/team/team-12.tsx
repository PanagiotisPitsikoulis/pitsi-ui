"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

interface RegionalExpert {
  name: string
  role: string
  avatar: string
  region: string
  countries: string[]
  description: string
  stats: {
    tripsPlanned: number
    yearsExperience: number
  }
  socials: {
    instagram?: string
    linkedin?: string
  }
}

interface TeamBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    experts?: RegionalExpert[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
  }
}

const team12Defaults = {
  badge: "Global Coverage",
  title: "Experts Across Every Continent",
  description:
    "Our regional experts bring deep local knowledge and personal connections to craft authentic travel experiences worldwide.",
  experts: [
    {
      name: "Charlotte Wilson",
      role: "Europe Director",
      avatar: "/avatars/01.webp",
      region: "Europe",
      countries: ["France", "Italy", "Spain", "Greece", "Portugal", "Croatia"],
      description:
        "Crafting bespoke European journeys from Scandinavian fjords to Mediterranean beaches.",
      stats: { tripsPlanned: 1200, yearsExperience: 18 },
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Hiroshi Yamamoto",
      role: "Asia Pacific Director",
      avatar: "/avatars/02.webp",
      region: "Asia Pacific",
      countries: [
        "Japan",
        "Thailand",
        "Vietnam",
        "Indonesia",
        "New Zealand",
        "Australia",
      ],
      description:
        "Unveiling ancient traditions and modern wonders across the world's most diverse region.",
      stats: { tripsPlanned: 980, yearsExperience: 15 },
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Aisha Mohamed",
      role: "Africa & Middle East Director",
      avatar: "/avatars/03.webp",
      region: "Africa & Middle East",
      countries: ["Kenya", "Tanzania", "Morocco", "Egypt", "UAE", "Jordan"],
      description:
        "From Serengeti safaris to ancient wonders, creating transformative African experiences.",
      stats: { tripsPlanned: 750, yearsExperience: 12 },
      socials: { instagram: "#" },
    },
    {
      name: "Ricardo Santos",
      role: "Americas Director",
      avatar: "/avatars/04.webp",
      region: "Americas",
      countries: ["Peru", "Brazil", "Argentina", "Mexico", "Costa Rica", "USA"],
      description:
        "Connecting travelers with the vibrant cultures and natural wonders of the Americas.",
      stats: { tripsPlanned: 890, yearsExperience: 14 },
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Emma Frost",
      role: "Polar & Adventure Director",
      avatar: "/avatars/05.webp",
      region: "Polar Regions",
      countries: [
        "Antarctica",
        "Arctic",
        "Iceland",
        "Greenland",
        "Svalbard",
        "Patagonia",
      ],
      description:
        "Leading expeditions to Earth's most remote and pristine wilderness destinations.",
      stats: { tripsPlanned: 320, yearsExperience: 10 },
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Raj Patel",
      role: "Indian Subcontinent Director",
      avatar: "/avatars/06.webp",
      region: "South Asia",
      countries: [
        "India",
        "Nepal",
        "Sri Lanka",
        "Bhutan",
        "Maldives",
        "Bangladesh",
      ],
      description:
        "Revealing the spiritual depth and cultural richness of the Indian subcontinent.",
      stats: { tripsPlanned: 640, yearsExperience: 16 },
      socials: { instagram: "#" },
    },
  ] as RegionalExpert[],
}

export function Team12({ content = {}, classNames = {} }: TeamBlockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const {
    badge = team12Defaults.badge,
    title = team12Defaults.title,
    description = team12Defaults.description,
  } = content

  const experts =
    (content as { experts?: RegionalExpert[] }).experts ??
    team12Defaults.experts

  return (
    <section
      className={cn("relative overflow-hidden bg-sky-950", classNames.root)}
    >
      {/* Decorative world map background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          viewBox="0 0 1200 600"
          className="h-full w-full"
          fill="currentColor"
        >
          <path
            d="M100 200 Q200 150 300 200 T500 180 T700 220 T900 200 T1100 250"
            className="text-sky-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M50 300 Q150 250 250 300 T450 280 T650 320 T850 300 T1050 350"
            className="text-sky-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M100 400 Q200 350 300 400 T500 380 T700 420 T900 400 T1100 450"
            className="text-sky-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Grid dots */}
          {Array.from({ length: 20 }).map((_, i) =>
            Array.from({ length: 10 }).map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={60 + i * 60}
                cy={50 + j * 60}
                r="2"
                className="text-sky-400"
              />
            ))
          )}
        </svg>
      </div>

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
              badge: cn("text-sky-400", classNames.header?.badge),
              title: cn("text-white", classNames.header?.title),
              description: cn(
                "text-sky-200/70",
                classNames.header?.description
              ),
            }}
          />
        </ScrollFade>

        {/* Experts grid with connected lines */}
        <div className="relative">
          {/* Connection lines - decorative */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(14 165 233)"
                  stopOpacity="0.1"
                />
                <stop
                  offset="50%"
                  stopColor="rgb(14 165 233)"
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(14 165 233)"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>
            <path
              d="M200 200 Q600 100 1000 200 M200 400 Q600 500 1000 400 M400 150 L400 450 M800 150 L800 450"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert, index) => (
              <ScrollFade key={expert.name} delay={index * 0.1}>
                <div
                  className={cn(
                    "group relative rounded-2xl border border-sky-800/50 bg-sky-900/30 p-6 backdrop-blur-sm transition-all duration-300",
                    hoveredIndex === index &&
                      "border-sky-500 bg-sky-900/50 shadow-lg shadow-sky-500/10"
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Region badge */}
                  <div className="absolute -top-3 left-6 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">
                    {expert.region}
                  </div>

                  <div className="mb-4 flex items-start gap-4 pt-2">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-sky-600/50">
                        <AvatarImage src={expert.avatar} alt={expert.name} />
                        <AvatarFallback className="bg-sky-800 text-sky-200">
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {/* Online indicator */}
                      <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-sky-900 bg-emerald-400" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-sky-400">{expert.role}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-sky-200/70">
                    {expert.description}
                  </p>

                  {/* Countries */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium tracking-wide text-sky-400/70 uppercase">
                      Coverage Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {expert.countries.slice(0, 4).map((country) => (
                        <span
                          key={country}
                          className="rounded-md bg-sky-800/50 px-2 py-1 text-xs text-sky-200"
                        >
                          {country}
                        </span>
                      ))}
                      {expert.countries.length > 4 && (
                        <span className="rounded-md bg-sky-800/50 px-2 py-1 text-xs text-sky-300">
                          +{expert.countries.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 flex gap-6 border-t border-sky-800/50 pt-4">
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {expert.stats.tripsPlanned}+
                      </p>
                      <p className="text-xs text-sky-400/70">Trips Planned</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {expert.stats.yearsExperience}
                      </p>
                      <p className="text-xs text-sky-400/70">
                        Years Experience
                      </p>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-2">
                    {expert.socials.instagram && (
                      <Link
                        href={expert.socials.instagram}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-800/50 text-sky-300 transition-colors hover:bg-sky-700 hover:text-white"
                      >
                        <DynamicIcon name="Instagram" className="h-4 w-4" />
                      </Link>
                    )}
                    {expert.socials.linkedin && (
                      <Link
                        href={expert.socials.linkedin}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-800/50 text-sky-300 transition-colors hover:bg-sky-700 hover:text-white"
                      >
                        <DynamicIcon name="Linkedin" className="h-4 w-4" />
                      </Link>
                    )}
                    <Link
                      href="#"
                      className="ml-auto flex items-center gap-1 text-sm text-sky-400 transition-colors hover:text-sky-300"
                    >
                      View profile
                      <DynamicIcon name="ArrowRight" className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={cn(
                      "absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-sky-500/0 opacity-0 blur-xl transition-opacity duration-500",
                      hoveredIndex === index && "opacity-100"
                    )}
                  />
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-sky-800/50 bg-sky-900/30 p-8 backdrop-blur-sm sm:grid-cols-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">150+</p>
            <p className="text-sky-400">Countries Covered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">50K+</p>
            <p className="text-sky-400">Trips Planned</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">98%</p>
            <p className="text-sky-400">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">24/7</p>
            <p className="text-sky-400">Global Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
