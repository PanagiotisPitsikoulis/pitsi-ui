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

const features13Defaults = {
  badge: "What's Included",
  title: "Beyond basic components",
  description: "Advanced patterns and integrations for real-world apps.",
  features: [
    {
      id: 1,
      title: "Auth Blocks",
      description:
        "Login, signup, and password reset flows. OAuth providers, magic links, and 2FA ready.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: 2,
      title: "Dashboard Blocks",
      description:
        "Admin panels, analytics views, and data tables. Build internal tools in minutes.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      id: 3,
      title: "Blog Blocks",
      description:
        "Article layouts, post grids, and MDX support. Content-driven pages made simple.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      id: 4,
      title: "E-commerce Blocks",
      description:
        "Product cards, cart drawers, and checkout flows. Shopify and Stripe integrations included.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      id: 5,
      title: "Data Tables",
      description:
        "Sortable, filterable, paginated tables. TanStack Table integration with full customization.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
    {
      id: 6,
      title: "Form Components",
      description:
        "Inputs, selects, checkboxes, date pickers, and file uploads. React Hook Form and Zod ready.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    },
    {
      id: 7,
      title: "Modal System",
      description:
        "Dialogs, sheets, drawers, and command palettes. Stackable, accessible, and keyboard friendly.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: 8,
      title: "Navigation Patterns",
      description:
        "Headers, sidebars, breadcrumbs, and tabs. Every navigation pattern you need for any app.",
      imageSrc:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
  ],
  cta: { label: "Browse all blocks", href: "/blocks" },
}

export function Features13({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features13Defaults.badge,
    title = features13Defaults.title,
    description = features13Defaults.description,
    features = features13Defaults.features,
    cta = features13Defaults.cta,
  } = content as typeof features13Defaults

  const [activeFeatureId, setActiveFeatureId] = useState<number>(
    features[0]?.id ?? 1
  )
  const [activeImage, setActiveImage] = useState<string>(
    features[0]?.imageSrc ?? ""
  )

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {badge && (
            <p className="text-brand mb-4 text-sm font-medium tracking-wider uppercase">
              {badge}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

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
