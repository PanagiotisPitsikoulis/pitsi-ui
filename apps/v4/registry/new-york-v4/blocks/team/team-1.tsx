"use client"

import Image from "next/image"

export function TeamServicePlants() {
  const team = [
    {
      name: "Emma Green",
      role: "Head Horticulturist",
      avatar: "/avatars/04.webp",
    },
    {
      name: "James Fern",
      role: "Plant Care Specialist",
      avatar: "/avatars/05.webp",
    },
    {
      name: "Sofia Bloom",
      role: "Botanical Designer",
      avatar: "/avatars/06.webp",
    },
    {
      name: "Marcus Leaf",
      role: "Delivery Manager",
      avatar: "/avatars/07.webp",
    },
    {
      name: "Olivia Moss",
      role: "Customer Success",
      avatar: "/avatars/08.webp",
    },
  ]

  const moreTeam = [
    "/avatars/01.webp",
    "/avatars/02.webp",
    "/avatars/03.webp",
    "/avatars/04.webp",
    "/avatars/05.webp",
    "/avatars/06.webp",
    "/avatars/07.webp",
    "/avatars/08.webp",
    "/avatars/09.webp",
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Our Experts
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Meet the Green Team
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Passionate plant lovers dedicated to helping you create your perfect
            indoor jungle. Our experts bring years of experience to ensure every
            plant thrives.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="bg-muted relative mx-auto mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full">
                <Image
                  draggable={false}
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="pointer-events-none object-cover transition-transform duration-500 select-none group-hover:scale-105"
                />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Stacked avatars section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex -space-x-4">
            {moreTeam.map((avatar, i) => (
              <div
                key={i}
                className="border-background bg-muted relative h-14 w-14 overflow-hidden rounded-full border-4 transition-transform hover:z-10 hover:scale-110"
                style={{ zIndex: moreTeam.length - i }}
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
          <p className="text-muted-foreground mt-4">
            +20 more plant experts ready to help
          </p>
        </div>
      </div>
    </section>
  )
}
