"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  featuresDefaults,
  type FeaturesBlockProps,
} from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

// Extended interfaces for location-based features block
interface HoursItem {
  day: string
  time: string
}

interface ContactInfo {
  address: {
    line1: string
    line2: string
  }
  phone: string
  email: string
}

// Block-specific defaults (fitness location theme)
const features8Defaults = {
  ...featuresDefaults,
  badge: "Visit Us",
  title: "Come See\nThe Space",
  description:
    "Our 15,000 sq ft facility is designed to inspire greatness. Book a free tour and experience it yourself.",
  hours: [
    { day: "Monday - Friday", time: "5:00 AM - 10:00 PM" },
    { day: "Saturday", time: "7:00 AM - 8:00 PM" },
    { day: "Sunday", time: "8:00 AM - 6:00 PM" },
  ] as HoursItem[],
  amenities: [
    "Locker Rooms & Showers",
    "Towel Service",
    "Recovery Room",
    "Juice Bar",
    "Free Parking",
    "Bike Storage",
  ],
  contact: {
    address: {
      line1: "123 Fitness Street",
      line2: "Downtown, NY 10001",
    },
    phone: "(555) 123-4567",
    email: "hello@fuelstudio.com",
  } as ContactInfo,
  cta: {
    primary: { label: "Book a Free Tour", href: "#" },
    secondary: { label: "Get Directions", href: "#" },
  },
}

export function Features8({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features8Defaults.badge,
    title = features8Defaults.title,
    description = features8Defaults.description,
  } = content

  // Use block-specific data
  const hours =
    (content as { hours?: HoursItem[] }).hours ?? features8Defaults.hours
  const amenities =
    (content as { amenities?: string[] }).amenities ??
    features8Defaults.amenities
  const contact =
    (content as { contact?: ContactInfo }).contact ?? features8Defaults.contact
  const cta =
    (content as { cta?: typeof features8Defaults.cta }).cta ??
    features8Defaults.cta

  return (
    <section className={cn("bg-neutral-950 py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-2 lg:gap-16",
            classNames.grid
          )}
        >
          {/* Info */}
          <div>
            {badge && (
              <p
                className={cn(
                  "mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase",
                  classNames.header?.badge
                )}
              >
                {badge}
              </p>
            )}
            <h2
              className={cn(
                "font-display text-4xl font-bold whitespace-pre-line text-white md:text-5xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            {description && (
              <p
                className={cn(
                  "mt-6 text-lg text-white/60",
                  classNames.header?.description
                )}
              >
                {description}
              </p>
            )}

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name="MapPin"
                    className={cn(
                      "h-5 w-5 text-white",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-semibold text-white",
                      classNames.feature?.title
                    )}
                  >
                    Address
                  </p>
                  <p
                    className={cn(
                      "text-white/60",
                      classNames.feature?.description
                    )}
                  >
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name="Phone"
                    className={cn(
                      "h-5 w-5 text-white",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-semibold text-white",
                      classNames.feature?.title
                    )}
                  >
                    Phone
                  </p>
                  <p
                    className={cn(
                      "text-white/60",
                      classNames.feature?.description
                    )}
                  >
                    {contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5",
                    classNames.feature?.iconWrapper
                  )}
                >
                  <DynamicIcon
                    name="Mail"
                    className={cn(
                      "h-5 w-5 text-white",
                      classNames.feature?.icon
                    )}
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-semibold text-white",
                      classNames.feature?.title
                    )}
                  >
                    Email
                  </p>
                  <p
                    className={cn(
                      "text-white/60",
                      classNames.feature?.description
                    )}
                  >
                    {contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <DynamicIcon name="Clock" className="h-5 w-5 text-white/60" />
                <h3 className="font-semibold text-white">Studio Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between border-b border-white/10 py-2"
                  >
                    <span className="text-white/60">{item.day}</span>
                    <span className="font-medium text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                {cta.primary.label}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                {cta.secondary.label}
              </Button>
            </div>
          </div>

          {/* Map / Image area */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-neutral-900">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Stylized map placeholder */}
                <div className="relative h-full w-full">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Location pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -inset-8 animate-ping rounded-full bg-white/20" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <DynamicIcon
                          name="MapPin"
                          className="h-8 w-8 text-black"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Fake streets */}
                  <div className="absolute top-1/3 right-0 left-0 h-px bg-white/20" />
                  <div className="absolute right-0 bottom-1/4 left-0 h-px bg-white/20" />
                  <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20" />
                  <div className="absolute top-0 right-1/3 bottom-0 w-px bg-white/20" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900 to-transparent p-6">
                <p className="text-center text-sm text-white/60">
                  Interactive map coming soon
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div
              className={cn(
                "rounded-2xl bg-white/5 p-6",
                classNames.feature?.root
              )}
            >
              <h3 className="mb-4 font-semibold text-white">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-sm text-white/70">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
