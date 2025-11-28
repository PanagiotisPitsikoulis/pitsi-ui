"use client"

import { HoverExpandGallery } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"

const images = [
  {
    src: "https://skiper-ui.com/images/x.com/13.jpeg",
    alt: "Illustrations by my fav AarzooAly",
    label: "# 23",
  },
  {
    src: "https://skiper-ui.com/images/x.com/32.jpeg",
    alt: "Illustrations by ©AarzooAly",
    label: "# 23",
  },
  {
    src: "https://skiper-ui.com/images/x.com/20.jpeg",
    alt: "Illustrations by ©AarzooAly",
    label: "# 23",
  },
  {
    src: "https://skiper-ui.com/images/x.com/21.jpeg",
    alt: "Illustrations by ©AarzooAly",
    label: "# 23",
  },
  {
    src: "https://skiper-ui.com/images/x.com/19.jpeg",
    alt: "Illustrations by ©AarzooAly",
    label: "# 23",
  },
  {
    src: "https://skiper-ui.com/images/x.com/1.jpeg",
    alt: "Illustrations by ©AarzooAly",
    label: "# 23",
  },
]

export default function ScrollExpandDemo() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[#f5f4f3] py-12">
      <HoverExpandGallery images={images} direction="horizontal" />
      <HoverExpandGallery images={images} direction="vertical" />
    </div>
  )
}
