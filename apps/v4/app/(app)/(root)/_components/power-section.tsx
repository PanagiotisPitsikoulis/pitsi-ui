"use client"

import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface ITabData {
  id: number
  title: string
  imageSrc: string
  description: string
}

const tabsData: ITabData[] = [
  {
    id: 1,
    title: "Full-Stack Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Complete page sections with frontend and backend code. Heroes, pricing tables, auth flows—ready for production.",
  },
  {
    id: 2,
    title: "Payload CMS Integration",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Blocks come with Payload CMS schemas, fields, and admin UI. Content management out of the box.",
  },
  {
    id: 3,
    title: "Sanity CMS Integration",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "GROQ queries, schema definitions, and studio configuration included. Sanity-ready blocks.",
  },
  {
    id: 4,
    title: "Props-Driven Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Every block accepts typed props. Pass data, customize variants, control behavior programmatically.",
  },
  {
    id: 5,
    title: "Composable Architecture",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "Blocks are built from smaller components. Mix, match, and create new blocks from existing pieces.",
  },
  {
    id: 6,
    title: "Background Effects",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Gradients, grids, dots, noise, and animated backgrounds. Drop them into any block instantly.",
  },
  {
    id: 7,
    title: "Versatile Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Heroes, features, pricing, testimonials, CTAs, footers—blocks for anything you want to build.",
  },
  {
    id: 8,
    title: "Auth Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Login, signup, and password reset flows. OAuth providers, magic links, and 2FA ready.",
  },
  {
    id: 9,
    title: "Dashboard Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Admin panels, analytics views, and data tables. Build internal tools in minutes.",
  },
  {
    id: 10,
    title: "Blog Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Article layouts, post grids, and MDX support. Content-driven pages made simple.",
  },
  {
    id: 11,
    title: "E-commerce Blocks",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "Product cards, cart drawers, and checkout flows. Shopify and Stripe integrations included.",
  },
  {
    id: 12,
    title: "Tested Together",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Every block is tested to work with every other block. No conflicts, no surprises. Just drop and build.",
  },
  {
    id: 13,
    title: "Template Views",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "See each block in a full page context. Copy entire templates or pick individual blocks for your project.",
  },
  {
    id: 14,
    title: "50+ UI Components",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Buttons, inputs, modals, dropdowns, tables, and more. Every component you need to build any interface.",
  },
  {
    id: 15,
    title: "Animated Components",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Smooth transitions, hover effects, and micro-interactions. Framer Motion powered and ready to use.",
  },
  {
    id: 16,
    title: "Text Animations",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Typewriter effects, text reveals, gradient animations, and more. Make your copy come alive.",
  },
  {
    id: 17,
    title: "Scroll Animations",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "Fade-ins, parallax, sticky sections, and scroll-triggered effects. Create engaging scroll experiences.",
  },
  {
    id: 18,
    title: "Loading States",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Skeletons, spinners, progress bars, and shimmer effects. Keep users engaged while content loads.",
  },
  {
    id: 19,
    title: "Charts & Data Viz",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Bar charts, line graphs, pie charts, and dashboards. Visualize data beautifully with Recharts.",
  },
  {
    id: 20,
    title: "Form Components",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Inputs, selects, checkboxes, date pickers, and file uploads. React Hook Form and Zod ready.",
  },
  {
    id: 21,
    title: "Navigation Patterns",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Headers, sidebars, breadcrumbs, and tabs. Every navigation pattern you need for any app.",
  },
  {
    id: 22,
    title: "Data Tables",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Sortable, filterable, paginated tables. TanStack Table integration with full customization.",
  },
  {
    id: 23,
    title: "Modal System",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "Dialogs, sheets, drawers, and command palettes. Stackable, accessible, and keyboard friendly.",
  },
  {
    id: 24,
    title: "Toast Notifications",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Success, error, warning, and info toasts. Queue management and custom positioning included.",
  },
  {
    id: 25,
    title: "Dropdown Menus",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Context menus, action menus, and nested dropdowns. Keyboard navigation and submenus built in.",
  },
  {
    id: 26,
    title: "Carousel & Sliders",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Image galleries, testimonial sliders, and content carousels. Touch-friendly with autoplay.",
  },
  {
    id: 27,
    title: "Date & Time Pickers",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Calendar pickers, date ranges, and time selectors. Timezone aware and locale support.",
  },
  {
    id: 28,
    title: "File Upload",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Drag and drop zones, progress indicators, and preview thumbnails. Multi-file support.",
  },
  {
    id: 29,
    title: "Rich Text Editor",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "WYSIWYG editing with markdown support. Formatting toolbar and keyboard shortcuts.",
  },
  {
    id: 30,
    title: "Command Palette",
    imageSrc:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Spotlight-style search and actions. Fuzzy matching, keyboard shortcuts, and nested commands.",
  },
]

export function PowerSection() {
  const [activeTabId, setActiveTabId] = useState<number | null>(1)
  const [activeImage, setActiveImage] = useState<string>(tabsData[0].imageSrc)

  return (
    <div className="container flex flex-col items-center justify-center px-6 pb-24 text-center">
      <div className="grid w-full grid-cols-6 gap-6">
        {/* Accordion - 2 columns on lg */}
        <div className="col-span-6 text-left lg:col-span-2">
          <div className="border-border bg-background overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
            <Accordion type="single" className="h-full w-full overflow-y-auto" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="border-b px-6 transition last:border-b-0"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.imageSrc)
                      setActiveTabId(tab.id)
                    }}
                    className="group cursor-pointer py-4 no-underline transition"
                  >
                    <span
                      className={`text-lg font-medium group-hover:underline ${tab.id === activeTabId ? "text-brand decoration-brand group-hover:decoration-brand" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground pb-2 text-sm">
                      {tab.description}
                    </p>
                    <div className="mt-4 lg:hidden">
                      <img
                        src={tab.imageSrc}
                        alt={tab.title}
                        className="h-full max-h-60 w-full rounded-2xl border object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Image - 4 columns on lg */}
        <div className="col-span-6 hidden lg:col-span-4 lg:block">
          <div className="border-border bg-background relative z-10 overflow-hidden rounded-4xl border shadow-sm lg:h-[500px]">
            <div className="bg-background absolute inset-0 z-[1]" />
            <img
              src={activeImage}
              alt="Feature preview"
              className="relative z-[2] h-full w-full object-contain p-12 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        One library. Infinite possibilities. Ship faster than ever.
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <Button variant="outline" className="rounded-full">
        Explore the library
      </Button>
    </div>
  )
}
