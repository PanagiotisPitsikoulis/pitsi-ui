import { Bookmark } from "lucide-react"

import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardDescription,
  PreviewCardHeader,
  PreviewCardImage,
  PreviewCardMenu,
  PreviewCardMenuItem,
  PreviewCardTitle,
} from "@/registry/new-york-v4/ui/preview-card"

export default function PreviewCardDemo() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
      {/* Block-style card (16:10, cover) */}
      <PreviewCard>
        <PreviewCardImage
          href="#"
          lightSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          darkSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt="Hero block preview"
          aspectRatio="landscape"
          objectFit="cover"
          rounded="default"
        />
        <PreviewCardContent>
          <PreviewCardHeader>
            <PreviewCardTitle href="#">Hero 1</PreviewCardTitle>
            <PreviewCardMenu>
              <PreviewCardMenuItem className="gap-2">
                <Bookmark className="size-4" />
                Save this block
              </PreviewCardMenuItem>
            </PreviewCardMenu>
          </PreviewCardHeader>
          <PreviewCardDescription lineClamp={1}>
            A stunning hero section with gradient background and call-to-action
            buttons
          </PreviewCardDescription>
        </PreviewCardContent>
      </PreviewCard>

      {/* Component-style card (4:3, contain) */}
      <PreviewCard>
        <PreviewCardImage
          href="#"
          lightSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
          darkSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
          alt="Button component preview"
          aspectRatio="wide"
          objectFit="contain"
          rounded="lg"
        />
        <PreviewCardContent>
          <PreviewCardHeader>
            <PreviewCardTitle href="#">Button</PreviewCardTitle>
            <PreviewCardMenu>
              <PreviewCardMenuItem className="gap-2">
                <Bookmark className="size-4" />
                Save
              </PreviewCardMenuItem>
            </PreviewCardMenu>
          </PreviewCardHeader>
          <PreviewCardDescription>
            A versatile button component with multiple variants and sizes
          </PreviewCardDescription>
        </PreviewCardContent>
      </PreviewCard>
    </div>
  )
}
