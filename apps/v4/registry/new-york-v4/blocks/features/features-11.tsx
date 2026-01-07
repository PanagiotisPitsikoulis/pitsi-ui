"use client"

import { useState } from "react"
import Image from "next/image"

import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Button } from "@/registry/new-york-v4/ui/button"

const features11Defaults = {
  title: "Everything included",
  description: "One library. Infinite possibilities. Ship faster than ever.",
  features: [
    {
      id: 1,
      title: "Full-Stack Blocks",
      description:
        "Complete page sections with frontend and backend code. Heroes, pricing tables, auth flows—ready for production.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: 2,
      title: "CMS Integration",
      description:
        "Blocks come with Payload and Sanity CMS schemas, fields, and admin UI. Content management out of the box.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      id: 3,
      title: "Props-Driven Blocks",
      description:
        "Every block accepts typed props. Pass data, customize variants, control behavior programmatically.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      id: 4,
      title: "50+ UI Components",
      description:
        "Buttons, inputs, modals, dropdowns, tables, and more. Every component you need to build any interface.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      id: 5,
      title: "Animated Components",
      description:
        "Smooth transitions, hover effects, and micro-interactions. Framer Motion powered and ready to use.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
    {
      id: 6,
      title: "Charts & Data Viz",
      description:
        "Bar charts, line graphs, pie charts, and dashboards. Visualize data beautifully with Recharts.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    },
  ],
  cta: { label: "Explore the library", href: "/docs/components" },
}

export function Features11({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    title = features11Defaults.title,
    description = features11Defaults.description,
    features = features11Defaults.features,
    cta = features11Defaults.cta,
  } = content as typeof features11Defaults

  const [activeFeatureId, setActiveFeatureId] = useState<number>(
    features[0]?.id ?? 1
  )
  const [activeImage, setActiveImage] = useState<string>(
    features[0]?.imageSrc ?? ""
  )

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div className="grid w-full grid-cols-6 gap-6">
          {/* Accordion - 2 columns on lg (LEFT) */}
          <div className="col-span-6 text-left lg:col-span-2">
            <div className="border-border bg-background overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
              <Accordion
                type="single"
                className="h-full w-full overflow-y-auto"
                defaultValue="item-1"
              >
                {features.map((feature) => (
                  <AccordionItem
                    key={feature.id}
                    value={`item-${feature.id}`}
                    className="border-b px-6 transition last:border-b-0"
                  >
                    <AccordionTrigger
                      onClick={() => {
                        setActiveImage(feature.imageSrc)
                        setActiveFeatureId(feature.id)
                      }}
                      className="group cursor-pointer py-4 no-underline transition"
                    >
                      <span
                        className={cn(
                          "text-lg font-medium group-hover:underline",
                          feature.id === activeFeatureId
                            ? "text-brand decoration-brand group-hover:decoration-brand"
                            : "text-muted-foreground"
                        )}
                      >
                        {feature.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground pb-2 text-sm">
                        {feature.description}
                      </p>
                      <div className="mt-4 lg:hidden">
                        <div className="relative aspect-video h-full max-h-60 w-full overflow-hidden rounded-2xl border">
                          <Image
                            src={feature.imageSrc}
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Image - 4 columns on lg (RIGHT) */}
          <div className="col-span-6 hidden lg:col-span-4 lg:block">
            <div className="border-border bg-background relative z-10 overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
              <div className="bg-background absolute inset-0 z-[1]" />
              <div className="relative z-[2] h-full w-full p-12">
                <Image
                  src={activeImage}
                  alt="Feature preview"
                  fill
                  className="object-contain p-12 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-center text-center">
          {description && (
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
              {description}
            </p>
          )}
          {cta && (
            <Button variant="outline" className="mt-6 rounded-full" asChild>
              <a href={cta.href}>{cta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
