"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import { ProgressiveBlur } from "@/registry/new-york-v4/ui/progressive-blur"
import { Separator } from "@/registry/new-york-v4/ui/separator"

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
      className={cn("group/collapsible relative md:-mx-1", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <div className="absolute top-1.5 right-9 z-10 flex items-center">
          <Button
            variant="default"
            size="sm"
            className="h-7 rounded-md px-2"
          >
            {isOpened ? "Collapse" : "Expand"}
          </Button>
          <Separator orientation="vertical" className="mx-1.5 !h-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        forceMount
        className="relative mt-6 overflow-hidden data-[state=closed]:max-h-64 [&>figure]:mt-0 [&>figure]:md:!mx-0"
      >
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger className="absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center rounded-b-lg group-data-[state=open]/collapsible:hidden">
        <ProgressiveBlur
          className="absolute inset-0 rounded-b-lg"
          direction="bottom"
          blurLayers={6}
          blurIntensity={1}
        />
        <Button variant="default" size="sm" className="relative z-10">
          {isOpened ? "Collapse" : "Expand"}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}
