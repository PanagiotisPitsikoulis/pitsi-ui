"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface TourGuide {
  name: string
  role: string
  avatar: string
  coverImage: string
  bio: string
  expertise: string[]
  yearsExperience: number
  toursLed: number
  rating: number
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
    guides?: TourGuide[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string; badge?: string }
  }
}

const team9Defaults = {
  badge: "Expert Tour Guides",
  title: "Your Journey Starts With Us",
  description:
    "Meet our certified tour guides who bring destinations to life with their local knowledge, passion, and storytelling.",
  guides: [
    {
      name: "Marco Benedetti",
      role: "European Heritage Guide",
      avatar: "/avatars/01.webp",
      coverImage: "/elements/landscape/mountain/1.webp",
      bio: "Born in Florence, Marco brings Renaissance history to life. His walking tours of Italian cities are renowned for uncovering hidden gems and local secrets that most tourists never discover.",
      expertise: [
        "Art History",
        "Architecture",
        "Wine Tours",
        "Culinary Experiences",
      ],
      yearsExperience: 15,
      toursLed: 850,
      rating: 4.9,
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Yuki Tanaka",
      role: "Japan Cultural Specialist",
      avatar: "/avatars/02.webp",
      coverImage: "/elements/landscape/mountain/2.webp",
      bio: "From ancient temples to modern Tokyo, Yuki offers authentic Japanese experiences. A certified tea ceremony master and expert in traditional crafts.",
      expertise: [
        "Tea Ceremony",
        "Temple Tours",
        "Traditional Crafts",
        "Street Food",
      ],
      yearsExperience: 12,
      toursLed: 620,
      rating: 4.95,
      socials: { instagram: "#" },
    },
    {
      name: "Amara Diallo",
      role: "African Wildlife Expert",
      avatar: "/avatars/03.webp",
      coverImage: "/elements/landscape/mountain/3.webp",
      bio: "Growing up in the Serengeti, Amara has an unparalleled connection with African wildlife. Her safaris offer intimate encounters and conservation insights.",
      expertise: [
        "Big Five Safaris",
        "Bird Watching",
        "Photography Tours",
        "Conservation",
      ],
      yearsExperience: 18,
      toursLed: 1200,
      rating: 4.98,
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Carlos Rivera",
      role: "Latin America Explorer",
      avatar: "/avatars/04.webp",
      coverImage: "/elements/landscape/mountain/4.webp",
      bio: "From Machu Picchu to Patagonia, Carlos leads transformative journeys through South America. An expert mountaineer and cultural anthropologist.",
      expertise: [
        "Trekking",
        "Ancient Ruins",
        "Local Communities",
        "Adventure Sports",
      ],
      yearsExperience: 14,
      toursLed: 780,
      rating: 4.92,
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Sophie Laurent",
      role: "Mediterranean Voyager",
      avatar: "/avatars/05.webp",
      coverImage: "/elements/landscape/water/1.webp",
      bio: "Sophie's coastal tours blend history with hedonism. From Greek islands to French Riviera, she curates the perfect Mediterranean experience.",
      expertise: [
        "Sailing Tours",
        "Beach Destinations",
        "Historical Sites",
        "Gastronomy",
      ],
      yearsExperience: 10,
      toursLed: 450,
      rating: 4.88,
      socials: { instagram: "#" },
    },
  ] as TourGuide[],
}

export function Team9({ content = {}, classNames = {} }: TeamBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const {
    badge = team9Defaults.badge,
    title = team9Defaults.title,
    description = team9Defaults.description,
  } = content

  const guides =
    (content as { guides?: TourGuide[] }).guides ?? team9Defaults.guides

  const currentGuide = guides[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % guides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + guides.length) % guides.length)
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900",
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
              badge: cn("text-sky-300", classNames.header?.badge),
              title: cn("text-white", classNames.header?.title),
              description: cn(
                "text-sky-100/80",
                classNames.header?.description
              ),
            }}
          />
        </ScrollFade>

        {/* Main carousel card */}
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm">
            {/* Cover image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={currentGuide.coverImage}
                alt={`${currentGuide.name}'s specialty`}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900 via-sky-900/50 to-transparent" />

              {/* Avatar */}
              <div className="absolute -bottom-12 left-8 h-24 w-24 overflow-hidden rounded-2xl border-4 border-sky-800 shadow-xl md:h-32 md:w-32">
                <Image
                  src={currentGuide.avatar}
                  alt={currentGuide.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats overlay */}
              <div className="absolute top-4 right-4 flex gap-3">
                <div className="rounded-lg bg-white/20 px-3 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-1">
                    <DynamicIcon
                      name="Star"
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm font-semibold text-white">
                      {currentGuide.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pt-16 pb-8">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {currentGuide.name}
                  </h3>
                  <p className="text-sky-300">{currentGuide.role}</p>
                </div>

                {/* Quick stats */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {currentGuide.yearsExperience}
                    </p>
                    <p className="text-xs text-sky-300">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {currentGuide.toursLed}+
                    </p>
                    <p className="text-xs text-sky-300">Tours Led</p>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-sky-100/80">{currentGuide.bio}</p>

              {/* Expertise tags */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-medium tracking-wide text-sky-300 uppercase">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentGuide.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="rounded-full bg-sky-700/50 px-3 py-1.5 text-sm text-sky-100"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social & CTA */}
              <div className="flex items-center justify-between border-t border-sky-700/50 pt-6">
                <div className="flex gap-3">
                  {currentGuide.socials.instagram && (
                    <Link
                      href={currentGuide.socials.instagram}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700/50 text-sky-200 transition-colors hover:bg-sky-700"
                    >
                      <DynamicIcon name="Instagram" className="h-5 w-5" />
                    </Link>
                  )}
                  {currentGuide.socials.linkedin && (
                    <Link
                      href={currentGuide.socials.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700/50 text-sky-200 transition-colors hover:bg-sky-700"
                    >
                      <DynamicIcon name="Linkedin" className="h-5 w-5" />
                    </Link>
                  )}
                </div>

                <Button className="bg-white text-sky-900 hover:bg-sky-100">
                  <DynamicIcon name="Calendar" className="mr-2 h-4 w-4" />
                  Book a Tour
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-sky-600 text-sky-300 hover:bg-sky-800 hover:text-white"
            >
              <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {guides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "bg-sky-600 hover:bg-sky-500"
                  )}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-sky-600 text-sky-300 hover:bg-sky-800 hover:text-white"
            >
              <DynamicIcon name="ChevronRight" className="h-5 w-5" />
            </Button>
          </div>

          {/* Thumbnail row */}
          <div className="mt-8 flex justify-center gap-3">
            {guides.map((guide, index) => (
              <button
                key={guide.name}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative h-14 w-14 overflow-hidden rounded-xl border-2 transition-all",
                  index === currentIndex
                    ? "scale-110 border-white"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={guide.avatar}
                  alt={guide.name}
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
