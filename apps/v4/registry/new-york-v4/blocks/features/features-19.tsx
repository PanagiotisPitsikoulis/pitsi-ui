"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

// Block-specific defaults for travel theme
const features19Defaults = {
  badge: "Our Services",
  title: "Travel Categories",
  description: "Discover the perfect travel experience tailored to your style.",
  categories: [
    {
      id: "adventure",
      label: "Adventure",
      icon: "Compass",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Adventure travel",
      },
      features: [
        {
          icon: "Mountain",
          title: "Mountain Expeditions",
          description:
            "Scale iconic peaks with expert mountaineers and premium gear.",
        },
        {
          icon: "Waves",
          title: "Water Adventures",
          description:
            "Kayaking, diving, and surfing in the world's most pristine waters.",
        },
        {
          icon: "Navigation",
          title: "Safari Tours",
          description:
            "Witness wildlife in natural habitats with experienced guides.",
        },
      ],
    },
    {
      id: "cultural",
      label: "Cultural",
      icon: "Building2",
      image: {
        src: "/elements/landscape/plane/2.webp",
        alt: "Cultural travel",
      },
      features: [
        {
          icon: "History",
          title: "Heritage Tours",
          description:
            "Explore UNESCO sites and ancient civilizations with historians.",
        },
        {
          icon: "Palette",
          title: "Art & Museums",
          description:
            "Private access to world-renowned galleries and hidden collections.",
        },
        {
          icon: "Globe",
          title: "Local Immersion",
          description:
            "Live like a local with homestays and authentic experiences.",
        },
      ],
    },
    {
      id: "luxury",
      label: "Luxury",
      icon: "Star",
      image: {
        src: "/elements/landscape/plane/3.webp",
        alt: "Luxury travel",
      },
      features: [
        {
          icon: "Building",
          title: "5-Star Resorts",
          description:
            "Handpicked luxury accommodations with exclusive amenities.",
        },
        {
          icon: "Navigation",
          title: "Private Jets",
          description:
            "Travel in ultimate comfort with personalized flight experiences.",
        },
        {
          icon: "HeartHandshake",
          title: "Concierge Service",
          description:
            "24/7 dedicated support for every need, no matter how unique.",
        },
      ],
    },
    {
      id: "family",
      label: "Family",
      icon: "Users",
      image: {
        src: "/elements/landscape/plane/1.webp",
        alt: "Family travel",
      },
      features: [
        {
          icon: "Smile",
          title: "Kid-Friendly Tours",
          description:
            "Engaging activities designed to entertain all ages together.",
        },
        {
          icon: "Shield",
          title: "Safe Adventures",
          description:
            "Vetted accommodations and activities with family safety in mind.",
        },
        {
          icon: "Calendar",
          title: "Flexible Scheduling",
          description:
            "Plans that adapt to nap times, meal times, and energy levels.",
        },
      ],
    },
  ],
}

export function Features19({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features19Defaults.badge,
    title = features19Defaults.title,
    description = features19Defaults.description,
    categories = features19Defaults.categories,
  } = content as typeof features19Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        <Tabs defaultValue={categories[0]?.id} className="w-full">
          {/* Tab Triggers */}
          <TabsList className="mx-auto mb-12 flex h-auto w-full max-w-2xl flex-wrap justify-center gap-2 bg-transparent p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="bg-card border-border data-[state=active]:bg-brand data-[state=active]:text-brand-foreground flex items-center gap-2 rounded-full border px-6 py-3 shadow-sm transition-all data-[state=active]:shadow-md"
              >
                <DynamicIcon name={category.icon} className="h-4 w-4" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  {category.image && (
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {category.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "bg-card border-border group flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-all hover:shadow-md",
                        classNames.feature?.root
                      )}
                    >
                      <div
                        className={cn(
                          "bg-brand/10 group-hover:bg-brand/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                          classNames.feature?.iconWrapper
                        )}
                      >
                        <DynamicIcon
                          name={feature.icon}
                          className={cn(
                            "text-brand h-6 w-6",
                            classNames.feature?.icon
                          )}
                        />
                      </div>
                      <div>
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
                            "text-muted-foreground text-sm leading-relaxed",
                            classNames.feature?.description
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features19 as FeaturesTravelTabs }
