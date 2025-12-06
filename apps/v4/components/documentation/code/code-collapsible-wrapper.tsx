"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn("group/collapsible relative mt-4 md:-mx-1", className)}
      {...props}
    >
      <CollapsibleContent
        forceMount
        className="bg-background relative overflow-hidden rounded-lg shadow-md data-[state=closed]:max-h-64 [&>figure]:mt-0 [&>figure]:md:!mx-0"
      >
        {children}
      </CollapsibleContent>
      <div className="absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center rounded-b-lg group-data-[state=open]/collapsible:hidden">
        <div className="from-background pointer-events-none absolute inset-0 rounded-b-lg bg-gradient-to-t to-transparent" />
        <CollapsibleTrigger asChild>
          <HeroButton size="sm" className="relative z-10">
            {isOpened ? "Collapse" : "Expand"}
          </HeroButton>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  )
}
