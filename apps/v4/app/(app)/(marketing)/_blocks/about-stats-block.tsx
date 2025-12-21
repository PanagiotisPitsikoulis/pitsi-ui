"use client"

import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

export interface AboutStatItem {
  value: string
  label: string
}

export interface AboutLogoItem {
  logo: string
  name: string
}

export interface AboutBenefitItem {
  type: "image" | "stat" | "testimonial"
  image?: string
  stat?: { value: string; label: string; description: string }
  testimonial?: {
    logo: string
    company: string
    quote: string
    author: string
    role: string
  }
}

export interface AboutStatsBlockProps {
  intro?: {
    headline: string
    description: string
    images: [string, string, string]
  }
  expertise?: {
    headline: string
    stats: AboutStatItem[]
  }
  logos?: {
    headline: string
    items: AboutLogoItem[]
  }
  benefits?: {
    headline: string
    items: AboutBenefitItem[]
  }
  className?: string
}

const defaultIntro = {
  headline: "Our Background",
  description: "Discover how our solution simplifies complex processes, making it easier to manage key operations and deliver exceptional experiences.",
  images: [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  ] as [string, string, string],
}

const defaultExpertise = {
  headline: "We excel in our field, but skill isn't everything we offer.",
  stats: [
    { value: "21M", label: "Global Reach of Users" },
    { value: "12+", label: "Years of Expertise" },
    { value: "654", label: "Projects Completed" },
    { value: "113k+", label: "Monthly Active Users" },
    { value: "461k", label: "Registered Accounts" },
    { value: "98+", label: "Daily Users" },
  ],
}

const defaultLogos = {
  headline: "Trusted by leading product teams worldwide.",
  items: [
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg", name: "Acme" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg", name: "Creative" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg", name: "Octan" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg", name: "Newco" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg", name: "Contoso" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg", name: "Fabrikam" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg", name: "Litware" },
    { logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg", name: "Northwind" },
  ],
}

const defaultBenefits = {
  headline: "See the Benefits Firsthand",
  items: [
    {
      type: "image" as const,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      type: "stat" as const,
      stat: {
        value: "21M",
        label: "Global Users",
        description: "Streamline tasks and boost efficiency by up to 80% using our tools.",
      },
    },
    {
      type: "testimonial" as const,
      testimonial: {
        logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
        company: "Acme.",
        quote: "Our solution helps you reduce costs by half with improved operations.",
        author: "John Doe",
        role: "CEO at Acme.",
      },
    },
    {
      type: "stat" as const,
      stat: {
        value: "97%",
        label: "Minimized Errors",
        description: "Achieve greater accuracy and efficiency with our advanced toolkit.",
      },
    },
  ],
}

export function AboutStatsBlock({
  intro = defaultIntro,
  expertise = defaultExpertise,
  logos = defaultLogos,
  benefits = defaultBenefits,
  className,
}: AboutStatsBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="flex flex-col gap-28">
        {/* Intro */}
        <div className="container flex flex-col gap-10 text-center md:gap-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <h1 className="text-4xl font-medium md:text-6xl">{intro.headline}</h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              {intro.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="relative size-full max-h-96 rounded-xl overflow-hidden md:col-span-5 aspect-video">
              <Image
                src={intro.images[0]}
                alt="placeholder"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative size-full max-h-96 rounded-xl overflow-hidden md:col-span-4 aspect-video">
              <Image
                src={intro.images[1]}
                alt="placeholder"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative size-full max-h-96 rounded-xl overflow-hidden md:col-span-3 aspect-video">
              <Image
                src={intro.images[2]}
                alt="placeholder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Expertise Stats */}
        <div className="container flex flex-col gap-16">
          <h2 className="max-w-3xl text-4xl font-medium md:text-5xl">
            {expertise.headline}
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {expertise.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-6 border-b pb-8">
                <p className="text-4xl font-medium md:text-5xl">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="bg-muted/50 py-24">
          <div className="container flex flex-col items-center gap-11">
            <p className="text-center text-xl font-medium">{logos.headline}</p>
            <div className="grid grid-cols-2 gap-x-7 gap-y-12 lg:grid-cols-4">
              {logos.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative h-8 w-8 md:h-14 md:w-14">
                    <Image
                      src={item.logo}
                      alt="logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xl font-semibold md:text-4xl">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="container flex flex-col items-center gap-14">
          <h2 className="text-center text-4xl font-semibold md:text-5xl">
            {benefits.headline}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2 md:flex-row lg:col-span-1 lg:grid-cols-1 lg:flex-col">
              {benefits.items.slice(0, 2).map((item, index) =>
                item.type === "image" ? (
                  <div key={index} className="relative max-h-96 w-full rounded-xl overflow-hidden aspect-video">
                    <Image
                      src={item.image || ""}
                      alt="placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : item.type === "stat" && item.stat ? (
                  <div key={index} className="bg-muted flex flex-col justify-center rounded-xl p-8">
                    <p className="mb-2 text-4xl font-medium">{item.stat.value}</p>
                    <p className="mb-6 font-semibold">{item.stat.label}</p>
                    <p className="text-muted-foreground">{item.stat.description}</p>
                  </div>
                ) : null
              )}
            </div>
            {benefits.items[2]?.type === "testimonial" && benefits.items[2].testimonial && (
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  fill
                  className="object-cover"
                />
                <div className="bg-background absolute right-6 bottom-6 left-6 rounded-xl p-4 z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="relative h-7 w-7">
                      <Image
                        src={benefits.items[2].testimonial.logo}
                        alt="placeholder"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-semibold">
                      {benefits.items[2].testimonial.company}
                    </span>
                  </div>
                  <p className="mb-6 text-sm">{benefits.items[2].testimonial.quote}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-medium">{benefits.items[2].testimonial.author},</span>
                    <span className="text-muted-foreground text-sm">
                      {benefits.items[2].testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            )}
            {benefits.items[3]?.type === "stat" && benefits.items[3].stat && (
              <div className="flex flex-col gap-6">
                <div className="bg-muted rounded-xl p-8">
                  <p className="mb-2 text-4xl font-medium">{benefits.items[3].stat.value}</p>
                  <p className="mb-6 font-semibold">{benefits.items[3].stat.label}</p>
                  <p className="text-muted-foreground">{benefits.items[3].stat.description}</p>
                </div>
                <div className="relative max-h-96 rounded-xl overflow-hidden aspect-video">
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                    alt="placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
