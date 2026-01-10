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

export interface BlockHeaderClassNames {
  root?: string
  badge?: string
  title?: string
  description?: string
}

export interface BlockHeaderContent {
  badge?: string
  title: string
  description?: string
}

// =============================================================================
// Variants
// =============================================================================

const blockHeaderVariants = cva("", {
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
    spacing: {
      default: "mb-20",
      compact: "mb-12",
      none: "",
    },
  },
  defaultVariants: {
    align: "center",
    size: "default",
    spacing: "default",
  },
})

const badgeVariants = cva("text-sm font-medium tracking-[0.3em] uppercase", {
  variants: {
    color: {
      brand: "text-brand",
      "brand-complementary": "text-brand-complementary",
      primary: "text-primary",
    },
    size: {
      default: "mb-2",
      large: "mb-4",
    },
  },
  defaultVariants: {
    color: "brand",
    size: "default",
  },
})

const titleVariants = cva("font-display text-foreground font-bold", {
  variants: {
    size: {
      default: "text-3xl md:text-5xl",
      large:
        "text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const descriptionVariants = cva("text-muted-foreground text-lg", {
  variants: {
    align: {
      center: "mx-auto max-w-2xl",
      left: "max-w-2xl",
      right: "ml-auto max-w-2xl",
    },
    size: {
      default: "mt-4",
      large: "mt-6 text-xl",
    },
  },
  defaultVariants: {
    align: "center",
    size: "default",
  },
})

// =============================================================================
// Component
// =============================================================================

type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface BlockHeaderOwnProps extends VariantProps<typeof blockHeaderVariants> {
  /** Content object for the header */
  content?: BlockHeaderContent
  /** Direct prop - badge text */
  badge?: string
  /** Direct prop - title text */
  title?: string
  /** Direct prop - description text */
  description?: string
  /** Element to render title as */
  titleAs?: TitleElement
  /** Class names for sub-elements */
  classNames?: BlockHeaderClassNames
  /** Badge color variant */
  badgeColor?: "brand" | "brand-complementary" | "primary"
}

export type BlockHeaderProps<T extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<T, BlockHeaderOwnProps>

export const BlockHeader = React.forwardRef(
  <T extends React.ElementType = "div">(
    {
      as,
      content,
      badge: badgeProp,
      title: titleProp,
      description: descriptionProp,
      titleAs: TitleComponent = "h2",
      align,
      size,
      spacing,
      badgeColor = "brand",
      classNames,
      className,
      ...props
    }: BlockHeaderProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "div"

    // Support both content object and direct props
    const badge = content?.badge ?? badgeProp
    const title = content?.title ?? titleProp
    const description = content?.description ?? descriptionProp

    if (!title) return null

    return (
      <Component
        ref={ref}
        className={cn(
          blockHeaderVariants({ align, size, spacing }),
          className,
          classNames?.root
        )}
        {...props}
      >
        {badge && (
          <p
            className={cn(
              badgeVariants({ color: badgeColor, size }),
              classNames?.badge
            )}
          >
            {badge}
          </p>
        )}
        <TitleComponent
          className={cn(titleVariants({ size }), classNames?.title)}
        >
          {title}
        </TitleComponent>
        {description && (
          <p
            className={cn(
              descriptionVariants({ align, size }),
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
  props: BlockHeaderProps<T>
) => React.ReactElement | null

BlockHeader.displayName = "BlockHeader"

// Export variants for external use
export {
  blockHeaderVariants,
  badgeVariants,
  titleVariants,
  descriptionVariants,
}
