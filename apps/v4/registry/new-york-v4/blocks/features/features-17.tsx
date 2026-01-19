"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Block-specific defaults for travel theme
const features17Defaults = {
  badge: "Destinations",
  title: "Explore Our Top Picks",
  description:
    "Discover hand-selected destinations perfect for your next adventure.",
  features: [
    {
      icon: "MapPin",
      title: "Santorini, Greece",
      description:
        "Iconic white-washed villages, stunning sunsets, and crystal-clear Aegean waters.",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Santorini Greece",
      },
      tag: "Popular",
    },
    {
      icon: "MapPin",
      title: "Kyoto, Japan",
      description:
        "Ancient temples, serene gardens, and the timeless beauty of traditional Japan.",
      image: {
        src: "/elements/landscape/plane/2.webp",
        alt: "Kyoto Japan",
      },
      tag: "Cultural",
    },
    {
      icon: "MapPin",
      title: "Patagonia, Chile",
      description:
        "Dramatic glaciers, pristine wilderness, and unparalleled outdoor adventures.",
      image: {
        src: "/elements/landscape/plane/3.webp",
        alt: "Patagonia Chile",
      },
      tag: "Adventure",
    },
    {
      icon: "MapPin",
      title: "Marrakech, Morocco",
      description:
        "Vibrant souks, ornate palaces, and the enchanting blend of Africa and Arabia.",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Marrakech Morocco",
      },
      tag: "Exotic",
    },
    {
      icon: "MapPin",
      title: "Reykjavik, Iceland",
      description:
        "Northern lights, volcanic landscapes, and natural hot springs await.",
      image: {
        src: "/elements/landscape/plane/2.webp",
        alt: "Reykjavik Iceland",
      },
      tag: "Nature",
    },
  ],
}

export function Features17({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features17Defaults.badge,
    title = features17Defaults.title,
    description = features17Defaults.description,
    features = features17Defaults.features,
  } = content as typeof features17Defaults

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <section ref={containerRef} className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative w-[320px] shrink-0 overflow-hidden rounded-3xl md:w-[400px]",
                classNames.feature?.root
              )}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {feature.image && (
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Tag */}
                {feature.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand/90 rounded-full px-3 py-1 text-xs font-medium text-white">
                      {feature.tag}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <DynamicIcon
                      name={feature.icon}
                      className="h-4 w-4 text-white/80"
                    />
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features17 as FeaturesTravelScroll }
