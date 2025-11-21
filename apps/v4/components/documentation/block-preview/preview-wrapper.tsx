import React from "react"

export const BlockPreviewWrapper = ({
  children,
  id,
  height,
}: {
  children: React.ReactNode
  id: string
  height: number
}) => {
  return (
    <section
      id={id}
      className="border-foreground/[0.075] group mb-16 scroll-mt-6 border-b [--block-height:36rem] lg:[--block-height:var(--block-static-height)]"
      style={
        {
          "--block-static-height": `${height + 48}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  )
}
