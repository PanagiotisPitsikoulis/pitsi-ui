"use client"

import { Calendar, Target, Trophy, Users, LucideIcon } from "@/lib/icons"
import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export interface StatItem {
  value: string
  label: string
}

export interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

export interface FeatureStatsCardsBlockProps {
  badge?: {
    icon: React.ReactNode
    label: string
  }
  headline?: string
  description?: string
  stats?: StatItem[]
  image?: string
  cards?: FeatureCard[]
  className?: string
}

const defaultBadge = {
  icon: <Trophy className="h-auto w-4" />,
  label: "Key Aspects",
}

const defaultHeadline = "Boost Productivity with Core Tools"
const defaultDescription = "Our platform offers dynamic tools for project management, helping teams work smarter and achieve success with ease. We focus on delivering user-friendly solutions that enhance collaboration and streamline operations."

const defaultStats: StatItem[] = [
  { value: "4.2M+", label: "Installs" },
  { value: "221k+", label: "Users Active" },
  { value: "4.9", label: "User Rating" },
  { value: "40+", label: "Countries" },
]

const defaultImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"

const defaultCards: FeatureCard[] = [
  {
    icon: <Calendar className="h-auto w-6" />,
    title: "Why Select Us?",
    description: "We provide a full set of management tools, including ways to collaborate easily.",
  },
  {
    icon: <Target className="h-auto w-6" />,
    title: "Our Purpose",
    description: "Our goal is to simplify workflows and help teams achieve more with ease.",
  },
  {
    icon: <Users className="h-auto w-6" />,
    title: "About Us",
    description: "Our team is dedicated to offering high-quality solutions with passion.",
  },
]

export function FeatureStatsCardsBlock({
  badge = defaultBadge,
  headline = defaultHeadline,
  description = defaultDescription,
  stats = defaultStats,
  image = defaultImage,
  cards = defaultCards,
  className,
}: FeatureStatsCardsBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid place-content-center gap-10 lg:grid-cols-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 lg:items-start">
            <Badge
              variant="outline"
              className="flex items-center gap-1 px-2.5 py-1.5 text-sm"
            >
              {badge.icon}
              {badge.label}
            </Badge>
            <h2 className="text-center text-3xl font-semibold lg:text-left lg:text-4xl">
              {headline}
            </h2>
            <p className="text-muted-foreground text-center lg:text-left lg:text-lg">
              {description}
            </p>

            <div className="mt-9 flex w-full flex-col justify-center gap-6 md:flex-row lg:justify-start">
              <div className="flex justify-between gap-6">
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">{stats[0]?.value}</p>
                  <p className="text-muted-foreground">{stats[0]?.label}</p>
                </div>
                <Separator orientation="vertical" className="h-auto" />
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">{stats[1]?.value}</p>
                  <p className="text-muted-foreground">{stats[1]?.label}</p>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="hidden h-auto md:block"
              />
              <Separator orientation="horizontal" className="block md:hidden" />
              <div className="flex justify-between gap-6">
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">{stats[2]?.value}</p>
                  <p className="text-muted-foreground">{stats[2]?.label}</p>
                </div>
                <Separator orientation="vertical" className="h-auto" />
                <div className="mx-auto">
                  <p className="mb-1.5 text-3xl font-bold">{stats[3]?.value}</p>
                  <p className="text-muted-foreground">{stats[3]?.label}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-auto max-h-[450px] w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={image}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="gap flex flex-col gap-3 rounded-lg border p-6">
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                  {card.icon}
                  <h3 className="text-center text-lg font-medium lg:text-left">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-center text-sm md:text-base lg:text-left">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
