"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  featuresDefaults,
  type FeaturesBlockProps,
} from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import GridDistortion from "@/registry/new-york-v4/animations/grid-distortion/grid-distortion"
import LetterGlitch from "@/registry/new-york-v4/animations/letter-glitch/letter-glitch"

// Extended feature item for fitness classes
interface ClassItem {
  title: string
  description: string
  duration: string
  intensity: "low" | "medium" | "high" | "extreme"
  image?: string
  href?: string
}

// Block-specific defaults (fitness classes theme)
const features6Defaults = {
  ...featuresDefaults,
  badge: "Our Classes",
  title: "Find Your Fight",
  description:
    "From high-intensity sweat sessions to mindful movement, we've got a class for every goal.",
  glitchConfig: {
    glitchColors: ["#39ff14", "#00ff41", "#0dff00"],
    glitchSpeed: 50,
    characters: "FITNESSGYMPOWER01",
  },
  gridDistortionConfig: {
    grid: 12,
    mouse: 0.12,
    strength: 0.15,
    relaxation: 0.9,
  },
  classes: [
    {
      title: "HIIT",
      description:
        "High-intensity intervals that torch calories and build endurance",
      duration: "45 min",
      intensity: "extreme" as const,
      image: "/placeholders/blocks/service-fitness/classes/hiit.webp",
      href: "#",
    },
    {
      title: "Boxing",
      description: "Learn technique while getting a full-body cardio workout",
      duration: "60 min",
      intensity: "high" as const,
      image: "/placeholders/blocks/service-fitness/classes/boxing.webp",
      href: "#",
    },
    {
      title: "Strength",
      description:
        "Build muscle and power with progressive resistance training",
      duration: "50 min",
      intensity: "high" as const,
      image: "/placeholders/blocks/service-fitness/classes/strength.webp",
      href: "#",
    },
    {
      title: "Yoga Flow",
      description:
        "Dynamic sequences to improve flexibility and mental clarity",
      duration: "60 min",
      intensity: "medium" as const,
      image: "/placeholders/blocks/service-fitness/classes/yoga.webp",
      href: "#",
    },
    {
      title: "Spin",
      description: "Ride to the beat in our immersive cycling studio",
      duration: "45 min",
      intensity: "high" as const,
      image: "/placeholders/blocks/service-fitness/classes/spin.webp",
      href: "#",
    },
    {
      title: "Recovery",
      description: "Stretch, roll, and restore with guided mobility work",
      duration: "30 min",
      intensity: "low" as const,
      image: "/placeholders/blocks/service-fitness/classes/recovery.webp",
      href: "#",
    },
  ] as ClassItem[],
}

const intensityConfig = {
  low: { label: "Low", bars: 1, color: "bg-white/40" },
  medium: { label: "Medium", bars: 2, color: "bg-white/60" },
  high: { label: "High", bars: 3, color: "bg-white/80" },
  extreme: { label: "Extreme", bars: 4, color: "bg-white" },
}

export function Features6({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features6Defaults.badge,
    title = features6Defaults.title,
    description = features6Defaults.description,
    glitchConfig = features6Defaults.glitchConfig,
    gridDistortionConfig = features6Defaults.gridDistortionConfig,
  } = content as typeof features6Defaults

  // Use block-specific classes array
  const classes =
    (content as { classes?: ClassItem[] }).classes ?? features6Defaults.classes
  return (
    <section className={cn("bg-black py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header with LetterGlitch background */}
        <div className={cn("mb-16 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          {/* Title with LetterGlitch background */}
          <div className="relative mx-auto h-24 max-w-2xl overflow-hidden rounded-xl md:h-32">
            <LetterGlitch
              glitchColors={glitchConfig.glitchColors}
              glitchSpeed={glitchConfig.glitchSpeed}
              characters={glitchConfig.characters}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <h2
                className={cn(
                  "font-display text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl",
                  classNames.header?.title
                )}
              >
                {title}
              </h2>
            </div>
          </div>
          {description && (
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg text-white/60",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Classes Grid with GridDistortion */}
        <div
          className={cn(
            "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {classes.map((classItem) => (
            <Link
              key={classItem.title}
              href={classItem.href || "#"}
              className={cn(
                "group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-neutral-900",
                classNames.feature?.root
              )}
            >
              {/* Background with GridDistortion */}
              {classItem.image && (
                <div className="absolute inset-0">
                  <GridDistortion
                    grid={gridDistortionConfig.grid}
                    mouse={gridDistortionConfig.mouse}
                    strength={gridDistortionConfig.strength}
                    relaxation={gridDistortionConfig.relaxation}
                    imageSrc={classItem.image}
                    className="h-full w-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 mt-auto p-6">
                {/* Intensity indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className={cn(
                          "h-3 w-1 rounded-full",
                          bar <= intensityConfig[classItem.intensity].bars
                            ? intensityConfig[classItem.intensity].color
                            : "bg-white/20"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-white/60 uppercase">
                    {intensityConfig[classItem.intensity].label}
                  </span>
                </div>

                <h3
                  className={cn(
                    "mb-2 text-2xl font-bold text-white",
                    classNames.feature?.title
                  )}
                >
                  {classItem.title}
                </h3>
                <p
                  className={cn(
                    "mb-4 line-clamp-2 text-sm text-white/70",
                    classNames.feature?.description
                  )}
                >
                  {classItem.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/60">
                    <DynamicIcon name="Clock" className="h-4 w-4" />
                    <span className="text-sm">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium">View Schedule</span>
                    <DynamicIcon name="ArrowRight" className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features6 as FeaturesClassesGrid }
