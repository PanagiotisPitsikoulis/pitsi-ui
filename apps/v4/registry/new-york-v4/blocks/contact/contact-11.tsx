"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact11Defaults = {
  title: "Request Your Custom Itinerary",
  description:
    "Fill out the form below and our travel specialists will craft a personalized trip just for you.",
  tripTypes: [
    { value: "adventure", label: "Adventure & Outdoors", icon: "Mountain" },
    { value: "beach", label: "Beach & Relaxation", icon: "Waves" },
    { value: "cultural", label: "Cultural & Historical", icon: "Landmark" },
    { value: "romantic", label: "Romantic Getaway", icon: "Heart" },
    { value: "family", label: "Family Vacation", icon: "Users" },
    { value: "luxury", label: "Luxury Experience", icon: "Crown" },
  ],
  budgetRanges: [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
    "Flexible",
  ],
  features: [
    {
      icon: "Clock",
      title: "Quick Response",
      description: "Receive your custom itinerary within 48 hours",
    },
    {
      icon: "Shield",
      title: "Best Price Guarantee",
      description: "We match or beat any comparable quote",
    },
    {
      icon: "RefreshCw",
      title: "Free Revisions",
      description: "Unlimited changes until you're satisfied",
    },
  ],
}

export function Contact11({
  content = {},
  classNames = {},
}: ContactBlockProps) {
  const {
    title = contact11Defaults.title,
    description = contact11Defaults.description,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade>
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </ScrollFade>

        <div className="mx-auto max-w-4xl">
          {/* Features Bar */}
          <SlideUp delay={0.1}>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {contact11Defaults.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-muted flex items-center gap-3 rounded-xl p-4"
                >
                  <div className="bg-primary/10 text-primary rounded-lg p-2">
                    <DynamicIcon name={feature.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {feature.title}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>

          {/* Form */}
          <SlideUp delay={0.2}>
            <div className="border-border rounded-2xl border p-6 md:p-8">
              <form className="space-y-6">
                {/* Trip Type Selection */}
                <div className="space-y-3">
                  <label className="text-foreground text-sm font-medium">
                    What type of trip are you planning?
                  </label>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {contact11Defaults.tripTypes.map((type, i) => (
                      <label
                        key={i}
                        className="border-border hover:border-primary hover:bg-muted cursor-pointer rounded-xl border p-4 text-center transition-colors"
                      >
                        <input
                          type="radio"
                          name="tripType"
                          value={type.value}
                          className="sr-only"
                        />
                        <DynamicIcon
                          name={type.icon}
                          className="text-primary mx-auto mb-2 h-6 w-6"
                        />
                        <span className="text-foreground text-sm font-medium">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-foreground text-sm font-medium"
                    >
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-foreground text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Trip Details */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <label
                      htmlFor="destination"
                      className="text-foreground text-sm font-medium"
                    >
                      Dream Destination
                    </label>
                    <Input id="destination" placeholder="e.g., Japan, Greece" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="duration"
                      className="text-foreground text-sm font-medium"
                    >
                      Trip Duration
                    </label>
                    <Input id="duration" placeholder="e.g., 10 days" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="travelers"
                      className="text-foreground text-sm font-medium"
                    >
                      Number of Travelers
                    </label>
                    <Input
                      id="travelers"
                      type="number"
                      placeholder="2"
                      min="1"
                    />
                  </div>
                </div>

                {/* Budget & Dates */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-foreground text-sm font-medium"
                    >
                      Budget Range (per person)
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {contact11Defaults.budgetRanges.map((range, i) => (
                          <SelectItem
                            key={i}
                            value={range
                              .toLowerCase()
                              .replace(/[^a-z0-9]/g, "")}
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="dates"
                      className="text-foreground text-sm font-medium"
                    >
                      Preferred Travel Dates
                    </label>
                    <Input id="dates" placeholder="e.g., March 2024" />
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-foreground text-sm font-medium"
                  >
                    Tell us about your dream trip
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Activities you'd like to do, places you want to see, dietary requirements, accessibility needs, or anything else we should know..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <DynamicIcon name="Send" className="mr-2 h-4 w-4" />
                  Get My Custom Itinerary
                </Button>

                <p className="text-muted-foreground text-center text-xs">
                  No obligation. Your information is secure and will never be
                  shared.
                </p>
              </form>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
