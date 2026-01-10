"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

const previewCardVariants = cva(
  "group/preview-card relative flex scroll-mt-20 flex-col gap-4",
  {
    variants: {
      size: {
        default: "",
        compact: "gap-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const previewContainerVariants = cva("overflow-hidden shadow-sm dark:border", {
  variants: {
    rounded: {
      default: "rounded-2xl",
      lg: "rounded-3xl",
    },
  },
  defaultVariants: {
    rounded: "default",
  },
})

const previewImageVariants = cva(
  "preview relative flex w-full items-center justify-center overflow-hidden",
  {
    variants: {
      aspectRatio: {
        landscape: "aspect-[16/10]",
        square: "aspect-square",
        portrait: "aspect-[3/4]",
        wide: "aspect-[4/3]",
      },
      objectFit: {
        cover: "[&_img]:object-cover [&_img]:object-top",
        contain: "[&_img]:object-contain",
      },
    },
    defaultVariants: {
      aspectRatio: "landscape",
      objectFit: "cover",
    },
  }
)

// ============================================================================
// PreviewCard Root
// ============================================================================

export interface PreviewCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof previewCardVariants> {
  asChild?: boolean
}

const PreviewCard = React.forwardRef<HTMLDivElement, PreviewCardProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(previewCardVariants({ size, className }))}
      {...props}
    />
  )
)
PreviewCard.displayName = "PreviewCard"

// ============================================================================
// PreviewCardImage
// ============================================================================

export interface PreviewCardImageProps
  extends
    VariantProps<typeof previewContainerVariants>,
    VariantProps<typeof previewImageVariants> {
  href?: string
  lightSrc: string
  darkSrc?: string
  alt: string
  badges?: React.ReactNode
  className?: string
  imageClassName?: string
}

const PreviewCardImage = React.forwardRef<
  HTMLDivElement,
  PreviewCardImageProps
>(
  (
    {
      href,
      lightSrc,
      darkSrc,
      alt,
      badges,
      className,
      imageClassName,
      rounded,
      aspectRatio,
      objectFit,
    },
    ref
  ) => {
    const content = (
      <div
        ref={ref}
        className={cn(previewContainerVariants({ rounded }), className)}
      >
        <div className="bg-background relative">
          {badges && (
            <div className="opacity-0 transition-opacity duration-200 group-hover/preview-card:opacity-100">
              {badges}
            </div>
          )}
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className={cn(previewImageVariants({ aspectRatio, objectFit }))}
            >
              <div className="bg-page relative h-full w-full overflow-hidden">
                <Image
                  src={lightSrc}
                  alt={alt}
                  fill
                  className={cn("dark:hidden", imageClassName)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                {darkSrc && (
                  <Image
                    src={darkSrc}
                    alt={alt}
                    fill
                    className={cn("hidden dark:block", imageClassName)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    if (href) {
      return <Link href={href}>{content}</Link>
    }

    return content
  }
)
PreviewCardImage.displayName = "PreviewCardImage"

// ============================================================================
// PreviewCardContent
// ============================================================================

export interface PreviewCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const PreviewCardContent = React.forwardRef<
  HTMLDivElement,
  PreviewCardContentProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-0.5 px-2", className)}
    {...props}
  />
))
PreviewCardContent.displayName = "PreviewCardContent"

// ============================================================================
// PreviewCardHeader
// ============================================================================

export interface PreviewCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const PreviewCardHeader = React.forwardRef<
  HTMLDivElement,
  PreviewCardHeaderProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between gap-2", className)}
    {...props}
  />
))
PreviewCardHeader.displayName = "PreviewCardHeader"

// ============================================================================
// PreviewCardTitle
// ============================================================================

export interface PreviewCardTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  href?: string
}

const PreviewCardTitle = React.forwardRef<
  HTMLSpanElement,
  PreviewCardTitleProps
>(({ className, href, children, ...props }, ref) => {
  const title = (
    <span
      ref={ref}
      className={cn(
        "group-hover/preview-card:text-primary text-base font-medium transition-colors group-hover/preview-card:underline",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )

  if (href) {
    return <Link href={href}>{title}</Link>
  }

  return title
})
PreviewCardTitle.displayName = "PreviewCardTitle"

// ============================================================================
// PreviewCardDescription
// ============================================================================

export interface PreviewCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  lineClamp?: 1 | 2 | 3
}

const PreviewCardDescription = React.forwardRef<
  HTMLParagraphElement,
  PreviewCardDescriptionProps
>(({ className, lineClamp = 2, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-muted-foreground text-sm",
      lineClamp === 1 && "line-clamp-1",
      lineClamp === 2 && "line-clamp-2",
      lineClamp === 3 && "line-clamp-3",
      className
    )}
    {...props}
  />
))
PreviewCardDescription.displayName = "PreviewCardDescription"

// ============================================================================
// PreviewCardActions
// ============================================================================

export interface PreviewCardActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const PreviewCardActions = React.forwardRef<
  HTMLDivElement,
  PreviewCardActionsProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
))
PreviewCardActions.displayName = "PreviewCardActions"

// ============================================================================
// PreviewCardMenu
// ============================================================================

export interface PreviewCardMenuProps {
  children: React.ReactNode
  trigger?: React.ReactNode
  align?: "start" | "center" | "end"
}

function PreviewCardMenu({
  children,
  trigger,
  align = "end",
}: PreviewCardMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors">
        {trigger || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>{children}</DropdownMenuContent>
    </DropdownMenu>
  )
}
PreviewCardMenu.displayName = "PreviewCardMenu"

// Re-export DropdownMenuItem for convenience
export { DropdownMenuItem as PreviewCardMenuItem }

export {
  PreviewCard,
  PreviewCardImage,
  PreviewCardContent,
  PreviewCardHeader,
  PreviewCardTitle,
  PreviewCardDescription,
  PreviewCardActions,
  PreviewCardMenu,
  previewCardVariants,
  previewContainerVariants,
  previewImageVariants,
}
