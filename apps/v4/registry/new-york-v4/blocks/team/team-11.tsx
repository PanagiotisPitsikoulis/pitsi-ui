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

interface DestinationSpecialist {
  name: string
  role: string
  avatar: string
  region: string
  regionIcon: string
  bio: string
  favoriteDestinations: string[]
  travelTip: string
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
    specialists?: DestinationSpecialist[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
  }
}

const team11Defaults = {
  badge: "Destination Specialists",
  title: "Experts in Every Corner of the World",
  description:
    "Our destination specialists have lived, worked, and explored their regions extensively. Their insider knowledge transforms ordinary trips into extraordinary experiences.",
  specialists: [
    {
      name: "Luca Bellini",
      role: "Europe & Mediterranean",
      avatar: "/avatars/01.webp",
      region: "Europe",
      regionIcon: "Landmark",
      bio: "Growing up between Rome and Paris, Luca brings unparalleled expertise to European travel. From hidden trattorias in Tuscany to secret viewpoints in Santorini, he knows every cobblestone street and local tradition. His specialty lies in crafting itineraries that blend iconic landmarks with authentic local experiences.",
      favoriteDestinations: [
        "Amalfi Coast, Italy",
        "Provence, France",
        "Dubrovnik, Croatia",
      ],
      travelTip:
        "Visit European cities during shoulder season - you'll enjoy pleasant weather and fewer crowds.",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Mei Lin Wong",
      role: "Asia & Pacific",
      avatar: "/avatars/02.webp",
      region: "Asia Pacific",
      regionIcon: "Mountain",
      bio: "Born in Singapore and educated in Tokyo, Mei Lin has traveled extensively across Asia for over 15 years. She specializes in immersive cultural experiences, from tea ceremonies in Kyoto to meditation retreats in Bali. Her deep understanding of Asian cultures helps travelers connect meaningfully with local traditions.",
      favoriteDestinations: [
        "Kyoto, Japan",
        "Luang Prabang, Laos",
        "Raja Ampat, Indonesia",
      ],
      travelTip:
        "Learn a few phrases in the local language - it opens doors and hearts everywhere in Asia.",
      socials: { instagram: "#" },
    },
    {
      name: "Kwame Asante",
      role: "Africa & Middle East",
      avatar: "/avatars/03.webp",
      region: "Africa",
      regionIcon: "Sun",
      bio: "A Ghanaian native who has led safaris across East Africa for over a decade, Kwame brings authentic African experiences to life. His expertise spans from the Serengeti's great migration to Morocco's imperial cities. He's passionate about sustainable tourism that benefits local communities.",
      favoriteDestinations: [
        "Masai Mara, Kenya",
        "Victoria Falls, Zimbabwe",
        "Marrakech, Morocco",
      ],
      travelTip:
        "The best wildlife viewing in East Africa is during the dry season when animals gather at water sources.",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Sofia Mendez",
      role: "Latin America & Caribbean",
      avatar: "/avatars/04.webp",
      region: "Americas",
      regionIcon: "Palmtree",
      bio: "Sofia's journey from a small town in Peru to becoming a renowned travel expert spans 20 years of exploration across Latin America. From the ancient ruins of Machu Picchu to the vibrant streets of Havana, she crafts journeys that celebrate the region's rich history, culture, and natural beauty.",
      favoriteDestinations: [
        "Sacred Valley, Peru",
        "Cartagena, Colombia",
        "Patagonia, Argentina",
      ],
      travelTip:
        "Embrace the local pace of life - the best experiences come when you slow down and connect.",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Oliver Brooks",
      role: "North America & Canada",
      avatar: "/avatars/05.webp",
      region: "North America",
      regionIcon: "Trees",
      bio: "An avid adventurer who has explored every US national park and much of Canada's wilderness, Oliver specializes in outdoor adventures and road trips. From the rugged beauty of Alaska to the desert landscapes of the Southwest, he creates journeys that showcase North America's incredible diversity.",
      favoriteDestinations: [
        "Yellowstone, Wyoming",
        "Banff, Canada",
        "Big Sur, California",
      ],
      travelTip:
        "For national parks, book accommodations months in advance and arrive at sunrise for the best experiences.",
      socials: { instagram: "#" },
    },
  ] as DestinationSpecialist[],
}

export function Team11({ content = {}, classNames = {} }: TeamBlockProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const {
    badge = team11Defaults.badge,
    title = team11Defaults.title,
    description = team11Defaults.description,
  } = content

  const specialists =
    (content as { specialists?: DestinationSpecialist[] }).specialists ??
    team11Defaults.specialists

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      className={cn(
        "dark:to-background relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-sky-950",
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

        {/* Accordion list */}
        <div className="mx-auto max-w-4xl space-y-4">
          {specialists.map((specialist, index) => (
            <ScrollFade key={specialist.name} delay={index * 0.1}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  expandedIndex === index
                    ? "border-sky-300 bg-white shadow-lg dark:border-sky-700 dark:bg-sky-950"
                    : "border-sky-100 bg-white/50 hover:border-sky-200 dark:border-sky-900 dark:bg-sky-950/50"
                )}
              >
                {/* Header - always visible */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex w-full items-center gap-4 p-4 text-left md:p-6"
                >
                  <Avatar className="h-14 w-14 shrink-0 ring-2 ring-sky-100 md:h-16 md:w-16 dark:ring-sky-800">
                    <AvatarImage
                      src={specialist.avatar}
                      alt={specialist.name}
                    />
                    <AvatarFallback>
                      {specialist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-foreground text-lg font-semibold">
                        {specialist.name}
                      </h3>
                      <span className="hidden rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700 sm:inline-flex sm:items-center sm:gap-1 dark:bg-sky-900 dark:text-sky-300">
                        <DynamicIcon
                          name={specialist.regionIcon}
                          className="h-3 w-3"
                        />
                        {specialist.region}
                      </span>
                    </div>
                    <p className="text-sm text-sky-600 dark:text-sky-400">
                      {specialist.role}
                    </p>
                  </div>

                  <DynamicIcon
                    name="ChevronDown"
                    className={cn(
                      "text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-300",
                      expandedIndex === index && "rotate-180"
                    )}
                  />
                </button>

                {/* Expanded content */}
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-sky-100 px-4 pt-4 pb-6 md:px-6 dark:border-sky-900">
                      <div className="grid gap-6 lg:grid-cols-3">
                        {/* Bio */}
                        <div className="lg:col-span-2">
                          <p className="text-muted-foreground mb-4">
                            {specialist.bio}
                          </p>

                          {/* Travel tip */}
                          <div className="rounded-xl bg-sky-50 p-4 dark:bg-sky-900/50">
                            <div className="mb-2 flex items-center gap-2">
                              <DynamicIcon
                                name="Lightbulb"
                                className="h-4 w-4 text-sky-600 dark:text-sky-400"
                              />
                              <span className="text-sm font-medium text-sky-700 dark:text-sky-300">
                                Pro Travel Tip
                              </span>
                            </div>
                            <p className="text-sm text-sky-900 italic dark:text-sky-100">
                              "{specialist.travelTip}"
                            </p>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4">
                          {/* Favorite destinations */}
                          <div>
                            <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                              Favorite Destinations
                            </p>
                            <ul className="space-y-1">
                              {specialist.favoriteDestinations.map((dest) => (
                                <li
                                  key={dest}
                                  className="text-foreground flex items-center gap-2 text-sm"
                                >
                                  <DynamicIcon
                                    name="MapPin"
                                    className="h-3 w-3 text-sky-500"
                                  />
                                  {dest}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Social links */}
                          <div className="flex gap-2">
                            {specialist.socials.instagram && (
                              <Link
                                href={specialist.socials.instagram}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400 dark:hover:bg-sky-800"
                              >
                                <DynamicIcon
                                  name="Instagram"
                                  className="h-4 w-4"
                                />
                              </Link>
                            )}
                            {specialist.socials.linkedin && (
                              <Link
                                href={specialist.socials.linkedin}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400 dark:hover:bg-sky-800"
                              >
                                <DynamicIcon
                                  name="Linkedin"
                                  className="h-4 w-4"
                                />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
