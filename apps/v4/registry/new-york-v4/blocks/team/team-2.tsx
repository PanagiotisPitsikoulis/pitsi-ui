"use client"

import Image from "next/image"
import { Instagram, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

interface Trainer {
  name: string
  role: string
  specialties: string[]
  image: string
  bio: string
  certifications: string[]
  socials: {
    instagram?: string
    twitter?: string
  }
}

const trainers: Trainer[] = [
  {
    name: "Alex Chen",
    role: "Head Coach",
    specialties: ["HIIT", "Functional Training"],
    image: "/placeholders/blocks/service-fitness/trainers/alex.webp",
    bio: "Former competitive CrossFit athlete. 10+ years transforming bodies and minds.",
    certifications: ["NASM-CPT", "CrossFit L3", "Precision Nutrition"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Maya Patel",
    role: "Yoga & Recovery Specialist",
    specialties: ["Yoga Flow", "Mobility", "Recovery"],
    image: "/placeholders/blocks/service-fitness/trainers/maya.webp",
    bio: "500-hour certified yoga instructor. Believes movement is medicine.",
    certifications: ["RYT-500", "FRC Mobility", "Breathwork"],
    socials: { instagram: "#" },
  },
  {
    name: "Marcus Webb",
    role: "Boxing Coach",
    specialties: ["Boxing", "Combat Conditioning"],
    image: "/placeholders/blocks/service-fitness/trainers/marcus.webp",
    bio: "Pro boxing background. Makes you hit harder and move faster.",
    certifications: ["USA Boxing", "NASM-CPT", "First Aid"],
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Jake Miller",
    role: "Strength Coach",
    specialties: ["Strength", "Powerlifting"],
    image: "/placeholders/blocks/service-fitness/trainers/jake.webp",
    bio: "Competitive powerlifter. Specializes in progressive overload programming.",
    certifications: ["CSCS", "USAW L2", "FMS"],
    socials: { instagram: "#" },
  },
  {
    name: "Sofia Reyes",
    role: "Spin Instructor",
    specialties: ["Spin", "Endurance"],
    image: "/placeholders/blocks/service-fitness/trainers/sofia.webp",
    bio: "Former pro cyclist. Her playlists are legendary.",
    certifications: ["Spinning®", "Les Mills", "CPR/AED"],
    socials: { instagram: "#", twitter: "#" },
  },
]

export function Team2() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
            Meet The Team
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            World-Class Coaches
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Our instructors bring decades of combined experience and a shared
            passion for helping you become your best self.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={cn(
                "group relative",
                index === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Overlay content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Specialties */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                    {trainer.socials.instagram && (
                      <a
                        href={trainer.socials.instagram}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={trainer.socials.twitter}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="mb-1 text-xl font-bold text-white">
                  {trainer.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-white/60">
                  {trainer.role}
                </p>
                <p className="mb-4 text-sm text-white/50">{trainer.bio}</p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium text-white/40"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
