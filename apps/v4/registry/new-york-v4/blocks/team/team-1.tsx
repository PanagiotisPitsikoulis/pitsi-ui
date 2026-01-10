"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface TeamBlockProps {
  content?: {
    title?: string
    description?: string
    ctaLabel?: string
    ctaHref?: string
    members?: Array<{
      thumbnail: string
      name: string
      role: string
      timestamp: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const team1Defaults = {
  title: "Over 1000+ people trust us",
  description:
    "Card gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
  ctaLabel: "See all reviews by our customers",
  ctaHref: "#",
  members: [
    {
      thumbnail: "/elements/portrait/person/5.webp",
      name: "Smokee",
      role: "Creative Director",
      timestamp: "1 day ago",
    },
    {
      thumbnail: "/elements/portrait/person/6.webp",
      name: "Kaity",
      role: "Product Designer",
      timestamp: "3 hours ago",
    },
    {
      thumbnail: "/elements/portrait/person/1.webp",
      name: "Ania",
      role: "Fashion Director",
      timestamp: "2 hours ago",
    },
    {
      thumbnail: "/elements/portrait/person/7.webp",
      name: "Oakes",
      role: "Brand Strategist",
      timestamp: "5 hours ago",
    },
    {
      thumbnail: "/elements/portrait/person/8.webp",
      name: "Lauren",
      role: "Marketing Lead",
      timestamp: "1 week ago",
    },
  ],
}

function GeometricPattern({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      viewBox="0 0 100 300"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="300" fill="#0a0a0a" />
      {/* Constellation lines */}
      <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.3">
        <line x1="10" y1="20" x2="45" y2="50" />
        <line x1="45" y1="50" x2="30" y2="90" />
        <line x1="30" y1="90" x2="70" y2="120" />
        <line x1="70" y1="120" x2="50" y2="160" />
        <line x1="50" y1="160" x2="85" y2="190" />
        <line x1="85" y1="190" x2="40" y2="230" />
        <line x1="40" y1="230" x2="60" y2="270" />
        <line x1="20" y1="60" x2="60" y2="80" />
        <line x1="60" y1="80" x2="45" y2="130" />
        <line x1="80" y1="40" x2="70" y2="120" />
        <line x1="15" y1="150" x2="50" y2="160" />
        <line x1="90" y1="250" x2="60" y2="270" />
      </g>
      {/* Dots at intersections */}
      <g fill="rgba(255,255,255,0.3)">
        <circle cx="10" cy="20" r="1.5" />
        <circle cx="45" cy="50" r="1.5" />
        <circle cx="30" cy="90" r="1.5" />
        <circle cx="70" cy="120" r="1.5" />
        <circle cx="50" cy="160" r="1.5" />
        <circle cx="85" cy="190" r="1.5" />
        <circle cx="40" cy="230" r="1.5" />
        <circle cx="60" cy="270" r="1.5" />
        <circle cx="20" cy="60" r="1.5" />
        <circle cx="60" cy="80" r="1.5" />
        <circle cx="80" cy="40" r="1.5" />
        <circle cx="15" cy="150" r="1.5" />
        <circle cx="90" cy="250" r="1.5" />
        <circle cx="45" cy="130" r="1.5" />
      </g>
      {/* Accent colored elements */}
      <g stroke="rgba(220,38,38,0.4)" strokeWidth="0.3">
        <line x1="25" y1="40" x2="55" y2="70" />
        <line x1="75" y1="100" x2="55" y2="140" />
        <line x1="35" y1="200" x2="65" y2="240" />
      </g>
      <g fill="rgba(220,38,38,0.5)">
        <circle cx="25" cy="40" r="1" />
        <circle cx="55" cy="70" r="1" />
        <circle cx="75" cy="100" r="1" />
        <circle cx="55" cy="140" r="1" />
        <circle cx="35" cy="200" r="1" />
        <circle cx="65" cy="240" r="1" />
      </g>
    </svg>
  )
}

function VerticalCard({
  name,
  position,
}: {
  name: string
  position: "far-left" | "left" | "right" | "far-right"
}) {
  const positionStyles = {
    "far-left": "left-0 -translate-x-1/2 md:left-[5%] md:translate-x-0",
    left: "left-[10%] md:left-[15%]",
    right: "right-[10%] md:right-[15%]",
    "far-right": "right-0 translate-x-1/2 md:right-[5%] md:translate-x-0",
  }

  return (
    <div
      className={cn(
        "absolute top-1/2 z-10 h-[280px] w-[60px] -translate-y-1/2 overflow-hidden rounded-lg shadow-xl md:h-[360px] md:w-[70px]",
        positionStyles[position]
      )}
    >
      <GeometricPattern />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-sm font-semibold tracking-[0.3em] text-white uppercase"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          {name}
        </span>
      </div>
    </div>
  )
}

export function Team1({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    title = team1Defaults.title,
    description = team1Defaults.description,
    ctaLabel = team1Defaults.ctaLabel,
    ctaHref = team1Defaults.ctaHref,
    members = team1Defaults.members,
  } = content

  const centerMember = members[2] || members[0]
  const sideMembers = [members[0], members[1], members[3], members[4]].filter(
    Boolean
  )

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-cyan-100 via-cyan-50 to-amber-50 dark:from-cyan-950 dark:via-cyan-900/50 dark:to-amber-950/30",
        classNames.root
      )}
    >
      <div
        className={cn(
          "relative container px-6 py-16 md:py-24",
          classNames.container
        )}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          className="md:mb-16"
          classNames={classNames.header}
        />

        {/* Carousel */}
        <div className="relative mx-auto mb-12 h-[400px] max-w-5xl md:h-[500px]">
          {/* Side Cards */}
          {sideMembers[0] && (
            <VerticalCard name={sideMembers[0].name} position="far-left" />
          )}
          {sideMembers[1] && (
            <VerticalCard name={sideMembers[1].name} position="left" />
          )}
          {sideMembers[2] && (
            <VerticalCard name={sideMembers[2].name} position="right" />
          )}
          {sideMembers[3] && (
            <VerticalCard name={sideMembers[3].name} position="far-right" />
          )}

          {/* Center Video Card */}
          <div className="absolute top-1/2 left-1/2 z-20 w-[280px] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-xl shadow-2xl md:w-[420px]">
            <div className="relative aspect-[3/4]">
              <Image
                src={centerMember.thumbnail}
                alt={centerMember.name}
                fill
                className="object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 md:h-16 md:w-16">
                  <DynamicIcon
                    name="Play"
                    className="text-foreground ml-1 h-6 w-6 md:h-7 md:w-7"
                  />
                </div>
              </div>
              {/* Info Overlay */}
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12 md:p-6 md:pt-16">
                <h3 className="text-lg font-bold tracking-wide text-white uppercase md:text-xl">
                  {centerMember.name}
                </h3>
                <p className="text-xs font-medium tracking-wider text-white/80 uppercase md:text-sm">
                  {centerMember.role}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {centerMember.timestamp}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="bg-background/80 text-foreground hover:bg-background absolute bottom-4 left-[20%] z-30 flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors md:bottom-8 md:left-[25%]"
            aria-label="Previous member"
          >
            <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
          </button>
          <button
            className="bg-background/80 text-foreground hover:bg-background absolute right-[20%] bottom-4 z-30 flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors md:right-[25%] md:bottom-8"
            aria-label="Next member"
          >
            <DynamicIcon name="ChevronRight" className="h-5 w-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={ctaHref}
            className="border-foreground/20 text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-full border bg-white/50 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors dark:bg-white/10"
          >
            {ctaLabel}
            <DynamicIcon name="ArrowUpRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Team1 as TeamServicePlants }
