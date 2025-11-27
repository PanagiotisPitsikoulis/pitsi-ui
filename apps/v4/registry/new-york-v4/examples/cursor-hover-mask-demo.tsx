"use client"

import { CursorHoverMask } from "@/registry/new-york-v4/animations/cursor-hover-mask/cursor-hover-mask"

export default function CursorHoverMaskDemo() {
  return (
    <CursorHoverMask
      maskContent={
        <p className="text-4xl leading-tight font-medium md:text-6xl md:leading-tight">
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      }
      bodyClassName="text-[#afa18f]"
    >
      <p className="text-4xl leading-tight font-medium md:text-6xl md:leading-tight">
        I'm a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
        product designer with strong focus on producing high quality & impactful
        digital experience.
      </p>
    </CursorHoverMask>
  )
}
