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
    destinations?: string[]
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact7Defaults = {
  title: "Plan Your Dream Trip",
  description:
    "Tell us where you want to go and we'll craft the perfect itinerary for your next adventure.",
  destinations: [
    "Europe",
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Australia & Oceania",
    "Caribbean",
    "Middle East",
  ],
  popularRoutes: [
    { from: "New York", to: "Paris", icon: "Plane" },
    { from: "Los Angeles", to: "Tokyo", icon: "Plane" },
    { from: "London", to: "Bali", icon: "Plane" },
    { from: "Sydney", to: "Rome", icon: "Plane" },
  ],
  contactInfo: {
    phone: "+1 (800) 555-TRIP",
    email: "bookings@travelagency.com",
    hours: "24/7 Travel Support",
  },
}

export function Contact7({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact7Defaults.title,
    description = contact7Defaults.description,
    destinations = contact7Defaults.destinations,
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <SlideUp delay={0.1}>
            <div className="border-border rounded-2xl border p-6 md:p-8">
              <h3 className="text-foreground mb-6 text-xl font-semibold">
                Start Planning Your Journey
              </h3>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-foreground text-sm font-medium"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-foreground text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
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
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="destination"
                      className="text-foreground text-sm font-medium"
                    >
                      Destination Region
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest, i) => (
                          <SelectItem key={i} value={dest.toLowerCase()}>
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-foreground text-sm font-medium"
                  >
                    Tell Us About Your Dream Trip
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your ideal vacation - activities, accommodation preferences, special occasions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Get Free Quote
                </Button>
              </form>
            </div>
          </SlideUp>

          {/* Map & Routes */}
          <SlideUp delay={0.2}>
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-muted flex aspect-video items-center justify-center rounded-2xl">
                <div className="text-center">
                  <DynamicIcon
                    name="Globe"
                    className="text-muted-foreground mx-auto mb-3 h-16 w-16"
                  />
                  <p className="text-muted-foreground text-sm">
                    Interactive World Map
                  </p>
                  <p className="text-muted-foreground/70 mt-1 text-xs">
                    Select your destination on the map
                  </p>
                </div>
              </div>

              {/* Popular Routes */}
              <div className="border-border rounded-2xl border p-6">
                <h4 className="text-foreground mb-4 font-semibold">
                  Popular Routes
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {contact7Defaults.popularRoutes.map((route, i) => (
                    <div
                      key={i}
                      className="bg-muted/50 flex items-center gap-3 rounded-xl p-3"
                    >
                      <DynamicIcon
                        name={route.icon}
                        className="text-primary h-5 w-5"
                      />
                      <span className="text-foreground text-sm">
                        {route.from}{" "}
                        <span className="text-muted-foreground">to</span>{" "}
                        {route.to}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                <h4 className="mb-4 font-semibold">Need Help Booking?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <DynamicIcon name="Phone" className="h-5 w-5 opacity-80" />
                    <a
                      href={`tel:${contact7Defaults.contactInfo.phone}`}
                      className="hover:underline"
                    >
                      {contact7Defaults.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <DynamicIcon name="Mail" className="h-5 w-5 opacity-80" />
                    <a
                      href={`mailto:${contact7Defaults.contactInfo.email}`}
                      className="hover:underline"
                    >
                      {contact7Defaults.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <DynamicIcon name="Clock" className="h-5 w-5 opacity-80" />
                    <span>{contact7Defaults.contactInfo.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
