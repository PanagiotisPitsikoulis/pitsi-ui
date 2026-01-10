"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { teamDefaults, type TeamBlockProps } from "@/lib/blocks/team.types"
import { cn } from "@/lib/utils"
import FlyingPosters from "@/registry/new-york-v4/animations/flying-posters/flying-posters"
import Iridescence from "@/registry/new-york-v4/animations/iridescence/iridescence"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Extended trainer item for fitness theme
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

// Block-specific defaults (fitness theme)
const team2Defaults = {
  ...teamDefaults,
  badge: "Meet The Team",
  title: "World-Class Coaches",
  description:
    "Our instructors bring decades of combined experience and a shared passion for helping you become your best self.",
  trainers: [
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
  ] as Trainer[],
}

export function Team2({ content = {}, classNames = {} }: TeamBlockProps) {
  const {
    badge = team2Defaults.badge,
    title = team2Defaults.title,
    description = team2Defaults.description,
  } = content

  // Use block-specific trainers array
  const trainers =
    (content as { trainers?: Trainer[] }).trainers ?? team2Defaults.trainers

  // Extract trainer images for FlyingPosters
  const trainerImages = trainers.map((trainer) => trainer.image)

  return (
    <section className={cn("relative bg-black py-24 lg:py-32", classNames.root)}>
      {/* Iridescence background effect */}
      <div className="absolute inset-0 opacity-20">
        <Iridescence
          color={[0.13, 0.83, 0.93]}
          speed={0.5}
          amplitude={0.05}
          mouseReact={true}
        />
      </div>
      <div className={cn("container relative px-6", classNames.container)}>
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          spacing="none"
          className="mb-16"
          classNames={{
            ...classNames.header,
            badge: cn("text-cyan-400", classNames.header?.badge),
            title: cn(
              "font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl",
              classNames.header?.title
            ),
            description: cn("text-white/60", classNames.header?.description),
          }}
        />

        {/* Trainers Grid */}
        <div
          className={cn(
            "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={cn(
                "group relative",
                index === 0 && "md:col-span-2 lg:col-span-1",
                classNames.member?.root
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900",
                  classNames.member?.avatar
                )}
              >
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
                        className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div
                    className={cn(
                      "flex gap-3 opacity-0 transition-opacity group-hover:opacity-100",
                      classNames.member?.social
                    )}
                  >
                    {trainer.socials.instagram && (
                      <a
                        href={trainer.socials.instagram}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 transition-colors hover:bg-cyan-500/30",
                          classNames.member?.socialLink
                        )}
                      >
                        <DynamicIcon name="Instagram" className="h-4 w-4" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={trainer.socials.twitter}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 transition-colors hover:bg-cyan-500/30",
                          classNames.member?.socialLink
                        )}
                      >
                        <DynamicIcon name="Twitter" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3
                  className={cn(
                    "mb-1 text-xl font-bold text-white",
                    classNames.member?.name
                  )}
                >
                  {trainer.name}
                </h3>
                <p
                  className={cn(
                    "mb-3 text-sm font-medium text-white/60",
                    classNames.member?.role
                  )}
                >
                  {trainer.role}
                </p>
                <p
                  className={cn(
                    "mb-4 text-sm text-white/50",
                    classNames.member?.bio
                  )}
                >
                  {trainer.bio}
                </p>

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

        {/* FlyingPosters showcase section */}
        <div className="mt-20">
          <p className="mb-6 text-center text-sm font-medium tracking-[0.3em] text-cyan-400 uppercase">
            Our Team in Action
          </p>
          <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/50 md:h-[500px]">
            <FlyingPosters
              items={trainerImages}
              planeWidth={280}
              planeHeight={350}
              distortion={4}
              scrollEase={0.02}
              cameraFov={45}
              cameraZ={18}
              className="h-full w-full"
            />
            {/* Gradient overlay for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
