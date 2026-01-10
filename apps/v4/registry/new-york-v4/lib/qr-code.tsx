"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { QRCodeSVG } from "qrcode.react"

import { cn } from "@/lib/utils"

// =============================================================================
// Types
// =============================================================================

export interface QRCodeClassNames {
  root?: string
  code?: string
  label?: string
  description?: string
}

// =============================================================================
// Variants
// =============================================================================

const qrCodeContainerVariants = cva(
  "bg-background flex flex-col items-center rounded-lg p-4",
  {
    variants: {
      variant: {
        default: "",
        card: "border border-border shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// =============================================================================
// Component
// =============================================================================

export interface QRCodeProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof qrCodeContainerVariants> {
  /** The URL or data to encode in the QR code */
  value: string
  /** Size of the QR code in pixels */
  size?: number
  /** Label text displayed below the QR code */
  label?: string
  /** Description text displayed below the label */
  description?: string
  /** Class names for sub-elements */
  classNames?: QRCodeClassNames
  /** Background color of the QR code */
  bgColor?: string
  /** Foreground color of the QR code */
  fgColor?: string
  /** Error correction level */
  level?: "L" | "M" | "Q" | "H"
  /** Include margin around the QR code */
  includeMargin?: boolean
}

export function QRCode({
  value,
  size = 96,
  label,
  description,
  variant,
  classNames,
  className,
  bgColor = "#ffffff",
  fgColor = "#000000",
  level = "M",
  includeMargin = false,
  ...props
}: QRCodeProps) {
  return (
    <div
      className={cn(
        qrCodeContainerVariants({ variant }),
        className,
        classNames?.root
      )}
      {...props}
    >
      <div className={cn("mb-2 overflow-hidden rounded", classNames?.code)}>
        <QRCodeSVG
          value={value}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
          level={level}
          includeMargin={includeMargin}
        />
      </div>
      {label && (
        <div
          className={cn(
            "text-foreground text-xs font-medium",
            classNames?.label
          )}
        >
          {label}
        </div>
      )}
      {description && (
        <div
          className={cn(
            "text-muted-foreground text-xs",
            classNames?.description
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}

QRCode.displayName = "QRCode"

export { qrCodeContainerVariants }
