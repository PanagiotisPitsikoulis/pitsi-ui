"use client"

import { ArrowUpRight } from "@/lib/icons"
import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

export interface TeamMember {
  id: string
  name: string
  role: string
}

export interface AboutTeamBlockProps {
  profile?: {
    title: string
    subtitle: string
    image: string
    bio: string
    vision: string
    outro: string
    team: TeamMember[]
    mainImage: string
    contactLabel?: string
    contactHref?: string
  }
  className?: string
}

const defaultProfile = {
  title: "SaaS Startup",
  subtitle: "Building the future of productivity",
  image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png",
  bio: "We're a team of passionate innovators building cutting-edge SaaS solutions that help businesses streamline their operations and boost productivity. Our mission is to create software that not only solves today's problems but anticipates tomorrow's challenges.",
  vision: "We believe in the power of technology to transform how businesses operate. Our goal is to build intuitive, scalable solutions that grow with our customers and adapt to their evolving needs.",
  outro: "Join thousands of businesses that trust our platform to power their success. Let's build something amazing together.",
  team: [
    { id: "01", name: "Sarah Chen", role: "CEO & Co-founder" },
    { id: "02", name: "Marcus Rodriguez", role: "CTO & Co-founder" },
    { id: "03", name: "Emily Watson", role: "Head of Product" },
    { id: "04", name: "David Kim", role: "Lead Engineer" },
    { id: "05", name: "Lisa Thompson", role: "Head of Design" },
    { id: "06", name: "Alex Johnson", role: "Head of Marketing" },
    { id: "07", name: "Rachel Green", role: "Head of Sales" },
  ],
  mainImage: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  contactLabel: "Contact Us",
}

export function AboutTeamBlock({
  profile = defaultProfile,
  className,
}: AboutTeamBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-12">
          <div className="w-full md:w-1/3 md:pr-4">
            <div className="sticky top-20 md:p-6">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                    <Image
                      src={profile.image}
                      alt={profile.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{profile.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <nav>
                <div className="py-4">
                  <a
                    href={profile.contactHref || "#"}
                    className="group flex p-0 text-start text-xl font-medium hover:bg-transparent sm:text-2xl"
                  >
                    <span className="border-border border-b-2 pb-0.5 transition-colors">
                      {profile.contactLabel}
                    </span>
                    <ArrowUpRight className="ml-1 h-6 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="w-full md:w-2/3 md:p-6">
            <div className="max-w-4xl">
              <h1 className="mb-12 text-7xl font-semibold">About Us</h1>

              <div className="space-y-12">
                <p className="w-full text-2xl font-medium leading-[36px] md:max-w-2xl">
                  {profile.bio}
                </p>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <h2 className="text-2xl font-medium">Core Philosophy</h2>
                  <p className="leading-relaxed">{profile.vision}</p>
                </div>

                <div className="my-12 relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={profile.mainImage}
                    alt="Team office"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="mb-8 text-2xl font-medium">Our Team</h2>
                  <div className="space-y-6">
                    {profile.team.map(({ id, name, role }) => (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b py-4"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground font-mono text-sm">
                            {id}
                          </span>
                          <span className="text-base">{name}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <p className="leading-relaxed">{profile.outro}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
