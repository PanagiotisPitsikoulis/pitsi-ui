"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface TravelStoryteller {
  name: string
  role: string
  avatar: string
  featuredImage: string
  bio: string
  tagline: string
  publications: string[]
  awards: string[]
  socials: {
    instagram?: string
    twitter?: string
    website?: string
  }
}

interface TeamBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    storytellers?: TravelStoryteller[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
  }
}

const team13Defaults = {
  badge: "Our Storytellers",
  title: "The Artists Behind Your Journey",
  description:
    "Meet the photographers, writers, and content creators who capture and share the magic of travel through their lenses and words.",
  storytellers: [
    {
      name: "Alexandra Rivers",
      role: "Lead Travel Photographer",
      avatar: "/avatars/01.webp",
      featuredImage: "/elements/landscape/mountain/1.webp",
      bio: "Award-winning photographer whose work has been featured in National Geographic and Travel + Leisure. Alexandra's lens captures not just places, but the soul of destinations and the stories of the people who call them home.",
      tagline: "Finding extraordinary in the ordinary, one frame at a time",
      publications: [
        "National Geographic",
        "Travel + Leisure",
        "Condé Nast Traveler",
      ],
      awards: [
        "Sony World Photography Awards",
        "Travel Photographer of the Year",
      ],
      socials: { instagram: "#", twitter: "#", website: "#" },
    },
    {
      name: "Marcus Blake",
      role: "Senior Travel Writer",
      avatar: "/avatars/02.webp",
      featuredImage: "/elements/landscape/water/1.webp",
      bio: "Former journalist turned travel storyteller, Marcus has spent 15 years documenting journeys across 80+ countries. His narrative style transforms itineraries into adventures and destinations into characters.",
      tagline: "Every journey has a story waiting to be told",
      publications: ["The New York Times", "Lonely Planet", "Outside Magazine"],
      awards: [
        "Lowell Thomas Travel Journalism Award",
        "SATW Foundation Award",
      ],
      socials: { instagram: "#", twitter: "#", website: "#" },
    },
    {
      name: "Yara Hassan",
      role: "Visual Content Director",
      avatar: "/avatars/03.webp",
      featuredImage: "/elements/landscape/mountain/2.webp",
      bio: "Combining cinematography with cultural storytelling, Yara creates immersive video content that transports viewers before they even pack their bags. Her documentary work has premiered at major film festivals.",
      tagline: "Moving images, moving hearts",
      publications: [
        "Vimeo Staff Picks",
        "YouTube Trending",
        "Travel Film Festival",
      ],
      awards: ["Webby Award for Travel Content", "Cannes Lions Bronze"],
      socials: { instagram: "#", website: "#" },
    },
    {
      name: "James Whitmore",
      role: "Adventure Correspondent",
      avatar: "/avatars/04.webp",
      featuredImage: "/elements/landscape/mountain/3.webp",
      bio: "A mountaineer, diver, and expedition leader, James brings first-person adventure narratives that inspire and inform. His coverage of extreme destinations has helped countless travelers push their boundaries safely.",
      tagline: "Adventure is just discomfort retold as a story",
      publications: [
        "Men's Journal",
        "Adventure Sports Network",
        "Outdoor Magazine",
      ],
      awards: ["Adventure Travel Writer Award", "Expedition Society Medal"],
      socials: { instagram: "#", twitter: "#" },
    },
  ] as TravelStoryteller[],
}

export function Team13({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    badge = team13Defaults.badge,
    title = team13Defaults.title,
    description = team13Defaults.description,
  } = content

  const storytellers =
    (content as { storytellers?: TravelStoryteller[] }).storytellers ??
    team13Defaults.storytellers

  return (
    <section
      className={cn(
        "dark:bg-background relative overflow-hidden bg-white",
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

        {/* Magazine-style layout */}
        <div className="space-y-24">
          {storytellers.map((storyteller, index) => (
            <SlideUp key={storyteller.name} delay={0.1}>
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                  index % 2 === 1 && "lg:direction-rtl"
                )}
              >
                {/* Image side */}
                <div
                  className={cn("relative", index % 2 === 1 && "lg:order-2")}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[3/4]">
                    <Image
                      src={storyteller.featuredImage}
                      alt={`Featured work by ${storyteller.name}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Caption on image */}
                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <p className="text-sm text-white/80 italic">
                        "{storyteller.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Avatar overlapping image */}
                  <div className="dark:border-background absolute right-6 -bottom-6 h-20 w-20 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:-right-6">
                    <Image
                      src={storyteller.avatar}
                      alt={storyteller.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={cn(index % 2 === 1 && "lg:order-1 lg:text-right")}
                >
                  <div className="mb-4">
                    <span className="mb-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">
                      {storyteller.role}
                    </span>
                    <h3 className="text-foreground text-3xl font-bold md:text-4xl">
                      {storyteller.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg">
                    {storyteller.bio}
                  </p>

                  {/* Publications */}
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                      Featured In
                    </p>
                    <div
                      className={cn(
                        "flex flex-wrap gap-2",
                        index % 2 === 1 && "lg:justify-end"
                      )}
                    >
                      {storyteller.publications.map((pub) => (
                        <span
                          key={pub}
                          className="rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-700 dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-300"
                        >
                          {pub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                      Awards & Recognition
                    </p>
                    <div className="space-y-1">
                      {storyteller.awards.map((award) => (
                        <div
                          key={award}
                          className={cn(
                            "text-foreground flex items-center gap-2 text-sm",
                            index % 2 === 1 && "lg:flex-row-reverse"
                          )}
                        >
                          <DynamicIcon
                            name="Award"
                            className="h-4 w-4 flex-shrink-0 text-amber-500"
                          />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social links */}
                  <div
                    className={cn(
                      "flex gap-3",
                      index % 2 === 1 && "lg:justify-end"
                    )}
                  >
                    {storyteller.socials.instagram && (
                      <Link
                        href={storyteller.socials.instagram}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400 dark:hover:bg-sky-800"
                      >
                        <DynamicIcon name="Instagram" className="h-5 w-5" />
                      </Link>
                    )}
                    {storyteller.socials.twitter && (
                      <Link
                        href={storyteller.socials.twitter}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400 dark:hover:bg-sky-800"
                      >
                        <DynamicIcon name="Twitter" className="h-5 w-5" />
                      </Link>
                    )}
                    {storyteller.socials.website && (
                      <Link
                        href={storyteller.socials.website}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-colors hover:bg-sky-200 dark:bg-sky-900 dark:text-sky-400 dark:hover:bg-sky-800"
                      >
                        <DynamicIcon name="Globe" className="h-5 w-5" />
                      </Link>
                    )}
                    <Link
                      href="#"
                      className={cn(
                        "bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        index % 2 === 1 && "lg:flex-row-reverse"
                      )}
                    >
                      View Portfolio
                      <DynamicIcon name="ArrowRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Divider between articles */}
              {index < storytellers.length - 1 && (
                <div className="mt-24 flex items-center justify-center">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent dark:via-sky-700" />
                  <DynamicIcon
                    name="Compass"
                    className="mx-4 h-5 w-5 text-sky-400"
                  />
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300 to-transparent dark:via-sky-700" />
                </div>
              )}
            </SlideUp>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating with our creative team?
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-6 py-3 font-medium text-sky-700 transition-colors hover:bg-sky-100 dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-300 dark:hover:bg-sky-900/50"
          >
            <DynamicIcon name="Mail" className="h-5 w-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
