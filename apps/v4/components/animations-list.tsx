import Link from "next/link"

import { PAGES_NEW } from "@/lib/docs"
import { source } from "@/lib/source"

export function AnimationsList() {
  const animations = source.pageTree.children.find(
    (page) => page.$id === "animations"
  )

  if (animations?.type !== "folder") {
    return
  }

  const list = animations.children.filter(
    (animation) => animation.type === "page"
  )

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
      {list.map((animation) => (
        <Link
          key={animation.$id}
          href={animation.url}
          className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {animation.name}
          {PAGES_NEW.includes(animation.url) && (
            <span
              className="flex size-2 rounded-full bg-blue-500"
              title="New"
            />
          )}
        </Link>
      ))}
    </div>
  )
}
