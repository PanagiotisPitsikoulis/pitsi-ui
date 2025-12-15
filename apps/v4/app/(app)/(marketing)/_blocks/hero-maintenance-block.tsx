"use client"

import { Globe } from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"

import { Avatar, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"

export interface HeroMaintenanceAvatar {
  src: string
  alt: string
}

export interface HeroMaintenanceBlockProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaIcon?: React.ReactNode
  avatars?: HeroMaintenanceAvatar[]
  trustText?: string
  className?: string
}

const defaultHeadline = "Simplifying maintenance for efficient code management."
const defaultDescription = "Our platform streamlines development by automating issue tracking, documentation, and knowledge management."
const defaultCtaLabel = "Request early access"
const defaultCtaIcon = <Globe className="size-4" />
const defaultAvatars: HeroMaintenanceAvatar[] = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "placeholder" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp", alt: "placeholder" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "placeholder" },
]
const defaultTrustText = "Trusted by 2000+ developers worldwide"

export function HeroMaintenanceBlock({
  headline = defaultHeadline,
  description = defaultDescription,
  ctaLabel = defaultCtaLabel,
  ctaIcon = defaultCtaIcon,
  avatars = defaultAvatars,
  trustText = defaultTrustText,
  className,
}: HeroMaintenanceBlockProps) {
  return (
    <section className={cn("relative py-32", className)}>
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--muted-foreground)_1px,transparent_1px)] opacity-35 [background-size:14px_14px]"></div>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
          {headline}
        </h1>
        <div className="mt-10 flex flex-col-reverse gap-8 md:mt-12 md:flex-row md:items-center md:gap-10 lg:mt-14">
          <div className="flex flex-col gap-6">
            <Button className="px-6 py-5 sm:w-fit">
              {ctaLabel} {ctaIcon}
            </Button>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center -space-x-1.5">
                {avatars.map((avatar, index) => (
                  <Avatar key={index} className="size-7 border">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
              <p className="text-muted-foreground text-sm">{trustText}</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-lg text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
