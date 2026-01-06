import { ReactNode } from "react"

import { BackLink } from "@/components/navigation/back-link"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface ContentPageSidebarProps {
  backHref?: string
  backLabel?: string
  label: string
  title: string
  description: string
  icon: ReactNode
}

export function ContentPageSidebar({
  backHref = "/",
  backLabel = "Back to home",
  label,
  title,
  description,
  icon,
}: ContentPageSidebarProps) {
  return (
    <>
      <BackLink href={backHref}>{backLabel}</BackLink>
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        {label}
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h1 className="display text-4xl leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <Spacer size="lg" sizeMobile="md" />
      <p className="text-muted-foreground text-base md:text-lg">
        {description}
      </p>
      <Spacer size="6xl" sizeMobile="2xl" />
      <div className="flex justify-center">{icon}</div>
    </>
  )
}
