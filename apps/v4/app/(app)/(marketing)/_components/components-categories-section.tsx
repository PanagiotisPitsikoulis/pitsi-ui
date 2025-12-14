import Image from "next/image"
import {
  AlertCircle,
  FormInput,
  Layers3,
  LayoutTemplate,
  Navigation,
  PanelTop,
} from "lucide-react"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

const categories = [
  {
    Icon: FormInput,
    title: "Forms",
    description: "Input, Select, Checkbox, Switch, Slider, and more form controls.",
  },
  {
    Icon: Navigation,
    title: "Navigation",
    description: "Tabs, Breadcrumb, Menu, Command palette for seamless navigation.",
  },
  {
    Icon: PanelTop,
    title: "Overlays",
    description: "Dialog, Drawer, Popover, Tooltip for contextual information.",
  },
  {
    Icon: Layers3,
    title: "Data Display",
    description: "Table, Card, Avatar, Badge for presenting information.",
  },
  {
    Icon: AlertCircle,
    title: "Feedback",
    description: "Toast, Alert, Progress, Skeleton for user feedback.",
  },
  {
    Icon: LayoutTemplate,
    title: "Layout",
    description: "Accordion, Separator, Scroll Area for structure.",
  },
]

function CategoryCard({
  Icon,
  title,
  description,
  className,
}: {
  Icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={`group border-border bg-background relative z-10 flex h-[16rem] flex-col overflow-hidden rounded-4xl border shadow-sm md:h-[18rem] ${className ?? ""}`}>
      <div className="flex flex-1 items-center justify-center overflow-hidden p-6">
        <Icon className="text-brand size-16 md:size-20" strokeWidth={1.5} />
      </div>
      <div className="bg-background/50 border-t px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{title}</p>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>
    </div>
  )
}

function IconOnly({
  Icon,
  className,
}: {
  Icon: React.ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <div className={`relative z-10 hidden h-[16rem] items-center justify-center md:h-[18rem] lg:flex ${className ?? ""}`}>
      <Icon className="text-brand size-28 md:size-36" strokeWidth={1} />
    </div>
  )
}

export function ComponentsCategoriesSection() {
  return (
    <div id="categories" className="container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24">
      <p className="text-brand text-sm font-medium tracking-widest uppercase">
        Component Categories
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        Everything You Need
        <br />
        <span className="text-foreground">To Build Great UIs</span>
      </h2>
      <Spacer size="4xl" sizeMobile="3xl" />
      <div className="grid w-full grid-cols-6 gap-6">
        {/* Left column - spans 2 cols */}
        <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
          <CategoryCard
            Icon={categories[0].Icon}
            title={categories[0].title}
            description={categories[0].description}
          />
          <IconOnly Icon={categories[1].Icon} />
          <CategoryCard
            Icon={categories[2].Icon}
            title={categories[2].title}
            description={categories[2].description}
          />
        </div>

        {/* Center element - Form Demo - spans 2 cols */}
        <div className="col-span-6 border-border bg-background relative hidden h-full w-full flex-col overflow-hidden rounded-4xl border shadow-2xl lg:col-span-2 lg:flex">
          {/* Form Header */}
          <div className="border-b px-6 py-4">
            <div className="bg-foreground/80 h-4 w-32 rounded" />
            <div className="bg-muted mt-2 h-2 w-48 rounded" />
          </div>

          {/* Form Content */}
          <div className="flex flex-1 flex-col gap-5 p-6">
            {/* Name Input */}
            <div>
              <div className="bg-muted mb-2 h-3 w-12 rounded" />
              <div className="ring-ring/20 h-10 w-full rounded-lg border ring-2" />
            </div>

            {/* Email Input */}
            <div>
              <div className="bg-muted mb-2 h-3 w-10 rounded" />
              <div className="h-10 w-full rounded-lg border" />
            </div>

            {/* Select */}
            <div>
              <div className="bg-muted mb-2 h-3 w-16 rounded" />
              <div className="flex h-10 w-full items-center justify-between rounded-lg border px-3">
                <div className="bg-muted h-3 w-24 rounded" />
                <div className="bg-muted size-4 rounded" />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <div className="border-brand bg-brand/10 size-5 rounded border-2" />
              <div className="bg-muted h-3 w-40 rounded" />
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <div className="bg-foreground/80 h-3 w-28 rounded" />
                <div className="bg-muted mt-1.5 h-2 w-36 rounded" />
              </div>
              <div className="bg-brand h-6 w-10 rounded-full" />
            </div>

            {/* Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="bg-muted h-3 w-16 rounded" />
                <div className="bg-muted h-3 w-8 rounded" />
              </div>
              <div className="bg-muted h-2 w-full rounded-full">
                <div className="bg-brand h-2 w-2/3 rounded-full" />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 border-t px-6 py-4">
            <div className="bg-muted h-10 w-20 rounded-lg" />
            <div className="bg-brand h-10 w-24 rounded-lg" />
          </div>
        </div>

        {/* Right column - spans 2 cols */}
        <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
          <IconOnly Icon={categories[3].Icon} />
          <CategoryCard
            Icon={categories[4].Icon}
            title={categories[4].title}
            description={categories[4].description}
          />
          <CategoryCard
            Icon={categories[5].Icon}
            title={categories[5].title}
            description={categories[5].description}
          />
        </div>
      </div>
      <Spacer size="2xl" sizeMobile="lg" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Every component follows the same patterns—learn once, use everywhere.
      </p>
    </div>
  )
}
