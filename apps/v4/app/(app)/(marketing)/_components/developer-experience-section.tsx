"use client"

import Image from "next/image"
import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface IFeature {
  id: number
  title: string
  description: string
  imageSrc: string
}

const features: IFeature[] = [
  {
    id: 1,
    title: "No Dependency Hell",
    description:
      "We pin and test every dependency. No more cmdk breaking your Combobox or random library updates destroying your components.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: 2,
    title: "Bugs Are Our Problem",
    description:
      "Unlike copy-paste libraries where bugs become YOUR problem, we maintain and fix issues. Report it, we fix it.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: 3,
    title: "Zero Hydration Errors",
    description:
      "Every component tested with Next.js App Router and SSR. No more 'initial UI does not match' nightmares.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: 4,
    title: "Modals That Work on Mobile",
    description:
      "Drawers, dialogs, and sheets that actually work on iOS and Android. No more broken mobile experiences.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    id: 5,
    title: "Dropdowns That Close",
    description:
      "Click outside, press escape, scroll away—dropdowns close when they should. Every edge case handled.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
  {
    id: 6,
    title: "CLI That Actually Works",
    description:
      "No name changes breaking your workflow. No cryptic errors. One command, components installed, done.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
  },
  {
    id: 7,
    title: "Consistent Components",
    description:
      "No more components looking different across modules because of manual copy-paste tweaks. One source of truth.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: 8,
    title: "Real Keyboard Accessibility",
    description:
      "Not 'accessibility is a pain'—it's built in. Tab order, arrow navigation, escape to close. All tested.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: 9,
    title: "Import Paths That Work",
    description:
      "No case sensitivity bugs. No production errors from Button vs button. Paths configured correctly from day one.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: 10,
    title: "Designer-Friendly",
    description:
      "Figma components that match code 1:1. Designers can customize without breaking developer workflows.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    id: 11,
    title: "Beyond Basic Components",
    description:
      "Not just buttons and inputs. Advanced components like data tables, rich editors, and file uploaders included.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
  {
    id: 12,
    title: "Customization That Survives",
    description:
      "Your customizations won't break on updates. We version components properly with migration guides.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
  },
  {
    id: 13,
    title: "React 19 Ready",
    description:
      "Tested and working with React 19 and Next.js 15. No installation failures or compatibility headaches.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: 14,
    title: "Diff-Friendly Updates",
    description:
      "See exactly what changed between versions. Update with confidence using our CLI diff command.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: 15,
    title: "Dark Mode That Works",
    description:
      "No invisible text on light theme. No broken colors. Every component tested in both modes.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
  {
    id: 16,
    title: "Documentation With Answers",
    description:
      "No hunting through GitHub issues. Real examples, common problems, and solutions right in the docs.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
  },
  {
    id: 17,
    title: "MCP Server Included",
    description:
      "Let AI understand your components. Generate, modify, and debug with Claude, Cursor, or any AI tool.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
  },
  {
    id: 18,
    title: "Monorepo Support",
    description:
      "Turborepo, Nx, pnpm workspaces—all tested. Share components across packages without configuration pain.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
  },
  {
    id: 19,
    title: "Form Validation Done Right",
    description:
      "React Hook Form + Zod integration that actually works. Error states, focus management, all handled.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: 20,
    title: "Copy-Paste Without Fear",
    description:
      "Components that work together. No style conflicts, no z-index wars, no CSS specificity battles.",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
]

export function DeveloperExperienceSection() {
  const [activeFeatureId, setActiveFeatureId] = useState<number | null>(1)
  const [activeImage, setActiveImage] = useState<string>(features[0].imageSrc)

  return (
    <div className="container flex flex-col items-center justify-center px-6 pb-24 text-center">
      <div className="grid w-full grid-cols-6 gap-6">
        {/* Image - 4 columns on lg (LEFT) */}
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

        {/* Accordion - 2 columns on lg (RIGHT) */}
        <div className="col-span-6 text-left lg:col-span-2">
          <div className="border-border bg-background overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
            <Accordion type="single" className="h-full w-full overflow-y-auto" defaultValue="item-1">
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
                      className={`text-lg font-medium group-hover:underline ${feature.id === activeFeatureId ? "text-brand decoration-brand group-hover:decoration-brand" : "text-muted-foreground"}`}
                    >
                      {feature.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pb-2 text-sm">
                      {feature.description}
                    </p>
                    <div className="mt-4 lg:hidden">
                      <div className="relative h-full max-h-60 w-full rounded-2xl border overflow-hidden aspect-video">
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
      </div>

      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Your code, your rules. Full control over every line.
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <Button variant="outline" className="rounded-full">
        View documentation
      </Button>
    </div>
  )
}
