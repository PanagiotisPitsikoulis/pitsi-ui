"use client"

import Image from "next/image"

import { teamDefaults, type TeamBlockProps } from "@/lib/blocks/team.types"
import { cn } from "@/lib/utils"

// ============================================================================
// Block-specific defaults (preserves original content)
// ============================================================================

const blockDefaults = {
  ...teamDefaults,
  badge: "Our Experts",
  title: "Meet the Green Team",
  description:
    "Passionate plant lovers dedicated to helping you create your perfect indoor jungle. Our experts bring years of experience to ensure every plant thrives.",
  members: [
    {
      name: "Emma Green",
      role: "Head Horticulturist",
      avatar: { src: "/avatars/04.webp", alt: "Emma Green" },
    },
    {
      name: "James Fern",
      role: "Plant Care Specialist",
      avatar: { src: "/avatars/05.webp", alt: "James Fern" },
    },
    {
      name: "Sofia Bloom",
      role: "Botanical Designer",
      avatar: { src: "/avatars/06.webp", alt: "Sofia Bloom" },
    },
    {
      name: "Marcus Leaf",
      role: "Delivery Manager",
      avatar: { src: "/avatars/07.webp", alt: "Marcus Leaf" },
    },
    {
      name: "Olivia Moss",
      role: "Customer Success",
      avatar: { src: "/avatars/08.webp", alt: "Olivia Moss" },
    },
  ],
  /** Additional team member avatars for the stacked display */
  moreAvatars: [
    "/avatars/01.webp",
    "/avatars/02.webp",
    "/avatars/03.webp",
    "/avatars/04.webp",
    "/avatars/05.webp",
    "/avatars/06.webp",
    "/avatars/07.webp",
    "/avatars/08.webp",
    "/avatars/09.webp",
  ],
  /** Text shown below the stacked avatars */
  moreText: "+20 more plant experts ready to help",
}

export function Team1({ content = {}, classNames = {} }: TeamBlockProps) {
  // Merge content with defaults
  const {
    badge = blockDefaults.badge,
    title = blockDefaults.title,
    description = blockDefaults.description,
    members = blockDefaults.members,
  } = content

  // Extended content specific to this block variant
  const moreAvatars =
    (content as typeof blockDefaults).moreAvatars ?? blockDefaults.moreAvatars
  const moreText =
    (content as typeof blockDefaults).moreText ?? blockDefaults.moreText

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div className={cn("mb-20 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-foreground text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mx-auto mt-4 max-w-2xl text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
            classNames.grid
          )}
        >
          {members.map((member, i) => (
            <div
              key={i}
              className={cn("group text-center", classNames.member?.root)}
            >
              <div
                className={cn(
                  "bg-muted relative mx-auto mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full",
                  classNames.member?.avatar
                )}
              >
                <Image
                  draggable={false}
                  src={member.avatar?.src ?? "/avatars/01.webp"}
                  alt={member.avatar?.alt ?? member.name}
                  fill
                  className="pointer-events-none object-cover transition-transform duration-500 select-none group-hover:scale-105"
                />
              </div>
              <h3
                className={cn(
                  "text-foreground text-lg font-semibold",
                  classNames.member?.name
                )}
              >
                {member.name}
              </h3>
              <p
                className={cn("text-muted-foreground", classNames.member?.role)}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Stacked avatars section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex -space-x-4">
            {moreAvatars.map((avatar, i) => (
              <div
                key={i}
                className="border-background bg-muted relative h-14 w-14 overflow-hidden rounded-full border-4 transition-transform hover:z-10 hover:scale-110"
                style={{ zIndex: moreAvatars.length - i }}
              >
                <Image
                  draggable={false}
                  src={avatar}
                  alt={`Team member ${i + 1}`}
                  fill
                  className="pointer-events-none object-cover select-none"
                />
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">{moreText}</p>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Team1 as TeamServicePlants }
