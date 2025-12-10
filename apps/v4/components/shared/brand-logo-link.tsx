import Link from "next/link"

import { Icons } from "@/components/shared/icons"

interface BrandLogoLinkProps {
  className?: string
}

export function BrandLogoLink({ className }: BrandLogoLinkProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 self-center font-medium"
    >
      <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
        <Icons.logo className="size-4" />
      </div>
      Pitsi UI
    </Link>
  )
}
