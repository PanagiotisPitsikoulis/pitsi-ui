"use client"

import { logosDefaults, type LogosBlockProps } from "@/lib/blocks/logos.types"
import { cn } from "@/lib/utils"

// ============================================================================
// Block-specific defaults (preserves original content)
// ============================================================================

const blockDefaults = {
  ...logosDefaults,
  title: "Trusted by leading brands and publications",
  logos: [
    { name: "Vogue Living", image: { src: "", alt: "Vogue Living" } },
    {
      name: "Architectural Digest",
      image: { src: "", alt: "Architectural Digest" },
    },
    { name: "House Beautiful", image: { src: "", alt: "House Beautiful" } },
    { name: "Elle Decor", image: { src: "", alt: "Elle Decor" } },
    { name: "Dwell", image: { src: "", alt: "Dwell" } },
  ],
}

export function Logos1({ content = {}, classNames = {} }: LogosBlockProps) {
  // Merge content with defaults
  const { title = blockDefaults.title, logos = blockDefaults.logos } = content

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        {title && (
          <p
            className={cn(
              "text-muted-foreground mb-8 text-center text-sm",
              classNames.title
            )}
          >
            {title}
          </p>
        )}
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-8 md:gap-16",
            classNames.grid
          )}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className={cn(
                "text-muted-foreground/50 hover:text-primary text-lg font-semibold tracking-wider transition-colors md:text-xl",
                classNames.logo?.root
              )}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Logos1 as LogosServicePlants }
