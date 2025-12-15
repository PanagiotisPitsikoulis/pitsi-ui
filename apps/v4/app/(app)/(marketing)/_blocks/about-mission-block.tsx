"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface AboutMissionBlockProps {
  image?: string
  headline?: string
  subtext?: string
  quote?: string
  author?: {
    name: string
    role: string
    avatar: string
  }
  className?: string
}

const defaultImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png"
const defaultHeadline = "We are a team of creators, thinkers, and builders who believe in crafting experiences that truly connect. Our story is built on passion, innovation, and the drive to bring meaningful ideas to life."
const defaultSubtext = "We ask: What's the goal? Who's it for? How do we make it effortless? we begin with why, who, and how to make it better."
const defaultQuote = "We aim to bring diverse minds together, turning ideas into experiences that matter."
const defaultAuthor = {
  name: "John Doe",
  role: "Creative Director",
  avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/avatar1.png",
}

export function AboutMissionBlock({
  image = defaultImage,
  headline = defaultHeadline,
  subtext = defaultSubtext,
  quote = defaultQuote,
  author = defaultAuthor,
  className,
}: AboutMissionBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="gap-15 grid grid-cols-1 lg:grid-cols-7 lg:gap-1">
          <div className="h-120 col-span-4 border">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="lg:pl-15 space-y-15 col-span-3 ml-auto max-w-4xl">
            <h1 className="text-2xl font-medium tracking-tight">
              {headline}
            </h1>
            <p className="text-foreground/40 text-base lg:text-lg">
              {subtext}
            </p>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <p className="text-foreground/40 flex-1 text-sm">
                {quote}
              </p>
              <div className="flex w-fit items-center gap-2">
                <img
                  src={author.avatar}
                  className="size-10"
                  alt="avatar"
                />
                <div>
                  <h3 className="font-medium tracking-tight">{author.name}</h3>
                  <p className="text-foreground/40 text-sm">{author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
