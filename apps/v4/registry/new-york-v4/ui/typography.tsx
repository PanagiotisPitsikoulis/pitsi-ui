import type React from "react"

import type { PolymorphicComponentProps } from "@/registry/new-york-v4/lib/polymorphic"
import { cn } from "@/registry/new-york-v4/lib/utils"

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
      fontSize: "var(--text-title-h1)",
      lineHeight: "var(--text-title-h1--line-height)",
      letterSpacing: "var(--text-title-h1--letter-spacing)",
      fontWeight: "var(--text-title-h1--font-weight)",
    },
  },
  h2: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--text-title-h2)",
      lineHeight: "var(--text-title-h2--line-height)",
      letterSpacing: "var(--text-title-h2--letter-spacing)",
      fontWeight: "var(--text-title-h2--font-weight)",
    },
  },
  h3: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--text-title-h3)",
      lineHeight: "var(--text-title-h3--line-height)",
      letterSpacing: "var(--text-title-h3--letter-spacing)",
      fontWeight: "var(--text-title-h3--font-weight)",
    },
  },
  h4: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--text-title-h4)",
      lineHeight: "var(--text-title-h4--line-height)",
      letterSpacing: "var(--text-title-h4--letter-spacing)",
      fontWeight: "var(--text-title-h4--font-weight)",
    },
  },
  h5: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--text-title-h5)",
      lineHeight: "var(--text-title-h5--line-height)",
      letterSpacing: "var(--text-title-h5--letter-spacing)",
      fontWeight: "var(--text-title-h5--font-weight)",
    },
  },
  h6: {
    className: "font-heading text-text-strength-900",
    style: {
      fontSize: "var(--text-title-h6)",
      lineHeight: "var(--text-title-h6--line-height)",
      letterSpacing: "var(--text-title-h6--letter-spacing)",
      fontWeight: "var(--text-title-h6--font-weight)",
    },
  },

  "label-xl": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--text-label-xl)",
      lineHeight: "var(--text-label-xl--line-height)",
      letterSpacing: "var(--text-label-xl--letter-spacing)",
      fontWeight: "var(--text-label-xl--font-weight)",
    },
  },
  "label-lg": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--text-label-lg)",
      lineHeight: "var(--text-label-lg--line-height)",
      letterSpacing: "var(--text-label-lg--letter-spacing)",
      fontWeight: "var(--text-label-lg--font-weight)",
    },
  },
  "label-md": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--text-label-md)",
      lineHeight: "var(--text-label-md--line-height)",
      letterSpacing: "var(--text-label-md--letter-spacing)",
      fontWeight: "var(--text-label-md--font-weight)",
    },
  },
  "label-sm": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--text-label-sm)",
      lineHeight: "var(--text-label-sm--line-height)",
      letterSpacing: "var(--text-label-sm--letter-spacing)",
      fontWeight: "var(--text-label-sm--font-weight)",
    },
  },
  "label-xs": {
    className: "font-body text-text-strength-900",
    style: {
      fontSize: "var(--text-label-xs)",
      lineHeight: "var(--text-label-xs--line-height)",
      letterSpacing: "var(--text-label-xs--letter-spacing)",
      fontWeight: "var(--text-label-xs--font-weight)",
    },
  },

  "paragraph-xl": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-xl)",
      lineHeight: "var(--text-paragraph-xl--line-height)",
      letterSpacing: "var(--text-paragraph-xl--letter-spacing)",
      fontWeight: "var(--text-paragraph-xl--font-weight)",
    },
  },
  "paragraph-lg": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-lg)",
      lineHeight: "var(--text-paragraph-lg--line-height)",
      letterSpacing: "var(--text-paragraph-lg--letter-spacing)",
      fontWeight: "var(--text-paragraph-lg--font-weight)",
    },
  },
  "paragraph-md": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-md)",
      lineHeight: "var(--text-paragraph-md--line-height)",
      letterSpacing: "var(--text-paragraph-md--letter-spacing)",
      fontWeight: "var(--text-paragraph-md--font-weight)",
    },
  },
  "paragraph-sm": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-sm)",
      lineHeight: "var(--text-paragraph-sm--line-height)",
      letterSpacing: "var(--text-paragraph-sm--letter-spacing)",
      fontWeight: "var(--text-paragraph-sm--font-weight)",
    },
  },
  "paragraph-xs": {
    className: "font-body text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-xs)",
      lineHeight: "var(--text-paragraph-xs--line-height)",
      letterSpacing: "var(--text-paragraph-xs--letter-spacing)",
      fontWeight: "var(--text-paragraph-xs--font-weight)",
    },
  },

  "subheading-md": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--text-subheading-md)",
      lineHeight: "var(--text-subheading-md--line-height)",
      letterSpacing: "var(--text-subheading-md--letter-spacing)",
      fontWeight: "var(--text-subheading-md--font-weight)",
    },
  },
  "subheading-sm": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--text-subheading-sm)",
      lineHeight: "var(--text-subheading-sm--line-height)",
      letterSpacing: "var(--text-subheading-sm--letter-spacing)",
      fontWeight: "var(--text-subheading-sm--font-weight)",
    },
  },
  "subheading-xs": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--text-subheading-xs)",
      lineHeight: "var(--text-subheading-xs--line-height)",
      letterSpacing: "var(--text-subheading-xs--letter-spacing)",
      fontWeight: "var(--text-subheading-xs--font-weight)",
    },
  },
  "subheading-2xs": {
    className: "font-body uppercase text-text-strength-300",
    style: {
      fontSize: "var(--text-subheading-2xs)",
      lineHeight: "var(--text-subheading-2xs--line-height)",
      letterSpacing: "var(--text-subheading-2xs--letter-spacing)",
      fontWeight: "var(--text-subheading-2xs--font-weight)",
    },
  },

  "doc-label": {
    className: "font-accent text-text-strength-900",
    style: {
      fontSize: "var(--text-label-lg)",
      lineHeight: "var(--text-label-lg--line-height)",
      letterSpacing: "var(--text-label-lg--letter-spacing)",
      fontWeight: "var(--text-label-lg--font-weight)",
    },
  },
  "doc-paragraph": {
    className: "font-accent text-text-strength-600",
    style: {
      fontSize: "var(--text-paragraph-lg)",
      lineHeight: "var(--text-paragraph-lg--line-height)",
      letterSpacing: "var(--text-paragraph-lg--letter-spacing)",
      fontWeight: "var(--text-paragraph-lg--font-weight)",
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
