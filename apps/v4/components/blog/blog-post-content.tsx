import { ComponentType } from "react"
import { mdxComponents } from "@/mdx-components"

interface BlogPostContentProps {
  image?: string
  MDXContent: ComponentType<any>
}

export function BlogPostContent({ image, MDXContent }: BlogPostContentProps) {
  return (
    <>
      {image && (
        <img
          src={image}
          alt=""
          className="aspect-video w-full rounded-2xl object-cover shadow-sm"
        />
      )}

      <div className="prose prose-neutral dark:prose-invert [&_h2]:display [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_strong]:text-foreground mt-10 max-w-none [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:tracking-tight md:[&_h2]:text-2xl [&_p]:leading-relaxed">
        <MDXContent components={mdxComponents} />
      </div>
    </>
  )
}
