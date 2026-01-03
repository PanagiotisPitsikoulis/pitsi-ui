"use client"

import Image from "next/image"

import {
  contactDefaults,
  type ContactBlockProps,
} from "@/lib/blocks/contact.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ImageOverlay } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "Get In Touch",
  title: "Grow With Us",
  description: "Expert guidance for every plant parent, from beginner to pro.",
  form: {
    fields: [
      {
        name: "name",
        type: "text" as const,
        placeholder: "Your name",
        required: true,
      },
      {
        name: "email",
        type: "email" as const,
        placeholder: "Email address",
        required: true,
      },
      {
        name: "phone",
        type: "tel" as const,
        placeholder: "Phone number (optional)",
        required: false,
      },
      {
        name: "message",
        type: "textarea" as const,
        placeholder:
          "What plants are you interested in? Any questions about care?",
        required: false,
      },
    ],
    submitLabel: "Get Plant Advice",
  },
  testimonial: {
    quote:
      "I killed every plant I touched until I found this shop. Now my apartment is a jungle! The care guides changed everything.",
    author: {
      name: "Alex Thompson",
      role: "Plant Parent Since 2023",
      avatar: "/avatars/08.webp",
    },
  },
  image: {
    src: "/elements/landscape/plants/5.webp",
    alt: "Beautiful indoor plants",
  },
  stats: [
    { value: "1000+", label: "Varieties" },
    { value: "Free", label: "Care Guide" },
    { value: "Expert", label: "Advice" },
  ],
  socialLinks: [
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "tiktok", href: "#" },
  ],
  contactEmail: "greenhouse@botanicals.com",
}

export function Contact1({ content = {}, classNames = {} }: ContactBlockProps) {
  // Merge content with block-specific defaults, falling back to generic defaults
  const {
    badge = blockDefaults.badge ?? contactDefaults.badge,
    title = blockDefaults.title ?? contactDefaults.title,
    description = blockDefaults.description ?? contactDefaults.description,
    form = blockDefaults.form ?? contactDefaults.form,
  } = content

  // Block-specific content that doesn't have generic defaults
  const testimonial = blockDefaults.testimonial
  const image = blockDefaults.image
  const stats = blockDefaults.stats
  const socialLinks = blockDefaults.socialLinks
  const contactEmail = blockDefaults.contactEmail

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Side */}
          <div className="order-2 lg:order-1 lg:py-8">
            {badge && (
              <p
                className={cn(
                  "text-brand-complementary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                  classNames.header?.badge
                )}
              >
                {badge}
              </p>
            )}
            <h2
              className={cn(
                "font-display text-foreground mb-4 text-4xl font-bold lg:text-5xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground mb-10 text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>

            <form className={cn("space-y-6", classNames.form?.root)}>
              {form?.fields?.map((field, i) =>
                field.type === "textarea" ? (
                  <div key={i}>
                    <textarea
                      placeholder={field.placeholder}
                      rows={4}
                      className={cn(
                        "border-border text-foreground w-full resize-none border-b bg-transparent py-4 transition-colors",
                        "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none",
                        classNames.form?.textarea
                      )}
                    />
                  </div>
                ) : (
                  <div key={i}>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className={cn(
                        "border-border text-foreground w-full border-b bg-transparent py-4 transition-colors",
                        "placeholder:text-muted-foreground focus:border-brand-complementary focus:outline-none",
                        classNames.form?.input
                      )}
                    />
                  </div>
                )
              )}

              <div className="flex items-center gap-3">
                <Button
                  className={cn(
                    "flex-1 rounded-full py-6 text-base font-medium",
                    classNames.form?.submit
                  )}
                >
                  {form?.submitLabel}
                </Button>
                {socialLinks.map((link, i) => (
                  <Button
                    key={i}
                    size="icon"
                    className="bg-brand-complementary text-background hover:bg-brand-complementary/90 h-11 w-11 shrink-0 rounded-full"
                  >
                    {link.platform === "instagram" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {link.platform === "twitter" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {link.platform === "tiktok" && (
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    )}
                  </Button>
                ))}
              </div>

              <p className="text-muted-foreground text-center text-sm">
                Or email us at{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-brand-complementary hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </form>
          </div>

          {/* Image & Testimonial Side */}
          <BlockThemeWrapper
            slug="service-plants"
            tint="deep"
            forceDark
            className="order-1 aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[700px]"
          >
            <Image
              draggable={false}
              src={image.src}
              alt={image.alt}
              fill
              className="pointer-events-none object-cover select-none"
            />
            <ImageOverlay opacity={50} />

            {/* Testimonial overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-12">
              <svg
                className="text-foreground mb-4 h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              <p className="text-foreground mb-6 text-xl leading-relaxed font-normal lg:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="ring-foreground/40 relative h-12 w-12 overflow-hidden rounded-full ring-2">
                  <Image
                    draggable={false}
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    fill
                    className="pointer-events-none object-cover select-none"
                  />
                </div>
                <div>
                  <p className="text-foreground font-semibold">
                    {testimonial.author.name}
                  </p>
                  <p className="text-foreground/90 text-sm">
                    {testimonial.author.role}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="border-foreground/30 mt-8 grid grid-cols-3 gap-4 border-t pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-foreground text-2xl font-medium lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-foreground/80 mt-1 text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlockThemeWrapper>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Contact1 as ContactServicePlants }
