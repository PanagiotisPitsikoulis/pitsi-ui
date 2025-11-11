"use client"

import * as React from "react"

interface BlockDisplayProps {
  name: string
  styleName: string
}

export function BlockDisplay({ name, styleName }: BlockDisplayProps) {
  return (
    <div
      id={name}
      className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
    >
      {/* Mobile view */}
      <div className="flex flex-col gap-2 lg:hidden">
        <div className="flex items-center gap-2 px-2">
          <div className="line-clamp-1 text-sm font-medium">{name}</div>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border">
          <iframe
            src={`/view/${styleName}/${name}`}
            className="size-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="relative grid w-full gap-4" style={{ height: "930px" }}>
          <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
          <div className="bg-background relative z-10 aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-xl">
            <iframe
              src={`/view/${styleName}/${name}`}
              height={930}
              loading="lazy"
              className="bg-background no-scrollbar relative z-20 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
