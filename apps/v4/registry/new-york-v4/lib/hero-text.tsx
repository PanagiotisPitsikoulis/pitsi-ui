"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/registry/new-york-v4/lib/polymorphic"

// =============================================================================
// Types
// =============================================================================

export interface HeroTextClassNames {
  root?: string
  badge?: string
  title?: string
  description?: string
}

// =============================================================================
// Variants
// =============================================================================

const heroTextVariants = cva("", {
  variants: {
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
    size: {
      default: "",
      large: "",
    },
  },
  defaultVariants: {
    align: "left",
    size: "default",
  },
})

const heroBadgeVariants = cva(
  "text-sm font-semibold tracking-widest uppercase",
  {
    variants: {
      color: {
        brand: "text-brand",
        "brand-complementary": "text-brand-complementary",
        primary: "text-primary",
      },
      size: {
        default: "mb-4",
        large: "mb-6",
      },
    },
    defaultVariants: {
      color: "brand",
      size: "default",
    },
  }
)

const heroTitleVariants = cva("display leading-[1.1] tracking-tight", {
  variants: {
    size: {
      default: "text-4xl sm:text-5xl md:text-6xl",
      large: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const heroDescriptionVariants = cva("text-muted-foreground", {
  variants: {
    align: {
      center: "mx-auto max-w-md",
      left: "max-w-md",
      right: "ml-auto max-w-md",
    },
    size: {
      default: "mt-6 text-lg",
      large: "mt-8 text-lg md:text-xl",
    },
  },
  defaultVariants: {
    align: "left",
    size: "default",
  },
})

// =============================================================================
// Component
// =============================================================================

type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeroTextOwnProps extends VariantProps<typeof heroTextVariants> {
  /** Badge text */
  badge?: string
  /** Title text - supports \n for line breaks or array of lines */
  title: string | string[]
  /** Description text */
  description?: string
  /** Element to render title as */
  titleAs?: TitleElement
  /** Class names for sub-elements */
  classNames?: HeroTextClassNames
  /** Badge color variant */
  badgeColor?: "brand" | "brand-complementary" | "primary"
}

export type HeroTextProps<T extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<T, HeroTextOwnProps>

export const HeroText = React.forwardRef(
  <T extends React.ElementType = "div">(
    {
      as,
      badge,
      title,
      description,
      titleAs: TitleComponent = "h1",
      align,
      size,
      badgeColor = "brand",
      classNames,
      className,
      ...props
    }: HeroTextProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "div"

    // Convert title to array for consistent handling
    const titleLines = Array.isArray(title) ? title : title.split("\n")

    return (
      <Component
        ref={ref}
        className={cn(
          heroTextVariants({ align, size }),
          className,
          classNames?.root
        )}
        {...props}
      >
        {badge && (
          <p
            className={cn(
              heroBadgeVariants({ color: badgeColor, size }),
              classNames?.badge
            )}
          >
            {badge}
          </p>
        )}
        <TitleComponent
          className={cn(heroTitleVariants({ size }), classNames?.title)}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </TitleComponent>
        {description && (
          <p
            className={cn(
              heroDescriptionVariants({ align, size }),
              classNames?.description
            )}
          >
            {description}
          </p>
        )}
      </Component>
    )
  }
) as <T extends React.ElementType = "div">(
  props: HeroTextProps<T>
) => React.ReactElement | null

HeroText.displayName = "HeroText"

// Export variants for external use
export {
  heroTextVariants,
  heroBadgeVariants,
  heroTitleVariants,
  heroDescriptionVariants,
}
