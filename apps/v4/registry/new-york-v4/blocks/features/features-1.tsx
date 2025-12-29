"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  featuresDefaults,
  type FeaturesBlockProps,
} from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"

export function Features1({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  // Merge content with defaults
  const {
    badge = featuresDefaults.badge,
    title = featuresDefaults.title,
    features = featuresDefaults.features,
    image = featuresDefaults.image,
  } = content

  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3, 6)

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div className={cn("mb-20 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase",
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
        </div>

        <div className={cn("grid w-full grid-cols-6 gap-6", classNames.grid)}>
          {/* Left column - spans 2 cols - right aligned */}
          <div className="col-span-6 flex flex-col gap-10 lg:col-span-2">
            {leftFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col items-start text-left lg:items-end lg:text-right",
                  classNames.feature?.root
                )}
              >
                <div
                  className={cn(
                    "bg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name={feature.icon}
                    className={cn(
                      "text-brand h-6 w-6 stroke-[1.5]",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "text-foreground mb-1 text-lg font-semibold",
                    classNames.feature?.title
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "text-muted-foreground text-sm",
                    classNames.feature?.description
                  )}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center element - Image - spans 2 cols */}
          {image && (
            <div
              className={cn("col-span-6 lg:col-span-2", classNames.image?.root)}
            >
              <div
                className={cn(
                  "border-border relative h-full min-h-[400px] overflow-hidden rounded-3xl border lg:min-h-0",
                  classNames.image?.wrapper
                )}
              >
                <Image
                  draggable={false}
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    "pointer-events-none object-cover select-none",
                    classNames.image?.img
                  )}
                />
              </div>
            </div>
          )}

          {/* Right column - spans 2 cols */}
          <div className="col-span-6 flex flex-col gap-10 lg:col-span-2">
            {rightFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col items-start",
                  classNames.feature?.root
                )}
              >
                <div
                  className={cn(
                    "bg-brand/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name={feature.icon}
                    className={cn(
                      "text-brand h-6 w-6 stroke-[1.5]",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <h3
                  className={cn(
                    "text-foreground mb-1 text-lg font-semibold",
                    classNames.feature?.title
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "text-muted-foreground text-sm",
                    classNames.feature?.description
                  )}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features1 as FeaturesServicePlants }
