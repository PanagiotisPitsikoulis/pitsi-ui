import type React from "react"

import type { PolymorphicComponentProps } from "@/lib/ui/polymorphic"
import { cn } from "@/lib/utils"

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label-xl"
  | "label-lg"
  | "label-md"
  | "label-sm"
  | "label-xs"
  | "paragraph-xl"
  | "paragraph-lg"
  | "paragraph-md"
  | "paragraph-sm"
  | "paragraph-xs"
  | "subheading-md"
  | "subheading-sm"
  | "subheading-xs"
  | "subheading-2xs"
  | "doc-label"
  | "doc-paragraph"

export type TypographyOwnProps = {
  variant?: TypographyVariant
}

export const defaultTypographyElements: Record<
  TypographyVariant,
  React.ElementType
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  "label-xl": "span",
  "label-lg": "span",
  "label-md": "span",
  "label-sm": "span",
  "label-xs": "span",
  "paragraph-xl": "p",
  "paragraph-lg": "p",
  "paragraph-md": "p",
  "paragraph-sm": "p",
  "paragraph-xs": "p",
  "subheading-md": "span",
  "subheading-sm": "span",
  "subheading-xs": "span",
  "subheading-2xs": "span",
  "doc-label": "span",
  "doc-paragraph": "p",
}

export const typographyVariantStyles: Record<
  TypographyVariant,
  { className: string; style: React.CSSProperties }
> = {
  h1: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h1)",
      lineHeight: "var(--line-height-title-h1)",
      letterSpacing: "var(--letter-spacing-title-h1)",
      fontWeight: "var(--font-weight-title-h1)",
    },
  },
  h2: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h2)",
      lineHeight: "var(--line-height-title-h2)",
      letterSpacing: "var(--letter-spacing-title-h2)",
      fontWeight: "var(--font-weight-title-h2)",
    },
  },
  h3: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h3)",
      lineHeight: "var(--line-height-title-h3)",
      letterSpacing: "var(--letter-spacing-title-h3)",
      fontWeight: "var(--font-weight-title-h3)",
    },
  },
  h4: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h4)",
      lineHeight: "var(--line-height-title-h4)",
      letterSpacing: "var(--letter-spacing-title-h4)",
      fontWeight: "var(--font-weight-title-h4)",
    },
  },
  h5: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h5)",
      lineHeight: "var(--line-height-title-h5)",
      letterSpacing: "var(--letter-spacing-title-h5)",
      fontWeight: "var(--font-weight-title-h5)",
    },
  },
  h6: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--font-size-title-h6)",
      lineHeight: "var(--line-height-title-h6)",
      letterSpacing: "var(--letter-spacing-title-h6)",
      fontWeight: "var(--font-weight-title-h6)",
    },
  },

  "label-xl": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--font-size-label-xl)",
      lineHeight: "var(--line-height-label-xl)",
      letterSpacing: "var(--letter-spacing-label-xl)",
      fontWeight: "var(--font-weight-label-xl)",
    },
  },
  "label-lg": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--font-size-label-lg)",
      lineHeight: "var(--line-height-label-lg)",
      letterSpacing: "var(--letter-spacing-label-lg)",
      fontWeight: "var(--font-weight-label-lg)",
    },
  },
  "label-md": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--font-size-label-md)",
      lineHeight: "var(--line-height-label-md)",
      letterSpacing: "var(--letter-spacing-label-md)",
      fontWeight: "var(--font-weight-label-md)",
    },
  },
  "label-sm": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--font-size-label-sm)",
      lineHeight: "var(--line-height-label-sm)",
      letterSpacing: "var(--letter-spacing-label-sm)",
      fontWeight: "var(--font-weight-label-sm)",
    },
  },
  "label-xs": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--font-size-label-xs)",
      lineHeight: "var(--line-height-label-xs)",
      letterSpacing: "var(--letter-spacing-label-xs)",
      fontWeight: "var(--font-weight-label-xs)",
    },
  },

  "paragraph-xl": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--font-size-paragraph-xl)",
      lineHeight: "var(--line-height-paragraph-xl)",
      letterSpacing: "var(--letter-spacing-paragraph-xl)",
      fontWeight: "var(--font-weight-paragraph-xl)",
    },
  },
  "paragraph-lg": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--font-size-paragraph-lg)",
      lineHeight: "var(--line-height-paragraph-lg)",
      letterSpacing: "var(--letter-spacing-paragraph-lg)",
      fontWeight: "var(--font-weight-paragraph-lg)",
    },
  },
  "paragraph-md": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--font-size-paragraph-md)",
      lineHeight: "var(--line-height-paragraph-md)",
      letterSpacing: "var(--letter-spacing-paragraph-md)",
      fontWeight: "var(--font-weight-paragraph-md)",
    },
  },
  "paragraph-sm": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--font-size-paragraph-sm)",
      lineHeight: "var(--line-height-paragraph-sm)",
      letterSpacing: "var(--letter-spacing-paragraph-sm)",
      fontWeight: "var(--font-weight-paragraph-sm)",
    },
  },
  "paragraph-xs": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--font-size-paragraph-xs)",
      lineHeight: "var(--line-height-paragraph-xs)",
      letterSpacing: "var(--letter-spacing-paragraph-xs)",
      fontWeight: "var(--font-weight-paragraph-xs)",
    },
  },

  "subheading-md": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--font-size-subheading-md)",
      lineHeight: "var(--line-height-subheading-md)",
      letterSpacing: "var(--letter-spacing-subheading-md)",
      fontWeight: "var(--font-weight-subheading-md)",
    },
  },
  "subheading-sm": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--font-size-subheading-sm)",
      lineHeight: "var(--line-height-subheading-sm)",
      letterSpacing: "var(--letter-spacing-subheading-sm)",
      fontWeight: "var(--font-weight-subheading-sm)",
    },
  },
  "subheading-xs": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--font-size-subheading-xs)",
      lineHeight: "var(--line-height-subheading-xs)",
      letterSpacing: "var(--letter-spacing-subheading-xs)",
      fontWeight: "var(--font-weight-subheading-xs)",
    },
  },
  "subheading-2xs": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--font-size-subheading-2xs)",
      lineHeight: "var(--line-height-subheading-2xs)",
      letterSpacing: "var(--letter-spacing-subheading-2xs)",
      fontWeight: "var(--font-weight-subheading-2xs)",
    },
  },

  "doc-label": {
    className: "font-accent text-text-strength-900",
    style: {
      fontSize: "var(--font-size-doc-label)",
      lineHeight: "var(--line-height-doc-label)",
      letterSpacing: "var(--letter-spacing-doc-label)",
      fontWeight: "var(--font-weight-doc-label)",
    },
  },
  "doc-paragraph": {
    className: "font-accent text-text-strength-600",
    style: {
      fontSize: "var(--font-size-doc-paragraph)",
      lineHeight: "var(--line-height-doc-paragraph)",
      letterSpacing: "var(--letter-spacing-doc-paragraph)",
      fontWeight: "var(--font-weight-doc-paragraph)",
    },
  },
}

/**
 * Typography component with polymorphic rendering and variant-based styling.
 *
 * @example
 * // Hero Header
 * <Typography variant="h1">
 *   Build faster with our design system
 * </Typography>
 *
 * @example
 * // Card Title
 * <Typography variant="h3">
 *   Feature Name
 * </Typography>
 *
 * @example
 * // Card Description
 * <Typography variant="paragraph-md">
 *   A brief description of the feature that explains its main benefit.
 * </Typography>
 *
 * @example
 * // Section Header with Subheading
 * <>
 *   <Typography variant="subheading-sm">Features</Typography>
 *   <Typography variant="h2">Everything you need</Typography>
 * </>
 *
 * @example
 * // Form Label
 * <Typography variant="label-sm" as="label" htmlFor="email">
 *   Email Address
 * </Typography>
 *
 * @example
 * // Button Text
 * <button>
 *   <Typography variant="label-md" as="span">
 *     Get Started
 *   </Typography>
 * </button>
 *
 * @example
 * // Pricing Card
 * <>
 *   <Typography variant="subheading-xs">Pro Plan</Typography>
 *   <Typography variant="h2">$29<Typography variant="paragraph-sm" as="span">/month</Typography></Typography>
 *   <Typography variant="paragraph-sm">Perfect for growing teams</Typography>
 * </>
 *
 * @example
 * // Feature List Item
 * <div>
 *   <Typography variant="label-md">Fast Performance</Typography>
 *   <Typography variant="paragraph-sm">Lightning-fast load times for optimal user experience</Typography>
 * </div>
 *
 * @example
 * // Footer Link
 * <Typography variant="paragraph-xs" as="a" href="/about">
 *   About Us
 * </Typography>
 *
 * @example
 * // Badge/Tag
 * <Typography variant="label-xs" as="span">
 *   New
 * </Typography>
 *
 * @example
 * // Article/Documentation
 * <>
 *   <Typography variant="doc-label">Introduction</Typography>
 *   <Typography variant="doc-paragraph">
 *     This guide will walk you through the basics of our component library.
 *   </Typography>
 * </>
 *
 * @example
 * // Testimonial
 * <>
 *   <Typography variant="paragraph-lg">
 *     "This product has transformed how we work. Highly recommended!"
 *   </Typography>
 *   <Typography variant="label-sm">— Sarah Johnson, CEO</Typography>
 * </>
 *
 * @example
 * // Stats Display
 * <>
 *   <Typography variant="h1">10,000+</Typography>
 *   <Typography variant="subheading-sm">Active Users</Typography>
 * </>
 */
export default function Typography<T extends React.ElementType = "p">({
  as,
  variant = "paragraph-md",
  className,
  style,
  ...props
}: PolymorphicComponentProps<T, TypographyOwnProps>) {
  const Component = as || defaultTypographyElements[variant]
  const variantStyle = typographyVariantStyles[variant]

  return (
    <Component
      className={cn(variantStyle.className, className)}
      style={{ ...variantStyle.style, ...style }}
      {...props}
    />
  )
}
