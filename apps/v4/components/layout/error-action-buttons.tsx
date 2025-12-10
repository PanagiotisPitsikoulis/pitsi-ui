import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york-v4/ui/button"

interface ErrorActionButtonsProps {
  primaryLabel: string
  primaryHref?: string
  primaryOnClick?: () => void
  secondaryLabel: string
  secondaryHref: string
}

export function ErrorActionButtons({
  primaryLabel,
  primaryHref,
  primaryOnClick,
  secondaryLabel,
  secondaryHref,
}: ErrorActionButtonsProps) {
  return (
    <>
      {primaryHref ? (
        <Link
          href={primaryHref}
          className={cn(buttonVariants({ size: "lg" }), "min-w-[160px]")}
        >
          {primaryLabel}
        </Link>
      ) : (
        <button
          onClick={primaryOnClick}
          className={cn(buttonVariants({ size: "lg" }), "min-w-[160px]")}
        >
          {primaryLabel}
        </button>
      )}
      <Link
        href={secondaryHref}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "min-w-[160px]"
        )}
      >
        {secondaryLabel}
      </Link>
    </>
  )
}
