"use client"

import {
  newsletterDefaults,
  type NewsletterBlockProps,
} from "@/lib/blocks/newsletter.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

// ============================================================================
// Block-specific defaults (preserves original content)
// ============================================================================

const blockDefaults = {
  ...newsletterDefaults,
  badge: "Stay Updated",
  title: "Stay in the Loop",
  description:
    "Weekly care tips, early access to new arrivals, and member-only discounts.",
  form: {
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
  },
  disclaimer: "No spam, unsubscribe anytime. We respect your inbox.",
}

export function Newsletter1({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  // Merge content with defaults
  const {
    badge = blockDefaults.badge,
    title = blockDefaults.title,
    description = blockDefaults.description,
    form = blockDefaults.form,
    disclaimer = blockDefaults.disclaimer,
  } = content

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div
          className={cn(
            "mx-auto max-w-2xl text-center",
            classNames.header?.root
          )}
        >
          {badge && (
            <div
              className={cn(
                "bg-muted/50 border-border mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2",
                classNames.header?.badge
              )}
            >
              <svg
                className="text-primary h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-primary text-sm font-medium">{badge}</span>
            </div>
          )}
          <h2
            className={cn(
              "font-display text-foreground mb-4 text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mb-10 text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}

          <div
            className={cn(
              "mx-auto flex max-w-md flex-col gap-4 sm:flex-row",
              classNames.form?.root
            )}
          >
            <input
              type="email"
              placeholder={form.placeholder}
              className={cn(
                "bg-card border-border text-foreground placeholder:text-muted-foreground focus:ring-ring h-12 flex-1 rounded-full border px-6 focus:ring-1 focus:outline-none",
                classNames.form?.input
              )}
            />
            <Button
              className={cn("h-12 rounded-full px-8", classNames.form?.button)}
            >
              {form.submitLabel}
            </Button>
          </div>

          {disclaimer && (
            <p
              className={cn(
                "text-muted-foreground mt-4 text-sm",
                classNames.disclaimer
              )}
            >
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Newsletter1 as NewsletterServicePlants }
