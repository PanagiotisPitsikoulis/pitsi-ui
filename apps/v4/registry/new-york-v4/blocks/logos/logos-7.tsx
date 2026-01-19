"use client"

import { cn } from "@/lib/utils"

interface LogosBlockProps {
  content?: {
    title?: string
    logos?: Array<{ name: string }>
  }
  classNames?: {
    root?: string
    container?: string
    title?: string
    grid?: string
  }
}

const logos7Defaults = {
  title: "Trusted by leading travel brands worldwide",
  logos: [
    { name: "SkyWings Airlines" },
    { name: "Grand Hotels" },
    { name: "Wanderlust Tours" },
    { name: "Ocean Cruise Lines" },
    { name: "Alpine Resorts" },
    { name: "Safari Expeditions" },
  ],
}

export function Logos7({ content = {}, classNames = {} }: LogosBlockProps) {
  const { title = logos7Defaults.title, logos = logos7Defaults.logos } = content

  return (
    <section className={cn("bg-background py-12 md:py-16", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {title && (
          <p
            className={cn(
              "text-muted-foreground mb-10 text-center text-sm font-medium tracking-widest uppercase",
              classNames.title
            )}
          >
            {title}
          </p>
        )}
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16",
            classNames.grid
          )}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="text-muted-foreground/40 hover:text-muted-foreground text-lg font-semibold tracking-wider grayscale transition-all duration-300 hover:grayscale-0 md:text-xl"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
