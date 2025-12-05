import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

const reviews = [
  {
    name: "Alex Chen",
    username: "@alexchen_dev",
    body: "pitsi/ui cut my development time in half. The blocks are so well designed I barely need to customize them.",
    img: "/avatars/01.jpg",
  },
  {
    name: "Sarah Miller",
    username: "@sarahmills",
    body: "Finally a component library that looks good out of the box. No more fighting with styles for hours.",
    img: "/avatars/02.jpg",
  },
  {
    name: "Marcus Johnson",
    username: "@marcusj_",
    body: "The animation components are incredible. Added scroll effects to my landing page in minutes.",
    img: "/avatars/03.jpg",
  },
  {
    name: "Emily Park",
    username: "@empark_ui",
    body: "Best investment I've made for my freelance business. Clients love the polished look.",
    img: "/avatars/04.jpg",
  },
  {
    name: "David Wilson",
    username: "@dwilsondev",
    body: "Switched from another UI library and never looked back. The DX is unmatched.",
    img: "/avatars/05.jpg",
  },
  {
    name: "Lisa Thompson",
    username: "@lisadev",
    body: "The MCP integration is a game changer. My AI assistant now knows exactly which components to use.",
    img: "/avatars/06.jpg",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
  name,
  username,
  body,
  img,
}: {
  name: string
  username: string
  body: string
  img: string
}) {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 shadow-2xs",
        "border-border bg-background"
      )}
    >
      <div className="flex flex-row items-center gap-2.5">
        <img
          className="size-9 shrink-0 rounded-full"
          src={img}
          alt={name}
          width={36}
          height={36}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-muted-foreground text-xs font-medium">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
        {body}
      </blockquote>
    </figure>
  )
}

export function ReviewsSection() {
  return (
    <div className="relative mx-auto -mt-10 flex w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden pb-10">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  )
}
