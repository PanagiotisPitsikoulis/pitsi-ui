"use client"

import { useState } from "react"
import Image from "next/image"

import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Button } from "@/registry/new-york-v4/ui/button"

const features12Defaults = {
  badge: "Developer Experience",
  title: "Built with DX in mind",
  description: "We obsess over the details so you don't have to.",
  features: [
    {
      id: 1,
      title: "Dropdowns That Close",
      description:
        "Click outside, press escape, scroll away—dropdowns close when they should. Every edge case handled.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: 2,
      title: "Consistent Components",
      description:
        "No more components looking different across modules because of manual copy-paste tweaks. One source of truth.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      id: 3,
      title: "Real Keyboard Accessibility",
      description:
        "Not 'accessibility is a pain'—it's built in. Tab order, arrow navigation, escape to close. All tested.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      id: 4,
      title: "Import Paths That Work",
      description:
        "No case sensitivity bugs. No production errors from Button vs button. Paths configured correctly from day one.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      id: 5,
      title: "Dark Mode That Works",
      description:
        "No invisible text on light theme. No broken colors. Every component tested in both modes.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
    {
      id: 6,
      title: "Documentation With Answers",
      description:
        "No hunting through GitHub issues. Real examples, common problems, and solutions right in the docs.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    },
    {
      id: 7,
      title: "MCP Server Included",
      description:
        "Let AI understand your components. Generate, modify, and debug with Claude, Cursor, or any AI tool.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: 8,
      title: "Monorepo Support",
      description:
        "Turborepo, Nx, pnpm workspaces—all tested. Share components across packages without configuration pain.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
  ],
  cta: { label: "Get started", href: "/docs" },
}

export function Features12({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features12Defaults.badge,
    title = features12Defaults.title,
    description = features12Defaults.description,
    features = features12Defaults.features,
    cta = features12Defaults.cta,
  } = content as typeof features12Defaults

  const [activeFeatureId, setActiveFeatureId] = useState<number>(
    features[0]?.id ?? 1
  )
  const [activeImage, setActiveImage] = useState<string>(
    features[0]?.imageSrc ?? ""
  )

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header with SlideUp */}
        <SlideUp delay={0} duration={0.6} distance={30}>
          <BlockHeader
            badge={badge}
            title={title}
            classNames={classNames.header}
          />
        </SlideUp>

        <div className="grid w-full grid-cols-6 gap-6">
          {/* Image - 4 columns on lg (LEFT) */}
          <div className="col-span-6 hidden lg:col-span-4 lg:block">
            <SlideUp delay={0.1} duration={0.6} distance={40}>
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
            </SlideUp>
          </div>

          {/* Accordion - 2 columns on lg (RIGHT) with SlideUp items */}
          <div className="col-span-6 text-left lg:col-span-2">
            <SlideUp delay={0.2} duration={0.6} distance={40}>
              <div className="border-border bg-background overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
                <Accordion
                  type="single"
                  className="h-full w-full overflow-y-auto"
                  defaultValue="item-1"
                >
                  {features.map((feature, idx) => (
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
            </SlideUp>
          </div>
        </div>

        {/* Footer with SlideUp */}
        <SlideUp delay={0.3} duration={0.6} distance={20}>
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
        </SlideUp>
      </div>
    </section>
  )
}
