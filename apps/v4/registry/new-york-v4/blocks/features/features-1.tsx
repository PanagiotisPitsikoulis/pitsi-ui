"use client"

import {
  featuresDefaults,
  type FeaturesBlockProps,
} from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import CircularGallery from "@/registry/new-york-v4/animations/circular-gallery/circular-gallery"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

export function Features1({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  // Merge content with defaults
  const {
    badge = featuresDefaults.badge,
    title = featuresDefaults.title,
    features = featuresDefaults.features,
  } = content

  // Transform features into gallery items with images
  const galleryItems = features.slice(0, 6).map((feature, idx) => ({
    image: `/elements/landscape/plants/${idx + 1}.webp`,
    text: feature.title,
  }))

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        <div className={cn("mt-12 h-[500px] w-full", classNames.grid)}>
          <CircularGallery
            items={galleryItems}
            bend={2}
            textColor="hsl(var(--foreground))"
            borderRadius={0.08}
            font="500 16px var(--font-sans)"
            scrollSpeed={2}
            scrollEase={0.06}
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Features1 as FeaturesServicePlants }
